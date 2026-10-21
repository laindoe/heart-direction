# Heart Direction — Asset Manifest

> Scope update — 2026-10-19: Launch requires the exterior, spaceship/boarding, dashboard, one digital product and social links. Artifact, void, Saturn/Moon world, Funemployed and full cart/store kits below are deferred. Portal v002 and spaceship/dashboard v013 now exist in production storage; the graybox spaceship GLB is temporary. Payhip/Square replaces Square-cart or Gumroad assumptions. Retain the approved cyan-sky entry below. See [STATUS.md](STATUS.md) for current authority.

This manifest tracks source creation, Tripo mesh generation, Blender cleanup,
and final web delivery. Filenames are proposed conventions, not existing files.

## Pipeline labels

- **2D plate** — generated or illustrated image used as a responsive layer.
- **Tripo mesh** — mesh generated from approved turnaround references.
- **Blender-built** — procedural or manually constructed directly in Blender.
- **UI** — semantic HTML/CSS/SVG or a small raster element, not baked into 3D.
- **Content** — supplied writing, image, audio, video, or project media.

## Opening scene

| Asset | Source route | Required views or files | Final web candidate | Status |
|---|---|---|---|---|
| Lavender cloud sky | 2D plate | Mobile 9:16 and desktop 16:9 masters | AVIF/WebP picture sources | Next |
| Distant grid hills | Blender-built or 2D layer | Modular hill tile and depth variations | Transparent AVIF/WebP or GLB after testing | Planned |
| Palm promenade | Tripo mesh or Blender-built | One approved palm turnaround plus controlled variants | Transparent layers or instanced GLB | Planned |
| Water trail | Blender-built | Shader, reflection behavior, mobile fallback | Runtime plane or rendered layers | Planned |
| Outer heart portal | Tripo mesh + Blender cleanup | Orthographic turnaround and detail sheet | GLB or layered renders | Planned |
| Modular inner heart rib | Blender-built from approved profile | Front, side, top, and perspective profile | Instanced geometry or rendered tunnel | Planned |
| HEART DIRECTION marquee | Tripo mesh + Blender cleanup | Housing turnaround; lettering separately | GLB/layered render plus accessible HTML label | Planned |
| Center heart jewel | Tripo mesh + Blender cleanup | Full turnaround | GLB or transparent render | Planned |
| Portal bulbs/sockets | Blender-built | Component detail sheet | Instanced geometry or baked detail | Planned |
| Alien cherub master | Tripo mesh + Blender cleanup | Neutral orthographic turnaround before posed version | GLB or transparent animated render | Planned |
| Cherub wings | Tripo mesh or separate cleanup part | Open wing views and attachment points | Part of optimized cherub asset | Planned |
| Bow and arrow | Tripo mesh or Blender-built | Straight orthographic component sheet | Part of cherub asset | Planned |
| One-seat spaceship | Tripo mesh + Blender cleanup | Front, rear, sides, top, bottom, front 3/4, rear 3/4; canopy states | Optimized GLB and/or rendered layers | Planned |
| Pilot chair | Tripo mesh + Blender cleanup | Front, back, sides, top, 3/4 | Part of ship/cockpit scene | Planned |
| GET IN treatment | UI or Blender-built typography | Front master and reflection mask | HTML/SVG plus emissive/reflection layer | Planned |

## Cockpit and dashboard

| Asset | Source route | Required views or files | Final web candidate | Status |
|---|---|---|---|---|
| Dashboard shell | Tripo mesh + Blender cleanup | Front, rear, side, top, 3/4 | GLB or layered render | Planned |
| Dashboard top | Tripo mesh or Blender-built | Match approved broad chrome profile | Integrated geometry | Planned |
| Heart ornament | Reuse/variant of heart jewel | Scale and mounting details | Integrated geometry | Planned |
| Central display | UI | Responsive black display region | Live HTML/CSS surface | Planned |
| Four destination controls | Blender-built shell + UI labels | Saturn, Moon, Store, Socials | Geometry plus accessible buttons | Planned |
| Cart control | UI | Persistent state and count | HTML button | Planned |
| Fullscreen control | UI | Icon, focus, active state | HTML/SVG button | Planned |

