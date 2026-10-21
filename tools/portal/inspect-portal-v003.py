"""Desktop Blender Text Editor > Open > Run Script. Read-only scene inspection.
Open v003 yourself first. Does not open, save, export, select, or edit artwork.
Writes timestamped JSON alongside this script's documented report directory.
"""
import bpy
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from mathutils import Vector

ROOT = Path('/Users/shalainderamus/Desktop/grand-play/repos/heart-direction')
SOURCE = Path('/Users/shalainderamus/Desktop/grand-play/repos/heart-direction-production/blender/homepage-exterior/working/heart-direction-homepage-exterior-v003.blend')
REPORTS = ROOT / 'tools/portal/reports'


def digest(path):
    h = hashlib.sha256()
    with path.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def main():
    if Path(bpy.data.filepath).resolve() != SOURCE.resolve():
        raise RuntimeError('Open heart-direction-homepage-exterior-v003.blend before running. No file was changed.')
    depsgraph = bpy.context.evaluated_depsgraph_get()
    rows = []
    for obj in sorted(bpy.data.objects, key=lambda item: item.name):
        in_layer = obj.name in bpy.context.view_layer.objects
        row = dict(name=obj.name, type=obj.type,
                   collections=[c.name for c in obj.users_collection],
                   scenes=[s.name for s in obj.users_scene],
                   parent=obj.parent.name if obj.parent else None,
                   hide_render=obj.hide_render, hide_viewport=obj.hide_viewport,
                   hidden_in_layer=obj.hide_get() if in_layer else None,
                   visible_in_layer=obj.visible_get() if in_layer else False,
                   matrix_world=[list(r) for r in obj.matrix_world],
                   modifiers=[dict(name=m.name, type=m.type, viewport=m.show_viewport,
                                   render=m.show_render) for m in obj.modifiers],
                   materials=[s.material.name if s.material else None for s in obj.material_slots],
                   properties={k: str(obj[k]) for k in obj.keys()})
        if obj.type in {'MESH', 'CURVE', 'SURFACE', 'FONT', 'META'}:
            points = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
            row['world_bounds'] = [[min(p[i] for p in points) for i in range(3)],
                                   [max(p[i] for p in points) for i in range(3)]]
            if obj.type == 'MESH':
                row['base_triangles'] = sum(len(p.vertices) - 2 for p in obj.data.polygons)
                row['vertices'] = len(obj.data.vertices)
            if in_layer:
                evaluated = obj.evaluated_get(depsgraph)
                try:
                    mesh = evaluated.to_mesh()
                    if mesh:
                        row['evaluated_triangles'] = sum(len(p.vertices) - 2 for p in mesh.polygons)
                        row['uv_layers'] = [uv.name for uv in mesh.uv_layers]
                finally:
                    evaluated.to_mesh_clear()
        rows.append(row)
    materials = []
    for mat in bpy.data.materials:
        nodes = mat.node_tree.nodes if mat.use_nodes and mat.node_tree else []
        materials.append(dict(name=mat.name, use_nodes=mat.use_nodes,
            nodes=[dict(name=n.name, type=n.type,
                        image=n.image.name if n.type == 'TEX_IMAGE' and n.image else None)
                   for n in nodes]))
    report = dict(source=str(SOURCE), source_bytes=SOURCE.stat().st_size,
        source_sha256=digest(SOURCE), blender=bpy.app.version_string,
        active_scene=bpy.context.scene.name, active_view_layer=bpy.context.view_layer.name,
        unsaved_changes=bpy.data.is_dirty,
        units=dict(system=bpy.context.scene.unit_settings.system,
                   scale_length=bpy.context.scene.unit_settings.scale_length),
        collections=[dict(name=c.name, hide_render=c.hide_render,
                          hide_viewport=c.hide_viewport, objects=[o.name for o in c.objects])
                     for c in bpy.data.collections],
        objects=rows, materials=materials,
        images=[dict(name=i.name, filepath=i.filepath, dimensions=list(i.size),
                     channels=i.channels, source=i.source,
                     packed=bool(i.packed_file), colorspace=i.colorspace_settings.name)
                for i in bpy.data.images],
        gltf_export_available=hasattr(bpy.ops.export_scene, 'gltf'),
        note='Inventory only. Visibility is evidence, not export approval. Evaluated counts use current viewport modifiers; render modifiers may differ.')
    REPORTS.mkdir(parents=True, exist_ok=True)
    out = REPORTS / ('portal-v003-inspection-' + datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ') + '.json')
    out.write_text(json.dumps(report, indent=2), encoding='utf-8')
    print('PORTAL INSPECTION COMPLETE:', out)
    print('No artwork modified or saved. Return to Codex to review inventory before export.')


if __name__ == '__main__':
    main()
