# Heart Direction — launch status

Updated: 2026-10-19. Target branch: `production/homepage-rebuild`.

## Approved launch scope

Finish the homepage exterior, retain the clickable spaceship boarding animation,
and build the dashboard as the launch destination. The broader universe is
future work, not a launch requirement.

- Saturn and Moon: coming-soon states within the dashboard.
- Store: one digital download initially, presented inside Heart Direction.
- Checkout: Payhip with Square as payment processor; Payhip automatically emails
  the download link. Use an embedded Buy button or checkout link. Do not promise
  that every payment/authentication step stays on the same page until tested.
- Socials: Substack, Instagram, and Threads.
- Retain a clear route back to the homepage exterior.
- No artifact trail, takeoff into the void, additional worlds, or built-in cart
  is required for this launch. No sound work is added.

Payhip Free Forever was quoted at approval as $0/month + 5% per sale, plus
payment-processing fees. Recheck pricing before setup. Gumroad, SendOwl,
standalone Square payment links, and custom payment/file-delivery infrastructure
are superseded for launch.

## Existing work reviewed

- Website graybox exists on the target branch with uncommitted work.
- Responsive approved cyan sky assets are integrated; older lavender direction
  is superseded by the cyan exterior recorded in ASSET_MANIFEST.md.
- Website already implements approximately 2.6-second canopy opening and cockpit
  entry, reduced-motion handling, and failure fallbacks. This is runtime motion,
  not an animation baked into the Blender source.
- Production portal v002 and front/three-quarter/side PNGs exist. The smaller,
  raised jewel is visible; its forward projection still needs visual review.
- Spaceship/dashboard v013 is the latest reviewed production source. A temporary
  roughly 11.7 MB GLB exists in the web project, not approved as a final export.
- Portal integration, final dashboard alignment, and commerce remain unfinished.
- Browser/device tests have not been rerun for this revised scope.

## Current milestone and exact next task

The functional simplification is implemented locally: exterior → boarding →
dashboard, Saturn/Moon coming soon, staged Store/Socials panels and Dashboard heart (Back to Homepage).
The prior broad prototype is preserved as inert text snapshots under
`archive/pre-focused-launch/`. No purchase or social links are fabricated.

Exact next task: visually review the revised flow on mobile and desktop, then
finalize portal integration and exterior/dashboard composition. Browser UI
verification was unavailable in this implementation session; see LAUNCH_FLOW_REVIEW.md.

## Remaining milestones

1. Review the implemented simplified flow in a browser.
2. Finalize and integrate the portal, exterior composition, spaceship appearance,
   and dashboard display/controls. Review mobile and desktop views.
3. Connect the Payhip product/Square processor and final social links. Verify
   purchase, email receipt, and downloadable file delivery end to end.
4. Optimize and test loading, keyboard/touch access, reduced motion, failure
   states, return navigation, and physical iPhone Safari before release review.

## Inputs still needed

Product file, name, description, preview image and price; owner-configured Payhip
and Square accounts; checkout/embed details; final social URLs; final visual and
entry-timing review. No account setup, purchase, subscription, publication,
commit, push, merge, or deployment is authorized merely by this scope decision.

## Source and delivery boundaries

Keep Blender masters and raw assets in `heart-direction-production`; keep web
code, documentation and optimized delivery assets in `heart-direction`. Do not
launch Blender in background mode: it crashes on this Mac. Preserve existing
v001/v002 files and other uncommitted work. Work in reviewable milestones; do
not merge or deploy without explicit approval.

Earlier full-universe concepts remain design references only. This status and
the user's newest instructions override older launch requirements.

## Artwork dashboard update — 2026-10-19

The website now renders the original exported v013 dashboard, including the
Blender heart, housing, screen bezel and four physical buttons. Removed the
covering HTML dashboard, replacement SVG heart and destination modals. HTML text
is perspective-aligned inside the model's black display using projected geometry;
accessible 44px minimum targets track the real heart and button caps on resize.
Saturn/Moon show Coming soon on that display. Store and Socials replace the same
screen content; longer content scrolls within the display. The original heart,
labeled Home, restores the exterior and GET IN focus. A plain control fallback
remains available if WebGL/model loading fails. No Blender source or GLB changed.

