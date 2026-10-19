# Homepage reference proportion pass v001

2026-10-19, production/homepage-rebuild. User supplied IMG_7483.PNG as the closest
composition target. Durable unmodified copy in production storage:
references/homepage/homepage-composition-reference-v001.png.

## Changes

- Rebalanced portal scale/height and the low foreground spaceship, preserving
  uniform scaling and the original model/plate aspect ratios. Portal plate size
  1.95, center height waterline + 1.26; ship root uniform factor 1.04.
- Cherub width increased from .30 to .68 scene units and positioned at the two
  marquee shoulders. Actual supplied Tripo geometry remains unchanged.
- Palms now form eight paired rows at Z .8, 2.8, 4.8, 7, 10, 14, 19, 25, with
  uniform model height 1.12, along banks at X ±.8. Mountains repeat in four pairs
  beyond the banks, rather than floating as isolated side clusters.
- Added grid promenade surfaces and a broader water base to ground the landscape.
- Added eleven nested glowing heart ribs inside the existing dark opening to
  suggest the reference's depth. These are decorative scene geometry only;
  no takeoff, artifact trail, or additional navigation route was enabled.
- Neon GET IN and its upward arrow now sit on the water below the ship.
  Desktop/short landscape layouts use a shorter arrow to keep entry usable.
- Preserved approved cyan sky. Reference purple sky, marquee replacement wording,
  photorealistic water, bright chrome and glow treatment are not implicitly
  approved or completed by this composition-only change.
- Fixed the invitation container's pointer interception so direct ship clicks
  work even where transparent layout space crosses the ship hit target.

## Tuning and hand edits

Placement lives in js/exterior-assembly.js and the exterior camera/ship root in
js/graybox-ship.js. Scene layout can change here without re-exporting models.
Geometry/silhouette edits belong in versioned Blender masters and require a new
asset export; no Blender launch or source-model modification occurred here.

## Validation

- JavaScript module syntax and git diff --check passed.
- In-app browser screenshots reviewed at 390×844 and 1440×900.
- GET IN and direct ship-pointer/keyboard entry, in-screen Saturn/Moon states,
  keyboard Home, focus restoration and repeat boarding checked.
- 320×700 and 844×390: no horizontal overflow, GET IN inside viewport.
- No console warnings/errors captured. All three environment assets loaded.
- Screenshots in production/renders/reference-fit-v001/mobile.png and desktop.png.
- No physical iPhone Safari, fresh reduced-motion/failure-injection or thermal/
  GPU profiling performed. Existing fallbacks and reduced-motion code retained.

## Remaining differences

This is a proportional approximation using the available assets, not a recreation
of the reference image. Cherub poses, original portal silhouette and sign wording
remain different. Cherubs/ship are dark; water is still a simple material without
reference-quality reflections. Portal is still a temporary ImageGen cutout.
Sixteen palm, eight mountain and two cherub placements share their model resources
but total environment geometry is now about 484k triangles, plus ship/scene/ribs.
Mobile performance needs a later measured budget; no launch readiness is claimed.

Next: review this composition, then match chrome, illumination and water/reflection
appearance in a separate visual pass. No commit, push or deployment.
