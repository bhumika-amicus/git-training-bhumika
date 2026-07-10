# Branching Strategy

 # Configuring Branch Policies

Branch policies help protect important branches like `main` by controlling how changes are reviewed, tested, and merged. They help maintain code quality and prevent accidental changes from being pushed directly to the main branch.

## GitHub

Follow these steps to configure branch policies on the `main` branch:

### Steps

1. Open repository on GitHub.

2. Navigate to:

   ```
   Settings → Branches
   ```

3. Under **rules**, click:

   ```
   Add branch protection rule
   ```

4. Enter the branch name pattern:

   ```
   main
   ```

5. Enable the required branch protection options.
 <img width="1218" height="837" alt="image" src="https://github.com/user-attachments/assets/43dfddda-1219-46b5-a015-047ccab2b37f" />




## Strategy Chosen: Trunk-Based Development

This repository follows Trunk-Based Development. The main branch is the single source of truth, and work is done on short-lived feature or hotfix branches before being integrated back into main.

### Why this strategy was used

- A single main branch keeps the workflow simple.
- Feature branches remain short-lived and easy to review.
- Changes are integrated frequently, which reduces long-running conflicts.
- This matches the branch history seen in this repository.
- It is well suited to a small team and training-based development.

---

## Branch Diagram

```text
main
├── feature/add-navigation
├── feature/add-sidebar
├── feature/add-footer
├── feature/rebase-practice
├── feature/stash-demo
└── hotfix/urgent-fix
```

Note: This repository does not use a separate develop branch. Work is created directly from main.

---

## Branching Rules

### When to create a branch

Create a new branch when you need to:

- Add a new feature
- Fix a bug or regression
- Make an enhancement
- Try an experiment or proof of concept
- Apply an urgent production fix

### From where to branch

- Create feature branches from main.
- Create hotfix branches from main.
- Sync the branch with the latest main changes before merging.

### Naming convention

Feature branches:

```text
feature/add-navigation
feature/add-sidebar
feature/add-footer
feature/rebase-practice
```

Hotfix branches:

```text
hotfix/urgent-fix
```

General format:

```text
type/short-description
```

---

## Merge vs Rebase

### Use rebase when

- You need to update a feature branch with the latest changes from main.
- You want a cleaner commit history before opening a pull request.
- You want to squash multiple WIP commits into a more meaningful sequence.

Example:

```bash
git checkout feature/add-footer
git rebase main
```

### Use merge when

- A pull request is approved and the work is ready to be integrated.
- You want to preserve the branch context in the history of main.

Example:

```bash
git checkout main
git merge feature/add-footer
```



## Workflow Example

```text
1. Create a branch from main
2. Implement the change
3. Commit work with clear messages
4. Rebase with the latest main changes if needed
5. Push the branch
6. Open a pull request
7. Complete review and validation
8. Merge into main
9. Delete the feature branch
```

---

## Summary

This project uses Trunk-Based Development with short-lived branches from main, regular rebasing for synchronization, and pull-request-based integration. Azure DevOps policies help protect main and keep the workflow consistent and reviewable.
