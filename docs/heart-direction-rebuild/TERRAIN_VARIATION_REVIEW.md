# Mountain and palm placement review

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
