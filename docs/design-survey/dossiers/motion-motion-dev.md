---
name: Motion (motion.dev)
url: https://motion.dev/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Motion (formerly Framer Motion, renamed 2024) is an open-source, production-grade animation library for JavaScript, React and Vue — hybrid engine combining the Web Animations API / `ScrollTimeline` with JS spring physics. The homepage is unusual among tool sites in that it isn't a separate marketing artifact describing the product: nearly every section is a live, running instance of Motion's own APIs (scroll animation, gestures, layout animation, a marquee "Ticker" component), turning the site itself into the product's biggest demo. It's monetized via a one-time-purchase "Motion+" premium tier (£299, lifetime) that bundles premium components, tutorials, an "AI Kit" for agent-driven workflows, and a free-standing performance auditor called MotionScore.

## Typography

- `--font-sans: "TASA Orbiter", "Inter", sans-serif;` — TASA Orbiter (a licensed geometric grotesk from TASA Type) is the primary display/UI face, with Inter as fallback. Declared as a CSS custom property in `index-CyUZvWjC.css` (bundled stylesheet), confirmed via `@font-face`-adjacent `font-family:TASA Orbiter` / `font-family:Inter` literal declarations in the same file. Font files served from Google Fonts CDN (`fonts.gstatic.com/.../tasaorbiter/...woff2`, `.../inter/...woff2`).
- `--font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;` — Vercel's Geist Mono for all code blocks, the changelog version tags, and the `FIG.01`-style captions.
- One isolated exception: `font-family:Georgia,Times New Roman,serif` appears only inside a single carousel-card demo (`hps-carousel-card-title`, a "burst-stack" example card) — a demo prop, not a brand typeface.
- No other custom faces found. No italic-serif, no Space Grotesk, no system-font stack for body copy.

## Color

Dark mode is the default (`[data-mode=dark]` values match `:root`):

- `--background:#0d1111` (near-black with a faint green/teal cast) · `--foreground:#ededec` · `--layer:#13181a` · `--border:#1e2427`
- `--surface-deep:#060607` · `--surface-deepest:#030304` (darker recessed panels, e.g. code blocks)
- `--accent:#e8eeee` — the _default_ accent is deliberately near-neutral/monochrome, not a saturated brand color
- `--accent-2:#8df0cc` — mint green, Motion+'s signature color (used on `/plus`, referenced in og-image metadata)
- `--accent-3:#a5b4fc` — soft indigo/lavender, secondary accent
- `--code-bg:#111112` / `--code-border:#1e1e20`
- `--error:#ff5f57` (macOS traffic-light red, echoed in a "dress corner" chrome detail in the hero)

A full **light mode** exists (`[data-mode=light]`, e.g. `--background:#f8f8f6`/`--foreground:#1a1a1c`), and beyond light/dark the CSS exposes **seven selectable accent "schemes"** — `amber`, `blue`, `emerald`, `mint`, `purple`, `red`, `rose` — each with its own light+dark foreground/background/border pairs (e.g. light-mint `--foreground:#1a2e26`, light-amber `--foreground:#2e2a18`, light-purple `--foreground:#241a2e`). That's 7 schemes × 2 modes = 14 live palettes shipped in one bundle, all built on the same variable names.

MotionScore's audit report uses its own rainbow tier scale, distinct from the brand accents: `--tier-s:#ffd60a` (gold) · `--tier-a:#34d399` (green) · `--tier-b:#60a5fa` (blue) · `--tier-c:#a78bfa` (purple) · `--tier-d:#e879f9` (magenta) · `--tier-f:#f43f5e` (rose-red), each paired with a translucent `-bg` variant (e.g. `--tier-a-bg:#34d39918`).

## Layout

