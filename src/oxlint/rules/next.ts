import type { OxlintConfig } from "vite-plus/lint";

export const config: OxlintConfig = {
	plugins: ["nextjs"],
	rules: {
		"nextjs/google-font-display": "error",
		"nextjs/google-font-preconnect": "error",
		"nextjs/inline-script-id": "error",
		"nextjs/next-script-for-ga": "error",
		"nextjs/no-assign-module-variable": "error",
		"nextjs/no-async-client-component": "error",
		// This restriction is specific to the Pages Router document structure.
		"nextjs/no-before-interactive-script-outside-document": "off",
		"nextjs/no-css-tags": "error",
		// This restriction is specific to the Pages Router.
		"nextjs/no-document-import-in-page": "off",
		// This restriction is specific to the Pages Router document structure.
		"nextjs/no-duplicate-head": "off",
		"nextjs/no-head-element": "error",
		// This restriction is specific to the Pages Router document structure.
		"nextjs/no-head-import-in-document": "off",
		"nextjs/no-html-link-for-pages": "error",
		"nextjs/no-img-element": "error",
		// This restriction is specific to the Pages Router document structure.
		"nextjs/no-page-custom-font": "off",
		"nextjs/no-script-component-in-head": "error",
		// This restriction is specific to the Pages Router document structure.
		"nextjs/no-styled-jsx-in-document": "off",
		"nextjs/no-sync-scripts": "error",
		"nextjs/no-title-in-document-head": "error",
		// This rule only covers legacy Pages Router data-fetching function names.
		"nextjs/no-typos": "off",
		"nextjs/no-unwanted-polyfillio": "error",
	},
};
