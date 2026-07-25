# Edwin Muñoz — Portfolio

Personal portfolio site, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

🔗 **Live:** [uimp3.github.io/portfolio](https://uimp3.github.io/portfolio/)

## Features

- **Bilingual** (EN / ES) — English and Spanish, with a language toggle and locale-aware routing (`/en`, `/es`).
- **Live projects** — the Projects section pulls repos directly from the [GitHub API](https://api.github.com) at build time, with per-repo descriptions translatable per language.
- **Multiple themes** — four color themes (`default`, `strategic`, `innovator`, `executive`), each with a light and dark mode, switchable via `src/config.ts` and a runtime theme toggle.
- **Responsive** — mobile, tablet and desktop layouts.
- **Static output** — no backend, deployed as a static site via GitHub Actions to GitHub Pages.

## Tech stack

- [Astro](https://astro.build) 7 (static output)
- [Tailwind CSS](https://tailwindcss.com) 4
- [astro-icon](https://www.npmjs.com/package/astro-icon) with the `mdi` and `devicon-plain` Iconify sets
- [Sharp](https://sharp.pixelplumbing.com) for image optimization
- [pnpm](https://pnpm.io) as the package manager

## Project structure

```text
/
├── public/               # static assets (favicon, etc.)
├── src/
│   ├── assets/            # images (portrait, etc.)
│   ├── components/        # Nav, Home, Projects, Tech, Contact, ThemeToggle...
│   ├── i18n/               # en.ts / es.ts locale content
│   ├── layouts/            # base Layout.astro
│   ├── pages/               # index.astro (redirect), en/, es/
│   ├── styles/               # global.css, home.css
│   └── config.ts               # active theme
├── astro.config.mjs
└── package.json
```

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

## Available scripts

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `pnpm install`   | Install dependencies                        |
| `pnpm dev`       | Start the local dev server                  |
| `pnpm build`     | Build the production site to `./dist/`      |
| `pnpm preview`   | Preview the production build locally        |
| `pnpm astro ...` | Run Astro CLI commands (e.g. `astro check`) |

## Customizing content

- **Text & data** (name, bio, socials, tech stack, project descriptions): [`src/i18n/en.ts`](src/i18n/en.ts) and [`src/i18n/es.ts`](src/i18n/es.ts).
- **Featured GitHub repos**: `FEATURED_REPOS` in [`src/components/Projects.astro`](src/components/Projects.astro) — the section fetches live data (description, link, topics) for those repo names from `https://api.github.com/users/<username>/repos`.
- **Theme**: `baseTheme` in [`src/config.ts`](src/config.ts).

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), which builds the site with pnpm and publishes `dist/`.

If you fork this project, update `site` and `base` in `astro.config.mjs` to match your own GitHub Pages URL.
