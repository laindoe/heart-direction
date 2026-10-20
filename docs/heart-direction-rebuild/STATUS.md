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

## Portal v003 GLB review integration — 2026-10-20

User authorized using the current visible desktop Blender assembly. Independent
progressive copies exported without saving/modifying the source. Balanced review
GLB (50,764 triangles, 3,989,388 bytes, six 1024px textures) now replaces the portal
PNG after loading. PNG remains the fallback; separate passage entrance follows
the new mesh aperture. Boarding, scenery and dashboard preserved. Desktop/mobile,
navigation, forced failure, delayed load and simulated reduced-motion application
path checked; physical iPhone Safari and device GPU/memory profiling pending.
See PORTAL_V003_WEB_REVIEW.md. No dependency install, commit, push, merge,
deployment or domain change. Not final artwork/performance approval.
Exact next task: user review of portal appearance versus Blender, especially
jewel facets, bulbs, silhouette and passage seam, before further optimization.

## Submerged portal placement — 2026-10-20

User requested lowering the heart frame into the water, following supplied
reference; entrance clouds are explicitly deferred to another pass. Portal root
lowered .58 units, from waterLevel+1.26 to waterLevel+.68. Whole-model height
remains 1.755, placing its minimum about .1975 below water. Shared portal group
keeps passage entrance aligned; shoulder cherubs follow the portal placement.
Passage convergence has a waterLevel+.90 minimum to avoid the main water plane
occluding its distant opening after lowering. Existing stylized passage water
remains a visual approximation; cloud concealment/water polish not included.
Source .blend, GLB, PNG, model proportions, ship, landscape and dashboard preserved.
Reference saved to references/homepage/portal-waterline-reference-v001.jpg.
Changes: exterior-assembly.js, module cache URLs in graybox-ship.js, script.js and
index.html; this status/asset manifest and local review screenshots. No new
geometry, textures, dependencies, Blender launch, deployment, merge or domain change.
Next: review submerged placement; cloud entrance treatment is a separate pass.
Validation: 390×844 and 1440×900 visual review, GET IN boarding, Moon state,
keyboard Home/GET IN focus restoration passed; no captured browser errors or
desktop horizontal overflow. Syntax/diff checks passed. Local screenshots:
renders/portal-v003-review/submerged-{mobile,desktop}.png. Physical Safari,
fresh failure/reduced-motion tests and device profiling were not repeated for
this placement-only change.

## Portal distance and level passage water — 2026-10-20

User approved moving the whole portal/tunnel farther from the ship and making
inside water continue the exterior plane/perspective. Portal Z is now 4.2
(previously 2.2), with unchanged model size. Root Y is waterLevel+.60 (an extra
.08 lower) so the inner pointed opening crosses the actual water plane; whole
frame bottom is about .2775 underwater. Cherubs follow their existing offsets.

Supersedes the preceding camera-driven shear and waterLevel+.90 convergence
clamp. Passage now has only a fixed aperture translation, no vertical or lateral
shear. Interior floor world Y stays waterLevel+.002 throughout its depth (tiny
separation prevents coplanar flicker), matching the horizontal exterior surface.
Removed tilted triangular threshold patch. Arches still use existing geometry/
materials; standard perspective establishes their recession as camera boards.
Source .blend/GLB, proportions, scenery, boarding and dashboard unchanged. Clouds
remain explicitly deferred; water shading/reflections and the narrow pointed
source opening remain provisional. No dependency, deployment, merge or domain
change. Files: exterior-assembly.js; module versions in graybox-ship.js, script.js,
index.html; status/manifest/review docs and local screenshots.

Validation: 390×844 and 1440×900 exterior/cockpit visual review, mobile GET IN,
Moon and keyboard Home/focus restoration, desktop ship-pointer boarding checked.
Numeric check: both PNG and GLB apertures intersect the water twice; world floor
Y matches exterior within .002 at front/back with zero slope. Syntax and diff
checks passed. Physical Safari, real touch, fresh failure/reduced-motion tests
and device profiling not repeated. Local images:
renders/portal-v003-review/distant-level-{mobile,desktop}.png.
Exact next task: user review of portal distance and continuous water perspective
before starting the separate entrance-cloud pass.

## Enlarged portal with continuous pool walls — 2026-10-20

