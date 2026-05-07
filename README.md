# pranitasable.dev — portfolio landing

Personal portfolio site for **Pranita Sable**: a single-page React app that introduces experience, skills, and upcoming projects on this domain.

**Live site:** [https://pranitasable.dev](https://pranitasable.dev)

## Tech stack

- [React 19](https://react.dev/) — UI
- [Vite 8](https://vite.dev/) — dev server and production build
- [ESLint](https://eslint.org/) — static analysis

## Prerequisites

- **Node.js** 20+ (CI uses Node 22; align your local version with [`.github/workflows/ci.yml`](.github/workflows/ci.yml) if you want parity)
- **npm** (comes with Node)

## Local development

Install dependencies:

```bash
npm ci
```

Start the dev server with hot reload:

```bash
npm run dev
```

Open the URL Vite prints (typically [http://localhost:5173](http://localhost:5173)).

## Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start Vite dev server                |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Serve `dist/` locally (smoke test)   |
| `npm run lint`    | Run ESLint on the project            |

## Continuous integration

On every **pull request** and every **push to `main`**, GitHub Actions runs:

1. `npm ci`
2. `npm run lint`
3. `npm run build`

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml). Enable **branch protection** on `main` and require this workflow to pass before merge if you want enforced gates.

## Deployment

The site deploys to **[Vercel](https://vercel.com/)** from this Git repository: pushes to `main` trigger a production build; pull requests get preview URLs when Vercel is connected to the repo.

Custom domain and DNS (e.g. Cloudflare) are configured in the Vercel project and registrar — not in this repo.

## Project layout

```text
landing/
  src/
    App.jsx       # Main page content and structure
    App.css       # Component styles
    index.css     # Global styles and design tokens
    main.jsx      # React entry
  index.html
  vite.config.js
  package.json
```

## License

Private / personal — all rights reserved unless you add an explicit license later.
