# Kickscale Website

Marketing website for Kickscale, built with Next.js, TypeScript and Tailwind CSS.
German (`/de/`) and English (`/en/`), exported as a static site so it runs on any Hostinger plan.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000/de/
npm run build      # writes the static site to ./out
```

Node 22 is expected (see `.nvmrc`).

## Where things live

| What | Where |
| --- | --- |
| All website copy (DE / EN) | `src/content/de.ts`, `src/content/en.ts` |
| Demo link, app link, contact email | `src/site.config.ts` |
| Page sections | `src/components/` |
| Colours and fonts | `src/app/globals.css` (`@theme` block) |
| Language redirect on `/` | `public/index.html` |
| HTTPS redirect, caching, 404 | `public/.htaccess` |

Fonts are self-hosted via Fontsource, so no requests go to Google Fonts (GDPR).

## Deployment to Hostinger

On every push to `main`, the GitHub Action in `.github/workflows/deploy.yml` builds the site
and publishes the finished files to the `hostinger` branch.

1. Push this repo to GitHub and wait for the action to finish (Actions tab, green check).
   The `hostinger` branch now exists.
2. In Hostinger hPanel: **Websites → Manage → Advanced → GIT**.
3. Repository: `https://github.com/geraldzankl/kickscale-website.git`, Branch: `hostinger`,
   Directory: leave empty (deploys into `public_html`). Click **Create**, then **Deploy**.
4. Optional auto deploy: copy the webhook URL Hostinger shows under **Auto Deployment** and add it
   in GitHub under **Settings → Webhooks** (content type `application/json`).
   Note: `public_html` must be empty before the first Git deployment.

Alternative for Hostinger Node.js hosting (Business / Cloud plans): import the repo from GitHub,
framework Next.js, build command `npm run build`, output directory `out`.

## Before launch

- Replace `demoUrl` and `email` in `src/site.config.ts`
- Replace the placeholder wordmark in `src/components/Logo.tsx` with the official logo
- Add Impressum and Datenschutzerklärung texts (`src/components/LegalPage.tsx`)
- Verify figures, customer story and integrations list in `src/content/*.ts`
