import { $ } from "bun";
import { getEnvironmentVariable, writeWorkflowOutputs } from "./lib/github-actions.ts";
import type { PackageJson } from "./lib/package.ts";
import { parsePackageJson, readPackageJson, repositoryRootUrl } from "./lib/package.ts";
import { parseStableVersion } from "./lib/semver.ts";

async function readPreviousPackageJson(beforeRef: string): Promise<null | PackageJson> {
	let text: string;
	try {
		text = await $`git -C ${repositoryRootUrl.pathname} show ${`${beforeRef}:package.json`}`
			.quiet()
			.text();
	} catch {
		return null;
	}
	return parsePackageJson(text);
}

function getDependencyVersion(
	packageJson: PackageJson,
	name: "typescript" | "vite-plus",
	label: string,
): string {
	return parseStableVersion(packageJson.devDependencies[name], `${label} devDependencies.${name}`)
		.version;
}

function getVersionOutputs(current: PackageJson, previous: PackageJson) {
	return {
		typescript_current: getDependencyVersion(previous, "typescript", "Previous"),
		typescript_target: getDependencyVersion(current, "typescript", "Current"),
		vite_plus_current: getDependencyVersion(previous, "vite-plus", "Previous"),
		vite_plus_target: getDependencyVersion(current, "vite-plus", "Current"),
	};
}

async function main(): Promise<void> {
	const previousPackageJson = await readPreviousPackageJson(getEnvironmentVariable("BEFORE_REF"));

	if (previousPackageJson === null) {
		await writeWorkflowOutputs({ changed: "false" });
		console.log("The previous revision has no package.json; skipping analysis.");
		return;
	}

	const currentPackageJson = await readPackageJson();
	const versions = getVersionOutputs(currentPackageJson, previousPackageJson);

	const upgrades: string[] = [];
	if (versions.vite_plus_current !== versions.vite_plus_target) {
		upgrades.push(`Vite+ to ${versions.vite_plus_target}`);
	}
	if (versions.typescript_current !== versions.typescript_target) {
		upgrades.push(`TypeScript to ${versions.typescript_target}`);
	}

	if (upgrades.length === 0) {
		await writeWorkflowOutputs({ changed: "false", ...versions });
		console.log("Neither vite-plus nor TypeScript changed; no analysis is required.");
		return;
	}

	await writeWorkflowOutputs({
		branch: `codex/toolchain-upgrade-${getEnvironmentVariable("AFTER_REF")}`,
		changed: "true",
		title: `Update ${upgrades.join(" and ")}`,
		...versions,
	});

	console.log(
		`Detected vite-plus ${versions.vite_plus_current} -> ${versions.vite_plus_target} and TypeScript ${versions.typescript_current} -> ${versions.typescript_target}.`,
	);
}

await main();
