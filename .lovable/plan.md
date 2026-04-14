

## Plan: Reorder Portfolio Sections and Add Amazon Product Images

### Changes to `src/components/PortfolioSection.tsx`:

1. **Move Amazon Products section above Vibe Coded Products section** in the JSX render order.

2. **Copy uploaded images into `src/assets/`**:
   - `user-uploads://PHOTO-2026-03-31-09-22-18.jpg` → `src/assets/amazon-add-to-cart.jpg` (for "Add to Cart on Search")
   - `user-uploads://image.png` → `src/assets/amazon-quantity.png` (for "Quantity Information System")
   - `user-uploads://image-2.png` → `src/assets/amazon-pantry.png` (for "Range Review Automation" / Pantry)

3. **Add image fields to `portfolioItems`** array — map each item to its corresponding imported image.

4. **Replace the placeholder `FolderOpen` icon** in the card's `aspect-video` area with an actual `<img>` tag using `object-cover` styling, for items that have an image. The "EU Market Expansion Suite" item has no image, so it keeps the folder icon fallback.

