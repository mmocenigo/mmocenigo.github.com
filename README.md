# mocenigo.me

Personal site for Marissa Mocenigo: a single-page React app built with Vite and TypeScript.

## Development

Requires Node 22.22+ (see `.nvmrc`).

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm test           # unit tests (Vitest + Testing Library)
npm run build      # type-check and build to dist/
```

## Editing content

All copy (name, title, bio, email, LinkedIn URL) lives in
[`src/content/profile.ts`](src/content/profile.ts). The photo is `src/assets/photo.jpg`.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which tests, builds, and publishes
`dist/` to GitHub Pages. The custom domain comes from `public/CNAME`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
