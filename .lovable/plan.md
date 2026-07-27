## What I understand from your brief

The site should look like it was made by someone who actually paints Madhubani and Pattachitra, not someone who applied an "Indian theme." The rules I am reading:

**Ground.** True paper off-white (#FAF9F6 to #FAF7F1, L 96–97%, S under 15%). Not beige, not cream, not tan. The ground never changes anywhere on the page. No tinted sections, no dark hero, no inverted panels, no full-width coloured bands.

**Colour lives only in the motifs.** Palette is bright and unapologetic (madder, terracotta, marigold, forest, parrot, indigo, peacock, soft pink), and every motif carries a hand-drawn black contour line (#1A1A18). Coloured shapes without an outline read as clipart and are wrong.

**Motifs are punctuation, not architecture.** 16 to 40 px, sparse, placed beside a heading, between stats, as a divider, in a margin. Subjects are figurative: lotus, vine, leaves, fish, birds, peacocks, parrots, elephants, sun, moon. Flowers always come with leaves or a tendril. Line is slightly irregular, drawn in one pass. No big mihrab arch, no full-width architectural frame, no dense pattern behind body text.

**Shape language is soft and rounded.** No rectangular containers, no bordered cards, no pill chips with hard edges, no boxed badges, no square icon buttons. If contrast can do the job, do not draw a box.

**Type.** Fraunces (with `font-variation-settings: 'SOFT' 40, 'WONK' 1`) for headings, labels and numbers. Lora for body.

**Space.** Gallery-wall generous. Bare is usually correct.

**Icons only** for email, Substack, GitHub, LinkedIn, X, each with aria-label and tooltip. Never icon plus name.

**Already tried and forbidden:** #F4E8D2 or any beige ground, saturated page grounds, alternating panel grounds, big architectural frames around the hero, tiled patterns behind body text, hard offset shadows, 2px black borders, Devanagari/Sanskrit/Bengali script, multiple city names, text rows of social links, duplicated contact details in a footer or contact section.

**Copy.** No em-dashes, no staccato stacks, no rewriting my copy, no invented placeholders, no deletions without asking.

## Proposed next step: a sandbox, not the live site

You asked to see samples before any change. I will not touch the live site yet. Instead, I will build one throwaway route, `/sandbox`, that renders the **same hero content you already have** on the paper ground, with three side-by-side treatments of the motif language so you can point at what works and what does not.

### Sandbox contents

1. Global sandbox styles: paper ground `#FAF9F6`, Fraunces headings with SOFT 40 / WONK 1, Lora body. No component in the sandbox uses rectangles, borders or pill chips, so you can judge the shape language honestly.

2. Three motif treatments of the hero, stacked vertically, each labelled with a small Fraunces caption:

   **A. Margin punctuation.** A single 28 px lotus-with-leaves at the top-left of the headline, a small vine tendril breaking the line between the headline and the sub, one 20 px fish beside the availability sentence. Icons row underneath, no boxes, no tooltips shown but wired.

   **B. Divider as motif.** No motifs beside text. Between hero and the next section, a hand-drawn horizontal vine of ~24 px height runs across roughly a third of the column width, off-centre, with a peacock at one end and three leaves at the other. Everything else is empty paper.

   **C. Corner cluster.** A small Pattachitra-style tree-of-life cluster (~40 px tall) tucked into the top-right margin of the hero block, with the sun as a 16 px motif near the availability line. Nothing else decorated.

3. Motif assets: I will hand-author the motifs as inline SVG with a single 1.25 px black contour stroke, deliberately imperfect Bézier curves (no perfect circles, no uniform radii), filled with the palette hexes you gave. No raster, no generated art. Roughly 6 to 8 small SVGs total for the sandbox: lotus-with-leaves, vine tendril, fish, peacock, leaf trio, sun, tree-of-life cluster.

4. Icons row (email, Substack, GitHub, LinkedIn, X) rendered without backgrounds or borders, aria-labelled, with tooltips on hover. Same set in all three treatments so you are only judging the motif logic.

### Out of scope for this step

No changes to the live homepage, no changes to any existing section, no route removed, no content edited. The sandbox is additive and lives at `/sandbox` until you pick a direction. Once you tell me which treatment (or which mix) is right, I will plan the real rollout section by section, one change at a time, per your rules.

### Technical notes

- New file `src/pages/Sandbox.tsx`, new route in `src/App.tsx`, new folder `src/assets/motifs/` for the inline SVG components (`LotusLeaves.tsx`, `VineTendril.tsx`, `Fish.tsx`, `Peacock.tsx`, `LeafTrio.tsx`, `Sun.tsx`, `TreeOfLife.tsx`).
- Sandbox scopes its own styles inline or via a local wrapper class so it cannot leak into the rest of the site.
- Fraunces and Lora are loaded via Google Fonts `@import` at the top of `src/index.css` (before Tailwind directives, to avoid the regression we hit before). Variation settings applied only inside the sandbox wrapper for now.
- No changes to `tailwind.config.ts`, no changes to the design tokens in `:root`, until you approve a direction.
