---
name: Perplexity AI
url: https://www.perplexity.ai
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Perplexity is an AI "answer engine" — real-time web search routed across multiple frontier models (its own Sonar plus licensed access to Claude, GPT, Gemini, Grok) with inline, checkable citations. Beyond the core chat/search product it now ships a personalized Discover news feed, a Computer agentic-workflow product, an API platform, and Comet, a full AI-native desktop/mobile browser. Design-wise it is really three coexisting surfaces: the dark, custom-typeface product app; a dark-cosmic corporate marketing hub (`/hub`); and a separate, Framer-built, light-mode microsite for Comet with its own serif-and-grain visual language.

## Typography

- **Custom in-house variable type family**, self-hosted at `frontend-cdn.perplexity.ai/_agi_assets/fonts/`, confirmed via live `@font-face` rules on the app:
  - `pplxSans` — `PPLX-Sans-Beta-v2-VF.woff2` — primary UI/body sans, used site-wide in the product shell (nav, search composer, sidebar).
  - `pplxSansR4` — `PPLX-Sans-Beta-R4-VF-2.woff2`
  - `pplxSerifR4` (+ a dedicated italic cut, `PPLX-Serif-Italic-Beta-R4-VF.woff2`) — the in-house serif, used as the CSS fallback behind the licensed display serif.
  - `pplxMonoR4` (`PPLX-Sans-Mono-Beta-R4-VF.woff2`) and `pplxSansMono` — monospace variants.
  - All four families are variable fonts (single `.woff2` per family/style covering the weight axis) — a genuinely built type system, not a single licensed face.
- **Display serif on marketing surfaces: GT Canon VF** (Grilli Type), self-hosted alongside the pplx fonts. On `/hub` the hero headline computed style is `font-family: "GT Canon VF", pplxSerif, ui-serif, Georgia, Cambria, serif` at **180px / weight 600**, with the word "for" set in italic mid-sentence for editorial texture ("AI _for_ the curious"). On the Comet sub-site (built separately on Framer) the same family appears as `"GT Canon VF Variable L Black"` at **80px / weight 900** for "The browser that works for you."
- Body/UI text on marketing pages is a plain sans stack (Framer default on `/comet`; `pplxSans` fallback stack elsewhere: `pplxSans, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"…`).
- No evidence found on the crawled pages of Berkeley Mono (a separate crawlset entry claims Perplexity uses it) — the only monospace `@font-face` rules discovered here are the self-hosted `pplxMonoR4`/`pplxSansMono`. Flagging as **unverified/contradicted by direct inspection**, not confirmed.

## Color

- **Product app (perplexity.ai, logged-out and logged-in):** near-black warm charcoal, not pure black. `<html>` background `rgb(16, 14, 18)`; the primary surface token `bg-base` resolves to `color(srgb 0.0901961 0.0862745 0.0823529)` (~`#171615`). Body text `rgb(255, 255, 255)`.
- **Semantic elevation tokens, not fixed swatches** — Tailwind-style utility classes found in the live DOM: `bg-base`, `bg-subtle`, `bg-quiet`, `border-subtlest`, `ring-subtlest`, `divide-subtlest`. Elevation is built from low-alpha white overlays (e.g. sidebar background `rgba(214, 213, 212, 0.035)`, an icon chip `rgba(214, 213, 212, 0.07)`) rather than a fixed set of named grays.
- **Teal/cyan is the single recurring brand accent**: the "Search anything" teaser card on the homepage, the Download pill on `/comet`'s nav, and the bordered "Popular" plan card on `/pro` all carry the same teal.
- **Marketing pages (`/hub`, `/pro`) stay dark** but add a painterly, grain-textured backdrop: a blue-hour nature photo (moss, rock, white flowers) behind the `/hub` hero; a warm-amber-to-blue "nebula"/light-streak texture behind the partner-model logo cluster on `/pro`.
- **Comet sub-site flips to light mode** — white/cream background, near-black ink text (`rgb(9, 23, 23)` on headlines) — with large grainy-noise gradient spheres as decorative art (teal-to-navy on one, rust-orange-to-maroon on another). This is a genuinely different palette from the rest of the brand, not a themed variant of the same tokens.
- `2026-07-02` footer text differs by surface: `/pro` reads "© 2026 Perplexity" while the Comet microsite footer still reads "©2025 PERPLEXITY" — circumstantial evidence Comet's Framer site runs on a separate release cadence from the core app.

