---
name: Basecase Capital (basecase.vc)
url: https://basecase.vc/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Basecase is Alana Goyal's solo-GP seed fund ("i write the very first check into companies... $1-5M checks, no board seat"). The site is not a fund brochure — it's built and maintained like a personal hacker project: a single-column, monospace, keyboard-driven page that houses a portfolio wall, a testimonial carousel, a personal blog about her own engineering side-projects, and a cluster of desktop-OS-style easter eggs (Snake game, git log, Konami code) behind a keyboard-shortcuts panel. Portfolio includes Vercel, Supabase, Resend, Ashby, Browserbase, and several since-acquired names (Astral→OpenAI, Windsurf→Google DeepMind, Graphite→Cursor, Diagram→Figma, Marketstreet→Anthropic, Orb→Adyen), which functions as the site's real credibility signal in place of press/awards.

## Typography

- **Root font:** Inter (variable, self-hosted via `next/font`, weight range 100–900) is applied as a class on `<html>` (`__className_f367f3` → `font-family:Inter,Inter Fallback`).
- **Rendered body font:** The entire app is wrapped in a single outer `<div class="font-mono">`. Verified in the compiled CSS, Tailwind's `.font-mono` utility here is **hardcoded to the plain OS monospace stack** — `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace` — not to the custom `var(--font-geist-mono)` that's also defined in the same stylesheet. So although Geist Sans, Geist Mono, and Inter are all loaded as web fonts, what actually renders as body copy is the visitor's native system-monospace font (SF Mono/Menlo on Mac, Consolas on Windows).
- **Geist reserved for one moment:** Geist Sans is deliberately held back and only applied via a `.font-geist` utility (`text-2xl font-bold tracking-wide font-geist`) to the company-name reveal that scrambles in when you hover a portfolio logo — a real webfont as a reward for interaction, system-mono for everything else.
- **Casing:** All marketing copy is lowercase, including the first-person pronoun "i" ("i write the very first check...", "who i work with"). Blog posts carry an additional CSS-variable-driven case toggle (see Motion/Components).
- **List markers:** Bulleted lists ("how i work" / "who i work with") use literal typed asterisks (`* i write the very first check...`) instead of styled `<li>` markers — raw-markdown, not designed bullets.

## Color

Two separate token systems coexist:

1. **shadcn/ui base tokens** (Tailwind + Radix convention), raw HSL triplets in `:root`/`.dark`: `--background:0 0% 100%` / dark `0 0% 3.9%`; `--foreground:0 0% 3.9%` / dark `0 0% 85%`; `--border:0 0% 89.8%` / dark `0 0% 14.9%`; `--primary:0 0% 9%` / dark `0 0% 98%`; `--radius:0.5rem`; plus a `--chart-1`…`--chart-5` set reserved for future dataviz.
2. **A bespoke, user-facing accent system** driving the visible "change theme color" picker, exact hex values pulled from the compiled JS (`p={bw:{...}, red:{...}, ...}`):

| theme  | key | primary   | secondary | light bg  | dark bg   |
| ------ | --- | --------- | --------- | --------- | --------- |
| b&w    | `0` | `#FFFFFF` | `#F5F5F5` | `#FFFFFF` | `#000000` |
| red    | `1` | `#CB1316` | `#DB1619` | `#FDF5F5` | `#131111` |
| pink   | `2` | `#C13366` | `#D13970` | `#FDF6F8` | `#151415` |
| orange | `3` | `#EBA418` | `#FBB428` | `#FDF9F5` | `#1A1817` |
| yellow | `4` | `#EDCF46` | `#FFE04B` | `#FDFBF5` | `#1A1817` |
| green  | `5` | `#56C7A6` | `#67D8B7` | `#F5FCFA` | `#171817` |
| blue   | `6` | `#6BC0D7` | `#7CCEE5` | `#F5FAFC` | `#171718` |
| purple | `7` | `#9189E3` | `#A29BF4` | `#F8F5FC` | `#151415` |

Each preset is bound to a number-key shortcut (0–7) so the accent can be changed without touching the mouse. Applied via `--color-primary` / `--color-secondary` / `--color-background-light` / `--color-background-dark` CSS variables consumed directly in Tailwind arbitrary-value classes (`[background-color:var(--color-primary)]`).

## Layout

- Fixed centered column, `max-w-4xl mx-auto`, `px-4` — a single reading-width rail, no sidebar, no multi-column marketing sections.
- Sticky top nav (`sticky top-0 z-40`) holding four controls only: home/logo, grid-overlay toggle, theme-color picker, keyboard-shortcuts trigger.
- The `<body>` itself carries a permanent, subtle **16×16px grid-line background image** (`linear-gradient` rules using `hsl(var(--border))` at 1px, `background-size:16px 16px`) — a literal always-on graph-paper texture in both light and dark mode, not a decorative overlay div.
- Body sections stack vertically with generous `py-10` rhythm: hero → two-column bullet list (`grid md:grid-cols-2 gap-12`) → portfolio logo grid → testimonial strip → closing CTA line → footer.
- Blog index is a plain vertical list (title / category tag / date / one-line excerpt), no thumbnails or cards.

