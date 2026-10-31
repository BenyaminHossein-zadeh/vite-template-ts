# Repository Guidelines

## Working Agreement

Keep code small, concrete, and easy to follow. Use the current profile feature and `src/lib/interceptor.ts` as structural references: direct API calls, explicit query hooks, and straightforward interceptor handlers.

Prefer KISS, YAGNI, and focused diffs. Preserve user changes. Do not introduce generic query factories, universal detail builders, service injection, callback configuration frameworks, or forwarding wrappers for ordinary feature work. Extract helpers only when actual reuse or complexity warrants them.

Never implement a solution based on an unverified assumption that could materially affect correctness or architecture. A simple example establishes a style, not a verified backend contract.

## Read the Relevant Rules

Read architecture and review guidance before application changes, plus each affected topic. Open linked files explicitly and keep detailed rules in their owning document.

| Document | Read when working on |
| --- | --- |
| [Architecture](.agents/architecture.md) | Structure, imports, routes, providers |
| [API](.agents/api.md) | Axios, endpoints, tokens, refresh, errors |
| [State and data](.agents/state-and-data.md) | Queries, mutations, state, persistence |
| [UI](.agents/ui.md) | Components, styles, accessibility, stories |
| [Tooling](.agents/tooling-and-delivery.md) | Commands, dependencies, configuration, CI |
| [Review and quality](.agents/review-and-quality.md) | Validation, reviews, commits, pull requests |
| [Figma](.agents/figma.md) | Implementing a supplied Figma design |

## Project Organization

`src/app/` owns providers, routes, and the stable QueryClient. Business capabilities live in `src/features/<feature>/`; shared infrastructure in `src/lib/`; general helpers in `src/utils/`; assets in `src/assets/` or `public/`.

Keep a feature's query layer in `services/queries.keys.ts` and `services/queries.ts`. The current profile uses `query.key.ts`; preserve existing paths during unrelated work. A short `api.ts` may contain direct endpoint calls. Add a feature hook only when it adds behavior.

Every new feature or independently reusable module directory must include a `README.md` explaining purpose, usage, contracts, and validation. Update it when behavior changes.

## Coding and Delivery

Use strict TypeScript, camelCase filenames, PascalCase components, and Oxfmt/Oxlint settings. Use the Node version in `.nvmrc` and the committed Bun lockfile. Run appropriate checks and report actual results and limitations.
