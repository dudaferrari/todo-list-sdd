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

## Purpose

This constitution defines the non-negotiable rules for the Todo List project. It exists to preserve architectural consistency, product simplicity, maintainability, and delivery quality throughout the lifecycle of the application.

## Core Principles

### I. MVC Architecture Is Mandatory
All features MUST follow an MVC-style separation of responsibilities. Controllers handle request flow, models represent data and business rules, and views or UI components remain focused on presentation. Business logic MUST NOT be embedded directly in routes or UI components when it belongs to the application layer.

### II. Simplicity and Usability Guide the Product
The application MUST prioritize a simple, responsive, and easy-to-use interface. New UI changes MUST improve clarity, reduce friction for common tasks, and avoid unnecessary complexity unless a feature directly supports the core todo-list workflow.

### III. Quality and Testing Are Non-Negotiable
Every change that affects controllers, API behavior, or business rules MUST include tests. Unit tests MUST cover controller behavior, and integration tests MUST validate observable API behavior. Test coverage and validation MUST be treated as part of implementation, not as a follow-up task.

### IV. Maintainability Requires Clear Organization
Code MUST be organized, readable, and commented where behavior is not obvious. Naming MUST be explicit, modules MUST remain focused on a single responsibility, and changes MUST preserve the existing structure of the monorepo.

### V. Delivery Constraints Must Be Respected
The project MUST use React for the frontend, Express for the backend, and JavaScript for both layers. The repository MUST remain a monorepo with separate frontend and backend areas, and persistence MUST remain in-memory only because the stated scope does not require a database.

## Additional Constraints

The implementation stack for this project is fixed to React for the frontend, Express for the backend, and JavaScript for both layers. The repository MUST stay organized as a monorepo with separate frontend and backend areas, and persistence MUST remain in-memory only because the stated scope does not require a database.

Any new feature MUST preserve the current architectural boundaries between frontend, backend, and shared application logic. The system MUST remain lightweight, easy to run locally, and free from external database setup. The application MUST remain suitable for a simple local demo or educational context without introducing unnecessary infrastructure complexity.

## Development Workflow

All work MUST follow clear and consistent implementation practices. Changes MUST be implemented in a way that keeps the codebase easy to maintain, and any new behavior MUST be documented through code comments or relevant project documentation when the intent is not self-evident.

Before a feature is considered complete, the relevant tests MUST be written or updated, the implementation MUST align with the architectural and performance principles in this constitution, and the resulting behavior MUST be verifiable locally.

Conventional commits are expected for clear change history. Pull requests or delivery steps SHOULD preserve the structure of the existing project and avoid unnecessary rework.

## Quality Gates

A feature is not considered complete unless the following checks are satisfied:

1. The implementation follows the MVC separation of responsibilities.
2. The feature is compatible with the monorepo organization.
3. The behavior is covered by automated tests.
4. The feature remains compatible with in-memory storage constraints.
5. The change is documented where needed for future maintainers.

## Governance

This constitution supersedes informal preferences and shortcut decisions. Any change to these principles MUST be documented as a constitution amendment, reviewed for impact on architecture, testing, delivery constraints, and developer workflow, and reflected in the relevant planning and implementation artifacts before it is accepted.

Compliance is reviewed at the feature level: plans, specifications, and tasks MUST be checked against these principles before implementation proceeds. If a requirement conflicts with this constitution, the conflict MUST be resolved by changing the proposal rather than weakening the principle.

Any change that affects architecture, storage strategy, testing expectations, or deployment scope MUST be evaluated against this document before being implemented.

**Version**: 1.0.0 | **Ratified**: 2026-07-05 | **Last Amended**: 2026-07-05