## Layout

- **Home (`perplexity.ai`):** the entire above-the-fold is nav + centered wordmark + a single rounded search composer + two teaser cards — no scroll required, no imagery.
- **`/hub` (true corporate homepage):** tall vertical scroll — dark photographic hero → an elliptical "orbit" of partner-model logos around a serif headline → a scroll-scrubbed stack of ghost-to-solid headlines → a 2×2 dark product-pillar card grid (Answer Engine / Computer / Comet / API Platform), each card showing a blurred photo backdrop with a real UI-chrome snippet overlaid (source list, live prompt bubble) → dense data-rich demo mockups (an investment-diligence deck, a SaaS competitive-intel funnel chart, a local-market "skate shop" map) → a three-column individuals/teams/developers routing section → FAQ accordion → footer.
- **`/pro` (pricing):** two-column hero (serif headline + CTA pair on the left, dark nebula/logo-cluster art on the right) → an elevated lighter-charcoal rounded-top panel breaking from the black page background, containing a two-card plan comparison (Pro $17/mo, Max $167/mo billed annually) → a long horizontally-repeating marquee of example prompts (the identical query list is repeated ~6× in the raw DOM, not virtualized) → trust/citation proof section → FAQ.
- **`/discover`:** a logged-in personalized dashboard, not a marketing page — left app sidebar (New/Computer/Spaces/Artifacts/Customize/History), center a "For You / Top / Topics" news-card feed (hero story, then a 3-up image-card row, each tagged with a source-favicon cluster + "N sources" count), right rail widgets (topic-interest picker chips, live weather, stock/futures ticker).
- Cards throughout use large corner radii and bleed near-edge-to-edge on desktop; no visible container max-width grid system evident from computed styles (not determined precisely — would need source-map access).

## Motion

- **Scroll-scrubbed focus reveal** on `/hub`'s "Accurate AI" section: three sibling headlines ("Multi-model orchestration," "Web-first agentic AI," "Powerful APIs") sit as pale ghost-text simultaneously on screen; the one nearest center darkens to full contrast as the user scrolls, the others stay faint — a restrained, non-WebGL technique (looks like an opacity/color interpolation tied to `IntersectionObserver` or scroll offset, not GSAP/Lottie).
- **Hover-reveal UI chrome** on the Comet marketing page: a floating mock browser window (a fake "Haute Journal" fashion article) sits inside a soft light-blue glow border; hovering surfaces a quick-action menu (Summarize / Ask / Translate) and an "Assistant" chat bubble fades in over the article — this is the live version of the crawlset's "blue outline frames over content the AI is reading" claim, **verified** on the Comet page (not on the core product itself, which we could reach only logged/session-limited).
- **Grainy, slow-drifting gradient spheres** as ambient hero art on `/comet` (teal-navy sphere top-left, rust-orange-maroon sphere bottom-right), paired with thin line-art orbit ellipses that recur, unanimated, as a background motif on `/hub` and `/pro`.
- **Marquee ticker** of example prompts on `/pro` — a plain looping horizontal scroll, CSS-driven based on the repeated-in-DOM pattern.
- No React confetti/Lottie/GSAP signatures were found in the sampled DOM; the motion vocabulary here is scroll-linked opacity and CSS transitions, not a JS animation library.

## Hero Anatomy

