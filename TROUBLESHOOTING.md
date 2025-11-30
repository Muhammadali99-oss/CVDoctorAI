# Troubleshooting 404 Error on GitHub Pages

## Quick Checklist

### ✅ Step 1: Verify GitHub Pages Source
1. Go to: `https://github.com/muhammadali99-oss/Presentation/settings/pages`
2. **Source** must be set to **"GitHub Actions"** (NOT "Deploy from a branch")
3. Click **Save** if you changed it

### ✅ Step 2: Check if Code is Pushed
1. Go to: `https://github.com/muhammadali99-oss/Presentation`
2. Check if you see these files:
   - `.github/workflows/deploy.yml` ✅
   - `next.config.js` ✅
   - `package.json` ✅
   
If files are missing, you need to push them first.

### ✅ Step 3: Check GitHub Actions
1. Go to: `https://github.com/muhammadali99-oss/Presentation/actions`
2. Look for a workflow called **"Deploy to GitHub Pages"**
3. Check if it:
   - ✅ Has run (green checkmark = success)
   - ⏳ Is running (yellow circle = in progress)
   - ❌ Failed (red X = error)

### ✅ Step 4: Check Branch Name
Your local branch might be `master` but workflow expects `main`:

**Option A: Rename your branch to main**
```powershell
git branch -M main
git push -u origin main
```

**Option B: Update workflow to use master**
Change `.github/workflows/deploy.yml` line 6 from `- main` to `- master`

## Common Issues

### Issue 1: "Deploy from a branch" instead of "GitHub Actions"
**Fix:** Change Pages source to "GitHub Actions" in Settings → Pages

### Issue 2: Code not pushed to GitHub
**Fix:** Run these commands:
```powershell
git remote add origin https://github.com/muhammadali99-oss/Presentation.git
git branch -M main
git push -u origin main
```

### Issue 3: Workflow not running
**Fix:** 
- Make sure `.github/workflows/deploy.yml` exists in your repo
- Check if branch name matches (main vs master)
- Push a new commit to trigger the workflow

### Issue 4: Workflow failed
**Fix:**
- Go to Actions tab
- Click on the failed workflow
- Check the error message
- Common errors: missing dependencies, build errors

## Still Not Working?

1. **Check the exact URL:** Make sure you're visiting:
   `https://muhammadali99-oss.github.io/Presentation/` (with trailing slash)

2. **Wait 5-10 minutes:** GitHub Pages can take time to update

3. **Clear browser cache:** Try incognito/private mode

4. **Check Actions logs:** Look for specific error messages

