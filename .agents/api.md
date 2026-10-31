# API and Interceptors

## Direct Requests

Use `instance` from `src/lib/interceptor.ts`. Keep concrete endpoint functions
inside their feature, in `services/api.ts` or beside query hooks when simpler.
Return typed `response.data`.

Keep one shared Axios instance with readable request/response handlers and short
helpers where needed. Avoid transport factories, service injection, and configuration frameworks.

## Tokens and Configuration

The current starter has placeholder URLs and reads `localStorage.access` /
`localStorage.refresh`. These are example storage keys, not a completed auth contract.

The supplied backend refresh contract is `POST /auth/refresh/`, request
`{ refreshToken }`, response `{ accessToken, refreshToken? }`. Align the transport
fields when configuring it, preserving the refresh token if no replacement is returned.
Use one storage convention; add another credential layer only for a demonstrated need.

## Small Correctness Rules

- Attach the access token as a Bearer header.
- Refresh on 401; treat 403 as permission failure unless the backend says otherwise.
- Share one refresh promise for concurrent failures and resume waiting requests.
- Retry each original request once through the configured instance.
- Keep refresh outside that interceptor loop and reject failures.
- Clear expired credentials and prevent cross-user cache reuse.
- Forward AbortSignal where cancellation is supported.
- Keep React hooks in components/custom hooks, outside interceptor callbacks.
- Never log tokens or sensitive payloads.

Leave success/error UI handlers empty until presentation is requested. Do not add
Ant Design, modals, notifications, or redirects speculatively. Business-specific
error behavior belongs in its feature.
