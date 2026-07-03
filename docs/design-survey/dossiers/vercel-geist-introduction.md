---
name: Vercel Geist — Introduction
url: https://vercel.com/geist/introduction
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Geist is Vercel's public design system hub: a single docs site (`vercel.com/geist/*`) that documents the colors, typography, materials (radii/shadows), grid, brand assets, and React components (`@vercel/geistcn`, icons via `@vercel/geistcn-assets`) that power all of Vercel's own products and marketing. It is simultaneously a human docs site and a machine-readable spec — every page ships a `.md` twin and the whole system compresses into one canonical file, `/design.md` (light theme) and `/design.dark.md` (dark theme), that an LLM or agent can ingest directly. The tone throughout is restrained, engineering-first, and self-consciously "systems, not decoration."

## Typography

- **Typefaces**: **Geist Sans** (UI + prose) and **Geist Mono** (code, data, tabular figures), both open source (SIL OFL), built by Vercel with **Basement Studio**. Mono shipped first (2023, for code legibility), Sans followed — both draw on Swiss/geometric sans traditions. **Geist Pixel** joined the family Feb 6, 2026 (see Distinctive Moves).
- **CSS evidence** (from live bundle, `_next/static/.../*.css`): `--font-sans: "Geist","Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif` with `--font-sans: var(--font-geist-sans)` as the live override; `--font-mono: "Geist Mono", Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace`. Variable font file served as `Geist_Variable-s....woff2`; Pixel variants served as five separate `GeistPixel_{Square,Grid,Circle,Triangle,Line}....woff2` files with distinct CSS variables `--font-geist-pixel-{square,grid,circle,triangle,line}`.
- **Type scale** (from `/design.md`, exact values): headings `heading-72` → `heading-14`, all Geist Sans / weight 600, letter-spacing tightens as size grows (e.g. 72px line-height 72px letter-spacing ‑4.32px, down to 14px/20px/‑0.28px). Buttons `button-16/14/12` (weight 500). Labels `label-20` → `label-12` (weight 400, single-line/scannable) with mono siblings (`label-14-mono`, `label-13-mono`, `label-12-mono` in Geist Mono). Copy `copy-24` → `copy-13` (weight 400, taller line-height for multi-line body, plus mono variants). Each token bundles `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing` as one atomic unit — components consume the token, never raw CSS properties.
- **Rule stated explicitly**: "Apply the typography tokens instead of setting font size, line height, or weight by hand." Don't mix more than two font weights in one view.
- **Adoption evidence**: the `geist` npm package gets ~1.4M weekly downloads and the GitHub repo (`vercel/geist-font`) has ~3,462 stars; after the Google Fonts listing it logged 1.5M+ downloads in weeks across 2,100+ sites [S, npm/GitHub via web search, 2026-07 query, ~55].

## Color

Two parallel theme specs, same token names, `/design.md` (light) and `/design.dark.md` (dark) — both fetched raw and confirmed as exact hex/oklch values, not summarized:

- **Light**: primary text `#171717`, secondary `#4d4d4d`, tertiary/accent `#006bff`, neutral `#f2f2f2`, `background-100 #ffffff` (page/card surface), `background-200 #fafafa` (secondary surface, "subtle separation only" — explicitly not a general fill).
- **Dark**: primary text `#ededed`, secondary `#a0a0a0`, tertiary `#006efe`, neutral `#1a1a1a`, `background-100 #000000` — a true, pure black, not an off-black.
- **Gray scale** (light) 100→1000: `f2f2f2, ebebeb, e6e6e6, eaeaea, c9c9c9, a8a8a8, 8f8f8f, 7d7d7d, 4d4d4d, 171717`. Plus a parallel `gray-alpha-100…1000` translucent-black ramp (`#0000000d` → `#000000e8`) used specifically for borders/dividers/overlays so they layer correctly over any surface.
- **Accent scales**: blue, red, amber, green, teal, purple, pink — each a full 10-step 100–1000 ramp in both themes, each also shipping a wide-gamut `-p3` variant expressed in `oklch()` for Display-P3 screens (sRGB hex is the fallback). Sample verified value: `blue-700-p3: oklch(57.61% 0.2508 258.23)`.
- **Step semantics are fixed across every scale and both themes** — this is the real system, not just a palette: `100` default bg → `200` hover bg → `300` active bg → `400` default border → `500` hover border → `600` active border → `700` solid high-contrast fill → `800` solid fill hover → `900` secondary text/icons → `1000` primary text/icons. (Scout note calling this a "200-step gray scale" is corrected here: it is a 10-step scale in increments of 100, from 100 to 1000 — not 200 discrete steps.)
- **Focus ring** is a two-layer `box-shadow`: `0 0 0 2px #ffffff, 0 0 0 4px #006bff` (light) — confirmed live as `--ds-focus-ring: 0 0 0 2px var(--ds-background-100), 0 0 0 4px var(--ds-focus-color)`.
- **Rule stated explicitly**: "Don't signal state with color alone; pair it with an icon or text label." WCAG AA (4.5:1) held as a hard floor.

