

## Plan: Focus Image on Visual Navigation Carousel

The uploaded screenshot shows the full Amazon search page, but the visual navigation carousel (the horizontal strip with category images like Grounds, Whole bean, Pods) is at the **top** of the image. With `object-cover`, the card crops to the center, showing the video result instead.

### Fix in `src/components/PortfolioSection.tsx`

Change the `<img>` tag styling for portfolio cards from `object-cover` (centers the crop) to `object-cover object-top` so the image anchors to the **top** of the frame, keeping the visual navigation carousel visible.

This is a one-line CSS class change on the `<img>` element in the portfolio card rendering.

