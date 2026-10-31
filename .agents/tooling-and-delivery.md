# Tooling and Delivery

## Setup and Commands

Use the Node version in `.nvmrc` (currently `24.21.0`) and install with
`bun install --frozen-lockfile`, matching CI. Keep `package.json` and `bun.lock`
consistent; do not create another lockfile.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the existing build |
| `npm run lint` | Run Oxlint |
| `npm run format:test` / `npm run format:write` | Check/apply formatting |
| `npm run vitest` / `npm run vitest:watch` | Run/watch tests |
| `npm run storybook` / `npm run build-storybook` | Run/build Storybook |

Use two-space indentation, single quotes, semicolons, and Oxfmt's 100-character width
and ES5 trailing commas. Follow Oxlint naming/import rules. Format changed files
without rewriting unrelated code.

## Tests and CI

Unit discovery matches `**/*.test.ts` and uses jsdom; `*.test.tsx` is not discovered.
Storybook runs headless Chromium through Playwright. No coverage threshold is configured.

A focused example is `npm run vitest -- src/utils/sum.test.ts`. If npm consumes
flags in PowerShell, invoke `.\node_modules\.bin\vitest.cmd run --project=unit-test`
directly. Check the Node version before changing tests to address runtime errors.

PR CI runs formatting, lint, tests, and build. Husky runs lint, formatting writes,
and tests; inspect its changes. Documentation-only work needs link/reference checks
and `git diff --check`, not application tests.

## Configuration

Keep configuration in the relevant tool files. Client-side `VITE_` values are public;
never put secrets in them. The current interceptor has placeholder URLs; document
actual configuration instead of assuming an env variable is consumed. Keep credentials
and generated artifacts out of commits.
