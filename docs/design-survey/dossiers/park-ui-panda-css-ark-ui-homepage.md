---
name: Park UI (Panda CSS / Ark UI) — Homepage
url: https://park-ui.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Park UI is an open-source component recipe library — not an npm package but a CLI-installed source-code distribution (`npx @park-ui/cli add button`) — built on Ark UI (headless state machines) and Panda CSS (build-time CSS-in-JS/atomic-CSS engine). Created by Christian Busch (handle `grizzly_codes`), a core Chakra UI team member who also contributed to Ark UI and Panda CSS, it was folded into the official `chakra-ui` GitHub organization on Nov 27, 2025. The homepage's whole pitch — "Build your own Design System" — is proven not with screenshots but with a grid of fully wired, real Ark UI components arranged as complete real-world flows: a sign-up form, a $19/mo pricing card, a New Balance 574 ($79.99) product card, a notification-preferences panel, a document-sharing card, and a bug-report form.

## Typography

- Body font: **Outfit** — `--fonts-body: var(--font-outfit), sans-serif` [P, park-ui.com compiled CSS bundle, 2026-07-03].
- Code/mono font: **Roboto Mono** — `--fonts-code: var(--font-roboto-mono), monospace`.
- The `<html>` tag also loads next/font CSS-variable classes for **Inter**, **DM Sans**, and **Space Grotesk** alongside Outfit/Roboto Mono — all five are compiled into the bundle, consistent with the site's "swap any token" pitch, though which UI surface lets a visitor switch fonts live could not be confirmed from static HTML/CSS alone (not determined).
- Hero H1 markup: `class="heading textStyle_4xl md:textStyle_6xl fw_bold"` — Panda's `textStyle` token scale, responsive 4xl (mobile) → 6xl (desktop), bold weight. Subhead: `class="text textStyle_lg md:textStyle_xl c_fg.muted max-w_2xl"` — a single sentence, muted-foreground color token, capped at a `2xl` max-width.
- Distinctive technical detail: Panda CSS compiles to **literal, readable atomic class names** (`textStyle_lg`, `fw_bold`, `c_fg.muted`, `d_flex`, `ai_center`, `gap_3`) rather than hashed/obfuscated classes — a legibility choice that differs from StyleX's hashed output and is visible directly in view-source.

## Color

