# UI Practices

## Components and Styling

Use typed React function components, PascalCase names, and camelCase filenames.
Keep feature UI inside its feature. Extract shared components only for real reuse;
avoid generic renderers for simple screens.

Use Tailwind utilities and `cn` from `src/lib/cn.ts`. Global styles and shared
theme values belong in `src/global.css`. Reuse assets in `src/assets/` and `public/`.

## Interaction

Use semantic controls, accessible names, associated labels, visible focus, and
keyboard support. Give non-submit buttons `type="button"`. Check narrow and wide
layouts; add localization and RTL when required.

Show loading, error, empty, background-refresh, and stale-data states directly in
the feature when sufficient. Show mutation progress and prevent accidental duplicate
submissions. Retain useful cached data when refresh fails.

Leave shared success/error presentation empty until requested. Do not add modal,
toast, UI-library, or form-framework dependencies for a simple handler.

## Stories and Design

Colocate useful stories as `*.stories.tsx`, matching Storybook discovery.
Accessibility checks currently use `test: 'todo'`; inspect findings rather than
assuming they block CI. Follow the [Figma guide](figma.md) for supplied designs.
