import type { SemVer } from "semver";
import { parse as parseSemver } from "semver";
import { parse, pipe, string, transform } from "valibot";

export function parseStableVersion(value: unknown, label: string): SemVer {
	const normalizedInput = parse(
		pipe(
			string(`${label} must be an exact stable version`),
			transform((input) => input.replace(/^=?v?/u, "")),
		),
		value,
	);

	const version = parseSemver(normalizedInput);

	if (version === null || version.version !== normalizedInput || version.prerelease.length > 0) {
		throw new Error(`${label} must be an exact stable version, received ${String(value)}`);
	}

	return version;
}
