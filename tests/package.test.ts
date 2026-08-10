import { expect, test } from "vitest";
import { readPackageJson } from "../scripts/lib/package.ts";
import { parseStableVersion } from "../scripts/lib/semver.ts";

test("vite-plus dev and peer dependency pins match", async () => {
	expect.assertions(1);

	const packageJson = await readPackageJson();
	const devVersion = parseStableVersion(
		packageJson.devDependencies["vite-plus"],
		"devDependencies.vite-plus",
	).version;
	const peerVersion = parseStableVersion(
		packageJson.peerDependencies["vite-plus"],
		"peerDependencies.vite-plus",
	).version;

	expect(peerVersion).toBe(devVersion);
});
