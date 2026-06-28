# Copilot instructions — Misionseg

Purpose: Give AI coding agents the minimal, project-specific guidance needed to be productive in this repo.

- **Big picture**: This is a Vite + React + TypeScript single-page site. Sources live under `src/` and static/public assets are in `public/` and `src/assets/`.
- **UI structure**: Reusable components are organized under `src/components/` with subfolders: `layout/` (Navbar, Footer), `sections/` (Cards, Testimonials, ContactPanel), and `ui/` for smaller primitives.
- **Styling**: Global styles are in `src/styles/` (not CSS modules). Key files: `src/styles/Global.css`, `src/styles/Variables.css`.

- **Build / dev / lint**: Use package scripts in `package.json`:
  - `npm run dev` — start Vite dev server
  - `npm run build` — runs `tsc -b` then `vite build`
  - `npm run preview` — preview the production build
  - `npm run lint` — run ESLint over source

- **TypeScript & config**: The repo uses TypeScript and Vite. Relevant files: `tsconfig.json`, `tsconfig.app.json`, and `vite.config.ts` (React plugin enabled). Prefer adding types where props are used rather than `any`.

- **Env / secrets**: There is a local `.env` at the project root. Do not hardcode secrets — use `.env` and reference `import.meta.env` in code when needed.

- **Dependencies & integrations**: Notable packages: `@emailjs/browser` (client email), `@vitejs/plugin-react`. There is no backend in this repo — external integrations are client-side only.

- **Conventions & patterns to follow**:
  - Functional components in `.tsx` using React 18+ patterns.
  - File names use PascalCase for components (e.g., `Testimonials.tsx`).
  - Keep components small: `layout/` for page chrome, `sections/` for page blocks.
  - Assets: `public/images/` for static public images; `src/assets/images/` for imported images.
  - Prefer explicit `type` or `interface` for props. Examples exist in `src/components/sections/Testimonials.tsx` (component shape and `Card` type).

- **What to change or avoid**:
  - Do not change `tsconfig` or `vite.config.ts` unless addressing a specific build/tooling issue — these are configured for the current project layout and React plugin.
  - Avoid introducing runtime-only transformations that bypass TypeScript checks; keep `tsc -b` passing.

- **Where to look for examples**:
  - Component patterns: `src/components/sections/` (Cards.tsx, ContactPanel.tsx, Testimonials.tsx)
  - App entry: `src/main.tsx`, `src/App.tsx`
  - Build/dev scripts: `package.json`

- **Missing pieces discovered**: No test harness discovered; follow lightweight manual verification: run dev server and load the site.

If this is unclear or you want more detail (routing, state management, or where CSS variables are used), say which area and I will expand the instructions.
