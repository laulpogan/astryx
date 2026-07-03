---
name: v0.app (formerly v0.dev)
url: https://v0.app/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

v0 is Vercel's AI app builder — describe an app in natural language, v0 generates a working full-stack React/Next.js implementation, lets you iterate visually ("Design Mode"), sync it to a GitHub repo, and deploy straight to Vercel. It rebranded from **v0.dev to v0.app** in 2026 (confirmed live: `v0.dev` now 307-redirects to `v0.app`). The most structurally unusual move on the site: the root domain **is the product**, not a marketing splash page in front of it — `https://v0.app/` serves the actual chat/creation interface (confirmed via response header `x-matched-path: /v0pprvariant-0-0-en-/[scope]/chat/id`), with marketing sections (templates, integrations, pricing teasers) woven directly beneath the live prompt box rather than gating it behind a separate landing page.

## Typography

- **UI chrome font:** Geist Sans (`--font-geist-sans`, class `GeistSans`/`GeistSans Fallback`) and Geist Mono (`--font-geist-mono`, `GeistMono`) — Vercel's own in-house typeface family, loaded as variable woff2 (`Geist_Variable-s...woff2`, `GeistMono_Variable...woff2`), preloaded in `<head>`. This is the same family documented in the crawlset's Vercel Geist entry.
- **Math rendering:** full KaTeX font set present (`KaTeX_Main`, `KaTeX_AMS`, `KaTeX_Caligraphic`, `KaTeX_Fraktur`, `KaTeX_Script`, `KaTeX_SansSerif`, `KaTeX_Size1-4`, `KaTeX_Typewriter`) — the chat surface can render LaTeX/formulas.
- **Product-facing "starter theme" fonts:** the CSS bundle also ships `Lora` (serif), `Lora Fallback`, `Space Grotesk`, `Space Mono`, `Roboto Mono` as selectable `--font-*` custom properties (`--font-lora`, `--font-space-grotesk`). These are **not** used in v0's own marketing chrome — they're font options inside the "Create Design Systems" starter-theme picker that ships with generated apps, evidence v0 treats typography as a swappable per-project token, exactly like Astryx's own theme model.
- No display/editorial serif on the marketing surface itself — headline type is set in Geist Sans at large size, weight-normal to weight-medium, not an oversized display face.

## Color

Confirmed via the live CSS (`.light{...}` / `.dark{...}` blocks) — this is a **textbook shadcn/ui default ("zinc") HSL token set**, not a bespoke brand palette:

```
.light{--background:0 0% 100%; --foreground:240 10% 15%; --primary:240 5.9% 10%;
        --primary-foreground:0 0% 98%; --border:240 5.9% 90%; --ring:240 5% 64.9%;
        --radius:.5rem; --destructive:0 84.2% 60.2%; --warning:35,100%,52%; ...}

.dark {--background:240 3% 6%;  --foreground:0 0% 98%;  --primary:0 0% 98%;
        --primary-foreground:240 5.9% 10%; --border:240 3.7% 15.9%;
        --chart-1:220 70% 50%; --chart-2:160 60% 45%; --chart-3:30 80% 55%;
        --chart-4:280 65% 60%; --chart-5:340 75% 55%; ...}
```

- **No signature brand accent color** — primary interactive elements are pure grayscale (black-on-white in light, white-on-near-black in dark), matching the Vercel/Cursor "restraint" family already in the crawlset.
- Per-integration-partner brand tints exist as dedicated tokens: `--starter-deepinfra`, `--starter-fal`, `--starter-groq`, `--starter-neon`, `--starter-supabase`, `--starter-upstash` — each a distinct hue used to tint that partner's card in the integrations section.
- Bundle also carries a very large OKLCH palette (dozens of hues at varying lightness/chroma, e.g. `oklch(57.3% .2146 258.2)`, `oklch(52.6% .1712 24.8)`) — this reads as Tailwind v4's full default extended color ramp shipped for user-generated-app theming, not a curated v0 brand set.
- **Adaptive favicon:** separate `<link rel="icon">` tags gated on `media="(prefers-color-scheme: light)"` vs `dark`, each pointing to a different icon asset — a cheap, easily-copied detail.

## Layout

- Root URL doubles as the app shell: top nav (Templates · Resources · Enterprise · Pricing · iOS · Students · FAQ, Sign In/Sign Up right-aligned) sits directly above the prompt-box hero — no separate marketing home before the tool.
- Below the hero, content runs as a vertical stack of full-width feature sections (confirmed by matching asset folders: `homepage/design-mode/*.svg` ×4, `homepage/integrations/icon-0{1..12}.png`, `homepage/templates/row0{1..4}.png`, `homepage/themes/theme0{1..6}.svg`, `homepage/ios/*.png`, `homepage/videos/*-poster.jpg`):
  1. Hero: prompt box + 4 quick-start chips (Contact Form / Image Editor / Mini Game / Finance Calculator)
  2. "Prompt. Build. Publish." + "Sync with a repo" / "Integrate with apps" copy over a 12-icon integration marquee
  3. "Deploy to Vercel" — one-click production deploy copy
  4. "Edit with Design Mode" — 4 preview frames of the click-to-style visual editor
  5. "Start with Templates" — 4 horizontal template-thumbnail rows
  6. "Create Design Systems" — 6 starter-theme swatches
  7. "Agentic by Default" — short copy on planning/task/DB/deploy workflow
  8. "Create from Your Phone" — iOS app mockup
  9. A large community template gallery (masonry/grid, effectively unbounded scroll)
  10. Standard Vercel-style 4-column footer (Product / Company / Resources / Social)
