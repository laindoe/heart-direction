# Portal v003 desktop export and local integration — 2026-10-20

Branch: production/homepage-rebuild. Review candidate only; no final artwork or
performance approval, commit, push, merge, deployment or live-domain change.

## Source and selection

User resolved ambiguity with “use what is open.” Desktop export used the current
unsaved assembly: HD_PORTAL_WORKING_v001, HD_Frame_Inset_Under_Lip and
HD_Ruby_Edge_Cleanup. Hidden fill/raw backups/low-profile study stayed excluded.
Camera and light excluded. Source evaluated geometry: 3,834,983 triangles.
The export report confirms disk source and source transforms unchanged during
export. Disk hash at export was 42217a65f9b7dc11e19ff965cd834c90055d43b2f060f04c0beff2a911ebbdd0
(1,058,298,178 bytes); it differs from the earlier inspection's disk hash, so the
export report is the authoritative snapshot for this run. This does not mean the
exporter changed it: its before/after hashes match. Unsaved state was authorized.
No Blender background process or .blend save was performed by these scripts.

Independent evaluated mesh/material/image copies were created in separate desktop
review scenes. Each candidate starts from source, rather than accumulating
simplification. Inset retains 764 triangles. Collapse decimation only on frame/
jewel; materials, UVs and world transforms retained. Six texture copies reduced
from 4096×4096 to 1024×1024. Original image data preserved.

| Candidate | Frame | Jewel | Total triangles | GLB bytes |
|---|---:|---:|---:|---:|
| Detail | 60,000 | 39,999 | 100,763 | 5,566,284 |
| Balanced (website review) | 30,000 | 20,000 | 50,764 | 3,989,388 |
| Lean | 18,000 | 12,000 | 30,764 | 3,286,172 |

Desktop scripts/instructions: tools/portal/. Reports and candidates:
exports/portal-v003-review/20261020T190742211675Z/.
GLB export: Y-up, original metric scale 1, applied evaluated source modifiers,
no animation/cameras/lights/Draco, AUTO images, JPEG quality 85 where supported.
The balanced export is copied byte-for-byte to assets/models/heart-direction-rebuild/
portal/heart-direction-portal-v003-balanced-review.glb. SHA-256:
a63abd92c0a297fd0f0adb1c6d76c1a8abc3e2e584c3e0eb9a411aafcdc73dca.

Existing glTF Transform/Sharp tools were tried offline: dedup/prune and WebP
quality 90 for color/roughness-metallic images, PNG normals retained. This
increased each payload by about 52k bytes; these derivatives were rejected for
website use. No dependency installed or decoder added. The shell's old Node was
incompatible with installed tooling; the existing bundled Node completed it.

## Integration

Existing local GLTFLoader loads the balanced GLB independently of boarding and
scenery. Three mesh objects required; finite positive bounds checked before swap.
PNG remains visible until success and remains the fallback on load failure.
Original PNG is unchanged, including its older marquee artwork. This intentionally
means fallback appearance differs from the current visible Blender assembly.
HTML PNG also remains for complete 3D failure.

Whole model has a uniform scale of 1.755 / exported height, yaw PI, centered X/Y,
and centered depth at portal-local Z -.005. Portal root stays at X0,
Y waterLevel+1.26, Z2.2. Internal alignment/materials are unchanged. glTF source
front +Z rotates toward the website camera on -Z. The source's nonuniform object
transforms remain authored; no additional nonuniform model scaling is introduced.

The existing separate passage is rebuilt against a 120-point orthographic trace
of the new mesh opening only after GLB success. The old PNG trace remains active
on failure. tools/portal/trace-aperture.{cjs,py} records mesh projection and boundary
tracing at 1200px per model height (1.2px simplification tolerance). New trace:
js/portal-v003-aperture.js. Corridor depth, 34 arches, water shader, stars and
camera alignment method remain; entrance/floor fit follows the new aperture.
No tunnel geometry is baked into the GLB or source artwork. Old passage GPU
resources are disposed when replaced. Boarding, scenery and dashboard code are
preserved apart from module cache versions. No new motion or navigation route.

## Validation

- Desktop Blender generated all three candidates; report confirms source hash/
  transforms preserved. Python syntax checks alone are not Blender verification.
- GLBs read with existing NodeIO; triangle counts match reports, all position
  values finite, triangle indices in range, textures all 1024×1024. Desktop
  export script also checked GLB header/length. Balanced payload hash verified.
- In-app browser: 1440×900 desktop, 390×844 mobile; 320×700 entry fits with no
  horizontal overflow. Reviewed front seams/heart outline and cockpit view.
