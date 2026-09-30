import { mergeConfig } from "vite-plus";
import { config } from "./src/index.ts";

export default mergeConfig(config, {
	lint: {
		// These files are compiled as TypeScript consumer fixtures rather than linted as tests.
		ignorePatterns: ["tests/typescript-presets/**"],
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
