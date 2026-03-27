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

`App.tsx` wraps everything in `QueryClientProvider`, `TooltipProvider`, and toast providers, then sets up `BrowserRouter` with a layout of sticky `Navbar` → routes → `Footer`.

**Routes**:
- `/` → `Home` — hero + highlights
- `/resume` → `Resume` — PDF viewer + download
- `/projects` → `Projects` — grid of `ProjectCard`
- `/blog` → `Blog` — list of `BlogCard`
- `/contact` → `Contact` — contact info + social links
- `*` → `NotFound`

**Data**: All content is static, living in `src/data/` (`projects.ts`, `blog.ts`, `contact.ts`). Pages import and map over these arrays. No API calls currently; React Query is set up for future use.

**Styling system**: Tailwind with CSS custom properties (HSL vars) for theming. Design tokens are in `src/index.css` — warm beige/dark-brown palette, orange accent (`#ff8533`), custom fonts (DM Serif Display headings, DM Sans body). Semantic utility classes defined with `@layer`: `.section-container`, `.page-title`, `.page-subtitle`, `.accent-line`.

**UI components**: `src/components/ui/` contains 40+ shadcn/ui components. Use these before creating new ones. New shadcn components can be added via `npx shadcn-ui@latest add <component>`.

**Path alias**: `@/` maps to `src/` — use this for all imports.
