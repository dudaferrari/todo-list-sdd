# Research Notes

## Decisions

- Decision: Use Express with in-memory task storage for the initial version.
  - Rationale: The constitution requires Express and JavaScript, and the project scope excludes persistence.
- Decision: Follow the existing MVC structure under apps/backend/src with controllers, models, and routes.
  - Rationale: The repository already contains backend folders aligned with this architecture.
- Decision: Use a simple JSON API contract for task create/list/delete operations.
  - Rationale: The feature is a small CRUD flow and does not require extra protocol complexity.

## Alternatives Considered

- Persisting tasks to a file or database.
  - Rejected because the constitution explicitly requires in-memory data and no database.
- Building a separate state management layer in the frontend.
  - Rejected because the backend should own task operations for a consistent API.