## Layout

- **Spacing**: 4px base scale — 4, 8, 12, 16, 24, 32, 40, 64, 96px. Rhythm: 8px within a group, 16px between groups, 32–40px between sections.
- **Cards**: 24px padding standard, 16px compact, 32px hero.
- **Container**: content centered in a 1200px column, side padding grows at wider breakpoints. Breakpoints: `sm` 401px, `md` 601px, `lg` 961px, `xl` 1200px, `2xl` 1400px.
- **Radii ("Shapes")**: 6px (`sm`, everyday surfaces/controls), 12px (`md`, menus/modals), 16px (`lg`, fullscreen surfaces), 9999px (`full`, pills/avatars/circular controls). Rule: "Keep one radius family per view rather than mixing rounded and sharp corners."
- **Materials** (elevation presets bundling radius+shadow as one named token): page-level `material-base`/`material-small` (6px), `material-medium`/`material-large` (12px); floating `material-tooltip` (6px, lightest shadow), `material-menu` (12px), `material-modal` (12px, heavier), `material-fullscreen` (16px, "biggest lift"). Exact box-shadows (light theme): raised cards `0 2px 2px rgba(0,0,0,.04)`; popovers/menus a 3-layer shadow (`0 1px 1px …, 0 4px 8px -4px …, 0 16px 24px -8px …`); modals a heavier 3-layer version.
- **Grid**: explicitly called "a core part of the Vercel aesthetic" — a first-class React `<Grid columns={n} rows={n}>` component with responsive breakpoint objects (`{sm:1, md:2, lg:3}`), custom cell placement (`column="1/3"`), and a `guideWidth` prop — used specifically "where the rule lines and cell borders are part of the design" (marketing pages, docs landing pages, feature breakdowns). Visible ruled grid-guides are treated as a design element, not hidden scaffolding; live CSS confirms breakpoint-specific guide-disappearance keyframes (`grid-module__…__{sm,md,lg}Disappear`).

## Motion

Explicit written philosophy, not just CSS values: "Use motion only when it clarifies a change, never for decoration... a duration of 0ms is often the snappiest and best choice, and the call is context-dependent." When motion is used: easing `cubic-bezier(0.175, 0.885, 0.32, 1.1)`, ~150ms for state changes, 200ms for popovers/tooltips, 300ms for overlays/modals. `prefers-reduced-motion` is honored by dropping nonessential motion.

Live evidence from the shipped CSS bundle (40 distinct `@keyframes` found): `hero-module__…__fadeIn` / `fadeInDelayed` (staggered hero-text reveal), `grid-module__…__{sm,md,lg}Disappear` (responsive grid-guide fade), `glyph-module__…__fadeIn` and `playground-module__…__rotate` (the interactive font/glyph playground on `/font`), and a full `cmdk` set (`cmdkFadeIn/FadeOut/ScaleIn/ScaleOut/Loading`) confirming the `cmdk` library powers a command-menu (Cmd-K search) component.

## Hero Anatomy

