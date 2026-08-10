import type { OxlintConfig } from "vite-plus/lint";

export const promiseConfig: OxlintConfig = {
	plugins: ["promise"],
	rules: {
		"promise/always-return": "error",
		// Other promise rules provide sufficient coverage without banning construction.
		"promise/avoid-new": "off",
		"promise/catch-or-return": "error",
		"promise/no-callback-in-promise": "error",
		"promise/no-multiple-resolved": "error",
		"promise/no-nesting": "error",
		"promise/no-new-statics": "error",
		"promise/no-promise-in-callback": "error",
		"promise/no-return-in-finally": "error",
		"promise/no-return-wrap": "error",
		"promise/param-names": "error",
		"promise/prefer-await-to-callbacks": "error",
		"promise/prefer-await-to-then": "error",
		"promise/prefer-catch": "error",
		"promise/spec-only": "error",
		// Handled by TypeScript.
		"promise/valid-params": "off",
	},
};
