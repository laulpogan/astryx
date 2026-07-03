---
name: Granola rebrand
url: https://www.granola.ai/blog/a-new-look-for-granola
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

# Granola rebrand

## What It Is

"Meet the new look Granola" is a first-person rebrand-announcement blog post, published February 2, 2026 and signed by cofounder Sam Stephenson ("Cofounder, design"), documenting Granola's (an AI meeting-notetaker) mid-2026 identity overhaul with London studio Ragged Edge. It reads as a memoir rather than a press release — sectioned "Where we started / Where we're going / The new brand / What's next" — and states its own thesis plainly: the old identity made Granola "look like any other SaaS company," so the goal was a mark and type system that feels "approachable and optimistic, a bit rough around the edges, but sharp enough to feel like a serious tool." The post is also a live specimen of the rebrand: it's built with the actual new type/color/token system it describes, and the wider granola.ai site (verified separately) ships the same system into product marketing.

## Typography

- **Quadrant** — display serif, described in the post's own words as "a slightly mechanical slab serif for display." Verified live: applied to every `h1`/`h2` via a self-hosted `next/font` stack (computed `font-family: __quadrant_2f05b1, __quadrant_Fallback_2f05b1` — a proprietary/licensed face, not a Google Font). On the blog post, the `h1` ("Meet the new look Granola") computes to **68px / 68px line-height** (i.e. ~1.0 leading), **weight 400** (regular — the slab does its work without needing bold), **letter-spacing -1.02px** (tracking pulled tight at display size). Section `h2`s ("Where we started") compute to ~30px, same weight/family. On the homepage, the hero `h1` ("The AI notepad for back-to-back meetings") uses the same face at comparable large scale, left-aligned across four lines.
- **Melange** — UI/body sans, described as "a neutral but subtly characterful UI font." Verified live: computed `font-family: __melange_3929d6, __melange_Fallback_3929d6` on `body`, nav links, and paragraph copy — also self-hosted, not a system font. Blog-body paragraphs compute to **24px / 39px line-height** (~1.6 leading, generous), weight 400; smaller UI/meta text (byline) drops to 14px/18px. Renders as a clean grotesk/humanist sans in the nav ("Features / Enterprise / Pricing / Blog / Careers") — no visible serif detailing at that size.
- Both faces are self-hosted via Next.js font optimization (hashed `__facename_hash` class pattern), confirming they're custom/licensed assets rather than a CDN webfont — consistent with a deliberate, owned type system rather than a quick Google Fonts swap.
- Not determined: full weight range shipped for either face (only weight 400 was observed in the instances sampled); whether Quadrant or Melange is used anywhere in italic or bold cuts.

## Color

- The CSS custom-property namespace itself is a brand move: every design token is prefixed **`--oats-`** (a granola/breakfast pun baked into the codebase), organized as `--oats-fill-*` (surface fills), `--oats-ink-*` (text colors), and `--oats-border-*` (borders/focus rings) — a semantic fill/ink/border split, not raw color-name variables. 79 such custom properties were found on `:root`.
- Verified hex values (read directly from computed `:root` styles, not inferred):
  - `--oats-fill-primary` / `--oats-ink-primary`: **#292929** — a near-black "ink," used for body text and dark fills; matches the sampled `body` text color `rgb(41,41,41)`.
  - `--oats-fill-accent`: **#5b6f00** — a deep olive green; this is the exact fill of the homepage's primary "Download for free" CTA pill.
  - `--oats-fill-accent-hover`: **#4c5616**.
  - `--oats-ink-accent`: **#788c15** — a lighter moss green, presumably for accent text/links.
  - `--oats-fill-danger` / `--oats-ink-danger`: **#e95d3d** / **#bd4a30** — a coral-red, seen live as the "hang up call" button color inside an embedded product screenshot.
  - `--oats-border-focus`: **#b2c24899** (i.e. base color `#b2c248` at ~60% alpha).
  - `--oats-ink-primary-inverse`: **#fcfcf8** — a warm, near-paper off-white (not pure white) for inverse/dark-surface text.
  - `--oats-fill-soft-opaque`: **#eaebe5**; `--oats-fill-input-disabled`: **#f7f7f2** — warm neutral grays, slightly toward cream, not cool gray.
  - Page canvas itself (`body` background) is pure **#ffffff**, so the warm off-whites are reserved for elevated "surface" elements (cards/inputs), not the base canvas — the hero's embedded note-card in the homepage screenshot reads visibly creamier than the page background around it.
