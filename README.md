# OPVWebsite

Oʻahu Pride Volleyball’s marketing site and Express-backed API, built with Vite, React 18, Tailwind CSS, Express, and TypeScript.

## Current Ownership

- GitHub repo: https://github.com/nicAikane/OPVWebsite
- Netlify project: `oahu-pride-volleyball`
- Netlify URL: https://oahu-pride-volleyball.netlify.app
- Custom domain: https://oahupridevolleyball.com
- Legacy upstream repo: https://github.com/richAikane/OPVWebsite

The custom domain should point to the Netlify site above after DNS cutover.

## Getting started

1) Install dependencies:
```bash
npm install
```
2) Start the dev server (API + client):
```bash
npm run dev
```
   - The server reads `PORT` (defaults to `5000`). If the default is in use, set a different port before running, e.g. `PORT=5173 npm run dev`.

## Build and production

- Build client and server bundles:
```bash
npm run build
```
- Run the bundled server:
```bash
npm start
```

## Scripts

- `npm run dev` — start Express with Vite middleware in development.
- `npm run build` — build the React app (Vite) and bundle the server (esbuild).
- `npm start` — run the production bundle from `dist/`.
- `npm run check` — type-check with `tsc`.
- `npm run db:push` — push Drizzle schema changes.

## Repository

GitHub: https://github.com/nicAikane/OPVWebsite
