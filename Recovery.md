# RECOVERY.md

## Git Recovery Techniques

This document demonstrates two approaches for recovering from mistakes in Git: `git revert` and `git reset --hard`.

---

## 1. Recovering with git revert

### Scenario

I accidentally deleted the `style.css` file and committed the change.

<img width="752" height="257" alt="image" src="https://github.com/user-attachments/assets/234e9e57-b0c4-410d-911f-a891b047a835" />


To safely undo this mistake, I used:

<img width="1059" height="624" alt="image" src="https://github.com/user-attachments/assets/da118716-9641-4d26-bfd8-b8bedfd8c959" />

Git creates a new  revert commit , and the file is restored , you can see style.css came back. 

<img width="1302" height="449" alt="image" src="https://github.com/user-attachments/assets/d94b856e-eedc-4f81-b915-b324425b8ddb" />


### When to Use git revert

- When the commit has already been pushed.
- When working on shared branches such as `main`.
- When other developers may already have pulled the commit.
- When you want a clear history showing both the mistake and the fix.

### Benefits

- Does not rewrite history.
- Safe for collaboration.
- Maintains a complete audit trail.

---

## 2. Recovering with git reset --hard and git reflog

### Scenario

I added a temporary change to `README.md` and committed it:

<img width="1190" height="570" alt="image" src="https://github.com/user-attachments/assets/6e9f5617-55f0-4142-82c8-a44acbc25481" />


This was git log before :

<img width="1231" height="151" alt="image" src="https://github.com/user-attachments/assets/55049104-cc63-436c-b02f-77bd86238e07" />


Git reset hard : we can see that docs commit will be removed as its on head 

<img width="1147" height="239" alt="image" src="https://github.com/user-attachments/assets/c2ce33a7-0ff6-4e64-b76e-37b119018ca4" />


### Recovering the Lost Commit

Even though the commit disappeared from the log, Git still kept a reference to it in the reflog. which we can use to reset back to that commit.

<img width="1307" height="391" alt="image" src="https://github.com/user-attachments/assets/95dd205e-c9ec-441f-8eb8-8e122b62c8bb" />

after reset :

<img width="1239" height="121" alt="image" src="https://github.com/user-attachments/assets/11404f1c-9c02-4f7d-b450-d0e0a890dd49" />


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
