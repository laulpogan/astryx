---
name: bolt.new
url: https://bolt.new
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

bolt.new is StackBlitz's browser-based "vibecoding" builder — type a prompt, get a working full-stack app, with an AI agent that plans, writes, tests and deploys code (hosting, databases, auth) without leaving the browser. The public marketing site is a single-page-app (Vite-built SPA, hashed `/assets/*.css` and `/assets/*.js` bundles) that shares its component system and design tokens with the actual in-product workbench — visiting the homepage is effectively loading a stripped-down instance of the product shell. Footer copyright reads "© 2026 StackBlitz — All rights reserved," confirming StackBlitz as the parent company.

## Typography

- **Display/headline face — "Inter Display."** Self-hosted (not the Google-Fonts CDN copy), two static cuts only: SemiBold 600 and Bold 700, Latin-only `unicode-range`, loaded via `/static/fonts/fonts.css` (`inter-display-semibold.woff2`, `inter-display-bold.woff2`). Declared as `font-family: 'Inter Display', sans-serif` and applied through a `.font-display` utility class on every H1–H3.
- **Body/UI face — "Inter."** Loaded from Google Fonts (`fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700`), used for nav, buttons, body copy, persona-card text.
- **Code/mono stack** — plain system stack, `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`. No premium/branded monospace anywhere in the marketing site (unlike Cartesia/Perplexity's Berkeley Mono, or Zed/Resend's mono-forward branding) — Bolt's actual "code" surface lives inside the in-app Monaco-based editor, not the marketing chrome.
- Hero H1 (`text-5xl font-display font-bold tracking-tight`): **"What will you build today?"** — tight negative tracking at large size is the house display treatment; no serif anywhere on the site.
- No custom variable-font axes, no kinetic/animated type — restraint sits entirely in weight (600/700) and tracking, not typographic novelty.

## Color

Hard evidence pulled from the shipped `index-*.css` bundle: a full semantic token system prefixed `--bolt-ds-*` (Bolt Design System), each role defined twice (light block / `[data-theme=dark]` block):

| Role                             | Light                                                 | Dark                                            |
| -------------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| `bg`                             | `rgb(255 254 254)` (off-white, not pure `#fff`)       | `rgb(17 17 20)` `#111114`                       |
| `bgSecondary`                    | `rgb(249 246 249)` `#F9F6F9` (warm, faint lilac tint) | `rgb(23 23 25)` `#171719`                       |
| `bgTertiary`                     | `rgb(243 240 245)`                                    | `rgb(30 30 33)` `#1E1E21`                       |
| `brand`                          | `20 136 252` → `#1488FC`                              | `43 166 255` → `#2BA6FF`                        |
| `brandHighlight`                 | `43 166 255`                                          | `83 196 255`                                    |
| `borderColorActive`              | `#1488fc`                                             | `#2ba6ff`                                       |
| `danger` / `success` / `warning` | `#ef4444` / `#22c55e` / `#F79009`                     | same hues, `Container`/`Outline` alpha variants |

Brand color is a single saturated sky-to-azure blue (`#1488FC`/`#2BA6FF`), reinforced by the wordmark gradient (`#1488FC → #03305D` light, `#fff → #1488FC` dark — see Distinctive Moves). Backgrounds are never pure white/black: light mode sits on an off-white with a faint warm/lilac cast, dark mode sits on charcoal (`#111114`) rather than true black, stepping up through `#171719 → #1E1E21 → #2C2C30` for card/hover surfaces.

