# Plan: Scalable Vibe-Coded Products Carousel

## Goal
Let you keep adding vibe-coded products without making the page longer. The top 4 products stay visible; everything else slides in a horizontal, paginated carousel similar to the reference site.

## What we will build
1. **Keep the current top row untouched**
   - Recipe2Reel, Slack Agent, PM Sandbox, Email Agent remain in the existing `lg:grid-cols-4` row.
   - Their styling, platform badges, award badge, and links stay exactly as they are.

2. **Add a paginated carousel below the top row**
   - A new carousel component sits directly under the top row inside `AIBuiltSection.tsx`.
   - Each page shows **4 cards** in a responsive grid (`sm:grid-cols-2 lg:grid-cols-4`).
   - Cards keep the same card component, badges, and link styling as the top row so the section feels unified.

3. **Navigation controls**
   - Left/right arrow buttons labeled **← back** and **more projects →**.
   - Dot indicators below the carousel showing the current page.
   - Clicking a dot jumps to that page.
   - Prev button is hidden on page 1; next button is hidden on the last page.

4. **Touch / swipe friendly**
   - The carousel track uses CSS scroll-snap so it works naturally on mobile with swipe gestures.
   - On desktop, arrow buttons advance one page at a time.

5. **Animation**
   - Page transitions use a smooth horizontal slide via `framer-motion` (already installed).
   - Cards inside each page keep their existing fade-in-on-scroll animation.

## Files to change
- `src/components/AIBuiltSection.tsx` — split the product list into `featuredProducts` (top 4) and `carouselProducts` (the rest), render the carousel below the grid.
- `src/components/AICarousel.tsx` (new file) — reusable paginated carousel with prev/next, dots, and scroll-snap.

## Out of scope
- No changes to the Amazon Shipped section, Experience, Skills, Education, or Contact sections.
- No backend or CMS; products will still be added by editing the array in `AIBuiltSection.tsx`.

## Open question
Do you want the carousel to auto-rotate, or should it only move on user interaction? I recommend manual-only so visitors can read at their own pace.