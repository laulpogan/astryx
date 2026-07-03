---
name: Zed
url: https://zed.dev/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Zed is a high-performance, multiplayer/agentic code editor built in Rust by the creators of Atom and Tree-sitter, positioned as bridging native-app speed with AI collaboration ("AI coding at native speed"). The marketing site (zed.dev, Next.js) is open-source-adjacent — the primary hero CTA links straight to the GitHub repo (86,413 stars, 9,350 forks as of 2026-07-03) — and treats the product's own ecosystem (extensions, commit activity, release notes) as first-class homepage content rather than illustration.

## Typography

Four typefaces are compiled into the site's font bundle (verified via `@font-face` declarations in the served CSS, not guessed):

- **plexSans → IBM Plex Sans** (`IBMPlexSans_Regular.woff2`) — the default UI/body sans, referenced as `--font-sans` fallback stack (`ui-sans-serif, system-ui, sans-serif…`).
- **plexSerif → IBM Plex Serif, variable** (`IBMPlexSerif_Var.woff2`, weight axis 300–700, plus a true italic variable file) — used for all headings via a `.font-plex-serif` utility. This is the brand's signature display face.
- **zedMono → actually Lilex** (`Lilex_Regular.woff2`, an open-source ligature monospace in the Fira Code family), exposed as `--font-zed-mono` — used for `<kbd>` shortcut hints, code, and CLI snippets. Notably NOT Zed's own in-editor font (which is a separate concern); the marketing site brands a third-party mono under a first-party-sounding name.
- **writer → iA Writer Quattro S** (Regular/Italic/Bold/BoldItalic, `iAWriterQuattroS_*.woff2`) — declared in the bundle but its `.font-writer` utility class was not observed applied on any of the pages actually crawled (home, pricing, blog post, AI, docs, changelog, brand, jobs, about). Likely reserved for a reading-mode or playground component not surfaced in this crawl — flagged as **not fully determined**.

A custom fluid type scale (`.h0`–`.h6`) drives all headings via `clamp()`, each with its own tunable `font-weight` CSS variable — most default to a deliberate **fractional weight of 340** (between Light 300 and Regular 400), only possible because the serif is a variable font:

- `h0`: `clamp(2.6rem, 2rem + 2.5vw, 3rem)` (≈42–48px), weight 340, tracking `-0.02em`, line-height 1.2 — the homepage tagline size. Notably modest, not an oversized "hero display" size.
- `h1`: `clamp(1.7rem, 1.5rem + 1.85vw, 2rem)`, weight 340
- `h2`–`h6` step down similarly, `h2`+ default to weight 400.

The homepage's core tagline (`h0`) is additionally set **italic** and colored in the brand accent blue — the only italicized headline observed across the pages crawled, making it a deliberate one-off emphasis rather than a running style. Pricing-tier dollar figures reuse the exact same `font-plex-serif text-accent-blue` treatment as the hero headline, tying the brand's typographic signature to price display, not just the hero.

Icons throughout are **Lucide** (svg classes `lucide-download`, `lucide-github`, etc.) — an open-source icon set, not a bespoke icon system.

## Color

Base palette is **Tailwind v4's default scale** (gray/blue/red/amber/etc., each defined twice — a hex fallback plus a `lab()`/`color-mix(in oklch, …)` progressive-enhancement pair) layered with two **custom brand scales**:

- `--cream` (base `#7f7866`, scale from `cream-50 #f5f4f3` to `cream-900 #38352d`) — a warm neutral used as a subtle atmospheric wash (e.g. pricing page body: `bg-cream-100/20` over the base, at low opacity, not flat).
- `--offgray` (base `#727a89`, scale `offgray-50 #e3e4e7`…`offgray-900`) — the primary neutral used for body text/borders instead of pure Tailwind gray.
- `--color-accent-blue: #1348dc` — the single flat brand color, confirmed against `/brand`'s published brand-kit hex (the brand page publishes exactly one hex: Brand Blue `#1348DC`). Radius tokens are stock Tailwind v4 defaults (`--radius-sm .25rem` … `--radius-2xl 1rem`), not a custom scale.

**Correction to prior scout notes:** the site is **light by default**, not dark. Server-rendered `<html lang="en">` carries no `dark` class, and the base surface is `bg-white`/`bg-cream-100` wash with low-opacity blue gradient bleed (`from-blue-100/10`), not a dark canvas. A full parallel dark theme does exist and is wired throughout (178 distinct `dark:` utility instances found on the homepage alone, e.g. `dark:bg-[hsl(219,92%,2%)]` — a near-black navy, not pure black), applied via Tailwind's class strategy (presumably client-toggled by system preference/`next-themes`), but it is not the page's default/static state. The earlier note describing "dark bg with occasional blue accent" has it backwards: the accent blue is not occasional, it IS the headline color.

## Layout

