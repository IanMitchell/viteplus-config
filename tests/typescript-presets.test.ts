import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { expect, test } from "vite-plus/test";

const presets = ["base", "browser", "library", "nextjs"] as const;
const typescriptCliPath = fileURLToPath(
	new URL("../node_modules/typescript/bin/tsc", import.meta.url),
);

test.each(presets)("the %s TypeScript preset type-checks a consumer fixture", (preset) => {
	const tsconfigPath = fileURLToPath(
		new URL(`./typescript-presets/${preset}/tsconfig.json`, import.meta.url),
	);
	const result = spawnSync(
		process.execPath,
		[typescriptCliPath, "--project", tsconfigPath, "--noEmit", "--pretty", "false"],
		{ encoding: "utf8" },
	);

	expect({ status: result.status, stderr: result.stderr, stdout: result.stdout }).toStrictEqual({
		status: 0,
		stderr: "",
		stdout: "",
	});
});