Do not bake essential text or controls into a flat render when they require
accessibility, responsiveness, or state changes.

## Void trail kit

| Asset | Source route | Notes | Status |
|---|---|---|---|
| Welcome arch | Portal-kit variant | “Welcome to Lain Doe Love's Heart” plus cherubs | Planned |
| Repeating trail arches | Modular Blender kit | Wide spacing; supports 2–3 artifacts per arch | Planned |
| Faint cloud layers | 2D plates or volumes | Lightweight and subtle | Planned |
| Saturn landmark | Blender-built or generated mesh | Always visible in far background | Planned |
| Moon landmark | Blender-built | Always visible in far background | Planned |
| Door portal master | Tripo mesh + Blender cleanup | Centered on path; configurable world treatment | Planned |
| Funemployed threshold | Mixed 2D/3D | Teaser only at launch | Planned |

## Artifact library

Create an expandable kit rather than one generic icon set:

- loose paper;
- folded paper;
- journal page;
- notebook;
- photograph;
- CD and jewel case;
- VHS cassette;
- DVD-era disc or case;
- microphone;
- analog/digital player;
- late-1990s/early-2000s display object;
- artwork frame or sculptural object.

Each artifact requires:

- resting pose;
- selected pose or focus state;
- interaction bounds;
- associated media type;
- content ID;
- thumbnail/fallback;
- mobile weight;
- reduced-motion behavior.

## Saturn kit

- simple Saturn surface;
- continuous overhead ring;
- trail and project anchors;
- project image planes facing the visitor;
- selected-project focus treatment;
- background-fade state;
- slideshow/lightbox shell;
- fullscreen presentation;
- return-to-trail control.

Project content will be selected from Lain Doe Love's strongest work across
disciplines.

## Moon kit

- lunar environment plate or lightweight geometry;
- pearl-chrome philosophy temple;
- Earth panel;
- Air panel;
- Fire panel;
- Water panel;
- elemental marks, kept visually simple;
- borderless pearl-chrome reading modal;
- return-to-trail control.

No floating papers belong in the Moon temple.

## Store kit

- clean void environment;
- responsive category controls for Dream, Build, and Sustain;
- product card system;
- product image set;
- fullscreen product modal;
- description, price, quantity, cart, and checkout controls;
- persistent cart button and count;
- empty-cart state;
- cart screen;
- Square handoff state after the payment model is confirmed.

Approved category meanings:

- **Dream** — spiritual growth, consciousness expansion, and dream planning.
- **Build** — tools used to create the product, project, or world.
- **Sustain** — systems that maintain connection to the dream after it becomes real.

## Tripo turnaround requirements

For every Tripo-bound object:

- neutral background;
- even neutral lighting;
- no dramatic cast shadow;
- no depth-of-field blur;
- consistent proportions across views;
- orthographic or near-orthographic front, rear, left, right, top, and bottom
  where the object requires them;
- front 3/4 and rear 3/4 beauty views for form clarification;
- symmetrical neutral pose for characters before posing;
- transparent pieces shown both installed and isolated;
- separate component sheets for parts that require independent animation;
- no typography baked into a mesh-generation reference unless the lettering is
  intentionally physical geometry.

## Tripo-to-Blender intake checklist

Every generated mesh must be reviewed for:

- silhouette accuracy;
- scale and units;
- forward axis and upright orientation;
- centered, useful origin;
- manifold geometry where required;
- holes, fused parts, floating fragments, and internal geometry;
- normals and smoothing;
- usable topology and deformation needs;
- UV quality;
- material separation;
- texture resolution and color consistency;
- removable generated background geometry;
- component separability;
- mobile polygon and material cost;
- clean export naming.

Tripo output is never considered final solely because it resembles the source
render.

## Content inputs still required

- 5–7 launch artifacts and their final content;
- Moon chapter copy;
- Saturn starter projects and project details;
- product catalog, categories, prices, and Square strategy;
- Substack and Threads destinations;
- newsletter destination;
- Funemployed teaser content;
- final approved reference plates and turnaround sheets.