User requested a bigger heart tunnel with the exterior water and both surrounding
walls continuing inside. Supersedes the previous small/narrow portal fit.
Portal size parameter4.3 (was1.95): uniformly fitted GLB height3.87, root Y
waterLevel+.35, Z6.2. This larger, more deeply submerged opening clears the
existing pool cross-section; moving the enlarged assembly farther along the
channel retains separation from the ship. Source proportions/materials unchanged.
Cherubs retain .68 model width and move to the enlarged shoulders.

Removed separate tunnel floor/shader/edge guides. The existing world-horizontal
exterior water plane continues through the entire44-unit corridor, with no
surface seam, slope or material swap. Both walls, tile lines, illuminated coping
and bank decks are single continuous runs from Z-5 to50.2 (previous end35).
No tapered/narrowing channel or new route. Inner heart arches and separate passage
remain; native frame/GLB/source not cut or re-exported. Palms/landscape, ship,
boarding, dashboard and PNG fallback preserved. Clouds remain deferred.

Numeric clearance: GLB aperture half-width >=.8508 at water and >=.9583 at coping
height, versus outer coping X.8325. PNG fallback also clears. Existing water ends
at Z65, beyond corridor end50.2. JavaScript syntax and diff checks pass. Further
mobile/desktop visual/navigation results recorded below. No dependency, Blender,
commit, push, merge, deployment or domain change. Next: user review of enlarged
heart and continuous pool before the separate entrance-cloud pass.
Validation results: final390×844/1440×900 screenshots reviewed; mobile boarding,
Moon, keyboard Home and GET IN focus restoration passed. Desktop portal-ready,
no horizontal overflow and no captured browser errors. Syntax/diff checks pass.
Physical Safari, device profiling and fresh forced-failure/reduced-motion checks
not repeated. Full-size mobile frame reaches viewport edges; cloud concealment,
lighting/reflection quality and distant end-cap treatment remain provisional.

## Reference-led visible heart / palms stop outside — 2026-10-20

User requested palms stop at entrance, roughly three quarters of heart visible,
and water covering only the lower heart point. Saved supplied references as
references/homepage/portal-visible-heart-reference-v002.png and
portal-scale-markup-v001.png. Supersedes the preceding deeply submerged fit.

Uniform portal height8.1 (size parameter9), root waterLevel+1.98, Z16.2. About
74.44% of total model height is above water; source geometry/proportions unchanged.
This larger physical structure preserves full pool width while water crosses the
lower point: GLB half-width >=.8788 at water, >=1.023 at coping; outer coping.8325.
Both mobile and desktop palm lists filter at portalZ-1.2; last actual mobile row
Z14, desktop extras end12. No palm instance is placed inside the tunnel. Fronds
in front can overlap the entrance in perspective, as exterior objects.

Passage depth84 with same34 arches spread through it, to keep enlarged tunnel
recession. Water/walls/coping stay continuous and horizontal, now through Z100.2.
Main water plane depth140 spans Z-15..125; camera far140 covers the longer scene.
No added arch count, textures, dependencies or source exports. Cherubs retain .68
width and move to enlarged shoulders. Ship/dashboard/boarding and PNG fallback
preserved. Clouds remain deferred. Distant end-cap/star/light treatment and
water appearance remain provisional, not final reference fidelity.

Files: exterior-assembly.js, graybox-ship.js, script.js/index.html module versions,
status/manifest/review docs, two references and local screenshots. Validation:
390×844/1440×900 exterior review, mobile boarding/Moon/keyboard Home and focus
restoration; desktop portal-ready, no overflow, no captured browser errors.
Numeric water/coping clearance, JS syntax and diff checks pass. Physical Safari,
GPU/memory, forced failure and reduced-motion checks not repeated. No Blender,
commit, push, merge, deployment or live-domain change. Screenshots:
renders/portal-v003-review/visible-heart-{mobile,desktop}.png.
Exact next task: review visible heart/palm cutoff against references before the
separate entrance-cloud pass.

## Mountain banks stop outside tunnel — 2026-10-20

