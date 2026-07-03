---
name: Performative-UI
url: https://vorpus.github.io/performativeUI/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Performative-UI is a **real, installable, MIT-licensed React component library** (`npm install performative-ui`, TypeScript strict, React 19+, ~30KB bundled) that ships 33 fully-functional components — each one a deadpan-accurate parody of a specific 2026 AI-startup landing-page cliché (aurora gradient backgrounds, sparkle CTAs, fake token-streaming chat, glowing "Most Popular" pricing cards, waitlist forms, logo marquees). It is backed by an actual research corpus in the repo (`research/05_aiified_ui_elements.md`) that documents ~15 pattern categories against named real companies, which is what elevates it from meme-site to an evidenced field guide. The scout note's "27 components" is **stale**: the live site's own badge reads "33 components," and the growth from the 27 cited at HN launch (~June 9, 2026) to 33 by this crawl date is itself a signal of organic post-launch contribution.

## Typography

Verified via computed styles on the live site (`getComputedStyle`, CSS custom properties on `:root`):

- **Body/UI/display face: Inter** — `--pui-font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif`. Used for the nav, all H1 component names (700 weight, ~44px), body prose, buttons, and code labels.
- **Accent serif: "Instrument Serif"** — `--pui-font-serif: "Instrument Serif", ui-serif, Georgia, serif`. Used exclusively for each component's one-line joke tagline directly under its H1 (e.g. _"For hackers, by people who follow the right newsletters."_), rendered in italics. This is the exact bold-grotesk-headline + italic-serif-subhead pairing the crawlset separately flags as "the Claude aesthetic" (Claude.ai entry, off-white/italic-serif/terracotta) — notable because the satire borrows the same device it elsewhere mocks (GradientText: _"When italic isn't billion-dollar enough"_).
- **Monospace**: system mono stack, used for every JSX code snippet (`<AsciiHero />`, `<PricingCard featured />`, etc.), each in a bordered card with a top-right "copy" button — the shadcn/Radix/HeroUI-style copy-pasteable-snippet convention, applied to jokes.
- Component doc pages follow a strict typographic hierarchy: eyebrow category label (small caps, gray) → H1 name (Inter 700) → italic-serif tagline → hairline rule → body description (backticked prop names inline) → "EXAMPLES" eyebrow → labeled demo cards → "PROPS" table.

## Color

Verified via CSS custom properties (`--pui-*`) read from the live page:

- **Background**: `--pui-bg` = `#08080b` / `rgb(8,8,11)` (near-black, not pure `#000`). Elevated surface `--pui-bg-elev: #0e0e13`; soft/card surface `--pui-bg-soft: #14141c`.
- **Foreground**: `--pui-fg: #f4f4f6`.
- **Borders**: `--pui-border: #1f1f2b`, brighter state `--pui-border-bright: #2a2a3a`.
- **Signature glow accent — violet→pink**: `--pui-glow-strong: 0 0 48px rgba(124,58,237,.55), 0 0 96px rgba(236,72,153,.25)` — violet (~`#7c3aed`) to pink (~`#ec4899`). This exact pair drives the Sparkle glyph, the PromptHero "Generate ✦" button glow, the PricingCard "Most Popular" ribbon, and GradientText's default gradient (verified visually: "Built for **velocity**" renders white→magenta).
- **Aurora background** (the component literally named after the cliché): default example is explicitly labeled "Default purple/pink/cyan" — drifting radial-gradient blobs behind a full-bleed hero panel, confirming the crawlset's "aurora gradient field" claim for this genre.
- **Semantic success green**: `--pui-success: #22c55e` (used for pricing-card checkmarks).
- Net effect: dark-mode-default canvas + violet/pink/cyan gradient accent trio — precisely the palette the site's own research doc names as the industry default (see Distinctive Moves). A light/dark theme toggle (sun/moon icon) exists in the sidebar header and is a genuine functioning switch, not decorative.

## Layout

