# GitHub Setup Guide for CVDoctor

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `cvdoctor-demo` (or any name you prefer)
4. Description: "AI-powered CV diagnosis and role-based fixing platform"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 2: Initialize Git and Push to GitHub

Run these commands in your terminal (PowerShell):

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: CVDoctor demo website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cvdoctor-demo.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended - Free & Easy)

1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `cvdoctor-demo` repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**
6. Your site will be live in ~2 minutes at: `https://cvdoctor-demo.vercel.app`

## Alternative: Deploy to GitHub Pages

For GitHub Pages, you'll need to:

1. Install `gh-pages` package:
```powershell
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"scripts": {
  "export": "next export",
  "deploy": "npm run build && npm run export && gh-pages -d out"
}
```

3. Run:
```powershell
npm run deploy
```

4. Go to your GitHub repo → Settings → Pages
5. Select source: `gh-pages` branch
6. Your site will be at: `https://YOUR_USERNAME.github.io/cvdoctor-demo`

## Quick Commands Reference

```powershell
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```


