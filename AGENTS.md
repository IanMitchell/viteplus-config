# Repository guidance

## Purpose

This package publishes shared Vite+, Oxlint, Oxfmt, and TypeScript configuration.
Changes can affect every consuming repository, even when the TypeScript API remains
unchanged.

## Commands

- Install dependencies with `vp install --frozen-lockfile` in CI or `bun install`
  locally.
- Run checks with `vp check` and build package artifacts with `vp pack`.

Do not commit `dist`, TypeScript fixture output, or `.codex/upgrade-*` files.

## Dependency policy

- Keep `vite-plus` pinned to the same exact stable version in `devDependencies` and
  `peerDependencies`.
- Keep the TypeScript development dependency pinned to an exact stable version. It
  defines the compiler used to verify the exported presets; it is not a runtime
  dependency for consumers.
- Regenerate `bun.lock` whenever either pin changes.
- Do not enable new lint rules or adopt new formatter behavior solely because it is
  available. Explain the benefit, false-positive risk, and consumer impact first.

## Semver policy

- Patch: dependency refreshes and bug fixes that preserve consumer-visible behavior.
- Minor while `0.x`: consumer-visible or breaking changes, including newly enabled or
  stricter lint rules, formatter output changes, tightened TypeScript options, removed
  exports, or narrower peer compatibility.
- Minor after `1.0.0`: backward-compatible exported features or presets.
- Major after `1.0.0`: consumer-visible breaking changes.

When responding to an upgrade PR comment, reassess the package version after applying
the requested change. Never lower an already selected bump. Explain the final semver
decision in the PR response.

## Upgrade PRs

Dependabot owns mechanical dependency and lockfile updates. After a Vite+ or
TypeScript update merges, the toolchain analysis workflow opens a separate draft PR
for the package version and configuration review. Keep optional configuration changes
out of that initial draft. Apply recommendations only in response to an explicit
maintainer instruction such as `@codex enable ...`.

For each applied recommendation:

1. Update the relevant configuration.
2. Run `vp check && vp pack`.
3. Update the package version if the semver policy requires a larger bump.
4. Summarize files changed, verification results, and semver impact.

## Code Review Rules

- Flag mismatched or ranged Vite+ dev/peer dependency versions. Both must be the same
  exact stable version.
- Flag rule, formatter, or TypeScript preset changes whose consumer impact is not
  reflected in the package version.
- Flag exported presets that are not exercised by the TypeScript fixtures or package
  export verification.
- Leave formatting, lint, build, and package-shape enforcement to CI when CI already
  reports the failure.