User requested mountains stop at tunnel too. Rolling-hill meshes now end at Z15,
1.2 units before entrance16.2, matching palm center cutoff. Last1.8 units taper
to bank height; rear shoreline is sealed. No terrain triangles exist beyond15.
Resolution follows shortened depth at approximately prior sample spacing:
4 meshes,63,796 triangles (previous222,720). Water, walls/coping continuing inside,
portal proportions, palms, ship, boarding/dashboard and source artwork preserved.
Changes: rolling-hills.js, exterior-assembly.js integration, module versions in
graybox-ship.js/script.js/index.html, status/manifest. Local screenshots:
renders/portal-v003-review/mountain-stop-{mobile,desktop}.png.
Numeric geometry check: finite positions, maxZ15, four meshes/63,796 triangles;
syntax/diff checks pass. Desktop1440×900/mobile390×844 visuals reviewed, mobile
boarding checked. Physical Safari/performance not retested. No dependency,
Blender, deployment, merge or domain change. Next: review mountain/palm termination
before the separately requested future entrance-cloud pass.

## Palm alignment at frame edges — 2026-10-20

User requested palms move back slightly toward the heart frame edges rather
than across its opening. Shifted both mobile/base and desktop palm rows outward
from X±.86 to±1.14 on the banks. Depths, height1.12, yaw, row count and entrance
cutoff retained. Portal, hills, water, walls, ship/boarding/dashboard unchanged.
Updated exterior-assembly.js and module cache URLs in graybox-ship.js/script.js/
index.html; status/manifest notes. Visual checks at1440×900 and390×844 passed,
portal-ready true, no mobile overflow or captured browser errors; syntax/diff
checks passed. Navigation/device performance not retested for placement-only edit.
No source/dependency/Blender/deployment/merge/domain change. Images:
renders/portal-v003-review/palms-frame-edge-{desktop,mobile}.png.
Next: user review of palm/frame alignment before the separate cloud pass.

## Restore palms / reserve signage space — 2026-10-20

User reversed outward palm shift and requested slightly smaller heart with room
above for Tunnel of Love signage and two alien cherubs. Restored all palm X to
±.86. Uniform portal size parameter8 (was9), height7.2, root waterLevel+1.65;
Z16.2/depth84 retained. About72.9% above water. Root adjustment keeps full pool
clearance: aperture half-width >=.8763 at water, >=1.014 at coping, versus.8325
outer coping. Existing cherubs follow their shoulder formula, size unchanged.
No sign asset was added in this fit-only pass. Source artwork/GLB, cutoff of
palms/mountains, continuous water/walls, ship, boarding/dashboard unchanged.
Files: exterior-assembly.js; module versions in graybox-ship.js/script.js/index.html;
status/manifest and local sign-space-{mobile,desktop}.png review screenshots.
390×844/1440×900 visuals reviewed, portal-ready true, no desktop overflow or
captured browser errors; numeric clearance, syntax/diff checks pass. Navigation,
physical Safari and device performance not retested. No dependency, Blender,
merge/deployment/domain change. Next: review reserved space against actual sign
and cherub composition before implementing the signage asset.

## Remove loading heart / mount sign / enlarge cherubs — 2026-10-20

User requested removal of old smaller heart visible during loading, Tunnel of Love
sign above new frame, and proportionate cherubs. Removed legacy HTML PNG image,
CSS placement and Three.js PNG plane/preload. No old-aperture passage is created
before current GLB success. Old PNG remains on disk only as an inactive backup;
this newest request supersedes displaying that backup during loading/failure.
Entry/dashboard still available without portal artwork. No new fallback artwork.

Standalone marquee source from production assets/tripo-raw/tunnel-marquee-raw.glb
(the input used by earlier desktop Blender assembly) optimized with existing
local glTF Transform/meshoptimizer/Sharp. Review GLB:
assets/models/heart-direction-rebuild/portal/tunnel-of-love-marquee-v001-review.glb.
1,602,356 bytes,17,998 triangles,three1024px textures; source71,251,744 bytes /
1,915,908 triangles unchanged. No Blender run or dependency install. This is a
review derivative, not a claim of final Blender cleanup/appearance approval.
Script/report: tools/portal/prepare-marquee-review.cjs and marquee-review-report.json.
Sign uniformly fitted to92% frame width, bottom at frame top−.22, yawPI, independent
loader. Authored lettering/materials retained. Cherub width1.44 (was.68), shoulder
X±2.88, bottom at frame top+.20; original mirrored poses retained.

