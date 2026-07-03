---
name: OpenAI.com — OpenAI Sans rebrand
url: https://openai.com/brand/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

OpenAI.com runs on the company's first-ever brand refresh (debuted Feb 2025): a bespoke typeface (OpenAI Sans), a reworked "Blossom" logo, and a circle-keyed design system built around a single recurring motif — "the point" — that shows up simultaneously in the wordmark's perfectly-round "O", the dots on lowercase i/j, the grid that spaces every lockup, and (per press coverage) an animated "Emotive Point" glyph inside the product itself. The public-facing `/brand/` trademark page, the homepage, pricing, research index, careers, and a 404 page were all read live; the site is disciplined, monochrome (pure black/white), text-forward, and reserves color for imagery and data-viz only — closer to Linear/SSI restraint than to gradient-orb AI-startup spectacle, with the rebrand's craft concentrated in typography, logo choreography, and a few sharply-written copy moments rather than visual flourish.

## Typography

- **OpenAI Sans** — bespoke sans developed with Berlin type studio ABC Dinamo and Dutch agency Studio Dumbar over ~9 months, credited to OpenAI's in-house design team (Head of Design Veit Moeller / Design Director Shannon Jager, per Wallpaper\*/Fast Company coverage — one source names "White Miller and Shannon Jager"; titles vary slightly across outlets, treat as secondary-sourced) [S, press roundup, <90d].
- Verified live via `getComputedStyle`: `body` and all headings resolve to `font-family: "OpenAI Sans", "OpenAI Sans Variable Scripts", sans-serif` on both `openai.com/brand/` and `openai.com/` — the "Variable Scripts" fallback implies a second variable-font family covering non-Latin scripts before the generic `sans-serif` catch-all.
- Five core weights per the brand page: Light, Regular, Medium, Semibold, Bold, each with a matching italic. OpenType features called out: ligatures, tabular figures, case-sensitive punctuation.
- Measured instances: brand-page H1 ("Introduction") renders at `font-size: 63.7px`, `font-weight: 500`; section H2s ("Recent news", "Stories", "Latest research") render at `font-size: 21.98px`, `font-weight: 500`, `letter-spacing: -0.22px` (≈ -1% tracking) — Medium (500) weight is the default heading weight site-wide, not Bold.
- Letterform detail (brand-page copy, quoted): the wordmark's "O" is "formed as a perfect circle," while press coverage adds the outer shape stays a true circle but the _inner counter_ is deliberately irregular — "to counteract excessive robotic precision" [S, Fast Company/LogoLounge, <90d].
- Get access line on the page: "Get access to OpenAI Sans through our full design guidelines" links to a gated/internal guidelines doc — not publicly reachable in this crawl (click produced no navigation).

## Color

- Global chrome is strict monochrome: `document.body` computed `background-color: rgb(0,0,0)` (`--color-background: #000`), text `rgb(255,255,255)`. Every page read (brand, home, careers, research index, pricing) shares this pure-black-and-white base — no gray-on-white light mode was observed anywhere in the crawl.
- Extracted 440 CSS custom properties from the live stylesheet. The structural color system is a **chart-color scale**: five tints (20/40/60/80/100) per hue, e.g.:
  - `--chart-color-blue-20: #eaf1fe` → `--chart-color-blue-100: #2e4780`
  - `--chart-color-gray-20: #f0f1f2` → `--chart-color-gray-100: #47484f`
  - `--chart-color-pink-20: #fcdad6` → `--chart-color-pink-100: #8a3a6f`
  - a matching `--chart-color-yellow-*` ramp also present (truncated in extraction, not fully captured).
    These feed semantic tokens through indirection rather than direct reference, e.g. `--color-gray-20: var(--chart-color-gray-100)` (semantic scale is _inverted_ relative to the raw chart scale).
