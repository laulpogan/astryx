---
name: Base UI — Accordion doc page
url: https://base-ui.com/react/components/accordion
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Base UI is an unstyled, accessible React component library from the merged teams behind Radix, Floating UI, and Material UI (published as `@base-ui/react`, MIT license, 10.1k GitHub stars at `mui/base-ui`, current release v1.6.0 as of the page's "View source" link). The Accordion page is one of ~47 component-doc pages that share one template: a live demo with tabbed code, an anatomy diagram, and — the thing worth studying — a fully structured styling-contract reference (props, `data-*` attributes, CSS custom properties) documented per sub-part of the component, not just a prop table. It is the clearest live example in this survey of "headless primitive" documentation done as a literal API contract rather than prose.

## Typography

Verified via `getComputedStyle` in a live render (not guessed from markup):

- **Body text**: `"die grotesk a", system-ui, sans-serif` — Die Grotesk is a retail variable grotesk from **Klim Type Foundry** (Kris Sowersby, Wellington NZ), built "in the long shadow of Helvetica" [S, klim.co.nz, verified 2026-07-02].
- **Headings**: `"die grotesk b", system-ui, -apple-system, "system-ui", "Helvetica Neue", arial, sans-serif` — the bold/display cut of the same family. H1 renders at `700` weight, `34px` on the component page, `42px` on the homepage; letter-spacing normal (no tracking tricks).
- **Code/mono**: `"Paper Mono", monospace` — an open-source (SIL OFL) monospace released by **Paper** (a design tool), built on the foundation of Vercel's Geist Mono, "brought to life under the direction of Vlad Moroz at Paper" [S, contra.com community post, verified 2026-07-02]. Notably, Vlad Moroz is listed on Base UI's own homepage credits table ("So you know who to blame" → Vlad Moroz, Contributor) — the code typeface is self-referential to the team, not a generic pick.
- No web-font preload/CSS-variable font tokens were exposed as `:root` custom properties in the stylesheet — the stack is hardcoded per element, not themed via CSS vars.

## Color

Hard values from computed styles, not visual guessing:

- **Docs pages** (e.g. the Accordion page): background `rgb(0, 0, 0)` / `#000000` pure black; body/link text `rgb(230, 230, 230)` / `#e6e6e6`.
- **Homepage**: background `rgb(19, 19, 19)` / `#131313` — a slightly warmer near-black than the docs pages, same `#e6e6e6` text.
- **No accent color anywhere observed.** Links render in the same `#e6e6e6` as body text, distinguished only by an underline — a fully monochrome/grayscale palette, no blue/purple/brand hue.
- `document.documentElement`'s computed `color-scheme` is `light dark` and `prefers-color-scheme: dark` matched true in this session, meaning the site **does** support a light theme via system preference — but no manual light/dark toggle control was found anywhere on the page (unlike shadcn/ui, Vercel Geist, or GitHub Primer, all of which expose an explicit toggle). `<meta name="theme-color">` is set to `"white"`, suggesting the light variant is the documented/default baseline even though dark is what most visitors will see.
- Card/logo tiles on the homepage ("Made for the makers" grid) use a slightly lighter charcoal fill than the page background, with pure-white monochrome icon marks — the only visual "layer" contrast on the whole site.

## Layout

Classic three-column docs shell:

- **Left sidebar** (fixed, ~205px): categories Overview (Quick start, Accessibility, Releases, Community, About), Handbook (Styling, Animation, Composition, Customization, Forms, TypeScript, llms.txt), Components (alphabetical, 47 entries from Accordion to Tooltip, "OTP Field" tagged "New"), Utils.
- **Center content** (~800px max-width): H1 + one-line description, "View as Markdown" / "View source" utility links, live demo box, Anatomy, Examples, API reference (repeated per sub-component: Root, Item, Header, Trigger, Panel).
- **Right sidebar**: sticky in-page table of contents that mirrors every H2/H3 on the page (Top, Anatomy, Examples → Open multiple panels, API reference → Root/Item/Header/Trigger/Panel).
- Small abstract white glyph mark, top-left, no wordmark text next to it.
- The live-demo box on component pages is a **hairline-bordered rectangle with zero border-radius** — hard square corners throughout the docs UI (code panel, demo box, tables). The homepage's "The fine print" FAQ accordion, by contrast, uses no box at all — just hairline horizontal dividers with `+` icons. Same primitive, two different visual skins on the same site.
- Tables (props / data-attributes / CSS variables) use a slightly darker header-row fill band, hairline row dividers, and a chevron-expand affordance per prop row for verbose type/description content — keeping the default table scan-able while still holding full detail.

## Motion

- Accordion trigger `+` icon rotates 45° into an `×` on open (plain CSS transform, confirmed via screenshot diff, not a JS-driven icon swap).
- Panel expand/collapse is driven by exposed CSS custom properties `--accordion-panel-height` and `--accordion-panel-width`, plus `data-starting-style` / `data-ending-style` attributes on the panel — i.e. the library measures true content height and hands it to the consumer's CSS as a variable, letting `@starting-style`-based transitions animate real height rather than `max-height` hacks or `useState`+`requestAnimationFrame` measuring. This is the same CSS-native pattern Astryx's own StyleX conventions already prefer.
- No scroll-triggered animation, no WebGL, no easing flourish beyond the height/rotate transition — motion exists only where it communicates state change.

## Hero Anatomy

**Homepage**: no image, no gradient, no illustration. Small top-center nav (X / GitHub / Discord as plain text links), search (⌘K) top-right. Oversized two-line headline, bold `die grotesk b`, 42px: _"Unstyled UI components for building accessible user interfaces."_ Below it, a single `Documentation →` link (chevron icon, underlined) as the only CTA — no button chrome. Below that, four short paragraphs of prose lead with pedigree ("From the creators of Radix, Floating UI, and Material UI...") before any feature claim.

**Component page** (Accordion): H1 "Accordion" (34px bold) + one-line description "A set of collapsible panels with headings." + two inline utility links — "**View as Markdown**" (resolves to a literal `/react/components/accordion.md` route serving the page as agent-readable markdown) and "**View source**" (deep-links to the exact tagged GitHub path, `github.com/mui/base-ui/tree/v1.6.0/packages/react/src/accordion`). This replaces a conventional hero visual with a documentation-utility row — the "hero" is functional, not decorative.

## Components of Note

- **Live demo + tabbed code panel**: demo renders above a code block with `index.tsx` / `index.module.css` tabs, a "CSS Modules ▾ / StackBlitz ↗" control, a "Show code" expand toggle, and a copy-icon — consistent across every component page.
- **Anatomy diagram**: literal import statement + JSX composition tree (`Accordion.Root → Accordion.Item → Accordion.Header → Accordion.Trigger`, `→ Accordion.Panel`) rendered as a real, copyable code block rather than a graphic.
- **Three-tier reference tables**, repeated for every sub-part (Root, Item, Header, Trigger, Panel): a Prop/Type/Default table, an Attribute/Description table for `data-*` hooks (`data-open`, `data-disabled`, `data-orientation`, `data-index`, `data-starting-style`, `data-ending-style`, `data-panel-open`), and a CSS Variable/Description table (`--accordion-panel-height`, `--accordion-panel-width`). This turns "unstyled" from a marketing claim into a literal, enumerated styling API.
- **"Made for the makers"** homepage section: a 6-tile logo grid (Paper, GitHub, Zed, Unsplash, Operate, Interfere), each a dark charcoal square with one monochrome white icon mark — restrained trust-proof, no testimonial copy.
- **"So you know who to blame"**: a plain two-column team credits table (Name / Role) — Colm Tuite (Director of Design Engineering), Marija Najdova (Director of Engineering), Albert Yu (Engineer), Aaron García (Design Engineer), Vlad Moroz (Contributor) — using self-deprecating humor as the section label instead of "Our Team."
- **"The fine print"**: a borderless FAQ accordion (What is Base UI? / Does it work with any styling library? / accessibility standards / How does it differ from Radix UI? / Can I use it without React? / commercial use? / enterprise SLAs?) — the same accordion primitive as the docs demo, styled completely differently, functioning as a quiet internal proof of the "unstyled, restyle freely" pitch.

## Voice & Copy

Confident, dry, understated — leads with team pedigree over feature bullets ("From the creators of Radix, Floating UI, and Material UI..."), then craftsmanship language ("meticulously designed for composability, consistency, and craft," "we really, really sweat the details"), then a durability claim ("Base UI is built to last. It is designed with care and maintained with intent."). Section labels use light self-aware humor ("So you know who to blame," "The fine print") rather than corporate headers. Technical prose (Styling handbook page) stays direct and imperative: "Apply Tailwind CSS classes," "you retain total control" — developer-autonomy framing throughout, never prescriptive about visual taste.

## Distinctive Moves

1. **Per-page literal Markdown mirror + exact-tag source link.** Every component doc ships a `/page.md` route (confirmed live: `base-ui.com/react/components/accordion.md`) plus a "View source" link pinned to the exact released Git tag — not just a root-level `llms.txt`, but a per-page agent-readable artifact sitting right under the H1, next to the human-facing content.
2. **The styling contract is enumerated, not implied.** Every sub-part of every component gets three separate tables — Props, `data-*` attributes, CSS custom properties — making "unstyled and composable" a literal, scannable API surface instead of a marketing adjective.
3. **Self-referential credibility loop.** The code monospace (Paper Mono) was built by a person who is himself listed on the site's own credits table as a contributor, and the homepage's "Made for the makers" logo wall doubles as a proof-of-adoption section for a small, name-recognizable set of companies (GitHub, Zed, Unsplash) rather than a generic scrolling logo strip.

## Buzz Evidence

10.1k GitHub stars on `mui/base-ui` [S, GitHub, verified 2026-07-02]; positioned explicitly as the merger of three previously separate, individually well-known libraries (Radix UI, Floating UI, Material UI/MUI Base) under one team — the "pedigree consolidation" story is itself the buzz hook rather than a launch/funding event. Cited in this survey's crawlset (signal 7.6) specifically for its "headless component doc anatomy," and referenced alongside shadcn/ui, Radix Themes, Vercel Geist, and GitHub Primer as the current peer set for design-system documentation sites.

## What Astryx Should Take

- **Ship a literal `.md` mirror per component-doc page**, not just a global `llms.txt` — directly reinforces Astryx's own AGENTS.md/agent-consumption thesis; put the link next to "View source" under each component's H1, exactly where Base UI puts it.
- **Standardize a three-tier reference block** (Props / `data-*` attributes / CSS variables) at the bottom of every Astryx component doc, matching the pattern already implied by Astryx's `stylex.when.ancestor` + CSS-var conventions — turn the "swizzle it, style it your way" pitch into an enumerated contract, not prose.
- **Offer a monochrome-plus-restraint theme** (pure black/charcoal background, single `#e6e6e6`-class text color, zero accent hue, hard 0px-radius corners) as one selectable preset in Astryx's theme gallery — a credible "serious infra" alternative to warmer/branded defaults, validated by a 10k-star peer library shipping it as its _only_ look.
- **Reuse the "same primitive, two skins" trick** on Astryx's own marketing site: show one component (e.g. Accordion) once inside a bordered docs-style demo box and once in a borderless FAQ context, to visually prove restyling flexibility without extra copy.
- **A short, dryly-worded credits section** ("So you know who to blame" style) is a cheap, human trust signal worth considering for an Astryx About/Team page — more memorable than a standard "Our Team" grid.
- **Consider exposing true measured dimensions as CSS custom properties** (`--accordion-panel-height` pattern) on any Astryx component with animated expand/collapse, so consumers can drive `@starting-style` transitions off real values instead of estimating or JS-measuring.

## Pages Read

- https://base-ui.com/react/components/accordion (target — WebFetch + live browser render, computed-style extraction, screenshots, interaction test)
- https://base-ui.com (homepage — WebFetch + live browser render, computed-style extraction, screenshots)
- https://base-ui.com/react/overview/quick-start
- https://base-ui.com/react/handbook/styling
- https://base-ui.com/llms.txt
- https://github.com/mui/base-ui (repo overview, partial)
- https://base-ui.com/react/components/accordion.md (verified live as a real route via link `href`, not separately deep-read)
