# Pointz Logistics

Marketing site for Pointz Logistics — a flatbed, Moffett piggyback and cross-dock
carrier operating across the GTA and Ontario.

Built with Next.js 16 (App Router), React 19 and plain CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run images:webp` | Convert `.jpg`/`.png` under `public/` to `.webp`. Pass `-- --frames` to include `public/assets/frames`. |

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for OpenGraph URLs, `sitemap.xml` and `robots.txt`. Defaults to `https://pointzlogistics.ca`. |

## Structure

```
src/app/          Routes (App Router). Each route has a layout.js holding its metadata.
src/components/   Shared components, each paired with its own .css file.
src/lib/          site.js (SEO constants + route list), motion.js (shared framer-motion variants).
public/assets/    Images. frames/ holds the 240-frame scroll sequence.
```

### Styling

There is no CSS framework. Design tokens — colours, type scale, spacing, easings —
live in `src/app/globals.css` as custom properties. Use them by role
(`--fs-heading`, `--text-muted`) rather than hardcoding values.

### The scroll sequence

`src/components/SplitLayout.jsx` drives the home page's desktop layout: content
scrolls on the left while a fixed `<canvas>` on the right scrubs through 240 webp
frames tied to scroll position. Below 768px it falls back to a stacked layout and
the frame loader never runs.

To regenerate the frames, drop the source images into `public/assets/frames` and run
`npm run images:webp -- --frames`.

## Adding a route

1. Create `src/app/<route>/page.js`.
2. Add a sibling `layout.js` exporting `metadata` (title, description, canonical) —
   the page components are client components and cannot export metadata themselves.
3. Add the path to `ROUTES` in `src/lib/site.js` so it lands in the sitemap.