- A separate "CRT" token family also exists in the stylesheet (`--crt-red: #da3131`, `--crt-green: #709f73`, `--crt-blue: #2881ce`, `--crt-foreground: #0acd51`, `--crt-accent: #5dd135`, plus glitch `text-shadow` recipes and a fractal-noise SVG data-URI `--blue-surface-noise`) — evidence of a retro/terminal-styled component or Easter egg somewhere on the domain; its host page was not located in this crawl, so treat as "present in the shipped CSS, page not verified."
- The "grey/blue evoking horizons and skies" palette from the scout notes shows up in **imagery, not chrome**: the homepage's "Previewing GPT-5.6 Sol" card is a photographic/rendered triptych — an orange sun labeled "Sol," a blue-green planet labeled "Terra," a grey moon labeled "Luna" — against a starfield; an adjacent card ("Expanding Daybreak") uses a warm orange-to-pink gradient wash. Color lives in product/editorial art, never in the site's structural background.
- `chatgpt.com/pricing/` (redirect target of `openai.com/chatgpt/pricing/`) keeps the same near-black card-on-black treatment with white pill CTAs — no exact card-fill hex captured, but visually a dark charcoal (not pure black) distinct from the page background.

## Layout

- Logo-construction diagrams on the brand page make the grid explicit: a circle centered inside a 3-column bounding grid (grid line spacing keyed to the circle's own diameter), reused for both the Blossom's clear-space rule and the wordmark's clear-space rule, and again for partner co-branding lockups (a matching 3-column grid with small circles marking minimum spacing between the OpenAI wordmark and a partner's logo).
- Brand/trademark page is single-column, generously spaced, strictly linear: Introduction → Logo (Wordmark → Blossom → Gallery → Brand partnerships) → Typography → Dos-and-Don'ts-by-topic (GPTs / API Developers / Models / Non-partnerships / Content attribution, each an accordion-style expandable card) → Contact → Press releases → Usage terms. No sidebar, no sticky in-page nav.
- Homepage: centered single-column hero, then an asymmetric two-column card grid below the fold — one large (≈2/3-width) video/image card paired with a stack of narrower (≈1/3-width) cards for "Recent news"/"Stories" — mixing a data-chart thumbnail, a photographic/rendered product image, and a flat-gradient illustration in the same row.
- `openai.com/research/index/`: dense list layout, not cards — a left-column category tag (Research/Product/Safety), title + one-line description, trailing date, hairline dividers between rows; top bar has category filter chips (All/Publication/Conclusion/Milestone/Release), a Filter control, a Sort dropdown, and a grid-view/list-view toggle pair.
- `chatgpt.com/pricing/`: four equal-width dark cards (Free/Go/Plus/Pro) — big numeral price, one-line positioning statement, pill CTA, then a "Everything in [previous tier] and:" bullet list that _inherits_ rather than repeats the full feature set per column.
- Careers page: single centered column — eyebrow "Company," oversized two-line headline ("Develop safe, beneficial AI systems"), one-line subhead, single pill CTA ("View open roles"), then a second oversized standalone statement further down the page as a mission pull-quote. No imagery.
- Footer (seen via a 404 page): five-column plain-text sitemap — Research (Research Index / Research Overview / Economic Research), Products (ChatGPT / ChatGPT Business / ChatGPT Enterprise / ChatGPT for Education …), Business (Overview / Solutions / Resources / Customer Stories), Company (About Us / Our Charter / Careers / News), More (Stories / Academy / Livestreams / Podcast).

## Motion

- The `/brand/` page opens with an autoplaying, scrubbable, muted video ("00:00 | 01:50") embedded directly under the nav — a logo-animation reel rather than a static hero image.
- Hard evidence of choreographed, per-element timing via CSS custom properties: `--blossom-timing: .633s` and `--wordmark-timing: 75ms` (plus `--wordmark-animation-in-delay: .1s`) — the Blossom mark and the wordmark are deliberately animated on different rhythms (a slow ~0.6s bloom vs. a snappy 75ms reveal), not a single shared transition.
- Press coverage (not independently verified on the pages read) describes an "Emotive Point": a pulsing black disc with a coded, watercolor-like swirling background that responds live to input rather than looping a fixed video — reportedly the animated cursor/response-origin glyph inside ChatGPT itself, distinct from the static logo assets on the marketing site [S, LogoLounge/Fast Company, <90d].
- No WebGL, parallax, or scroll-triggered 3D was observed on any of the six pages read — motion is concentrated in logo choreography and ordinary hover/link states, consistent with the site's overall restraint.

## Hero Anatomy

