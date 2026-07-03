---
name: ElevenLabs Store
url: https://store.elevenlabs.io
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

The ElevenLabs Store (`store.elevenlabs.io`) is the branded-merch spinoff of the AI voice unicorn ElevenLabs — hoodies, tees, a tote, caps, and a water bottle, sold direct to fans and employees. It is a deliberately separate microsite from the main `elevenlabs.io` marketing site (its own Next.js/Turbopack build, its own header, no shared nav), reusing only the parent brand's Waldenburg typeface and wordmark. Structurally it has no traditional homepage at all: the landing page **is** the product catalog, shown as either a flat grid or a literal circular arrangement of the full SKU list, and every "page" (FAQ, product) renders as an overlay on top of that same canvas rather than a full navigation. Prior scout notes calling it "eCommerce / Minimal / Fashion... more Aesop-boutique than SaaS-dashboard" hold up: the tone is closer to a small fashion-drop label than an enterprise SaaS company's swag closet.

## Typography

- Body/UI font, verified via computed style: **`font-family: Waldenburg, sans-serif`** on `<body>` — the same custom/licensed display face ElevenLabs uses on its main marketing site (`elevenlabs.io`), reused here as the _body_ face, not just headlines. A humanist/grotesk sans, moderate x-height, no visible serifs at any size on this site.
- Monospace token: **`--font-mono: "GeistMono", ui-monospace, SFMono-Regular, Roboto Mono, ...`** — declared as a CSS variable but not visibly used anywhere in the crawled pages (no code blocks or tabular data call for it); present as infrastructure, not a visible design choice.
- No serif anywhere. Headline hierarchy is understated: FAQ category headers ("Shipping & Delivery") render at roughly 32–36px in the same Waldenburg sans, question sub-heads bold at body-plus-one size, answers regular weight — a plain editorial text ladder with zero decorative type treatment, no letter-spacing tricks, no italics.
- Product-name lockups on merch itself (screen-printed art on the tees/hoodies) use a different, more expressive type language per-design (a glitch/data-vis wordmark on the "Kinetic Tee", a stacked "11:11" numerals graphic, a serif-adjacent "Transforming Human-Technology Interaction" tee) — but this is print art on the product, not the site's own UI typography.

## Color

Pulled directly from resolved CSS custom properties on the live site (Tailwind v4 theme tokens):

