---
name: Cardboard
url: https://www.usecardboard.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

# Cardboard

## What It Is

Cardboard is a YC W26 "agentic video editor" that runs entirely in the browser — describe an edit in plain language and it cuts, captions, reframes, and composes the footage. It's a genre exemplar for a very specific move: pairing an oversized serif display headline (a category-breaking choice against the sans-serif SaaS default) with a real, interactive product surface embedded directly in the hero rather than a static screenshot. The whole site — home, pricing, careers, changelog — runs on one consistent dark charcoal canvas with a tight near-black gray ramp, restrained functional accent color, and a recurring hand-drawn underline motif under one word per headline.

## Typography

- **Display serif — `Denton`** (`Denton-Light.woff2`/`.woff`, weight range 100–700, self-hosted at `/fonts/brand/`). Bound to the CSS var `--font-display: "Denton","Raveo Variable Variable",serif` and the utility class `.font-display{font-family:var(--font-display)}`. Used for every page's H1: homepage "Edit videos in minutes, not hours" (`font-thin`/100, `text-5xl` → `md:text-6xl` → `lg:text-[60px]`, `leading-[0.95]`, `tracking-[-0.01em]`), pricing "Pricing for every stage of editing" (`font-light`, up to `md:text-[72px]`), careers "Every story deserves to be told" (`font-light`, up to `lg:text-[64px]`).
- **UI/marketing sans — `Delight`** (`Delight-Variable.ttf`, variable weight 100–900). Bound to `--font-marketing-sans` and `--font-landing` (both `"Delight","Raveo Variable Variable",sans-serif`). Used for nav links, feature-card copy, prompt-chip labels, timestamps — body sizes run 14–16px.
- **Numeric/tabular — `"Raveo Variable Variable"`** via `--font-numeric`, used with `tabular-nums` for timers/timestamps (e.g. "3:57 – 4:11").
- **Framework baseline — Geist + Geist Mono**, self-hosted via `next/font` (visible as `geist_..._module` classes on `<body>`); these are the Tailwind fallback (`--font-sans`, `--font-serif`, `--font-mono`) but are overridden everywhere visible by Denton/Delight.
- **A large secondary font library is bundled but not part of the brand voice**: `@font-face` declarations also ship Inter, Manrope, Satoshi, Clash Display, Gambarino, Sathu, Playfair Display, Advercase (roman+bold), ZT Formom (roman+italic), Pixelon, Bootzy TM, New Romantics. These map to the in-product caption-style picker (the site's own copy names caption styles "Feels Real," "Stacked," "Minimal," "Serif") — i.e., typography-as-feature inside the editor, distinct from the marketing chrome above. Worth noting explicitly so it isn't mistaken for brand type.
- All three brand fonts (Denton, Delight, Raveo) are variable-weight files, letting a single asset cover thin display headlines through medium UI labels.

## Color

- `<html class="dark">` is hard-coded — there is no light-mode toggle; dark is the only theme, confirmed on home, pricing, and careers.
- Tailwind-level tokens: `--background:#1a1a1a`, `--foreground:#d9d9d9`.
- Actual surface colors used across cards/panels/the embedded editor chrome form a tight near-black gray ramp (not OLED `#000`): `#07070A`, `#050507`, `#0B0B0F`, `#0D0D12`/`#0d0d12`, `#131319`, `#15151B`, `#18171C`, `#191919`, `#1C1C21`, `#26262B`/`#27272B`.
- Text: white for headlines; `#9B9B9B` and `#D1D0CE` (warm greige) for secondary copy/timestamps, tracking the `--foreground` value.
- Accent color is sparse and functional, not a hero brand color:
  - `#0A90F8` / `#0D91F5` (blue) — the hero product shot's glow blob and the embedded playhead/scrub line; the one "system is active" color.
  - `#FF6E5C` (coral), `#FBB13C` (amber), `#3FCF8E` (mint) — recreated macOS traffic-light window-control dots on the embedded editor mockup, in custom brand hues rather than true macOS red/yellow/green.
  - `#FFD24A` (gold) — a spot-color word inside a caption-style preview ("Feels **real**").
  - `#F6E8C6` (cream) — paired with a `Denton-Light` label inline.
  - `#8FB9F0` (light blue) — icon hover state.
- No gradients/orbs as a hero backdrop; color is otherwise monochrome charcoal with small, purposeful accent hits.

## Layout

- Next.js on Turbopack (visible `dpl_` deployment ids, chunk-hash filenames), Vercel-hosted (`next/image`).
- Full-bleed dark canvas, `max-w-[2000px]` outer wrapper, centered hero column.
- Hero: `min-h-screen` flex column (headline, CTAs), then a **scroll-pin wrapper** — an outer `<section style="height:200vh">` holding an inner `sticky top-0 h-screen` panel — that pins the embedded editor demo in view while the page scrolls.
- Below the fold: four modular feature sections (Know Every Clip / Reframe in Seconds / Find Any Moment / Edit Together) → "Creative Utilities for Faster Editing" card grid → "Polish the Final Cut" grid (duplicated in the DOM, likely for the marquee/animation mechanism) → "Direct Your Edit With Prompts" infinite chip marquee → an 8-item showcase carousel → closing CTA with use-case tags → customer-logo marquee → 3-column footer.
- Pricing: 3-card tier grid (Creator $32/mo, Pro $120/mo marked "Recommended," Teams custom), monthly/annual toggle (20% annual discount), full comparison table, pay-as-you-go credit add-ons, FAQ.
- Careers: single column, stacked role cards, one abstract (no-people) hero image.
- Changelog: persistent left date-rail of jump links beside chronological right-hand entries, each with hero art, "Improvements" and "Fixes & housekeeping" sub-sections, and a closing tagline; versions run v0.1 (Nov 9 2025 launch) → v0.31 (Jun 29 2026) — a visibly rapid, near-weekly ship cadence.

## Motion

- **Load/scroll entrance choreography is the dominant motion signature.** Nearly every hero/section element ships an inline `style="opacity:0;filter:blur(Npx);transform:translateY(Npx)"` that resolves in on load or scroll. The H1 is split word-by-word into `<span>`s, each independently blurred/invisible until its own reveal.
- **Sticky-scroll pin** (`height:200vh` wrapper + `sticky h-screen` child) drives the hero product demo — motion is a function of scroll position, not an autoplaying video.
- **Infinite marquee** (class taxonomy `logoloop__track` / `logoloop--fade` / `logoloop--horizontal`, matching the open-source "LogoLoop" component pattern) is used twice: once for the customer-logo wall, once repurposed for the "Direct Your Edit With Prompts" prompt-chip list — the same edge-fade infinite-scroll mechanism serving two different content types.
- Hover micro-interactions: border/background opacity shifts, the "Get started" arrow-right icon nudges right on hover, chip icon color shifts `white/85 → white`.
- A source scan for `framer`, `gsap`, `lottie`, `three.js` came back empty — no bundled animation-library fingerprint was found (chunk names are content-hashed, so this isn't 100% conclusive, but no obvious heavy-motion dependency is present). Motion reads as plain CSS transforms/transitions plus a thin React layer driving the inline opacity/blur/translate values.

## Hero Anatomy

- H1 (Denton serif, `font-thin`/100, `text-5xl` → `lg:text-[60px]`, `leading-[0.95]`, `tracking-[-0.01em]`): **"Edit videos in minutes, not hours"** — rendered word-by-word, each word its own inline-block span animating from blurred/invisible to sharp/visible.
- "minutes" carries a hand-drawn wavy underline delivered as a background-image SVG (`/images/marketing/hero-underline.svg`) absolutely positioned under just that word — not a CSS border trick. On mobile the H1 also gets a soft white text-shadow glow (`0 0 16px rgba(255,255,255,.28)`), a treatment reserved for small screens.
- Dual CTA: ghost/outline **"Learn more"** (hidden below `sm`) + solid white pill **"Get started"** → `/signup`, with a Lucide arrow-right icon that nudges right on hover.
- Below the CTAs, the scroll-pinned live demo: an in-browser "editor" mockup with custom-colored traffic-light window dots, a video preview showing timestamp "0:00/1:01," a chat-style **"AI director"** input panel with placeholder copy "Hi! I'm your AI director. What do you want to make today?", and four named media-library thumbnails (`founder_vo.mov`, `office_broll.mp4`, `product_hero.mp4`, `logo_sting.mov`) that read as a real, lived-in project rather than generic placeholder files.

## Components of Note

- **Sticky-scroll pinned product demo** (`height:200vh` / `sticky h-screen`) — the flagship hero device; the product IS the hero visual.
- **LogoLoop-pattern infinite marquee**, reused for both a customer-logo wall (Autumn, General Legal, Hyperspell, Oolka, Oximy, PostHog, Shopos) and a scrolling strip of prompt-chip examples, each chip paired with its own Lucide icon (flame for "Pull the hot takes," scissors, a music note for "Sync to the beat," etc.).
- **In-app caption-style picker** exposing four named styles (Feels Real, Stacked, Minimal, Serif), each rendered live in a different bundled display font (e.g. Playfair Display for "Serif") — typography surfaced as a feature, not just a brand choice.
- **Reframe control** offering 5 named aspect-ratio targets (16:9, 9:16, 4:5, 1:1, 4:3) shown as live before/after crops.
- **Search-the-footage** demoed with a literal natural-language query ("the moment we hugged") returning matched clips — capability proven via a concrete example, not an abstract claim.
- **Changelog** left-rail date index + versioned entries (v0.1 → v0.31) with hero art per release.
- **Pricing**: 3-tier card grid with a "Recommended" badge on Pro, monthly/annual toggle, and a pay-as-you-go credit top-up tier ($10 minimum, up to 30% bulk discount).

## Voice & Copy

- Meta description states the pitch directly: _"An agentic AI video editor in your browser. Describe your edit and Cardboard cuts, captions, reframes, and composes it. No installs, no downloads."_
- The product is personified as **"your AI director"** — a named collaborator, not a faceless feature — echoed in the chat placeholder copy.
- Prompt-chip copy is deliberately colloquial/imperative: "Pull the hot takes," "Cut the dead air," "Make it cinematic," "Keep it fast and fun" — reads like notes to a human editor, not API-style commands.
- Changelog voice is upbeat and benefit-first ("Bring in real footage," "Roll something beautiful. We'll handle the b-roll"), including a hidden "secret offer" easter-egg link on one entry.
- Careers headline "Every story deserves to be told" plus the footer tagline "Made within SF" lean mission-driven/indie rather than corporate.
- Pricing copy stays plain and functional: "Pricing for every stage of editing" — no legalese framing near price.

## Distinctive Moves

1. **A serif display headline (Denton) with word-by-word blur-reveal, plus a single hand-drawn SVG wavy underline reused as a recurring device under one key word on every page's H1** (homepage "minutes," careers "told") — a portable, low-cost brand signature rather than a one-off homepage flourish.
2. **The hero IS the product**: a scroll-pinned (`200vh`/sticky) live editor mockup with a named "AI director" chat panel and realistic project files, not a screenshot or a rendered demo video.
3. **A large secondary type layer most visitors never notice**: the product ships roughly a dozen extra display/caption fonts (Playfair Display, Clash Display, Advercase, ZT Formom, Pixelon, etc.) purely so users can pick a caption style inside the editor — typography itself is a shipped product feature, not only a brand decision.

## Buzz Evidence

- Highest-upvoted "Launch HN" post in the entire YC W26 batch: **131 points / 83 comments** — "Launch HN: Cardboard (YC W26) – Agentic video editor," news.ycombinator.com/item?id=47170174 [P, live HN thread, verified via search 2026-07-02]. YC's own coverage credits the result to an honest technical write-up, fast founder replies to every comment, and a special no-signup/no-paywall one-day trial link.
- Y Combinator W26 batch company; founders Saksham Aggarwal (ex-Iterate AI, published at ACL) and Ishan Sharma (4.5 years at HackerRank) — per YC company/launch pages and LinkedIn.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Adopt the "recurring wavy underline under one word" device** for Astryx's own headline system: a single reusable SVG background-image under one word per page H1 — cheap, no per-page custom animation needed, and it reads as a signature the way Cardboard's does.
2. **Replace a static hero screenshot with a scroll-pinned live component demo.** Cardboard's `height:200vh`/`sticky h-screen` wrapper pins its actual editor UI in the hero; Astryx's homepage could pin a live component playground the same way — directly relevant since Astryx's "product" literally is UI.
3. **Reuse one infinite-marquee component (LogoLoop pattern) for two different content types**, the way Cardboard does for its logo wall AND its prompt-chip strip: an Astryx "used by" logo wall and a scrolling strip of component/variant names or code snippets, built on the same marquee primitive to cut implementation cost.
4. **Borrow the restrained accent-color discipline**: keep the docs canvas to a tight near-black gray ramp (never pure `#000`) with a single functional accent color reserved for "system is active" states (focus rings, loading, an equivalent of Cardboard's playhead-blue) instead of spreading brand color across the whole UI.
5. **Document Astryx's variable-font strategy the way Cardboard's stack works**: one variable display serif/sans for headlines at thin/light weights, a separate UI/marketing sans for body copy — and if Astryx ever ships a user-facing typography/theme picker, treat its font options as a first-class, live-previewed feature (the way Cardboard's caption-style fonts are a selling point) rather than a buried settings toggle.

## Pages Read

- https://www.usecardboard.com/ (home — WebFetch + raw HTML/CSS source scan)
- https://www.usecardboard.com/llms.txt
- https://www.usecardboard.com/pricing (WebFetch + raw HTML)
- https://www.usecardboard.com/careers (WebFetch + raw HTML)
- https://www.usecardboard.com/changelog (WebFetch)
