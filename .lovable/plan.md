

## Plan: Adjust Image Position for Visual Navigation Card

The `object-top` class anchors to the very top of the image, which shows the phone status bar (time, wifi, battery). The visual navigation carousel sits just below that, getting partially hidden by the card description overlay.

### Fix in `src/components/PortfolioSection.tsx`

Replace `object-top` with a custom `object-position` style (e.g., `object-position: 0 -40px` or similar) on the portfolio card `<img>` tag, so the image shifts up enough to crop out the status bar while keeping the carousel visible. This can be done inline with a `style` prop or via a Tailwind arbitrary value like `object-[center_top_-40px]`. I'll test with `object-[0_-30px]` and adjust as needed.

Single line change on the `<img>` element in the portfolio card rendering.

