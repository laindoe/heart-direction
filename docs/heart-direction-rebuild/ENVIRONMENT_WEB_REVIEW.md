# Tripo environment web derivatives v001

Prepared 2026-10-19 without launching Blender. Source GLBs and Downloads originals
are preserved; SHA-256 values were verified after optimization. This is a web
integration review, not a Blender cleanup or final visual approval.

| Asset | Source bytes | Web bytes | Source triangles | Web triangles |
|---|---:|---:|---:|---:|
| neon-palm-v001 | 68,632,216 | 1,592,936 | 1,862,247 | 18,622 |
| neon-mountain-v001 | 69,361,960 | 1,318,792 | 1,959,317 | 14,694 |
| silver-cherub-v001 | 74,169,364 | 2,066,464 | 1,910,977 | 34,396 |

Exports are in exports/homepage-exterior/environment-v001. The reproducible
script is blender/homepage-exterior/scripts/optimize_environment_v001.cjs.
Offline tools were installed in /tmp/hd-asset-tools only: glTF Transform 4.2.1,
meshoptimizer 0.25.0, Sharp 0.34.3. No website dependency was added.

Pipeline: deduplication, attribute-aware vertex welding, mesh simplification
(error limit .005), pruning and texture resizing to 1024px maximum. JPEG quality
85; PNG format retained for normal maps. No Draco/Meshopt runtime decoder needed.
Output was re-read with NodeIO and checked for finite attributes, matching counts,
valid triangle indices and file/chunk lengths. UVs/material slots remain; lossy
geometry and texture reduction can still affect fine detail. Source metadata's
optional FB_ngon_encoding is not required for triangle rendering.

Website: replaced procedural stand-ins with six palms, four mountain placements
and two cherubs. Each model loads once; clones share mesh/texture resources.
Runtime uses uniform scaling and Y-axis rotation; model proportions are retained.
Three-model network payload is 4,978,192 bytes. Across placements, environment
geometry is approximately 239,000 triangles, before the ship and other scene parts.
Textures use normal GPU image decoding; KTX2/mobile-memory optimization is still
future work. Scenery loads independently and does not block boarding.

Verified in in-app browser at 390×844 and 1440×900: all three ready flags true,
actual geometry/textures visible, no console warnings/errors, ship boarding,
in-screen Moon coming soon, Home keyboard activation and exterior return.
320×700: entry visible and no horizontal overflow. Screenshots are in
renders/environment-web-v001/mobile.png and desktop.png.

Next: review positioning/scale and lighting together. Cherubs and ship currently
render dark; glTF appearance is not a guaranteed match to Blender lighting or
procedural materials. Mountains/trees are the supplied neon artwork, not the
previous procedural placeholders. Portal remains the earlier temporary image
cutout. Physical iPhone Safari, failure injection, reduced-motion setting and
mobile GPU/memory budget were not newly tested. No commit/push/deployment.
