import { readFile } from "node:fs/promises";
import type { InferOutput } from "valibot";
import { looseObject, parse, parseJson, pipe, record, string } from "valibot";

export const repositoryRootUrl = new URL("../../", import.meta.url);
export const packageJsonUrl = new URL("package.json", repositoryRootUrl);

const packageJsonSchema = pipe(
	string(),
	parseJson(undefined, "package.json must contain valid JSON"),
	looseObject({
		devDependencies: record(string(), string()),
		peerDependencies: record(string(), string()),
		version: string("package.json must contain a string version"),
	}),
);

export type Dependencies = Record<string, string>;
export type PackageJson = InferOutput<typeof packageJsonSchema>;

export function parsePackageJson(text: string): PackageJson {
	return parse(packageJsonSchema, text);
}

export async function readPackageJson(): Promise<PackageJson> {
	return parsePackageJson(await readFile(packageJsonUrl, "utf8"));
}
