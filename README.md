# Renee Nyong — Portfolio

Personal portfolio site for Renee Nyong, a Generative AI application developer. Built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

**Live site:** [reneenyong-portfolio.vercel.app](https://reneenyong-portfolio.vercel.app/)

## Features

- Interactive hero with a parallax portrait, swappable backdrop, and a scrolling marquee
- Section-by-section case for the work: About, Experience, Education, Projects, Hackathons, Skills, Contact
- Light and dark mode, following the system preference by default and remembering an explicit choice
- Slide-to-reveal control for the email address, to keep it off crawlers by default
- Draggable photo stacks, an animated hackathon deck, and scroll-spy section navigation
- Fully responsive, with reduced-motion support baked into the animations

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) for animation
- [Embla Carousel](https://www.embla-carousel.com/) for the hackathon deck

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. The page hot-reloads as you edit.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/                 # App Router entry point, global styles, metadata
  components/          # Shared UI (nav, reveal animations, theme toggle, ...)
    hero/               # Hero-specific pieces (portrait, backdrop, picker)
    sections/           # One component per page section
  content/
    site.ts             # All copy, links, and structured content for the site
public/                 # Static assets — portrait, project screenshots, photos
```

### Editing content

Almost everything on the page — name, bio, work history, projects, hackathons, skills, and links — is data-driven from [`src/content/site.ts`](src/content/site.ts). Update that file rather than the section components when you just need to change copy, add a role, or swap a project.

Images live in `public/` and are referenced by path from `site.ts`. Because Next.js caches `/_next/image` output by URL, replacing a photo in place won't bust the cache — give the new file a different filename and update the reference.

## Deployment

The site deploys to [Vercel](https://vercel.com). Pushing to `main` triggers a new production deployment automatically.