- **Background / "cream": `#f6f5f1`** — warm off-white, not pure white. `--color-background` and `--color-cream` share this value.
- **Ink / "graphite": `#1e1a16`** — near-black warm charcoal, used as `--color-primary`, `--color-ring`, `--color-card-foreground`, and as the literal background of the product quick-view panel (`class="dark-modal"`, `background-color: rgb(30, 26, 22)`).
- **Secondary / tile fill: `#ebe7e2`** — the flat warm-gray used behind every product photo tile in Grid view; also `--color-accent`.
- **Muted text: `#4b4845`** (`--color-cream-600` / `--color-muted-foreground`).
- **Neutral ramp:** `cream-200 #d9d9d9`, `cream-400 #8e8d8a`, `grey-400 #dcdcdc`, `grey-600 #999`, `grey-800 #7d7d7d`, `border #d9d9d9`, `input #d9d9d9`.
- **Destructive/error: `#d12d2d`** — a saturated red token defined in the system but not visibly triggered in the crawled flows (the sold-out "Chladni Tote Bag" label rendered in muted gray, not this red).
- **Pure white token: `lab(100% 0 0)`** and body text resolves to **`lab(0 0 0)`** — the theme is authored with `lab()`/`oklch`-class color functions rather than plain hex for at least white/black, alongside the hex-based custom-property ramp above (a mixed authoring approach, likely Tailwind v4's default oklch/lab normalization of black/white keywords rather than a deliberate wide-gamut design choice).
- **Radius scale:** `--radius-md: .375rem`, `--radius-lg: .5rem`, `--radius-xl: .75rem` — modest, consistent rounding; the one fully-round element observed is the pill-shaped size selector (`border-radius: 30px`) and the "Ask AI" nav pill.
- No dark-mode toggle, no theme switch of any kind — single warm-neutral palette throughout.

## Layout

- **No hero section, no marketing copy above the fold.** The entire home route renders the product catalog immediately, full-bleed under a slim fixed header.
- **Two catalog view-modes, user-toggleable** ("Grid" / "Circle" in the header, exactly like a segmented control): Grid is a clean 4-column tile grid, each tile a flat `#ebe7e2` square with the product centered; Circle re-plots the identical 16 SKUs around the circumference of a large thin-stroke circle outline (radius roughly matching viewport height), an intentional "wheel of merch" alternative to the grid.
- Header is a slim fixed bar: wordmark (stylized "II" reads as "11") + "Store" left, a floating pill-shaped **"Ask AI"** button dead-center, then "Store · US ▾ · Grid/Circle · Cart" right — all inside a `max-w-420` (rem-scale) centered container, `pointer-events` scoped so most of the bar is click-through except the interactive controls.
- Footer is minimal: three plain-text links (FAQ, Terms, Privacy) bottom-left, no logo repeat, no newsletter signup, no social icons.
- FAQ/legal pages are single-column, generous line-length prose with bold-question / regular-answer pairs grouped under plain section headers (Getting Started, Shipping & Delivery, Managing your Order, Returns and Problems) — no accordion chrome, just typographic hierarchy.
- Region/currency picker is a plain 4-item text dropdown: **EU / UK / US / ROW** — no flag icons, no elaborate locale UI.

## Motion

- Deliberately restrained; no scroll-triggered reveals, no parallax, no WebGL observed anywhere in the crawl.
- The one recurring motion device: on a product detail view, the two adjacent products in the row bleed through at extremely low opacity (roughly 5–8%) behind the focused product photo — a near-subliminal "there's more on either side" cue rather than a visible carousel arrow.
- The product quick-view opens as a sliding dark panel (`dark-modal`, self-centered, rounded) over the still-visible light catalog behind it, rather than a full page transition — state and scroll position on the grid/circle are preserved underneath.
- Next.js + Turbopack build (confirmed via `_next/static/chunks/turbopack-*` script names); no named animation library (Framer Motion/GSAP/Lottie) detected in loaded script filenames — motion is likely plain CSS transitions plus React state, consistent with the site's overall restraint.

## Hero Anatomy

There is no hero in the conventional headline+subhead+CTA sense. The "hero" _is_ the product catalog itself, rendered instantly as either a grid or a circle of real product photography on the warm-cream canvas — the store's own inventory substitutes for hero copy or imagery. The nearest thing to a persistent above-the-fold CTA is the floating "Ask AI" pill, permanently docked center-header on every route.

## Components of Note

- **Grid/Circle view toggle** — a first-class, user-facing alternate catalog layout, not just a filter; the "Circle" view is the single most memorable UI idea on the site.
- **Dark quick-view product panel (`dark-modal`)** — `#1e1a16` panel sliding over the light canvas, containing product name, price, two-paragraph copy, a collapsible "Tee Sizing" cm-measurement table, pill-shaped size buttons (XS–2XL, 30px border-radius), and a full-width "Add to Cart" button that stays visually disabled until a size is chosen. The panel can also collapse to a small pill-shaped mini-card (name + "Sold Out"/status + thumbnail "Open" affordance) rather than fully closing.
- **"Ask AI" voice widget** — a persistent pill button with a phone-handset glyph, permanently docked in the header on every page; the DOM exposes "Mute"/"End call" controls, indicating this is ElevenLabs' own conversational-voice-agent product embedded as the store's customer-service/shopping-assistant surface — the company's product demoing itself on its own commerce storefront.
- **Cart drawer** — plain text-first empty state ("Nothing To See Here (Yet)"), no illustration.
- Fulfillment/support routes to `help@goswag.com` / `hello@goswag.com` — evidence the store is likely running on or fulfilled through **Swag** (goswag.com), a merch-commerce platform, with ElevenLabs supplying a fully custom Next.js/Tailwind-v4 front end on top rather than a stock theme.

## Voice & Copy

Product copy is materials-and-provenance led, closer to a fashion label's product page than a SaaS landing page: _"crafted in Europe from heavyweight 270gsm organic cotton... ring compact spun, long staple cotton... fully produced in Portugal."_ No hype adjectives, no exclamation points, no "revolutionize"/"unlock" AI-startup vocabulary anywhere observed. FAQ copy is plain, legally precise, customer-service register (shipping exclusions named by country, VAT handling spelled out per region, a 30-minute order-cancellation window). The one marketing flourish is the meta description: _"Official apparel and goods from ElevenLabs — AI voice technology, reimagined."_

## Distinctive Moves

1. **Circle view** — an actual alternate "wheel" layout for the product catalog, toggled from the header like a view switch, not a gimmick buried in a settings menu. Nothing else in this survey pool ships a literal circular product-browsing mode.
2. **Near-invisible sibling-product bleed-through** on the product detail view — adjacent catalog items ghost through at ~5–8% opacity behind the focused hero shot, a wayfinding cue so subtle it borders on subliminal, replacing a visible carousel affordance entirely.
3. **The store demos the company's own product on itself** — a live ElevenLabs conversational voice agent ("Ask AI," with active mute/end-call controls) is the storefront's customer-service layer, meaning the AI-voice company's merch shop doubles as a working showcase of its core technology.

## Buzz Evidence

None found via direct crawl (no awards badge, press mention, or social-share count present on the site itself). Prior scout note tagged it "eCommerce / Minimal / Fashion" on Landing.love, a curation-gallery listing rather than a competitive award — treat as a mild curation signal, not confirmed viral/press buzz. No `[TBD]` figures invented here.

## What Astryx Should Take (concrete, mapped to a design-system marketing+docs site)

- **A component-gallery view-mode toggle**: Astryx's own component index/showcase could ship a "Grid / Circle" (or any second literal spatial arrangement) toggle the way this store does — a cheap, memorable way to make a plain index page feel designed, not just a differentiator for merch.
- **Collapsible quick-view panel pattern**: the `dark-modal` slide-over that inverts to the brand's ink color while the canvas stays light behind it is directly reusable as Astryx's own "swizzle preview" or "component quick-look" panel — inspect a component in an overlay without leaving the docs index, panel collapses to a pill rather than fully closing.
- **Restraint as the whole motion budget**: no WebGL, no scroll-jacking, one subtle low-opacity neighbor-bleed effect carrying all the "there's more here" signaling — a good target motion budget for a docs/marketing site whose real content (components, code) needs to stay legible above flourish.
- **Materials-first copy voice for component docs**: the store's provenance-and-craft product copy ("heavyweight 270gsm... fully produced in Portugal") is a useful voice model for Astryx component docs — describe the concrete construction (tokens used, a11y behavior, browser support) with the same plain, confident specificity instead of marketing adjectives.
- **A living self-demo widget**: the "Ask AI" voice agent embedded in the header is a pattern Astryx could borrow conceptually — if Astryx ships an AI-authoring/AGENTS.md story, a persistent "ask the docs" entry point docked in the header (even text-chat, not voice) turns the docs site into a working demo of the thing being sold (AI-legible component docs), the same self-referential move ElevenLabs makes with voice.

## Pages Read

- https://store.elevenlabs.io/ (home, Grid view)
- https://store.elevenlabs.io/ (home, Circle view)
- https://store.elevenlabs.io/products/tee-4 ("Kinetic Tee" product quick-view)
- https://store.elevenlabs.io/about/faq (FAQ)
- https://store.elevenlabs.io/ (Chladni Tote Bag quick-view, collapsed/"Sold Out" state)

Attempted but blocked: https://store.elevenlabs.io (via WebFetch, HTTP 403) and https://store.elevenlabs.io/llms.txt (via WebFetch, HTTP 403) — worked around via a live Chrome browser session (Playwright/claude-in-chrome), which rendered normally; all facts above are drawn from that live render plus direct `getComputedStyle`/CSS-custom-property inspection in the page's own JS console, not from secondary sources.