- Pricing page: vertical stack of 4 tier cards (Free / Team / Business / Enterprise) rather than a single fixed-height 3-column comparison grid, followed by a separate per-model token-rate table (v0 Mini through v0 Max Fast, $1–$10 per 1M input tokens).
- Docs: classic 3-pane shell — left nav grouped by task (Getting Started → Prompt → Iterate → Integrate → Ship → Manage → Guides → Compare), center prose, right "on this page" anchor rail; `⌘K` search with an "Ask AI" mode.

## Motion

- **66 distinct `@keyframes`** confirmed directly in the shipped CSS bundle (not an estimate — counted via `grep -c`), the large majority scoped to individual feature-demo components via CSS-modules hashed names, e.g.:
  - `diagnostics-v1-module__scan-line` / `scan-gradient` / `scan-clip` — an animated "code review scanning" effect
  - `coding-v1-module__buildBox` / `codingScroll` — a live-look code-being-written animation
  - `search-web-v1-module__scrollUp` / `blink` — simulated web-search-in-progress
  - `trace-viewer-module__span-skeleton` / `zoom-buttons-fade-in` — a debug trace-viewer demo
  - `activity-graph-module__spin3d`, `ring-logo-loader-module__pulse`, `gauge-module__fadeIn`
  - five independent shimmer implementations (`shimmer`, `shimmer-bg`, `shimmer-text`, `shimmer-children-module`, `shimmer-module`) for loading states
  - `typing-text-module__typing` / `blinker` — a typewriter effect (likely the rotating prompt placeholder)
  - `logos-section-module__marquee` — the integration-icon scroll
  - `redeem-code-modal-module__jiggle` — a promo-code nudge
- `framer-motion` is also referenced in the shipped bundle (string literal confirmed in page source), so the site runs a **hybrid stack**: Framer Motion for page/gesture-level transitions, layered over dozens of hand-authored pure-CSS keyframe animations for the low-level in-product micro-demos.
- Net effect: almost every homepage section is a small _live simulation_ of the product actually working (typing, scanning, searching) rather than a screenshot or a rendered video loop — closer to the Rive/Motion.dev "the homepage is a running demo of itself" pattern than to a typical marketing hero animation.

## Hero Anatomy

- No headline in the traditional H1-sentence sense. The interactive element itself is the hero: a large text-input area labeled **"What do you want to create?"**, with a model selector inline (`v0 Max`, "Maximum context limit reached") and a file-drop affordance ("Drop files here to add as attachments").
- Four quick-start suggestion chips sit directly below the box: Contact Form, Image Editor, Mini Game, Finance Calculator — concrete, low-effort example prompts rather than abstract "get started" copy.
- Confirmed page `<title>`: "v0 by Vercel - Build Full-Stack Web Apps with AI"; `og:description`/meta description: "Your collaborative AI assistant to design, iterate, and scale full-stack applications for the web."
- Background: plain white (light mode) / near-black `240 3% 6%` (dark mode) — no gradient, no hero image, no illustration. All visual interest below the fold comes from the feature-demo micro-animations, not the hero itself.

## Components of Note

- **Prompt-box-as-hero input** — multimodal (text + file attach + repo sync + model picker) input styled as the page's primary heading.
- **Integration marquee** — 12 partner icons in an infinite CSS marquee (`logos-section-module__marquee`), each partner also gets a dedicated brand-tint CSS variable (`--starter-supabase`, `--starter-neon`, etc.) rather than a flat gray logo treatment.
- **6-swatch "Design Systems" theme picker preview** — homepage teaser for starter themes users can apply to generated apps (fonts: Lora, Space Grotesk, Roboto Mono, Space Mono among the options).
- **Community template gallery** — card grid with creator handle (`@estebansuarez`), title, live view count (e.g. "6.1K") and like count (e.g. "685"); 13 category tabs including _Design Systems_, _Agents_, _Login & Sign Up_, _Animations_ — functions simultaneously as social proof and an acquisition funnel (remix-a-template).
- **Design Mode** (documented at `/docs/design-mode`): click any live-preview element, tweak via a visual panel or natural-language instruction, edits write back to source. Explicitly **detects existing Tailwind CSS config and surfaces Tailwind-compatible values** rather than emitting arbitrary inline styles — confirmed quote: _"Design mode detects when your app is using Tailwind CSS and will surface Tailwind-compatible values where appropriate."_
- **Pricing page**: 4 tier cards (Free $0 / Team ~$30 per user per month, marked popular / Business $100 per user per month / Enterprise custom) plus a separate model-rate table (v0 Mini to v0 Max Fast, $1–$10 per 1M input tokens, with distinct cache/output rates).
- **Adaptive favicon** via `prefers-color-scheme`-scoped `<link rel="icon">` pair.