In-app browser checks passed at 390×844 and 1440×900, plus narrow 320×700
screen fit/touch targets and 844×390 Home navigation. Destination changes,
repeat boarding, keyboard Home activation and focus restoration were verified;
no browser console warnings/errors were captured. Physical iPhone Safari,
reduced-motion and model-failure behavior were not newly browser-tested.
Exact next task: review the dashboard material/camera appearance against the
Blender reference, then continue portal/exterior integration as a separate milestone.

## Homepage assembly preview — 2026-10-19

The exterior assembly pass is implemented locally: portal v002 image cutout,
existing spaceship and sky, turquoise water, and procedural palm/grid-hill/winged
cherub-position stand-ins. Source assets are preserved. Boarding and in-screen
dashboard navigation remain functional; exterior scenery stays visible from the
cockpit. Portal cutout is an AI-derived preview, not a native transparent Blender
export or final approved asset. See HOMEPAGE_ASSEMBLY_REVIEW.md for provenance,
files, browser checks and screenshots. The next milestone is visual review and
composition adjustments across the complete scene, not additional worlds.

## Actual Tripo environment models — 2026-10-19

Supersedes the earlier scenery stand-in notes: supplied neon palm, neon mountain
and silver cherub GLBs now replace the procedural palms, hills and winged markers.
Optimized copies are in assets/models/heart-direction-rebuild/environment/;
source assets remain in production storage and Downloads. Total network payload
for the three models is 4,978,192 bytes, down from 212,163,540 bytes. They load
independently, use uniform scaling, and share resources across placements.
No website dependency or Blender launch was required. See ENVIRONMENT_WEB_REVIEW.md
for triangle counts, tool settings, verification and screenshots. Portal remains
the temporary cutout; lighting/material matching and placement are the next review.

## Reference-fit composition — 2026-10-19

The user-supplied IMG_7483.PNG is the current placement/proportion target. A copy
is stored in production/references/homepage/homepage-composition-reference-v001.png.
Implemented larger cherubs, rebalanced portal/ship, receding palm/mountain rows,
grid banks, decorative glowing heart depth, and water-side GET IN/arrow. Cyan sky,
source artwork proportions and dashboard navigation are preserved. See
REFERENCE_FIT_REVIEW.md for exact settings, screen checks, screenshots and limits.
The next milestone is composition review followed by lighting/material/water
matching; no Blender geometry was changed or final appearance approved.

## Continuous mountain banks / pool border — 2026-10-19

Replaced separated mountain blocks with continuous overlapping mountain-bank
assemblies. Added raised tiled pool walls and illuminated coping between the
water and landscape; palms sit behind the walls on raised decks. This is a
non-destructive web assembly, not a fused edit of the Blender source. See
POOL_BANKS_REVIEW.md for implementation, validation, screenshots and limits.

## Physical cockpit correction — 2026-10-19

Supersedes prior dashboard-clone/ship-hide behavior: the whole ship now remains
visible from the pilot view. Dashboard text and controls project directly onto
the original ship geometry in a single renderer. The closed exterior dome is
visible, opens during boarding and stays out of the forward view inside. Home
restores the closed dome. See COCKPIT_PRESENCE_REVIEW.md for implementation,
mobile/desktop checks and material limitations. Source models remain untouched.

## Mountain variation and edge palms — 2026-10-19

Varied existing mountain instances using deterministic uniform scale (.80–1.22),
yaw, reversed orientation, stagger and deeper overlap. Each bank has its own
layout. This reduces repetition but does not create a welded or uniquely sculpted
ridge. No regeneration is required for this assembly pass. Palms now align at
X ±.86 beside the coping; nearest rows Z .55/1.55 put their fronds in front of
the portal at Z 2.2. Other rows and boarding remain unchanged.

Modified js/exterior-assembly.js on production/homepage-rebuild. No source GLBs,
Blender files, dependencies, commits or deployment changed. Module syntax and
git diff --check passed; browser screenshots reviewed at 390×844 and 1440×900,
all scenery ready flags true. Screenshots: production/renders/terrain-variation-v001/.
Physical iPhone Safari and GPU performance were not tested. Denser overlapping
instances increase rendered terrain cost; instancing still shares resources.
Next: review this composition; if a fully unique ridge is needed, sculpt/join
a versioned working copy in desktop Blender before a new optimized export.

