---
name: Claude (Anthropic product surface)
url: https://claude.ai
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Claude is Anthropic's consumer/developer AI assistant, and — as of this crawl — its web presence is split across three distinct properties rather than one: **anthropic.com** (corporate mission, research, policy, safety framing), **claude.com** (product marketing — overview, pricing, Claude Code, Claude Design), and **claude.ai** (the chat app itself, which also doubles as the host for the blog/news and careers pages — `claude.com/news` and `claude.com/careers` both 302-redirect back to `claude.ai/news` and `claude.ai/careers`). Its warm off-white/terracotta visual identity — designed by agency Geist — has become distinctive enough in the AI-product category that it is now reverse-engineered and redistributed by third parties (shadcn theme, npx-installable starter kit, brand-color aggregator pages), which is itself the strongest evidence that it reads as a recognizable "look" rather than a generic template.

## Typography

Verified facts diverge by source, so this is reported with sourcing rather than as one flat answer:

- **Brand-documented pairing** (Geist agency case study, `geist.co/work/anthropic` — primary/agency source): the typographic system is built on **Styrene** (Commercial Type, designed by Berton Hasebe — two sub-families, a wider "A" and narrower "B") and **Tiempos** (Klim Type Foundry).
- **Role split per a design-publication writeup** (`type.today/en/journal/anthropic`): Styrene is applied to **headlines and subheadings**; Tiempos is used for **body text** — i.e. a sans-serif-display / serif-body pairing, the inverse of the "serif headline, sans body" pattern common elsewhere in this survey (Cardboard, Koah, Wispr Flow).
- **Live font detection on the marketing site** (FontOfWeb's cached scan of `anthropic.com/pricing`, tertiary but mechanical/objective): confirms **Tiempos Text** and **Styrene A Web** are the actual `@font-face`s loaded — corroborates the brand system is in production, not just aspirational.
- **First-hand critique of the claude.ai product app itself** (Dear Designer Substack, "My Styrene Soul"): describes a _third_ face, **Galaxie Copernicus Book**, used for headers inside the app chrome ("open and wonderfully readable"), **Styrene B** for body copy ("rounded and slightly squishy"), and **Tiempos Text** for supporting/secondary text. This suggests the product app and the marketing site may apply the same brand fonts to different roles, or that sources simply disagree — flagged as unresolved rather than papered over.
- **Community reproductions substitute free fonts**: several "recreate the Claude look" blog posts and starter kits use **Fraunces** (italic, free Google Font) as a stand-in for the serif display and **IBM Plex Sans** as a stand-in for Styrene, since Styrene/Tiempos/Galaxie Copernicus are commercial licenses not embeddable by third parties. This is the likely origin of the scout note's "italic serif" claim — it describes the _clone_, not confirmed as literally true of Anthropic's own production CSS. **Not independently verified for the live site; treat "italic serif headline" as unconfirmed.**
- Scout-note claim of "tracked-out subheads" — not independently corroborated by any source fetched; **not determined**.

## Color

No raw CSS was retrievable (WebFetch could not pull `anthropic.com`'s stylesheet directly), so hex values below are a **secondary-source consensus with real variance across sources** — flagged, not asserted as ground truth:

- **Crail** (primary rust-orange/terracotta): `#C15F3C` per one brand-color aggregator; a second source (design-critique blog) instead cites `#C2542D` for the terracotta accent. Both describe the same warm rust-orange family; exact hex not confirmed against live CSS.
- **Cloudy** (neutral light grey): `#B1ADA1`.
- **Pampas** (off-white/cream background): cited variously as `#F4F3EE`, `#F5EFE6`, and `#F0ECE0` across sources — all in the same warm-cream family, exact value **not determined**.
- White `#FFFFFF` as a fourth neutral.
- A community-built shadcn theme approximating "the Claude look" (`shadcn.io/theme/claude`) uses `oklch(0.70 0.14 45)` for its terracotta primary and `oklch(0.97 0.02 70)` for its cream background — a third-party OKLCH approximation, **not Anthropic's confirmed production tokens**, but a useful sanity check that the hue/chroma/lightness of the aggregator hexes above are in the right neighborhood.
- First-hand product-app description (Dear Designer Substack): "a warm beige with subtle brown interactive gradients, speckled with swatches of purple and orange and grey elements," plus a hand-drawn 12-point star mark rendered "in a warm brown orange."
- On the Claude Code product page specifically, blue is used for interactive CTAs/links against a white/light-gray field — a different, more conventional dev-tool palette than the warm terracotta/cream used on the consumer-facing pages, suggesting the palette is not applied uniformly across every product surface.

## Layout

- **claude.com/product/overview**: modular card/grid feature sections organized by use-case verb (Write / Learn / Code / Research / Analyze / Create), a three-or-flexible-column grid, light background, expandable nav categories (Meet Claude, Platform, Solutions, Pricing, Resources).
- **claude.com/pricing**: card-based layout for Free/Pro/Max individual tiers; a **quiz-driven recommendation engine precedes the pricing tables**, personalizing the suggested plan by company size, user count, and compliance needs; Team/Enterprise sections use structured multi-category comparison tables (Features and capabilities / Security and administration / Payment options / Models and usage).
- **claude.com/product/claude-code**: horizontal hero split (left-aligned text + CTAs, right-side product screenshot), a platform-icon row (Terminal, VS Code, JetBrains, Web, Slack), feature cards with icon+headline+description, testimonial cards with company logos, a three-tier pricing block, and a session-sidebar UI pattern (pinned tasks / scheduled items / recent work) shown in-screenshot.
- **anthropic.com** (corporate): strict hierarchical minimalism, five research-team sections presented as clickable cards (Alignment, Economic Research, Interpretability, Societal Impacts, Frontier Red Team), a searchable/sortable publications table, generous whitespace between blocks.
- A hero image asset on claude.com was named `69e130b671817eddec5f2ec8_opus-4-7.webp` — a hex-prefixed asset-hash filename consistent with **Webflow's CMS asset-naming convention**, a concrete (if circumstantial) signal about the marketing site's build stack.
- **Chat composer** (product app, per first-hand review): a rounded input field roughly **300px tall** — "just enough space to write but not to overwhelm nor intimidate" — with three selector chips in grey text inside rounded chat-bubble-style pills.

## Motion

Thin evidence here: WebFetch converts rendered markup to markdown/text and largely can't see JS-driven motion, so most of what's below is inferred from secondary mentions rather than directly observed:

- The news/blog listing implies a carousel ("Next" control for "Latest news") and expandable-menu interactions, implying standard expand/collapse and slide transitions — **not confirmed as a specific library or technique**.
- Claude Design (the AI design tool, launched April 17 2026) is described as offering live "adjustment knobs to tweak spacing, color, and layout" with real-time visual feedback — a live-editing interaction pattern, not a page-load animation.
- No CSS/JS animation library, easing curve, or transition duration could be confirmed from any fetch. **Not determined** — a Playwright-driven pass would be needed to characterize actual motion craft, which was out of scope for this text-fetch-based dossier.

## Hero Anatomy

`claude.com/product/overview`:

- **Headline**: "The AI for Problem Solvers"
- **Sub-hero**: "Meet your thinking partner" with supporting line "Tackle any big, bold, bewildering challenge with Claude."
- **CTA pattern**: primary "Try Claude" button, secondary "Contact sales," plus an inline "Ask Claude" prompt-engagement affordance (a chat-input-as-CTA pattern, same family as bolt.new/v0.app elsewhere in this survey).
- **Background**: light, largely neutral field with a large product/model photo as the dominant hero visual rather than an abstract graphic or gradient.

`anthropic.com` (corporate home):

- **Headline**: "AI research and products that put safety at the frontier"
- **Subhead**: "AI will have a vast impact on the world. Anthropic is a public benefit corporation dedicated to securing its benefits and mitigating its risks."
- Structured as a mission statement first, product portfolio second — the opposite ordering of claude.com, which leads with product benefit copy.

## Components of Note

- **Pricing recommendation quiz** (claude.com/pricing) — a short wizard (company size / user count / compliance needs) that routes visitors to a specific plan before they see the comparison table.
- **Multi-category comparison tables** segmented into Features & capabilities / Security & administration / Payment options / Models & usage, rather than one flat feature grid.
- **Platform-icon row** on the Claude Code page (Terminal / VS Code / JetBrains / Web / Slack) as a compact "works everywhere" proof device.
- **Session sidebar** pattern shown in-product (pinned tasks, scheduled items, recent work) — a persistent-state UI convention worth studying for any Astryx admin/dashboard template.
- **Appearance settings panel** with an explicit light/dark toggle shown in a Claude Code screenshot.
- **Sortable/searchable publications table** (anthropic.com/research) — date, category, and title columns, chronologically ordered.
- **Claude Design** itself: an AI tool (launched Apr 17, 2026) that reads a team's existing codebase/design files during onboarding and auto-applies "colors, typography, and components" to new prototypes, with live spacing/color "adjustment knobs" and exports to Canva/PDF/PPTX/HTML — functionally, Anthropic's own take on the "design-system-for-agents" problem this survey's other entries (Google DESIGN.md, shadcn) are also circling.
- **Chat composer**: rounded ~300px input field with a soft drop shadow and grey selector chips (per first-hand review) — **this directly contradicts the scout note's claim of "no shadows"**; flagged as a place where the prior scout note did not hold up under verification.

## Voice & Copy

Two distinct voices depending on property:

- **anthropic.com (corporate/mission voice)**: safety- and impact-forward, formal register — "AI research and products that put safety at the frontier," "public benefit corporation dedicated to securing its benefits and mitigating its risks."
- **claude.com (product voice)**: warmer, second-person, benefit-first, deliberately non-technical — "Meet your thinking partner," "Tackle any big, bold, bewildering challenge with Claude," "For everyday productivity" (Pro plan), "Get the most out of Claude" (Max plan). Pricing copy favors plain language ("more usage," "higher output limits") over token/rate-limit jargon.
- **Third-party characterization** of the product's tone (Dear Designer Substack, comparing Claude to ChatGPT): "more direct," "more guiding," "more...humane."

## Distinctive Moves

1. **A three-domain property split with mission/product/app kept deliberately separate** — anthropic.com (why we exist), claude.com (what to buy), claude.ai (the actual product, which also absorbs blog/careers via redirect). Most competitors in this survey run everything off one domain; Anthropic's split lets the corporate site stay austere and safety-forward while the product site can be warmer and more sales-oriented — though the redirect pattern (claude.com/news → claude.ai/news) suggests this is an evolving, not fully settled, information architecture.
2. **A sans-display / serif-body type pairing** (Styrene headlines, Tiempos body, per the brand-documented and font-detected sources) runs counter to this survey's dominant serif-display trend — a genuine counter-signal worth naming explicitly, even though a first-hand review of the in-app chrome suggests a third serif (Galaxie Copernicus) may be layered in at the product-app level, meaning the "one pairing" story may not hold uniformly across every surface.
3. **The aesthetic has become a distributable, installable artifact**, not just a look to admire: a shadcn OKLCH theme (`shadcn.io/theme/claude`), an `npx getdesign@latest add claude` starter kit, and multiple brand-color aggregator pages exist purely to let other products clone Claude's palette and type system wholesale — directly matching the crawlset's own framing that this look "has itself become a copied 'aesthetic' template other AI startups now clone," and consistent with a design-system tool ("DESIGN.md") reportedly selling a "Claude Warm Parchment" preset.

## Buzz Evidence

- **Claude Design** (Anthropic Labs, launched April 17, 2026) drew a wide press cycle within weeks — independent write-ups/reviews from DataCamp, MindStudio (three separate posts), Muzli, Builder.io, Anima, UX Pilot, Ocasio Consulting, Flowstep, and PCWorld all appeared in a single search pass, indicating unusually high review-cycle volume for a design tool launch. PCWorld's headline — "I tried Claude Design for half an hour. I'm already locked out for a week" — is a memorable (if double-edged) piece of viral buzz about the tool's token cost.
- **Reverse-engineering as buzz signal**: the existence of a dedicated shadcn theme, an installable starter-kit clone, and multiple brand-asset aggregator pages (mobbin, loftlyy, brandcolorcode-style sites) for Claude's specific visual identity is itself evidence the look achieved recognizability — most company sites in this survey do not have third-party clone kits built for their exact palette/type system.
- **Design-agency credit**: Geist (the design agency, not the Vercel Geist typeface/design-system also indexed in this survey — a naming collision worth flagging) publicly lists Anthropic as flagship work, with an on-record endorsement quoted from Anthropic co-founder Jack Clark.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Name and document the type-pairing ROLE split explicitly**, the way Anthropic's brand system specifies "Styrene for heads, Tiempos for body" rather than just listing two font names. Astryx's own tokens doc should state which face owns headline / body / supporting-text roles, and pick a pairing that isn't the era's default serif-headline-over-sans-body (half this survey's other entries already use that combo) — a sans-display/serif-body inversion, or similar deliberate contrast, reads as more considered.
2. **If Astryx's docs/marketing footprint ever splits across more than one property, decide the split up front and keep it stable** — Anthropic's own architecture (claude.com/news bouncing to claude.ai/news) shows what an unsettled multi-domain split looks like mid-transition. One canonical host per content type (marketing vs. component docs vs. any future "manifesto" page) avoids the same drift.
3. **Ship the design system as a literally installable artifact**, not just a documented look — an `npx`-installable token/theme package or a shadcn-registry-style entry turns "here's our aesthetic" into a copy-paste command. Claude's palette spreading via third-party clone kits is the clearest proof in this whole survey that a strong visual identity gets distributed _because_ it's easy to install, not just because it's admired.
4. **Reuse the pricing-quiz-before-table pattern** (claude.com/pricing) as a "which starting template should I use" wizard on Astryx's own template gallery — a short size/use-case quiz routing to a recommended template before showing the full grid.
5. **Specify component anatomy at the same level of visual precision a design critic would use** — e.g. the composer's ~300px height and shadow treatment were specific enough that a firsthand reviewer could describe and (in this case) contradict a prior scout's claim about it. Astryx's `.doc.mjs` files should carry that same level of concrete visual/spacing detail, not just prop tables, so future audits can verify claims the way this dossier had to.

## Pages Read

- https://claude.ai (blocked — HTTP 403 on direct fetch)
- https://claude.ai/llms.txt (returned minimal content: literal text "Claude")
- https://claude.ai/careers (blocked — HTTP 403, reached via claude.com/careers redirect)
- https://claude.ai/news (blocked — HTTP 403, reached via claude.com/news redirect)
- https://www.anthropic.com (fetched)
- https://www.anthropic.com/claude → redirects to https://claude.com/product/overview (fetched)
- https://www.anthropic.com/pricing → redirects to https://claude.com/pricing (fetched)
- https://www.anthropic.com/news (fetched)
- https://www.anthropic.com/research (fetched)
- https://www.anthropic.com/news/claude-design-anthropic-labs (fetched)
- https://claude.com/product/claude-code (fetched)
- https://docs.claude.com → redirects to https://platform.claude.com/docs (404, not retrievable)

Secondary sources consulted (not claude.ai/anthropic.com/claude.com domains, used to corroborate/contradict the above): `geist.co/work/anthropic` (design agency case study), `type.today/en/journal/anthropic` (design-publication typeface analysis), `deardesigner.substack.com` "My Styrene Soul" (first-hand product-app design critique), `shadcn.io/theme/claude` (community OKLCH theme clone), `getdesign.md/claude/design-md` (community DESIGN.md clone kit) — `mobbin.com/colors/brand/claude` and `loftlyy.com/en/anthropic` were blocked (403) and cited only via search-result snippets, so their hex values are lower-confidence than the rest.
