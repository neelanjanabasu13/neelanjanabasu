# Add squiggly borders and bolder folk-art accents

The current site has the paper ground, typography, and small motifs, but it is missing the loud gallery-wall furniture from the reference: the vertical squiggle rails running down both page edges, the bold Madhubani-style border bands between sections, the "◆ PANEL X · NAME" labels above each section title, the diamond scroll rail on the right, and the strong colored top-bars on cards. This plan adds only those decorative layers, drawn in the Madhubani border vocabulary from the Pinterest/Udaan Creation reference (lotus row, peacock feather, fish, wave-with-dots, dot-and-line, floral vine, zigzag, spiral). No content, no copy, no data changes.

## What to add

**1. Vertical squiggle rails on the page edges**
- Two thin fixed-position SVGs anchored to the left and right viewport edges, running full page height, drawn as a continuous vertical wavy contour line in vermilion (`#C1272D`) at roughly 1.25px stroke, echoing the black contour convention.
- Single `PageEdgeRails` component mounted once in `src/pages/Index.tsx`, `position: fixed`, `pointer-events: none`, below the floating nav.
- Hidden below `md` so mobile stays clean.

**2. Diamond scroll-position rail (right side)**
- A vertical stack of 5 small diamonds fixed to the right edge, mid-viewport, matching the reference. The active section's diamond fills vermilion; the others stay as amber outlines.
- New `SectionRail` component using `IntersectionObserver` on the 5 section IDs (`ai-products`, `portfolio`, `experience`, `work-with-me`, `guestbook`).

**3. Panel labels above each section heading**
- Small caps label with a leading filled diamond, e.g. `◆ PANEL ONE · NOW`, in vermilion, Fraunces small caps, letter-spaced.
- Add to AI Built (PANEL ONE · NOW), Amazon Shipped (PANEL TWO · AMAZON), Experience (PANEL THREE · TIMELINE), Work With Me (PANEL FOUR · REFERENCES), Education (PANEL FIVE · SCHOOL), Guestbook (PANEL SIX · GUESTBOOK).
- Rendered via a shared `PanelLabel` component.

**4. Madhubani border bands between sections**
- New `SectionDivider` component drawn as authored inline SVG tiles bounded top and bottom by two parallel contour lines (the reference convention), tiling edge-to-edge, in the folk palette (vermilion, teal, amber, black contour).
- Variants, each based on a specific border from the Udaan Creation reference:
  - `lotus`: pink lotus buds with green leaves on a baseline. Used at the bottom of Hero and bottom of Work With Me.
  - `wave`: undulating double wave with amber dots in the loops. Used under AI Built.
  - `fish`: alternating fish facing left and right with dot clusters between. Used under Amazon Shipped.
  - `peacock`: peacock-feather eyes in teal and amber. Used under Experience.
  - `zigzag`: filled triangles alternating teal, vermilion, amber. Used under Education.
  - `dotline`: vertical strokes with periodic dot clusters. Used under Guestbook.
- Each variant sits on a paper-tone strip so it reads as a distinct band. Height ~44px.

**5. Corner cluster upgrade**
- Add two authored corner-cluster SVGs (top-left and bottom-right of the hero, top-right of Guestbook) built from the same lotus-and-vine vocabulary as the reference, at ~140px, roughly 25% opacity behind text so they punctuate without competing.
- Added inside `HeroSection.tsx` and `GuestbookSection.tsx` only.

**6. Strengthen card top-accents**
- The reference shows each "What I'm building" card with a bold 6px colored top bar (magenta, amber, teal, vermilion). Add `border-top: 6px solid` in the card's existing accent color inside `AIBuiltSection`, without touching card content or layout.

## Files to change

- `src/assets/motifs/Motifs.tsx` — add `SquiggleVertical`, `LotusBand`, `WaveBand`, `FishBand`, `PeacockBand`, `ZigzagBand`, `DotLineBand`, `CornerClusterLotus` SVGs.
- `src/components/PageEdgeRails.tsx` — new, fixed left/right squiggle rails.
- `src/components/SectionRail.tsx` — new, right-edge diamond scroll indicator.
- `src/components/PanelLabel.tsx` — new, shared `◆ PANEL X · NAME` label.
- `src/components/SectionDivider.tsx` — new, `lotus | wave | fish | peacock | zigzag | dotline` variants.
- `src/pages/Index.tsx` — mount `PageEdgeRails` and `SectionRail`, insert `SectionDivider` between sections.
- `src/components/HeroSection.tsx` — add corner clusters and a lotus band at the bottom edge.
- `src/components/AIBuiltSection.tsx` — add `PanelLabel`, wave band below, 6px colored top-bar on each card.
- `src/components/AmazonShippedSection.tsx` — add `PanelLabel`, fish band below.
- `src/components/ExperienceSection.tsx` — add `PanelLabel`, peacock band below.
- `src/components/WorkWithMeSection.tsx` — add `PanelLabel`, lotus band below.
- `src/components/EducationSection.tsx` — add `PanelLabel`, zigzag band below.
- `src/components/GuestbookSection.tsx` — add `PanelLabel`, dot-line band below, corner cluster.

## What will not change

All copy, all 12 vibe-coded product cards, all 4 Amazon cards, Experience, Education, Guestbook, headshot, floating nav items, resume link, section order, and the existing small motifs stay exactly as they are. No color-token changes beyond the accent border-top on AI cards. No new dependencies.

## Verification

After building, screenshot the homepage at 1280px wide with Playwright and compare the hero, AI Built, Amazon, Work With Me, and Guestbook sections against the cream reference images plus the Madhubani border sheet. Iterate on stroke weight, band height, and corner-cluster opacity only if they read thinner than the reference.