## Motion

- **`use-scramble`** (React hook library) is the site's single motion primitive, reused in exactly two places with identical params (`speed:.8, tick:1, step:1, scramble:3, seed:3`): the hero headline text on load, and each portfolio-logo's name reveal on hover. One decrypt/scramble effect, two contexts — no separate animation libraries, no Lottie/GSAP/WebGL.
- **react-wrap-balancer** (`data-br` attribute) balances the closing CTA headline's line-breaks.
- **react-swipeable** powers touch-swipe navigation on the testimonial carousel (`onSwipedLeft/onSwipedRight`), which also auto-advances every 5s on mobile widths only and responds to `n`/`p` keyboard shortcuts.
- **CSS-variable-driven text-transform toggle**: blog post prose classes bind `text-transform:var(--heading-case)` / `var(--text-case)` on every heading/paragraph/list/table element; the `a` keyboard shortcut (blog pages only) flips these two custom properties between lowercase and sentence-case — a full-page copy-case switch with zero re-render, pure CSS variable flip.
- The "no decks, no pitch meetings" line has every character pre-split into individual `<span style="display:inline-block;position:static">` nodes client-side, staged for a per-character animation (consistent with the scramble/decrypt technique used elsewhere).

## Hero Anatomy

No image, no gradient, no video. `text-3xl` (32px) bold headline — "first check to future founders" — scrambles into place on load via `use-scramble`, followed immediately by a static `text-sm` paragraph spelling out the full pitch ("basecase writes the first check to builders who are still dreaming, tinkering, and exploring what they want to create."). Below that, a bold declarative line ("no decks, no pitch meetings") rendered as pre-split character spans. There is no CTA button anywhere in the hero — the closest thing to a call to action is the page's closing line, "too early to talk to an investor? talk to a developer.", which is a plain text link out to a personal X/Twitter profile, not a form or button.

## Components of Note

- **Theme-color popover** — Radix `DropdownMenu` primitive, trigger shows a live color swatch + chevron, 8 presets as above.
- **Keyboard-shortcuts panel** — opens as a draggable, minimizable, focusable "window" (has `x`/`y` position state, `zIndex`, `onMinimize`, `onFocus` props — a genuine floating-window pattern, not a modal) listing shortcuts grouped by category: _navigation_ (`h` home, `b` blog, `f` founders portal, `w` open personal site, `t` open Twitter), _appearance_ (`d` dark/light, `o` grid overlay, `0`–`7` accent themes, `a` lowercase/sentence-case toggle on blog pages), _extras_ (`g` show git log, `r` show reading log, `s` show Snake game, `e` show easter eggs). This "extras" tier plus the window-manager chrome (minimize/fullscreen/drag) implies several of these panels are themselves small floating apps inside the page.
- **Playable Snake game** easter egg — arrow keys move, `p` pauses, scored, rendered with green squares; the subject of its own blog post ("Securing Snake") about hardening it against exploitation.
- **Konami-code listener** — dedicated handlers for keys `a`/`b` as part of the classic up-up-down-down-left-right-left-right-b-a sequence.
- **Portfolio logo grid** (27 companies) — logos are `dark:invert`ed to monochrome by default; on hover the icon fades out and the company name scrambles in (`font-geist`, bold, tracked-out), with an acquisition-status line underneath when applicable ("acquired by openai/figma/cursor/anthropic/adyen/google deepmind").
- **Testimonial carousel** — 6 quotes (Vercel/Guillermo Rauch, Supabase/Paul Copplestone, Ashby/Benji Encz, Resend/Zeno Rocha, Browserbase/Paul Klein IV, Mainframe/Jordan Singer), a `border-l-4` accent-colored rule marks the quote block, advance via a bracket-style `[n] next` button, keyboard `n`/`p`, or swipe.
- **Bracket-notation links** — footer nav is exactly `[w] website`, `[t] twitter`, `[b] blog`, styled as plain text with brackets rather than pill/button chrome — a code-editor/README convention carried into production UI.
- **Blog prose** — Tailwind Typography (`prose prose-neutral dark:prose-invert`) with every heading/body-text selector individually mapped to the two case-toggle CSS variables described under Motion.

## Voice & Copy

