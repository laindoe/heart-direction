"""Run in Blender against v013; export only, never save the source .blend."""
import bpy
from pathlib import Path
from mathutils import Vector
out = Path(__file__).resolve().parents[1] / 'assets/models/heart-direction-rebuild/spaceship-blockout-v01.glb'
collections = {'20_HULL_COCKPIT_CLEARED','30_COCKPIT_COLLAR_REFINED','40_CANOPY_REFINED','50_COCKPIT_INTERIOR_BASE','60_DASHBOARD_APPROVED_BUILD'}
selected = [o for o in bpy.data.objects if (any(c.name in collections for c in o.users_collection) or o.name == 'SEAT_BLOCKOUT') and o.type in {'MESH','CURVE'} and not o.hide_render]
# Isolated export scene ensures excluded view-layer collections cannot omit required parts.
scene = bpy.data.scenes.new('WEB_EXPORT_ONLY')
bpy.context.window.scene = scene
for original in selected:
    obj = original.copy()
    obj.data = original.data.copy()
    scene.collection.objects.link(obj)
    obj.hide_set(False)
    obj.hide_viewport = False
    obj.select_set(True)
    if obj.type == 'CURVE':
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.convert(target='MESH')
    pts = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
    print('EXPORT',obj.name, 'bounds',tuple(round(min(p[i] for p in pts),4) for i in range(3)),tuple(round(max(p[i] for p in pts),4) for i in range(3)))
scene.unit_settings.system = 'METRIC'
scene.unit_settings.scale_length = 1
out.parent.mkdir(parents=True, exist_ok=True)
bpy.ops.export_scene.gltf(filepath=str(out), export_format='GLB', use_selection=True, export_yup=True, export_apply=True, export_animations=False, export_cameras=False, export_lights=False)
print('EXPORT_BYTES',out.stat().st_size)
