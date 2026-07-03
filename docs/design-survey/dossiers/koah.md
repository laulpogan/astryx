---
name: Koah
url: https://www.koahlabs.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Koah is "the ad network built for AI" — an SPC-seeded, Theory Ventures-backed ($20.5M Series A, Feb 2026) ad-tech infrastructure company that lets AI apps/agents ("publishers": DeepAI, Liner, Particle, Viro) embed native, contextual ad units inside chat and agent conversations, matched to brands ("advertisers": Patagonia, Nike, Apple, Bitly, Hims, HubSpot, UrbanStems, Honeydew) via real-time first-party intent data at inference time. Built on Next.js/Vercel + Tailwind v4. It reads less like a typical dark-mode AI-infra site and more like a well-typeset editorial/fintech brand — cream paper, a custom grotesk+serif type pairing, and a fully named atmospheric color system — while still shipping unusually agent-native technical plumbing (content-negotiated markdown responses, a `.well-known/agent-skills` SKILL.md, an "AI-train: no" robots signal, and a hero CTA whose entire job is to hand a prompt to a coding agent).

## Typography

- **Type stack, confirmed via `--font-*` custom properties and font-face `@font-face`/preload declarations:**
  - `--font-heading` / `--font-sans`: **"STK Bureau Sans"** (a custom grotesk, self-hosted OTF, weights Book/Light/LightItalic/Medium) — used for _everything_: headlines, subheads, nav, buttons, body copy. There is effectively one text family doing double duty as both display and UI/body font.
  - `--font-serif`: **"STK Bureau Serif"** (Light + LightItalic OTF) — used sparingly and specifically for **italic accent words embedded mid-headline** (never for full paragraphs). Confirmed recurring at least 3 times: hero H1 "The ad network _built for AI_", section H2 "Monetize with _ads your users love_", and — in an unexpected, oversized reuse of the same motif — the 404 page's giant **"404"** is set in `font-serif italic` at 120px→180px. Stat captions ("queries matched per year") also render in serif italic, not sans, tying big numbers to the same accent voice.
  - `--font-mono`: **GeistMono** (variable woff2) — reserved for the all-caps "eyebrow" section labels, the footer copyright line, and the one real code snippet on `/monetize`.
- **Named semantic type-role utilities** (not raw Tailwind sizes) baked into the CSS: `.text-eyebrow` (GeistMono, `text-xs`, uppercase, `letter-spacing:.12em`, weight 300), `.text-lead` (heading font, `text-lg`, `-.02em` tracking, weight 300), `.text-body` (heading font, `text-base`, `-.02em` tracking, weight 300). This is a genuine type-role system, not ad hoc class stacking.
- **H1 scale:** `44px → 56px (md) → 69px (lg)`, `font-weight: 300` (light), `line-height: 1.05`, `letter-spacing: -0.04em`. H2 example: `32px → 58px`, weight ranges 200–300.
- **Big stat numbers** ("100M+" queries/year): `64px → 88px → 119px`, `font-weight: 200` (extralight), `tabular-nums`, `-0.04em` tracking.
- **Tracking discipline:** negative tracking (`-0.01em` to `-0.04em`) on all display/heading text; positive tracking (`.04em`–`.32em`) reserved exclusively for uppercase mono labels (eyebrows, footer copyright). A deliberate tight-display / wide-caps split.
- Weight discipline: 300 (light) is the default everywhere; 200 (extralight) only on the very largest display numerals; 500 (medium) reserved for buttons/nav links. No bold body text found anywhere on the marketing surfaces read.

## Color

Confirmed via `--color-*` custom properties in the compiled CSS (not guessed from screenshots). Two distinct palettes coexist:

**Marketing-site palette — an atmospheric/sky-weather naming system** (pairs conceptually with the mountain-photography imagery):
| Token | Hex | Use |
|---|---|---|
| `--color-cirrus` | `#FAF8F5` | page background (cream/parchment) |
| `--color-halo` | `#F3F0E9` | nav bar background |
| `--color-mist` | `#EBE8E0` | secondary surface |
| `--color-veil` | `#E1DCD1` | hairline borders |
| `--color-dust` | `#ABA49A` | muted text |
| `--color-ink` | `#131009` | near-black warm ink |
| `--color-gloam` | `#1C2A51` | primary heading/text color (a deep ink-navy, **not** pure black) |
| `--color-void` | `#060A18` | dark section background (e.g. "For AI platforms") |
| `--color-abyss` | `#021730` | darkest accent |
| `--color-flare` | `#F8D870` | primary CTA gold (hover → `#F2BE3A`, i.e. Tailwind `yellow-400`) |
| `--color-zenith` | `#3C9CFC` | link/accent blue on dark backgrounds |
| `--color-altitude` | `#92CCFC` | light blue, used for stat-block dividers |
| `--color-haze` | `#E8F2FC` | light-blue section background |
| `--color-solaris` | `#F09031` | orange accent |