## Complete-homepage graybox export

Temporary, not production approved: `assets/models/heart-direction-rebuild/spaceship-blockout-v01.glb` (11,667,668 bytes), from production source `blender/spaceship/working/heart-direction-spaceship-v013-dashboard-reference-match.blend`. Includes only the cleared hull, refined collar/canopy, tub, seat and current dashboard components. Source remains unchanged. Export script: `tools/export-spaceship-blockout.py`. Scale/orientation, node control, export settings, runtime budget limitations and placeholder inventory are recorded in [GRAYBOX_SPEC.md](GRAYBOX_SPEC.md).

## Approved cyan exterior sky — 2026-10-04

Replaces the photographic lavender sky/cloud layers with one decorative 2D picture behind the existing environment and interface. Portrait uses `scene-01-background/airbrushed-cyan-sky-mobile.webp` (941 × 1671, 61,584 bytes); landscape uses `scene-01-background/airbrushed-cyan-sky-desktop.webp` (1672 × 941, 79,830 bytes), both under `assets/images/heart-direction-rebuild/`. WebP quality 84, original dimensions, no blur or artwork edits. Sources remain unchanged in Downloads: `Dreamy Y2K airbrushed turquoise sky.png` and `Dreamy Y2K Cyan Cloudscape.png`. Centered cover sizing crops the portrait sides on tall phones and landscape sides at 1440 × 900. The existing void transition and all scene objects/controls remain unchanged.

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

## Portal v003 web preparation — 2026-10-20

User authorized desktop inspection, separate progressive export copies and later
GLB integration in place of the portal PNG. Source:
`heart-direction-production/blender/homepage-exterior/working/heart-direction-homepage-exterior-v003.blend`.
Status: **awaiting desktop inspection; no export or final approval**.
Read-only Text Editor script: `tools/portal/inspect-portal-v003.py`; run instructions
and provisional mobile targets: `tools/portal/README.md`. Timestamped inventory
records visibility, object hierarchy/transforms/bounds, base/evaluated triangles,
materials, texture dimensions and source hash. Exact frame/inset/jewel selection
and exclusion of backups/failed depth studies remain unresolved until that report
is reviewed. No guessed export set is authorized by older assembly scripts.

Export settings, counts, texture dimensions, compression and GLB bytes are pending,
not measured. Proposed review targets: <=50k triangles, <=2 MiB, textures <=1024px
where appearance permits; source materials/alignment and detailed jewel/lights
must survive visual comparison. Existing PNG, tunnel passage, boarding, scenery
and dashboard are preserved. No runtime changes, source save, Blender launch,
dependency installation or deployment occurred. Physical Safari and whole-scene
GPU/memory costs remain open. Next: run the desktop inspection and resolve exact
objects before preparing the isolated export script.

### Desktop inventory and resolved export set — 2026-10-20

Desktop Blender 4.5.12 LTS reports the visible frame
`HD_PORTAL_WORKING_v001` (1,888,396 triangles), inset
`HD_Frame_Inset_Under_Lip` (764 evaluated triangles), and jewel
`HD_Ruby_Edge_Cleanup` (1,945,823 evaluated triangles, including its smoothing
modifier). Combined: 3,834,983 triangles. Packed input textures are 4096×4096.
Disk source is 1,058,276,718 bytes, SHA-256
`e8182ffad0ff285a269986efc957ffc4e555f045225b50780513b6d3f75c0ca1`.
User explicitly confirmed using the current open assembly, including unsaved
edits. Exclude hidden `HD_Frame_Inset_Fill`, raw Tripo backups and low-profile
study; do not restore their visibility.

Desktop export script: `tools/portal/export-portal-v003.py`. Independent review
copies target frame/jewel triangles 60k/40k, 30k/20k and 18k/12k; full-detail inset
retained. Copies retain evaluated artwork, materials and world transforms; only
independent texture copies resize to <=1024px. Standard GLB, Y-up conversion,
AUTO image format/JPEG quality 85 where supported, no cameras/lights/animation,
no Draco or new dependency. Source .blend is never saved. Temporary review scenes
remain in memory; original scene restored. Script writes actual counts, texture
dimensions, file sizes, bounds and source-preservation hashes per timestamped run.

