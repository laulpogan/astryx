---
name: WWDC25 — 'Meet Liquid Glass' session
url: https://developer.apple.com/videos/play/wwdc2025/219/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

This is Apple's own 19-minute WWDC25 developer session (June 2025, three HIG-team speakers: Chan, Shubham, Bruno) that turns the "Liquid Glass" marketing announcement into an actual build spec — the session this survey's crawlset entry calls out specifically for operationalizing the material into "Regular vs. Clear variants, nav-only placement, no glass-on-glass." Structurally it's four chapters (Introduction 0:00, Dynamics 1:29, Adaptivity 6:00, Principles 10:31, Next Steps 18:53) that move from _what Liquid Glass physically is_ (a lensing, light-bending "meta-material") to _concrete do/don't placement rules_ for designers and engineers shipping it in real apps. Two extra_urls from the scout entry were also read: the current `/design/` gallery hub (successor to `new-design-gallery/`, which 301-redirects there) and the `TechnologyOverviews/liquid-glass` doc hub — plus the HIG Materials page and the "Adopting Liquid Glass" developer guide, fetched via Apple's JSON content API after the standard HTML fetch returned template-only shells with no body text.

## Typography

Not determined from the session itself — this is a video/transcript page, and no typeface name (SF Pro or otherwise) is stated in the session content, chapter list, or the three linked doc pages. One concrete typographic rule _is_ given in the "Adopting Liquid Glass" developer guide (not the video, but the linked doc, so flagged separately): list/table/form section headers move from all-caps to **title-style capitalization** as a systemwide convention under the new design — "section headers no longer render entirely in capital letters regardless of the capitalization you provide" [P, developer.apple.com, session-linked doc, fetched 2026-07-02].

## Color

No hex/OKLCH values anywhere in the session or linked docs — Apple describes color adaptation _behaviorally_, not as a token palette. Concrete, quotable specs found:

- **Tint mapping, not brand color**: "generates a range of tones mapped to content brightness underneath... changes hue, brightness, saturation based on content without deviating too much from intended color."
- **Dimming layer value for Clear variant** (from the linked HIG Materials page, the one hard number in the whole research trail): _"If the underlying content is bright, consider adding a dark dimming layer of 35% opacity."_ If content is already dark, or system media controls (AVKit) supply their own dimming, no extra layer is needed [P, developer.apple.com/design/human-interface-guidelines/materials, fetched 2026-07-02].
- **Light/dark flip is size-gated**: small elements (navbars, tab bars, symbols/glyphs) flip light/dark per background to maximize contrast; larger elements (menus, sidebars) adapt tone but do **not** flip light/dark wholesale.
- **Selective-emphasis rule**: apply color tinting to at most one primary action per screen (session's own example: a red "View Bag" button in a food-delivery app) — "don't tint all elements... nothing stands out."

## Layout

Liquid Glass is scoped to exactly one structural layer: a **navigation/functional layer that floats above the content layer** — tab bars, sidebars, toolbars, menus, nav bars. The session is explicit that this is a placement rule, not a visual-only choice: "in steady state (app launch), avoid intersections between content and Liquid Glass — reposition/scale content to maintain separation." The linked "Adopting Liquid Glass" guide adds the load-bearing layout mechanics an Astryx-style system would actually reuse:

- **Concentricity**: window/control/sheet/popover corner radii are derived from the hardware's own curvature so nested shapes share a center — exposed as the `ConcentricRectangle` SwiftUI shape and `UICornerConfiguration`/`cornerConfiguration` in UIKit.
- **Larger row height + padding** in lists/tables/forms "to give content room to breathe," with sections getting an increased corner radius to match control curvature.
- **Background extension effect**: mirrors adjacent content and blurs it to fake an edge-to-edge hero image stretching under a sidebar/inspector without actually placing content there — `backgroundExtensionEffect()` (SwiftUI) / `UIBackgroundExtensionView` / `NSBackgroundExtensionView`.
- **Fluid, continuous window resizing** on iPadOS/macOS (no discrete preset sizes) via `NavigationSplitView`/`UISplitViewController`/`NSSplitView`.

## Motion

This is genuinely the session's core content (the "Dynamics" chapter, 1:29–6:00) and it's OS-material motion, not CSS/web animation:

- **Lensing**: the material dynamically bends and concentrates light (vs. scattering, like older blur materials) to communicate depth/layering while keeping content behind it visible.
- **Materialization**: elements fade in/out by modulating the amount of light-bending and lensing, not a simple opacity crossfade.
- **Gel-like interaction response**: controls flex, energize with light, and can visibly lift on touch; on release, "bubbles pop open" — menus expand outward from the exact tap point rather than sliding in from an edge.
- **Highlights react to device motion**: tilting/unlocking the device moves simulated light sources across the material's surface (device-motion-aware specular highlights).
- **Interaction illumination**: touch causes the material to glow from within at the touch point, spreading through the element and into adjacent glass elements.
- **Focus recession**: on Mac/iPad, glass visibly recedes/dims when a window loses focus, as an automatic attention cue.
- **Concrete shipped API for scroll-driven motion**: `.tabBarMinimizeBehavior(.onScrollDown)` (SwiftUI) / `tabBarMinimizeBehavior` (UIKit) — tab bar recedes on scroll-down, re-expands on scroll-up.
- **Scroll edge effect**: content dissolves into the bar behind it as it scrolls underneath, switching automatically between a soft fade (light content) and a subtle dim (dark content); a distinct "hard style" variant exists for pinned accessory views like column headers. Exposed via `scrollEdgeEffectStyle(_:for:)` (SwiftUI) / `UIScrollEdgeElementContainerInteraction` (UIKit).
- **Accessibility governs all of the above automatically**: Reduce Transparency (frostier/more opaque), Increase Contrast (near-black/white fills + contrasting border), Reduce Motion (drops elastic/lift behaviors) — the session states standard components pick these up "automatically," custom elements must be tested against each setting explicitly.
- **Performance guidance**: combine multiple custom glass shapes into one `GlassEffectContainer` so they morph fluidly into each other and render efficiently, rather than layering separate glass views.

## Hero Anatomy

Not applicable in the conventional marketing-hero sense — this is a session-listing page (title, abstract, chapter list, speaker names, HD/SD download links, three "related session" cards), not a page with a headline/CTA/background-image hero. The nearest analogue: the session's own opening frame states its thesis line-for-line as the abstract shown on the listing page — _"Liquid Glass unifies Apple platform design language while providing a more dynamic and expressive user experience"_ — functioning as the one-sentence pitch a marketing hero would otherwise carry.

## Components of Note

- **Two variants, mutually exclusive within an app** — the session's central build rule:
  - **Regular** (default, "most versatile," use most often): full adaptive behavior, guarantees legibility over any content, anything can sit on top.
  - **Clear**: permanently transparent, zero adaptive behavior, requires a dimming layer (35% opacity spec above), and is gated on three conditions all being true — over media-rich content, that content tolerates dimming, and foreground content is bold/bright. _"Never mix variants in same app."_
- **Concrete component API surface named in the linked adopting guide** (the actual shipped surface a component library would map to): `glassEffect(_:in:)` / `GlassEffectContainer` (SwiftUI), `UIGlassEffect` (UIKit), `NSGlassEffectView` (AppKit); button styles `glass()`, `clearGlass()`, `prominentGlass()`, `prominentClearGlass()` (`UIButton.Configuration`), `.glass` / `.glassProminent` (SwiftUI `PrimitiveButtonStyle`), `NSButton.BezelStyle.glass` (AppKit).
- **Toolbar grouping primitive**: `ToolbarSpacer` / `fixedSpace(_:)` creates a fixed break between items that otherwise share one glass background, so groups of related actions read as a single control.
- **Tab bar → sidebar adaptation**: `sidebarAdaptable` lets a tab-based nav auto-convert to a sidebar depending on context/window size (`UITabBarController.Mode.tabSidebar` in UIKit).
- **Search-as-a-tab convention**: `Tab(role: .search)` (SwiftUI) / `UISearchTab` (UIKit) — semantically marks the search tab so the system separates and trailing-places it automatically.
- **Sheets/action sheets**: increased corner radius, half-sheets inset from the screen edge (content peeks through beneath), action sheets now originate from the triggering control rather than sliding up from the bottom edge, and interaction with the rest of the UI stays possible while an action sheet is open.

## Voice & Copy

Instructional, spec-like developer register — not marketing copy. Sentences are structured as rule + reason ("Reserve for navigation layer... use in toolbars, tab bars, nav bars, sidebars, menus" / "Never stack glass on glass — cluttered, confusing"), consistently paired with an explicit ✓-do / ✗-don't framing that the linked "Adopting Liquid Glass" guide keeps up across every section (App icons, Controls, Navigation, Menus and toolbars, Windows and modals, Organization and layout, Search, Platform considerations). Physical/optical vocabulary recurs throughout, same family as the newsroom announcement covered in the companion dossier in this survey (`apple-newsroom-liquid-glass-announcement-june-2025.md`): "lensing," "bends and shapes light," "gel-like," "energizes with light," "illuminates from within."

## Distinctive Moves

1. **A material with an explicit placement contract, not just a look.** The session doesn't just show Liquid Glass — it draws a hard boundary (navigation layer only, never content layer, never stacked on itself) and backs it with a measurable exception rule (the three-condition Clear-variant gate + the 35% dimming spec). That's a rare thing to find fully specified in a design-language launch: most "glassmorphism" sites copy the look without ever publishing when _not_ to use it.
2. **Accessibility as a first-class variant, not an afterthought.** Reduced Transparency / Increased Contrast / Reduced Motion are presented as automatic system-level transformations of the _same_ material — not a separate "accessible mode" — which is a stronger design-system pattern than most component libraries ship (a toggle that swaps to an entirely different visual style).
3. **Concentricity as a systemic geometry rule.** Deriving every nested corner radius (window → sheet → sidebar → control) from the hardware's own curvature, and shipping it as literal shape primitives (`ConcentricRectangle`, `UICornerConfiguration`) rather than a design-guideline paragraph, is the kind of rule that's directly portable to any token-based design system with nested rounded containers.

## Buzz Evidence

- **Real, ongoing developer/press controversy, not a quiet launch**: TechCrunch ran "Love it or hate it? Apple's new 'Liquid Glass' design is getting mixed reviews" (2025-06-10) [S, techcrunch.com, ~13mo old, 40] documenting readability complaints (low-contrast text over bright wallpapers, Control Center legibility). Wccftech and Cult of Mac ran similar backlash coverage the same week [S, ~13mo old, 35–40].
- **Apple publicly revised the material a year later in direct response**: TechCrunch, "Apple is tweaking its controversial Liquid Glass design" (2026-06-08) [S, techcrunch.com, <1mo old, 60] reports Apple shipped "more uniform refraction and improved contrast" plus a user-facing slider from "ultraclear to fully tinted" at WWDC26 — a verifiable, dated course-correction, not vendor self-praise.
- **A dedicated third-party adoption gallery existed and was press-covered**: 9to5Mac / MacRumors (2025-11-06) [S, ~8mo old, 45] reported Apple published a Liquid Glass design gallery at `developer.apple.com/design/new-design-gallery/` spotlighting ~15 named apps (CNN, Crumbl, American Airlines, Lowe's, Lucid Motors, Photoroom, OmniFocus 4, and others) with specific before/after framing — e.g. Crumbl "moved its pink branding out of the top toolbar into the content layer, letting content shine through the controls," CNN redesigned for edge-to-edge content behind translucent chrome.
- **Verify-don't-trust catch (per this task's instructions)**: the scout entry's `design_notes` claimed the _current_ gallery page still shows those Crumbl/CNN before/after comparisons. Re-fetching that URL on 2026-07-02 (it 301-redirects `new-design-gallery/` → `/design/`) shows the page has since been revised: it now leads with a 4-tool card grid (HIG, Design Resources, Icon Composer, SF Symbols), a 6-video WWDC25 rail led by "Meet Liquid Glass," and Apple Design Award "developer story" case studies (PBJ – The Musical, CapWords, Afterplace) — the Crumbl/CNN third-party spotlight is **no longer present on the live page** as of this crawl. The claim was accurate as of Nov 2025 per press coverage but is **stale on the current page** — a real instance of the "verify, don't trust" instruction catching something.
- **Sustained enough to have its own Wikipedia entry** ("Liquid Glass," referenced in search results), an unusual level of durable public reference for an OS visual-design update.

## What Astryx Should Take

- **Publish an explicit placement contract for any translucent/glass component, not just a visual demo.** Concretely: state in the component doc (`{Name}.doc.mjs`) exactly which layer a glass-style surface belongs to (e.g. "nav/overlay only"), forbid stacking two translucent surfaces, and — if Astryx ever ships a Clear-style fully-transparent variant — gate it behind an explicit rule (media-rich background + tolerant content + bold foreground) the way this session gates Clear, rather than leaving it as a free-choice style prop.
- **Ship the 35%-opacity dimming layer as a real, documented default**, not a "figure it out per instance" note — this is the one hard number Apple actually publishes, and Astryx's own theme-provider docs should carry an equivalent concrete default for any high-transparency treatment rather than leaving it to consumer judgment.
- **Treat accessibility transforms (reduced transparency / increased contrast / reduced motion) as first-class states of the same component**, verified in Storybook, not a separate low-fidelity fallback mode — directly reusable pattern for Astryx's existing `prefers-reduced-motion`/theme-toggle machinery and StyleX `stylex.when.ancestor` patterns.
- **Adopt concentric corner radii as a token rule.** If a card sits inside a container sits inside a page shell, derive the inner radius from the outer one (`ConcentricRectangle`'s logic) rather than hand-picking independent `radius.md`/`radius.lg` values per component — a concrete, testable token rule Astryx's `docs tokens --dense` output could encode.
- **Group related toolbar/action-bar items with a real spacer primitive** (Astryx's analogue to `ToolbarSpacer`/`fixedSpace(_:)`) so visually adjacent actions read as one control cluster — useful directly for Astryx's own docs-site toolbar/nav components.
- **When citing Apple's Liquid Glass as market validation in Astryx's own materials, cite the real, dated controversy-then-fix arc** (mixed reviews mid-2025 → contrast/opacity-slider revision mid-2026) rather than only the launch framing — it's a more credible, more current story, and it directly demonstrates why Astryx's own "ship an intensity/opacity control on any translucency token" recommendation (see the companion newsroom dossier) matters in practice.

## Pages Read

- https://developer.apple.com/videos/play/wwdc2025/219/ (primary target)
- https://developer.apple.com/design/new-design-gallery/ (extra_url; 301-redirects to `/design/` — read at redirect target)
- https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass (extra_url; fetched via Apple's JSON content API after HTML fetch returned an empty template shell)
- https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass (linked from the liquid-glass overview doc; fetched via JSON content API)
- https://developer.apple.com/design/human-interface-guidelines/materials (linked from the adopting-liquid-glass doc; fetched via JSON content API)
