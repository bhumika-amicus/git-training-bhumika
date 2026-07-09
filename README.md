# Git Training Repository

## Project Details
- Name: Bhumika Deshmukh
- Training Batch: 2026
- Date: 09-Jul-2026
- Description: A learning project for Git practice, with a simple web page built using HTML, CSS, and JavaScript.

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