Changes: exterior-assembly.js, index.html/styles.css, cache versions in
script.js/graybox-ship.js, new sign GLB/script/report, status/manifest/review docs.
Frame, water/walls, palm/mountain cutoff, ship/boarding/dashboard preserved.
No merge/deployment/domain change. Next: review sign lettering/materials, mount,
and cherub proportions against Blender before final art approval.
Validation: desktop1440×900/mobile390×844 final sign/cherub screenshots reviewed;
no legacy HTML image, portal/marquee ready true. Mobile boarding, Moon, keyboard
Home and GET IN focus restoration passed. No captured warnings/errors in final
browser run. JS syntax/diff checks pass. Physical Safari, device profiling and
forced-failure/reduced-motion scenarios not newly tested. Sign material/lettering
and overlap remain review candidates; no final approval claimed.

## Smaller marquee / regal cherub placement — 2026-10-20

User supplied red markup requesting slightly smaller sign and more prominent,
regal cherubs with readable character details; lettering cleanup explicitly later.
Sign width80% frame (was92%, ~13% reduction). Cherub width2.24 (was1.44, ~56%
increase), uniform original proportions. Centers X±2.16, bottom frame top+.08,
Z portalZ-.35 to stand forward of sign corners. Brought inward to keep full
figures visible in mobile portrait; poses/materials and sign letters unchanged.
Saved markup: references/homepage/marquee-cherub-placement-markup-v001.png.
Files: exterior-assembly.js; cache URLs graybox-ship.js/script.js/index.html;
status/manifest and local regal-cherubs-{mobile,desktop}.png screenshots.
390×844/1440×900 visuals reviewed, portal/sign ready true, no desktop overflow or
captured browser errors; JS syntax/diff checks pass. Navigation, physical Safari
and performance not repeated for placement-only edit. No source/export changes,
dependency, Blender, merge, deployment or domain change. Next: user placement
review, then separately authorize lettering cleanup. Clouds remain deferred.

## Cherubs outward/down toward frame — 2026-10-20

User requested a small outward/downward move around sign edges, closer to heart
shoulders. Cherub centers now X±2.32 (was±2.16), bottoms frame top−.20 (was+.08).
Width2.24, mirrored poses, depth/materials unchanged; sign/letters/frame and all
other scenery preserved. Mobile fit keeps figures inside viewport. Changes:
exterior-assembly.js, cache URLs graybox-ship.js/script.js/index.html, status/
manifest; screenshots cherub-shoulders-{mobile,desktop}.png.390×844/1440×900 visual
checks and JS syntax/diff checks passed; no captured browser errors. Navigation/
physical Safari/performance not repeated for placement edit. No source change,
Blender/dependency/deployment/merge/domain change. Next: user placement review
before separately proceeding to lettering cleanup.

## Marquee inscription confirmed / cleanup inspection prepared — 2026-10-20

User confirmed exact inscription/line breaks: TUNNEL OF / LAIN DOE / LOVE.
Lettering and diamond cleanup now authorized as the next art task. Before changing
the dense generated mesh, prepared desktop script tools/portal/inspect-marquee-cleanup.py:
imports existing raw marquee into a separate in-memory inspection scene, writes
mesh/material/image/font inventory and source hash to tools/portal/reports/, shows
completion popup. No .blend save, source edit or website change. Leaves inspection
scene active; do not save over existing master. Python syntax/diff checks pass;
desktop execution and visual inspection pending. Branch production/homepage-rebuild.
Next: user runs inspection script; review report and sign surface before preparing
non-destructive lettering/diamond replacement. Preserve approved website placement.

## Marquee cleanup candidate script — 2026-10-20

Desktop intake report received: single fused mesh1,915,908 triangles,1,007,023
vertices, one UV/material set, three4096px packed textures, source unchanged.
Prepared tools/portal/build-marquee-cleanup-review.py for desktop execution.
Separate scene references source read-only, adds reversible ruby face panel,
editable approved three-line text using installed Times New Roman Bold as a
review typeface, and46 independent32-triangle faceted stones with shared mesh.
This is an overlay candidate, not destructive removal of old letters or final
housing/diamond restoration. Original shell/materials retained unchanged.
Desktop Eevee front/angled PNG diagnostics generated on run; no .blend save,
web export, website change or dependency install. Syntax/diff checks pass;
Blender execution/coverage/typography/side-profile review pending. Next: run this
script while inspected sign scene remains in memory, then review both images
before further cleanup/export. Do not save over original homepage master.

## Cleanup candidate first-render review — 2026-10-20