Status: script syntax checked; desktop execution, exported appearance, compression
assessment, integration and browser/device tests pending. Decimation may change
facets, bulbs, lettering and silhouette; candidate targets do not establish visual
acceptability or mobile performance. Existing PNG/runtime remain unchanged until
exports can be inspected. Next: run the export script in desktop Blender, then
inspect candidates before choosing and integrating a review GLB.

### Portal v003 integrated review candidate — 2026-10-20

Desktop export completed; balanced GLB now replaces the frame PNG on successful
load. Served asset: `assets/models/heart-direction-rebuild/portal/heart-direction-portal-v003-balanced-review.glb`.
50,764 triangles (frame 30k, jewel 20k, inset 764), 3,989,388 bytes, six 1024×1024
embedded textures. Independent detail/lean candidates remain available. Existing
offline WebP conversion increased payload and was rejected. No new dependency.
GLB/Y-up, evaluated modifiers, no cameras/lights/animation/Draco; original
alignment/materials retained, whole assembly uniformly fitted at runtime.
Original PNG retained for loading/failure; separate passage entrance refits to
mesh opening, boarding/scenery/dashboard preserved. Source before/after hashes
and transforms match. Full export settings, hashes, counts, texture memory,
validation and remaining limits: [PORTAL_V003_WEB_REVIEW.md](PORTAL_V003_WEB_REVIEW.md).
Desktop/mobile/navigation, failure and delayed-load checks passed; application
reduced-motion path simulated. Physical Safari and measured device performance
remain unverified. Above provisional payload budget; **not final**. Next: user
appearance review against Blender before selecting further optimization work.

### Portal waterline placement — 2026-10-20

Runtime root Y now waterLevel+.68 (down .58); whole-model height unchanged at
1.755, bottom about .1975 below water. Existing water provides occlusion, with
no destructive mesh cut. Frame/passage remain grouped; cherubs retain shoulder
placement. Distant passage alignment clamps its target to waterLevel+.90 to
prevent water-plane holes after lowering. GLB bytes/triangles/textures/source
unchanged. Reference: references/homepage/portal-waterline-reference-v001.jpg.
Clouds deferred per user; stylized water/reflection and entrance remain unfinished.

### Portal distance / horizontal water correction — 2026-10-20

User approved moving portal farther back: Z4.2 (was 2.2), root Y waterLevel+.60,
height1.755 unchanged. Inner opening now crosses water; frame bottom about .2775
underwater. Supersedes .68 root and camera-driven convergence clamp above.
Passage uses fixed translation, with water at world waterLevel+.002 at every Z;
no camera shear or triangular tilted threshold. PNG fallback gets the same plane
calculation. No asset bytes, source mesh/materials, texture dimensions or loading
budget changed. Water shaders remain stylized; pointed opening is narrow at the
waterline. Clouds remain deferred. See STATUS.md for checks and next review.

### Enlarged opening / continuous exterior pool — 2026-10-20

User requested bigger tunnel and exterior water/two walls carried inside. Runtime
portal size4.3, uniform model height3.87, root waterLevel+.35/Z6.2; source GLB,
textures, proportions and materials unchanged. Waterline now crosses a broad part
of the submerged opening; both wall/coping outer edges clear the frame.
Single existing exterior water plane provides the whole passage floor; removed
separate stylized tunnel floor and guides. Walls/tile lines/coping/bank decks
extend continuously from Z-5 to50.2. No water texture or new dependency added.
Cherubs retain .68 width, repositioned at enlarged shoulders. Clouds deferred.
See STATUS.md for clearance values and validation. Review-only, not final art.

### Three-quarter heart / exterior-only palms — 2026-10-20

