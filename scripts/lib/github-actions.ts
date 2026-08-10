import { appendFile } from "node:fs/promises";

export function getEnvironmentVariable(name: string): string {
	const value = process.env[name];

	if (!value) {
		throw new Error(`${name} must be set`);
	}

	return value;
}

export async function writeWorkflowOutputs(outputs: Record<string, string>): Promise<void> {
	const contents = Object.entries(outputs)
		.map(([name, value]) => `${name}=${value}`)
		.join("\n");

	await appendFile(getEnvironmentVariable("GITHUB_OUTPUT"), `${contents}\n`);
}
