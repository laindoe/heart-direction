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