Standard container-based marketing layout (Next.js/Tailwind), no bento grid. Hero content is bracketed by a recurring **decorative corner motif**: small `rotate-45` bordered diamond squares pinned at `--node-horizontal-offset`/`--node-vertical-offset` around key panels (seen identically on both the homepage hero and the `/ai` hero) — a subtle geometric "frame" device rather than a card border. Below the fold: three-column feature triad → testimonial row → six-item video-poster feature showcase grid → extensions marketplace strip → additional-features list → footer. The `/ai` page repeats the pattern with a 2×2 feature-card grid, testimonial carousel, an "Agent metrics" strip, and a live "Recently Shipped" activity feed. Docs use a conventional three-part shell (left sidebar nav with 15+ top-level categories, center content, search-first header with a keyboard-shortcut hint `S`). Pricing is three flat tier cards (no comparison-table grid) plus an FAQ accordion — Zed explicitly chose narrative FAQ over a feature matrix to explain the Pro/Business boundary.

## Motion

All motion is **pure CSS** — no Framer Motion, GSAP, Lenis, or Lottie found anywhere in the homepage's served HTML or its JS chunk references (checked directly). ~24 custom `@keyframes` are compiled into the site bundle, applied via Tailwind `animate-*` utilities:

- `hero-rise` / `hero-drop`: staggered entrance for hero text — `opacity:0, translateY(14px), scale(.99)` → resting state, `cubic-bezier(0.16,1,0.3,1)` easing ("expo-out"), durations 1.2–1.6s with a 1.4s delay on the drop variant, producing a soft staggered reveal on load.
- `commit-fill` + `sweep-tick`: powers the live commit/activity-feed dots — each dot cycles through a `--sweep-cycle` (default 14s) from outline to a filled `--color-green-500`, with a scale pulse (1 → 1.15 → 1.3 settle). This is a genuine **CSS-driven "radar sweep"** rendering of live repo activity, not a video or GIF.
- `marquee-scroll` (infinite `translateX(-50%)` loop), `shimmer`, `loading`, `progressIncrease`, plus standard dialog/scale-in/out and fade variants for overlays.

This all-CSS approach (zero JS animation runtime) is directly consistent with Zed's own performance-first brand claim ("written from scratch in Rust… native speed") — the marketing site's engineering matches its pitch.

## Hero Anatomy