- GET IN, direct spaceship pointer entry, all four destinations, keyboard Home,
  repeat return and GET IN focus restoration passed. Original boarding retained.
- Local test server on 8001 deliberately returned 503 for portal: PNG visible,
  dashboard entry/Home remained functional. Expected warning captured.
- Delayed portal response by 12 seconds: boarding usable before completion,
  dashboard remained active after late model arrival; Home returned normally.
- Reduced-motion application path exercised with a test-only matchMedia shim:
  entry reached dashboard immediately and Home restored entry. This simulates the
  application preference; it does not certify OS CSS media queries or Safari.
- No unexpected browser errors captured. JavaScript syntax/diff whitespace pass.
- Review images: renders/portal-v003-review/{desktop,mobile}.png (local only).

## Remaining limits and exact next task

Balanced reduction is ~98.68% of original triangles, but aggressive collapse can
alter jewel facets, bulbs and inner/outer rim. Neither lower candidate nor exact
Blender lighting parity is visually approved. Six 1024 RGBA textures require
roughly 24 MiB uncompressed, ~32 MiB including mipmaps; no KTX2/GPU compression.
Three portal meshes add roughly three draws plus 50,764 triangles. GLB is 3.80
MiB, above the provisional 2 MiB target; PNG additionally loads as fallback.
Existing ship/scenery/tunnel already have substantial cost. No physical iPhone
Safari, dynamic browser chrome, real touch, thermal/GPU timing or peak-memory
profiling performed. No scroll-driven journey or modal is added by this task.

Exact next task: user review of this portal on desktop/mobile against current
Blender artwork, particularly jewel facets, bulbs, rim and passage seam; then
choose whether balanced quality is acceptable or further optimization is needed.
Do not mark final or start another artwork milestone automatically.

## Subsequent approved placement correction — 2026-10-20

Supersedes earlier runtime root/depth and camera-shear settings in this report:
portal root Z4.2, Y waterLevel+.60; unchanged uniform height1.755. Bottom about
.2775 submerged. Straight fixed corridor replaces camera-driven shear/clamp;
floor is horizontal at world waterLevel+.002 for its entire depth. Tilted entrance
triangle removed. Two valid aperture/water intersections verified for both GLB
and fallback. User requested this to create more space from ship and continuous
water perspective. No source/asset changes. Mobile/desktop exterior/cockpit and
boarding/return checks passed; physical-device testing still pending. Clouds are
a separate future pass. New review images: distant-level-{mobile,desktop}.png.

## Larger portal and continuous pool — 2026-10-20

Supersedes the preceding runtime size/root/floor fit: size4.3, GLB height3.87,
root waterLevel+.35/Z6.2. User requested larger heart, full-width exterior water
and both walls carried into it. Existing horizontal main water plane is now the
only floor, including inside. Wall/tile/coping/bank runs extend to corridor end
Z50.2, with no seam at entrance. Removed separate tunnel water shader/guides.
Numeric aperture clearance exceeds wall/coping extent .8325 on both sides at
water and coping heights; fallback clears too. Source asset unchanged. Cherubs
keep .68 width with new shoulder positions. Clouds remain deferred. Review views:
renders/portal-v003-review/pool-through-{mobile,desktop}.png.

## Three-quarter heart and palm cutoff — 2026-10-20

Latest user reference correction supersedes earlier fit. Portal size9, uniform
height8.1, root waterLevel+1.98, Z16.2 (~74.44% above water). Full-width pool
still clears the lower point. Palm placement filtered before entrance with1.2
units center margin; last actual row14, entrance16.2. No palm geometry is placed
inside; foreground fronds can overlap in projection. Same34 arches span84 units,
water/walls/coping extend100.2; main water plane extends125, far clip140. No source
or asset export changes. Mobile/desktop reference composition and mobile boarding,
Moon/Home focus restoration passed; no captured errors. Device verification
pending. Clouds deferred. Images: visible-heart-{mobile,desktop}.png.

## Loading-heart removal and marquee — 2026-10-20

Newest user instruction supersedes prior active PNG fallback: removed old HTML
image and texture plane, and initial old-aperture passage. PNG kept on disk only.
Current portal/passage appears on GLB success; entry remains usable during failure.
Standalone marquee web review derivative now mounted above frame; see manifest
for source, settings and report. Sign1,602,356 bytes/17,998 triangles,three1024px
textures. Cherub width1.44 versus.68 previously. Final sign cleanup/material and
lettering appearance unapproved. No source save/new dependency/deployment.
Review images: marquee-cherubs-{mobile,desktop}.png.


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
