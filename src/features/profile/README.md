# Profile

This feature demonstrates the preferred direct API/query structure.

## Files and Usage

- `services/api.ts`: `getprofileData()` calls `GET /profile/` through `instance`
  and returns the payload.
- `services/query.key.ts`: the existing profile key.
- `services/queries.ts`: the concrete `useProfileQuery()` hook.
- `hooks/useProfile.ts`: currently an unfinished wrapper that returns nothing.
  Consume the query hook directly unless a wrapper adds feature behavior.

```ts
const profileQuery = useProfileQuery();
```

Render the query's loading, error, data, and refetch states in the feature UI.
Keep drafts local. New features use `queries.keys.ts` and `queries.ts` for their
query layer. Avoid generic detail builders and query factories.

## Contract

The supplied fields are `firstName`, `lastName`, `nationalCode`, `phoneNumber`,
and `address`. Preserve codes and phone numbers as strings.
The confirmed write endpoint is `PUT /profile/update`; only the read request is
currently implemented.

When adding the write, invalidate the affected profile key and use optimistic
changes only where useful and reversible. Isolate private cache data across accounts.

## Validation

Run lint/build and focused feature tests when added. The interceptor requires real
URL configuration. Update this guide as behavior and integration gaps change.
