# React App Deployment Using GitHub Pages

### 1. Install `gh-pages`

```bash
npm install --save-dev gh-pages
```

### 2. Add Deploy Script in `package.json`

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "gh-pages -d build"
}
```

### 3. (Recommended) Add Predeploy Script

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 4. Add Homepage URL

```json
"homepage": "https://<github-username>.github.io/<repository-name>"
```

Example:

```json
"homepage": "https://sureshkumar041.github.io/Real_Estate"
```

### 5. Deploy the Application

Navigate to the React application folder and run:

```bash
npm run deploy
```

This will:

- Create a production build.
- Create/update the `gh-pages` branch.
- Publish the React application to GitHub Pages.

### 6. Configure GitHub Pages

Repository → Settings → Pages

- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`

### Notes

- Run deployment commands from the React app folder (`frontend`) if the repository contains separate `frontend` and `backend` folders.
- Ensure the repository name in the `homepage` URL matches the actual GitHub repository name.
- If using React Router, consider using `HashRouter` to avoid 404 errors on page refresh.
