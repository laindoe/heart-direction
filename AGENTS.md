# Heart Direction Rebuild — Codex Instructions

## Project status

This repository contains a legacy illustrated scrollytelling website on
`main`. A new immersive Heart Direction experience is being designed and must
be developed incrementally on a separate production branch.

The current rebuild is not a revision of the old seven-scene story. It is a
new mobile-first spaceship journey through Lain Doe Love's heart, mind,
philosophy, artifacts, body of work, store, and expanding creative worlds.

Do not use the legacy page structure, scene numbering, copy, animation plan,
or artwork as requirements for the rebuild. Preserve the legacy implementation
through Git history unless the user explicitly requests an archive inside the
working tree.

## Required reading

Before planning or modifying the rebuild, read every file in:

```text
docs/heart-direction-rebuild/
```

Use this authority order when sources disagree:

1. The user's newest explicit instruction
2. `docs/heart-direction-rebuild/STATUS.md`
3. `docs/heart-direction-rebuild/CREATIVE_BRIEF.md`
4. `docs/heart-direction-rebuild/EXPERIENCE_FLOW.md`
5. `docs/heart-direction-rebuild/VISUAL_SYSTEM.md`
6. `docs/heart-direction-rebuild/ASSET_MANIFEST.md`
7. `docs/heart-direction-rebuild/PRODUCTION_PLAN.md`
8. Approved visual references supplied for the current task
9. Legacy code and Git history, for historical context only

Do not recover an older or rejected decision from conversation history when a
newer rebuild document resolves it.

## Current milestone

The first milestone is the responsive lavender-cloud background and framing
system. Do not implement the portal, spaceship, water, dashboard, artifact
trail, or 3D runtime until the milestone in `STATUS.md` advances.

## Change boundaries

- Work on `production/homepage-rebuild`, not `main`.
- Do not merge or deploy without explicit approval.
- Make one reviewable milestone at a time.
- Do not begin the next scene or asset automatically.
- Do not change approved copy without explicit direction.
- Do not invent scenes, messages, UI, sounds, portals, or interactions.
- Do not install a framework or dependency without explaining its purpose,
  payload, alternatives, and mobile-performance effect, then receiving approval.
- Keep the visible homepage unchanged while working on documentation or asset
  preparation unless the user explicitly asks for implementation.

## Technical baseline

The repository is currently a lightweight static site using HTML, CSS, and
JavaScript. Preserve that baseline until the approved experience demonstrates
a concrete need for additional tooling.

Potential tools such as GSAP, ScrollTrigger, or Three.js are not pre-approved.
Propose them at the milestone where they become necessary.

The experience must be:

- mobile portrait first;
- responsive on desktop without becoming a separate product;
- performant on current mobile Safari;
- navigable with touch, mouse, trackpad, and keyboard where applicable;
- understandable with reduced motion;
- built with semantic interactive controls and useful fallback content.

Preserve native-feeling scrolling. Do not introduce forced scroll physics,
aggressive snapping, or a navigation system that traps the visitor.

## Motion architecture

Separate two systems:

1. Narrative motion driven by user progress. It should pause cleanly and
   reverse predictably when the visitor reverses direction.
2. Ambient motion driven by time, such as water ripples, cherub hovering,
   cloud drift, glows, and restrained light flicker.

Do not bake independently animated elements into one layer. Conversely, do
not use live 3D for an element when an optimized 2.5D layer produces the same
experience more efficiently.

## Visual-production pipeline

The approved pipeline is:

```text
Creative direction and references
  -> turnaround sheets generated and approved in ChatGPT Work
  -> mesh generation in Tripo
  -> mesh cleanup, materials, scale, lighting, animation, and export in Blender
  -> optimization and integration into the website with Codex
```

Tripo output is a source mesh, not a final web asset. Inspect and repair every
mesh in Blender before it enters the website.

Codex may generate Blender Python scripts using `bpy`. A `.blend` file can only
be generated and verified in an environment where Blender is installed and
available to the command line.

Do not commit large `.blend` files, raw renders, or high-resolution source
textures to this web repository until a storage strategy or Git LFS plan is
explicitly approved. Commit scripts, manifests, documentation, and optimized
web exports only.

## Asset rules

- Preserve source assets separately from optimized web exports.
- Use stable, descriptive filenames and record them in `ASSET_MANIFEST.md`.
- Keep animated pieces separable.
- Record coordinate scale, orientation, origin, materials, and export settings
  for every mesh.
- Maintain a mobile performance budget before approving live GLB assets.
- Use AVIF/WebP for approved raster plates where supported, with appropriate
  fallbacks.
- Use compressed video only when a transition cannot be recreated efficiently
  with layers or lightweight runtime animation.
- Do not ship temporary AI generations as final assets without approval and
  cleanup.

## Verification

For every implementation milestone, test at minimum:

- narrow mobile portrait viewport;
- iPhone Safari behavior and dynamic browser chrome;
- desktop layout;
- slow and fast scroll;
- forward and reverse movement;
- pausing at intermediate states;
- touch and pointer interaction;
- keyboard focus for controls and modals;
- modal scroll locking and focus restoration;
- `prefers-reduced-motion`;
- missing or slow-loading media;
- loading weight and runtime performance.

## Reporting

After each task, report:

1. Branch used.
2. Files created or modified.
3. What was implemented.
4. What was intentionally preserved.
5. Validation performed and results.
6. Temporary compromises or open risks.
7. The exact next recommended task.

Do not automatically perform that next task without approval.