Supersedes preceding fit: runtime portal size9 (uniform GLB height8.1), root
waterLevel+1.98/Z16.2. ~74.44% above water; lower point still clears unchanged
pool/coping width. Palms filter to centers <=portalZ-1.2; mobile last row14,
desktop extras last12. No palms inside tunnel.34 existing arches now span84
units; continuous water/walls/coping reachZ100.2. Main water extends to125,
camera far140. Source GLB count/bytes/materials unchanged; no new image or
runtime dependency. Two supplied reference screenshots saved under
references/homepage/. Clouds deferred; visual polish and device performance
remain unapproved. See STATUS.md for checks and exact next task.

### Mountain cutoff at tunnel — 2026-10-20

Runtime rolling hills end at Z15 before tunnel entrance16.2. Last1.8 units soften
to bank level; rear edge sealed. Shortened mesh retains approximate sample spacing:
4 meshes,63,796 triangles, all finite and none past15. Original mountain GLBs
and Blender files unchanged. Water and pool walls still continue inside. No new
asset request/dependency; clouds deferred. See STATUS.md for validation/review.

### Palm frame-edge alignment — 2026-10-20

User requested clearer heart opening: all palm-row X positions now±1.14 (was±.86).
Depth, cutoff before tunnel, height1.12 and model materials/proportions retained.
Placement only; no source/export/texture or triangle-count change. Desktop/mobile
views reviewed; see STATUS.md. Next: user alignment review, clouds still deferred.

### Signage headroom / restored palms — 2026-10-20

User restored palm X±.86 and requested a slightly smaller frame. Runtime portal
size8, height7.2, root waterLevel+1.65, depth/position unchanged. Full pool/coping
clearance verified. More headroom reserved for Tunnel of Love sign and two alien
cherubs; no new sign asset generated/integrated. Source exports/materials intact.
Desktop/mobile fit reviewed; see STATUS.md. Next: composition review with signage.

### Standalone marquee review / loading-heart removal — 2026-10-20

User requested sign above current frame and larger cherubs. New review asset:
`assets/models/heart-direction-rebuild/portal/tunnel-of-love-marquee-v001-review.glb`.
Source production `blender/homepage-exterior/assets/tripo-raw/tunnel-marquee-raw.glb`
(previous desktop assembly input). Source unchanged; web derivative17,998 triangles,
1,602,356 bytes,three1024×1024 textures. Existing offline tools: dedup/weld,
attribute-aware simplification target18k/error.002, prune, textures max1024/quality85;
no geometry decoder/new dependency. Source transforms/materials retained. Runtime
yawPI, uniform width92% frame width, bottom frame top−.22. SHA-256:
40d382b8ae41e28ea9142d8e5c56596cd9932c046a966287b36ab1ea2328a9ec.
Script/report in tools/portal/. Source mesh cleanup and final lettering/material
fidelity still need review; not final. Additional decoded texture memory ~16MiB
with mipmaps; combined frame+sign payload5,591,744 bytes.

Cherubs uniformly enlarged from.68 to1.44 width with shoulder repositioning.
Removed old PNG heart from HTML/loading plane and old-aperture preload per user;
PNG retained as inactive disk backup only. Failure no longer reveals obsolete
artwork. Current portal passage created only after valid GLB. Navigation retained.

### Regal cherub placement review — 2026-10-20

Per markup, marquee uniformly reduced from92% to80% frame width. Cherub width
increased1.44→2.24, centers±2.16, bottom frame top+.08, depth portalZ-.35.
No mesh/material/texture/count changes. Original letters retained; cleanup deferred
until placement review. Desktop/mobile screenshots and checks in STATUS.md.
Source/exports preserved; no deployment. Next: user placement review.

### Cherub shoulder adjustment — 2026-10-20

Per user direction, cherubs shifted outward.16 per side (X±2.32), down.28
(bottom frame top−.20); width2.24/depth/poses unchanged. Sign lettering and all
source assets preserved. Mobile/desktop fit reviewed; STATUS.md records checks.
Next: placement review before lettering cleanup.

### Approved marquee inscription / cleanup intake — 2026-10-20

User confirmed three lines: **TUNNEL OF / LAIN DOE / LOVE**. Cleanup includes
letters and diamonds; existing housing and website placement preserved. Desktop
intake script tools/portal/inspect-marquee-cleanup.py imports source into a new
scene and records mesh/material/texture/font data without saving a master. Pending
execution; no typeface, old-letter removal or diamond geometry changes yet.