Desktop candidate20261020T201157474261Z generated front/angled images. Review
found severe text crowding: width-only fit produced excessive cap heights,
overlapping lines and intrusion into diamond rows. Candidate rejected for export;
website/source unchanged. Revised build-marquee-cleanup-review.py (revision2):
per-line height+width limits, separated line centers, moved diamond rows outward,
added independent thin pearl trim. Python syntax/diff checks pass; desktop rerun
and visual verification pending. Next: reopen updated script in Blender and run;
inspect new renders before continuing any cleanup/export.

## Cleanup bounds correction — 2026-10-20

Revision2 desktop renders still overlapped. Found implementation error: Blender
object dimensions use local text axes, so rotated text dimensions.z measured
extrusion rather than visible cap height. Revised script3 evaluates actual mesh
vertices in world space; fits X/Z extents, centers visible ink, asserts width/
height limits and >=2%-of-sign-height line gaps before rendering. Records actual
text bounds in report. Syntax/diff checks pass; desktop execution still needed.
Both earlier candidates rejected; source and website unchanged. Next: reopen
updated script and run once more, then inspect measured report and render.

## Cleanup revision3 desktop review — 2026-10-20

Received candidate20261020T201555819649Z with revision3 measured world-space
text bounds. Front/angled renders reviewed: all three lines now readable, no
line overlap, diamond rows clear the letterforms. Vertical ink gaps ~.02043 and
.00929 source units, exceeding .00743 minimum. Source sign retained beneath
reversible face overlay; website unchanged. Candidate uses flatter ruby panel,
plain pearl serif lettering and separate faceted stones, a visual departure from
the old generated glitter texture. It requires user style approval before export,
not a claim of final cleanup or original diamond restoration. No new source/save,
web integration, dependency, merge or deployment. Next: user review of revision3
face/type/diamonds, then prepare separate optimized export if accepted.

## Regenerated owner-cleaned marquee source located — 2026-10-20

User regenerated marquee in Tripo, cleaned it in desktop Blender and requested
replacement at current approved website mounting position. Source located:
production/blender/homepage-exterior/working/heart-direction-homepage-tunnel-marquee.blend
(197,875,018 bytes at lookup). Rejected face-panel experiments must not be used.
Prepared tools/portal/export-cleaned-marquee.py: desktop-only, current open source,
preflight one visible mesh (otherwise report and stop), isolated evaluated mesh/
material/image copies;40k/24k/18k triangle targets, textures <=1024, standard GLB
without decoder/new dependency. Source/file transform preservation hashes/report;
no .blend save. Website unchanged pending export/appearance inspection.
Syntax/diff checks pass, Blender execution pending. Exact next task: user runs
script with cleaned marquee open, then inspect candidates and swap only marquee
URL while retaining current frame/sign mounting formula and cherub positions.


## Owner-cleaned marquee website review — 2026-10-20

Desktop export completed; integrated balanced cleaned-v002 GLB only at existing
approved marquee mounting.24,000 triangles,2,421,860 bytes,3×1024² textures.
Original .blend and transforms verified unchanged by desktop report. Previous
marquee retained. No cherub/frame/scenery/boarding/dashboard placement changes.
Cache tags refreshed to cleaned-marquee-12; export settings/hashes in manifest.

Validated JavaScript syntax and git diff whitespace; all3 candidate meshes finite
with valid indices. Browser1440×900 and390×844: marquee ready, no horizontal
overflow; visual screenshots saved under `renders/portal-v003-review/`:
`cleaned-marquee-v002-desktop.png`, `cleaned-marquee-v002-mobile.png`.
Boarding completed, Moon displays Coming soon, keyboard Home restores exterior
and GET IN focus. No browser warnings/errors captured. Reduced-motion and failure
paths unchanged and not rerun for this asset-only swap. Actual iPhoneSafari,
dynamic chrome, slow-network and frame-time checks remain pending; no final
appearance/performance approval implied. No merge, commit, deployment or domain
change. Branch: production/homepage-rebuild.

Exact next task: owner reviews cleaned letters/materials in the current mounting;
then assess actual mobile performance before approving this asset as final.


### Cherubs lowered to marquee/frame junction — 2026-10-20

