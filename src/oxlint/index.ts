import type { OxlintConfig } from "vite-plus/lint";
import { eslintConfig } from "./rules/eslint.ts";
import { importConfig } from "./rules/import.ts";
import { jsdocConfig } from "./rules/jsdoc.ts";
import { jsxA11yConfig } from "./rules/jsx-a11y.ts";
import { nodeConfig } from "./rules/node.ts";
import { oxcConfig } from "./rules/oxc.ts";
import { promiseConfig } from "./rules/promise.ts";
import { reactPerfConfig } from "./rules/react-perf.ts";
import { reactConfig } from "./rules/react.ts";
import { typescriptConfig } from "./rules/typescript.ts";
import { unicornConfig } from "./rules/unicorn.ts";
import { vitestConfig } from "./rules/vitest.ts";

const pluginConfigs: OxlintConfig[] = [
	eslintConfig,
	importConfig,
	jsdocConfig,
	jsxA11yConfig,
	nodeConfig,
	oxcConfig,
	promiseConfig,
	reactConfig,
	reactPerfConfig,
	typescriptConfig,
	unicornConfig,
	vitestConfig,
];

const rules: NonNullable<OxlintConfig["rules"]> = {};

for (const pluginConfig of pluginConfigs) {
	Object.assign(rules, pluginConfig.rules);
}

export const config: OxlintConfig = {
	ignorePatterns: [".agents/skills/**"],
	plugins: pluginConfigs.flatMap((pluginConfig) => pluginConfig.plugins ?? []),
	options: {
		typeAware: true,
		typeCheck: true,
	},
	rules,
	overrides: pluginConfigs.flatMap((pluginConfig) => pluginConfig.overrides ?? []),
};

export { eslintConfig } from "./rules/eslint.ts";
export { importConfig } from "./rules/import.ts";
export { jsdocConfig } from "./rules/jsdoc.ts";
export { jsxA11yConfig } from "./rules/jsx-a11y.ts";
export { nodeConfig } from "./rules/node.ts";
export { oxcConfig } from "./rules/oxc.ts";
export { promiseConfig } from "./rules/promise.ts";
export { reactPerfConfig } from "./rules/react-perf.ts";
export { reactConfig } from "./rules/react.ts";
export { typescriptConfig } from "./rules/typescript.ts";
export { unicornConfig } from "./rules/unicorn.ts";
export { vitestConfig } from "./rules/vitest.ts";
