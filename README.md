# Nuvic Demo Hub

A standalone Next.js + Tailwind implementation of the **Nuvic Hub — Demo Map** page, designed to mirror the layout, spacing, typography, and dark visual style from the provided reference while using fully original code.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- `next/image` for all remote images

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open:
   - `http://localhost:3000/` (alias route)
   - `http://localhost:3000/nuvic-hub-demo-map` (primary route)

## Build & run production

```bash
npm run build
npm run start
```

## Project structure

- `app/page.tsx` → route alias that serves the same page as `/nuvic-hub-demo-map`
- `app/nuvic-hub-demo-map/page.tsx` → all page content/sections
- `components/StepCard.tsx` → reusable step card with File upload vs Locked state
- `components/Section.tsx` → section wrapper for title + description
- `components/Gallery.tsx` → responsive 6-image grid
- `app/globals.css` → Tailwind layers + custom utilities/theme styles

## Editing copy and links

- Main page copy and section order: `app/nuvic-hub-demo-map/page.tsx`
- Unlock CTA link for locked modules (`https://whop.com/nuvic-arts-hub/`): `components/StepCard.tsx`
- Final CTA link (`https://gamma.app`): `app/nuvic-hub-demo-map/page.tsx`
- Nuvic Library image URLs: `components/Gallery.tsx`
- Core Engine banner URL: `app/nuvic-hub-demo-map/page.tsx`

## Locked state behavior

- Locked cards show a lock badge (`🔒 Locked`) and only allow the **Unlock Full System** link button.
- File-upload cards show a non-functional placeholder **Download / Upload** button.
- This keeps the demo clear while preserving access boundaries.

## Wiring real downloads later

To connect real downloads/uploads in the future:

1. Replace the placeholder button in `components/StepCard.tsx` with a real `<Link>` or action handler.
2. Add a downloadable file endpoint (e.g., object storage signed URL or API route).
3. Introduce auth/entitlement checks before returning protected files.
4. Optionally pass handlers/URLs via props so each step can wire to different resources.

## Accessibility and SEO

- Semantic sectioning and heading hierarchy.
- `aria-label` attributes on interactive elements and footer nav.
- Metadata/Open Graph configured in `app/layout.tsx`.