One-off exception: a "See how it works" link uses a literal arbitrary hex `text-[#105DA8]` (a deeper ink-blue) rather than a named token — the one visible gap in an otherwise disciplined system.

**Product-widget palette — deliberately neutral and separate**, under `--color-koah-*`: `koah-primary #0D0D0D`, `koah-secondary #6B7280`, `koah-surface #FFF`, `koah-surface-muted #F9F9F9`, `koah-border #0D0D0D26`, `koah-choice-border #E8E8E8`, `koah-cta-hover #333`. These back the actual embeddable ad-widget component (radii `--radius-koah-shell:19px`, `koah-product:14px`, `koah-media/product-image:10px`, `koah-choice:12px`) and are boring/neutral on purpose — a widget embedded in someone else's AI product shouldn't fight the host's branding. **Design takeaway:** marketing-site brand color and embeddable-component color are intentionally two separate token layers.

(Also present, unexplained: a `qira-*` namespace — `--radius-qira-card:7px`, `--radius-qira-panel:11px`, `--tracking-qira-tight`. Likely a base UI kit/internal codename underneath the Koah skin — not determined what it is exactly.)

## Layout

- Content container: `max-w-[1440px]`, `px-6` / `px-12` gutters. Custom breakpoints alongside Tailwind v4's rem-based defaults (`40rem/48rem/64rem/80rem/96rem`) plus bespoke `min-width: 1120px / 1218px / 1440px` steps for fine hero-layout control.
- **Nav pattern:** not full-bleed — a floating, rounded-corner nav card (`rounded-lg border-veil bg-halo`, `max-w-[1344px]`, inset margins) sits just below a full-width dark dismissible announcement bar (`bg-void`) that announces the Series A. Logo left, links centered, dark "Login" pill + gold "Book a demo" pill right.
- **Stat row:** 3-column `<dl>` grid with vertical hairline dividers (`border-altitude sm:border-l`) — numerals in tabular-nums, labels in serif italic underneath.
- **Section-level palette shifts:** page alternates cream (`bg-cirrus`), light-blue (`bg-haze`), and dark-navy (`bg-void text-cirrus`) full-bleed sections rather than staying single-toned — each major claim gets its own background color, not just a divider rule.
- **/about** breaks from the product-demo home page into a fully editorial, photography-led layout: painterly illustration hero (blue/yellow houses at dusk), then alternating full-width landscape photography (desert running track, poolside golden hour) — a deliberate voice shift per page-type (home = product/data-driven, about = lifestyle/editorial).
- **/monetize, /advertise:** numbered step sections ("Install the SDK" → "Koah matches intent" → "Native format serves" → "Revenue generated") with a vertical fill-line connecting steps.

## Motion

All motion is pure CSS (`@keyframes` + `transition`/`filter`), Tailwind-v4-driven — no WebGL/Three.js/canvas/GSAP bundle evidence found. Confirmed keyframes from the compiled stylesheet:

- `page-enter` — `opacity 0→1` + `translateY(12px→0)`, 0.2s ease-out, wraps **every route** (`<div class="animate-page-enter">`) as a template-level transition.
- `fade-up` (`translateY(24px)`), `hero-device-enter` (`translateY(30px)`, 0.5s ease-out, 0.15s delay) — staggered entrance choreography for hero elements.
- `fetch-card-in` — `filter: blur(3px)→none` + `translate(28px) scale(.96) → scale(1)`, 0.42s `cubic-bezier(.23,1,.32,1)` — a blur-to-focus "card arriving" animation, thematically apt for a real-time ad-fetch product.
- `blur-reveal-word-in` / `koah-rh-word-in` — word-by-word `filter: blur(4px) → none` reveal with a `--stagger`/`--koah-stream-delay` custom property per word, i.e. a **sequential blur-focus text reveal** (not a translate or typewriter-cursor cliché) used on the rotating example chat questions in the hero demo.
- `step-panel-in` (blur reveal) + `step-line-fill` (`scaleY(0→1)`, linear) — the numbered "how it works" vertical progress line fills as each step activates.
- `logo-scroll` — infinite 25s linear horizontal marquee for the publisher logo strip.
- `samsungGalleryButtonLoad` — a bespoke `scaleX(0→1)` + opacity loading-bar animation built for one specific interactive demo widget (a Samsung-Gallery-style native ad unit), 1.45s `cubic-bezier(.23,1,.32,1)` infinite.
- `chevron-bounce` — small infinite bounce (2.6s, 1s delay) as a scroll-down affordance.
- **One signature easing curve throughout:** `cubic-bezier(.23,1,.32,1)` is reused on button hover (`scale-[1.02]`), active states (`scale-[0.97]`), and multiple keyframes — a consistent house "snap" rather than a generic ease.
- **Accessibility baked in:** nearly every animated utility has a paired `motion-reduce:` variant (`motion-reduce:hover:scale-100`, `motion-reduce:transition-none`) directly in the class list, not bolted on separately.

