# State and Data

## Ownership

TanStack Query owns server data. Keep form drafts and transient UI state local.
Derive values instead of copying query results into context or another client store.

The app currently creates one QueryClient with library defaults in
`src/app/queryClient.ts`. Do not claim cache cleanup, persistence, or custom
defaults that the source does not implement.

## Concrete Queries

Use `services/queries.keys.ts` for keys and `services/queries.ts` for direct
`useQuery` / `useMutation` hooks. The profile's existing key file is `query.key.ts`.
An optional `api.ts` holds short endpoint functions.

Name hooks after actual operations and implement only verified endpoints.
Avoid generic detail functions, query factories, injected services, and per-feature
QueryClients. Keys identify the domain and every parameter affecting its result.
Scope private data by user/session or explicitly clear it on account changes.
Forward query signals to Axios and return the payload.

## Writes and Presentation

Invalidate affected keys after writes. Add optimistic updates only when useful
and reversible: cancel conflicting reads, snapshot affected values, roll back
failures, and reconcile with the server. Handle overlapping writes with the smallest
mechanism needed. Avoid automatic mutation retries.

Render loading, initial error with retry, empty results, and mutation progress.
Keep usable cached data visible during background refresh or refetch failure.
Communicate staleness where freshness matters. Prefer inline feature UI until
actual reuse warrants a shared component.

## Persistence

Validate restored data and handle unavailable storage. Clear private cache data on
logout/account changes and prevent old requests from restoring another user's data.
Do not introduce cache persistence or a state library without a concrete requirement.
