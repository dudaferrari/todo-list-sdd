<!--
Sync Impact Report
- Version change: 0.0.0 → 1.0.0
- Modified principles: none (initial constitution)
- Added sections: Additional Constraints, Development Workflow
- Removed sections: none
- Templates requiring updates: ✅ .specify/templates/plan-template.md, ✅ .specify/templates/spec-template.md, ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: none
-->

# Todo List Constitution

## Core Principles

### I. MVC Architecture Is Mandatory
All features MUST follow an MVC-style separation of responsibilities: controllers handle request flow, models represent data and business rules, and views or UI components remain focused on presentation. Business logic MUST NOT be embedded directly in routes or UI components when it belongs to the application layer.

### II. Simplicity and Usability Guide the Product
The application MUST prioritize a simple, responsive, and easy-to-use interface. New UI changes MUST improve clarity and reduce friction for common tasks, and complex features MUST be avoided unless they directly support the core todo-list workflow.

### III. Quality and Testing Are Non-Negotiable
Every change that affects controllers or API behavior MUST include unit tests for controllers and integration tests for the API. ESLint MUST be enabled and pass before changes are considered complete. Test coverage and validation MUST be treated as part of implementation, not as a follow-up task.

### IV. Maintainability Requires Clear Organization
Code MUST be organized, readable, and commented where behavior is not obvious. Naming MUST be explicit, modules MUST remain focused on a single responsibility, and changes MUST preserve the existing structure of the monorepo.

### V. Delivery Constraints Must Be Respected
The project MUST use React and Express with JavaScript, remain a monorepo, avoid any database dependency, and keep data in memory only. Common API operations MUST target a response time below 500 ms in normal local usage.

## Additional Constraints

The implementation stack for this project is fixed to React for the frontend, Express for the backend, and JavaScript for both layers. The repository MUST stay organized as a monorepo with separate frontend and backend areas, and persistence MUST remain in-memory only because the stated scope does not require a database.

Any new feature MUST preserve the current architectural boundaries between frontend, backend, and shared application logic. The system MUST remain lightweight and easy to run locally without external services or database setup.

## Development Workflow

All work MUST follow conventional commits for clear change history. Changes MUST be implemented in a way that keeps the codebase easy to maintain, and any new behavior MUST be documented through code comments or relevant project documentation when the intent is not self-evident.

Before a feature is considered complete, the relevant tests MUST be written or updated, ESLint MUST pass, and the implementation MUST align with the architectural and performance principles in this constitution.

## Governance

This constitution supersedes informal preferences and shortcut decisions. Any change to these principles MUST be documented as a constitution amendment, reviewed for impact on architecture, testing, delivery constraints, and developer workflow, and reflected in the relevant planning and implementation artifacts before it is accepted.

Compliance is reviewed at the feature level: plans, specifications, and tasks MUST be checked against these principles before implementation proceeds. If a requirement conflicts with this constitution, the conflict MUST be resolved by changing the proposal rather than weakening the principle.

**Version**: 1.0.0 | **Ratified**: 2026-07-05 | **Last Amended**: 2026-07-05
