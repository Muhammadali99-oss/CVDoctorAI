# How to Run CVDoctor Website

## Step-by-Step Instructions

### 1. Open Terminal/PowerShell
- Open PowerShell or Command Prompt
- Navigate to your project folder:
  ```powershell
  cd C:\Users\ASUS\Desktop\presentation
  ```

### 2. Install Dependencies (First Time Only)
If you haven't installed dependencies yet:
```powershell
npm install
```
Wait for it to finish (takes about 30-60 seconds)

### 3. Start the Development Server
Run this command:
```powershell
npm run dev
```

You should see output like:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### 4. Open in Browser
- Open your web browser (Chrome, Firefox, Edge, etc.)
- Go to: **http://localhost:3000**
- You should see your CVDoctor website!

### 5. Stop the Server
- Press `Ctrl + C` in the terminal to stop the server
- Or close the terminal window

---

## Quick Commands Reference

```powershell
# Install dependencies (first time)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Stop server
Ctrl + C
```

---

## Troubleshooting

**Port 3000 already in use?**
- Close other applications using port 3000
- Or run: `npm run dev -- -p 3001` (uses port 3001 instead)

**Dependencies error?**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

**Still not working?**
- Make sure Node.js is installed: `node --version`
- Should show v18 or higher