The `/geist/introduction` page itself has **no marketing-style hero** — it opens straight into a docs index (Overview → Foundations → Assets → Components → "Markdown for agents"), functioning as docs-hub-as-homepage with no separate oversized headline or CTA banner.

The parent marketing site (`vercel.com`), which shares the same design language, does run a classic hero: headline **"Agentic Infrastructure"** with three layered sub-statement lines ("To ship apps and agents" / "For coding agents to ship apps and agents" / "Automated by agents"), an animated gradient-glow background (separate light/dark and mobile/desktop image variants), and a twin-CTA pattern — solid primary **"Deploy Now"** (→ `/new`) plus secondary **"Talk to Sales"** (→ `/contact/sales/demo`) — mapping directly onto the `button-primary`/`button-secondary` design tokens. Below the hero, three proof sections pair a named customer with a hard number rather than a static logo wall (Notion: "powers millions of agent conversations daily"; Zapier: "100M+ monthly visitors"; Mintlify: "20,000+ companies"), followed by a "Recently Shipped" strip that works as an always-current changelog teaser embedded in the homepage.

## Components of Note

- **Button**: 5 variants (Default, Secondary, Tertiary, Error, Warning) × 3 sizes (small/medium-default/large) × shapes (default rounded-rect, square icon-only, circle icon-only, "rounded + shadow" for marketing contexts). `loading` is passed as a prop rather than swapping in a spinner, specifically so the button stays focusable. Icon-only buttons require `svgOnly` + a descriptive `aria-label`. Sub-variants: `Button`, `ButtonLink`, `CustomButton` (color overrides for normal/hover/active).
- **Grid**: a visible-guideline layout primitive (see Layout) — unusual as a first-class, documented component rather than a CSS utility.
- **Command menu**: `cmdk`-based Cmd-K search, evidenced by its dedicated keyframe set.
- **Font/glyph playground**: interactive weight and glyph inspector embedded directly in `/font`.
- **Pricing page as data**: `/pricing` renders the familiar 3-tier card layout (Hobby free / Pro "$20/user/month + usage" / Enterprise custom) but also exposes a full YAML-structured feature-and-SKU matrix (100+ features, per-tier allowances, usage pricing) — the "docs-as-data" philosophy extended from design tokens all the way to commercial pricing.

## Voice & Copy

Codified as explicit rules in `/design.md` ("Voice & Content"), not left implicit:

- Title Case for labels/buttons/titles/tabs; sentence case for body/helper text/toasts.
- Name actions Verb + Noun ("Deploy Project", "Delete Member") — never "Confirm", "OK", or a bare verb.
- Errors state what happened + what to do next: _"Build failed. Bundle exceeds 50 MB. Reduce it or raise the limit."_
- Toasts name the specific thing that changed, drop the trailing period, and never say "successfully": _"Project deleted"_, not "Successfully deleted the project."
- Empty states point to the first action: _"No deployments yet. Push to your Git repository to create one."_
- In-progress states use present participle + ellipsis: _"Deploying…"_, _"Saving…"_.
- Numerals ("3 projects"), curly quotes, real ellipsis character; skip "please" and marketing superlatives.

The marketing homepage voice is a deliberate register shift from this clinical docs voice — more declarative/confident ("Agentic Infrastructure," "ships apps and agents") — i.e. Vercel runs two voices on purpose: restrained/precise in docs, punchy/confident in marketing.

## Distinctive Moves