- Headline: **"What can I help with?"** — centered, large, white on pure black, no supporting image.
- Immediately below: a real, functional prompt textarea (not a decorative screenshot) showing a rotating placeholder example (captured instance: "Quiz me on vocabulary") with a circular up-arrow submit button — the circle-as-submit-affordance echoes the brand's point/circle motif down to individual UI controls.
- Below the input: five rounded-full quick-action chips — "Learn about ChatGPT Business," "Talk with ChatGPT," "Research," "API Platform," "More" — dark-gray fill, no icons.
- No hero illustration or photography at all; the input field _is_ the entire hero, and unlike a marketing mockup it is the literal, live product (typing and submitting starts a real ChatGPT session).
- Below the fold, the asymmetric card grid (see Layout) supplies the only imagery on the page — a mix of data-chart, photographic/rendered, and gradient-illustration thumbnails.

## Components of Note

- **Nav shell**: fixed dark bar, wordmark at far left, six top-level links (Research / Products / Business / Developers / Company / Foundation), a search icon, a split "Log in" button, and a solid white pill "Try ChatGPT ↗" CTA. The same shell is reused on `chatgpt.com/pricing/` with product-scoped links (About / Features / Learn / Codex / Business / Pricing / Download) — one visual language, templated per product surface.
- **Logo do/don't grid**: red-X / green-check badge overlaid on example thumbnails, run for both the Wordmark and the Blossom (e.g. "DON'T use the Blossom over a busy image," "DO use the established spacing rules," "DO use the Blossom with lots of open space") — a compact, scannable usage-rules pattern.
- **Two-asset logo system**: Wordmark (OpenAI Sans, true-circle "O") for primary branding; Blossom (circle+line mark) for iconographic use; the guidelines explicitly forbid combining them ("should NOT be used with the Blossom") and forbid coloring or texturing the Blossom.
- **Pricing table** (`chatgpt.com/pricing/`): 4 tiers (Free $0 / Go $8 / Plus $20 / Pro from $100/mo), inheriting bullet structure ("Everything in Free and:" etc.) instead of a repeated feature matrix.
- **Research index**: filterable, sortable, list-or-grid-toggle changelog/publication feed — closer to a docs changelog than a blog grid.
- **404 page**: instead of generic copy, a three-line haiku-style poem — "No door here today / Hallways keep their bright manners / Try the next handle" — captioned "by gpt-5.5," followed by the full standard footer sitemap. A distinctive personality moment on an otherwise restrained site.

## Voice & Copy

- Legal/trademark copy is dry and formal, as expected: "By using OpenAI's Marks, you agree that we own them and that any goodwill generated by your use benefits us."
- Mission-adjacent copy is short and declarative: "Develop safe, beneficial AI systems." / "AI must be advanced with knowledge of and respect for humanity's full spectrum of experiences and perspectives."
- Product copy is plain and utilitarian, no hype adjectives observed: pricing tiers are labeled "Best for trying out ChatGPT," "Best for longer conversations," "Best for advanced work and productivity," "Best for research and coding."
- Brand-philosophy copy is the one place the voice turns abstract/poetic: the Blossom "captures the dynamic intersection between humanity and technology... the fluidity and warmth of human-centered thinking through the use of circles, while right angles introduce the precision and structure that technology demands."
- The 404 haiku is the single deliberate note of playful, model-flavored personality against an otherwise serious, engineering-lab tone.

## Distinctive Moves

1. **One geometric primitive doing five jobs.** The circle/"point" motif is simultaneously: the shape of the wordmark's "O," the dot over lowercase i/j, the module that constructs the Blossom mark, the grid unit that sets clear-space for every lockup, and (per press coverage) the animated cursor/response-origin glyph inside the product. A single shape unifies type, logo, spacing system, and product UI rather than four separate design decisions.
2. **Deliberate geometric imperfection as a documented rule, not an accident.** The wordmark's "O" is a true circle outside but has an intentionally irregular inner counter — engineered "humanness" specified in the guidelines, not left to informal craft.
3. **Per-element animation timing exposed as brand tokens.** `--blossom-timing: .633s` vs `--wordmark-timing: 75ms` shows the two core logo assets are deliberately choreographed on different rhythms (slow bloom vs. snap reveal), encoded directly as CSS custom properties rather than a single shared transition curve.

## Buzz Evidence

