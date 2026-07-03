---
name: HF0 Residency
url: https://www.hf0.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

# HF0 Residency

## What It Is

HF0 is a San Francisco venture residency for repeat/technical founders — 10 teams per 12-week batch, up to $1M on an uncapped SAFE (5%, per secondary sources), culminating in a demo day for top-tier investors. It's a design exemplar for a very specific move: replacing every piece of brand imagery (logo, hero visual, per-founder avatar, per-batch icon) with a single reused abstract 3D asset, and enacting "less is the whole point" as literal page mechanics — a locked, non-scrolling single-viewport home screen and a Thesis page whose entire content is the word "Subtraction." The four-page Webflow marketing site (Home/Thesis/Facts/Team) hands off to a completely separate Next.js/Tailwind micro-app for the actual `/apply` flow, styled like a terminal form.

## Typography

- **Manrope** is the one declared brand typeface — `font-family: Manrope, sans-serif;` on `body`, loaded via `webfont.js` (Google Fonts loader), confirmed in the shared stylesheet (`hfo-c4704e.shared.b07922782.css`, served from Webflow's CDN, site ID `63909f6fc71535ed58405374`).
- Root sizing is **fluid/viewport-relative**: `body { font-size: 1vw; line-height: 1.2; }` — an unusual choice for a marketing site (most fluid-type setups use `clamp()` on headings only; here the _base_ size itself scales with viewport width sitewide).
- Hero headline ("The residency for repeat founders.") renders at 24px/300-weight even under its own `.bold` class modifier — the "bold" variant is a size bump (14px→24px), not a heavier weight; nothing on the site uses a genuinely heavy Manrope cut.
- Facts-page stats and the Thesis word render small (14–24px), consistent with the site's overall restraint — no oversized "hero display type" moment anywhere; the biggest type on the whole site is the 24px bubble headline.
- No secondary/serif/mono typeface on the marketing site. The separate `/apply` Next.js app switches wholesale to **`font-mono`** (Tailwind monospace stack) for every form label ("Your Name," "Email," "Phone Number") — a deliberate register shift from the marketing site's plain sans to a terminal/CLI voice for the actual application.

## Color

- **Sitewide default theme is dark**, not white: `body { color: #fffc; background-color: #0d0d0d; }` (near-black canvas, ~80%-opacity white text) — confirmed in the CSS, contradicting a "white/off-white bg" read of the site.
- **Home + Thesis pages** (`.hf0-homepage`): `background-color: #000` with `background-image: linear-gradient(#0009, #0009), url(".../HF0 BG New.jpg")` — a photographic background (soft vertical light-shafts through darkness, like sunlight through blinds/columns in an empty room) doubled-darkened by a black gradient wash, filling `100vw`/`100vh`.
- **Facts + Team pages** reuse the **exact same background photograph**, but bright-washed instead of dark (`HF0-White-BG small.jpg`, no dark overlay, fixed full-bleed at `z-index:-1`), with page chrome set to `background-color: #fffc` and text `color: #000c` — one photo asset, two moods (dark for the two "statement" pages, light for the two "data" pages), halving asset production.
- **Glass "bubble" hero container** (`.blank-bubble`): `backdrop-filter: blur(12px)`, `background-image: linear-gradient(331deg, #2525251a, #ffffff1a)`, `border: 1px solid #ffffff17`, `border-radius: 1.3em` — true glassmorphism, not a flat card.
- **Apply button** (`.blank-applybutton`): `color: #0d0d0d` on `background-color: #fff` with a faint diagonal `linear-gradient(339deg, #0000001a, #ffffff1a)` sheen, `opacity: .6` at rest (brightens on interaction).
- **One saturated accent color exists sitewide**: `#ec0000cc` (translucent red), used only on the Team page's two edge-glow divs (`.blurdivleft`/`.blurdivright`) — `background-color: var(--white)`, `filter: blur(150px)`, 500px wide × 100vh, fixed at the left/right viewport edges. Heavily blurred, so it reads as a faint warm bleed rather than a visible red block.
- Other hex values appear in the shared CSS bundle (`#2d62ff` blue, `#dd23bb` magenta, `#7dfdfe` cyan, `#3898ec` Webflow-default link blue) but were **not found applied to any visible element** on the pages read — these read as unused Webflow-starter-template boilerplate, not brand colors. Flagging as not confirmed rather than including as brand palette.

## Layout

- Webflow site (`data-wf-site="63909f6fc71535ed58405374"`, internal Webflow project alias `data-wf-domain="www.0.fund"`) with exactly four marketing pages: Home, Thesis, Facts, Team.
- **Home and Thesis are intentionally non-scrolling**: `html, body { overflow: hidden; height: 100vh; position: fixed; width: 100%; }` — the entire page is one locked, centered flex viewport with no scroll affordance at all. Facts and Team, by contrast, do scroll (Facts stacks a vertical list with `padding-bottom: 25vh`; Team runs a horizontal `overflow: scroll` "timeline").
- **Nav is fixed to the bottom of the viewport**, not the top: `.nav-bar { position: fixed; inset: auto auto 0%; }` — plain text links (Home/Thesis/Facts/Team, 12px/300-weight), no logo lockup, no hamburger.
- Team page layout is a **horizontal-scrolling card row** (`.team-timeline` / `.timeline-view-window`, Swiper.js bundled in the page's script stack), not a grid — each 250×250px card holds the orb icon (100px), name (24px/700), and title (12px/400).
- Facts page is a vertical stack of dated entries (`S25`, `W25`, `F24`, `S24`, `W24`, `F23`, `S23`, `W22`, `F21` — Spring/Winter/Fall + 2-digit year, echoing YC's own batch-naming convention), each row pairing a small orb icon with one or two terse stat lines.
- **`/apply` is a separate application** entirely: Next.js (`__className_f367f3`, `next/image`, hashed chunk names) with Tailwind utility classes, a full-bleed `bg-black` page with a `black_splash.jpg` background, and a form (`Full Name` / `Email` / `Phone Number` fields seen, more steps likely follow given the "Next" button) styled with translucent `bg-white/10` inputs and `border-white/30` outlines.

## Motion

- Script stack: **GSAP 3.12.5** + `ScrollTrigger` + `ScrollToPlugin`, **Swiper.js 11.0.5**, jQuery 3.7.1, plus Webflow's native IX2 interactions engine (`data-w-id` attributes) — a fairly heavy motion toolchain for a 4-page site.
- **Load-in reveal is the dominant pattern**: essentially every text node and image on the Home page ships an inline `style="opacity:0"` plus a `data-w-id`, resolving to visible via Webflow/GSAP-driven interaction on load. Combined with the locked, non-scrolling hero, this creates a single "tableau reveal" rather than a scroll-triggered sequence.
- The **orb itself is a pre-rendered GIF, not live 3D/WebGL** — `01.-Sliced-sphere_25-fps_small.gif`, 1000×1000px, ~4MB, 25fps loop. It is not real-time rendered geometry; it's an animated bitmap asset reused across every context (hero at 200px, Facts-page icon at 85px/50px, Team-page avatar via `.batchicon` at 100px).
- Mobile-only touch: the mobile Apply CTA carries an extra inline transform (`translate3d(0,-10px,0)`), suggesting a small settle/push animation exclusive to the mobile floating button.
- A `@keyframes spin` rule exists in the shared CSS but reads as unused Webflow-default spinner boilerplate — not confirmed as applied to any visible element.

## Hero Anatomy

- Full-bleed `100vw`×`100vh` flex-centered stage, no page scroll, dark photographic backdrop (blurred light-shaft photo, double-darkened via `linear-gradient(#0009,#0009)`).
- Centered: the 200px animated grayscale "sliced sphere" — the entire brand mark. There is no separate wordmark logo visible in the hero; the orb IS the logo.
- Overlapping/below the orb: a frosted-glass "bubble" (12px backdrop-blur, translucent gradient sheen, hairline border, 1.3em rounded corners) containing, top to bottom:
  - Headline: **"The residency for repeat founders."** (24px, weight 300)
  - **Apply** button (white pill, dark text, faint diagonal gradient, resting at 60% opacity)
  - A pre-baked pair of cohort dates toggled via CSS `.hide` classes (only one pair shown at a time): "Batch Starts: September 13" / "Demo Day: June 23" — OR — "Batch Starts: January 4" / "Demo Day: December 4"
  - Press credibility line: "Read more in the **NY Times**" (links to the 2023 NYT Magazine feature)
  - Two small decorative Ellipse SVGs positioned at the bubble's top-left/top-right corners
- A floating, sticky-positioned "NY Times" press mention sits in the page's top-right corner, outside the bubble.
- Bottom-fixed text nav (Home/Thesis/Facts/Team) closes out the hero — no header at all.

## Components of Note

- **One reused GIF as the entire brand system** — logo, hero centerpiece, Facts-page batch icon, Team-page per-founder avatar. Zero photography or individual headshots anywhere on the site.
- **Glassmorphic "bubble"** as the singular structural container for all hero content (headline, CTA, dates, press mention) — the one recurring UI component on the marketing site.
- **Facts page written as code comments**: each stat line is prefixed `//`, e.g. `// Top team breaks $20M annualized revenue`, `// First decacorn founder participation` — an engineering-changelog register instead of a marketing stat grid.
- **Team page horizontal "timeline"** of 250×250px cards (orb + name + title only, no bios, no photos) rather than a conventional team grid.
- **Bottom-fixed, header-less nav** — plain text links pinned to the viewport's bottom edge instead of a top header/logo bar.
- **A dedicated Next.js/Tailwind micro-app for `/apply`**, visually and technically disjoint from the Webflow marketing site — monospace form labels, translucent bordered inputs, black-splash background, terminal-adjacent form aesthetic.

## Voice & Copy

- Extremely spare and declarative throughout: "The residency for repeat founders." / "Subtraction." (the entire Thesis page) / "We only back 10 teams at a time. These are the facts." / "We" (the entire Team-page headline, preceding any names).
- Facts read as terse, adjective-free hard numbers in code-comment syntax: "// Teams raising after demo day hit avg. valuation of $82M," "// First $10M contract signature," "// 4 repeat unicorn founders in one batch."
- Cohort naming uses an insider shorthand (S25/W25/F24…) that echoes Y Combinator's own batch-naming convention — positions HF0 as YC-register-adjacent.
- Value prop is pure selectivity and pedigree — "repeat founders," "we only back 10 teams," "first decacorn founder" — with none of the generic accelerator vocabulary ("mentorship," "network," "pitch training") anywhere in the copy.
- Team page answers "who are you" with a collective pronoun before any individual name — identity framed as a "we," not a roster of bios.

## Distinctive Moves

1. **One animated GIF (a grayscale, ribbed/sliced sphere) stands in for the entire brand system** — logo, hero visual, per-batch Facts icon, and per-founder Team avatar all reuse the identical asset, replacing photography, iconography, and a wordmark simultaneously.
2. **"Subtraction" is enacted as page mechanics, not just stated as copy**: Home and Thesis both lock `overflow:hidden`/`height:100vh`/`position:fixed` — a genuinely non-scrolling single-viewport page — and the Thesis page's entire content is the single word "Subtraction."
3. **A single background photograph is re-treated two ways** (black-overlay wash for Home/Thesis, white wash for Facts/Team) to cheaply produce a dark/light split across the site, paired with a Facts page that voices its whole stat sheet as literal `//` code comments and a nav bar fixed to the bottom of the viewport instead of the top.

## Buzz Evidence

- NY Times Magazine feature, "AI start-up accelerator San Francisco" (May 31, 2023) — linked twice on the homepage as the site's sole press citation [P, primary link on-site, verified via WebFetch 2026-07-02].
- Facts page names real, verifiable alumni outcomes: Krea (GenAI design tool, "released before ChatGPT," W22 batch) and Crossmint ($1M revenue by demo day, F21 batch) — both independently known companies, lending the stat sheet external credibility [S, on-site claim cross-referenced against known company names, 60].
- Per secondary aggregator sources (Crunchbase-adjacent/accelerator-directory writeups, not independently verified against a primary HF0 filing): HF0 recently closed a **$100M fund**, up from prior $8M and $16M funds, with $1M-uncapped-SAFE-for-5%-equity terms [S, secondary aggregators (Peony, Crunchbase, xraise.ai), WebSearch 2026-07-03, ~40 — treat fund-size figure as directional, not confirmed against a primary HF0 or SEC source].

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **One reusable abstract asset as the entire visual identity.** Astryx could adopt a single animated/looping abstract mark (in place of screenshots) reused consistently across the homepage hero, a "meet the team" page, and any per-release/changelog icon — cutting asset production to one file while reading as more confident than a screenshot-per-context approach.
2. **Treat "restraint" as a literal technical constraint, not just a style choice.** HF0 enacts "subtraction" as locked, non-scrolling pages; Astryx's own marketing homepage could commit to a genuinely single-viewport hero (no scroll below the fold until an explicit "see components" affordance) to make the design system's own minimalism legible in the page mechanics, not just the copy.
3. **Reuse one background asset with two treatments (dark wash / light wash) instead of two separate hero images** for a docs site that ships both a dark and light theme — cheaper to produce and reinforces that it's the same system, restyled, exactly the pitch of a design system.
4. **Voice component/changelog entries as engineering artifacts, not marketing copy** — HF0's `//`-commented Facts page is a directly portable pattern for an Astryx changelog or "what shipped this batch of releases" page: terse, numeric, no adjectives.
5. **Consider a bottom-fixed, text-only nav for a docs/marketing microsite** where the primary UI is elsewhere (Storybook/component explorer) — HF0's header-less, bottom-pinned nav keeps chrome minimal when the content itself is meant to carry all the weight.
6. **Isolate a distinct "app" surface (the way HF0's `/apply` is a separate Next.js/Tailwind build from the Webflow marketing site) when a sub-flow needs a genuinely different register** — e.g. Astryx's live component playground could deliberately diverge (monospace, terminal-styled) from the marketing site's voice, signaling "you've left the brochure and entered the tool."

## Pages Read

- https://www.hf0.com/ (home — WebFetch + raw HTML/CSS source scan, including downloaded background photo and orb GIF frame)
- https://www.hf0.com/thesis (WebFetch + raw HTML)
- https://www.hf0.com/facts (WebFetch + raw HTML, including downloaded white-background photo)
- https://www.hf0.com/team (WebFetch + raw HTML)
- https://www.hf0.com/apply (raw HTML — confirms separate Next.js/Tailwind stack)
- https://www.hf0.com/llms.txt (404 — not present)
- Shared stylesheet: `https://cdn.prod.website-files.com/63909f6fc71535ed58405374/css/hfo-c4704e.shared.b07922782.css` (fetched directly for font-family/color/selector verification)
