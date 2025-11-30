# Quick Start: Push to GitHub

## ⚡ Quick Steps

### 1. Configure Git (First Time Only)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `cvdoctor-demo`
3. Make it **Public** or **Private**
4. **Don't** check any boxes (no README, .gitignore, license)
5. Click **"Create repository"**

### 3. Push Your Code

After creating the repo, GitHub will show you commands. Use these:

```powershell
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cvdoctor-demo.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You'll be asked to authenticate. Use a Personal Access Token (not password).

### 4. Get Personal Access Token (if needed)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select scopes: `repo` (full control)
4. Copy the token and use it as your password when pushing

---

## 🚀 Deploy to Vercel (Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import `cvdoctor-demo` repository
5. Click **"Deploy"**
6. Done! Your site is live in 2 minutes

---

## ✅ Current Status

✅ Git initialized  
✅ Files staged  
⏳ Waiting for: Git config + GitHub repo creation + Push