- **Headline** (`h0`, italic, IBM Plex Serif, brand blue `#1348dc`, centered): _"Your last next editor"_
- **Subhead** (plain sans, tracking-tight, centered, `max-w-lg`): _"Zed is a minimal code editor crafted for speed and collaboration with humans and AI."_
- **Availability line**: _"Available for macOS, Linux, and Windows"_
- **Dual CTA row**: primary **"Download now"** button (Lucide download icon, links `/download`, and — distinctively — renders a `<kbd>D</kbd>` keyboard-shortcut hint right inside the button, echoing the product's own command-palette-driven UX into its marketing chrome) + secondary **"Clone source"** button (Lucide GitHub icon, opens `github.com/zed-industries/zed` in a new tab).
- Background: light, cream/blue-tinted low-opacity gradient wash, bracketed by the rotate-45 diamond corner ornaments described above. No hero image, no video, no gradient-orb spectacle.
- Below the fold immediately: the three-column feature triad (Fast / Agentic / Collaborative), each a one-line, concrete technical claim rather than a benefit euphemism (e.g. _"Written from scratch in Rust to efficiently leverage multiple CPU cores and your GPU."_).

## Components of Note

- **Live commit/activity feed** — real repo activity (branch names, commit messages, diff stats like `+23−2`) rendered with the CSS radar-sweep animation above; a functioning data feed standing in for a decorative hero graphic.
- **Extension marketplace strip** — top extensions shown with live download counts pulled from real data in the page payload (values observed ranging from ~1.09M to ~9.8M across entries; earlier pass surfaced HTML ≈5.9M, Git Firefly ≈1.4M, TOML ≈1.2M) plus creator attribution — ecosystem scale used as social proof.
- **Testimonial row** — five attributed quotes with a wide (`viewBox 0 0 1088 239`) monochrome company/person wordmark rendered in `currentColor` (so it re-themes with light/dark automatically) beside each; includes José Valim (creator of Elixir): _"Ever since snippets were added, Zed has all of the features I could ask for in an editor."_
- **Pricing FAQ accordion** — used instead of a feature-comparison table to explain plan boundaries; direct, specific answers (e.g. _"Zed Pro bills at API list price +10% for hosted usage."_).
- **Release-notes page** (`/releases/stable`) — versioned changelog with a Stable/Preview channel switch, per-OS download links, and changelog entries categorized by area (AI, Git, Languages, Terminal, Vim/Helix, Collaboration, Other), each item linked to its GitHub PR and contributor handle.
- **Docs search** — header search box with visible keyboard-shortcut affordance (`S`), 15+ top-level category sidebar, includes competitor migration guides (VS Code, IntelliJ, etc.).
- **Brand/press kit page** (`/brand`) — publishes exactly one hex (`#1348DC`), four logo color combinations (black, white, blue+black, blue+white), and explicit trademark-use restrictions (no merch without written consent).

## Voice & Copy

Confident, technical, unhyped — the voice earns claims through specificity rather than adjectives. The `/about` ("Our Vision") page grounds authority in shipping history rather than aspiration: _"Zed isn't our first editor. It's the culmination of more than a decade of experience building tools for developers"_ (the team shipped Atom, Electron, and Tree-sitter). Four stated design principles are terse and almost credo-like: _"When you move the cursor or type a character, you should see pixels on the next refresh,"_ and _"Your editor should disappear."_ The careers page opens with a similarly plain, credibility-through-proximity line: _"Zed is a company for developers, by developers."_ Feature copy favors concrete engineering claims over marketing euphemism ("Written from scratch in Rust," "editable unified diff," "Agent Client Protocol") over vaguer "seamless AI power" language.

## Distinctive Moves

1. **Italic serif accent blue as the entire brand signature, on a light canvas** — not a bold sans display headline (as prior notes assumed), but a single italicized IBM Plex Serif line in one flat accent hex, reused identically for pricing-figure typography. A quiet, literary move for a performance-obsessed dev tool.
2. **The hero's primary CTA carries a live keyboard-shortcut hint** (`<kbd>D</kbd>` inside the "Download now" button) — marketing chrome that borrows directly from the product's own command-palette affordance, a small but genuine "form matches function" detail.
3. **A live, CSS-only "radar sweep" commit-activity visualization** (no video/GIF, no JS animation library) stands in for a decorative hero graphic — the site's own performance claim ("native speed," Rust-built) is demonstrated by its own build choices (zero motion-library dependency, ~24 keyframes doing all the work).

## Buzz Evidence

- GitHub: **86,413 stars / 9,350 forks** on `zed-industries/zed` (fetched live, 2026-07-03) [P, github.com API, live].
- Testimonial roster includes José Valim (creator of Elixir) and named "Principal Engineer" quotes — technical-credibility social proof rather than logo-wall enterprise proof.
- `/about` references Seed and Series A/B investor rounds via investor logos; exact firms/amounts were **not verified** on the pages crawled (not determined — would need a funding-specific source to confirm).
- Cited in this survey's own crawlset as an exemplar of "text-first minimal restraint" (signal 7.9) — one of the highest-signal entries in the July 2026 sweep for that axis.

## What Astryx Should Take

- **A live, functional data feed can replace a decorative hero image entirely** — Astryx's own marketing site could show something similarly real (e.g., a live feed of recent component releases/changelog commits, StyleX capability additions) rendered with pure CSS keyframes, no JS animation dependency, matching the "performance system, not just decoration" positioning a design system wants to project.
- **Reuse one accent typographic treatment (font + color) across both the hero headline and any numeric/price display** — a small, cheap consistency device (Zed does this with `font-plex-serif text-accent-blue` on both the tagline and pricing figures) that reads as "designed as one system," directly relevant to Astryx positioning itself as a coherent token system rather than a component grab-bag.
- **Default light, ship dark as a first-class parallel theme, not the other way round** — Zed's actual implementation (light SSR default + full `dark:` variant coverage toggled by system/class) is a concrete, testable pattern for how Astryx's own docs/marketing site should implement its light/dark ThemeProvider story: verify the "default" story matches what's actually server-rendered, since a docs site auditing itself should not let a scout-note assumption ("dark by default") go unverified — always check the raw served HTML class on `<html>`, not just a vibe impression.
- **Put a keyboard-shortcut hint directly inside a marketing CTA button** — a low-cost, high-signal way for a keyboard-driven product (which many of Astryx's own consumer apps likely are) to prove its own affordances in the chrome that sells it, rather than only inside the product itself.
- **A pricing FAQ accordion, not a feature-comparison grid, for a two-tier(+) boundary** — worth offering as an alternate pricing-page template pattern in Astryx's page-template library, alongside the more common N-column tier grid.

## Pages Read

- https://zed.dev/ (home; also fetched raw HTML + linked CSS/JS chunks for font/color/motion evidence)
- https://zed.dev/llms.txt (returned a summarized overview, not confirmed to be the raw llms.txt file; its stated Pro pricing figure conflicted with the live `/pricing` page and was treated as unverified/stale in favor of the live page)
- https://zed.dev/pricing (also fetched raw HTML for exact tier copy/pricing figures)
- https://zed.dev/blog (index)
- https://zed.dev/blog/hidden-gems-part-4 (raw HTML, checked for `font-writer` usage)
- https://zed.dev/about ("Our Vision")
- https://zed.dev/jobs (careers; note: `/careers` 404s, correct path is `/jobs`)
- https://zed.dev/ai (raw HTML, checked theme/background classes)
- https://zed.dev/docs
- https://zed.dev/releases/stable (changelog)
- https://zed.dev/brand (brand/press kit)
- https://api.github.com/repos/zed-industries/zed (stars/forks/license, for buzz evidence)
