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
