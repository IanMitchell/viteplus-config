import type { OxlintConfig } from "vite-plus/lint";

export const nodeConfig: OxlintConfig = {
	plugins: ["node"],
	rules: {
		// Handled by TypeScript.
		"node/callback-return": "off",
		// The shared config targets ESM.
		"node/exports-style": "off",
		// The shared config targets ESM.
		"node/global-require": "off",
		// Modern promise-based APIs do not use callback error parameters.
		"node/handle-callback-err": "off",
		// The shared config targets ESM.
		"node/no-exports-assign": "off",
		// The shared config targets ESM and does not use `require`.
		"node/no-mixed-requires": "error",
		// The shared config targets ESM.
		"node/no-new-require": "off",
		// The shared config targets ESM.
		"node/no-path-concat": "off",
		"node/no-process-env": "error",
		// Trust the developer.
		"node/no-sync": "off",
		// The shared config targets ESM.
		"node/no-top-level-await": "off",
	},
	overrides: [
		{
			files: ["**/environment.ts"],
			rules: {
				// Environment modules are the validated `process.env` boundary for T3 Env.
				"node/no-process-env": "off",
			},
		},
	],
};