### Editable cleanup candidate prepared — 2026-10-20

Desktop report confirms fused marquee. Reversible candidate script:
`tools/portal/build-marquee-cleanup-review.py`. New face panel covers generated
lettering, approved text stays editable,46 separate faceted diamond objects share
one32-triangle mesh. Installed Times New Roman Bold is provisional review font,
not approved final typography. Source unchanged; website placement preserved.
Front/angled desktop renders pending script run; no final cleanup/export claim.

### Cleanup candidate revision3 reviewed — 2026-10-20

Desktop front/angled renders now show readable approved lines with no overlaps;
actual evaluated ink bounds pass spacing checks. Candidate remains reversible
ruby panel/plain pearl serif text/faceted diamond overlay, preserving source
housing underneath. Requires visual approval before web export; website unchanged.
Review: renders/marquee-cleanup-review/20261020T201555819649Z/{front,angled}.png.

### Owner regenerated/cleaned marquee intake — 2026-10-20

New source in production working folder: heart-direction-homepage-tunnel-marquee.blend.
User wants asset-only replacement at existing website placement. Do not use the
rejected face-overlay cleanup candidates. Desktop export script:
tools/portal/export-cleaned-marquee.py. Preflight/inventory, independent40k/24k/18k
copies, texture max1024, source-preservation checks; desktop execution pending.
No new asset served yet. Appearance/performance approval still required.


### Owner-cleaned marquee integrated for review — 2026-10-20

Supersedes pending intake above. Desktop export report:
`exports/cleaned-marquee-review/20261020T220852093721Z/export-report.json`.
Source: `/Users/shalainderamus/Desktop/grand-play/repos/heart-direction-production/blender/homepage-exterior/working/heart-direction-homepage-tunnel-marquee.blend`.
Source disk SHA256 `a09b8dc0ae3ea9615f526b6afb0ec1100ce77ee89b8858349d34a01cf4e4bc0b`;
197,846,430 bytes; evaluated current unsaved state exported. Source file and
identity object transform unchanged; metric scale1. One visible mesh,
1,991,972 source triangles. Independent copies preserve materials and alignment;
no source save, background Blender, installation or new decoder.

| Candidate | Triangles | GLB bytes | Textures |
| --- | ---: | ---: | --- |
| detail | 40,000 | 2,913,668 | 3 × 1024² |
| balanced (served for review) | 24,000 | 2,421,860 | 3 × 1024² |
| lean | 18,000 | 2,235,260 | 3 × 1024² |

Served asset: `assets/models/heart-direction-rebuild/portal/tunnel-of-love-marquee-cleaned-v002-balanced-review.glb`.
SHA256 `4bd78f0b7897aa7e32ff0de559354c1a980c7c4dcfe0946d53a5b9dc1295f924`.
Blender4.5.12LTS; progressive independent decimation targets; copied basecolor,
roughness/metallic and normal images reduced4096→1024; AUTO/JPEG quality85;
GLB Y-up, animations/cameras/lights/Draco disabled. Mounting unchanged: yawPI,
width portalSize*.90*.883*.80; bottom frame top−.22; depth portalZ−.04.
Cherubs, frame, water, passage and navigation preserved. Previous marquee GLB
retained. Rejected face-panel experiments unused.

Balanced adds819,504 bytes versus previous sign. Frame+sign total6,411,248 bytes;
texture GPU residency roughly48MiB including mipmaps (implementation dependent).
No mobile frame-time or actual iPhoneSafari profile yet. Not final: owner appearance
review and device performance approval remain required. Mesh counts, finite
positions, index ranges and1024² textures independently checked for all candidates.


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


### Proportional mobile portal artwork fit — 2026-10-20

