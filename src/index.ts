import type { UserConfig } from "vite-plus";
import { defineConfig } from "vite-plus";
import { config as fmt } from "./oxfmt/index.ts";
import { config as lint } from "./oxlint/index.ts";

export const config: UserConfig = defineConfig({
	fmt,
	lint,
});
