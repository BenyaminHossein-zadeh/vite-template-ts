# Architecture

## Application Setup

`src/main.tsx` mounts `Providers` inside StrictMode. `src/app/providers.tsx`
wraps `RouterProvider` in `QueryClientProvider`; `queryClient.ts` owns one stable
QueryClient. `routes.ts` creates the browser router outside rendering.

Keep composition in `src/app/`. Add providers only for required dependencies.
Clean up effects and subscriptions.

## Feature Structure

Keep business code in `src/features/<feature>/`. The query layer has two files:

```text
services/
  queries.keys.ts
  queries.ts
```

The current profile uses `query.key.ts`; preserve that path during unrelated work.
An optional `api.ts` holds direct endpoint calls. Keep types beside their usage.

Write concrete hooks such as `useProfileQuery` and `useUpdateProfileMutation`.
Feature hooks should add business behavior. Avoid generic detail factories,
configurable service layers, and wrappers that only forward another hook.

Add directories as needed. Shared UI belongs in `src/components/`, infrastructure
in `src/lib/`, and general utilities in `src/utils/`. Shared code must not depend
on feature internals.

## Imports and Documentation

`@/` maps to `src/` in TypeScript, Vite, and Vitest configuration. Avoid circular imports.

Every new feature or reusable module needs a `README.md` with purpose, public
exports, a usage example, API/data contracts, and validation commands. One module
guide covers its internal files. Keep it current as behavior changes.
