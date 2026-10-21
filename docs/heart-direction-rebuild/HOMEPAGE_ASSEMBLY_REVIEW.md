# Homepage assembly preview v001

Implemented on production/homepage-rebuild. This is a composition pass for
review, not final art approval. No Blender launch, commit, push or deployment.

## Composition

- Existing responsive cyan sky retained.
- Real portal v002 front diagnostic used as the input to an ImageGen transparent
  cutout derivative. Source render and Blender masters remain untouched. This
  AI-derived cutout is a temporary assembly asset, not a pixel-identical Blender
  export. It needs replacement by a native transparent render/export for final
  fidelity; marquee lettering/detail and silhouette need final comparison.
- Cutout: assets/images/heart-direction-rebuild/exterior/portal-v002-cutout.png,
  1254×1254 RGBA, 1,439,243 bytes. Preserve its alpha and proportions.
- Portal is a fixed front-facing 2.5D plane in the same Three.js scene as the
  existing v013 ship. Dark heart geometry behind it reserves the tunnel opening;
  no additional tunnel journey or takeoff route has been introduced.
- Neutral reflection environment reused for the exterior; turquoise physical
  water material and static surface marks establish the shared waterline.
- Six palms, gridded aqua hills and two winged pearl markers are procedural
  composition stand-ins. They are not approved final palm/landscape/cherub art.
- Direct spaceship hit target and GET IN both start boarding. Narrow screens
  move the exterior camera back to preserve the full portal and ship. The
  2.6-second canopy/camera sequence remains; final cockpit FOV/view target now
  show the environment ahead. Exterior ship hides at the end to avoid a second
  dashboard; the original interactive dashboard renders separately as before.
- Original dashboard controls, on-screen coming-soon text, staged Store/Socials
  and Home return remain. Home restores the exterior camera and entry focus.

## Files

Updated index.html, styles.css, script.js and js/graybox-ship.js.
Added js/exterior-assembly.js and the portal cutout. The assembly settings live
near the top of exterior-assembly.js; camera framing lives in graybox-ship.js.
No new library or dependency was installed. No raw GLBs are served to browsers;
existing ship GLB remains ~11.7 MB, plus the ~1.4 MB cutout and scenery code.
Original three Tripo GLB SHA-256 values match the earlier recorded values.

## Verification

- JavaScript module syntax checks and git diff --check passed.
- In-app browser review at 390×844 and 1440×900: loaded exterior, complete portal
  and ship framing, visible scenery, direct ship click and GET IN boarding,
  original dashboard artwork and Moon/Saturn text in its display.
- Repeated Home/boarding cycle and keyboard Home activation restored GET IN focus.
- 320×700 check: no horizontal overflow; GET IN remains inside viewport.
- No browser console warnings/errors captured during final checks.
- Production screenshots: renders/homepage-assembly-v001/mobile.png,
  desktop.png and mobile-cockpit.png.
- Physical iPhone Safari, reduced-motion setting, failed model/texture loading,
  memory/GPU budgets and commerce were not newly browser-tested.

## Next review

Review the complete exterior and cockpit together. Choose portal/ship relative
scale, camera heights, palm density, hill shapes and cherub placement. Then tune
materials, replace temporary scenery/portal derivative with approved production
assets, and add water/reflection detail. Existing marquee wording is inherited
from the supplied asset, not new approved homepage copy. No final visual polish,
character-art approval or production performance certification is implied.

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
