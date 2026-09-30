import type { OxlintConfig } from "vite-plus/lint";

export const eslintConfig: OxlintConfig = {
	plugins: ["eslint"],
	rules: {
		// Getters and setters do not always need to be paired.
		"accessor-pairs": "off",
		"array-callback-return": ["error", { checkForEach: true, allowImplicit: true }],
		"arrow-body-style": "error",
		"block-scoped-var": "error",
		// Capitalized comments are preferred but not required.
		"capitalized-comments": "off",
		"class-methods-use-this": "error",
		// No shared complexity limit has been established.
		"complexity": "off",
		// Handled by TypeScript.
		"constructor-super": "off",
		"curly": "error",
		// Type-aware exhaustiveness rules are preferred.
		"default-case": "off",
		"default-case-last": "error",
		"default-param-last": "error",
		"eqeqeq": ["error", "always", { null: "ignore" }],
		"for-direction": "error",
		// Function-name mismatches are uncommon in modern TypeScript.
		"func-name-matching": "off",
		"func-names": "error",
		"func-style": [
			"error",
			"declaration",
			{ allowArrowFunctions: true, overrides: { namedExports: "declaration" } },
		],
		// Handled by TypeScript.
		"getter-return": "off",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		// Trust the developer.
		"id-denylist": "off",
		// Too restrictive for a general-purpose shared config.
		"id-length": "off",
		// Trust the developer.
		"id-match": "off",
		// Too restrictive for a general-purpose shared config.
		"init-declarations": "off",
		"logical-assignment-operators": ["error", "always", { enforceForIfStatements: true }],
		// No shared class-count limit has been established.
		"max-classes-per-file": "off",
		// No shared nesting-depth limit has been established.
		"max-depth": "off",
		// No shared file-length limit has been established.
		"max-lines": "off",
		// No shared function-length limit has been established.
		"max-lines-per-function": "off",
		// No shared callback-depth limit has been established.
		"max-nested-callbacks": "off",
		// No shared parameter-count limit has been established.
		"max-params": "off",
		// No shared statement-count limit has been established.
		"max-statements": "off",
		"new-cap": [
			"error",
			{ newIsCap: true, capIsNew: true, properties: true, capIsNewExceptions: ["TaggedError"] },
		],
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		// Trust the developer.
		"no-bitwise": "off",
		// Strict mode already forbids caller and callee access.
		"no-caller": "off",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-console": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-constructor-return": "error",
		// Trust the developer.
		"no-continue": "off",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		// Handled by TypeScript.
		"no-dupe-class-members": "off",
		"no-dupe-else-if": "error",
		// Handled by TypeScript.
		"no-dupe-keys": "off",
		"no-duplicate-case": "error",
		// Superseded by `import/no-duplicates`.
		"no-duplicate-imports": "off",
		"no-else-return": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		// Trust the developer.
		"no-eq-null": "off",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-fallthrough": ["error", { allowEmptyCase: true }],
		// Handled by TypeScript.
		"no-func-assign": "off",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		// The shared config also supports one-off scripts.
		"no-implicit-globals": "off",
		// Superseded by `typescript/no-implied-eval`.
		"no-implied-eval": "off",
		"no-import-assign": "error",
		// Trust the developer.
		"no-inline-comments": "off",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		// Iterator mutation is exceptionally uncommon in modern code.
		"no-iterator": "off",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		// Too restrictive for a general-purpose shared config.
		"no-magic-numbers": "off",
		"no-misleading-character-class": "error",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		// Too restrictive for a general-purpose shared config.
		"no-negated-condition": "off",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		// Handled by TypeScript.
		"no-new-native-nonconstructor": "off",
		"no-new-wrappers": "error",
		// Legacy non-octal decimal escapes are exceptionally uncommon.
		"no-nonoctal-decimal-escape": "off",
		// Handled by TypeScript.
		"no-obj-calls": "off",
		"no-object-constructor": "error",
		"no-param-reassign": "error",
		// The formatter's required semicolons prevent ambiguous increments.
		"no-plusplus": "off",
		"no-promise-executor-return": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		// Project-specific.
		"no-restricted-exports": "off",
		// Global restrictions are project-specific.
		"no-restricted-globals": "off",
		// Import restrictions are project-specific.
		"no-restricted-imports": "off",
		// Project-specific.
		"no-restricted-properties": "off",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		// Handled by TypeScript.
		"no-setter-return": "off",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		// Trust the developer.
		"no-ternary": "off",
		// Handled by TypeScript.
		"no-this-before-super": "off",
		// Deprecated.
		"no-throw-literal": "off",
		"no-unassigned-vars": "error",
		// Handled by TypeScript.
		"no-undef": "off",
		// Superseded by `no-void`.
		"no-undefined": "off",
		// Trust the developer.
		"no-underscore-dangle": "off",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-use-before-define": "error",
		"no-useless-assignment": "error",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": ["error", { allowAsStatement: true }],
		// Trust the developer.
		"no-warning-comments": "off",
		// Handled by TypeScript.
		"no-with": "off",
		"object-shorthand": ["error", "always"],
		"one-var": ["error", "never"],
		"operator-assignment": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		// Trust the developer.
		"prefer-exponentiation-operator": "off",
		"prefer-named-capture-group": "error",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		// Superseded by `typescript/prefer-promise-reject-errors`.
		"prefer-promise-reject-errors": "off",
		// Trust the developer.
		"prefer-regex-literals": "off",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"preserve-caught-error": "error",
		"radix": "error",
		// Superseded by the type-aware `typescript/require-await` rule.
		"require-await": "off",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		// Handled by oxfmt.
		"sort-imports": "off",
		// Trust the developer.
		"sort-keys": "off",
		// Trust the developer.
		"sort-vars": "off",
		"symbol-description": "error",
		"unicode-bom": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		// Trust the developer.
		"vars-on-top": "off",
		"yoda": ["error", "never", { exceptRange: true }],
	},
};
