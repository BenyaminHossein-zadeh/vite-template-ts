# Review and Quality

## Keep Changes Concrete

Follow the direct interceptor and feature-query style. Each helper, wrapper,
generic, or option should solve an actual problem. Prefer an endpoint function
and concrete hook over a framework around one operation.

Preserve user edits, verify moved imports, and distinguish structural examples
from production behavior. Do not weaken lint, types, or assertions to pass checks.

## Validation

Use checks appropriate to the change from the [tooling guide](tooling-and-delivery.md).
Add regression tests for meaningful behavior, not mechanical wrappers. Check
concurrent auth failures, bounded replay, rejection, and cancellation for transport.
Check cache identity, targeted invalidation, useful rollback, and background-error
presentation for queries.

Verify relevant UI states and accessibility. Each new feature/reusable module
requires a README. For documentation changes, check links, references, and whitespace.

## Delivery and Reviews

Use short, concrete commit subjects; history does not consistently enforce
Conventional Commits. PRs should explain the problem and resulting behavior, link
issues, report checks/limitations, and show visible UI changes. Mocked requests
are not live backend validation.

Requested reviews should lead with verified findings by severity, including file,
line, trigger, and impact. Separate questions and validation gaps. Report no findings
when appropriate; avoid unrelated architecture proposals.
