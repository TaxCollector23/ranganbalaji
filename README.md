# Rangan Balaji — Portfolio

Personal portfolio of **Rangan Balaji** — builder, developer, and student.
Live at **[ranganbalaji.vercel.app](https://ranganbalaji.vercel.app)**.

A clean, minimalist, premium portfolio positioned for a builder and founder:
software engineering, startups, AI, and product development — with
[Fracture Studio](https://fracturestudio.vercel.app) as the flagship project.

## Tech Stack

- **[Next.js 15](https://nextjs.org)** — App Router
- **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Framer Motion](https://www.framer.com/motion/)** — reveal & shimmer animations
- **[Lucide](https://lucide.dev)** — icons
- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — Cormorant Garamond, Space Grotesk, Source Serif 4, DM Mono

## Design

Dark palette (`#0d0d0d`), blue-grey accent, subtle dot-grid background, soft
radial glow, and elegant fade-in / shimmer animations. Mobile-first, fully
responsive, accessibility-friendly (reduced-motion aware, semantic landmarks,
focus-visible styles), and optimized for fast loads.

## Project Structure

```
app/          App Router — layout (fonts, SEO/OG metadata), page, global styles
components/   Reusable section components (Hero, About, FeaturedProject, …)
  ui/         Primitives (Reveal, SectionHeader)
lib/          Content data and font configuration
public/       Static assets (favicon)
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Deployment

Optimized for [Vercel](https://vercel.com). Push to the `main` branch or run
`vercel --prod`.

---

Built with curiosity and a focus on creating useful things.