- `--max-width:980px` — a notably narrow content column for a marketing homepage (vs. the 1200–1440px norm cited for peers like Stripe/Vercel), reads as an editorial/technical-report width rather than a wide bento canvas.
- The feature-comparison grid class is literally named `.home-features-bento`: `grid-template-columns:repeat(2,minmax(0,1fr))` above 1100px, collapsing to a single column below 600px — a real, named bento grid, not a marketing buzzword.
- Information architecture is a **multi-level numbered "datasheet"**: top-level page sections are numbered `01`–`07` with a `>` chevron ("01 › Animation library", "02 › Examples", "03 › Showcase", "05 › Sponsors", "Motion+", "06 › MotionScore", "07 › Documentation"), each containing `FIG.01`–`FIG.08` sub-captioned feature cards, and inside the Motion+ section a further nested `1.1`–`1.6` sub-list (AI Kit sub-features). Three levels of numbering deep — closer to an engineering spec sheet or scientific paper than a typical SaaS scroll.
- Docs pages (`/docs/react`) use a conventional three-part shell: breadcrumb (`Motion > Docs > Motion for React: Get started`), left-nav-implied hierarchy, and inline "Live example [Open]" links out to a dedicated `examples.motion.dev` subdomain rather than embedding every demo in-page.
- Footer is a wide mega-nav split into `Site` (About/Changelog/Docs/Examples/Magazine/Sponsor/Troubleshooting), `Products` (AI Kit/CSS Studio/Motion/Motion+/MotionScore), a `Most Popular` SEO-link cluster (React animation, Layout animation, SVG animation, Motion component, **GSAP vs Motion**), per-framework Docs links, and Social (Discord/GitHub/X/YouTube).

## Motion

Motion literally _is_ the product being marketed, so the site dogfoods its own primitives at every turn:

- **Scroll animation**: hardware-accelerated, `ScrollTimeline`-driven (native `scroll()` API), demoed directly in the FIG.02 card and used to drive the hero's own scroll-scrubbed ticker-plate reveal (see Hero Anatomy).
- **Native gestures**: `hover`, `press`, `drag` demoed as literal running interactions (FIG.03), not GIFs.
- **Layout animation**: single `layout` prop animates between arbitrary layout states (FIG.04).
- **Spring physics**: `type="spring"` real spring math (FIG.05); a "Transition editor" widget (`EaseSpring`, adjustable Duration/Delay, `linear()` easing output) lets visitors tune CSS spring curves live on `/plus`.
- **Exit animation**: `AnimatePresence` keeps unmounting elements alive to animate out (FIG.06).
- **Timeline sequencing**: `variants` + `stagger()` + timelines (FIG.07); `useMotionValue`/`useTransform` for derived real-time values (FIG.08).
- **Ticker component**: an infinite marquee built on "a unique minimal-clone algorithm" (i.e., not the naive duplicate-the-DOM-node marquee hack) with true velocity control — demoed as a faux stock ticker (see Distinctive Moves).
- No GSAP, no Lottie, no video — everything is the library's own CSS/JS output. Explicit copy calls out "APIs up to 90% smaller than their GSAP alternative" and a dedicated "GSAP vs Motion" footer link, positioning restraint/footprint as the differentiator versus the incumbent.

## Hero Anatomy

- Small monospace kicker above the headline: `// Open Source  // MIT License  v12.42.2` (live version number, pulled from the just-shipped changelog).
- Headline: **"Motion."** — a single word plus a period, minimal.
- Subhead: **"Production-grade animation for the web."**
- Framework availability badges directly under the subhead: **"Available for React / JavaScript / Vue."**
- Primary CTA: **"Get started"** button.
- Immediately below the fold: a five-card value-prop row, each one bolded label + one sentence — _Free_ ("Completely free to use, MIT licensed and open source"), _Production ready_ ("Trusted by Framer and Figma across hundreds of thousands of sites"), _Hybrid engine_ ("JavaScript and hardware-accelerated browser APIs in one library"), _Built for AI_ ("Agent-compatible documentation, skills and API"), _Tiny footprint_ ("APIs up to 90% smaller than their GSAP alternative").
- Background is a dark, near-black canvas (`#0d1111`) — no illustration, no gradient orb, no hero photo. The one big visual "moment" isn't in the literal hero at all — it's the scroll-scrubbed Ticker reveal that arrives as you scroll into the Motion+ section: an LED dot-matrix "plate" assembled step-by-step (`--hps-steps:7`, scroll anchors at every ~1 viewport-height for `motion-plus-ticker`/`-carousel`/`-cursor`/`-typewriter`/`-animatenumber`/`-scrambletext`/`-curtains`) with corner-bracket "ruler" chrome and individually-delayed LED cells (`--led-d` per cell) — a hardware-control-panel aesthetic built entirely from Motion's own scroll-linked primitives, i.e. the site's marquee hero visual is itself a dogfood demo, deferred past the fold rather than front-loaded.

