# Portal v003 desktop inspection

1. In desktop Blender, open the production working file
   `heart-direction-homepage-exterior-v003.blend`.
2. Switch to Scripting → Text Editor → Open and choose
   `tools/portal/inspect-portal-v003.py` in the website repository.
3. Choose Run Script (Option-P). This inventories the currently open assembly;
   it does not save, export, select, hide, simplify, or otherwise edit artwork.
4. Return to this chat and say the inspection has run. Codex can read the new
   timestamped JSON in `tools/portal/reports/` directly.

If `unsaved_changes` is true, the report describes the desktop state while its
SHA-256 identifies the last saved disk file. Resolve that distinction before
export. Visibility alone does not establish the intended export set: inspect
frame, inset, jewel, marquee/light detail, hidden backups and depth studies by
exact name before creating export copies.

Next stage, after inventory review: explicit object allowlist, separate evaluated
mesh/material/image copies in an isolated export scene, progressively simplified
candidates, unchanged jewel facets/light detail where possible, measured triangle/
texture/file-size reports, and no source save. Do not install tools or use
background Blender. Existing local compression availability must be checked then.

Provisional portal-only review targets: <=50,000 triangles, <=2 MiB GLB,
<=1024px texture maximum where visual quality permits. These are targets, not
measured results or approval to sacrifice silhouette/detail. Compare progressive
candidates before selecting one. Total scene cost and physical Safari still need
measurement. Blender procedural materials may need separately reviewed baking.

Integration follows export inspection: use the existing GLTFLoader, preserve the
separate tunnel and all navigation, align the actual aperture without reshaping
artwork, and keep the PNG visible until a valid GLB loads. Browser review must
cover desktop, mobile, reduced motion, slow/failed GLB and navigation; physical
Safari verification remains distinct from viewport emulation.

## Export current visible assembly (resolved 2026-10-20)

User confirmed: use what is currently open. Export allowlist:
`HD_PORTAL_WORKING_v001`, `HD_Frame_Inset_Under_Lip`, `HD_Ruby_Edge_Cleanup`.
Hidden fill/backups/profile studies are excluded. Current unsaved state is the
input; disk source is never saved or overwritten.

With that same v003 open, open `tools/portal/export-portal-v003.py` in Blender's
Text Editor and Run Script. Wait for the completion popup. It creates independent
review scenes plus timestamped GLBs/report in `exports/portal-v003-review/`.
The original scene is restored afterward. Avoid saving the source .blend with
these temporary review scenes; they can be inspected through the scene selector.
Reruns use fresh timestamped output paths. Failed runs leave a partial report.

Candidate geometry targets (actual counts may differ): detail 100k + inset,
balanced 50k + inset, lean 30k + inset. Each starts from source evaluated geometry,
so reductions do not compound. Inset is retained at full detail; frame/jewel are
simplified separately. Only image copies are resized to <=1024px; originals stay
4096px. Standard GLB/AUTO images, JPEG quality 85 where supported, no Draco or
new runtime decoder. Decimation does not guarantee silhouette/facet preservation:
compare candidates visually, especially bulbs, lettering, jewel facets and rim.
No candidate is selected for the website automatically. Codex will inspect actual
GLB counts, texture sizes, material compatibility and payload after desktop export.
