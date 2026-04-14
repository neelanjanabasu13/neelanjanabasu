

## Plan: Adjust Visual Navigation Image Offset

Currently `objectPosition: '0 -40px'` shifts the image up by 40px. Need to increase this to crop more of the status bar area while keeping the search bar with "coffee" visible and showing the category labels (Grounds, Whole bean, etc.).

### Change in `src/components/PortfolioSection.tsx` (line 150)

Update the inline style from `objectPosition: '0 -40px'` to approximately `objectPosition: '0 -80px'`. This shifts the image further up, cropping more of the phone status bar while preserving the search bar and making the visual navigation carousel labels visible. May need fine-tuning (trying -80px first).

