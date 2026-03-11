# CLAUDE.md — AI Assistant Guide for IND_datacenters

This file provides guidance for AI assistants (Claude and others) working on this repository.

## Project Overview

**Repository**: `panosni/IND_datacenters`
**Purpose**: Indonesia datacenter infrastructure — scope and implementation details to be defined as the project evolves.
**Status**: Early-stage. Only a README exists; no source code, tests, or configuration has been added yet.

---

## Repository Structure

```
IND_datacenters/
├── CLAUDE.md        # This file — AI assistant guidance
└── README.md        # Project title/description
```

As the project grows, update this section to reflect the actual directory layout.

---

## Git Workflow

### Branches
- **`master`** — stable, production-ready code; do not push experimental work here directly.
- **`claude/<task-id>`** — feature/task branches created by AI assistants; always target these for Claude-driven changes.

### Commit Conventions
Use clear, descriptive commit messages in the imperative mood:

```
Add datacenter inventory schema
Fix region mapping for Mumbai zone
Update README with setup instructions
```

Prefix with a type when appropriate:
- `Add` — new feature or file
- `Fix` — bug fix
- `Update` — modification to existing functionality
- `Remove` — deletion of code or files
- `Refactor` — restructuring without behavior change
- `Docs` — documentation-only changes

### Push Protocol
Always push with upstream tracking:
```bash
git push -u origin <branch-name>
```

Never force-push to `master`.

---

## Development Conventions

Because no source language has been chosen yet, the following conventions should be adopted once the stack is selected:

### General Principles
- Keep functions/modules small and single-purpose.
- Prefer explicit over implicit.
- Document non-obvious logic inline; avoid over-commenting obvious code.
- Validate inputs at system boundaries (user input, external APIs); trust internal data.
- Do not add error handling for scenarios that cannot occur.

### Naming
- Use descriptive names that reflect domain concepts (e.g., `datacenter_region`, `rack_capacity`).
- Avoid abbreviations unless they are widely understood in the domain (e.g., `dc` for datacenter is acceptable).

### Testing
- All new features should include corresponding tests.
- Tests should live in a `tests/` directory mirroring the source layout.
- Aim for unit tests on pure logic; integration tests on external dependencies.

---

## Workflow for AI Assistants

1. **Read before writing** — Always read existing files before editing them.
2. **Minimal changes** — Only change what is necessary for the task. Do not refactor unrelated code.
3. **No speculative features** — Do not add functionality beyond what was requested.
4. **Branch discipline** — Develop on the designated `claude/` branch; never push to `master` directly.
5. **Commit and push** — After completing a task, commit with a clear message and push to the feature branch.
6. **Update this file** — When the project structure, stack, or conventions change materially, update CLAUDE.md to reflect the new state.

---

## Environment Setup

_(To be filled in once a technology stack is chosen.)_

Typical steps will include:
1. Clone the repository.
2. Install dependencies.
3. Copy and configure environment variables.
4. Run database migrations (if applicable).
5. Start the development server.

---

## Testing

_(To be filled in once a test framework is chosen.)_

Expected commands:
```bash
# Run all tests
<test command here>

# Run a specific test file
<test command here>

# Run tests with coverage
<test command here>
```

---

## CI/CD

No CI/CD pipeline has been configured yet. When one is added (e.g., GitHub Actions), document the workflows here, including:
- Trigger conditions (push, pull request, schedule)
- Steps (lint, test, build, deploy)
- Required secrets and environment variables

---

## Key Domain Concepts

| Term | Meaning |
|------|---------|
| IND | India region |
| Datacenter | Physical or virtual facility hosting compute infrastructure |

_(Expand this table as domain knowledge accumulates.)_

---

## Updating This File

Keep CLAUDE.md current whenever:
- A new language, framework, or major dependency is introduced.
- Directory structure changes significantly.
- New conventions or tooling are adopted.
- CI/CD or deployment processes are established.
