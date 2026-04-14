

## Plan: Replace EU Market Expansion with Visual Navigation

### Changes

1. **Copy uploaded images to `src/assets/`**:
   - `user-uploads://WhatsApp_Image_2026-04-14_at_16.33.14.jpeg` → `src/assets/amazon-visual-nav-coffee.jpeg` (coffee search — first image in order)
   - `user-uploads://WhatsApp_Image_2026-04-14_at_16.33.14_1.jpeg` → `src/assets/amazon-visual-nav-grounds.jpeg` (coffee grounds search — second image)

2. **Update `src/components/PortfolioSection.tsx`**:
   - Import both new images
   - Replace the "EU Market Expansion Suite" entry (id: 3) with a "Visual Navigation" project using the coffee image as the card thumbnail
   - The card will show one primary image; the second image can be shown in the modal view or as an alternate. Since each card currently supports one image, I'll use the first image (coffee search) as the card image and show both in the modal.

### Visual Navigation card details
- **Title**: "Visual Navigation"
- **Category**: "Amazon"
- **Description**: Based on the screenshots, this is about visual category navigation on Amazon search (the horizontal image carousel for filtering by product type like Grounds, Whole bean, Pods, Light roast, etc.)
- **Image**: The coffee search screenshot
- **Tags**: Appropriate search/navigation tags

