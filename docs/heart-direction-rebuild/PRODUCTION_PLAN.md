# Heart Direction — Production Plan

## Production model

Heart Direction uses a hybrid workflow:

1. Creative direction and visual choices are developed in ChatGPT Work.
2. Approved objects receive consistent turnaround sheets.
3. Turnarounds are uploaded to Tripo for initial mesh generation.
4. Tripo meshes are cleaned, organized, lit, animated, and exported in Blender.
5. Codex manages Blender scripts, reproducible scene setup, web integration,
   testing, optimization, and documentation.
6. Visual reviews return to ChatGPT Work before an asset or milestone is locked.

Codex should automate repeatable technical work without replacing human art
direction.

## Storage model

### Web repository

Store:

- HTML, CSS, and JavaScript;
- project guidance and manifests;
- Blender Python scripts;
- small configuration files;
- optimized GLB exports;
- optimized AVIF/WebP/SVG assets;
- compressed approved video where necessary.

### Production storage

Store outside the normal web repository unless Git LFS is approved:

- `.blend` masters;
- raw Tripo downloads;
- high-resolution turnaround sheets;
- raw textures;
- render sequences;
- working videos;
- high-resolution source plates;
- intermediate exports.

Recommended local-project arrangement:

```text
heart-direction/             primary Git repository
heart-direction-production/  secondary production-assets folder
```

## Blender baseline

- One master opening-scene file initially.
- Metric units, unit scale 1.0.
- Model in real scale; do not size geometry in pixels.
- 30 fps.
- Eevee for development and real-time tests.
- AgX color management.
- Mobile camera: 9:16.
- Mobile preview: 1080 × 1920.
- Mobile master: 2160 × 3840.
- Desktop camera: 16:9.
- Desktop master: 3840 × 2160.
- Essential content remains inside a defined mobile safe area.

Suggested collections:

```text
HD_00_CAMERA
HD_01_SKY_CLOUDS
HD_02_WATER
HD_03_GRID_LANDSCAPE
HD_04_PALMS
HD_05_PORTAL
HD_06_SIGN_CHERUBS
HD_07_SPACESHIP
HD_08_COCKPIT_DASHBOARD
HD_09_ARTIFACTS
HD_10_LIGHTS_FX
HD_90_EXPORT
```

## Script-first Blender workflow

Commit reproducible `bpy` scripts for tasks such as:

- scene and collection setup;
- camera creation;
- material-library creation;
- importing and normalizing Tripo meshes;
- setting origins and scale;
- instancing portal ribs and palms;
- water and lighting setup;
- render-layer configuration;
- GLB export;
- preview turntables;
- web-asset validation.

Example command pattern:

```bash
blender --background \
  --python production/blender/scripts/build_opening_scene.py
```

The exact command is only valid in a local Codex environment where Blender is
installed and its executable is available.

## Milestones

### Milestone 0 — documentation and repository safety

- Replace outdated project instructions.
- Establish rebuild documents and source hierarchy.
- Work only on `production/homepage-rebuild`.
- Keep `main` unchanged.
- Confirm GitHub write access before pushing.

Exit condition: Codex can start a new task and accurately summarize the rebuild
without reading the legacy site as current direction.

### Milestone 1 — background and responsive frame

- Generate clean isolated lavender-cloud mobile plate.
- Generate desktop companion plate.
- Approve crops and center calm area.
- Export responsive AVIF/WebP derivatives.
- Implement a full-viewport homepage shell.
- Add optional development composition guides.
- Test mobile Safari and desktop crops.

Do not add portal, water, spaceship, or UI during this milestone.

Exit condition: the background establishes the final responsive frame and is
approved on representative mobile and desktop viewports.

### Milestone 2 — opening environment kit

- Generate and approve palm, hill, water, portal, marquee, jewel, cherub, and
  spaceship references.
- Create Tripo meshes where specified in the asset manifest.
- Clean meshes in Blender.
- Assemble a static opening-scene composition.
- Compare 2.5D and live-3D delivery costs per element.

Exit condition: the approved static opening frame matches the locked visual
direction and has an achievable mobile asset budget.

### Milestone 3 — ambient exterior and boarding

- Add water ripples and reflections.
- Add GET IN attention treatment.
- Add restrained ship, portal, and cherub motion.
- Add accessible ship interaction.
- Build forward boarding transition.
- Add reduced-motion alternative.

Exit condition: visitors can enter the ship smoothly on mobile without a heavy
first load.

### Milestone 4 — cockpit and orientation

- Build cockpit view and persistent dashboard shell.
- Implement welcome and concise orientation states.
- Add Saturn, Moon, Store, and Socials controls as disabled or staged routes
  until their destinations exist.
- Implement loading/power-on treatment.

Exit condition: orientation works with touch, keyboard, reduced motion, and no
unapproved sound control.

### Milestone 5 — tunnel, glitch, and void arrival

- Assemble repeating ribs, water route, void, clouds, grid hills, palms, and
  welcome arch.
- Implement forward movement and reversible progress behavior.
- Add short glitch/pull-through transition with no message.
- Establish trail-position state.

Exit condition: the visitor can travel from cockpit to stable void arrival and
reverse or use a safe fallback without breaking state.

### Milestone 6 — artifact trail

- Finalize artifact content model.
- Build media-specific presentation templates.
- Place 5–7 launch artifacts.
- Implement pause, select, close, and position restoration.
- Add Funemployed portal prompt and teaser.

Exit condition: every launch artifact is accessible, performant, and recoverable
from interruption or reverse navigation.

### Milestone 7 — Saturn and Moon

- Implement Saturn starter portfolio trail and project lightbox.
- Implement Moon temple and four elemental reading panels.
- Preserve and restore main-trail position across detours.

Exit condition: both destinations are small but fully functional.

### Milestone 8 — Store and Socials

- Implement the approved Dream, Build, and Sustain category structure and
  confirm its launch content.
- Confirm Square/cart architecture.
- Build product grid, product modal, cart, and checkout handoff.
- Add social destinations.

Exit condition: purchasing and outbound social actions are clear and tested.

### Milestone 9 — ending and launch hardening

- Add current-end message and follow/newsletter action.
- Complete loading, caching, error, and fallback states.
- Audit accessibility.
- Audit mobile memory, GPU, network weight, and interaction latency.
- Test across representative devices.
- Prepare review branch and deployment plan.

Exit condition: approved release candidate with documented known limitations.

## Performance decision gate

Before choosing live 3D for any object, compare:

- visual benefit;
- compressed download size;
- triangle count;
- material and texture count;
- draw calls;
- animation cost;
- memory use;
- loading strategy;
- reduced-motion and no-WebGL fallback.

Prefer 2.5D when live 3D does not materially improve the visitor's experience.

## Dependency gate

Do not install GSAP, ScrollTrigger, Three.js, a bundler, or a framework during
documentation or background work. When a milestone needs a dependency, present:

- the exact problem it solves;
- whether native browser APIs could solve it;
- estimated payload and runtime cost;
- effect on GitHub Pages deployment;
- fallback strategy;
- test plan.

Proceed only after approval.
