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