Single-page app (hash-routed, `#/components/<slug>`) with a **fixed left sidebar** grouped into 11 semantic category headers, not alphabetical: Heroes, Menus, Social Proof, Atoms, Primitives, Banners, Backgrounds, Surfaces, Conversation, Pricing & Conversion, Footers. Clicking any of the 33 items loads a per-component doc page in the right pane with a fixed shape: H1 name → italic tagline → hairline rule → prose description → "EXAMPLES" (one or more labeled, bordered demo panels, each with a live render + copy-buttoned JSX snippet) → "PROPS" table (Prop / Type / Default / Description columns). This is functionally identical to the shadcn/Radix Themes/HeroUI documentation shell already cited elsewhere in the crawlset, reused here as the delivery vehicle for satire rather than a real design system.

## Motion

- **AsciiHero**: canvas-rendered, cursor-reactive procedural ASCII field (verified live: the glyph density visibly distorts near the mouse). Two visual modes — `panel` (bordered card, default) and `bare` (no chrome, for background use) — plus a `colorful` flag that recolors the ASCII characters in the aurora palette (cyan/pink/yellow/green observed) and a `spotlightOpacity` prop to brighten the area under the cursor.
- **Aurora**: CSS-only drifting/animated radial-gradient blobs (no WebGL), sits absolutely inside a `position: relative` parent — explicitly positioned as a hero backdrop.
- **TokenStream**: token-by-token text reveal with a trailing blinking caret, self-mockingly documented as fake: _"Server-sent events (SSE) were added to the HTML5 spec in 2008 but never used until 2025... Bring your own tokenizer."_ — i.e. the component performs streaming without a real model behind it.
- **GradientText**: animates a hue-shift by default; a `static` prop freezes it (the docs even note _"Set `static` to keep it gradient-colored but stop the shift animation"_).
- **Sparkle**: "defaults to a twinkling gradient glyph"; `solid` removes the gradient, `static` stops the twinkle.
- **StatCounter**: animates a number from `from` (default 0) to `target` over `durationMs`; also exposes a headless `useCounter()` hook.
- The homepage hero itself appears to dogfood one of the library's own rotating-text heroes — the resolved DOM text reads "AI-native React components for AI startups," while an independent search-engine snapshot captured a different in-flight frame reading "...for frontier labs," consistent with a Rotator/WordRoll cycling through target-audience phrases live on its own marketing page.

## Hero Anatomy

Top-of-page stack, verified via live screenshot: (1) a full-width pill announcement bar — _"✦ Now generally available"_; (2) a status pill — _"● 33 components · MIT licensed"_; (3) a two-line oversized headline, "AI-native React components for **AI**" with the final word/phrase rendered via GradientText (white→violet/pink); (4) plain gray one-line subcopy — _"Components that signal how oversubscribed your funding round is."_ — deliberately **not** italic-serif at this top level, reserved for per-component taglines only; (5) a monospace install command as the primary CTA — `$ npm install performative-ui` — instead of a button; (6) a live GitHub star-count badge (794 at crawl time) directly beneath it as social proof; (7) the whole block sits on a full-bleed Aurora gradient (purple→pink→cyan blobs) fading to black at the bottom. The install-command-as-hero-CTA move mirrors two other crawlset entries (opencode.ai, terminal.shop) independently flagged as a legitimate counter-cliché.

## Components of Note

