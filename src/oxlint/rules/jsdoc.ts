import type { OxlintConfig } from "vite-plus/lint";

export const jsdocConfig: OxlintConfig = {
	plugins: ["jsdoc"],
	rules: {
		"jsdoc/check-access": "error",
		"jsdoc/check-property-names": "error",
		"jsdoc/check-tag-names": ["error", { typed: true }],
		"jsdoc/empty-tags": "error",
		"jsdoc/implements-on-classes": "error",
		"jsdoc/no-blank-blocks": "error",
		"jsdoc/no-defaults": "error",
		"jsdoc/require-param": "error",
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		// Handled by TypeScript.
		"jsdoc/require-param-type": "off",
		"jsdoc/require-property": "error",
		"jsdoc/require-property-description": "error",
		"jsdoc/require-property-name": "error",
		// Handled by TypeScript.
		"jsdoc/require-property-type": "off",
		"jsdoc/require-returns": "error",
		"jsdoc/require-returns-description": "error",
		// Handled by TypeScript.
		"jsdoc/require-returns-type": "off",
		// Error details are represented with `better-result` instead of thrown values.
		"jsdoc/require-throws-description": "off",
		// Error details are represented with `better-result` instead of thrown values.
		"jsdoc/require-throws-type": "off",
		"jsdoc/require-yields": "error",
		"jsdoc/require-yields-description": "error",
		// Handled by TypeScript.
		"jsdoc/require-yields-type": "off",
	},
};
