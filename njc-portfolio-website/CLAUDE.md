# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # TypeScript check + production build (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Serve the production build locally
```

No test runner is configured.

## Architecture

**Stack:** React 19 + TypeScript 5 + Vite 7 SPA

**Entry points:**
- `index.html` → `src/main.tsx` (mounts `<App />` into `#root`)
- `src/App.tsx` is the root component
- `src/assets/` for static assets

**TypeScript config is split:**
- `tsconfig.app.json` — covers `src/` (strict mode, ES2022, `react-jsx`)
- `tsconfig.node.json` — covers `vite.config.ts` only
- `tsconfig.json` — references both above

**ESLint** uses the flat config format (`eslint.config.js`, ESLint 9+).

**Styling:** Plain CSS files (`index.css` for globals, `App.css` per-component). Light/dark mode handled via `prefers-color-scheme` media query.

## Conventions

- Strict TypeScript: no unused locals/params, strict null checks
- React 19 automatic JSX transform — no need to `import React` in component files
- `"type": "module"` in package.json — all files are ES modules
