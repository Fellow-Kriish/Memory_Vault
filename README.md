# Personal Video Memory Vault

Simple private Next.js 14 (App Router) site to host unlisted YouTube video memories. This repository is configured for local development and Vercel deployment.

Prerequisites
- Node.js 18+ installed
- npm (bundled with Node.js)

Local setup (Windows PowerShell)

1. Install dependencies

```powershell
cd path\to\project
npm install
```

2. Set the site password for development (PowerShell temporary env var)

```powershell
$env:SITE_PASSWORD = "your-secret-code"
npm run dev
```

Open http://localhost:3000 in your browser. Enter the `SITE_PASSWORD` to access `/gallery`.

Deployment (Vercel)

1. Push the repo to GitHub (or connect your local repo) and import into Vercel.
2. In your Vercel project settings, add an Environment Variable named `SITE_PASSWORD` with your access code.
3. Deploy. The site will be available at your Vercel URL.

Notes
- The app uses a single global password (no user accounts). The password is checked server-side and an HTTP-only cookie `vault_auth` is set.
- Videos are embedded by `youtubeId` from `data/memories.ts` (unlisted YouTube links).
