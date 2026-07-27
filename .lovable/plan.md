# Motif fix + quiet interactivity

Motifs stay small, at the edges, and reward attention. Nothing full-screen, nothing on load, nothing that delays reading. One reveal per element, never repeats.

## 1. Redraw the lotus

The current `LotusLeaves` reads as a lumpy blob because the two outer petal paths overlap the inner ones and the leaves stick out sideways. Redraw as a proper Madhubani lotus, symmetric, tiered:

- Five outer petals arcing outward from a base.
- Three inner petals, narrower, nested inside.
- A pointed bud tip at the centre with two dot stamens.
- Two curved leaves at the base, tips outward.
- Every stroke black `#1A1A18`, fills from the existing palette (vermilion `#C1272D`, pink `#E38FA8`, greens for leaves).

Same export name and props so every existing consumer keeps working. Also tighten `LotusBand` inside `SectionDivider.tsx` to use the new geometry so the divider bands stop looking scribbled.

## 2. Outline-first, then colour on scroll-in

New tiny hook `useDrawIn` using `IntersectionObserver` (threshold ~0.4, `once: true`). When a motif enters view:

- t=0: `fill="none"`, stroke visible, `stroke-dasharray` animated so the contour draws in over ~700ms.
- t=700ms: fills fade in over ~500ms via CSS `fill-opacity` transition.

Wrap the existing motifs with a `<MotifReveal>` component that clones the SVG children and applies the two-phase animation. Runs once per element, honours `prefers-reduced-motion` by skipping straight to filled state. No repeat on re-entry.

## 3. Vine scrollbar down the left margin

New `VineScrollbar.tsx` replacing the left `PageEdgeRails` squiggle (right rail stays as-is):

- Fixed-position SVG, full viewport height, ~28px wide, sits in the existing left gutter.
- A single stem path with `pathLength=1` and `stroke-dashoffset` bound to `window.scrollY / (scrollHeight - innerHeight)` so the vine grows as the reader descends.
- One leaf anchored at each section's y-offset (measured from section ids: `#ai-products`, `#portfolio`, `#experience`, `#work-with-me`, `#education`, `#guestbook`). Leaves unfurl (scale + rotate from 0 to 1) as the stem tip passes them.
- The section currently in view (tracked via the same IntersectionObserver `SectionRail` already uses) gets a bloomed flower instead of a leaf. Only one flower at a time.
- Clicking a leaf/flower scrolls to that section, giving it a real navigational job. `aria-label` on each.
- Hidden on viewports narrower than the gutter (`< lg`), site falls back to native scroll.
- `prefers-reduced-motion`: vine renders fully drawn, no growth animation, still clickable.

Removes the redundant left squiggle from `PageEdgeRails` and keeps the right rail. `SectionRail`'s diamond indicator stays.

## 4. Sun and moon by visitor clock

New `SkyMark.tsx` mounted once in `HeroSection` upper corners:

- Read `new Date().getHours()` on mount.
- 6:00 to 18:59: render `Sun` in the upper-right of the hero.
- Otherwise: render a new `Moon` motif (crescent, black contour, cream fill, one dot) in the same slot.
- Sun is already in `Motifs.tsx`, add `Moon` alongside it in the same file.
- Sized ~28px, positioned absolutely so it sits inside the hero corner, does not shift on scroll, has an `aria-label` of "Daytime here" or "Nighttime here".

## 5. Guestbook plaques with random borders

In `GuestbookSection.tsx`:

- Each rendered note becomes a small "plaque" card with a thin folk border assigned deterministically from its index: pick one of `lotus`, `wave`, `fish`, `peacock`, `zigzag`, `dotline` (the six band variants already in `SectionDivider`).
- Extract the band SVGs from `SectionDivider` into a shared `MotifBand` component so both the section dividers and the plaques can reuse them at small size (~16px tall).
- Border sits along the top edge of each plaque only, so notes stack cleanly.
- New notes appended by the existing form pick up the next variant in rotation. No repeats within a row of three.

## Explicitly not doing

Hover-bloom links, drifting fish, email copy leaf, anything full-screen or on-load. Deferred until after these five land.

## Files touched

- Edit: `src/assets/motifs/Motifs.tsx` (redraw lotus, add `Moon`)
- Edit: `src/components/SectionDivider.tsx` (extract bands into `MotifBand`, use new lotus)
- Edit: `src/components/PageEdgeRails.tsx` (drop left rail)
- Edit: `src/components/HeroSection.tsx` (mount `SkyMark`)
- Edit: `src/components/GuestbookSection.tsx` (plaque borders)
- Edit: `src/pages/Index.tsx` (mount `VineScrollbar`)
- New: `src/components/MotifReveal.tsx`, `src/hooks/useDrawIn.ts`
- New: `src/components/VineScrollbar.tsx`
- New: `src/components/SkyMark.tsx`
- New: `src/components/MotifBand.tsx`

No content deleted. All 12 vibe-coded products, 4 Amazon projects, Experience, Education, Work With Me, Guestbook, headshot stay intact.