Owner requested smaller frame/marquee/cherubs together on mobile, preserving their
relative proportions and placement. Added shared RESPONSIVE_PORTAL_ARTWORK group
pivoted at waterline, Z16.2. All three assets retain their existing local fits,
yaw, mirror and relative transforms; portrait group scale .84 (16% reduction),
smoothly approaches1 as aspect .8→1, width>=900 always1. No independent cherub,
sign or frame repositioning. Waterline pivot lowers the top naturally as group
shrinks. Matching tunnel backing/arches remain with portal to avoid aperture
misalignment. Pool water/walls, palms, flowers, hills, ship and dashboard unchanged.
No added geometry/material/download; source GLBs/.blend preserved.

Changed exterior-assembly.js and cache references graybox-ship.js/script.js/index.html
(mobile-portal-fit-21). Branch production/homepage-rebuild. No deployment/merge.
Screenshots renders/portal-v003-review/mobile-portal-fit-{390,320}.png.
390×844 and320×694 inspected: cherub heads/wings/bows fit, only outer extremities
near edges; no narrow page overflow. Syntax/diff checks pass. Physical iPhoneSafari,
dynamic chrome and performance approval remain pending. Reduced motion/media
failure paths unchanged; not rerun. Next: owner review of proportional mobile fit.


### Flush mountain/coping contact — 2026-10-20

Owner requested removing dark raised lip between terrain and pool edge. Terrain
inner boundary now X±.8325, exactly coping outer edge (.76+.145/2), Y water+.174,
matching coping top (.167+.014/2). Entire relief (including saddle) fades to zero
at boundary with zero-slope toe, preventing elevated terrain seam above coping.
Previous innerX.82/Y water+.141 plus nonzero saddle/toe exposed a vertical skirt
and recessed dark bank strip. Existing edge seal remains below contact surface.
No new geometry/material/asset payload; crest sampling and tunnel stop preserved.
Palms, lights, flowers, portal/mobile fit, ship and navigation preserved.

Changed rolling-hills.js, import/cache tags in exterior-assembly.js, graybox-ship.js,
script.js and index.html (hill-flush-coping-22 / hill-flush-coping-8), plus docs.
Desktop1440×900/mobile390×844 screenshots show flush contact and no dark strip;
no captured console warnings/errors; module syntax and diff whitespace pass.
Screenshots renders/portal-v003-review/hills-flush-{desktop,mobile}.png.
Physical Safari/performance and unchanged interaction/failure/motion paths not
retested here. Branch production/homepage-rebuild; no push/merge/deploy.
Next: owner reviews flush mountain-to-pool transition.


### Mobile cockpit fills portrait — 2026-10-20

Owner requested larger mobile dashboard, less empty sky, scenery filling page,
and destination labels at bottom. Portrait cockpit FOV110→85 and view offset
−22%→−4%; desktop65/−4% unchanged. Windshield scenery uses a second camera on
same position with FOV43→65 interpolated by existing boarding progress; ship is
hidden in scenery pass, scenery/water/marks hidden in cockpit pass after depth
clear. No duplicate scenery rendering, added asset, geometry, texture or dependency.
This preserves artwork proportions while enlarging the view and console without
stretching pixels or changing source meshes. Original states/boarding timing remain.

Portrait semantic destination controls are a bottom safe-area-aware row with48px
hit height, 23% width each; labels remain fully visible despite physical console
edges cropping. Home stays projected on jewel, dashboard screen stays projected
on physical console. Portrait title18px/body16px improve readability. Existing
copy and destination behavior preserved. Exterior composition unaffected.

Changed graybox-ship.js, styles.css and module/style cache references
index.html/script.js (mobile-cockpit-fill-24), plus status/manifest. Branch
production/homepage-rebuild; no commit/push/deploy/merge for this iteration.
Validation:390×844 and320×694 inspected, no horizontal overflow; four bottom hit
areas measured~86×48px at390 width. Boarding reaches dashboard, Moon/Store and
keyboard Socials selection work; keyboard Home restores GET IN focus. Desktop
1440×900 inspected, original desktop control positions preserved. No captured
console warnings/errors; module syntax/diff whitespace checks pass.
Screenshots renders/portal-v003-review/mobile-cockpit-fill-{390,320,desktop}.png.
Reduced-motion/slow/missing-media paths unchanged and not rerun here; physical
Safari/dynamic chrome/GPU profile pending. Two render passes add CPU overhead
though each object set renders once; scene performance not approved final.
Next: owner reviews full portrait cockpit composition and bottom navigation.


