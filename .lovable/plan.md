## Plan: Add new visual theme

### Scope
Only global styles and fonts change. No layout, content, images, links, or component logic will be touched.

### Changes

1. **`src/index.css`**
   - Replace the Google Fonts `@import` with Fraunces (weights 400–700) and Lora (weights 400–700).
   - Add the exact CSS custom properties to `:root`:
     - `--paper #F4E8D2`
     - `--paper-2 #EBDBBD`
     - `--paper-3 #E0CBA4`
     - `--ink #1E1A16`
     - `--ink-soft #463726`
     - `--blue-deep #123D55`
     - `--blue #1B5E80`
     - `--blue-br #2F8FBF`
     - `--blue-pale #8FBBD1`
     - `--rose #B93A63`
     - `--madder #B0432A`
     - `--gold #C08A2E`
     - `--gold-lt #E4B349`
     - `--teal #2F7A72`
   - Update `body` styles:
     - `background-color: var(--paper)`
     - `color: var(--ink)`
     - `font-family: 'Lora', serif`
     - `font-size: 17px`
     - `line-height: 1.72`
   - Update `h1`–`h5` styles:
     - `font-family: 'Fraunces', serif`
     - `font-weight: 700`
     - `color: var(--blue-deep)`
     - `font-variation-settings: 'SOFT' 40, 'WONK' 1`

2. **`tailwind.config.ts`**
   - Replace `fontFamily.sans` and `fontFamily.serif` with:
     - `heading: ['Fraunces', 'serif']`
     - `body: ['Lora', 'serif']`
   - Remove `Inter` and `Playfair Display` references entirely.

3. **`index.html`**
   - No font `<link>` changes needed because fonts load via the CSS `@import`.

### Verification
- Run type-check to confirm Tailwind config remains valid.
- Visually confirm the page background is `--paper`, body text is `--ink` at 17px/1.72, and headings render in Fraunces 700 `--blue-deep` with the requested variation settings.

### Out of scope
- No component markup changes.
- No color mapping of existing Tailwind/shadcn tokens (this is a theme-only foundation step).
- No removal or addition of sections, projects, or images.