A separate, notable detail: the in-app **model picker** uses per-provider brand-color chips as CSS custom properties — `--model-color:#6366F1` (indigo), `--model-color:#D97757` (Anthropic's own terracotta), plus `#FFFFFF`/`#000000` — literally color-coding "the best model, every time" with each LLM vendor's own hue.

Separately, a `shadcn`/Radix-style token layer also ships (`--radius: .5rem`, `hsl(var(--border))`, `hsl(var(--background))`) — a second, more generic semantic-token convention likely serving embedded shadcn-built UI inside the product workbench (consistent with bolt.new listing Shadcn UI as one of the design systems it can build against).

## Layout

Vite SPA, UnoCSS utility engine (confirmed by `--un-*` custom properties, not Tailwind, despite a bundle literally named `tailwind-compat-*.css` that only ships a Tailwind-preflight-equivalent reset). Page reads as a single vertical scroll, centered content column, generous section padding:

1. Centered hero — headline + subhead + prompt/chat composer, no image.
2. "Your company's design system, now in Bolt" — 5-card logo-wall row (Porsche, Material UI, Chakra, Shadcn UI, Washington Post Design System), each a **dark image tile** with the partner's real visual identity showing through and the name overlaid bottom-right in white — not a flat grayscale logo strip.
3. Bento-style feature pair: "The best model, every time" (98% less errors claim) + "Build big without breaking" (1,000× larger projects claim).
4. Dark "cloud" section, headline "Everything you need to scale" (large, `text-white/60`), 5-tile feature grid (Unlimited databases / Enterprise-grade / User Management & Authentication / SEO optimization / Hosting with analytics & custom domains) — glass-like rounded cards (`rounded-xl`/`rounded-3xl`, `border-white/10` hairlines) floating over the LightRaysCloud ring graphic (see Motion).
5. Persona bento grid, "Bolt gives you superpowers" (glow-shadow headline) — 5 cards (Product managers / Entrepreneurs / Marketers / Agencies / Students & builders), **asymmetric spans** (`md:col-span-2`, `lg:col-span-3`) with per-corner rounding (`rounded-tl-3xl`, `rounded-tr-xl`) so the grid reads as one continuous rounded frame split into unequal cards, not a uniform grid.
6. Closing CTA — "Ready to build something amazing?"
7. Footer — three columns (Resources / Company / Social), copyright to StackBlitz.

Other pages: **Pricing** is a 4-tier vertical card stack (Free $0 / Pro $25/mo / Teams $30/member/mo — "Popular" / Enterprise custom) with a monthly/yearly toggle; billing unit is **tokens**, not seats, with a stated token-rollover policy. **Enterprise** alternates text/visual blocks with glass-cube feature imagery and a metric-led customer testimonial (Digital Virgo CTO: 12-month → 3.5-month launch time, 4–5-person team → 1 architect). **Careers** flows headline → team identity → 5 named values ("Own it," "Win together," "Move fast," "Make impact," "All in") → benefits → job listings, with polaroid-style team photos. **Blog** (`bolt.new/blog`) is a real, categorized editorial section (All / Engineering / Product / AI / Customer Stories / Tutorials & Tips) with a newsletter CTA ("Build smarter, every week") — not a thin placeholder.

Nav routes `/resources`, `/community`, `/changelog`, `/status`, `/support` all 302-redirect to an internal client-router prefix (`/~/...`) or an external Zendesk-style help center (`support.bolt.new`) rather than resolving as plain server routes — the marketing site and the in-app workbench share one router.

## Motion

**Correction to the prior scout note:** the site is _not_ "minimal motion." It is a fully worked-out, CSS-only motion system — no GSAP, Framer Motion, Lottie, Spline, Three.js, or WebGL anywhere in the shipped asset filenames. Confirmed keyframes across bundles: `fadeIn`, `fadeInRight`, `fadeOutRight`, `fadeMoveDown`, `shimmer`, `shimmerIcon`, `shimmerImageDiagonal`, `shimmerText`, `loadingBar`, `pulse`, `spin`, plus shadcn-style `collapsible-down/up`.

The two standout techniques:

1. **CSS motion-path "streaming border."** While the AI streams a chat response, the prompt box's border grows a literal chasing light: `offset-path: inset(.5px round 8.5px); offset-distance: 0% → 100%; animation: 2.4s linear infinite`, paired with a trailing radial-gradient glow. Zero JS animation runtime — pure native CSS Motion Path. Explicitly wrapped in `@media (prefers-reduced-motion: reduce){ animation: none }`.
2. **Ambient background glow, two layers.** `LightRays` — five blurred (21–110px), rotated radial-gradient blobs positioned above the viewport, fading in on load (0.25s) and dropping to 50% opacity once `data-chat-started=true`. `LightRaysCloud` — a more elaborate concentric-ring "portal/eclipse" graphic (5 nested bordered ellipses, blue ramp `rgba(20,136,252,…)` → deep blue `#1172E2`) sitting behind the "scale" section; the entire light/dark swap is one substituted CSS custom-property block, not two separate components.

Net effect: restrained-but-real motion, cheap (declarative CSS, GPU-composited transforms/opacity), and accessible by default — a genuinely reusable recipe, not evidence that AI-tool sites can skip motion.

## Hero Anatomy

- **Headline:** `<h1 class="font-display font-bold text-5xl tracking-tight">` — "What will you build today?" One line, centered, no image or video behind it.
- **Subhead:** "Create stunning apps & websites by chatting with AI."
- **Primary CTA is not a button — it's the composer.** A ProseMirror-based rich-text input (Tiptap-style `.ProseMirror` editor, not a plain `<textarea>`) sits directly in the hero, with quick-action affordances built into its own chrome: a **"Plan" / "Build now"** mode toggle, plus **"Figma"** and **"GitHub"** import shortcuts — the chat-prompt-box literally replaces the marketing hero's call-to-action button.
- Background: no photography, no video — just the LightRays ambient-glow layer described above.
- No stat callouts or logo strip inside the hero itself; those appear immediately below the fold.

## Components of Note

- **Prompt/composer** (`Prompt-*.css`) — ProseMirror rich-text editor doubling as hero CTA, with inline mode toggle and file/import shortcuts.
- **Design-system logo wall as art-directed tiles** — 5 dark image cards (Porsche / Material UI / Chakra / Shadcn UI / Washington Post), each keeping the partner's real color/imagery rather than flattening to grayscale.
- **Model-color chips** — provider-branded hex values (`#6366F1`, `#D97757` Anthropic terracotta, `#FFFFFF`, `#000000`) used as CSS custom properties in the model-routing picker.
- **Sonner** toast library in use for notifications (`.sonner-*` classes, `sonner-fade-in/out`, `sonner-spin` keyframes) — an adopted OSS component, not custom-built.
- **Persona bento grid** — asymmetric column spans + per-corner radius creating one continuous rounded frame.
- **Pricing cards** — 4-tier vertical stack, token-metered (not seat-metered), with a stated rollover policy and an "Ask for a quote" Enterprise CTA.
- **Wordmark-as-headline-glyph** — see Distinctive Moves.

## Voice & Copy

Direct, second-person, benefit-first. Numbers substitute for adjectives: **"98% less errors,"** **"1,000 times larger"** — proof-by-metric rather than "powerful"/"seamless" language, echoing the same trust-signal pattern the crawlset flags at Modal and PostHog. Persona copy is terse and role-specific ("Go from insight to prototype in hours and test ideas with your team before the day is over"). Careers voice shifts more energetic/mission-driven: "Reimagine how software is built with Bolt.new," "builders, designers, and dreamers," five one-line values ("Own it," "Win together," "Move fast," "Make impact," "All in"). Blog voice is editorial/authoritative (posts bylined by named execs, e.g. the COO on AI adoption in real estate) rather than generic content-marketing filler.

## Distinctive Moves

1. **The word "build" in the H1 is not text — it's a custom vector glyph.** `<h1>What will you<span class="sr-only"> build </span><svg>…gradient-filled paths…</svg> today?</h1>`. The glyph is filled with a linear gradient that flips per theme: `#1488FC → #03305D` (light), `#FFFFFF → #1488FC` (dark) — the same blue used everywhere else as `brand`. An `sr-only` text fallback keeps it accessible. This is a genuinely rare technique: a logotype standing in for one word mid-headline, recoloring with the theme, rather than a static logo lockup elsewhere on the page.
2. **The prompt box grows an animated "chasing light" border while the AI is thinking**, via native CSS Motion Path (`offset-path`/`offset-distance`) — no JS animation library, `prefers-reduced-motion` respected. Turns dead wait-time into on-brand motion for near-zero runtime cost.
3. **The chat input replaces the hero CTA button entirely**, with build-mode and import affordances (Figma/GitHub) built into the composer's own chrome rather than a separate toolbar — confirms and sharpens the "chat-prompt-box-as-hero" pattern the earlier scout note flagged, now with the exact mechanism (ProseMirror editor, not a styled `<input>`).

## Buzz Evidence

- **Unverified from prior scout note:** the claim of a "55.6M X views" launch clip and "#1 in Launch Library's tracked set" could **not** be independently confirmed by web search in this pass — searches surfaced a separate, much smaller hackathon-tweet figure (~1.6M views), not the 55.6M number. Treat the original figure as unverified pending a primary source.
- **Independently verified via search (secondary sources, dated within research window):** StackBlitz/Bolt reached **$40M ARR by March 2025**, was targeting a $100M ARR milestone; **$135M total funding** (Series B, January 2025, led by Emergence Capital and GV, with Greylock, Insight Partners, Madrona); **~$700M valuation** reported by Forbes/Bloomberg (August 2025); a **Microsoft Azure/Microsoft 365 partnership** announced May 2026 (Azure Marketplace, Teams/Copilot integration); **Bolt Cloud** infrastructure product (hosting/databases/auth/serverless) launched August 2025; company claims **75% of the Fortune 500** use the platform. [Sources: Sacra, getlatka.com, growth-blog secondary coverage — secondary tier, not primary-verified against Bolt's own press page in this pass.]
- Multiple independent growth blogs (Growth Unhinged, Startup Spells) describe Bolt/StackBlitz as one of the fastest-growing software products ever, "2nd fastest behind ChatGPT" — a repeated secondary-source claim, not a single authoritative benchmark.

## What Astryx Should Take

1. **Reusable CSS-only "in-progress" motion recipe.** The streaming-border technique (`offset-path` + `offset-distance` animated 0→100%, wrapped in `prefers-reduced-motion`) is directly portable to an Astryx `Button`/`Input` loading state — zero motion-library dependency, matches Astryx's existing StyleX-native, JS-free-animation stance (`stylex.keyframes`, `@starting-style`) already codified in CLAUDE.md.
2. **A full light/dark semantic-token table is the right shape for `$ASTRYX docs tokens`.** Bolt's `--bolt-ds-*` set (bg/bgSecondary/bgTertiary, brand/brandHighlight, textPrimary/Secondary/Tertiary, borderColorActive/Divider/Outline, danger/success/warning + Container/Outline alpha variants) is a clean ~30-role naming model, each role paired light+dark — worth benchmarking Astryx's own token doc page's completeness against.
3. **Logo-wall-as-art-directed-tile, not grayscale strip.** When Astryx documents interop with peer systems (shadcn, Radix, Chakra, Material), present each as a real-color image tile with the partner's own visual identity and a name label, the way bolt.new does for its 5 design-system partners — makes an interop claim concrete instead of a trust-signal afterthought.
4. **Wordmark-as-inline-glyph is a cheap, distinctive hero device Astryx could adapt** — render one word of a marketing headline as an SVG built from an actual Astryx component shape (e.g. a Button or Radio glyph), gradient-filled and theme-adaptive, instead of a static logo lockup or a stock hero image.
5. **Correct the "AI sites can skip motion" takeaway.** bolt.new does not prove restraint means _no_ motion — it proves restraint means _cheap, native, accessible_ motion (CSS keyframes + motion-path, explicit `prefers-reduced-motion` opt-outs, zero animation-library weight). That's the actual playbook to copy for Astryx's own docs/marketing site, not an excuse to skip motion polish.
6. **Token-metered pricing UI pattern** (4-tier vertical cards, token/usage as the billed unit with a stated rollover policy) is a clean reference if Astryx ever ships its own usage-based or seat-based pricing page.

## Pages Read

- https://bolt.new (home — WebFetch + raw HTML/CSS bundle analysis via curl)
- https://bolt.new/pricing
- https://bolt.new/enterprise
- https://bolt.new/careers
- https://bolt.new/community
- https://bolt.new/blog
- https://bolt.new/llms.txt (redirects to `/~/llms.txt`, resolves to the SPA HTML shell — bolt.new does not serve a genuine machine-readable `llms.txt`)
- Raw asset files fetched directly: `/assets/root-CHWEpHFQ.css`, `/assets/index-DBYweuHl.css`, `/assets/LightRays-apN2LHcc.css`, `/assets/LightRaysCloud-_RGYDnNX.css`, `/assets/tailwind-compat-DeJTMLhw.css`, `/assets/EmptyState-scVdpVyl.css`, `/assets/Prompt-BAuldNfg.css`, `/static/fonts/fonts.css`