User requested covering the corner gap between marquee and heart frame.
Both cherub bases lowered0.65 world units: frame top−.20 → frame top−.85.
Width2.24, X±2.32, depth portalZ−.35, orientation and source assets unchanged.
Marquee mounting, frame, scenery and navigation unchanged. Cache tag:
cherub-junction-13. Desktop1440×900 and mobile390×844 screenshots show cherubs
bridging both outer sign/frame corners; no mobile horizontal overflow, marquee
ready. Module syntax and diff whitespace pass. Screenshots:
`renders/portal-v003-review/cherub-junction-desktop.png` and
`renders/portal-v003-review/cherub-junction-mobile.png`.
Placement-only change adds no payload; physical iPhoneSafari/performance review
remains pending. Navigation/reduced-motion/failure logic unchanged, not rerun.
Branch production/homepage-rebuild; no deployment/merge. Next: owner reviews
this lower corner placement before further adjustment.


### Cherub bow alignment widened — 2026-10-20

User requested a little more outward spacing so bows meet marquee outer edges.
Centers X±2.32→±2.56 (portalSize*.32); base remains frame top−.85,
width2.24 and orientation/depth unchanged. Only placement and cache tags changed
(cherub-edges-14); no asset payload changes. Desktop1440×900 and mobile390×844
visually checked; no horizontal page overflow. On narrow portrait the outermost
cherub extremities approach/cross viewport edges; owner review remains pending.
Screenshots renders/portal-v003-review/cherub-edges-{desktop,mobile}.png.
Module syntax/diff checks pass; navigation/motion/failure paths unchanged and not
rerun. Sources, sign/frame and other scenery preserved. No merge/deploy.
Branch production/homepage-rebuild. Next: owner review of bow/edge alignment.


### Cherubs moved beside marquee ends — 2026-10-20

Per owner's annotated reference, X centers widened±2.56→±3.04
(portalSize*.38), revealing inward-facing bows alongside sign ends. Height,
width, yaw and mirror preserved, as requested; arrows retain inward direction.
Cache tag cherub-clearance-15. Desktop1440×900 visually checked. Narrow390×844
review exposes a remaining limitation: outer wings/legs crop at viewport edges;
responsive composition fit is needed before placement can be final. Screenshots:
renders/portal-v003-review/cherub-clearance-{desktop,mobile}.png.
Syntax/diff checks pass. Source assets, marquee/frame, boarding and other scenery
unchanged. No new payload, merge or deploy; branch production/homepage-rebuild.
Next: review desktop placement, then fit complete marquee/cherub group on mobile.


### Cherub presence adjustment — 2026-10-20

Owner requested lower and slightly larger cherubs. Width2.24→2.48 (+10.7%);
base frame top−.85→frame top−1.20 (down.35). X±3.04, orientation/depth unchanged.
Placement only; source assets/sign/frame/boarding preserved, no added payload.
Cache tag cherub-presence-16. Desktop1440×900 and mobile390×844 inspected;
narrow mobile still crops outer extremities, requiring responsive composition
review. Syntax and whitespace checks pass; unchanged interaction/motion/failure
paths not rerun. Screenshots renders/portal-v003-review/cherub-presence-{desktop,mobile}.png.
Branch production/homepage-rebuild; no merge/deploy. Next: owner placement review,
then fit full group within portrait framing before final approval.


### Consistent palm trunk and coping grids — 2026-10-20

Owner requested regular square palm-trunk neon cells and grids on tops of both
pool walls. Runtime derivative keeps original frond artwork/row transforms,
removes central lower trunk triangles (within radius .057*sourceHeight, below
.82*height) and adds a straight cylinder radius .035*height, height .82*height.
Six columns ×22 rows produce near-square surface cells; anti-aliased shader
uses cylindrical UVs rather than irregular baked lines. Source GLB unchanged.
Crown retains15,736 triangles (original18,622); new shared trunk96 triangles,
total15,832 per palm. Adds one shared-material mesh draw per visible palm;
no extra downloaded texture/model or dependency. Original crown textures remain.

Both coping tops now use dark tile backing and pink square grids: width .145,
three cells across (cell side .048333), full poolStart−5 to poolEnd100.2.
Each top adds2,181 line segments in one draw. Existing inside-wall grid retained.
Marquee/cherubs/portal/water/navigation and source artwork files preserved.
Changed exterior-assembly.js and cache references in graybox-ship.js, script.js,
index.html (palm-square-grid-17). No merge/deploy; production/homepage-rebuild.