### Tunnel stars, wider ribs and distant pink glow — 2026-10-20

Owner requested small stars between neon lines, slightly wider line spacing and
soft pink destination glow per reference. Reduced equal-size arch pairs34→24 over
same84-unit depth: spacing2.47→3.5 (+41.7%). Preserved heart aperture, orientation,
water/walls and independent boarding/dashboard. Removed10 core/glow pairs
(42,240 instanced tube triangles /20 draws), added one2-triangle glow plane.

Replaced tiny central star volume with320 deterministic points distributed inside
actual heart polygon above floor, between rib depth bands. Shared32×32 generated
radial point texture, .065 world size, .8opacity. Distant static additive pink halo
with pale center at Zdepth−.15, Yfloor+1.2,9×9 plane, softly zero at outer edge;
water/walls depth-test occlusion preserved. No new animation/flashing, dynamic
lights, downloads/dependencies or source-asset changes. Glow is a visual cue,
not a new destination/interaction. One extra draw versus previous stars/ribs net
19 fewer draws. Transparent glow fill still needs physical GPU profiling.

Changed exterior-assembly.js, cache references index.html/script.js/graybox-ship.js
(tunnel-distant-glow-26), status/manifest. Branch production/homepage-rebuild;
not committed/pushed/merged/deployed for this iteration. Desktop1440×900/mobile
390×844 inspected; mobile boarding completes and keyboard Home returns focus to
GET IN. No captured console warnings/errors; module syntax and diff checks pass.
Screenshots renders/portal-v003-review/tunnel-distant-glow-{desktop,mobile}.png.
Physical Safari/performance and slow/failure cases remain unverified; reduced
motion logic unchanged, added effects static. Next: owner reviews arch spacing,
star visibility and distant glow strength.


### Procedural water ripple/color review — 2026-10-20

Owner approved first water pass: moving ripple texture and turquoise color.
Replaced flat MeshPhysicalMaterial with procedural world-XZ ShaderMaterial on
same40×140,2-triangle plane, centerZ55, original waterline. Two overlapping wave
phases, slow broad color variation, broken cyan ridge highlights and restrained
view-dependent sparkle; derivative fading reduces distant high-frequency pattern.
Removed80+ separate straight placeholder line draws. No downloaded texture,
geometry increase, dependency or source-art changes. Continuous surface remains
through tunnel. Pink lamp/frame reflections and hull-contact ripples deferred
until this base water is reviewed; this is not an accurate reflection simulation.

Ambient water clock separate from boarding progress; renders at <=30fps target,
without repeating resize/DOM dashboard projection on ambient ticks. Existing
mobile two-pass scenery/cockpit view preserved. Page hidden/context lost cancels
RAF; resume avoids elapsed-time jump. Reduced motion renders still textured water
and cancels ambient RAF. Exposes data-water-motion for verification. Media and
visibility event handlers keep preference changes responsive.

Changed graybox-ship.js, script.js/index.html cache refs (water-ripple-review-29),
manifest/status. Branch production/homepage-rebuild; no commit/push/deploy/merge.
Validation: syntax/diff checks pass; temporary Node VM executes actual controller
and verifies hidden/reduced/resume/context-loss lifecycle. Existing localhost8001
reduced-motion harness reports waterMotion=still and boards immediately to dashboard.
Normal mobile boarding completes; keyboard Home restores GET IN focus. Final
1440×900/390×844 views inspected; motion=running, no mobile page overflow or
captured shader/browser warnings/errors. Screenshots:
renders/portal-v003-review/water-ripple-{desktop,mobile}.png.

Physical iPhoneSafari, thermal/battery impact and actual frame times remain
unprofiled. Continuous rendering costs more than prior idle static scene despite
removed placeholder draws and30fps cap. Animation rate is a target, not measured
performance. Slow/missing model cases not rerun. Next: owner reviews water hue,
ripple size/speed before pink reflections and ship contact detailing.