## Pool-edge mountain fit correction — 2026-10-19

Moved mountain feet inward to meet the palms and outside wall edge; removed the
wide bare strip behind the palms. Per-bank material clipping at X ±.82 keeps
terrain outside the water channel. Renderer local clipping enabled. Entry/module
URLs versioned to refresh cached preview modules. Source assets and palm/portal
placement unchanged. Changed exterior-assembly.js, graybox-ship.js, script.js and
index.html on production/homepage-rebuild. Syntax and diff whitespace checks pass;
390×844 and 1440×900 screenshots reviewed (production/renders/terrain-variation-v001/
pool-edge-mobile.png and pool-edge-desktop.png). No Blender launch or deployment.
Terrain remains overlapping source instances; clipping is an uncapped visual cut
hidden mostly by the pool wall, not welded geometry. Next: review the closer fit.

## Tunnel interior reference pass — 2026-10-19

Expanded interior from 11 to 17 receding heart ribs, ratio .80, enlarged first
rib to .98 of opening scale. Added layered pink neon cores/halos, deterministic
stars clipped to the heart outline, and sprite glow accents toward the lower
vanishing point. Existing opening silhouette and surrounding source art unchanged.
This is a decorative 2.5D approximation; full reference bloom, clouds and reflected
water are still unfinished. No new navigation, external asset or dependency.

Branch production/homepage-rebuild. Changed js/exterior-assembly.js plus cache
versions in js/graybox-ship.js, script.js and index.html. Source GLBs/Blender files
untouched; Blender not launched. Syntax and diff checks pass. Browser screenshots
reviewed at 390×844 and 1440×900; boarding to dashboard and Home/focus restoration
passed. No captured console warnings/errors. Screenshots in production/renders/
terrain-variation-v001/tunnel-{mobile,desktop}.png. Physical Safari and performance
profiling not tested. Next: review tunnel proportions/glow before water polish.

## Straight tunnel / aperture correction — 2026-10-19

Supersedes downward convergence in the earlier tunnel pass. Retraced the heart
aperture against portal-v002-cutout.png; black backing slightly overlaps under
the inner chrome rim. Ribs now shrink about one constant center (portal-local
X .01 × portal size, Y -.10 × portal size) rather than descending with distance.
Stars and glow use the same revised aperture coordinates. Decorative 2.5D tunnel
remains an approximation, not traversable geometry. Original assets unchanged.

Changed exterior-assembly.js and module cache versions in graybox-ship.js,
script.js and index.html, branch production/homepage-rebuild. Module syntax and
diff checks passed. Mobile 390×844 and desktop 1440×900 reviewed: no visible sky
gaps at the inner rim, centered straight-back convergence. Proof screenshots:
production/renders/terrain-variation-v001/tunnel-straight-{mobile,desktop}.png.
No Blender launch or deployment. Next: user review of corrected tunnel shape.

## Actual depth corridor and traced aperture — 2026-10-19

Supersedes the hand-fit generic heart and coplanar shrinking outlines. Traced
the connected transparent aperture of the existing 1254×1254 portal cutout
(alpha<96, 318213 pixels, bounds X262–991/Y446–1096), simplified to 58 outline
vertices with 1.5px tolerance. New js/portal-aperture.js records the normalized
outline. A black seam overlaps beneath the chrome rim; original PNG unchanged.

exterior-assembly.js now builds connected dark corridor walls, end cap, floor,
edge/grid guides and 34 equal-size arches at increasing Z positions (60 units
depth). Perspective supplies recession. Per-frame view alignment shears the
corridor axis through the aperture center without moving its front cross-section;
this is a camera-aligned visual tunnel, not a traversal/navigation implementation.
Floor and light appearance remain stylized, not reference-quality reflections.
There is still a pointed heart threshold in the source artwork.

Changed graybox-ship.js to update the tunnel view; cache versions in that file,
script.js and index.html. Branch production/homepage-rebuild. Syntax/diff checks
pass. Fresh browser tab used after original tab connection timed out; 390×844
and 1440×900 reviewed with no visible sky seam. Boarding and Home/focus restore
passed, no captured warnings/errors. Screenshots production/renders/terrain-
variation-v001/tunnel-depth-{mobile,desktop}.png. No original GLB/Blender edit,
Blender launch, dependency install or deployment. Added runtime geometry requires
a later mobile GPU budget check; physical Safari not tested. Next: user review
of corridor depth, then floor/water and light polish.