Validation: module syntax/diff whitespace pass; desktop1440×900 and390×844
screenshots inspected, no mobile page overflow or captured console warnings/errors.
Mobile GET IN reaches dashboard; Home returns exterior with GET IN focus. Screenshots
renders/portal-v003-review/palm-square-grid-{desktop,mobile}.png.
Actual iPhoneSafari/dynamic chrome, frame-time profiling, reduced-motion and
slow/missing-media cases not rerun here; code paths unchanged. Fine distant coping
lines may alias on physical devices. Prior mobile cherub cropping remains open.
Next: owner review of square-cell spacing and brightness before further changes.


### Original palms restored — 2026-10-20

Owner rejected procedural palm trunk grid. Removed runtime crown filtering,
replacement cylinders and trunk shader; original neon-palm-v001.glb now displays
whole with original materials/textures, scale and rows. New coping-top grid retained
because request specifically reverts palms. Cache tag palm-original-18. Source
files unchanged; original18,622 triangles per palm restored, extra trunk draws removed.
Branch production/homepage-rebuild; no merge/deploy. Syntax/whitespace checked.
Next: owner reviews original palms alongside retained coping-top grid.


### Heart-flower placeholders and coping bulbs — 2026-10-20

Owner requested placeholder custom heart flowers between palms and lighting along
both pool-wall tops, following supplied reference. Added10 mirrored clusters,
three flowers each, depths1.05/3.175/5.9/8.5/12, X±(.91/.935/.96), heights
.24/.37/.29 above bank. Flat pink heart heads, slim stems and teal leaves are
explicit temporary placeholders, independently named/replacable. Flowers stop
before tunnel; original palm meshes/materials/rows preserved.

Added176 warm-white bulbs, radius .023, centered at X±.76/Y water+.199, Z−4.65
through poolEnd100.2 every1.2. Shared instanced sphere geometry100triangles per bulb
(17,600 instanced triangles), shared64×64 procedural radial glow texture and one
Points draw. Three flower instance batches plus lamp/glow =5 extra draw calls.
No dynamic point lights, downloaded assets or dependencies. Bulbs provide visible
emissive/glow markers; they do not cast real light or water reflections. No new
ambient animation; compatible with unchanged reduced-motion handling.

Updated exterior-assembly.js, module cache references in graybox-ship.js/script.js/
index.html (flowers-pool-lights-19), manifest and status. Sources, marquee/cherubs,
water, tunnel, dashboard preserved. Branch production/homepage-rebuild; no deployment.
Desktop1440×900/mobile390×844 screenshots inspected; no horizontal page overflow,
no initial console warnings/errors; syntax/diff checks pass. Review screenshots:
renders/portal-v003-review/flowers-pool-lights-{desktop,mobile}.png.
Physical iPhoneSafari/GPU performance and slow/missing media remain unverified for
this addition; instancing limits draw calls, far glows can still overdraw. Existing
mobile cherub cropping remains. Next: owner review of flower placement/light spacing,
then owner supplies final flower artwork for a separately approved replacement.


### Mountain summit sampling fix and branch push — 2026-10-20

Owner authorized fixing flattened tips and pushing production branch. Added exact
in-bounds crest X/Z coordinates to existing terrain grid, instead of globally
subdividing everything. Height function, mountain positions, color/material,
shoreline sealing and Z15 tunnel stop preserved. Four terrain/seam meshes now
110,328 triangles,2,735,592 geometry-buffer bytes (previous63,796 triangles).
No textures/downloaded terrain asset added. Physical mobile performance remains
unprofiled. Cache references refreshed (hill-crest-fix-20 / hill-crest-samples-7).

Validation: constructed actual geometry using existing Three module in Node;
all attributes finite, all indices in range, terrain bounds stop at Z15. Module
syntax/diff checks pass. Desktop1440×900/mobile390×844 screenshots inspected;
environmentReady true, no mobile overflow or captured browser warnings/errors.
Screenshots renders/portal-v003-review/mountain-crest-fix-{desktop,mobile}.png.
Unchanged navigation/reduced-motion/failure paths not rerun for this sampling fix.

Push scope includes current authorized artwork integration/runtime dependencies,
optimized served GLBs, scripts and measured export reports. Blender masters,
raw references/renders and unused export variants stay local. Branch
production/homepage-rebuild; no merge, deployment or domain change authorized.
Next: owner reviews peaks; profile physical mobile performance before final approval.
