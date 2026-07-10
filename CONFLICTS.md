# Resolving Merge Conflicts

## 📸 Screenshot of Merge Conflict

<img width="1228" height="657" alt="image" src="https://github.com/user-attachments/assets/c9f2ab36-35ea-4712-9eba-c975b96e9769" />


---

## 🛠️ How I Resolved This

I resolved the merge conflict by accepting the incoming changes from the `feature/add-footer` branch using VS Code's built-in Merge Editor. 

### Step-by-Step Resolution Process
* **Review**: Inspected the conflicting code blocks side-by-side.
* **Selection**: Selected **Accept Incoming Change** to keep the footer implementation from the feature branch.
* **Stage**: Staged the resolved file to prepare it for the commit.
* **Commit**: Completed the merge process by committing the changes using the default merge commit message.

---

## 💡 Why I Chose This Resolution

I intentionally created a footer change on the `main` branch solely to generate a merge conflict for this exercise. The true, intended footer implementation was the one developed in the `feature/add-footer` branch. Therefore, accepting the incoming changes was the correct choice for this scenario.

> **Note on Alternative Scenarios:**
> If both branches had contained valuable changes that needed to be preserved, I would have manually edited the conflicted file. This involves reviewing the standard conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and manually combining the required content from both branches before saving, staging, and completing the merge.

---

## 📊 Screenshot of Git Log Graph Showing Merge Commit

<img width="1177" height="638" alt="image" src="https://github.com/user-attachments/assets/89e69cf8-3053-498a-b540-ef6cf7fe51d3" />

