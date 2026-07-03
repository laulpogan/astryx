---
name: Mintlify Themes 2.0
url: https://www.mintlify.com/blog/the-next-chapter-of-mintlify-themes
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## Verification note (read first)

The prior scout entry for this target claimed the named themes were **"Quill, Prism, Venus."**
Those names do not exist anywhere in the source: not in the blog post, not in the live
`/docs/themes` page, not in any theme demo site's HTML/CSS I downloaded and grepped. This
looks like a hallucination from the earlier pass. The **real, verified** theme names are below,
sourced from the blog post's own body copy and from the live `docs.json`-driven `ThemeCard`
components on `mintlify.com/docs/themes` (raw HTML/CSS fetched directly, not summarized).

A second, genuinely interesting finding the prior notes missed entirely: **the live theme
catalog has already drifted from the blog post's own announcement.** The blog (dated
`2025-02-13T00:00:00.000Z` per its JSON-LD `datePublished`, no `dateModified` present) named
10 themes: Mint, Maple, Palm, Linden, Willow, Sage, Oak, Chestnut, Kernel, Almond. The live
`/docs/themes` page today (crawled 2026-07-02) lists only **9**: Mint, Maple, Palm, Willow,
Linden, Almond, Aspen, Sequoia, Luma. Four originals — Sage, Oak, Chestnut, Kernel — no longer
appear anywhere on the current site; three new names — Aspen, Sequoia, Luma — have replaced
them. The trend document itself is now stale relative to the product it describes, ~17 months
later. That's worth citing as a distinctive finding in its own right: docs-theme catalogs move
fast enough that a "launch announcement" post decays quickly, which is itself an argument for
Astryx to keep its own theme/example gallery living in code (or a doc page fed by the current
catalog) rather than a blog post that fossilizes.

## What It Is

"The Next Chapter of Mintlify Themes" is Mintlify's Feb 2025 product-launch blog post
announcing a rebuilt theming system for its AI-native documentation platform: instead of one
generic docs skin, Mintlify now ships multiple named, swappable themes (Mint, Maple, Palm,
Linden, Willow, Almond, plus others that have since rotated in and out of the catalog) that
each carry their own color tokens, typography defaults, and layout emphasis, selected via a
`theme` key in `docs.json`. The pitch is that documentation should read as "a natural extension
of a company's product experience" rather than a one-size-fits-all template, and that different
industries (fintech vs. AI/SaaS vs. content-heavy platforms) warrant fundamentally different
navigation and information density, not just different accent colors. As of this crawl,
Mintlify itself has since raised a $45M Series B (a16z + Salesforce Ventures, ~$500M valuation,
April 2026) and serves 20,000+ companies including Anthropic, Amazon, Coinbase, Cognition,
Solana, and AT&T — giving the theme-as-product thesis real commercial backing.

## Typography

Verified from the live site's own font preloads and CSS `@font-face` declarations (not the
blog's prose, which names no typefaces at all):

- **Inter Variable** (`InterVariable-s.p.494bb210.ttf`, `font-family: inter`) — the base UI/body
  sans-serif across the marketing site.
- **ABC Arizona Flare** (`ABCArizonaFlare_Regular-s.p.957a285d.otf`, `font-family: arizonaFlare`)
  — a display flare-serif, mapped to Tailwind's `font-serif` utility and used specifically for
  the big homepage headline: `<h1 class="font-serif text-[2.5rem]/[2.75rem] tracking-[-0.8px] … lg:text-[3.125rem]/[3.25rem] lg:tracking-[-2px]">The knowledge infrastructure agents build on</h1>`.
  This is a real, verified instance of the "serif display headline over sans UI" pairing showing
  up elsewhere in this survey (Cardboard, Granola, HeroUI) — Mintlify does it too, quietly.
