# My Portfolio

Personal portfolio site for David Vicente (freelance web developer), built to showcase work, skills, and services to potential clients/employers.

## Stack

- **Next.js 16** (App Router, `app/` directory), React 19, TypeScript (strict mode)
- **Tailwind CSS 4** for styling — custom colors defined in [tailwind.config.ts](tailwind.config.ts) (`primary`, `secondary`, `accent`, `base`, `neutral`, `light`)
- **FontAwesome** (`@fortawesome/*`) for icons
- Single locale: French (`lang="fr"` in [app/layout.tsx](app/layout.tsx))

## Structure

- `app/page.tsx` — home page, composes layout sections in order: `Hero` → `PresentationSection` → `ServicesSection` → `ProjectSection` → `Footer`
- `app/components/layout/` — one component per page section (Hero, PresentationSection, ServicesSection, ProjectSection, TechnoSection, Footer)
- `app/components/common/` — small reusable pieces (`ButtonLink`, `Project` card, `Title`)
- `public/` — static assets (images, profile picture, etc.)

This is a single static page app — no routing beyond `/`, no API routes, no backend, no database.

## Conventions

- Tabs for indentation (not spaces)
- No test suite currently in place
- ESLint config extends `next/core-web-vitals` ([.eslintrc.json](.eslintrc.json))
- Path alias `@/*` maps to project root (see [tsconfig.json](tsconfig.json))
- **Dev server lifecycle**: before starting `npm run dev` to verify a change, check whether one is already running (e.g. `curl -sf http://localhost:3000`). If it's already up, treat it as the user's — use it, and never kill it. Only start your own instance if none is running, and note its exact PID (`$!`) when you launch it. When you're done, kill only that specific PID (never a broad `pkill -f "npm run dev"` / `pkill -f next-server`, which could hit the user's instance too). Never leave an instance you started running unused after your task is done.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
