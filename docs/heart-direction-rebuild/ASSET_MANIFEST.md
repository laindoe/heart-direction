# Heart Direction — Asset Manifest

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