- **Nav**: fixed left sidebar, 11 category groups, active-item violet-tinted highlight, sun/moon theme-toggle button top-right of the sidebar header.
- **Pricing table — `PricingCard`**: three-tier grid (Hobby $0/mo, Pro $49/mo with a pink→blue gradient "MOST POPULAR" ribbon + glow border via a `featured` prop, Enterprise "Custom"), each with green-checkmark feature lists (10K vs 1M tokens/day, VPC deploy, SOC 2/HIPAA). Tagline: _"The middle one is glowing. Choose accordingly."_
- **Logo wall**: two severities are named separately — `LogoMarquee` (_"Trusted by everyone you've heard of, including the ones that didn't sign"_) and static `LogoRow` (_"Static logos are for when you only have six"_).
- **Code blocks**: every demo panel ships a bordered, monospace, copy-buttoned JSX snippet directly beneath the live render — matches the copy-paste-first doc convention the crawlset also credits to shadcn/ui, Radix Themes, and HeroUI.
- **Conversation cluster**: `ChatBubble`, `TokenStream`, `WibblingSpinner` (_"If you haven't replaced yours with a banner ad yet"_), `ChatFAB` (_"There's no escape now"_).
- **Conversion cluster**: `WaitlistForm` (placeholder `you@startup.ai`, gradient pink→purple "Notify me" button, footnote _"We email when something actually ships."_), `Popover` (_"Built for conversion, not consent"_), `BeforeAfter`.
- **Footer — `BigBack`**: a wall-sized SVG wordmark that auto-fits the company-name width and bleeds off the bottom edge of the viewport, three link columns (Company / Developers / Resources) above it, joke copyright line _"All rights reserved, retroactively."_, X/GitHub/LinkedIn row. The demo's sample company is literally named "Synthetica." Tagline: _"We took SPA too literally and you forgot our company name while scrolling to the bottom."_

## Voice & Copy

Every one of the 33 components carries a one-line, dryly funny subhead that functions as design critique disguised as a marketing tagline — e.g. Rotator: _"Because saying 'everything' wasn't ambitious enough"_; StatusDot: _"Always green, even when it's not"_; QuestText: _"you never quit, you just took a break"_ (lowercase is intentional house style for that one component); GlassCard: _"Backdrop-filter: ambition."_ Prose descriptions underneath are technically precise — real prop names, real behavior, no exaggeration — wrapped in the same flat, deadpan register throughout. The voice reads as "a working engineer roasting his own industry from the inside," not meme-page silliness, which is part of why it landed on Hacker News rather than just circulating on social media.

## Distinctive Moves

