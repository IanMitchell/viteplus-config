import { writeFile } from "node:fs/promises";
import { inc } from "semver";
import type { InferOutput } from "valibot";
import {
	maxLength,
	nonEmpty,
	object,
	parse,
	parseJson,
	picklist,
	pipe,
	string,
	transform,
	trim,
} from "valibot";
import { getEnvironmentVariable, writeWorkflowOutputs } from "./lib/github-actions.ts";
import { readPackageJson, repositoryRootUrl, writePackageJson } from "./lib/package.ts";
import { parseStableVersion } from "./lib/semver.ts";

const bodyUrl = new URL(".codex/upgrade-pr-body.md", repositoryRootUrl);

const bumpSchema = picklist(["major", "minor", "patch"], "Invalid semver bump");
type Bump = InferOutput<typeof bumpSchema>;

function bumpVersion(version: string, bump: Bump): string {
	const current = parseStableVersion(version, "Package version");

	if (current.major === 0 && bump === "major") {
		throw new Error(
			"The repository semver policy uses a minor bump for breaking changes while 0.x",
		);
	}

	const next = inc(current, bump);
	if (next === null) {
		throw new Error(`Could not apply a ${bump} bump to package version ${version}`);
	}

	return next;
}

const upgradeAnalysis = parse(
	pipe(
		string("CODEX_RESULT must be a string"),
		trim(),
		// Remove optional Markdown JSON fences before parsing the Codex response.
		transform((value) => value.replace(/^```(?:json)?\s*/iu, "").replace(/\s*```$/u, "")),
		parseJson(undefined, "Codex analysis must be valid JSON"),
		object({
			bump: bumpSchema,
			pr_body: pipe(
				string(),
				nonEmpty("Codex analysis must include a non-empty pr_body"),
				maxLength(60_000, "Codex PR body is too large for GitHub"),
			),
		}),
	),
	getEnvironmentVariable("CODEX_RESULT"),
);

const packageJson = await readPackageJson();
const previousVersion = packageJson.version;
packageJson.version = bumpVersion(previousVersion, upgradeAnalysis.bump);

await writePackageJson(packageJson);

const footer = [
	"",
	"---",
	"",
	"This draft PR was prepared after a toolchain dependency update merged into `main`.",
	`Package version: \`${previousVersion}\` → \`${packageJson.version}\` (${upgradeAnalysis.bump}).`,
	"Apply selected recommendations with an explicit `@codex` comment.",
	"",
].join("\n");
await writeFile(bodyUrl, `${upgradeAnalysis.pr_body.trim()}${footer}`);

await writeWorkflowOutputs({
	package_version: packageJson.version,
	semver_bump: upgradeAnalysis.bump,
});

console.log(
	`Applied ${upgradeAnalysis.bump} version bump: ${previousVersion} -> ${packageJson.version}.`,
);
