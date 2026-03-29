# Mohammad Iqbal — Portfolio

Personal portfolio of Mohammad Iqbal, Senior SDET & AI Engineer at PayPay Japan.

🌐 **Live site**: [16mdiqbal.github.io/portfolio](https://16mdiqbal.github.io/portfolio/)

## Pages

- **Home** — Hero section with intro and highlights
- **Projects** — Showcase of personal and professional projects
- **Blog** — Technical articles on QA engineering and AI-driven testing
- **Resume** — Embedded resume with download option
- **Contact** — Contact form, Calendly booking, and social links

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [shadcn/ui](https://ui.shadcn.com/) — UI components
- [Framer Motion](https://www.framer.com/motion/) — animations
- [React Router](https://reactrouter.com/) — client-side routing
- [Fontsource](https://fontsource.org/) — self-hosted fonts (DM Sans, DM Serif Display)
- [Puppeteer](https://pptr.dev/) — resume PDF generation
- [Formspree](https://formspree.io/) — contact form
- [Calendly](https://calendly.com/16-mdiqbal) — meeting booking

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run preview` | Preview production build |
| `node scripts/generate-resume-pdf.mjs` | Generate resume PDF locally from `resume-embed.html` |

## Resume

The resume is maintained as `public/resume-embed.html` (two-column HTML). On every deploy, GitHub Actions runs Puppeteer to auto-generate `resume.pdf` from it. To update the resume, edit `resume-embed.html` and push — the PDF regenerates automatically.

## Dark Mode

Supported via a toggle in the navbar. Preference is persisted to `localStorage`.

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.
