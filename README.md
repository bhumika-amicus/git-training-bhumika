# Git Training Repository

## Project Details
- Name: Bhumika Deshmukh
- Training Batch: 2026
- Date: 09-Jul-2026
- Description: A repository created for Git training and practice.

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
git commit -m "chore: remove ignored files from tracking"