---
name: AI in Design Report 2026 (stateofaidesign.com)
url: https://stateofaidesign.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

The second annual **AI in Design Report 2026**, produced by **Designer Fund** (design-community org, est. 2013) in partnership with **Foundation Capital** (VC firm). It surveyed 906 designers across 60+ countries (fielded Q1/March 2026, skewed toward AI adopters) and ran 20-25+ interviews with design leaders at Anthropic, Stripe, Linear, Notion, DoorDash, Cursor, Samsara, Watershed, Airtable, Ramp, Grammarly, AirOps, Abridge, Framer, Maze, Miro, Shopify, Sierra, Substack, and Superhuman. Content is organized into three long-form chapters — **Tools** ("The great toolstack shakeup"), **Craft** ("Craft in an age of infinite output"), **Teams** ("Redesigning the design team") — plus seven partner case-study pages (Anthropic, Stripe, Notion, Shopify, Linear, Framer, Sierra). Credits (from `/about`): project lead Robyn Park; editorial Nathalie Arbel; research/data Nili Metuki; creative direction Heather Phillips (independent design leader, former design director at Slack) with design studio **++hellohello** (Montevideo, Uruguay); video by Seed Stories; dev support Fabian Albert. Site is built in Framer ("Made in Framer by ++hellohello," per footer + meta generator tag).

## Typography

- Display headlines (hero "AI in Design Report 2026," chapter titles "Tools," case-study heads like "How Anthropic designs AI with AI?") use a **bold, tight-tracked grotesk/geometric sans** — large scale, negative letter-spacing, single-story lowercase forms, black-on-white/black-on-accent-color contrast.
- **Exact typeface name not determined.** The site is a client-rendered Framer React export (page markup loads via `.mjs` modules, e.g. `framer.DF72RTI8.mjs`, `motion.DfDsdjVD.mjs`); the only font-family declared in static HTML is Framer's CSS-variable fallback chain resolving to `Inter, Inter Placeholder, sans-serif`. But the rendered headline in the site's own promotional imagery visually diverges from Inter's proportions (tighter tracking, different letterform geometry), so this fallback almost certainly never fires and the true custom webfont could not be confirmed without a rendered browser session (Playwright MCP was locked by a concurrent crawl this session).
- Micro-labels/"eyebrow" copy ("FIRST CHAPTER," "CASE STUDY," "BY DESIGNER FUND IN PARTNERSHIP WITH FOUNDATION CAPITAL") are tracked-out uppercase in the same grotesk family — variable letter widths confirm this is **not** a true monospace, just small-caps tracking used as a kicker convention throughout.
- Large numerals used as wayfinding/brand devices: "26" inside the badge lockup, giant ghost numeral "01" marking chapter one.
- Chapter body copy carries a **posted reading-time estimate** (25-30 min per chapter) — signals long-form editorial intent over marketing-skim copy.

## Color

- Base system is **black (#000000) on white (#ffffff)**, light mode only — no dark-mode toggle observed.
- One saturated accent, **coral-orange, sampled #fe7141** (flat fill, pixel-averaged from the "Tools" chapter promotional card, no grain) used behind eyebrow labels + chapter titles as a chapter-identity block.
- Hero background is not a flat color but a **grain/noise photographic collage** built from irregular rectangular fragments; pixel-averaged samples across fragments (all textured, so these are approximations of a noisy surface, not flat swatches): dusty blue-gray ~#a9bdc2, dark teal-gray ~#6b8c8f, magenta-pink ~#f48deb, cream/off-white ~#eeede2, a second coral-orange grain block ~#f97c5c.
- A fixed black badge lockup ("AiiD'26" — white wordmark + trademark glyph on a black rounded-rect chip) recurs pixel-identical across every page's promotional card, independent of that page's own accent color — a single brand anchor that doesn't reskin per section.

## Layout

- **Homepage**: full-bleed collage strip across roughly the top 45% of the hero — a grid of unevenly sized photo/gradient fragments, overlaid with a thin white-stroke rectangle that cuts across two fragments (scrapbook/moodboard collage, not one hero photo or a smooth gradient mesh). Below it: plain white canvas, large left-aligned two-line headline, byline lower-left, "Scroll to Discover" + down-arrow lower-right.
- **Chapter pages** (Tools/Craft/Teams): a reused **four-quadrant card template** — solid-black quadrant top-left (holds the "AiiD'26" mark), halftone/cross-hatch dot-pattern "blob" quadrant bottom-left (doubling as a giant chapter numeral, e.g. "01"), soft-focus grain-gradient quadrant top-right, and a solid accent-color quadrant bottom-right carrying the eyebrow label + chapter name. Only the accent color and imagery swap between chapters.
- **Case-study pages** (e.g. `/cases/anthropic`): two-column split — halftone blob quadrant left; white panel top-right with "CASE STUDY" eyebrow + bold headline; full-bleed candid photograph of the named interviewee bottom-right; the partner's name reset in a bespoke wordmark (Anthropic rendered as **"ANTHROP\C"**, echoing Anthropic's own logotype convention of substituting a letter with a backslash).
- Chapter bodies use a numbered "01-04 Key Takeaways" recap scaffold, three-column data-viz grids interleaved with full-width pull-quote blocks, and boxed "IN PRACTICE" callouts.
- Top nav: About / Tools / Craft / Teams, then a second tier of seven partner-company names (Framer, Sierra, Shopify, Notion, Stripe, Linear, Anthropic) that double as links into the case studies. Footer repeats the same list plus "©2026 Designer Fund, Foundation Capital" and "Made in Framer by ++hellohello."