- Universally covered as OpenAI's **first-ever brand refresh** (debuted Feb 2025) across Wallpaper\*, Fast Company, Creative Bloq, Digital Trends, LogoLounge, Design Compass, urdesignmag, and Webdesigner Depot [S, press roundup, <90d].
- Credited to a ~9-month collaboration between OpenAI's in-house design team and two named outside studios: Berlin type foundry **ABC Dinamo** (OpenAI Sans) and Dutch agency **Studio Dumbar** — consistent across multiple outlets [S, multi-source corroborated, <90d].
- The scout-note framing "most-copied AI look of 2026" is directionally plausible (this same crawl set's other 2026 AI-lab entries — e.g. Mistral AI's circle-motif mark — show family resemblance) but **no primary source ranking or count was found to verify the superlative**; treat as an unverified claim, not a confirmed fact.
- The "Emotive Point" motion concept is widely described in press but was not independently observed on any of the six pages read in this crawl — it may live inside the logged-in ChatGPT product surface rather than the public marketing site.

## What Astryx Should Take

1. **Do/Don't visual card pattern for component docs.** Red-X / green-check badges over example screenshots (as seen on the Blossom and Wordmark sections) are a compact, scannable way to show correct vs. incorrect component usage — more effective than prose-only warnings in `{Name}.doc.mjs` examples.
2. **Per-component motion tokens instead of one shared transition.** OpenAI exposes `--blossom-timing` / `--wordmark-timing` as distinct named durations for distinct brand elements. Astryx already has `stylex.defineConsts()` and dynamic `stylex.create` functions — apply the same idea: give each signature component (e.g. a loading indicator, a logo mark, a toast) its own named timing constant rather than reusing one global transition duration everywhere.
3. **Cumulative pricing-tier bullets.** The "Everything in [previous tier] and:" inheritance pattern (rather than a repeated full feature matrix) is a directly reusable structure if/when Astryx ships a `PricingTable` component or docs example.
4. **A real, working control as the marketing hero — not a screenshot.** OpenAI's homepage hero is a literal, functional chat input, not a mockup. For Astryx's own marketing site, a live interactive control (e.g. a working theme-token switcher or a real component playground) as the above-the-fold hero would be more convincing than a static screenshot, and matches the "homepage IS the product demo" pattern also seen at Rive and Motion in this same crawl set.
5. **Structural chart-color ramp as a token template.** OpenAI's `--chart-color-{hue}-{20,40,60,80,100}` scale, remapped into semantic tokens via indirection, is a clean model for Astryx's own data-viz/accent token layer: define raw tint ramps once, then let semantic names (`--color-gray-20`, etc.) reference them so the underlying ramp can be swapped without touching call sites.
6. **Dense, filterable list view for the component-doc index / changelog**, not a card grid — `openai.com/research/index/` (category chips + filter + sort + grid/list toggle + hairline-divided rows) is a stronger pattern for a docs/changelog page than a card wall, and matches Astryx's own documentation-density needs better than a marketing-style grid.
7. **A small, deliberate personality beat in empty/error states.** The 404 haiku ("by gpt-5.5") shows that even a very restrained, engineering-toned site can afford one on-brand moment of warmth in a low-stakes surface (404/empty state) without undermining overall seriousness — worth doing once, well, in Astryx's own docs site rather than a generic "page not found."
8. **Keep color out of chrome, put it in imagery/data only.** OpenAI's pure-black/white global chrome with color reserved for charts and editorial art validates Astryx's existing semantic background/foreground token discipline — a useful counter-example to cite against gradient-heavy AI-startup defaults (per the crawlset's `Performative-UI` satire entry).

## Pages Read

- https://openai.com/brand/ (live browser render + computed-CSS extraction)
- https://openai.com/ (live browser render + computed-CSS extraction)
- https://openai.com/chatgpt/pricing/ → redirected to https://chatgpt.com/pricing/ (live browser render)
- https://openai.com/research/index/ (live browser render)
- https://openai.com/careers/ (live browser render)
- https://openai.com/index/gpt-5-6-sol/ (live browser render — resolved to the site's 404 page; still yielded the full footer sitemap and the 404 voice/copy sample)

Direct `WebFetch` access to `openai.com` and `web.archive.org` returned HTTP 403 / unreachable in this session; all page-level evidence above was gathered via a live Chrome browser session instead (`claude-in-chrome`), including `getComputedStyle` extraction of font-family, font-size/weight, and ~440 CSS custom properties (colors, motion timings) directly from the rendered page — treated as primary/hard evidence. Historical narrative details (design-team credits, agency partners, the "Emotive Point" concept, first-rebrand framing) are sourced from press coverage (Wallpaper\*, Fast Company, Creative Bloq, LogoLounge, Digital Trends) via web search, since the live pages read did not themselves narrate the rebrand's backstory.
