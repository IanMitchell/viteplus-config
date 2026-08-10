import type { OxlintConfig } from "vite-plus/lint";

export const reactPerfConfig: OxlintConfig = {
	plugins: ["react-perf"],
	rules: {
		// Handled by React Compiler.
		"react-perf/jsx-no-jsx-as-prop": "off",
		"react-perf/jsx-no-new-array-as-prop": "error",
		// Handled by React Compiler.
		"react-perf/jsx-no-new-function-as-prop": "off",
		// Handled by React Compiler.
		"react-perf/jsx-no-new-object-as-prop": "off",
	},
};
