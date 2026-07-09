# Git Training Repository

## Project Details
- Name: Bhumika Deshmukh
- Training Batch: 2026
- Date: 09-Jul-2026
- Description: Assignment for Git practice, with a simple web page built using HTML, CSS, and JavaScript.

## Project Features
- Basic HTML page structure with a navigation bar
- CSS styling for sections, layout, and navigation
- JavaScript file (`app.js`) to demonstrate dynamic content insertion
- Practice of Git branching and commits on `feature/add-navigation`

## Navigation Bar
This project includes a simple navigation bar at the top of the page. The nav bar contains links to:
- Home
- About
- Contact

The navigation layout is styled in `style.css` and provides a cleaner header experience for the page.

## Current File Structure
- `index.html` — page content and navigation structure
- `style.css` — visual styling for the page and navigation
- `app.js` — JavaScript behavior for dynamic page content
- `README.md` — project documentation and notes


## .gitignore Explanation

### IDE and Editor Files
The `.vs`, `.vscode`, and `.idea` folders contain personal editor settings, extensions, and workspace configurations. These files differ between developers and should not be tracked in Git.

### Build Outputs
The `bin`, `obj`, `node_modules`, and `dist` folders contain generated files created during compilation, package installation, or deployment. Since they can be regenerated, storing them in Git unnecessarily increases repository size.

### Operating System Files
Files such as `.DS_Store` (macOS) and `Thumbs.db` (Windows) are created automatically by the operating system. They are not related to the project and should not be committed.

## What happens if you forget .gitignore on the first commit?

If `.gitignore` is not added before the first commit, unwanted files may be tracked by Git. This can increase repository size, introduce unnecessary changes, and make collaboration difficult.

## How do you fix it retroactively?

1. Create or update the `.gitignore` file.
2. Remove the already tracked files from Git's index using `git rm --cached`.
3. Commit the changes.

Example:

```bash
git rm -r --cached node_modules
git rm -r --cached dist
git rm -r --cached bin
git rm -r --cached obj
git commit -m "chore: remove ignored files from tracking"```
```


## Merge Note: Why This Merge Was Not a Fast-Forward
During this Git exercise, the `feature/add-navigation` branch was created from `main` and received three meaningful commits:
- `feat: add navigation bar to project`
- `feat: enrich homepage content with sections`
- `style: improve page layout and section styling`


Later, a documentation change was made directly on `main` and committed as:
- `docs: Updating the README`

Because both branches had their own new commits, the histories had diverged. That is why Git created a merge commit instead of performing a fast-forward merge.

### What is a fast-forward merge?
A fast-forward merge happens only when the target branch has not moved forward since the feature branch was created. In that case, Git can simply move the branch pointer forward to include the feature branch commits.

### Why this merge was not fast-forward
This merge was not a fast-forward because:
1. `main` had its own commit after the branch was created.
2. `feature/add-navigation` had its own separate commits.
3. Git had to combine both histories into a merge commit to preserve all updates.

In this example, `main` and `feature/add-navigation` both advanced independently, so Git created a merge commit instead of moving `main` forward directly.


## Rebase vs Merge — When to use which

- **Rebase**: Use when you want a clean, linear history on a private branch before integrating it. Good for cleaning up commits (`git rebase -i`) and for keeping your feature branch up-to-date with the base branch (`git fetch origin && git rebase origin/main`).
	- Pros: produces a linear history, makes bisecting and reading history simpler.
	- Cons: rewrites commit history (dangerous for shared branches).

- **Merge**: Use when you want to preserve the historical record of how branches diverged and were integrated, or when collaborating on a branch. A merge commit documents the integration point.
	- Pros: safe for shared branches, preserves original commits and context.
	- Cons: can create extra merge commits and a non-linear history.

### The golden rule of rebasing

Never rebase commits that have already been pushed to a shared remote and that others may base work on. Rebasing rewrites history; if you change commits that others have fetched, you will force them to reconcile divergent histories. If you must change pushed history, coordinate with your team and update the remote with `git push --force-with-lease`.

## Cherry-pick vs Merge

- **Cherry-pick**: Use when you need only one or a few specific commits from another branch, not the full branch history. This is appropriate if a single bug fix or small feature on another branch should be applied immediately without bringing along unrelated work.
  - Pros: selective, keeps your branch focused, avoids merging unrelated changes.
  - Cons: duplicates commit history, can make future merges more complex if the same changes are later merged normally.

- **Merge**: Use when you want to bring an entire branch into your current branch, preserving all commits and the branch relationship.
  - Pros: keeps history intact, avoids duplicate commits.
  - Cons: may bring in unwanted changes if the branch includes more than what you need.

### When cherry-pick is appropriate

- You want one specific fix from another branch without merging the whole feature branch.
- The other branch contains unrelated commits you do not want.
- You need a hotfix or patch in a release branch immediately.

### Command example

Cherry-pick a commit:
```bash
git checkout main
git cherry-pick <commit-hash>
```