- **Product homepage:** lowercase `perplexity` wordmark in `pplxSans`, centered, no tagline. Below it a single large rounded-pill search composer (placeholder "Ask anything…") with inline mode-pills ("Search" / "Computer"), a model-picker dropdown, mic icon, and a white circular voice-record button — structurally a chat composer wearing a search-bar's clothing. Two teaser cards underneath ("Search anything" teal-tinted; "Get work done with Computer NEW") are the only other above-the-fold content. This matches the crawlset's "single-input hero" framing precisely.
- **`/hub` corporate hero:** full-bleed dark nocturnal nature photograph (mossy rock face, white flowers, blue-hour light) behind a large serif headline "**AI _for_ the curious**" (mixed roman/italic within one headline), a plain-sans subhead ("Get answers. Build ideas. Change worlds."), and a white rounded search input pre-filled with an example prompt.
- **`/comet` hero:** light/cream background, serif headline "The browser that works for you" at 80px/900-weight GT Canon Black, a plain-sans eyebrow ("A new browser from Perplexity"), a single black pill CTA ("Download Comet"), with grainy gradient spheres orbiting the copy block rather than a screenshot.
- **`/pro` hero:** split layout — serif headline + subhead + dual CTA (Get started / Compare plans) on the left; on the right, a dark card containing a scatter of partner-model logo chips (OpenAI, Anthropic-style mark, Google G, Nvidia-style spark, Perplexity's own asterisk-in-diamond mark) over a warm-to-cool light-streak nebula texture.

## Components of Note

- **Semantic surface-elevation tokens** (`bg-base` / `bg-subtle` / `bg-quiet`, `border-subtlest` / `ring-subtlest` / `divide-subtlest`) built from low-alpha white overlays rather than fixed hex steps — a token-naming pattern worth benchmarking against Astryx's own elevation scale.
- **Search/Computer mode-pill selector** inline inside the composer — a segmented control living inside a text input rather than beside it.
- **The recurring "orbit of models" motif** — partner-model logos arranged on a literal ellipse three separate times across the funnel (`/hub`'s clean line-art ring, `/pro`'s nebula-textured cluster, faint ellipses again on `/comet`) — one graphic idea reused as connective tissue across pages that otherwise look quite different.
- **Sourced-answer card pattern** extends all the way into the personalized homepage: every Discover story carries a small cluster of source favicons plus an "N sources" badge, the same citation-count device used in the product's actual chat answers.
- **Dashboard widgets on Discover** — live weather, a stock/futures ticker, and topic-interest picker chips — turn the "customizable widget home page" claim from the scout notes into a verified, concrete feature.
- **Pricing card corner ribbons** — small pill labels ("+$40 free Computer credits", "LIMITED TIME" with a clock glyph) sit above each plan card, and the recommended tier gets a teal ring rather than a filled-color card.
- **Product-pillar cards with photographic backdrop + UI-chrome overlay** on `/hub` (Answer Engine / Computer / Comet / API Platform) — each card shows a blurred lifestyle photo with a real interface snippet (a source list, a live prompt bubble) floating on top, rather than a plain screenshot or icon.

## Voice & Copy

- Short, declarative, almost aphoristic marketing lines: "Get answers. Build ideas. Change worlds." / "The browser that works for you." / "AI _for_ the curious." / "The best models, better together."
- Positions itself on **accuracy and citation-checkability** rather than raw capability hype — "Accurate AI," "fewer hallucinations, backed by citations," "Trust every answer," "every answer includes inline citations… so you can verify claims."
- Comet's product copy is plainer and more utilitarian by contrast ("Do anything with Comet" / "AI that emails" / "AI that shops"), reflecting its separate Framer-built microsite and slightly different (less literary) register than the core brand's serif-headline voice.
- FAQ copy is direct and specific (exact prices, exact feature names: SOC 2 Type II, SAML SSO, SCIM), not vague reassurance.

## Distinctive Moves

1. **A genuinely built, full custom type system** — sans, serif (with a true italic cut), and mono, all self-hosted variable fonts — layered under a licensed premium display serif (GT Canon) for headlines. Most AI-startup sites reach for one system font or one licensed face; Perplexity built the whole family and then added an editorial serif on top of it.
2. **Deliberately split brand system by surface**: the core product + corporate hub run dark-charcoal + teal + serif-display; the Comet sub-brand runs on an entirely separate stack (Framer) with a light cream palette and grainy painterly gradient spheres. This isn't one skin re-themed — it reads as two different design systems co-existing under one company, evidenced by even the copyright year drifting out of sync (2025 vs. 2026) between the two.
3. **The "orbit ellipse" as a portable brand device** — a literal circular arrangement of partner-model logos, reused with different textures (clean line art / nebula gradient / faint background echo) across three separate pages as connective visual tissue between fairly different-looking sections.
4. **Scroll-scrubbed ghost-to-solid headline reveal** — an unusually restrained motion technique (plain opacity/contrast interpolation on scroll position) that achieves a "camera focus" effect without WebGL or an animation library.

## Buzz Evidence

- Per prior scout notes (not independently re-verified on the crawled pages): cited repeatedly in 2026 Framer-startup design roundups as proof "AI companies don't need cluttered landing pages," largely for its single-input hero.
- No funding figures, valuation, award placements, or ranking data were present on any of the pages actually crawled for this dossier — treat any such figures as **not determined** from this pass.
- Circumstantial evidence of active, uneven iteration: `/pro`'s footer already reads "© 2026 Perplexity" while the Comet microsite's footer still reads "©2025 PERPLEXITY," suggesting the Comet Framer site lags the core site's release cadence.
- `/llms.txt` returns a genuine 404 (not a bot-block) — confirmed absent as of this crawl, notable given how central "the open web" and machine-readability are to Perplexity's own pitch.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Build (or fake) a small, coherent custom type system rather than reaching for one licensed face.** Perplexity's pplxSans/pplxSerif/pplxMono trio (even as a beta/internal effort) reads as far more considered than a single Google-Fonts pick. Astryx doesn't need to draw its own typeface, but pairing one confident sans (UI/body) with one serif reserved only for display headlines — used sparingly, the way GT Canon is used only above the fold — would read as more deliberate than an all-purpose sans everywhere.
2. **Adopt a semantic surface-elevation token naming scheme** (`base` / `subtle` / `quiet`, `subtlest` borders/rings/dividers) built from low-alpha overlays on a single base color, rather than a fixed gray-step palette. This is directly reusable for Astryx's own dark-theme tokens and is more elegant than naming a dozen discrete grays.
3. **Reserve a single accent color and reuse it sparingly but consistently** (teal, here) across otherwise-neutral surfaces — the highlighted pricing tier, the CTA button, one teaser card — rather than a rainbow of category colors. Keeps a large component library visually calm.
4. **The "orbit of logos" motif is a reusable device for a docs/marketing site that wants to name multiple integrations/partners/frameworks** without a plain logo wall — arranging them on an ellipse around a headline reads as more considered than a static grid, and can be reskinned (clean line art vs. textured) per page without changing the underlying idea.
5. **Scroll-scrubbed opacity/contrast reveal on a headline stack** is a good, cheap motion technique for a docs/marketing page that wants to sequentially emphasize 3–4 capability names (e.g., "Components. Tokens. Themes. Templates.") without needing a JS animation library — pure CSS/JS scroll-position interpolation.
6. **Card-with-photographic-backdrop-plus-real-UI-snippet** (as used for Answer Engine/Computer/Comet/API Platform on `/hub`) is a stronger pattern than a plain feature-icon card for explaining what each part of a design system does — e.g. a card per component category showing a blurred "in the wild" screenshot with the actual component code/anatomy overlaid on top.
7. **Caution, not adoption:** the split-brand-by-surface move (dark core app vs. light Framer sub-site for Comet) is powerful for a company with genuinely distinct products, but risky for Astryx, which wants one coherent system demonstrated consistently — don't let a docs sub-section or example theme drift into an unrelated visual language the way Comet has from the core Perplexity brand.

## Pages Read

- https://www.perplexity.ai (home — logged-out product shell)
- https://www.perplexity.ai/comet (Comet browser marketing microsite, Framer-built)
- https://www.perplexity.ai/hub (true corporate marketing homepage)
- https://www.perplexity.ai/pro (pricing)
- https://www.perplexity.ai/discover (personalized Discover feed/dashboard)
- https://www.perplexity.ai/llms.txt (confirmed 404 — does not exist)

Note on method: direct `WebFetch`/`curl` requests to perplexity.ai were blocked by Cloudflare's bot-challenge (`cf-mitigated: challenge`, HTTP 403) for every URL attempted. All pages above were instead deep-read via live Chrome browser rendering (real DOM, computed styles, and network/font inspection), which the site's bot-detection did not block.
