# React + TypeScript Application

A Vite application using React, TypeScript, React Router, TanStack Query, and
Tailwind CSS. Keep feature code direct and functions small.

## Setup

Use the Node version in [.nvmrc](.nvmrc), then run:

```sh
bun install --frozen-lockfile
npm run dev
```

## Structure and Practices

- `src/app/`: providers, routes, application root, and one stable QueryClient.
- `src/features/`: business features with requests, keys, and query hooks.
- `src/lib/`: shared Axios instance and class-name helper.
- `src/utils/`: general utilities and colocated tests.
- `src/assets/` and `public/`: imported and directly served assets.

Keep query keys in `services/queries.keys.ts` and concrete `useQuery` /
`useMutation` hooks in `services/queries.ts`. A short `api.ts` may hold endpoint
calls. The existing [profile feature](src/features/profile/README.md) uses
`query.key.ts` for its keys. Avoid generic detail builders and query factories.

Return `response.data` from requests. Keep server data in TanStack Query and drafts
local. Invalidate affected keys after writes; add optimistic updates only when useful
and reversible. Render loading, error, empty, refetching, and stale-data states as needed.

Every new feature or reusable module needs a README covering purpose, usage,
contracts, and checks.

## Transport Setup

Import `instance` from `@/lib`. [interceptor.ts](src/lib/interceptor.ts) currently
contains placeholder base/refresh URLs and uses `localStorage` keys `access` and
`refresh`. Configure it against the backend before use. The [API guide](.agents/api.md)
defines the contract and correctness requirements. Leave success/error UI empty
until requested; no modal library is required.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run build` | Type-check and build |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run Oxlint |
| `npm run format:test` / `npm run format:write` | Check/apply formatting |
| `npm run vitest` / `npm run vitest:watch` | Run/watch tests |
| `npm run storybook` / `npm run build-storybook` | Run/build Storybook |

See [AGENTS.md](AGENTS.md) for contributor instructions.
