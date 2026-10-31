# Shared Utilities and Transport

`src/lib/index.ts` exports the Axios `instance` from
[interceptor.ts](interceptor.ts) and `cn` from [cn.ts](cn.ts).

## API Calls

Import `instance` from `@/lib`, call the verified endpoint, and return
`response.data` from the feature's request function.

The interceptor uses direct request/response handlers. Base and refresh URLs are
currently placeholders. The example reads `localStorage` keys `access` and
`refresh`; align transport fields with the backend contract before use.
See the [API guidance](../../.agents/api.md).

Keep token attachment and refresh readable. Add required queue/retry protection
with the smallest suitable mechanism. Leave success/error UI empty until requested;
no modal or notification library is needed.

## Class Names and Checks

`cn(...classes)` combines conditional classes with clsx/tailwind-merge.

Run `npm run lint` and `npm run build` for code changes. Report actual checks and
limitations; placeholder configuration is not verified backend behavior.
