# Tasks: Task Management

**Input**: Design documents from `/specs/001-task-management/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Create backend task model and controller scaffolding under apps/backend/src
- [x] T002 Create API router and wire it into the backend entrypoint
- [x] T003 Configure linting and test tooling for backend changes

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T004 Implement in-memory task store and validation logic
- [x] T005 Create REST endpoints for listing and creating tasks
- [x] T006 Create REST endpoint for deleting tasks

## Phase 3: User Story 1 - Create and view tasks (Priority: P1)

### Tests for User Story 1

- [x] T007 [P] Add unit tests for task controller create/list behavior
- [x] T008 [P] Add integration tests for task creation and listing API

### Implementation for User Story 1

- [x] T009 [P] Implement controller logic for create and list operations
- [x] T010 [P] Implement model logic for task creation and retrieval
- [x] T011 Connect backend routes to the controller handlers

## Phase 4: User Story 2 - Delete tasks (Priority: P2)

### Tests for User Story 2

- [x] T012 [P] Add unit tests for task controller delete behavior
- [x] T013 [P] Add integration tests for task deletion API

### Implementation for User Story 2

- [x] T014 [P] Implement controller logic for task deletion
- [x] T015 [P] Implement model logic for task removal

## Phase 5: Polish & Cross-Cutting Concerns

- [x] T016 Run linting and ensure the backend passes tests
- [x] T017 Add simple frontend form and task list integration
- [x] T018 Verify the feature against the quickstart flow