## Hero Anatomy

1. Full-width dark (`bg-void`) dismissible announcement bar: "$20.5M Series A led by Theory Ventures. **Read more →**".
2. Floating rounded nav card (see Layout) sits just beneath it, not flush to the viewport edge.
3. H1, two lines, cream background, no photo/gradient behind the text itself: **"The ad network _built for AI_"** — 44/56/69px, weight 300, `-0.04em` tracking, with the serif-italic accent phrase.
4. Subhead, one sentence: "AI-native ads powered by real-time intent matching, not borrowed from the last era." (20px→28px, weight 300).
5. **Dual CTA row** — this is the hero's most distinctive move: "**Book a demo**" (solid gold pill, calendar icon) sits next to "**Copy install prompt**" (dark pill, `aria-label="Copy the Koah setup prompt for AI coding agents"`, clipboard icon that swaps to a checkmark on click). The second CTA's entire purpose is to hand a ready-made prompt to Cursor/Claude Code/etc. — the buyer being addressed is explicitly an AI coding agent, not (only) a human reading docs.
6. Immediately below the CTA row: a rounded full-bleed card using `hero-mountains.webp` as its background, containing a **tabbed interactive demo widget** (`role="tablist"`, tabs including "AI Assistant" / "Coding agent" / "Traditional Web") that flips between a simulated chat UI with inline native ad placements (example Q&A: "What's your go-to running surface?", "What should I wear on my next trip?") and a plain "traditional web" comparison — a live before/after argument rather than a static screenshot.
7. Publisher-logo marquee further down (DeepAI, Liner, Particle, Viro, Inline) scrolling via `logo-scroll`.

## Components of Note