## Reference-led tunnel refinement — 2026-10-19 cloud review

The user explicitly authorized a tunnel-only visual pass using the re-uploaded
reference: seal the frame opening and suggest an enterable passage extending
straight backward. This supersedes the older instruction to review the previous
corridor as-is. It does not approve the tunnel as final or authorize traversal.

Expanded the dark seam overlap beneath the original chrome rim. Retained the
traced aperture and connected corridor, but moved convergence toward the lower
water horizon. Replaced closed heart ribs with open arches meeting the water,
softened pink neon with a shared glow shader, and replaced transverse floor/grid
lines with a continuous turquoise surface and stylized broken pink reflections.
Arches are equal-size geometry spaced along one straight axis; perspective
supplies recession. Static shader patterns add no animation loop. Shared arch
materials/geometries and fewer tube segments reduce arch geometry from the prior
217,600 triangles to 143,616 triangles despite retaining 34 arches.

Only web runtime geometry/materials and module cache versions changed. Original
PNG/GLBs, cyan sky, ship, landscape, boarding, dashboard, pending commerce and
social configuration are preserved. No Blender, new dependency, commit, push,
merge, deployment or live-domain change. The supplied image remains visible in
the conversation; its durable production reference copy is not in this checkout.

The original frame's pointed lower threshold remains: this is a visual corridor,
not a physically continuous navigable waterway. Reflections are procedural color
patterns, not scene reflections. Physical iPhone Safari, dynamic browser chrome,
and measured device GPU/memory/thermal performance still require verification.
Exact next task: user review of this tunnel on mobile and desktop, especially
frame seams, depth and waterline, before another visual milestone.

Validation: final Chromium checks passed at 390×844 and 1440×900, plus
320×700 reduced motion with the spaceship GLB deliberately blocked. GET IN,
direct ship entry, all four destinations, keyboard Home and GET IN focus
restoration passed. An earlier iteration also passed repeat boarding cycles.
No uncaught application errors or shader compile errors. Missing favicon and
software-renderer ReadPixels performance warnings remain; deliberate model failure
reports the expected fallback warning. JavaScript syntax and git diff --check
pass. Final cloud review screenshots and results are outside the web repository
in /workspace/heart-direction-tunnel-review/. They are local review artifacts,
not a deployed preview or production-storage reference replacement.


## Desktop palm continuity — 2026-10-19

User requested repeated palms across the whole desktop scene. Added 12 paired
rows to the original eight paired rows: foreground Z -1.5, -.8, -.1 and
intermediate/distant Z 2.8, 3.8, 6, 8.5, 12, 16, 22, 29, 34. All retain
X ±.86, height 1.12, original uniform proportions and placement beside the
coping. Additional rows show only at viewport width >=900 with landscape aspect;
visibility updates on resize, preserving the existing 16-palm mobile layout.

Existing palm geometry/textures are shared by all copies; no additional model
requests, source changes, dependency, Blender launch or deployment. Desktop now
renders 40 palms instead of 16, adding roughly 447k triangles while visible;
physical-device GPU profiling remains outstanding. js/exterior-assembly.js holds
the change; index.html, script.js and graybox-ship.js refresh module cache URLs.
Tunnel and dashboard work remains preserved. Next: review desktop palm spacing.

Validation: Chromium screenshots checked at 1440×900 and 1920×1080; resize to
390×844 retained the mobile layout without horizontal overflow. Boarding,
in-screen Moon Coming soon, keyboard Home and GET IN focus restoration passed;
no page errors. Module syntax and git diff --check passed. Review screenshots:
/workspace/heart-direction-palm-review/{desktop,wide-desktop,mobile}.png.


## Solid rolling-hill shape study — 2026-10-19

User requested smoother rounded hills, full desktop coverage, and no hill grid
while reviewing shape. Supersedes the repeated Tripo mountain-bank presentation
for this shape study. Existing mountain GLBs remain preserved and unmodified.