First-person, singular ("i", never "we" — this is legibly a solo-GP fund, and the copy doesn't hide it). All-lowercase throughout, including headings and the pronoun "i". Declarative, unhedged sentence fragments over paragraphs ("no decks, no pitch meetings"; "too early to talk to an investor? talk to a developer."). The blog reinforces the voice with genuinely technical, personal-hacker subject matter — a camera system to monitor the office espresso machine, a Raspberry Pi doorbell rig that classifies trick-or-treaters, building and debugging her own MCP (Model Context Protocol) server, an "autonomous group chat," and hardening the site's own Snake-game easter egg — positioning Alana as a practicing engineer first, investor second.

## Distinctive Moves

1. **A VC homepage built like a code editor / desktop OS, not a brochure.** A keyboard-shortcuts panel organized into named groups (navigation / appearance / extras) that itself opens as a draggable, minimizable, z-indexed floating window; numbered accent-theme shortcuts (`0`–`7`); a hidden Konami-code listener; and a fully playable, scored Snake game — turning the site into an actual interactive toy rather than a marketing page, a move essentially unseen elsewhere in the VC-site or design-system-site category.
2. **One motion primitive doing double duty.** The identical `use-scramble` decrypt/scramble effect (same five params) drives both the hero headline on load and every portfolio-logo hover reveal — a single, cheap, dependency-light technique standing in for what most sites would spend on video or WebGL, giving the whole site one coherent "the terminal is typing itself into existence" motion signature.
3. **Fonts loaded but deliberately withheld.** Inter, Geist Sans, and Geist Mono are all bundled, yet the visible body copy renders in the plain OS-native monospace stack (verified in the compiled CSS, not a screenshot guess) — Geist Sans is saved exclusively for the one hover-reveal moment. Restraint used as a legibility/authenticity choice, not a font-loading oversight.

## Buzz Evidence

No award/PH/HN listing was found for basecase.vc itself in the pages fetched (personal VC sites don't typically enter Awwwards/Product Hunt). The real buzz signal is portfolio composition: Vercel, Supabase, Resend, Ashby, Browserbase are all category-leading dev-tool brands, and six portfolio companies have since been acquired by top-tier labs/platforms — Astral (ruff) by OpenAI, Windsurf by Google DeepMind, Graphite by Cursor, Diagram by Figma, Marketstreet by Anthropic, Orb by Adyen — functioning as the site's de facto credibility engine in place of press coverage. The "Securing Snake" blog post (Nov 19, 2024) documents real security work on the site's own Snake-game easter egg ("from 'immediately hackable' to 'reasonably secure' in 24 hours"), evidence the playful engineering is a genuine, maintained feature rather than a one-off gag.

## What Astryx Should Take (concrete)

- **Ship a visible, keyboard-driven accent-theme picker on Astryx's own marketing/docs chrome** — not buried three clicks into a settings panel. Astryx already has a `ThemeProvider` with light/dark + overrides; basecase proves surfacing it as a top-nav swatch-plus-numeric-shortcut control turns the theming system itself into a demo, live, on every page.
- **Adopt a keyboard-shortcuts panel grouped by category** (navigation / appearance / extras) for the docs site — `g` for a component, `d` for dark/light, `?`/`x` to open the panel itself — matching the dev-tool audience's expectations and giving Astryx's own docs a "built by people who use their own product" signal.
- **Reuse the CSS-variable text-transform toggle pattern** (`--heading-case` / `--text-case` flipped by one keystroke) as a template for any Astryx docs toggle that shouldn't require a re-render — e.g., a density (compact/comfortable) or case toggle achieved with a single custom-property flip instead of JS-driven class swapping.
- **A persistent low-cost grid-line background** (16×16px hairline grid using the border/hairline token color) is a one-rule way to give a docs/marketing page a "technical" texture without committing to full brutalism or any JS/canvas overhead — directly portable to an Astryx theme.
- **Bracket-notation link styling** (`[w] website`) is worth documenting as an optional Link/Nav variant for design-system sites that want a code-editor voice, distinct from pill/button chrome.
- **Adopt a single lightweight scramble-text hook (`use-scramble`-class dependency) as one shared motion primitive** for hero headlines and hover-reveals — cheaper than WebGL/Lottie and easy to drive with StyleX-controlled color underneath, while the hook only owns the character substitution.
- **Portfolio/logo hover-reveal-to-status pattern** (logo → company name scrambles in → acquisition/status line) is a directly reusable template for an Astryx "built with Astryx" showcase grid — logo default, hover reveals name plus a one-line status/tag.

## Pages Read

- https://basecase.vc/ (home — WebFetch + raw HTML/CSS/JS)
- https://basecase.vc/_next/static/css/b2761806154f5708.css (compiled stylesheet — fonts, tokens, grid background)
- https://basecase.vc/_next/static/chunks/app/page-294c35e037fc0cd3.js (hero, portfolio data, testimonials, scramble-text implementation)
- https://basecase.vc/_next/static/chunks/364-693f50d41379d8b1.js (keyboard-shortcuts registry, theme presets, Snake game, Konami code)
- https://basecase.vc/blog (blog index — WebFetch, 8 posts enumerated)
- https://basecase.vc/blog/brainbust (individual post — prose/typography classes, case-toggle CSS variables)
- https://basecase.vc/founders (redirects, 307 — gated founders portal, not entered)
- https://basecase.vc/llms.txt, /robots.txt, /sitemap.xml (checked, all 404 — none present)
