# RECOVERY.md

## Git Recovery Techniques

This document demonstrates two approaches for recovering from mistakes in Git: `git revert` and `git reset --hard`.

---

## 1. Recovering with git revert

### Scenario

I accidentally deleted the `style.css` file and committed the change.

```bash
git rm style.css
git commit -m "feat: accidentally delete style.css"
```

To safely undo this mistake, I used:

```bash
git revert a1deec9
```

Git created a new commit that restored the deleted file while preserving the project history.

### When to Use git revert

- When the commit has already been pushed.
- When working on shared branches such as `main`.
- When other developers may already have pulled the commit.
- When you want a clear history showing both the mistake and the fix.

```bash
$ git log --oneline
    13c28eb (HEAD -> main) Revert "feat: accidentally delete style.css"
    a1deec9 feat: accidentally delete style.css
    6615462 (origin/main) docs:update readme for task 9
```

### Benefits

- Does not rewrite history.
- Safe for collaboration.
- Maintains a complete audit trail.

---

## 2. Recovering with git reset --hard and git reflog

### Scenario

I added a temporary change to `README.md` and committed it:

```bash
git add README.md
git commit -m "docs: testing the reset hard"
```

To remove the commit, I used:

```bash
git reset --hard HEAD~1

HEAD is now at 13c28eb Revert "feat: accidentally delete style.css"
```

This removed the commit from the visible commit history and moved the branch back to the previous commit.

### Recovering the Lost Commit

Even though the commit disappeared from the log, Git still kept a reference to it in the reflog.

I viewed the reflog using:

```bash
git reflog
```

The reflog showed:

```text
edbb3c0 HEAD@{2}: commit: docs: testing the reset hard
```

I restored the commit using:

```bash
git reset --hard edbb3c0
```

The commit was successfully recovered.

### When to Use git reset

- When cleaning up local commit history.
- Before commits have been shared with others.
- When unwanted commits should be removed completely from the branch history.

### Benefits

- Quickly removes unwanted commits.
- Useful for local experimentation.
- Keeps commit history clean before pushing.

---

## Revert vs Reset

### Use git revert when:

- The commit has already been pushed.
- The branch is shared with other developers.
- You want to preserve the existing history.

### Use git reset when:

- You are working locally.
- The commits have not been shared.
- You want to rewrite or clean up commit history.

---

## Why is git reset dangerous on shared branches?

`git reset` rewrites commit history by moving the branch pointer to a different commit. If a reset is followed by a force push on a shared branch, other developers may lose access to commits they depend on. This can lead to confusion, merge conflicts, and lost work.

For shared branches such as `main`, `git revert` is generally the safer approach because it preserves history while still undoing unwanted changes.

---

## Conclusion

Both methods can recover from mistakes, but they serve different purposes. `git revert` is the safest choice for shared repositories because it preserves history, while `git reset --hard` is best suited for local cleanup and should be used carefully. If a commit is accidentally removed with `git reset --hard`, `git reflog` can often be used to recover it.