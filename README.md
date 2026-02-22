# Peak Precision Machining Revamp

Modern static website concept for Peak Precision Machining.

## Project structure

- `index.html`: Homepage (positioning + trust + CTA)
- `services/machining.html`: Services detail page
- `quote.html`: Quote request funnel page
- `assets/css/styles.css`: Global styles and responsive layout
- `assets/js/site.js`: Menu interactions and simple UI behavior

## Run locally

Open `index.html` directly in a browser, or use a lightweight static server:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## CI/CD integration next steps

- Add HTML/CSS lint checks in CI
- Add Lighthouse CI for performance budgets
- Deploy to Netlify/Vercel/Cloudflare Pages with preview builds
- Add form backend integration (Netlify Forms, Formspree, or custom API)

## GitHub Actions + GitHub Pages

This repo includes two workflows:

- `.github/workflows/ci.yml`: HTML validation, internal link checks, and build artifact generation.
- `.github/workflows/pages.yml`: Deploys the static site to GitHub Pages on pushes to `main`.

### One-time GitHub repo setup

1. In GitHub, open **Settings > Pages**.
2. Set **Source** to **GitHub Actions**.
3. Ensure Actions are allowed for the repository (Settings > Actions).

After that, every push to `main` will run CI and then deploy to Pages.