## Components of Note

- **Ticker** — infinite marquee demoed as a tongue-in-cheek fake stock ticker comparing itself to peers: `MOTION ▲ 2.4%`, `FRAMER ▲ 128K`, `REACT ▲ 1.1%`, `VUE ▲ 0.6%`, `GSAP ▼ 0.3%`, `STRIPE ▲ 4.0%` — a competitive-positioning joke expressed as working UI rather than a comparison table.
- **MotionScore report** — free, standalone tool ("Run free audit," results in under 60 seconds) that grades _any_ live site's animations S through F using a six-tier performance methodology (S/A = compositor-only; B = one-time layout read; C = repaint-per-frame; D = layout+repaint; F = forced synchronous layout), rendered as an ASCII-style overall grade, a tier-distribution bar chart, per-finding what/why/impact/fix entries, an accessibility check (`prefers-reduced-motion`), and a top-3 recommendations summary. Runs via an agent command (`/motion audit`, `/motion audit @components/Button`, etc.) as well as the free web tool — doubles as both lead magnet and CI-gateable product (a paid "MotionScore" cloud service is upsold alongside it).
- **Changelog feed** (`/changelog`) — version-badged entries (patch/minor/major) across three products (Motion, Motion+, AI Kit), most-recent-first, infinite scroll ("Loading more releases…"); e.g. `Motion patch 12.42.2 — 01 Jul 2026 — "Cropped group layers now animate border-radius from the old to new radius."` Shipping cadence is visibly active (multiple releases per week).
- **Testimonial cards** (`/plus`) — four named, attributed quotes (Hugo Richard/Vercel, Kaiyu Hsu/Sequoia, Sander Vonk/Indie, Sam/Humaan), each tied to a specific feature (Ticker, splitText) rather than generic praise.
- **Docs "Live example [Open]"** — inline links out to a dedicated `examples.motion.dev` subdomain rather than iframing every demo into the doc page itself, keeping doc pages fast while still one click from a running example.

## Voice & Copy

The `/about` page breaks from the rest of the site's terse engineer-voice into a first-person founder narrative: _"Hello! I'm Matt Perry, creator of Motion."_ It traces a personal lineage (Popmotion 2014 → Framer Motion → Motion) with self-aware asides ("You could call it a problem, but I'm enjoying myself 😅") and frames the project as independently sustained by Motion+ revenue and sponsors — not a corporate rebrand story.

Everywhere else the copy is short, declarative, and numeric: _"Copy, paste, ship."_ / _"Pick your platform."_ / _"Find & fix animation performance issues."_ Percentages and time bounds do a lot of rhetorical work ("90% smaller," "under a minute," "S through F"). Pricing copy repeats an ownership-over-subscription frame three separate ways: _"Motion+: production animations, lifetime updates,"_ _"Pay once. Build animations forever,"_ _"MIT-licensed code that's yours forever."_

## Distinctive Moves

