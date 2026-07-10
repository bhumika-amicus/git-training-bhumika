# Commit Conventions

## Commit format

This repository uses the following commit format:

```text
type: subject
```

Examples:

```text
feat: add sidebar
fix: enhance UI alignment
docs: update README
```

## Types used

The following commit types are used or recommended in this repository:

- feat: a new feature or user-visible enhancement
- fix: a bug fix
- docs: documentation changes
- chore: maintenance or project setup work
- refactor: code restructuring without changing behavior
- test: test-related changes

In the current history, the most common types are feat, fix, docs, and chore.

## Good vs bad commit messages from the repository history

### Good examples

These messages are clear and specific:

- feat: add sidebar
- fix: enhanced UI alignment
- docs: update README
- docs: added recovery.md file

### Less helpful examples

These messages are too vague or inconsistent:

- WIP
- fix
- docs:update readme for task 9
- chore:add .gitignore

## Why consistent commit messages matter

Consistent commit messages help teams:

- Understand what changed quickly
- Review history more easily
- Trace bugs and features with less effort
- Keep pull requests and release notes clear
- Make collaboration smoother across the team

## Guidelines

- Use lowercase for the type
- Keep the subject short and descriptive
- Use an imperative voice when possible
- Avoid vague subjects such as "update" or "fix"
- Do not end the subject with a period
