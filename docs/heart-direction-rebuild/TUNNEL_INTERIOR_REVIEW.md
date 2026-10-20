# Tunnel interior review

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
