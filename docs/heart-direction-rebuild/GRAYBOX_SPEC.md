> Current dashboard artwork/screen behavior supersedes the historical overlay description below; see LAUNCH_FLOW_REVIEW.md and STATUS.md.

# Heart Direction — Functional Graybox

> Scope update — 2026-10-19: This document describes the existing broader prototype, not the new launch target. Preserve boarding and dashboard; remove the active trail/takeoff/world continuation from launch navigation. Saturn/Moon become coming soon; Store uses Payhip with Square and automatic download emails; Socials includes Substack, Instagram and Threads. Simplification is now implemented locally; the states and validation below describe the historical broader prototype. See LAUNCH_FLOW_REVIEW.md for the current implementation and checks. See [STATUS.md](STATUS.md) for current authority.

Canonical scope for this prototype; the explicit complete-graybox request supersedes the earlier background-only milestone. Branch: `production/homepage-rebuild`. Plain static HTML/CSS/JavaScript; no build, package manager, commit, push, or deployment.

## Implemented states

1. **Exterior:** approved responsive airbrushed cyan sky WebPs (portrait/landscape), rendered as one centered 2D cover layer, temporary 3D water plane beneath the hull, SVG heart portal and closed v013 spaceship. The centered exterior camera views the rear (glTF −Z), with the ship facing forward (+Z) toward the tunnel. The waterline meets the hull’s lower bound; the existing CSS water continues the path after boarding. GET IN remains usable during loading or failure.
2. **Boarding:** canopy first lifts, then slides toward Blender rear +Y. Camera moves above the cockpit then down to the pilot position. Canopy hides after entry. Duration approximately 2.6 seconds.
3. **Orientation:** unobstructed open view with no canopy/window framing. Exported dashboard parts render behind a fixed-bottom HTML screen and semantic controls. Copy: “WELCOME TO HEART DIRECTION” / “Journey through Lain Doe Love’s heart, mind, and body of work.” Button: “PREPARE FOR TAKEOFF”.
4. **Portal approach:** approximately 2.2-second heart-outline expansion and daylight-to-void transition; no intermediate message.
5. **Inner world:** “WELCOME TO LAIN DOE LOVE’S HEART”, placeholder neon stream, repeated pale tunnel ribs, distant Saturn/Moon spheres.
6. **Artifact trail:** native scrolling through six widely spaced interactive artifacts. Selection opens a modal and preserves position. Four writing cards (essay, journal, philosophy, creative process), one CD, one TV.
7. **Destinations:** Saturn and Moon landmarks, semantic destination controls, labeled Funemployed portal. Detours open placeholder overlays and return to the same trail position.
8. **End/reset:** temporary endpoint and restart; RESET also remains available during travel.

## Controls and behavior

- GET IN → boarding → orientation; PREPARE FOR TAKEOFF → portal → scrollable trail.
- Scroll/touch/trackpad, normal keyboard scrolling, or BACK/NEXT to move through trail stops. Scrolling reverses tunnel progression and can pause anywhere.
- SATURN, MOON, STORE, SOCIALS available from orientation onward. All are placeholder overlays, not completed destinations.
- Artifacts and Funemployed open native modal dialogs. Escape/CLOSE/RETURN closes; background scrolling locks, focus returns to the opener, and the exact travel position is restored.
- Reduced motion skips boarding/portal animation, removes rotated artifact presentation and continuous scroll-driven tunnel changes; all content and controls remain available.
- No custom history entries, forced scroll physics, automatic travel through the trail, or ambient animation loops.
- A missing model or unavailable WebGL displays a labeled fallback; semantic navigation still works. Slow loading does not block entry.

## Prototype model and runtime

Source: `/Users/shalainderamus/Desktop/grand-play/repos/heart-direction-production/blender/spaceship/working/heart-direction-spaceship-v013-dashboard-reference-match.blend`.

Export: `assets/models/heart-direction-rebuild/spaceship-blockout-v01.glb` — **11,667,668 bytes (11.67 MB / 11.13 MiB)**, 25 nodes, 62,214 triangles, three embedded images. Not optimized or approved for production.

