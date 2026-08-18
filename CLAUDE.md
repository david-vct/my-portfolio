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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
