# Continuous mountain banks and pool walls

2026-10-19, production/homepage-rebuild. Replaces isolated mountain-block layout.

## Implementation

- Two visually continuous mountain ranges use overlapping instances of the
  supplied neon mountain. Each section overlaps its neighbor by 28% of its depth.
  Source plinths are buried .12 units below the raised landscape surface.
- This is a continuous visual assembly, not a destructive Boolean union or a
  newly welded Blender master. Original models and web v001 exports are preserved.
- New ridge tile is neon-mountain-ridge-tile-v002.glb: 3,966 triangles, 1,023,124
  bytes. Prepared offline with existing glTF Transform/meshoptimizer tools;
  max simplification error .008, prior material/UV/texture slots retained.
- InstancedMesh shares geometry/materials across sections rather than duplicating
  full geometry or adding one draw call per tile. Source uniform proportions kept.
- Raised landscape decks sit .14 units above water. Palms moved to X ±1.0 on
  those decks. Walls at X ±.76 have solid dark tiled inner faces from -.06 to
  +.16 above the waterline, plus a .145-wide illuminated coping at +.167.
- Wall, deck and ridge run toward the same vanishing point. Portal, mirrored
  right cherub, ship artwork, cyan sky, dashboard and GET IN behavior retained.

## Validation and limits

Module syntax and git diff --check passed. Ridge GLB header/length and positive
section overlap checked. In-app browser visual review at 390×844 and 1440×900
confirmed continuous ranges and visible pool separation. Direct ship boarding,
in-screen Moon coming soon and keyboard Home return passed. No console warnings
or errors captured. Screenshots in production/renders/pool-banks-v001/.

No Blender launch, source edits, dependency additions, commit, push or deployment.
Not a final lighting, water/reflection, topology or physical iPhone performance
approval. Repeated terrain is intentionally a rendering assembly; future manual
silhouette changes should be made in a new Blender source version. Increased
terrain coverage still needs measured mobile GPU profiling before launch.
