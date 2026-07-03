---
name: Cursor (cursor.com)
url: https://cursor.com
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Cursor (built by Anysphere, Inc.) is an AI coding agent — a VS Code-derived IDE plus cloud agents, a CLI, and (as of June 29, 2026) a native iOS app — marketed at cursor.com as infrastructure for "building ambitious software." The marketing site is a Next.js app (Vercel-hosted, `/marketing-static/_next/...` asset paths) that leads with product demos and customer testimonials rather than illustration or spectacle; the prior scout note ("cited-but-not-indexed," restrained light-mode) undersold how deliberate and custom-built the underlying design system actually is — verified below against the raw HTML/CSS.

## Typography

- **UI/marketing sans: `CursorGothic`** — a proprietary, self-hosted typeface, not a rebrand of a known family under a different name in any way discoverable from the CSS. Shipped as four `@font-face` weights/styles: Regular (400), Italic (400), Bold (700), BoldItalic (700), each `font-display: swap`. Paired with a metric-matched `CursorGothic Fallback` (`src: local(Arial)`, with `ascent-override`/`descent-override`/`size-adjust` tuned to prevent layout shift) before falling to `system-ui, Helvetica Neue, Helvetica, Arial, sans-serif`.
- **Monospace: Berkeley Mono** (U.S. Graphics Co.) — `--font-berkeley-mono: "berkeleyMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas...`. Confirmed via `@font-face{font-family:berkeleyMono;src:url(.../BerkeleyMono_Regular...)}` plus an Oblique cut. Used for the install command, changelog slash-commands (`/automate`, `/in-cloud`, `/babysit`), and a dedicated `.type-product-base-mono` class for in-product code UI.
- **Serif: EB Garamond** — declared as `--font-serif`, shipped with an italic cut subset to a Cyrillic/extended-Latin `unicode-range` (`U+460-52F, U+1C80-1C8A...`), suggesting narrow editorial/pull-quote use rather than a primary typeface.
- **Custom fluid type scale**, not raw Tailwind text sizes: `.type-xs / .type-sm / .type-base / .type-md-sm / .type-md / .type-md-lg / .type-lg / .type-xl / .type-2xl`, each pairing its own `--tracking-*` (letter-spacing) and `--leading-*` (line-height) token — e.g. `.type-md-lg{font-size:var(--text-md-lg);line-height:var(--leading-snug);letter-spacing:var(--tracking-md-lg)}`.
- **A second, parallel "product" type scale** — `.type-product-base`, `.type-product-lg`, `.type-product-sm(-medium)`, `.type-slack-*` — kept deliberately distinct from the marketing scale above, so embedded product/Slack-demo screenshots stay pixel-faithful to the real app UI regardless of marketing-copy sizing changes.
- Hero headline is literally `<h1 class="type-md-lg text-balance mb-v1">` — uses native CSS `text-wrap: balance`, not a JS line-balancer.

## Color

- **Brand palette is two warm neutrals, not black/white**: light theme background `#f7f7f4` (warm parchment, confirmed via `<meta name="theme-color" content="#f7f7f4" media="(prefers-color-scheme: light)">` and as literally the only non-transparent hex on the dedicated Brand Guidelines page), dark theme background `#14120b` (warm near-black brown, `media="(prefers-color-scheme: dark)"`).
- Body text: `rgba(38, 37, 30, .55)` (light) / `rgba(237, 236, 236, .55)` (dark); emphasis text `#26251e` (light) / `#edecec` (dark) — warm charcoal/off-white, never pure `#000`/`#fff`.
- Full `[data-theme="dark"]` attribute-based theming, e.g. `.cursor-preview{background-color:#f7f7f4}` / `[data-theme="dark"] .cursor-preview{background-color:#14120b}` — matches Astryx's own light/dark ThemeProvider pattern.
- Built on **Tailwind CSS v4** (confirmed by the generated `--color-blue-600:#155dfc` / `lab(44.0605% 29.0279 -86.0352)` dual hex+`lab()` fallback pattern that is a Tailwind v4 signature) but layered under Cursor's own semantic token set: `--color-theme-bg`, `--color-theme-text`, `--color-theme-border(-01/-02-5)`, `--color-theme-card(-03)-hex`, `--color-theme-button-bg/-button-text`, plus status tokens `--color-warning/-success/-accent/-error/-info` each with a paired `-bg` variant.
- **The one genuinely saturated palette on the site lives inside embedded code-editor screenshots** (inline `<span style="color:#...">` syntax-highlight spans), not the chrome: lavender `#9E94D5`, magenta `#AA52A2`, deep red `#B3003F`, pink `#E394DC`, teal `#83D6C5`/`#82D2CE`, burnt orange `#DB704B`, amber `#F8C762`. Buttons and CTAs stay monochrome ink-on-parchment — the color budget is spent proving the product, not decorating the page.