- **AI-agent install-prompt button** — a first-class hero CTA that copies an agent-ready setup prompt to the clipboard (icon swap clipboard→check), sitting equal-weight next to "Book a demo."
- **Content-negotiated markdown API** — every marketing page (verified on `/`) responds with `Content-Type: text/markdown` and a clean markdown rendering when requested with `Accept: text/markdown` (route: `/api/md/[...path]`, `Vary: Accept` header present). This is a live, working implementation of "give agents a native format," not a static `llms.txt` — and no `/llms.txt` file exists at all (404s), so it fully substitutes content negotiation for the more common static file.
- **`.well-known/agent-skills/index.json` + SKILL.md** — Koah publishes an actual [agentskills.io](https://agentskills.io) discovery manifest pointing to `koah-overview/SKILL.md`, a markdown file written _for LLM agents_ that explains what Koah is, where to fetch authoritative facts, how to install the SDK, how to cite the company — and explicitly instructs agents **not to use the site's content to train models**, citing its own `robots.txt` (`Content-Signal: search=yes, ai-input=yes, ai-train=no`).
- **Tabbed AI-vs-traditional-web comparison widget** in the hero (see above).
- **Real SDK code snippet on `/monetize`:** `await window.koah.requestAd({ target, context: { type: 'conversation', question, answer } })` — a live, copy-pasteable API call on the marketing page itself, not hidden in docs.
- **Numbered step + fill-line "how it works" section** (Install SDK → Koah matches intent → Native format serves → Revenue generated) with `step-line-fill` progress animation.
- **3-column stat block** with tabular-nums and serif-italic captions (100M+ queries matched/year; 3× higher payouts; 3% average CTR at scale).
- **404 page** reuses the brand's serif-italic motif at extreme scale (120px→180px "404") instead of a generic error illustration.

## Voice & Copy

Short, declarative, slightly combative sentences pitched at both publishers and advertisers: "**Show up in AI or get left behind.**" / "**Your AI app is missing native ads.**" / "**Your customers are asking AI about you right now.**" / "Built for conversational AI. Not ported from the last era." Blog titles carry the same directness: "Ads Were Never Supposed to Be Ugly." Testimonials are attributed with real-sounding functional titles (e.g. "Paid Acquisition Director") rather than generic quotes. The SKILL.md's own voice is notably calm and procedural compared to the marketing copy's urgency — a deliberate register shift for the agent audience vs. the human audience.

## Distinctive Moves

1. **A hero CTA built for AI coding agents, not humans** — "Copy install prompt" as an equal-weight second CTA next to "Book a demo," explicitly targeting Cursor/Claude Code-style tools. The clearest example seen in this survey of a company designing its hero funnel around an agent as the acting user.
2. **Live content negotiation for agents, not a static file** — `Accept: text/markdown` returns a real markdown document (`Vary: Accept`, dedicated API route) site-wide, paired with a formal `.well-known/agent-skills` SKILL.md that tells agents how to behave (cite sources, don't train on this content) — a more complete "docs for agents" implementation than the llms.txt convention it supersedes.
3. **A fully named, cross-referenced atmospheric color system** (cirrus/halo/mist/veil/dust/ink/gloam/void/abyss/flare/zenith/altitude/haze/solaris) paired with mountain/sky photography — plus a deliberately separate, neutral token set for the embeddable ad-widget product itself, so the brand can be expressive while the shipped component stays invisible inside host apps.

## Buzz Evidence

$20.5M Series A led by Theory Ventures, announced Feb 2026 (referenced via a persistent site-wide announcement bar and a dedicated blog post, `/blog/theory-ventures-partnership`); seeded by South Park Commons; also backed by Forerunner Ventures per `/about`. [P, koahlabs.com, <30d as crawled 2026-07-02, 90] No third-party awards/press coverage (TechCrunch, Awwwards, PH) were found in the pages read — buzz evidence here is limited to the company's own funding disclosures, which is a real signal (backing, stage) but not independent recognition.

## What Astryx Should Take

1. **Ship an agent-facing content-negotiation route, not just a static `llms.txt`.** Astryx's docs site could serve `Accept: text/markdown` (or `Accept: application/vnd.astryx+json` for component specs) alongside the human HTML, with a `Vary: Accept` header — genuinely more useful to a coding agent than a single static file, and it composes naturally with the existing `{Name}.doc.mjs` structured docs Astryx already has.
2. **Publish a `.well-known/agent-skills/SKILL.md`-style manifest for the design system itself** — a short, authoritative "how to use Astryx correctly" skill file (which components exist, where the canonical docs live, what NOT to invent) that an agent building against Astryx would discover automatically, mirroring what the `AGENTS.md` already does but exposed via the agentskills.io discovery convention for tools that check `.well-known/` first.
3. **Adopt named semantic type-role utilities** (`text-eyebrow` / `text-lead` / `text-body`) as a documented pattern in Astryx's typography tokens doc — gives consumers a vocabulary above raw size tokens, and is cheap to demonstrate live in Storybook.
4. **Separate "brand" tokens from "component" tokens explicitly**, the way Koah splits its atmospheric marketing palette from the neutral `koah-*` widget tokens — worth calling out directly in Astryx's theming docs as the rationale for why a consuming team's marketing site and its embedded product UI should NOT share one token layer.
5. **One signature easing curve, reused everywhere** (Koah's `cubic-bezier(.23,1,.32,1)`) is a cheap, high-leverage motion-system rule Astryx could bake into its own defined transition token and document as "the Astryx snap," rather than leaving easing ad hoc per component.
6. **A hero CTA aimed at an AI coding agent** (copy-a-prompt, not just copy-a-curl-command) is worth prototyping for Astryx's own marketing site given the project's explicit vibe-test/AGENTS.md focus — "Copy Astryx setup prompt" next to "View docs" would be an on-brand, low-cost hero pattern to test.

## Pages Read

- https://www.koahlabs.com/ (home — full HTML + compiled CSS bundles fetched directly)
- https://www.koahlabs.com/about
- https://www.koahlabs.com/changelog
- https://www.koahlabs.com/monetize
- https://www.koahlabs.com/advertise (full HTML fetched directly)
- https://www.koahlabs.com/blog/ads-were-never-supposed-to-be-ugly
- https://www.koahlabs.com/robots.txt
- https://www.koahlabs.com/sitemap.xml
- https://www.koahlabs.com/.well-known/agent-skills/index.json
- https://www.koahlabs.com/.well-known/agent-skills/koah-overview/SKILL.md
- https://www.koahlabs.com/llms.txt (404 — no static llms.txt; site uses `Accept: text/markdown` content negotiation instead, verified)
- https://www.koahlabs.com/_next/static/chunks/2lx-2tk_jh0ha.css and .../3a8m-w3gk4tye.css (compiled Tailwind bundles — source of all hex/token/keyframe evidence above)
