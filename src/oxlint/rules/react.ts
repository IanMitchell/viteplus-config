import type { OxlintConfig } from "vite-plus/lint";

export const reactConfig: OxlintConfig = {
	plugins: ["react"],
	rules: {
		"react/button-has-type": "error",
		"react/checked-requires-onchange-or-readonly": "error",
		"react/display-name": "error",
		"react/exhaustive-deps": "error",
		// Components may legitimately expose project-specific props.
		"react/forbid-component-props": "off",
		// Project-specific.
		"react/forbid-dom-props": "off",
		// Project-specific.
		"react/forbid-elements": "off",
		"react/forward-ref-uses-ref": "error",
		"react/function-component-definition": "error",
		"react/hook-use-state": "error",
		"react/iframe-missing-sandbox": "error",
		// No shared JSX boolean-value style is enforced.
		"react/jsx-boolean-value": "off",
		"react/jsx-curly-brace-presence": ["error", { propElementValues: "always" }],
		// Handled by TypeScript.
		"react/jsx-filename-extension": "off",
		"react/jsx-fragments": ["error", "element"],
		"react/jsx-handler-names": "error",
		"react/jsx-key": "error",
		// No shared JSX nesting-depth limit has been established.
		"react/jsx-max-depth": "off",
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-constructed-context-values": "error",
		"react/jsx-no-duplicate-props": "error",
		// Literal JSX content is allowed.
		"react/jsx-no-literals": "off",
		"react/jsx-no-script-url": "error",
		"react/jsx-no-target-blank": "error",
		// Handled by TypeScript.
		"react/jsx-no-undef": "off",
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-props-no-spread-multi": "error",
		// TypeScript covers unsafe spreads, and library interop often requires them.
		"react/jsx-props-no-spreading": "off",
		"react/no-array-index-key": "error",
		"react/no-children-prop": "error",
		"react/no-clone-element": "error",
		"react/no-danger": "error",
		"react/no-danger-with-children": "error",
		// The shared config favors function-based code over classes.
		"react/no-did-mount-set-state": "off",
		// The shared config favors function-based code over classes.
		"react/no-did-update-set-state": "off",
		// The shared config favors function-based code over classes.
		"react/no-direct-mutation-state": "off",
		// React 19 no longer supports `findDOMNode`.
		"react/no-find-dom-node": "off",
		// The shared config favors function-based code over classes.
		"react/no-is-mounted": "off",
		// No shared component-count limit has been established.
		"react/no-multi-comp": "off",
		"react/no-namespace": "error",
		"react/no-object-type-as-default-prop": "error",
		"react/no-react-children": "error",
		// The shared config favors function-based code over classes.
		"react/no-redundant-should-component-update": "off",
		// React 19 no longer supports render return values.
		"react/no-render-return-value": "off",
		// The shared config favors function-based code over classes.
		"react/no-set-state": "off",
		// React 19 no longer supports string refs.
		"react/no-string-refs": "off",
		"react/no-this-in-sfc": "error",
		"react/no-unescaped-entities": "error",
		"react/no-unknown-property": ["error", { requireDataLowercase: true }],
		// The shared config favors function-based code over classes.
		"react/no-unsafe": "off",
		"react/no-unstable-nested-components": "error",
		// The shared config favors function-based code over classes.
		"react/no-will-update-set-state": "off",
		"react/only-export-components": [
			"error",
			{
				allowConstantExport: true,
				allowExportNames: [
					/**
					 * Next.js specific names
					 */
					// Metadata (layout.js, page.js)
					"metadata",
					"generateMetadata",
					// Viewport (layout.js, page.js)
					"viewport",
					"generateViewport",
					// Static generation (page.js, layout.js, route.js)
					"generateStaticParams",
					// Route Segment Config (layout.js, page.js, route.js)
					"dynamic",
					"dynamicParams",
					"revalidate",
					"fetchCache",
					"runtime",
					"preferredRegion",
					"maxDuration",
				],
			},
		],
		// The shared config favors function-based code over classes.
		"react/prefer-es6-class": "off",
		"react/prefer-function-component": "error",
		"react/react-compiler": ["error", { reportAllBailouts: true }],
		// Modern JSX transforms do not require React in scope.
		"react/react-in-jsx-scope": "off",
		// The shared config favors function-based code over classes.
		"react/require-render-return": "off",
		"react/rules-of-hooks": "error",
		"react/self-closing-comp": "error",
		// The shared config favors function-based code over classes.
		"react/state-in-constructor": "off",
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "error",
	},
};
