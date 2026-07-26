## SEO check — 3 findings

### 1. Accessibility: low text contrast (low)
Audit color usage for muted/placeholder text on light backgrounds and swap arbitrary Tailwind grays for design-system tokens (`text-foreground`, `text-muted-foreground`). Likely suspects: hero subtitle/scroll indicator, contact section (`text-background/40`, `text-background/60` on dark), muted labels.
- Review `HeroSection.tsx`, `ContactSection.tsx`, `AIBuiltSection.tsx`, `AmazonShippedSection.tsx` and bump any `/40`–`/60` opacity text to `/70`+ or full token.
- Note: finding reflects last **published** version, so must re-publish to clear.

### 2. Content: add "AI tools for product managers" guide (low)
Add a new section on `/` (or a dedicated route) titled "The AI Product Manager's Toolkit" listing the AI tools used to build the portfolio projects (ElevenLabs, Bolt, Lovable, Codex, Figma Make, Omma, Replit, Slack). Target keyword `ai tools for product managers`. Group by category: prototyping, PRD generation, agentic workflows.
- **Question for you:** want this added? If yes, section on homepage or separate `/ai-toolkit` route with its own Helmet meta?

### 3. Google Search Console not connected (mid)
Connect GSC so search performance + sitemap submission work:
1. Trigger the `google_search_console` connector — you'll authorize via inline OAuth card.
2. Verify ownership of `https://neelanjanabasu.lovable.app/` via META tag (auto-injected into `index.html`).
3. Submit `sitemap.xml`.
- Requires your approval on the connect card.

---

**Suggested order:** fix #1 (quick), do #3 (needs your OAuth), decide on #2.

Want me to proceed with all three, or skip #2?
