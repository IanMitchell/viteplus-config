import type { OxlintConfig } from "vite-plus/lint";

export const importConfig: OxlintConfig = {
	plugins: ["import"],
	rules: {
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"import/default": "error",
		"import/export": "error",
		// Trust the developer.
		"import/exports-last": "off",
		"import/extensions": ["error", "always", { ignorePackages: true }],
		"import/first": "error",
		// Trust the developer.
		"import/group-exports": "off",
		// No shared dependency-count limit has been established.
		"import/max-dependencies": "off",
		// Handled by TypeScript.
		"import/named": "off",
		// Handled by TypeScript.
		"import/namespace": "off",
		"import/newline-after-import": "error",
		"import/no-absolute-path": "error",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": "error",
		"import/no-commonjs": "error",
		// Trust the developer.
		"import/no-cycle": "off",
		"import/no-default-export": "error",
		"import/no-duplicates": ["error"],
		"import/no-dynamic-require": "error",
		"import/no-empty-named-blocks": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-named-default": "error",
		// Named exports are preferred.
		"import/no-named-export": "off",
		"import/no-namespace": "error",
		// Projects may need Node.js core modules.
		"import/no-nodejs-modules": "off",
		// Trust the developer.
		"import/no-relative-parent-imports": "off",
		"import/no-self-import": "error",
		// Side-effect imports are needed for setup and registration modules.
		"import/no-unassigned-import": "off",
		// The shared config does not target webpack-specific syntax.
		"import/no-webpack-loader-syntax": "off",
		// Named exports are preferred.
		"import/prefer-default-export": "off",
		"import/unambiguous": "error",
	},
	overrides: [
		{
			files: ["drizzle.config.ts", "vite.config.ts"],
			rules: {
				// Configuration files conventionally use default exports.
				"import/no-default-export": "off",
			},
		},
	],
};