## Motion

**Largely not determined this session.** The Playwright MCP browser was locked by a concurrent crawl session, so no live interaction/scroll-behavior inspection was possible; WebFetch's markdown conversion and the static HTML source (client-hydrated via Framer's own `.mjs` bundle, including a loaded `motion.*.mjs` module) don't expose the actual easing curves, scroll-trigger thresholds, or hover choreography. What can be said: the presence of Framer's native `motion` library module in the page's script manifest confirms _some_ JS-driven animation ships, consistent with (but not proof of) standard Framer scroll-reveal/fade patterns. No claim about specific motion techniques should be trusted beyond this.

## Hero Anatomy

- Headline: **"AI in Design / Report 2026"** (two lines), oversized bold grotesk, black, filling most of the lower-hero width in a left-aligned column.
- Subline directly under nav/badge, small-caps: **"BY DESIGNER FUND IN PARTNERSHIP WITH FOUNDATION CAPITAL."**
- No CTA button in the hero — the only affordance is text **"Scroll to Discover"** with a down-chevron icon, framing this as a report to read, not a product to sign up for.
- Distinctive structural choice: the grain-collage imagery sits **above** the headline as a separate strip, never behind or overlapping it — sidesteps the legibility/contrast tradeoff of text-over-image entirely.

## Components of Note

