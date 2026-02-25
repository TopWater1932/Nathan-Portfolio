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


## Project Purpose:
- Website for showcasing Nathan Coelho as an associate software developer.
- Two broad sections in a nav bar at the top of the page:
    - Landing page with featured projects
    - Blog page for posting learnings and articles

## Design
- The overall design should be Apple-like - modern, intuitive and nice looking.
- It should have a header with navbar, body, side margins.
- It should be responsive to both mobile devices and desktop screens.
- Initially, just create a template so I can put content in myself.

### 1.1 Header
- The navbar should include two items:
    - Home (which takes you to the landing page)
    - Blog
- The items should be spaced, but offset to the left of the page.

### 1.2 Landing Page Content
- The landing page should start with an attention grabbing title, and a two sentence introduction to who I am.
- Include 1 line with my contact details immediately below this. It should include an email icon with my email address, LinkedIn icon and Github icon.
- The scroll down to see my protfolio projects listed out.
- Each project item should have:
    - An image
    - Project Name
    - 1 line for tags (E.g. Vibe-coded, React, RestAPI, Database etc)
        - Each tag should appear as it's own seperate bubble in one line.
    - Description
    - Date Posted
- Each project item should behave as a link to take you to the project for viewing.

### 1.3 Blog Page Content
- This page should start with an image, overlain with the title Blog and a 1 sentence description.
- Underneath this section, the different blog posts should be tiled in rows of max 3 depending on the width of the window.
- Each tile should include:
    - A placeholder image or pattern.
    - A title
    - The first 30 words of the content, followed by a '...'
    - A posted date
- When the tile is clicked, it should take you to a seperate page as described below in item 1.4.


### 1.4 Blog Article Page
- This page should maintain the header and side margins.
- The body should start with the title, along with the post date and author.
- Then it should have a section for the blog content, initially with placeholder text.
- I should be implemented as a reusable React component that is rendered with different content.