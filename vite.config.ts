import { mergeConfig } from "vite-plus";
import { config } from "./src/index.ts";

export default mergeConfig(config, {
	lint: {
		overrides: [
			{
				files: ["scripts/**/*.ts"],
				rules: {
					"eslint/no-console": "off",
					"node/no-process-env": "off",
					"typescript/strict-boolean-expressions": "off",
					"vitest/require-hook": "off",
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
