# Figma Implementation

## Inspect

Use the applicable Figma skills/tools to inspect supplied frames, assets, variants,
and interaction states. Clarify missing details when they materially affect implementation.

## Implement Directly

Follow the [architecture](architecture.md) and [UI practices](ui.md). Put screens
in their feature and register routes through `src/app/`. Reuse components, Tailwind
values, and supplied assets.

Build the concrete screen first; extract components for actual reuse. Do not add
a component framework, generic data renderer, or state layer for a single design.
Keep requests/query hooks in feature services and verify backend contracts.

## Verify

Compare relevant viewports, typography, spacing, assets, focus, keyboard behavior,
and loading/error states. Report missing assets, unresolved interactions, and
intentional deviations. Claim only inspection and visual checks actually performed.