1. **The whole homepage is dogfood, not a demo reel.** Every FIG.01–08 card, the Ticker, and MotionScore are live instances of the shipped library's actual API — simultaneously documentation, proof, and hero content. Nothing is a screenshot or a rendered video.
2. **MotionScore as a free, genuinely standalone utility.** It audits _any_ site's animation performance (not just Motion's), grading S–F with a real compositor/paint/layout methodology and its own rainbow tier-color system reused across the site — a lead-gen tool that's independently useful, which is rarer than it sounds.
3. **Three-level numbered "datasheet" IA** (`01`–`07` sections → `FIG.01`–`08` sub-captions → `1.1`–`1.6` sub-features inside Motion+) reads like an engineering spec sheet, reinforcing the "production-grade" positioning typographically, not just in copy.

## Buzz Evidence

- ~30.7k GitHub stars, ~3.6M weekly npm downloads (30M+/month) as `motion` on npm [S, WebSearch aggregation of npm/GitHub, exact date of these counts not verified — treat as approximate, 2026]. Source: [Motion GitHub](https://github.com/motiondivision/motion), [npm trends](https://npmtrends.com/framer-motion).
- Renamed from `framer-motion` to `motion` in 2024, positioned as an independent (non-Framer-owned) OSS project sustained by Motion+ sales and sponsors, per its own `/about` page.
- Active, visible shipping cadence: changelog shows a patch released 01 Jul 2026 — i.e. within the week of this crawl — evidencing a live, maintained project rather than a static marketing site.
- Self-reported (homepage copy, not independently verified): "Trusted by Framer and Figma across hundreds of thousands of sites."

## What Astryx Should Take

1. **Dogfood the docs, don't screenshot them.** Wherever Astryx's `{Name}.doc.mjs` pages currently show a static code example, render a _live_ StyleX-powered instance of the actual component (the way Motion's FIG cards run real scroll/gesture/layout code) — the same content Storybook already renders, surfaced directly in the marketing/docs flow rather than only in Storybook.
2. **Ship a small, free, standalone audit as a growth hook.** An "Astryx Score" — grading a consuming repo's usage (inline styles vs. `stylex.create`, non-token colors, missing `stylex.when.ancestor` markers, hardcoded hex vs. theme vars) with a tier/letter badge — mirrors MotionScore's free-utility-as-lead-gen model and gives the design system a concrete, sharable artifact beyond docs.
3. **Adopt a light numbered-section IA for the component gallery/homepage** (`01`, `02`... with a short `FIG.`-style sub-caption per pattern) to signal "engineering-grade system," which pairs naturally with Astryx's existing structured JSDoc headers (`@input`/`@output`/`@position`) — the numbering is a thin skin over data Astryx already captures.
4. **Show the multi-scheme token system live, not just as a table.** Motion's 7-scheme × light/dark CSS-variable set is a direct precedent for Astryx's own ThemeProvider docs page: let visitors toggle scheme + mode in place and see the same demo component restyle, rather than reading static hex swatches.
5. **Borrow the terse, engineer-voice microcopy register** ("Copy, paste, ship.") over generic marketing language for Astryx's own docs-presentation surfaces — it fits an internal-tools audience better than adjective-heavy SaaS copy.
6. **A comparison-as-working-component, not a comparison table.** If Astryx ever needs to position against other design systems, a Ticker-style live marquee demoing the actual component (rather than a feature-matrix table) is a more memorable, more "prove it" pattern.

## Pages Read

- https://motion.dev/ (home, fetched via WebFetch + raw HTML via curl)
- https://motion.dev/llms.txt
- https://motion.dev/pricing
- https://motion.dev/plus
- https://motion.dev/blog (redirects to the Magazine archive)
- https://motion.dev/about
- https://motion.dev/docs/react
- https://motion.dev/changelog
- https://motion.dev/docs/motionscore-code-audit
- https://motion.dev/sitemap.xml (used to locate AI Kit / MotionScore doc URLs)
- Bundled CSS assets inspected directly for tokens: `index-CyUZvWjC.css`, `home-Dclr5DUI.css`, `examples-4cDL-NLF.css`, `plus-CSrsumVI.css`