1. **"Markdown for agents" as a site-wide content-negotiation layer.** Every docs page (and the pricing page's feature matrix) has a machine-readable twin: append `.md` to any URL, or send `Accept: text/markdown`. The entire design system additionally compresses into one canonical file, `/design.md` + `/design.dark.md`, expressing colors, type scale, spacing, radii, shadows, motion, component tokens, and voice rules as parseable YAML front-matter plus prose — verified directly via `curl`, not paraphrased. This is the single most transferable idea here.
2. **Geist Pixel positioned as a system extension, not a novelty font.** Launched Feb 6, 2026 with 5 geometric variants (Square, Grid, Circle, Triangle, Line; 480 glyphs, 7 stylistic sets, 32 languages), deliberately vertical-metric-matched to Sans/Mono so it mixes inline rather than being decorative-only — explicitly engineered against "pixel font failures" like bad scaling and metric conflicts.
3. **A 10-step, intent-encoded color scale** where the numeric step (100–1000) carries the _same semantic meaning_ across all 8 families (gray + 7 accents) in _both_ themes — "700" always means "solid high-contrast fill," "1000" always means "primary text," regardless of hue or light/dark. A structural pattern, not a lightness ramp with names attached after the fact.

## Buzz Evidence

- `geist` npm package: ~1.4M weekly downloads, ~3,462 GitHub stars on `vercel/geist-font` [S, npm/GitHub via web search 2026-07, ~55]. Google Fonts listing drove 1.5M+ downloads within weeks, across 2,100+ sites [S, secondary summary, ~45].
- Geist Pixel (Feb 6, 2026) picked up by design/trade press (Creative Brands Mag, daily.dev) and social commentary (Vercel's own launch post on X; a Japanese design-commentary account framing it as "not a novelty font but a system extension") [S, various, <30d of launch, ~50].
- Built in collaboration with **Basement Studio**, a well-regarded independent design/dev studio — lends craft credibility beyond in-house tooling.
- No formal design-award win (Awwwards, FWA, etc.) was found for Geist or Geist Pixel as of this crawl — **not determined / likely none yet**, flagged rather than invented.

## What Astryx Should Take

- **Ship one canonical machine-readable spec file** (e.g. `docs/design.md` or a `/design.md` route) that enumerates every Astryx token — color, type scale, spacing, radius, shadow, motion — as YAML front-matter + prose rules. This maps directly onto Astryx's existing AGENTS.md-driven authoring model and the `astryx docs --dense` CLI output already does something similar in spirit; formalizing it as a fetchable, `.md`-suffixed URL (or `Accept: text/markdown` negotiation) on the marketing/docs site would let external agents ingest Astryx's system the same way they'd ingest Geist's.
- **Adopt intent-encoded numeric color steps** (not just a lightness ramp) so every scale — gray and any semantic accents Astryx adds — uses the same step meaning (100 bg, 400 border, 700 solid fill, 900 secondary text, 1000 primary text) in both light and dark. This gives both humans and agents a fixed vocabulary ("use step 700 for the solid state") instead of memorizing hex values per component.
- **Write down the motion philosophy as a rule, not just a duration table** — "0ms is often correct" is a stronger and more actionable principle than a list of easing curves, and directly supports Astryx's own StyleX-native, no-JS-workaround motion stance.
- **Bundle radius + shadow into named "material" tokens** (tooltip/menu/modal/fullscreen) rather than components picking raw `boxShadow`/`borderRadius` values independently — reduces the chance of an Astryx component landing on a radius/shadow combination that doesn't exist elsewhere in the system.
- **Codify copy rules for the docs/marketing site itself** (Verb+Noun buttons, no "successfully" in toasts, present-participle progress states) — cheap to lift close to verbatim into Astryx's own component copy and docs-site UI, and worth adding next to the existing JSDoc/Documentation Standard section in CLAUDE.md.

## Pages Read

- https://vercel.com/geist/introduction
- https://vercel.com/geist/introduction.md
- https://vercel.com/geist
- https://vercel.com/geist/colors
- https://vercel.com/geist/typography
- https://vercel.com/geist/materials
- https://vercel.com/geist/grid
- https://vercel.com/geist/button
- https://vercel.com/geist/icons
- https://vercel.com/geist/brands
- https://vercel.com/font
- https://vercel.com/design.md (raw, fetched via curl)
- https://vercel.com/design.dark.md (raw, fetched via curl)
- https://vercel.com/llms.txt (raw, fetched via curl)
- https://vercel.com (homepage)
- https://vercel.com/pricing
- https://vercel.com/blog/introducing-geist-pixel
- Live CSS/font bundle inspected directly from `/geist/introduction` page source (`_next/static/immutable/chunks/*.css`, `_next/static/immutable/media/*.woff2`) for hard font-family, CSS-variable, hex/HSL, and `@keyframes` evidence
