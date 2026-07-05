# Deployment guide

## 1. Frontend no Vercel
1. Push this repository to GitHub.
2. Open Vercel and click Import Project.
3. Select the repository.
4. Vercel will detect the Vite frontend automatically.
5. Set the Root Directory to `apps/frontend` if prompted.
6. Build command: `npm run build`
7. Output directory: `dist`
8. Deploy.

> The Vercel configuration is already present in `vercel.json`.

## 2. Backend no Render
1. Push this repository to GitHub.
2. Open Render and create a New Web Service.
3. Connect the repository.
4. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Render will use `render.yaml` automatically if connected with the repository root.
6. Deploy.

> The backend exposes `/health` for health checks.

## 3. Documentação MkDocs no GitHub Pages
1. Ensure the repository has a `main` branch.
2. Open GitHub repository settings.
3. Go to Pages.
4. Choose GitHub Actions as the source.
5. The workflow in `.github/workflows/deploy-docs.yml` will build and publish the docs automatically on every push to `main`.

## 4. Frontend pointing to the deployed backend
Set the Vercel environment variable:
- Name: `VITE_API_URL`
- Value: the Render backend URL, for example `https://todo-list-backend.onrender.com`

The frontend will use this URL automatically in production.