- Ships the **complete Radix Colors system** as compiled CSS custom properties: 24 accent hues plus 6 gray scales (`gray`, `mauve`, `slate`, `sage`, `olive`, `sand`) — confirmed in the CSS bundle as `--colors-<name>-1` through `-12` plus alpha variants `-a1` through `-a12` for every hue (`tomato, red, ruby, crimson, pink, plum, purple, violet, iris, indigo, blue, cyan, teal, jade, green, grass, bronze, gold, brown, orange, amber, yellow, lime, mint, sky`).
- The `/docs/theming` page states each color gives "12 shades per mode (light and dark), for a total of 24 shades" — matches the token count found in the bundle exactly.
- Radix Colors is explicitly credited on `/docs/about` as a core design dependency alongside Ark UI, Panda CSS, and shadcn.
- Semantic slot naming is baked into gray tokens directly, e.g. `--colors-gray-outline-bg-hover`, `--colors-gray-plain-bg-active` — Panda's variant vocabulary (`outline`/`plain`/`solid`/`surface`/`subtle`) extends into the color-token layer itself, not just component classes.
- **No `oklch()` found anywhere in the compiled stylesheet** (grep returned zero matches) — colors ship as hex/rgba despite OKLCH being a visible 2026 trend elsewhere (e.g. HeroUI, shadcn theming docs cited in this survey's own crawlset). Worth flagging as a real gap versus the field.
- Could not determine the specific default accent hue rendered on first paint from static assets (JS-resolved at runtime) — not determined.

## Layout

- Radius scale: `xs .125rem, sm .25rem, md .375rem, lg .5rem, xl .75rem, 2xl 1rem, 3xl 1.5rem, 4xl 2rem, full 9999px`, with semantic `l1/l2/l3` aliases that remap per a `data-radius="none|xs|sm|md|lg|xl|2xl"` attribute found live in the bundle — i.e. radius is one switchable token axis (same idea as shadcn's single `--radius` + `calc()`, but with seven explicit named presets instead of one variable).
- Homepage flow: announcement banner strip → hero (badge, H1, one-sentence subhead, single CTA, framework-logo row) → a grid of live functional component demos (see Hero Anatomy) → presumably footer (confirmed footer text: "© 2025 Chakra Systems. All rights reserved.").
- Docs shell: persistent two-column layout, left sidebar grouped into 10 categories (`getting-started, buttons, data-display, disclosure, feedback, forms, layout, navigation, overlays, typography`) indexing **59 individual component doc pages**; a command-menu search lives in the top nav (Lucide `command` icon present in the bundle, i.e. a ⌘K-style search).

## Motion

- Pure CSS keyframes shipped in the bundle — no JS animation library detected: `fade-in/out`, `scale-in/out`, `slide-from-{top,bottom,left,right}` and `slide-from-*-full` variants (+ matching `slide-to-*`), `collapse/expand-height/width`, `spin`, `pulse`, `bounce`, `ping`, and a `bg-position` keyframe (likely skeleton shimmer). Motion is driven by Ark UI's `data-state` attributes triggering these CSS transitions/keyframes directly — zero JS animation runtime, matching the "all-CSS motion" pattern this survey's crawlset also flags for HeroUI.
- Duration scale: `fastest 50ms, faster .1s, fast .15s, normal .2s, slow .25s, slower .3s, slowest .4s`.
- Easing curves: `default/in-out cubic-bezier(.4,0,.2,1)`, `in cubic-bezier(.4,0,1,1)`, `out cubic-bezier(0,0,.2,1)`, `linear` — the standard Tailwind-style easing set.
- Nav-link hover treatment: an animated underline via an absolutely-positioned `span` (`h_2px`) that reveals on hover/current-page state, rather than a plain color-only hover.

## Hero Anatomy

1. **Banner strip** (topmost): "🎉 Park UI × Chakra — It's official!" with a trailing arrow-right icon.
2. **H1**: "Build your own Design System" — bold, `textStyle_4xl` on mobile scaling to `textStyle_6xl` on desktop.
3. **Subhead**: "Beautifully designed components built with Ark UI and Panda CSS that work with a variety of JS frameworks." — one sentence, muted-foreground color, `max-w-2xl`.
4. **CTA**: a single button, "Get Started" + arrow-right icon, `variant_solid`, size `xl` (mobile) → `2xl` (desktop), linking to `/docs`. No second CTA sits beside it in the hero row — GitHub access lives in the top nav instead.
5. **Framework row**: React / Solid / Vue logos (each ~40px), directly under the CTA, signaling multi-framework support before any scroll.
6. **No hero illustration, gradient, or 3D graphic.** The hero's actual "visual proof" is deferred to just below the fold: a grid of genuinely functional component demos (a real sign-up form, a $19/mo "Starter Plan" pricing card, a New Balance 574 $79.99 product card with working "Add to Cart"/"Buy Now", a notification-preferences panel, a document-sharing collaboration card, and a bug-report form with a framework selector).

## Components of Note

- `data-scope` attributes in the raw HTML confirm the homepage demos are wired to real Ark UI primitives, not decorative markup: `avatar, clipboard, dialog, field, number-input, radio-group, rating-group, select, switch, tabs, toast`.
- Button doc page (`/docs/components/button`): 5 variants (`solid, surface, subtle, outline, plain`) × 7 sizes (`2xs` through `2xl`), live "toggle code" demos per example, a props table (`variant`, `size`, etc. with full type-union defaults), and two install paths — `npx @park-ui/cli add button` or copy-paste — with React/Solid code tabs.
- **59 total documented components** spanning 10 categories (forms alone has ~24 components: checkbox, input, select, switch, textarea, tags-input, pin-input, color-picker, date-picker, combobox, etc.).
- `/docs/about` explicitly credits Ark UI, Panda CSS, Radix Colors, and shadcn as the four foundational dependencies, and frames Park UI as a "code distribution platform," not a package — same distribution philosophy as shadcn, made explicit in copy.

## Voice & Copy

- Plainspoken, zero-hype register throughout marketing copy: "Build your own Design System" / "Beautifully designed components built with Ark UI and Panda CSS that work with a variety of JS frameworks." — no adjectival AI-hype language.
- Changelog voice is notably informal for a component library: entry titled "Park UI Gets a Major Upgrade 🎉," describing the retirement of the old preset package with lines like "We're saying goodbye" and framing the old system as "fighting against a preset" / a "black box."
- The Chakra-merger blog post frames a corporate reorg as a "natural homecoming," reassuring users directly: "Nothing breaks. Your imports stay the same, your components keep working, and the docs remain at park-ui.com."
- `/docs/about` states explicit design principles in copy, including "Open Code" ("every component's implementation and recipe is fully exposed and readable") and "AI Ready" ("straightforward for LLMs to read, understand, and even improve") — MIT-licensed, single-author credit ("a project by grizzly_codes").

## Distinctive Moves

1. **Homepage-as-live-product-demo.** Every showcase block on the homepage (sign-up form, pricing card, product card, notification panel, doc-share card, bug-report form) is a genuinely wired Ark UI component tree — verified via `data-scope` attributes in the raw HTML, not a screenshot or Figma mockup. This turns the marketing page itself into the most convincing possible proof that "these components actually work."
2. **The entire Radix Colors token system is shipped, not curated.** 24 accent hues × 12 shades × light/dark, plus 6 full gray scales, all present as real CSS custom properties in the compiled stylesheet — the "build your own design system" promise is literally inspectable in devtools, not just asserted in prose.
3. **Ownership-over-package distribution**, explicit in copy: components are added as owned source via a CLI (`npx @park-ui/cli add button`), and the docs proactively name this as "Open Code" — positioning the docs site itself as the product, since there is no closed npm package being sold.

## Buzz Evidence

- Absorbed into the official `chakra-ui` GitHub organization (repo now `chakra-ui/park-ui`) on Nov 27, 2025, per Park UI's own blog post — a dated, real consolidation by an established design-system vendor, not a rumor [P, park-ui.com blog, dated post].
- Creator Christian Busch (`grizzly_codes`) is a core Chakra UI team member and contributor to both Ark UI and Panda CSS — the merger folds a widely-adopted community skin back into its own upstream organization.
- No independent award, Product Hunt/HN front-page rank, or press citation was found in this pass beyond the Chakra-org absorption and this survey's own crawlset entry (signal 7.4/10, axis "peer design-system sites") — flag any stronger buzz claim as not determined.

## What Astryx Should Take

1. **Ship the token system as literally inspectable CSS**, not just documented in prose — Park UI's "build your own design system" credibility rests entirely on a visitor being able to open devtools and see all 30 Radix hues actually present as `--colors-*` variables. Astryx's StyleX tokens should be similarly exposed/verifiable on the marketing+docs site, not just described in the tokens doc.
2. **Put real, functional patterns directly on the homepage**, wired to live Astryx components (a real sign-up form, a real settings panel, a real pricing card) rather than a static screenshot gallery — this is a stronger, more literal proof of accessibility/functionality claims than component swatches, and doubles as a built-in "does this actually work" test for prospective adopters.
3. **Reuse the CLI-add-source framing** in docs copy if not already explicit — Park UI's "Open Code" positioning maps almost directly onto Astryx's own `astryx swizzle <Name>` ejection model; naming it that plainly ("every component's implementation is fully exposed and readable") is copy Astryx's docs-presentation section could adapt nearly verbatim.
4. **Match the hype-free, single-sentence hero register** ("Build your own X" + one factual subhead sentence, no gradient/3D hero graphic) — consistent with this survey's broader "restraint wins" signal (Cursor, Zed, Resend, SSI) and directly appropriate for Astryx's own developer-tool audience.
5. **Consider a first-person, empathetic changelog voice** ("we're saying goodbye to X," breaking changes framed with acknowledgment of user pain) as a deliberate contrast to typical terse semver release notes — a low-cost way to make Astryx's changelog read as authored rather than generated.

## Pages Read

- https://park-ui.com/ (homepage — fetched via WebFetch + raw HTML/CSS/JS via curl)
- https://park-ui.com/docs (docs index)
- https://park-ui.com/docs/components/button
- https://park-ui.com/docs/about
- https://park-ui.com/docs/theming
- https://park-ui.com/changelog
- https://park-ui.com/blog/park-ui-joins-the-chakra-ui-organization

Attempted but not found (wrong-guessed URLs, 404): `https://park-ui.com/docs/overview/introduction`, `https://park-ui.com/docs/panda/components/button`, `https://park-ui.com/llms.txt`.
