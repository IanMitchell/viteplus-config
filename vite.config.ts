import { mergeConfig } from "vite-plus";
import { config } from "./src/index.ts";

export default mergeConfig(config, {
	lint: {
		// These files are compiled as TypeScript consumer fixtures rather than linted as tests.
		ignorePatterns: ["tests/typescript-presets/**"],
		overrides: [
			{
				files: ["scripts/**/*.ts"],
				rules: {
					"eslint/no-console": "off",
				},
			},
			{
				files: ["scripts/lib/github-actions.ts"],
				rules: {
					// This helper validates the GitHub Actions environment variables it reads.
					"node/no-process-env": "off",
				},
			},
		],
	},
	pack: {
		entry: {
			"index": "src/index.ts",
			"oxfmt/index": "src/oxfmt/index.ts",
			"oxlint/index": "src/oxlint/index.ts",
			"oxlint/next": "src/oxlint/rules/next.ts",
		},
		dts: true,
		format: ["esm"],
		platform: "neutral",
		sourcemap: true,
	},
});