- **"AiiD'26" badge lockup** — black rounded-rect chip, white "AiiD" + trademark mark, condensed "26" — reused identically as a fixed masthead/favicon-like brand chip on every page and every social-card image.
- **Halftone/cross-hatch "blob" graphic** — a black-and-white dot-pattern amoeba/map-like shape reused across chapter and case-study cards, paired with a giant ghost chapter numeral. Functions as this report's stand-in for a data-visualization motif without being an actual chart.
- **Per-partner wordmark reskins** on case-study pages (Anthropic's "ANTHROP\C") — bespoke micro-identity treatment per interviewee company rather than a flat greyscale logo strip.
- **Two bespoke internal tools**, per the design studio's own case study (hellohello.is/case-studies/stateofai): one auto-styles any uploaded image into the report's visual language, and one auto-generates on-brand data-visualization charts. The report's own chart/pull-quote system is tool-templated, not hand-designed per chart.
- Chart vocabulary spans paired year-over-year bar charts, stacked/segmented bars for multi-option survey questions, and donut/pie charts for single-select breakdowns — all styled with the same black/white/coral-orange system.

## Voice & Copy

- Editorial/trade-report register, not startup-marketing register: section headers state findings as sentences ("Frequent AI usage jumped from 54% to 91% in one year," "Claude has overtaken ChatGPT as the primary general AI tool") rather than benefit claims.
- Named, attributed practitioner quotes carry the argument — e.g. Katie Dill (Head of Design, Stripe): _"AI is sparking a creative renaissance in design. With new instruments, it's our chance to compose wholly new music."_ Karri Saarinen (Co-founder/CEO, Linear): _"Design is the planning stage and code is the implementation stage."_ Joel Lewenstein (Head of Product Design, Anthropic): _"Code is one more tool. There are no excuses anymore..."_ — mixed with anonymized-by-role quotes ("Individual Contributor, Growth-stage company") for statistical breadth.
- A verbatim tweet is quoted with handle and date (@kelin_online, March 20, 2026: _"you don't have to keep up with all the AI stuff, it's mostly noise. Just pick one tool..."_) sitting inside the same chrome as named executive quotes — vox-pop voice treated as equally citable.
- Self-aware structural devices — "IN PRACTICE" callouts, "Where do we go from here?" section-closers, numbered "01-04 Key Takeaways" recaps per chapter — signal the report expects to be referenced, not just skimmed for one headline stat.

## Distinctive Moves

1. **Grain/noise photographic collage as hero backdrop, structurally separated from the type** (imagery sits above the headline, never behind it) — a legibility-first alternative to the smooth "aurora gradient behind the headline" cliché the crawlset's own Performative-UI entry satirizes.
2. **Halftone dot-pattern "blob" reused as a cross-page identity texture** that stands in for both a logo mark and a data-visualization motif — cheap to reproduce, instantly recognizable, requires no chart library.
3. **Per-partner wordmark reskinning on case-study pages** (Anthropic's backslash) — treats each interviewee's brand as a design object worth a bespoke touch, not a flattened greyscale logo-wall entry.

## Buzz Evidence

- **Second-edition cadence confirmed independently**: Foundation Capital's own site separately hosts a prior post, _"The State of AI in Design: What we learned from 400+ designers"_ — confirms a real 2025-to-2026 first-to-second-edition run and roughly a 400+ → 906 respondent jump year over year. [S, foundationcapital.com, secondary]
- **Seven marquee design orgs** (Anthropic, Stripe, Notion, Shopify, Linear, Framer, Sierra) agreed to be named case-study partners with on-record practitioner interviews — real institutional access, beyond anonymous survey respondents.
- **Press pickup**: Fast Company covered it under the headline _"Why the design industry is about to be full of 'Frankenjobs'"_ (fastcompany.com/91543989). Could not verify the article's direct citations — WebFetch was blocked with HTTP 403 — so treat the coverage as confirmed-to-exist (via title/URL) but its content as **not determined**.
- **Independent critical response**: a rebuttal post on houseofgai.com argues the report's headline 91%-weekly-AI-adoption stat is skewed because _"86% of its respondents are product designers at tech companies. Just 12% work in an agency"_ — real methodology pushback, evidence the report generated enough attention to draw dedicated critique rather than uncritical reblogging.
- Also referenced/summarized by UI UX Showcase and ArtificialStudio ("The year designers stopped being just designers") per search results — not independently fetched/verified this session.
- A "Framer gallery" URL for this project (`framer.com/gallery/ai-in-design-report-2026`) surfaced in search results, but the live URL now 302-redirects to Framer's general community-gallery page — **could not confirm this specific listing is still live**; treat as unverified rather than a confirmed current Framer-showcase feature.

## What Astryx Should Take

1. **Copy-paste-ready code over abstract prop tables.** The report's own headline finding — 50% of designers have shipped AI-generated code to production, 76-85% use AI coding tools — is the strongest evidence in this dossier for Astryx's `{Name}.doc.mjs` examples and CLI (`astryx component <Name> --dense`) to lead with complete, directly-pastable code blocks an agent can lift verbatim, over prop-by-prop reference tables. (This corroborates, with real percentages, the original scout take on this entry.)
2. **Eyebrow-label + numbered-recap scaffold** ("FIRST CHAPTER"-style tracked kicker, "01-04 Key Takeaways" closer) is a cheap, reusable device for Astryx's own long-form docs (Architecture, Component Authoring Guide) to read as authored long-form rather than a wiki stub.
3. **One fixed brand chip reused unchanged everywhere** (their "AiiD'26" badge) is a low-cost way to give a docs/marketing site a single recognizable anchor — worth adopting an equivalent small fixed lockup for Astryx's own site header/favicon/OG cards instead of re-deriving a hero treatment per page.
4. **Separate hero imagery from hero type entirely** (collage sits above the headline, never behind it) is a directly reusable, contrast-safe, accessibility-friendly alternative to text-over-image/gradient heroes for an Astryx marketing homepage.
5. **Treat internal tooling as a first-class deliverable.** The studio built two bespoke tools (image auto-styler, chart auto-generator) specifically to keep the report's visuals consistent — mirrors Astryx's own CLI-as-design-system-interface model (`astryx component`, `astryx template`, `astryx swizzle`) and is worth citing as external precedent for "the tooling _is_ the design system."
6. **Carry the methodology caveat, not just the stat.** The houseofgai critique (86% product designers at tech companies driving the 91% figure) is a useful caution for Astryx's own AI-vibeability messaging: don't extrapolate "half of designers ship AI code" into "AI-generated Astryx integrations always work" without the same scoping honesty.

## Pages Read

- https://stateofaidesign.com/ (homepage — fetched twice via WebFetch plus raw HTML retrieval for CSS/meta inspection)
- https://stateofaidesign.com/chapters/tools
- https://stateofaidesign.com/chapters/craft
- https://stateofaidesign.com/chapters/teams
- https://stateofaidesign.com/about
- https://stateofaidesign.com/cases/anthropic (title + social-card image only)
- https://www.hellohello.is/case-studies/stateofai (design studio's own case study on this project)
- https://www.framer.com/gallery/ai-in-design-report-2026 (attempted — resolves via 302 redirect to framer.com/community/gallery/, specific listing not confirmed live)
- https://www.houseofgai.com/blog/ai-in-design-2026-report-graphic-designers (independent critique)
- https://www.fastcompany.com/91543989/ai-in-design-design-jobs-2026 (attempted — blocked, HTTP 403)
- Social-card images inspected directly (downloaded + pixel-sampled): `framerusercontent.com/assets/A09Xgh73SLRYZSBFXJ9fBxyvHlY.png` (homepage), `framerusercontent.com/images/DgSv0PpcXpmYcKLJFNUC50pHjY.png` (Tools chapter), `framerusercontent.com/images/euNwcGvGZssTjMcp4jIFpYmbrQ.jpeg` (Anthropic case study)