New js/rolling-hills.js builds one continuous smooth-normal height field per
bank, using broad Gaussian rises with staggered centers and wider valleys.
Terrain begins at X ±.82 outside the coping and extends to X ±24, Z -9 to 76;
the smooth inner toe meets the raised bank without crossing the water channel.
Solid matte turquoise material and gentle height shading reveal slopes without
wireframe, grid textures, normal maps, metallic glare or repeated tile seams.
Removed the ground-deck grid for the study; pool-wall tiles and palm artwork
remain unchanged. This is editable runtime geometry, not a Blender source edit
or an approved final landscape. No dependency or external artwork was added.

Two meshes total 86,016 triangles, with shared material. The mountain GLB is no
longer requested by this preview. js/exterior-assembly.js installs the hills;
index.html, script.js and graybox-ship.js refresh module caches. Existing tunnel,
desktop palm rows, boarding, dashboard and pending commerce/social fields remain.
No commit, push, merge, deployment, live-domain change or Blender launch.
Next: review hill height, width, spacing and coverage in the solid study before
restoring any grid or beginning another material treatment.

Validation: final Chromium checks passed at 1440×900, 1920×1080 and resized
390×844: scenery ready, no page errors or horizontal overflow, boarding,
in-screen Moon Coming soon, keyboard Home and GET IN focus restoration. Module
syntax and git diff --check passed. Screenshots reviewed in
/workspace/heart-direction-hill-review/{desktop,wide-desktop,mobile}.png.
Physical iPhone Safari and measured mobile GPU/thermal performance remain
unverified. These are local review images; the live site has not changed.


## More pronounced hill relief — 2026-10-19

User requested more peaks and valleys in the solid hill study. Raised and
narrowed the rounded crests, increased longitudinal mound rows from 13 to 17,
and reduced spacing from 7.1 to 5.4 units. Neighboring mounds use their maximum
height rather than an additive sum so overlap no longer fills the low saddles.
The continuous mesh and smooth vertex normals remain. Subtle slope shading,
aligned with the existing directional light, helps reveal form under the bright
ambient lighting. Terrain coverage and mesh resolution are unchanged; hills
remain solid with no grid. No source model, palm, pool border, tunnel, dependency,
Blender file or live deployment changed. Next: review crest height and valleys.

Validation: 1440×900 and 1920×1080 desktop, resize to 390×844, boarding, Moon
Coming soon, keyboard Home and focus restoration passed without page errors.
Syntax and diff whitespace checks passed. Desktop screenshots reviewed; local
review images are in /workspace/heart-direction-hill-relief-review/.
Physical-device Safari and GPU performance remain unverified. No deployment.


## Hill height relative to palms — 2026-10-19

User requested lower hills reaching roughly half to three-quarters of palm
height. Hill crest amplitudes now derive from the existing fitted palm height
(1.12 scene units): 0.56–0.84 units above the shared raised bank. The smooth
inner toe and intervening valleys remain lower. This replaces the preceding
0.85–1.60 crest range. Peak placement, rounded profiles, valley spacing, solid
material and full scene coverage remain. Height-shading normalization follows
the new maximum; no grid restored. Changes: rolling-hills.js, its integration
and module cache versions. Existing source models, palms, pool, tunnel and
navigation preserved; no dependency, Blender, commit or deployment. Next: review
these hill/palm proportions against the supplied reference.

Validation: Chromium checks passed at 1440×900 and 1920×1080, resize to
390×844, boarding, Moon Coming soon, keyboard Home and focus restoration;
no page errors. Syntax and diff whitespace checks passed. Desktop proportions
reviewed in /workspace/heart-direction-hill-height-review/desktop.png.
Preview server restarted on port 8000 after a stale process stopped responding.
Physical iPhone Safari and device GPU profiling remain outstanding. No deployment.


## Varied low and tall hills — 2026-10-19

User requested more height contrast to match the supplied reference: much shorter
hills among occasional taller pieces. Replaced the narrow 50–75% crest range
with a stable mixed low/medium/tall sequence (~15–75% of palm height). Tallest
crests remain capped at 75%; low crests are mostly 15–30%. Heights coordinate
across each depth row, with slight variation and different left/right offsets,
so rear hills are less likely to mask every valley. Low mounds are narrower;
tall ones have broader rounded shoulders. Terrain footprint, smooth normals,
solid turquoise material and no-grid state remain unchanged. Original sources,
palms, pool border, tunnel and navigation remain intact. No dependency, Blender,
commit, deployment or live-domain change. Next: review height variation against
the reference before another landscape treatment.

