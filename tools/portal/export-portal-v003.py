"""Run in desktop Blender Text Editor with the inspected v003 still open.
Uses CURRENT open artwork, including unsaved edits. Never saves a .blend file.
Creates independent review scenes and GLB candidates; never edits source objects.
"""
import bpy
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from mathutils import Vector

ROOT = Path('/Users/shalainderamus/Desktop/grand-play/repos/heart-direction')
SOURCE_NAME = 'heart-direction-homepage-exterior-v003.blend'
# Explicitly resolved by user: use the current visible assembly, not hidden fill.
INCLUDE = ('HD_PORTAL_WORKING_v001', 'HD_Frame_Inset_Under_Lip', 'HD_Ruby_Edge_Cleanup')
# Independent candidates, each derived directly from evaluated source geometry.
# Jewel retains a proportionally higher density to protect facets.
CANDIDATES = (
    ('detail', 60000, 40000),
    ('balanced', 30000, 20000),
    ('lean', 18000, 12000),
)
TEXTURE_MAX = 1024


def sha(path):
    h = hashlib.sha256()
    with path.open('rb') as f:
        for block in iter(lambda: f.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def triangles(mesh):
    return sum(len(p.vertices) - 2 for p in mesh.polygons)


def bounds(obj):
    points = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
    return [[min(p[i] for p in points) for i in range(3)],
            [max(p[i] for p in points) for i in range(3)]]


def main():
    source = Path(bpy.data.filepath)
    if source.name != SOURCE_NAME:
        raise RuntimeError('Open the inspected v003 source first. No artwork changed.')
    original_scene = bpy.context.scene
    original_layer = bpy.context.view_layer
    window = bpy.context.window
    if window is None:
        raise RuntimeError('Run in desktop Blender, not background mode.')
    objects = [bpy.data.objects.get(n) for n in INCLUDE]
    if any(o is None or not o.visible_get() or o.hide_render for o in objects):
        raise RuntimeError('Expected visible assembly changed. Run inspection again before export.')
    visible = {o.name for o in original_scene.objects
               if o.type in {'MESH', 'CURVE', 'SURFACE', 'FONT', 'META'}
               and o.visible_get() and not o.hide_render}
    if visible != set(INCLUDE):
        raise RuntimeError('Visible artwork changed: ' + repr(sorted(visible)) + '. Reinspect before export.')
    export_props = {p.identifier for p in bpy.ops.export_scene.gltf.get_rna_type().properties}
    required = {'filepath', 'export_format', 'use_selection', 'export_yup', 'export_animations'}
    if not required <= export_props:
        raise RuntimeError('Compatible Blender glTF exporter is unavailable.')
    stamp = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
    out = ROOT / 'exports/portal-v003-review' / stamp
    out.mkdir(parents=True, exist_ok=False)
    before_hash = sha(source)
    matrices = {o.name: o.matrix_world.copy() for o in objects}
    report = dict(status='running', source=str(source), source_sha256=before_hash,
        source_bytes=source.stat().st_size, uses_current_unsaved_state=bpy.data.is_dirty,
        blender=bpy.app.version_string, included=list(INCLUDE),
        excluded=[o.name for o in original_scene.objects if o.name not in INCLUDE],
        units=dict(system=original_scene.unit_settings.system,
                   scale_length=original_scene.unit_settings.scale_length),
        orientation='Source world transforms retained; Blender Z-up to glTF Y-up. Confirm front direction visually before integration.',
        settings=dict(format='GLB', animations=False, cameras=False, lights=False,
                      texture_max=TEXTURE_MAX, draco=False,
                      note='Standard GLB; no runtime decoder or new dependency. Independent collapse-decimation candidates, not final approvals.'),
        source_objects=[], candidates=[])
    report_path = out / 'export-report.json'
    depsgraph = bpy.context.evaluated_depsgraph_get()
    # Evaluate source modifiers once. Copies own mesh data and retain world alignment.
    source_meshes = {}
    for obj in objects:
        mesh = bpy.data.meshes.new_from_object(obj.evaluated_get(depsgraph),
                                               preserve_all_data_layers=True, depsgraph=depsgraph)
        source_meshes[obj.name] = mesh
        report['source_objects'].append(dict(name=obj.name, triangles=triangles(mesh),
            world_bounds=bounds(obj), matrix_world=[list(r) for r in obj.matrix_world],
            materials=[m.name if m else None for m in mesh.materials]))
    try:
        for label, frame_target, jewel_target in CANDIDATES:
            scene = bpy.data.scenes.new('PORTAL_WEB_REVIEW_' + label + '_' + stamp)
            scene.unit_settings.system = original_scene.unit_settings.system
            scene.unit_settings.scale_length = original_scene.unit_settings.scale_length
            window.scene = scene
            material_copies, image_copies = {}, {}
            result = dict(label=label, scene=scene.name, objects=[], textures=[])
            report['candidates'].append(result)
            for source_obj in objects:
                mesh = source_meshes[source_obj.name].copy()
                copy = bpy.data.objects.new(source_obj.name + '_WEB_' + label, mesh)
                scene.collection.objects.link(copy)
                copy.matrix_world = matrices[source_obj.name].copy()
                # Clone materials and images; resize only independent image copies.
                for i, material in enumerate(list(mesh.materials)):
                    if material is None:
                        continue
                    if material not in material_copies:
                        clone = material.copy()
                        clone.name = material.name + '_WEB_' + label
                        material_copies[material] = clone
                        if clone.use_nodes:
                            for node in clone.node_tree.nodes:
                                if node.type != 'TEX_IMAGE' or not node.image:
                                    continue
                                image = node.image
                                if image not in image_copies:
                                    image_copy = image.copy()
                                    image_copy.name = image.name + '_WEB_' + label
                                    w, h = image.size
                                    if w <= 0 or h <= 0:
                                        raise RuntimeError('Missing image pixels: ' + image.name)
                                    factor = min(1.0, TEXTURE_MAX / max(w, h))
                                    if factor < 1:
                                        image_copy.scale(max(1, round(w * factor)), max(1, round(h * factor)))
                                    image_copies[image] = image_copy
                                    result['textures'].append(dict(source=image.name, original=[w,h],
                                        exported=list(image_copy.size), colorspace=image_copy.colorspace_settings.name))
                                node.image = image_copies[image]
                    mesh.materials[i] = material_copies[material]
                start = triangles(mesh)
                target = (frame_target if source_obj.name == INCLUDE[0] else
                          jewel_target if source_obj.name == INCLUDE[2] else start)
                if start > target:
                    modifier = copy.modifiers.new('WEB_REVIEW_COLLAPSE', 'DECIMATE')
                    modifier.decimate_type = 'COLLAPSE'
                    modifier.ratio = target / start
                    modifier.use_collapse_triangulate = True
                    bpy.context.view_layer.objects.active = copy
                    copy.select_set(True)
                    bpy.ops.object.modifier_apply(modifier=modifier.name)
                    copy.select_set(False)
                result['objects'].append(dict(name=copy.name, original=source_obj.name,
                    before_triangles=start, target_triangles=target,
                    after_triangles=triangles(copy.data), world_bounds=bounds(copy)))
            for obj in scene.objects:
                obj.select_set(True)
            bpy.context.view_layer.objects.active = next(iter(scene.objects))
            path = out / ('heart-direction-portal-v003-' + label + '-review.glb')
            options = dict(filepath=str(path), export_format='GLB', use_selection=True,
                           export_yup=True, export_animations=False)
            optional = dict(use_active_scene=True, export_cameras=False, export_lights=False,
                export_apply=False, export_image_format='AUTO', export_jpeg_quality=85,
                export_draco_mesh_compression_enable=False, export_extras=False)
            options.update({k:v for k,v in optional.items() if k in export_props})
            bpy.ops.export_scene.gltf(**options)
            if not path.is_file() or path.stat().st_size < 20:
                raise RuntimeError('Exporter did not produce a valid-sized file.')
            with path.open('rb') as f:
                header = f.read(12)
            if header[:4] != b'glTF' or int.from_bytes(header[8:12], 'little') != path.stat().st_size:
                raise RuntimeError('Invalid GLB header/length.')
            result.update(filepath=str(path), bytes=path.stat().st_size, sha256=sha(path),
                          total_triangles=sum(o['after_triangles'] for o in result['objects']))
            report_path.write_text(json.dumps(report, indent=2), encoding='utf-8')
        report['status'] = 'exported_for_review_not_final'
    except Exception as error:
        report['status'] = 'failed'
        report['error'] = repr(error)
        raise
    finally:
        window.scene = original_scene
        window.view_layer = original_layer
        for mesh in source_meshes.values():
            if mesh.users == 0:
                bpy.data.meshes.remove(mesh)
        report['source_sha256_after'] = sha(source)
        report['source_file_unchanged'] = report['source_sha256_after'] == before_hash
        report['source_transforms_unchanged'] = all(
            all(abs(o.matrix_world[r][c] - matrices[o.name][r][c]) < 1e-7
                for r in range(4) for c in range(4)) for o in objects)
        report_path.write_text(json.dumps(report, indent=2), encoding='utf-8')
    print('Portal review candidates:', out)
    # Visible confirmation avoids relying on macOS's hidden stdout console.
    def popup(self, context):
        self.layout.label(text='Three portal GLBs exported for review.')
        self.layout.label(text='Return to Codex. Source .blend was not saved.')
    window_manager = bpy.context.window_manager
    window_manager.popup_menu(popup, title='Portal export complete', icon='INFO')


if __name__ == '__main__':
    main()
