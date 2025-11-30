# Deploy Now - Step by Step

## Quick Fix Commands

Run these commands **one by one** in PowerShell:

```powershell
# 1. Check current status
git status

# 2. Add all files (including the updated workflow)
git add .

# 3. Commit the changes
git commit -m "Update workflow for GitHub Pages deployment"

# 4. Check your branch name
git branch

# 5. Push to GitHub (use the branch name you see above)
# If branch is "master":
git push -u origin master

# OR if branch is "main":
git push -u origin main
```

## After Pushing

1. **Go to Actions tab:** `https://github.com/muhammadali99-oss/Presentation/actions`
2. **Wait for workflow to run** (2-3 minutes)
3. **Check if it succeeded** (green checkmark = success)
4. **Visit your site:** `https://muhammadali99-oss.github.io/Presentation/`

## If Workflow Fails

- Click on the failed workflow
- Check the error message
- Common issues:
  - Missing `package-lock.json` (we need to create it)
  - Build errors
  - Permission issues