Validation: final Chromium checks passed at 1440×900 and 1920×1080, resize to
390×844, boarding, Moon Coming soon, keyboard Home and focus restoration; no
page errors. Syntax and git diff --check passed. Local screenshots:
/workspace/heart-direction-hill-variation-review/. Desktop views visually reviewed.
Physical iPhone Safari and device GPU profiling remain unverified. No deployment.


## Distinct layered rounded hills — 2026-10-19

User approved the reference-led proposal: narrower bases, varied sizes/spacing,
separate near/back layers and stronger slope shading, while keeping the grid off
and tall crests at <=75% palm height. Replaced the blended height field with
compact round mounds whose height and first slope reach zero at their footprints.
A continuous solid bank still covers X ±.82–24 and Z -9–76. Five staggered lanes
per side create overlapping foreground/background forms; outer layers stay lower
and receive restrained atmospheric color separation. Low/medium/tall variation,
rounded shoulders, stronger directional shape shading and flat matching-color
toes distinguish the forms without detached-looking disk bases.

Each lane merges its mound geometry: 10 hill meshes plus 2 ground meshes,
242,884 triangles total. Numeric geometry check found finite coordinates,
terrain outside the pool and highest crest 0.8405 units against 1.12-unit palms
(the extra .0005 is the ground separation offset). This costs more geometry than
the preceding 86,016-triangle study and still needs a measured device GPU budget.
Source GLBs, palm models/placements, sky assets, pool border, tunnel, boarding and
dashboard are preserved. Updated rolling-hills.js and module cache versions; no
new dependency, Blender launch, commit, push, deployment or domain change.
Next: user review of distinct hill forms and layering before adding any grid.

Validation: Chromium checks passed at 1440×900 and 1920×1080, resize to
390×844, boarding, Moon Coming soon, keyboard Home and focus restoration; no
page errors. Final desktop/mobile images reviewed after separating the ground
1mm above the old bank to remove coplanar flicker; no page errors on that final
pass. Module syntax and git diff --check passed. Review images are local at
/workspace/heart-direction-hill-layers-review/{desktop,mobile}.png.
Physical iPhone Safari and measured GPU/memory/thermal costs remain unverified.
The original source assets and live website have not changed.


## Joined hills and firmer crests — 2026-10-20

User requested filling every gap/flat space and slightly sharper hilltops, using
the marked screenshot and existing reference. Supersedes the separate compact
mounds and exposed ground of the preceding pass. rolling-hills.js now builds
one connected surface on each bank. Closer overlapping hill shoulders and low
rolling saddle relief fill the ground between peaks and beside the coping.
The firmer crown profile retains softened tops instead of the earlier broad
domes. Mixed heights, solid turquoise shading and the 75%-of-palm height cap
remain; no hill grid restored. Original assets, palm rows, pool border, tunnel,
boarding and dashboard preserved. Cache URLs updated; no dependency, Blender,
commit, push, deployment or domain change.

Geometry validation: 2 meshes, 221,184 triangles, finite coordinates, no terrain
inside the pool; relief spans .0511–.8329 units above the terrain base against
1.12-unit palms. Physical Safari and measured device GPU costs remain unverified.
Next: user review of joined valleys, coverage and firmer crests.


The pool-side terrain edges are also closed down behind the coping with narrow
skirts: 4 meshes and 222,720 triangles including those seams. This prevents an
open raised lip from revealing the older bank underneath. Terrain coverage,
75%-palm crest cap, no-grid state and original assets remain unchanged.

Validation: fresh Chromium checks at 1440×900 and 390×844 passed asset loading,
no horizontal overflow, boarding, Moon Coming soon, keyboard Home and GET IN
focus restoration, with no page errors. Final sealed-edge screenshots passed
again without page errors and were reviewed at
/workspace/heart-direction-continuous-hills-review/{desktop,mobile}.png.
Module syntax and git diff --check passed. Development server runs on port 8000;
no deployment or live-site change. Physical Safari/device GPU tests remain open.
