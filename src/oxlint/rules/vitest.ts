import type { OxlintConfig } from "vite-plus/lint";

export const vitestConfig: OxlintConfig = {
	plugins: ["vitest"],
	rules: {
		"vitest/consistent-each-for": [
			"error",
			{
				describe: "each",
				it: "each",
				suite: "each",
				test: "each",
			},
		],
		"vitest/consistent-test-filename": [
			"error",
			{ allTestPattern: "tests", pattern: ".*\\.test\\.tsx?$" },
		],
		"vitest/consistent-test-it": ["error", { fn: "test", withinDescribe: "test" }],
		"vitest/consistent-vitest-vi": ["error", { fn: "vitest" }],
		"vitest/expect-expect": "error",
		"vitest/hoisted-apis-on-top": "error",
		// Trust the developer.
		"vitest/max-expects": "off",
		// Trust the developer.
		"vitest/max-nested-describe": "off",
		// Some alias method names are intentionally preferred for readability.
		"vitest/no-alias-methods": "off",
		"vitest/no-commented-out-tests": "error",
		"vitest/no-conditional-expect": "error",
		"vitest/no-conditional-in-test": "error",
		"vitest/no-conditional-tests": "error",
		"vitest/no-disabled-tests": "error",
		"vitest/no-duplicate-hooks": "error",
		"vitest/no-focused-tests": "error",
		// Trust the developer.
		"vitest/no-hooks": "off",
		"vitest/no-identical-title": "error",
		"vitest/no-import-node-test": "error",
		// Vitest globals are not configured by this shared config.
		"vitest/no-importing-vitest-globals": "off",
		"vitest/no-interpolation-in-snapshots": "error",
		"vitest/no-large-snapshots": "error",
		// Mock imports remain available for projects that use them.
		"vitest/no-mocks-import": "off",
		// Project-specific.
		"vitest/no-restricted-matchers": "off",
		// Project-specific.
		"vitest/no-restricted-vi-methods": "off",
		"vitest/no-standalone-expect": "error",
		"vitest/no-test-prefixes": "error",
		"vitest/no-test-return-statement": "error",
		"vitest/no-unneeded-async-expect-function": "error",
		"vitest/padding-around-after-all-blocks": "error",
		"vitest/padding-around-test-blocks": "error",
		"vitest/prefer-called-exactly-once-with": "error",
		"vitest/prefer-called-once": "error",
		// Superseded by `vitest/prefer-called-once`.
		"vitest/prefer-called-times": "off",
		// Trust the developer.
		"vitest/prefer-called-with": "off",
		"vitest/prefer-comparison-matcher": "error",
		"vitest/prefer-describe-function-title": "error",
		"vitest/prefer-each": "error",
		"vitest/prefer-equality-matcher": "error",
		"vitest/prefer-expect-assertions": [
			"error",
			{
				onlyFunctionsWithAsyncKeyword: true,
				onlyFunctionsWithExpectInCallback: true,
				onlyFunctionsWithExpectInLoop: true,
			},
		],
		"vitest/prefer-expect-resolves": "error",
		// The matcher is harder to read and write than standard assertions.
		"vitest/prefer-expect-type-of": "off",
		"vitest/prefer-hooks-in-order": "error",
		"vitest/prefer-hooks-on-top": "error",
		"vitest/prefer-import-in-mock": "error",
		// Vite+ exposes Vitest APIs from `vite-plus/test`, but this rule fixes imports to `vitest`.
		"vitest/prefer-importing-vitest-globals": "off",
		// Trust the developer.
		"vitest/prefer-lowercase-title": "off",
		"vitest/prefer-mock-promise-shorthand": "error",
		"vitest/prefer-mock-return-shorthand": "error",
		"vitest/prefer-snapshot-hint": ["error", "always"],
		"vitest/prefer-spy-on": "error",
		"vitest/prefer-strict-boolean-matchers": "error",
		"vitest/prefer-strict-equal": "error",
		// Trust the developer.
		"vitest/prefer-to-be": "off",
		// Trust the developer.
		"vitest/prefer-to-be-falsy": "off",
		"vitest/prefer-to-be-object": "error",
		// Trust the developer.
		"vitest/prefer-to-be-truthy": "off",
		"vitest/prefer-to-contain": "error",
		"vitest/prefer-to-have-been-called-times": "error",
		"vitest/prefer-to-have-length": "error",
		"vitest/prefer-todo": "error",
		"vitest/require-awaited-expect-poll": "error",
		// Oxlint currently misidentifies ordinary source files as tests for this rule.
		"vitest/require-hook": "off",
		"vitest/require-local-test-context-for-concurrent-snapshots": "error",
		"vitest/require-mock-type-parameters": "error",
		// Vitest's default 5-second timeout is sufficient.
		"vitest/require-test-timeout": "off",
		"vitest/require-to-throw-message": "error",
		// Trust the developer.
		"vitest/require-top-level-describe": "off",
		// Handled by TypeScript.
		"vitest/valid-describe-callback": "off",
		"vitest/valid-expect": "error",
		"vitest/valid-expect-in-promise": "error",
		"vitest/valid-title": "error",
		"vitest/warn-todo": "error",
	},
	overrides: [
		{
			files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
			rules: {
				// Apply the hook restriction only when the filename unambiguously identifies a test.
				"vitest/require-hook": "error",
			},
		},
	],
};