1. **The critique IS a working deliverable.** This isn't a listicle of screenshots — it's a real npm package whose 33 components are individually accurate, installable parodies with full prop-table docs, and the site dogfoods its own catalog on its own homepage (the rotating hero headline, the install-as-CTA, the star-count badge, and the BigBack footer are all literal instances of the library's own components).
2. **A cited primary-source research corpus backs every joke.** `research/05_aiified_ui_elements.md` enumerates ~15 pattern categories (sparkle iconography, aurora gradients, glassmorphism, fake token-streaming, "Trusted by teams at OpenAI," round-number stat counters, credits-based opaque pricing, etc.) against named real companies cited 1–10+ times each: **Notion AI, Framer AI, Lovable, Cursor, Vercel v0, Linear Agents** (cited most heavily), then Mistral, Cohere, Together AI, Cognition/Devin, Bolt.new, Reflect, Granola, Hugging Face, and more lightly Anthropic, Perplexity, ElevenLabs, shadcn/ui. This turns "vibes-based satire" into an evidenced field guide — structurally the same move the crawlset's Anthropic frontend-design SKILL.md entry credits for steering LLMs away from generic output (a named banlist beats vague "be creative" instructions).
3. **Buzz disproportionate to a joke library.** Show HN ("Performative-UI – A react component library of design tropes," HN item 48445554) scored **1,181 points / 213 comments** — one of the highest-scoring Show HN threads of the period — plus international pickup (Gigazine, Japan, June 9 2026: _"the problem of all AI startup websites looking the same"_), 794 GitHub stars / 22 forks, a Hacktoberfest 2026 tag, and two independent community Svelte 5 ports. Component count grew organically from 27 (at HN launch) to 33 (at this crawl) — the backlash-to-AI-sameness meme is resonating broadly among builders, not a niche complaint.

## Buzz Evidence

- **Hacker News** — "Show HN: Performative-UI – A react component library of design tropes," item id 48445554, **1,181 points, 213 comments**, submitted ~June 9, 2026 by user "lizhang." Top comment threads: the "revealed preference paradox" (users say they hate these patterns but the patterns demonstrably work), design-as-legitimacy-signal, praise for the AsciiHero implementation quality specifically, and developers admitting they'd ship these components for real ("these will absolutely get your prototype greenlit").
- **Gigazine** (Japanese tech press), June 9, 2026 — covered it as addressing "the problem of all AI startup websites looking the same," framing the visual homogenization as a legitimacy-signaling side effect of investor-facing design.
- **GitHub**: 794 stars, 22 forks, MIT license, TypeScript 67.6% / CSS 30.7% / JS 1.7%, "Powered by Anthropic" / "Made with Codex" badges (an ironic wink — the anti-AI-slop satire is itself AI-assisted), Star History chart in the README, two community Svelte 5 ports noted with "comedic note about Svelte developer disagreements."
- **npm**: package page (`npmjs.com/package/performative-ui`) returned HTTP 403 to automated fetch — could not independently verify download counts; not determined.

## What Astryx Should Take

1. **Treat it as a literal do-not-ship checklist for Astryx's own marketing/docs site.** No Aurora-style drifting violet/pink/cyan gradient hero backdrop; no glow-bordered sparkle "Generate" CTA; no fake token-by-token streaming demo without a real model behind it; no round-number-flex `StatCounter` + logo-marquee combo; no unearned "Most Popular" glow-ribbon pricing tier. Astryx already leans dark-mode-neutral and typographic — this dossier is corroborating evidence to hold that line, not a new instruction.
2. **Adopt the documentation shell, not the jokes.** Category-grouped sidebar (not alphabetical) → per-component page (H1, one-line description, live labeled demo card(s), copy-buttoned JSX snippet, full Props table below) is functionally what Astryx's `{Name}.doc.mjs` + Storybook autodocs should render for every component. This is a template worth checking `apps/storybook`'s current autodocs layout against directly.
3. **The "named-offenders-as-evidence" move is directly reusable for Astryx's own AGENTS.md/CLAUDE.md guidance.** Pairing a "don't do X" rule with 3–5 concrete, named, real examples of X in the wild (as this repo's `research/05_aiified_ui_elements.md` does) is exactly the mechanism the crawlset's Anthropic-SKILL.md entry already validates as effective LLM steering. Astryx's `docs principles` output should cite live counter-examples the same way rather than stating abstract rules alone.
4. **Install-command-as-hero-CTA is a legitimate pattern for Astryx specifically** (unlike for a component-cliché library) because Astryx already ships a real CLI users run immediately (`$ASTRYX docs`, `$ASTRYX component`, etc.). A monospace one-liner under the headline, mirroring this site's own dogfooded hero and the opencode.ai/terminal.shop pattern noted elsewhere in the crawlset, is functional rather than decorative and should be considered for the Astryx marketing homepage.

## Pages Read

- https://vorpus.github.io/performativeUI/ (homepage, live-rendered)
- https://vorpus.github.io/performativeUI/#/components/ascii-hero
- https://vorpus.github.io/performativeUI/#/components/prompt-hero
- https://vorpus.github.io/performativeUI/#/components/aurora
- https://vorpus.github.io/performativeUI/#/components/gradient-text
- https://vorpus.github.io/performativeUI/#/components/token-stream
- https://vorpus.github.io/performativeUI/#/components/pricing-card
- https://vorpus.github.io/performativeUI/#/components/bigback
- https://vorpus.github.io/performativeUI/#/components/waitlist-form
- https://vorpus.github.io/performativeUI/#/components/sparkle
- https://vorpus.github.io/performativeUI/#/components/stat-counter
- https://github.com/vorpus/performativeUI
- https://raw.githubusercontent.com/vorpus/performativeUI/main/README.md
- https://raw.githubusercontent.com/vorpus/performativeUI/main/research/05_aiified_ui_elements.md
- https://news.ycombinator.com/item?id=48445554
- https://gigazine.net/gsc_news/en/20260609-performative-ui/
- https://www.npmjs.com/package/performative-ui (blocked, HTTP 403 — not read)
