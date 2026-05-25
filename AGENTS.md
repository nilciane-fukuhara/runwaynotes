# AGENTS.md — MAISON Fashion Editorial

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

MAISON is a premium fashion editorial website inspired by Vogue's visual identity. It combines fashion trend coverage with film curation from the fashion universe, built as a single editorial homepage with content-driven articles.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Fonts | Google Fonts (Cormorant Garamond + DM Sans) |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5.7 |
| Deployment | Netlify |

## Directory Structure

```
├── content/
│   └── posts/               # Markdown fashion articles (6 editorial pieces)
├── src/
│   ├── routes/
│   │   ├── __root.tsx       # Shell: Google Fonts preconnect, html/head/body
│   │   ├── index.tsx        # Full homepage — all sections as named components
│   │   ├── category.$category.tsx
│   │   └── posts.$slug.tsx
│   ├── components/
│   │   └── blog-posts.tsx   # Legacy component (not used by homepage)
│   └── styles.css           # Global CSS: custom properties, animations, utilities
├── content-collections.ts   # Schema and transform for markdown posts
├── AGENTS.md
└── README.md
```

## Key Architecture Decisions

- **All homepage sections in `index.tsx`**: The site is a single editorial page. Sections (NavBar, Hero, MarqueeBanner, TrendingSection, EditorialFeature, FilmsSection, Newsletter, Footer) are defined as named functions in the same file.
- **CSS custom properties over Tailwind tokens**: The luxury palette (`--color-paper`, `--color-taupe`, `--color-sand`, `--color-ink`, etc.) lives in `:root` in `styles.css` and is referenced via `style={{ color: 'var(--color-*)' }}` inline props and CSS utility classes.
- **Films as inline data**: The six film recommendations are a static array in `index.tsx` — no content system needed for data that rarely changes.
- **Content Collections for posts**: Fashion articles use markdown so content can be added without touching React code.
- **No `content` field in schema**: Individual post pages aren't built yet; the schema only exposes what the homepage needs.

## Coding Conventions

- **Typography**: `font-display` class = Cormorant Garamond (headings/display text); `var(--font-body)` = DM Sans (body copy).
- **Animations**: CSS `@keyframes` with `animation-delay` classes (`animate-delay-1` through `animate-delay-5`) for staggered reveals on the hero.
- **Image hover zoom**: Wrap `<img>` in `<div className="img-hover-zoom">` — the CSS handles `transform: scale(1.04)`.
- **Card hover**: Add `className="editorial-card"` for the lift-on-hover effect; `film-card` for film cards with box-shadow.
- **Link underlines**: Use `className="link-underline"` for the scaleX animation underline effect.
- **Never hardcode hex values** in components — always `var(--color-*)`.

## Adding Content

Drop a `.md` file into `content/posts/` with:

```yaml
---
date: YYYY-MM-DD
title: "Title"
summary: "One-sentence teaser"
categories: ["Tendências"]   # or Desfiles, Street Style, Acessórios, Celebridades
image: https://images.unsplash.com/photo-...?w=800&q=80&fit=crop
---

Article body here...
```

The post appears automatically in the trending grid. The first post with category "Desfiles" is used as the featured card.

## Development Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
```
