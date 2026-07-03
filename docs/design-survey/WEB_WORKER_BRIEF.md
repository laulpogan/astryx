# Astryx site — design brief (July 2026 survey)

Paste-ready brief for the site build. Distilled from a 133-agent survey: 478 hot/recently-funded startup sites indexed, 68 deep-crawled into design dossiers, two adversarial persona gates. Full evidence: `docs/design-survey/ATLAS.md` on branch `design-survey-jul-2026` (fork `laulpogan/astryx`); per-site dossiers in `docs/design-survey/dossiers/`.

## Direction in one paragraph

Build the site as proof that Astryx exists: warm-neutral light theme + true-neutral dark theme as equal first-class presets, live Astryx components as the hero (no screenshots), CSS-only motion with a mandatory reduced-motion floor, one reserved accent color, a bespoke display typeface slot, and docs that machines can read as easily as humans. Restraint is the current credibility signal — the gradient/orb "AI look" now reads as slop to exactly the audience Astryx serves.

## Build these, in order

1. **Live Theme Builder** — the flagship page. Wire it to the real `defineVars`/`createTheme` tokens (accent, radius, type slots, light/dark), previewing real components live. Only 4-5 of 68 surveyed sites have one (shadcn/ui, HeroUI v3, Radix Themes, Park UI); none generate it from the same source of truth as their docs. This is the differentiator.
2. **Hero = live composed components.** Render an actual Astryx composition (dashboard/settings/chat mockup out of real `packages/core` components), re-skinnable by the theme toggle in place. Pattern proven by shadcn (finance dashboard hero) and v0/Rive/Motion.dev (product-as-hero).
3. **Two theme presets, both first-class.** Light: warm cream base (survey anchors: `#FDFCFC` ElevenLabs, `#FCFBF8` Lovable) — not pure white. Dark: true neutral near-black (`#08090A` Linear) — not navy, no gradient wash. Honor `prefers-color-scheme`, visible toggle in nav.
4. **Typography, three roles.** UI sans (workhorse) + code mono + a `fontFamilyDisplay` slot for headlines only. Headline device: weight-split hierarchy (bold clause + light clause, e.g. 600/300) — the most-shipped 2026 headline pattern. Optional single serif-italic accent word per page maximum.
5. **One accent color.** Identical for CTA / links / selection / one headline keyword. Nothing else saturated outside data-viz. (OpenAI, Cursor, xAI, Linear all converged here.)
6. **Motion: CSS-only, tokenized, gated.** Named easing tokens (`--ease-out-quad/-quart/-quint` à la Linear), default 0ms for docs chrome, one opt-in hero text reveal (staggered blur+rise keyframe) max. EVERY animation behind `prefers-reduced-motion`; hover effects behind `@media (hover: hover)`. No GSAP, no WebGL, no scroll-jacking.
7. **Docs shell: match the converged standard, don't innovate here.** Fixed left nav / centered prose / sticky "On this page" / props tables / copyable code with tabbed npm/pnpm/bun install commands (copy → checkmark micro-interaction). Differentiate on voice + freshness, not shell shape.
8. **Agent-readable docs ladder, generated not hand-authored.** `llms.txt` (table stakes) + per-page `.md` mirrors, generated at build from the `.doc.mjs` files, with a CI diff-gate so they can't go stale. Survey found hand-authored agent docs rot within months (Perplexity's llms.txt 404s).
9. **Dated release timeline** on the site (ElevenLabs-style scrubber) and, later, per-component changelogs inside each component doc page — no surveyed site does per-component; cheap win via an additive `changelog` field on `ComponentDoc`.

## Banlist — instant-slop tells (do not ship)

Aurora/ambient gradient blobs · sparkle/shimmer CTAs · fake token-streaming text · cookie-cutter 3-card feature grids · bento as default template (past peak; single-column stacks won among Cursor/Zed/Linear/Cognition) · numbered `01/02/03` scaffolds unless content is genuinely sequential · decorative WebGL · purple-gradient-on-white "AI startup" wash · logo marquee without an outcome line per logo. Source: Performative-UI satire kit (1,181 HN points) + Anthropic frontend SKILL.md banlist + cross-site rejection by the restraint camp.

## Constraints

- Styling is StyleX: no CSS nesting, no `@property`; use `stylex.when.*` for parent-child state, `@starting-style` for entry animations, `stylex.keyframes` + `defineVars` for motion/easing tokens, `@media (hover:hover)` guards. `@container` available for responsive modules.
- Headline sizing: discrete breakpoint steps (Linear pattern), not fluid `clamp()`.
- Accessibility floor: `:focus-visible` styles everywhere, WCAG 4.5:1 body contrast, reduced-motion on every keyframe — the survey found zero credible sites skipping this.
- Voice: plain, confident, zero hype adjectives. Cursor/Linear register, not launch-tweet register.

## Verify against

`docs/design-survey/ATLAS.md` §2 (per-trend ADOPT/ADAPT/SKIP verdicts + exemplar dossier slugs), §3 (banlist), §4 (take-list with effort ratings), §5 (white-space map). Every claim above traces to a crawled dossier in `docs/design-survey/dossiers/`.
