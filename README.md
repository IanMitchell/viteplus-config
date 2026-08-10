# @0x57/viteplus-config

Shared Vite+, Oxlint, Oxfmt, and TypeScript configuration used by [0x57](https://0x57.studio) projects.

## Usage

```sh
bun add -D @0x57/viteplus-config vite-plus
```

```ts
import { config } from "@0x57/viteplus-config";
import { mergeConfig } from "vite-plus";

export default mergeConfig(config, {
	staged: {
		"*": "vp check --fix",
	},
	run: {
		cache: true,
		tasks: {
			build: {
				command: "vpr -r build",
			},
		},
	},
	fmt: {
		sortTailwindcss: {
			stylesheet: "./app/globals.css",
		},
	},
	lint: {
		overrides: [
			{
				files: ["**/*.test.ts"],
				rules: {
					"vitest/no-conditional-expect": "off",
				},
			},
		],
	},
});
```

`mergeConfig` recursively merges objects and appends arrays, with the project configuration
taking precedence over the shared defaults.

The formatter and linter configs can be imported independently from
`@0x57/viteplus-config/oxfmt` and `@0x57/viteplus-config/oxlint`. Next.js-specific lint
rules are available from `@0x57/viteplus-config/oxlint/next`.

### Next.js lint rules

Merge the Next.js lint preset into the shared configuration for a Next.js project:

```ts
import { config } from "@0x57/viteplus-config";
import { config as nextLint } from "@0x57/viteplus-config/oxlint/next";
import { mergeConfig } from "vite-plus";

export default mergeConfig(config, {
	lint: nextLint,
});
```

### Oxlint and Oxfmt without Vite+

Install the native Oxlint and Oxfmt CLIs alongside this package:

```sh
bun add -D @0x57/viteplus-config oxlint oxfmt
```

Create `oxlint.config.ts` and extend the shared lint configuration:

```ts
import { config } from "@0x57/viteplus-config/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
	extends: [config],
});
```

Create `oxfmt.config.ts` and export the shared formatter configuration:

```ts
import { config } from "@0x57/viteplus-config/oxfmt";
import { defineConfig } from "oxfmt";

export default defineConfig(config);
```

Point the native CLIs at those files in `package.json`:

```json
{
	"scripts": {
		"format": "oxfmt --config oxfmt.config.ts .",
		"format:check": "oxfmt --config oxfmt.config.ts --check .",
		"lint": "oxlint --config oxlint.config.ts ."
	}
}
```

These commands use Oxlint and Oxfmt directly; a `vite.config.ts` and the Vite+ CLI are not
needed.

Extend a TypeScript preset from the `typescript` subpath:

```json
{
	"extends": "@0x57/viteplus-config/typescript/library.json"
}
```

## Codebase Assumptions

Projects use ECMAScript modules, prefer named exports, and include file extensions on relative
TypeScript imports.

React projects use React Compiler. The lint configuration reports compiler bailouts and leaves
compiler-managed JSX allocation checks to the compiler.

### Environment validation

Direct `process.env` access is restricted to files named `environment.ts`. These modules are
expected to define and validate the application's environment with `createEnv` from
`@t3-oss/env-core` or `@t3-oss/env-nextjs`, passing the runtime environment through that
validation boundary. Other modules should import the validated `env` export instead of reading
`process.env` directly.

## Development

Install dependencies and run the complete consumer-facing verification suite:

```sh
vp install --frozen-lockfile
vp test
vp check
vp pack
```

Verification runs the tests, checks formatting, lint and type diagnostics, then builds the
package.