`tools/export-spaceship-blockout.py` exports an isolated scene without saving the source. Includes cleared hull, three refined collar parts, tub, seat, refined canopy, current dashboard mesh/curve components. Excludes source/comparison geometry, archived options, old dashboard, cameras, lights, and labels (controls are HTML). Curves are evaluated into export meshes; geometry and materials are not remodeled or refined. Existing materials are retained; Blender procedural material appearance is not guaranteed to match glTF.

Units: meter convention, scale 1. Source origin/transforms retained. Blender Z-up, forward −Y/rear +Y → glTF Y-up, forward +Z/rear −Z. Canopy runtime lift +0.20 glTF Y and rear slide −0.32 glTF Z. Clear names retained with Blender copy suffix `.001`; runtime locates `CANOPY_SLEEK_REFINED*`, `DASHBOARD_*`, and `BUTTON_*` independently. Export is GLB, Y-up, applied modifiers, no cameras/lights/animations, no Draco.

Three.js 0.170.0, GLTFLoader, BufferGeometryUtils and MIT license are vendored locally under `js/vendor/` (834,787 bytes total). Loader import paths point to local files; no CDN needed during preview. Pixel ratio capped at 1.5; no shadows/postprocessing, and rendering occurs only for boarding, initial display, and resize. HTML/SVG/CSS provide the remainder.

## Known limitations

- Low fidelity only. Water, chrome ribs, planets, portal depth and artifacts are simple 3D/CSS/SVG placeholders, not final artwork or physical simulation.
- HTML dashboard is a responsive graybox overlay, not a final perspective-mapped replica of the Blender screen. Ship body is removed from the first-person view after boarding to keep the view open.
- Trail is a native vertically scrolling spatial approximation, not continuous 3D flight. Destination surfaces and Funemployed world are not built.
- Writing/media/project content, real audio/video playback, social URLs, commerce, newsletter and final sounds are not connected.
- Large unoptimized GLB and prototype media remain; production loading weight, mobile memory and thermal performance require a later optimization milestone.
- Physical iPhone Safari and its dynamic browser chrome have not been tested. Layout uses dynamic viewport sizing, safe-area padding and native scrolling, but desktop mobile emulation cannot certify device behavior.

## Validation and preview

Local command from repository root: `python3 -m http.server 8000 --bind 127.0.0.1`.
Open `http://127.0.0.1:8000`.

Passed automated Chrome checks at 390 × 844 touch/mobile emulation and 1440 × 900 desktop: canopy, cockpit entry, portal, all six trail stops, all destination detours, dialog focus/position restoration, forward/reverse travel, reset and dashboard bounds (under 30% of viewport height). No JavaScript errors in normal runs. Reduced-motion mode with the GLB deliberately blocked also reached the endpoint. `git diff --check` passed. Source Blender SHA-256 matched before/after export (`4782ac6b6df6055eedbc6adaa3d849887a6560a28dbfa5ea50f5e1d988f8a46e`). Only two screenshots: `/tmp/heart-direction-graybox/mobile.png` (orientation) and `/tmp/heart-direction-graybox/desktop.png` (artifact trail).

Next recommended task: review this complete graybox for journey timing, spatial continuity and dashboard usability before authorizing asset optimization or visual refinement.

## Homepage assembly preview — 2026-10-19

The exterior assembly pass is implemented locally: portal v002 image cutout,
existing spaceship and sky, turquoise water, and procedural palm/grid-hill/winged
cherub-position stand-ins. Source assets are preserved. Boarding and in-screen
dashboard navigation remain functional; exterior scenery stays visible from the
cockpit. Portal cutout is an AI-derived preview, not a native transparent Blender
export or final approved asset. See HOMEPAGE_ASSEMBLY_REVIEW.md for provenance,
files, browser checks and screenshots. The next milestone is visual review and
composition adjustments across the complete scene, not additional worlds.