## Layout

- Custom two-axis spacing system on top of Tailwind: a horizontal **grid unit `--g`** (`--spacing-g1/g2/g3: calc(var(--g) * n)`) and a vertical **rhythm unit `--v`** (`--spacing-v1` through `-v8`). Hero markup expresses every gap/margin as a multiple of these (`mb-v2.5`, `gap-x-g1`, `mb-v1`) rather than raw Tailwind spacing.
- **Named, ch-based prose-width tokens**: `--spacing-prose-narrow: 48ch`, presumably `-medium-wide: 80ch`, `-wide: 96ch` — explicit reading-width discipline instead of ad hoc `max-w-*`.
- Radius scale: `2xs 2px / sm .25rem / md 8px / lg .5rem / xl .75rem / 2xl 1rem`; all buttons use a literal max-float pill radius (`border-radius: 3.40282e38px`, i.e. effectively `rounded-full`).
- **Nav**: two mega-menus — Product (Agents, Cloud, CLI, Mobile, Automations, Review, Tab, Marketplace) and Resources (Changelog, Blog, Docs, Community, Help, Workshops, Forum) — plus top-level Enterprise/Pricing/Careers links and right-aligned Sign in / Contact sales / Download.
- **Footer**: 5 columns — Product, Resources, Company (Careers, Blog, Community, Students, Brand, Future, Anysphere↗), Legal, Connect (X, LinkedIn, YouTube) — plus a SOC 2 Certified badge and a 12-language selector (en, 简体中文, 日本語, 繁體中文, Español, Français, Português, 한국어, Deutsch, हिन्दी, + ru/tr per `llms.txt`).
- **Pricing** (verified via the page's own `schema.org` JSON-LD `Offer` list — hard numbers, not inferred): Hobby $0, Pro $20/mo, Pro+ $60/mo, Ultra $200/mo, Teams $40/user/mo. Card layout, monthly/yearly toggle, FAQ accordion ("We recommend Pro+ for daily agent users, and Ultra for agent power users").
- `/about` and `/company` both resolve to a generic app-shell fallback (duplicated title `"Cursor - The best way to code with AI | Cursor - The best way to code with AI"`, no distinct body content) — Cursor appears to run **no dedicated About/mission page**; that role is instead filled by `/future` (see Distinctive Moves) and the Careers page copy.

## Motion

- **No video, no WebGL/canvas, no GSAP/Framer Motion/Lottie** anywhere in the homepage bundle (checked directly — zero matches).
- Entire motion vocabulary is five small CSS `@keyframes`: `fadeIn`, `fadeSlideUp` (opacity + `translateY(2px)`), `fadeSlideRight` (`translateX(-2px)`), `barGrow` (`scaleY(0→1)`, for stat bars), `tilePopIn` (`scale(.7→1)` + 3px translate, for card reveals). All are small, 2-4px nudges — progressive-reveal micro-transitions, not decorative flourish.
- Link/CTA hover states are plain `transition: color .15s ease`.
- Long text (e.g. the curl install line) fades via a pure-CSS `mask-image: linear-gradient(to right, black 0%, black 86%, transparent 100%)` rather than a JS truncate/marquee script.

## Hero Anatomy

- Verbatim headline: **"Cursor is your coding agent for building ambitious software."** — set `type-md-lg`, `text-balance`, **left-aligned** inside a `max-w-prose` column (not the centered-headline template most AI-startup homepages use).
- Three CTAs beneath it: "Download for macOS ⤓" (primary pill button), "Get started →", "Request a demo →" (ghost/quaternary variants).
- Immediately below: a live embedded screenshot/interactive demo of the actual Cursor IDE — no stock imagery, no gradient/3D backdrop; background is the flat `#f7f7f4` theme color.
- Four narrative sections follow, each a short headline + a real embedded UI demo: "Agents turn ideas into code," "Works autonomously, runs in parallel," "In every tool, at every step" (visual = the literal `curl https://cursor.com/install -fsS | bash` line), "Automate repetitive work."
- **Testimonial rail** (avatar + quote + name + title): Jensen Huang, NVIDIA President & CEO — _"My favorite enterprise AI service is Cursor. Every one of our engineers, some 40,000, are now assisted by AI and our productivity has gone up incredibly."_; Patrick Collison, Stripe Co-Founder & CEO; Greg Brockman, OpenAI President; Diana Hu, YC General Partner; shadcn.
- A model-picker strip surfaces real, current model names (Auto, Composer 2.5, GPT-5.5, Opus 4.8, Gemini 3.1 Pro, Grok 4.3) as an implicit credibility/proof device.

## Components of Note

- **5-tier button family**, one BEM-ish class set, all pill-radius, all theme-token colored: `.btn` (primary), `.btn--secondary`, `.btn--ghost`, `.btn--quaternary`, `.btn--quinary`, `.btn--banner`, with independent size modifiers `--xs/--sm/--md-sm`.
- **Semantic type-badge classes** for reference docs — `.type-literal`, `.type-optional`, `.type-root`, `.type-wildcard`, `.type-variants` — color-coded via the success/warning/error/info/accent token pairs, used in SDK/CLI parameter tables.
- Custom 16px icon webfont, `CursorIcons16` (`@font-face`, `.woff2`) — glyphs shipped as a proprietary icon font rather than an SVG sprite.
- **Changelog**: version-numbered + dated entries (e.g. "Jun 30, 2026 · 3.9"), screenshots via CDN with `?w=1920&q=70` sizing params, slash-commands set in Berkeley Mono.
- **`/future`**: a computing-history canon timeline — Ada Lovelace & Babbage (1837) → Turing (1936) → McCulloch & Pitts (1943) → Lisp (1958) → Licklider (1960) → Engelbart's "Mother of All Demos" (1968) → Unix (1969) → Smalltalk (1980) → Macintosh (1984) → backprop paper (1986) → HyperCard (1987) → WWW (1989) → Python (1991) → JavaScript (1995) → Git (2005) → AWS (2006) → iPhone (2007) → AlexNet (2012) → VS Code (2015) → "Attention Is All You Need" (2017) → ChatGPT (2022) → **Cursor, "The new way to code with AI" (2023)** → **You, "What are you building today?" (2026)**.
- **Brand Guidelines page** (`/brand`): logo ships in "2D (default) and 2.5D (for larger applications)" variants, horizontal (preferred) and vertical lockups, plus standalone cube/wordmark marks; app icons in 2.5D/2D/3D, light+dark; explicit naming rule — _"Refer to us as Cursor. Not Cursor AI or Cursor Code."_
- **`llms.txt`** is a genuinely complete machine-readable doc index — roughly 250 linked `.md` files spanning Docs (Agent, Customizing, Cloud Agents, Integrations, SDK, CLI, Account/Enterprise), CLI Docs, and Help Center, plus a documented 12-language i18n URL-prefix convention (`/es/docs/bugbot.md`, etc.) — not a token/stub file.

## Voice & Copy

- Short, declarative, low-adjective sentences: "Cursor is your coding agent for building ambitious software." / "Works autonomously, runs in parallel." / "In every tool, at every step."
- Enterprise headline uses a stat as the headline itself: _"Cursor for Enterprise — Trusted by 64% of Fortune 500 companies."_
- Careers page shifts to a confident, talent-obsessed register: _"Cursor is transforming the way we build software... We obsess over talent to an unusual degree and are designing a company that's a haven for self-motivated individual contributors."_
- `/future` shifts again to an inspirational/historical register: _"With Cursor, we're finally approaching a world where the distance between ideas and reality becomes zero... What are you building today?"_
- No emoji, no exclamation points, no gradient-hype vocabulary ("magical," "revolutionary") observed in any sampled copy.

## Distinctive Moves

1. **Two named, custom-licensed typefaces where most competitors default to Inter**: `CursorGothic` (proprietary sans, 4 cuts, metric-matched fallback) for all marketing/UI text, and Berkeley Mono for all code — yet the result reads quiet enough that even a scout pass mistakes it for a generic system-font site. Restraint here is a _choice_, not an absence of a type system.
2. **The vivid color budget lives entirely inside product screenshots** (syntax-highlighted code spans), while the marketing chrome itself stays a two-tone warm parchment/near-black — the inverse of the "gradient hero, neutral product shot" pattern most AI-startup sites in this survey use.
3. **`/future` — an 18-entry, 189-year computing-canon timeline used as the manifesto**, in place of written "our mission" prose, closing on "You / 2026 / What are you building today?" A confident historical name-drop (Lovelace → Turing → Engelbart → Torvalds → Cursor) instead of a founder-voice essay.
4. **Zero JS motion runtime**: despite investor-grade testimonials (Jensen Huang, Patrick Collison, Greg Brockman) that would justify visual spectacle, the entire homepage animates via five small CSS `@keyframes` — no WebGL, no GSAP, no Lottie, no video.

## Buzz Evidence

- On-homepage testimonials from Jensen Huang (NVIDIA President & CEO), Patrick Collison (Stripe Co-Founder & CEO), Greg Brockman (OpenAI President), Diana Hu (YC General Partner), and shadcn.
- Enterprise page: "Trusted by 64% of Fortune 500 companies"; used by Nvidia, Samsung, OpenAI, Stripe per meta description. SOC 2 Type II certified (footer badge).
- Jun 29, 2026 blog post: native iOS app shipped in public beta.
- Jun 25, 2026 blog post publishes original research ("Reward hacking is swamping model intelligence gains" — citing SWE-bench Pro data showing 63% of successful Opus 4.8 Max resolutions retrieved rather than derived the fix) — a research-credibility move beyond typical product-marketing content.
- Careers page lists 150+ open roles, signaling an aggressive scale-up phase.
- [S, live site direct-fetch, 2026-07-02, 95] — all figures above verified against the live raw HTML/JSON-LD, not secondary write-ups; the prior crawlset scout note ("cited-but-not-indexed") undersold the depth of the underlying design system.

## What Astryx Should Take

1. **Commission or license one distinctive sans + one premium mono**, rather than defaulting to Inter/system fonts — Cursor's `CursorGothic` + Berkeley Mono proves a custom type system can still read as "restrained," not showy. Keep the metric-matched fallback discipline (ascent/descent/size-adjust overrides) to avoid layout shift.
2. **Maintain two parallel type scales**: a marketing scale and a separate "product" scale (Cursor's `type-product-*`) so embedded live-component previews on Astryx's docs site stay pixel-faithful to the actual design system regardless of marketing-copy sizing changes.
3. **Adopt named, `ch`-based prose-width tokens** (e.g. 48/80/96ch) instead of ad hoc `max-w-*` values for consistent reading-width discipline across component-doc pages.
4. **Spend the site's color budget inside code blocks and live component previews, not chrome** — keep the marketing shell to two warm neutrals (a light parchment + dark ink, mirroring Astryx's existing light/dark ThemeProvider) and let StyleX-themed snippets/components carry the saturated color.
5. **A single manifesto page framed as a technology-history timeline** — for Astryx this could place the design system in a "web styling systems" lineage (CSS → Sass → CSS-in-JS → Tailwind → StyleX) — is a cheap, confident, write-once alternative to prose "about" copy, and doubles as evergreen content that doesn't need editing.
6. **Verify Astryx's own `llms.txt`/AGENTS.md is a genuinely complete file index** at the bar Cursor sets (~250 linked docs, explicit i18n convention) rather than a token gesture — since Astryx already leans on `AGENTS.md` for LLM-vibeability, this is a direct, cheap comparison point.
7. **Keep motion to a handful of small CSS `@keyframes`** (fade/slide/scale, 2-4px translates, `text-wrap:balance` for headlines, `mask-image` fades for truncation) — matches the JS-motion-free direction StyleX already supports; Cursor at this valuation choosing zero WebGL/GSAP is evidence this reads as engineering confidence, not an unfinished site.
8. **Benchmark Astryx's own Button component's variant depth** against Cursor's 5-tier hierarchy (primary/secondary/ghost/quaternary/quinary + banner), all sharing one pill-radius token, for API completeness on a marketing/docs surface that needs many button "loudness" levels on one page.

## Pages Read

- https://cursor.com (home)
- https://cursor.com/pricing
- https://cursor.com/changelog
- https://cursor.com/blog
- https://cursor.com/about
- https://cursor.com/company
- https://cursor.com/careers
- https://cursor.com/enterprise
- https://cursor.com/future
- https://cursor.com/brand
- https://cursor.com/llms.txt
- Downloaded/inspected raw CSS bundles referenced from the homepage `<link rel="stylesheet">` tags (4 Next.js chunk files under `/marketing-static/_next/static/chunks/`) for font-face, color-token, and spacing-token evidence.
