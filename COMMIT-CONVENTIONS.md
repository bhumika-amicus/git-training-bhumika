# Commit Conventions

## Commit format

This repository uses a semantic commit style with the following format:

```text
type: subject
```

The prefix before the colon is a semantic type that tells the reader what kind of change was made. This makes commit history easier to scan and review.

Examples from this repository:

```text
feat: add sidebar
fix: enhanced UI alignment
docs: update README
chore:add .gitignore
```

## Types used

Based on the actual commit history in this repository, the most commonly used types are:

- feat: a new feature or user-facing enhancement
- fix: a bug fix or correction
- docs: documentation updates
- chore: maintenance, setup, or repository housekeeping
- refactor: code restructuring without changing behavior
- test: test-related changes


## Good vs bad commit messages from the repository history

### Good examples

These messages are clear, specific, and easy to understand:

- feat: add sidebar
- fix: enhanced UI alignment
- docs: update README
- docs: added recovery.md file
- feat: add login functionality

### Less helpful examples

These messages are too vague, inconsistent, or harder to interpret:

- WIP
- fix
- docs:update readme for task 9
- chore:add .gitignore
- feat: accidentally delete style.css
- fix: corrected commit message and resolved conflicts

### Why these are different

Good messages explain the intent of the change. Less helpful messages are either too brief, inconsistent in spacing, or describe the work in a way that is hard to scan later.

## Why consistent commit messages matter

Consistent commit messages help teams:

- Understand what changed quickly
- Review history more easily
- Trace bugs and features with less effort
- Keep pull requests and release notes clear
- Make collaboration smoother across the team
