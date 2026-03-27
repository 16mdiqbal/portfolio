# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (port 8080)
npm run build      # Production build
npm run lint       # ESLint
npm run test       # Run Vitest tests
npm run test:watch # Watch mode
npm run preview    # Preview production build
```

## Architecture

**Stack**: React 18 + TypeScript + Vite, React Router DOM v6, TanStack Query, Tailwind CSS, shadcn/ui (Radix UI), Framer Motion.

**Entry flow**: `index.html` → `src/main.tsx` → `src/App.tsx`

`App.tsx` wraps everything in `QueryClientProvider`, `TooltipProvider`, and toast providers, then sets up `BrowserRouter` with `basename={import.meta.env.BASE_URL.replace(/\/$/, "")}` for GitHub Pages compatibility.

**Routes**:
- `/` → `Home` — hero + highlights
- `/resume` → `Resume` — HTML resume embed + download
- `/projects` → `Projects` — grid of `ProjectCard`
- `/blog` → `Blog` — list of `BlogCard`
- `/contact` → `Contact` — contact form, Calendly booking, social links
- `*` → `NotFound`

**Data**: All content is static, living in `src/data/` (`projects.ts`, `blog.ts`, `contact.ts`). Pages import and map over these arrays.

**Styling system**: Tailwind with CSS custom properties (HSL vars) for theming. Design tokens are in `src/index.css` — warm beige/dark-brown palette, orange accent (`#ff8533`), custom fonts (DM Serif Display headings, DM Sans body). Semantic utility classes defined with `@layer`: `.section-container`, `.page-title`, `.page-subtitle`, `.accent-line`.

**Font system**: Two fonts with clear roles — `font-display` (DM Serif Display) for headings/titles, `font-body` (DM Sans) for body text. Both are globally applied in `index.css` — do NOT add `font-body` explicitly to individual Button/Input/Textarea components as it is already inherited.

**Dark mode**: Toggled via `src/hooks/useTheme.ts` which adds/removes the `dark` class on `document.documentElement` and persists to `localStorage`. Toggle button lives in `Navbar.tsx`.

**UI components**: `src/components/ui/` contains 40+ shadcn/ui components. Use these before creating new ones. New shadcn components can be added via `npx shadcn-ui@latest add <component>`.

**Path alias**: `@/` maps to `src/` — use this for all imports.

## Deployment

Hosted on GitHub Pages at `https://16mdiqbal.github.io/portfolio/`. Deployed automatically via `.github/workflows/deploy.yml` on every push to `main`. Vite base is `/portfolio/` in production and `/` in development.

The `public/404.html` handles SPA routing on GitHub Pages by redirecting unknown paths back to `index.html`.

## Key integrations

- **Contact form**: Formspree (`xpqowvbe`) via `@formspree/react`
- **Calendar booking**: Calendly at `https://calendly.com/16-mdiqbal`
- **Resume**: `public/resume.html` — HTML placeholder, update to `public/resume.pdf` when ready

## Owner profile

Mohammad Iqbal — Senior SDET at PayPay Japan, AI Engineer. 13+ years in software development, automation testing (Mobile, API, Web), and framework design. Currently focused on AI-driven QA: LLMs, RAG, MCP, LangChain, self-healing test frameworks.