## Voice & Copy

Terse, declarative, three-beat product taglines ("Prompt. Build. Publish.") rather than adjective-heavy hype copy. Feature labels are plain-language verbs ("Deploy to Vercel," "Sync with a repo," "Integrate with apps," "Create from Your Phone") — no metaphor, no "supercharge/unlock/revolutionize." Even the agentic-architecture pitch ("Agentic by Default") is understated relative to what's actually a plan → task → DB → API → deploy pipeline. Docs voice is direct and mechanical, describing exactly what a feature detects and does (the Design Mode Tailwind-detection line above is representative) rather than selling a benefit.

## Distinctive Moves

1. **The homepage IS the product, full stop.** No marketing gate in front of the tool — the prompt box at `v0.app/` is the literal, live creation surface (confirmed by the `x-matched-path` routing to the chat interface at root), with marketing sections stacked directly beneath it. Most AI-builder competitors (bolt.new, Lovable) keep a chat-prompt-styled hero but still route "Sign up" before the real tool loads.
2. **Every feature section performs itself instead of describing itself.** 66+ scoped CSS keyframe animations recreate the actual product experience in miniature — code appearing to type itself, a "scan line" sweeping over a diagnostics panel, a fake web search scrolling past — so the page demonstrates capability through simulated live behavior rather than screenshots, video, or copy.
3. **Design Mode's token-awareness is a structural idea, not a cosmetic one:** the AI-driven visual editor explicitly checks for and constrains itself to the project's existing Tailwind config before writing style edits back to source — an AI editing surface that respects the design-token contract rather than freelancing arbitrary values.

## Buzz Evidence

- Confirmed rebrand: `v0.dev` returns `HTTP/2 307` redirecting to `https://v0.app/` (verified live, 2026-07-03).
- Cited in this survey's own crawlset as a recurring reference point in 2026 "AI startup homepage" trend write-ups (prompt-box-as-hero pattern), and separately flagged (studiomeyer.io retrospective) as one of the sites cited for "anti-grid" homepage handling.
- No independently verified award, funding figure, or PH/HN ranking specific to v0 itself was found in this crawl — Vercel's broader funding/valuation is a distinct data point not re-verified here. Treat any such number as **not determined** until sourced directly.
- `/llms.txt` does **not** exist as an actual machine-readable file — it returns HTTP 200 but serves the same SPA HTML shell as every other route (confirmed via `curl`), unlike sibling entries in this survey (HeroUI, Cursor, Ploy, Mistral) that ship a real one.

## What Astryx Should Take

1. **Make the homepage a live instance of the system, not a screenshot of it.** v0's "every section simulates itself" pattern (and Rive/Motion.dev's identical move elsewhere in this survey) argues for Astryx's own marketing/docs home to lead with a real, interactive component or theme-switcher running live — not a static hero graphic — since the product being sold (a design system) is uniquely suited to prove itself this way.
2. **Ship a "Built with Astryx" gallery**, card-tagged by category (dashboards, forms, marketing pages) with creator attribution — v0's community grid (13 filter tabs, live view/like counts) is a directly reusable structural template for turning real usage into trust-proof at a scale a handful of client logos can't match.
3. **Copy the concrete mechanism, not just the vibe, from Design Mode:** any AI-assisted editing surface Astryx documents or builds for AGENTS.md-driven agents should detect and constrain edits to the existing xstyle/token system the way Design Mode detects and surfaces Tailwind-compatible values — a real, checkable behavior worth stating explicitly in Astryx's own agent-facing docs, not an aspiration.
4. **The shadcn-style paired-token contract is now a de facto standard worth aligning language to.** v0's own app runs the identical `--background`/`--foreground`/`--primary` (+ `-foreground` pairs) HSL token set as shadcn/ui's default theme, with one `--radius` cascading via `calc()` into `sm/md/lg/xl`. Astryx's own StyleX token/theme docs should explicitly name this convention (Astryx already does something structurally similar) so readers coming from shadcn/v0/Radix recognize the mapping immediately.
5. **Adopt the light/dark adaptive-favicon trick** — trivial to implement (`<link rel="icon" media="(prefers-color-scheme: dark)">` pair), directly reusable on the Astryx marketing site.
6. **Beat the gap:** v0 has no functioning `/llms.txt`. Astryx already leans on `AGENTS.md`; shipping a real `llms.txt` alongside it is a cheap, verifiable differentiator against a site this well-known that doesn't have one.

## Pages Read

- https://v0.app/ (WebFetch rendered summary + raw HTML/CSS fetched directly via curl, including 4 linked CSS chunk bundles)
- https://v0.app/pricing (WebFetch + raw HTML via curl)
- https://v0.app/llms.txt (curl — confirmed to NOT be a real llms.txt; 200 status but serves the SPA shell)
- https://v0.app/docs (WebFetch)
- https://v0.app/docs/design-mode (WebFetch)
- https://v0.app/community (WebFetch)
- https://v0.dev/ (curl — confirms 307 redirect to v0.app, rebrand evidence)
