# Application Setup

`src/main.tsx` mounts `Providers` inside StrictMode. `providers.tsx` wraps the router
in `QueryClientProvider`; `queryClient.ts` creates a stable QueryClient with library
defaults. `routes.ts` creates the browser router and renders `app.tsx` at the root.

## Extending the App

Add concrete pages to `routes.ts` and required providers to `providers.tsx`. Keep
business requests/query hooks in their feature. Create the QueryClient once, outside
rendering; add no configuration layer for a single dependency.

Server data belongs in TanStack Query and drafts remain local. The current client
does not implement auth-driven cache cleanup; wire explicit cleanup when adding
login/logout for private queries.

## Validation

Run `npm run build` and relevant tests. Existing test files do not establish that
a behavior is implemented or passing. See [AGENTS.md](../../AGENTS.md) for conventions.
