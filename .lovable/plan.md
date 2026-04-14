

## Plan: Add University Logos to Education Section

### What changes
Replace the generic `GraduationCap` icon in each education card with the actual institution logo.

### Steps

1. **Download logos** from the institution websites:
   - GIM logo: `https://gim.ac.in/sites/default/files/gim-logo.png` (or extract from the site header)
   - Gujarat University logo: `https://gujaratuniversity.ac.in/images/gu-logo.png` (the crest visible in the header)
   
   If direct URLs don't work, I'll use web search to find clean logo images or take screenshots and crop them. Save to `src/assets/gim-logo.png` and `src/assets/gujarat-university-logo.png`.

2. **Update `src/data/resumeData.ts`**: Add a `logo` field to each education entry pointing to the imported image.

3. **Update `src/components/EducationSection.tsx`**: Replace the `GraduationCap` icon div with an `<img>` tag showing the institution logo, using `object-contain` for proper scaling within the 48x48 container.

### Technical detail
- The icon container is currently a 48x48 rounded div with a `GraduationCap` — it will become an `<img>` with `rounded-xl object-contain` styling
- Logos will be imported statically in the component or data file