- Marketing-only palette, confirmed by direct pixel/DOM sampling on the blog post: a large logo-lockup card and a full-bleed section both compute to `rgb(178, 194, 72)` = **#b2c248** — the _exact same hex_ as the `border-focus` token's base color, reused at full opacity as a bold brand-collateral background. The blog post's inline "campaign card" strip also showed hot pink, mustard yellow, and black cards (each carrying oversized cropped type or macro photography) — i.e. a punchier campaign-only palette that extends past the muted product-UI green.
- Net color story: an olive→moss→chartreuse green ramp (#5b6f00 → #788c15 → #b2c248) grounded in a warm paper-white/near-black pairing (#fcfcf8 / #292929), one coral-red utility color (#e95d3d), with brighter pink/yellow/black reserved for marketing-only collateral. This is what the post means by "we kept the green but gave it a proper system" — verified as a real semantic-token system, not just marketing language.

## Layout

- **Blog post:** single-column centered article, generous side margins (screenshot proportions suggest roughly a 680–720px reading column), centered headline + centered byline (name + date), then left-ish-aligned body paragraphs at the wide 24px/39px leading described above. Section `h2`s break up four narrative beats. Media blocks (one large rounded-corner block, then a horizontal strip of ~4–5 square "campaign cards," then a 2-up row of a physical zine mockup + giant logo lockup) are dropped inline between paragraphs — the post itself functions as a lightweight in-context brand gallery, not just prose.
- **Homepage hero:** two-column, NOT centered — large left-aligned headline block (H1 + two-line subhead + CTA + microcopy) on the left, a chrome-framed live product screenshot on the right. Below the fold: a three-tab "Before the meeting / In the meeting / After the meeting" narrative section, each tab paired with its own screenshot; a testimonial wall; a feature grid; a pricing teaser.
- Not determined: an explicit documented spacing scale or grid-column system (no evidence of a spacing-token equivalent to the color-token system was found in the sampled CSS custom properties).

## Motion

- Not extensively determined from what was directly observable. No `<video>` element was present on the blog post (a large rounded-corner block that appeared solid black at capture time could not be confirmed as video vs. an unloaded image/embed poster frame — flagging rather than guessing).
- A `transition: all` shorthand was found on at least one header interactive element, consistent with simple hover/color fades rather than any elaborate scroll-driven choreography; no WebGL, Lottie, or parallax was observed on either page fetched.
- **Verdict: restrained.** Nothing here suggests kinetic type, scroll-triggered reveals, or gradient/aurora animation — consistent with the "calm" positioning stated in the post's own copy.

## Hero Anatomy

Homepage (`granola.ai`), verified live:

- **H1:** "The AI notepad for back-to-back meetings" — Quadrant slab serif, large scale, left-aligned, wraps to four lines, regular weight, near-black ink (#292929).
- **Subhead:** two short declarative lines in Melange sans — "Notes, actions and memory." / "Without a meeting bot." — the second line doubles as the product's core differentiation claim.
- **CTA:** one solid pill button, filled with the exact `--oats-fill-accent` olive green (#5b6f00), label "Download for free" plus a small down-arrow glyph. No secondary/ghost CTA competing for attention.
- **Trust microcopy:** "Available for macOS, Windows, iOS, Android" beneath the button, with a small checkmark-badge icon.
- **Right-side visual:** not an illustration or gradient — a macOS-chrome-framed (red/yellow/green traffic-light dots), realistic rendering of the actual product: a note titled "Q3 GTM sync" with real-looking bullet content, plus a floating two-participant video-call thumbnail pinned to the bottom-right corner of the card. This single image _is_ the product pitch made literal: notes exist alongside a real call, with no bot visibly joining it.
- **Background:** plain white, zero gradient/glow/aurora treatment.

Blog-post "hero" (top of the rebrand announcement itself): centered headline + byline, no image at all until the first body paragraph — restraint carried into the announcement of the redesign, not just the redesign's own product pages.

## Components of Note

- **Live product UI as marketing proof, everywhere.** The homepage hero, the three-tab before/during/after section, and even the blog post's own brand-collateral strip all embed what reads as a real (not illustrated) product screenshot — including one card explicitly showing the exact `--oats-fill-accent` green "pause" button and `--oats-fill-danger` coral "hang up" button live inside a call UI.
- **Named, attributed testimonial wall** — not generic star ratings: quotes from Karri Saarinen (CEO, Linear), Olivia Moore (Partner, a16z), Guillermo Rauch (CEO, Vercel), Deedy Das (Partner, Menlo Ventures), and Nat Friedman, each with role/company attached.
- **Inline "campaign card" strip inside the rebrand post** — a horizontal row of square brand-collateral images (typographic collage, macro photography with oversized cropped type, a physical zine/"Field Notes 01" mockup, and one full-bleed giant logo lockup) functioning as an embedded press kit rather than a link-out to a separate brand PDF.
- **Plain, uncluttered nav** — five text links (Features / Enterprise / Pricing / Blog / Careers) plus one CTA pill; no mega-menu.
- **Design-token naming as a brand surface** — the `--oats-` prefix across `fill-*`/`ink-*`/`border-*` tokens is a component of the brand that lives only in the codebase, not the visible UI.

## Voice & Copy

- First-person, cofounder-signed, memoir-structured ("Where we started" / "Where we're going" / "The new brand" / "What's next"), closing with a personal signature: "Sam Stephenson, Cofounder, design."
- Explicit self-critique, quoted directly: _"Our original identity was thrown together in a few frantic days, and it showed... Show our old homepage to someone who'd never used Granola and we looked like any other SaaS company."_
- A stated core philosophy, repeated as a named phrase: **"progress over process."**
- Granular internal credit — individual team members named by first name for each surface: "Tikhon and Luke on the desktop app, James on the website, Ru and Tom on iOS."
- Tone target stated in the post's own words: _"approachable and optimistic, a bit rough around the edges, but sharp enough to feel like a serious tool. Calm, but with energy underneath."_
- Homepage product copy mirrors this: short, declarative, jargon-free fragments — "Humans in the room, not bots." / "Private by default, easy to share if you choose." — no "leverage/empower/unlock" SaaS-speak.

## Distinctive Moves

1. **A hand-drawn, deliberately imperfect logomark, framed explicitly as anti-generic** — the post states outright: _"The new logo is hand-drawn and deliberately imperfect. It doesn't look like something a committee would produce, which is the point."_ Confirmed visually: the live mark is a spiral/coil shape forming the wordmark's "G." This is the rebrand's central bet, and it's the one the public actually argued about (see Buzz Evidence) — a rare case where the intentional imperfection became the whole conversation, for better and worse.
2. **Brand voice reaching into the CSS token layer itself** — the `--oats-fill/-ink/-border-*` namespace is a pun most users will never see, but it shows the identity system was authored with the same personality at the code layer as at the visual layer.
3. **One continuous product-truth thread from hero to campaign art** — the same real app screenshot (down to the exact accent/danger button hexes) shows up in the homepage hero, the mid-page feature tabs, and the rebrand post's own "brand card" strip — literally realizing the post's stated goal that "everything finally feels consistent and part of the same world."

## Buzz Evidence

- **Funding, primary-confirmed in part:** Granola's own site displays a promotional nav image reading "Granola raises $125M to put your company's context to work" — so the **$125M** figure is confirmed directly from Granola's own site `[P, granola.ai, <30d as observed]`. The **$1.5B valuation**, a **March 25, 2026** close date, and lead investors (Index Ventures' Danny Rimer, Kleiner Perkins' Mamoon Hamid) come from a secondary aggregator (doolpa.com) that was not cross-checked against a primary TechCrunch/press release — treat those specific figures as **`[S, secondary, unverified]`**, not confirmed.
- **Polarized public reaction to the new logo** — real, quoted user criticism surfaced via a competitor's blog relaying an Instagram post: _"Hate the new color," "Looks like a wellness brand," "What's that swirl?"_ `[S, secondary via hedy.ai, unverified against the original post]`. A widely-repeated joke comparing the spiral mark to bodily anatomy also surfaced in search results but could not be traced to a specific, checkable original post — noted as **unverified secondhand color**, not fact.
- **A specific "60%+ user dissatisfaction" statistic surfaced in one search result but had no traceable source** — explicitly excluded from this dossier as unverifiable; do not cite it.
- **Design-press pickup:** covered as a case study by Abduzeedo (design blog) and referenced in at least one monthly design-trend roundup (ideasondesign.com's February 2026 issue) alongside Anthropic's Claude Super Bowl campaign — evidence the rebrand registered with design media, not just Granola's own user base.
- Caveat worth carrying forward: the source used to characterize the backlash (hedy.ai) is itself a competing AI-notetaker's blog, spinning the criticism into a competitive narrative ("Granola is prioritizing brand loyalty over feature parity like Google's free Gemini notetaker") — its framing should be read as interested commentary, not neutral reporting.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Name the token layer with personality, not just semantics.** Granola's `--oats-fill/-ink/-border-*` namespace proves a design system's _internal_ naming can carry brand voice, invisible to end users but visible to every engineer who touches it. Astryx's own token file could adopt a similarly memorable, on-brand prefix instead of a generic `--color-*`, and document the pun in `astryx docs tokens` — a cheap, durable distinctiveness lever.
2. **Ship a real accent ramp off one semantic role, not one flat hex.** Granola's olive → moss → chartreuse progression (#5b6f00 → #788c15 → #b2c248) is all driven from one `accent` role (fill/ink/highlight variants) and reused consistently in both product UI and marketing collateral. Astryx's accent token should likewise expose multiple luminance/saturation steps of one hue, used the same way in both the component library and the marketing site, rather than one fixed value copy-pasted everywhere.
3. **Put the real, live component composition in the hero — in a realistic frame, not an illustration.** Granola's homepage hero literally renders its own note-taking UI (with the "no bot" video-call proof floating on top) instead of an abstract graphic. Astryx's own marketing/docs homepage should do the parallel move: an actual rendered Astryx component composition inside a realistic app-window frame as the hero visual, proving the system rather than describing it in prose.
4. **Treat a "new theme" or rebrand announcement post as a mini brand gallery, inline.** Granola's blog post embeds a strip of campaign-card images functioning as a lightweight, in-context press kit. Astryx could use the same pattern the next time it ships or documents a new theme: show swatches/lockups/example screens inline in the announcement, not just link out to a separate style-guide page.
5. **Flag the real risk of "deliberately imperfect."** If Astryx ever showcases a hand-drawn/imperfect mark as an "anti-generic" trend worth adopting, this dossier is the honest counter-example to cite: Granola's own imperfect mark drew genuine public mockery ("what's that swirl?"). The upside (feels human, not committee-made) has to be weighed against the documented downside (reads as unfinished/unclear to a real slice of the audience) — don't present "imperfect-by-design" as a risk-free move.

## Pages Read

- https://www.granola.ai/blog/a-new-look-for-granola (primary source — fetched via WebFetch and inspected live in-browser, including computed CSS/DOM values)
- https://www.granola.ai/ (homepage — inspected live in-browser, including computed CSS/DOM values and screenshots)
- https://abduzeedo.com/granola-brand-identity-design-ragged-edge
- https://www.creativeboom.com/insight/ragged-edge-redraws-the-horizon-with-never-be-the-same-again/ (checked — does not discuss the Granola project, only Ragged Edge's own identity)
- https://www.ideasondesign.com/p/design-trends-february-2026
- https://www.canny-creative.com/news/ragged-edge-rebrands/ (checked — does not discuss the Granola project)
- https://www.hedy.ai/post/granola-redesign-alternative-hedy/
- https://www.instagram.com/p/DUYgmHOjSFA/
- https://doolpa.com/news/granola-125m-series-c-1-5b-valuation-enterprise-march-2026