- **Geist Mono** (Vercel's monospace, full Latin/Cyrillic/Vietnamese subset `@font-face` set) —
  used for code/technical text sitewide.
- **Paper Mono** (`PaperMono-s.p.9e1cd850.woff2`, `font-family: paperMono`) — a secondary
  monospace, distinct from Geist Mono. Its most notable verified use: the **Linden** theme demo
  sets `--font-family-headings-custom: var(--font-paper-mono)` AND
  `--font-family-body-custom: var(--font-paper-mono)` — i.e. Linden runs monospace for _headings
  and body text_, not just code, which is exactly what backs its stated positioning ("Retro
  terminal vibes with monospace fonts for that 80s hacker aesthetic").
- The blog's own H1 (the article headline, not the homepage) is plain Tailwind utility styling —
  `text-[40px] font-semibold leading-[110%] tracking-[-0.8px]` — no serif, no display face;
  the Arizona Flare treatment is reserved for primary marketing surfaces, not every article page.
- `docs.json` itself exposes per-role font customization: the Fonts doc page states
  documentation authors can set "Google Fonts or self-hosted font files for headings, body text,
  and code blocks" independently — three separate font-role slots, not one global font choice.

## Color

No hex/oklch values appear in the blog post's prose (verified — none). Real, verified color
tokens instead come from the site's own CSS bundles and from each theme demo's injected
`:root` variables (all values below are directly grepped from downloaded CSS/HTML, converted
RGB→hex where the source used `r g b` triplets):

**Marketing-site palette** (from `mintlify.com`'s shared CSS chunk):
`#FF5A00` (orange-red, most frequent accent hex in the bundle), `#0c8c5e` / `#18e299` (mint
greens — the brand's namesake color), dark backgrounds `#0a0b0f` / `#08090a` / `#121717`,
warm off-whites `#faf8f5` / `#fefdfb`, blues `#5984F2` / `#476cff` / `#2547d0` / `#003087`
used as secondary accents (visible in Google-sign-in iconography and link states), plus a full
neutral gray ramp (`#e5e7eb` → `#171717`). The site's Tailwind classes are semantic tokens, not
raw hex, in the actual markup — e.g. the primary CTA button uses `bg-background-invert
text-text-invert hover:bg-background-invert/90`, an invert-token pattern (flips per light/dark
mode) rather than a hardcoded color.

**Per-theme design tokens** (verified directly from each theme's injected `:root` CSS —
these are the actual differentiator between themes, more than layout):

| Theme  | primary (hex)                     | primary-light | background-light       | background-dark |
| ------ | --------------------------------- | ------------- | ---------------------- | --------------- |
| Maple  | `#9A3412` (burnt rust)            | `#EA580C`     | `#FFFFFF`              | `#0E0B0B`       |
| Linden | `#FF5522` (vivid orange-red)      | `#FF5522`     | `#FEFCF8` (warm cream) | `#151413`       |
| Palm   | `#329100` (deep enterprise green) | `#43C200`     | `#FFFFFF`              | `#0A0D0B`       |

Each theme also ships its own full 50–950 gray ramp, warm- or cool-tinted per theme (Maple's
grays run warm/brown-gray; Palm's run slightly cooler/greener-gray) — themes tint the _neutral_
scale, not just the accent, which is a more thorough token system than most competitors'
"pick an accent color" customization.

## Layout

- `docs.json` (the successor to the old flat `mint.json`, per the linked companion post
  "Refactoring mint.json into docs.json") is the nested config schema that drives theme
  selection, navigation structure, and "component presets" — verified structure: a `theme` key
  plus per-theme color/typography overrides.
- The homepage hero sits in a 12-column grid: the headline block occupies
  `lg:col-start-1 lg:col-end-9` (8 of 12 columns), implying a supporting visual fills the
  remaining columns — restrained, not full-bleed.
- **Verified, load-bearing finding**: fetching three live theme-demo sites (Maple, Linden, Palm
  — the "Starter Kit" builds at `<theme>.mintlify.site`) shows they render **the same
  structural starter content** (identical CardGroup blocks, identical "Setting up / Make it
  yours / Next Steps" copy) — the differentiation between themes is carried entirely by CSS
  tokens (color, radius, font-family overrides) layered onto one shared doc template, not by
  distinct page layouts or component arrangements per theme. Themes are skins with real
  token depth, not full redesigns.
- Linden additionally flattens all border-radius tokens to a uniform `4px`
  (`--rounded-sm` through `--rounded-full` are all `4px`) — killing the pill/rounded-full shapes
  used elsewhere on the platform, consistent with its terminal aesthetic.
- Mintlify's own CSS namespaces every utility class with a `mint-` prefix (e.g.
  `mint-mt-4 mint-gap-10 mint-group mint-cursor-pointer`) — their docs product is Tailwind-based
  and the theme-picker page (`/docs/themes`) is itself authored as an MDX file using their own
  `ThemeCard` React component, i.e. they dogfood their own docs product to document the theme
  feature.

## Motion

No motion is described in the blog post's prose (verified — none). Real, verified interaction
detail comes from the homepage markup itself:

- Primary CTA buttons: `transition-[color,background-color,border-color] duration-100` plus
  `active:scale-[0.97]` on press — a fast (100ms), understated scale-down on click, no bounce/
  spring easing.
- The homepage hero CTA's trailing arrow icon animates on hover: the shaft fades in
  (`opacity-0` → `group-hover:opacity-100`) while the arrowhead translates right
  (`group-hover:translate-x-0.5`), both over `duration-150 ease-out`, and both explicitly wrapped
  in `motion-reduce:transition-none` — a verified, accessible micro-interaction that respects
  `prefers-reduced-motion`.
- Theme-card preview images scale up slightly on hover (`group-hover:mint-scale-105
mint-transition-all`) inside the `/docs/themes` picker.
- No scroll-triggered, WebGL, or Lottie-class motion was found anywhere in the crawled pages —
  motion here is exclusively small, CSS-transition-level polish on interactive elements, not a
  spectacle layer.

## Hero Anatomy

**Blog post itself**: headline "The Next Chapter of Mintlify Themes" at
`text-[40px] font-semibold leading-[110%] tracking-[-0.8px]`, byline "James Baduor (Design) ·
Feb 13, 2025 · 4-minute read," a featured OG image
(`/images/featured/the-next-chapter-of-mintlify-themes.webp`), no video, no gradient
background — a plain article-page hero inside Mintlify's own docs-style layout (this blog is
itself hosted as a Mintlify doc page).

**Homepage** (the company's actual flagship hero, useful as the fuller reference point):
headline "The knowledge infrastructure agents build on" set in `font-serif` (ABC Arizona Flare)
at 2.5rem→3.125rem with tight negative tracking (−0.8px → −2px at desktop), subheadline
"Self-updating documentation for **startups**, **enterprises**, and **agents**." with the three
audience nouns bolded inline. Two CTAs: "Get started" (primary, invert-token button, links to
`app.mintlify.com/signup`) and "Sign up with Google" (secondary, full Google multi-color 'G'
logomark inline). No gradient, no 3D, no WebGL — a flat-color hero with a documentation
screenshot as the supporting visual (light/dark variants swap by theme), sitting beside the
headline rather than behind it.

## Components of Note

- **`ThemeCard`** — the component used on `/docs/themes` itself: a clickable card showing a
  theme screenshot (`https://raw.githubusercontent.com/mintlify/docs/refs/heads/main/images/themes/{value}.png`),
  title, a quoted `"value"` slug (e.g. `"maple"`) used as the literal `docs.json` config value,
  a one-line description, and a "See preview →" link with a hover-animated arrow — that link
  goes to a **live, fully deployed demo site** per theme (`maple.mintlify.site`,
  `linden.mintlify.site`, etc.), not a static screenshot gallery.
- **Per-theme "Starter Kit"** — each theme demo's `<title>` reads e.g. "Welcome to Maple - Maple
  Starter Kit," confirming these are cloneable starting templates, not just preview skins.
- **`docs.json` font role split** — three independently configurable font slots (headings /
  body / code), each settable to a Google Font or a self-hosted file — verified on the Fonts
  doc page.
- Homepage: a live-feeling "Agents at work today" metrics rail (Pages read / Search requests /
  API requests / Feedback provided / Content updates) with animated counters, a customer-logo
  row (Anthropic, Amazon, Coinbase, Cognition, Solana, AT&T), and testimonial cards from
  Coinbase/Vercel/HubSpot/Zapier/Axiom/Greptile executives.
- **Could not verify** the prior scout's specific claim of a "full Shiki syntax-theme library"
  that lets code blocks "carry brand color." No literal mention of Shiki appeared in any crawled
  page. The only code-block-adjacent config surfaced was a `"codeblocks":"system"` styling flag
  in page metadata (light/dark/system follow), which is plausible-but-unconfirmed evidence for
  brand-aware code block theming — flagging as **not determined** rather than asserting it.

## Voice & Copy

- Opening thesis, verified quote: _"great documentation should feel like a natural extension of
  a company's product experience."_
- Problem framing: _"What began as ad hoc feature requests revealed a deeper pattern"_ — teams
  were "spending countless hours customizing" because "different industries have fundamentally
  different documentation needs."
- Closing aspiration: _"documentation can feel tailored, not templated."_
- Core design-system framing, verified quote: _"Think of it as a true design system: themes
  provide strong opinions and defaults for different use cases, while docs.json gives you
  granular control to fine-tune them — without fighting the system."_ This is the single most
  reusable line in the piece — it's a near-verbatim articulation of what a component library's
  own docs site should promise.
- Overall voice: plain, declarative, B2B-SaaS-standard — no irony, no hype adjectives, written
  as an engineering/product-team explainer rather than a marketing spectacle piece.

## Distinctive Moves

1. **Themes as a named, cloneable product line, not a color picker.** Nine (originally ten)
   themes each ship their own accent color, tinted neutral-gray ramp, and (in at least one
   verified case, Linden) a full font-role override — selected by one `docs.json` key. This is
   meaningfully deeper than "pick your brand color" theming.
2. **Dogfooding down to the picker page itself.** The `/docs/themes` page that sells the theme
   system is itself authored in their own docs product, using their own `mint-`-prefixed
   Tailwind utilities and their own `ThemeCard` MDX component — the theme gallery is proof of
   the product, not a marketing mockup of it.
3. **The theme catalog outlived the announcement post.** Four of the ten originally-announced
   themes (Sage, Oak, Chestnut, Kernel) are gone from the live product 17 months later, replaced
   by three new ones (Aspen, Sequoia, Luma) never mentioned in the post — a real, verifiable
   instance of a docs/design product evolving faster than its own launch content, which is a
   trend claim in itself worth carrying forward (see below).

## Buzz Evidence

No specific Hacker News / Product Hunt thread was found for the Themes 2.0 post itself (a
targeted search turned up nothing directly about this launch). What is verifiable and recent:
Mintlify raised a **$45M Series B at a ~$500M valuation** (led by Andreessen Horowitz and
Salesforce Ventures, announced ~April 2026, `mintlify.com/blog/series-b`), bringing total
funding to $67M, and states it now powers documentation for **20,000+ companies** reaching
**100M+ people per year** — including named logos Anthropic, Amazon, Coinbase, Cognition,
Solana, and AT&T on its own homepage. This is company-level momentum evidence, not launch-day
virality evidence for this specific blog post — worth being precise about the distinction.

## What Astryx Should Take

1. **Give the Astryx theme/example gallery live, deployed demo links per theme**, not static
   screenshots — Mintlify's biggest credibility move is that "See preview" goes to a real,
   running site (`{theme}.mintlify.site`) built from that theme's actual tokens. Astryx's own
   `$ASTRYX template --list` / theme showcase should point at deployed Storybook or preview-app
   instances per theme, the same pattern.
2. **Split font customization into named roles (heading / body / code), not one global font
   token** — Mintlify's `docs.json` Fonts config exposes exactly this. Astryx's theme system
   already has a token architecture; make sure a theme can override the _code_ typeface
   independently of the _heading_ typeface, since a distinctive theme (à la Linden) may want
   monospace-everywhere while most want mono reserved for code only.
3. **Tint the full neutral ramp per theme, not just the accent color.** The verified per-theme
   gray-scale differences (Maple's warm/brown grays vs. Palm's cooler grays) are what make each
   theme feel coherent beyond "a different button color." Worth codifying as a rule in Astryx's
   theme-authoring docs: every theme ships its own 50–950 neutral scale, tinted to match its
   accent hue, not a shared gray import.
4. **Author the theme-picker/gallery page itself using Astryx components**, the same
   dogfooding move Mintlify makes with its own `ThemeCard` — this both proves the system works
   and keeps the gallery from drifting out of sync with the real component API (the actual
   failure mode this dossier caught in Mintlify's own post: a launch blog that no longer matches
   the live catalog 17 months on). Practically: generate the Astryx theme gallery from the same
   theme-registry source of truth the components consume, not as hand-authored marketing copy,
   so it can't go stale the way this blog post did.
5. **Keep motion at the "100–150ms CSS transition + reduced-motion guard" tier** verified on
   Mintlify's own homepage CTA (opacity/translate on hover, scale-on-press, `motion-reduce:
transition-none`) — this matches Astryx's existing StyleX-native transition guidance and is a
   good concrete reference implementation to point contributors at.

## Pages Read

- https://www.mintlify.com/blog/the-next-chapter-of-mintlify-themes (target; fetched via WebFetch + raw HTML/CSS download)
- https://www.mintlify.com/ (extra_url from prior scout notes; fetched via WebFetch + raw HTML)
- https://www.mintlify.com/docs/themes (live theme catalog; fetched raw HTML, parsed embedded `ThemeCard` data)
- https://maple.mintlify.site (theme demo #1; raw HTML/CSS fetched + WebFetch summary)
- https://linden.mintlify.site (theme demo #2; raw HTML/CSS fetched + WebFetch summary)
- https://palm.mintlify.site (theme demo #3; raw HTML/CSS fetched)
- https://www.mintlify.com/blog/series-b (referenced for buzz evidence, via web search result, not separately fetched in full)
