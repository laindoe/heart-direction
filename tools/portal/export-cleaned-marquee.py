"""Desktop Blender Text Editor > Run Script with the cleaned marquee open.
Evaluates current visible artwork into independent export copies; never saves
or overwrites the .blend, never launches Blender, never changes website assets.
"""
import bpy
import hashlib
import json
from pathlib import Path
from datetime import datetime, timezone

ROOT=Path('/Users/shalainderamus/Desktop/grand-play/repos/heart-direction')
SOURCE=Path('/Users/shalainderamus/Desktop/grand-play/repos/heart-direction-production/blender/homepage-exterior/working/heart-direction-homepage-tunnel-marquee.blend')
CANDIDATES=(('detail',40000),('balanced',24000),('lean',18000))


def sha(path):
    h=hashlib.sha256()
    with path.open('rb') as stream:
        for block in iter(lambda:stream.read(1024*1024),b''):
            h.update(block)
    return h.hexdigest()


def triangles(mesh):
    return sum(len(p.vertices)-2 for p in mesh.polygons)


def main():
    if Path(bpy.data.filepath).resolve()!=SOURCE.resolve():
        raise RuntimeError('Open the cleaned heart-direction-homepage-tunnel-marquee.blend first.')
    if bpy.context.window is None:
        raise RuntimeError('Desktop Blender required.')
    scene=bpy.context.scene
    layer=bpy.context.view_layer
    window=bpy.context.window
    stamp=datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
    out=ROOT/'exports/cleaned-marquee-review'/stamp
    out.mkdir(parents=True,exist_ok=False)
    visible=[o for o in scene.objects if o.type in {'MESH','CURVE','FONT','SURFACE','META'} and o.visible_get() and not o.hide_render]
    report=dict(source=str(SOURCE),source_bytes=SOURCE.stat().st_size,
        source_sha256=sha(SOURCE),uses_current_unsaved_state=bpy.data.is_dirty,
        blender=bpy.app.version_string,status='preflight',
        inventory=[dict(name=o.name,type=o.type,visible=o.visible_get(),hide_render=o.hide_render,
                        materials=[s.material.name if s.material else None for s in o.material_slots]) for o in scene.objects],
        settings=dict(format='GLB',texture_max=1024,image_format='AUTO',jpeg_quality=85,
                      animations=False,cameras=False,lights=False,draco=False,y_up=True),candidates=[])
    report_file=out/'export-report.json'
    report_file.write_text(json.dumps(report,indent=2))
    # Regenerated marquee screenshot shows one fused sign. Do not guess if the
    # saved scene has extra visible geometry such as frames or other sign studies.
    if len(visible)!=1 or visible[0].type!='MESH':
        raise RuntimeError('Expected one visible cleaned sign mesh. Inventory written; return to Codex to resolve export objects.')
    source=visible[0]
    world=source.matrix_world.copy()
    report['included']=source.name
    report['source_matrix_world']=[list(r) for r in world]
    report['units']=dict(system=scene.unit_settings.system,scale_length=scene.unit_settings.scale_length)
    props={p.identifier for p in bpy.ops.export_scene.gltf.get_rna_type().properties}
    depsgraph=bpy.context.evaluated_depsgraph_get()
    base=bpy.data.meshes.new_from_object(source.evaluated_get(depsgraph),preserve_all_data_layers=True,depsgraph=depsgraph)
    report['source_triangles']=triangles(base)
    try:
        for label,target in CANDIDATES:
            review=bpy.data.scenes.new('CLEANED_MARQUEE_WEB_'+label+'_'+stamp)
            review.unit_settings.system=scene.unit_settings.system
            review.unit_settings.scale_length=scene.unit_settings.scale_length
            window.scene=review
            mesh=base.copy()
            copy=bpy.data.objects.new('CLEANED_MARQUEE_'+label,mesh)
            review.collection.objects.link(copy)
            copy.matrix_world=world.copy()
            mats,images={},{}
            textures=[]
            for i,material in enumerate(list(mesh.materials)):
                if material is None:continue
                if material not in mats:
                    clone=material.copy()
                    mats[material]=clone
                    if clone.use_nodes:
                        for node in clone.node_tree.nodes:
                            if node.type!='TEX_IMAGE' or not node.image:continue
                            original=node.image
                            if original not in images:
                                image=original.copy()
                                w,h=original.size
                                if min(w,h)<=0:raise RuntimeError('Missing texture pixels: '+original.name)
                                factor=min(1,1024/max(w,h))
                                if factor<1:image.scale(max(1,round(w*factor)),max(1,round(h*factor)))
                                images[original]=image
                                textures.append(dict(source=original.name,original=[w,h],exported=list(image.size),colorspace=image.colorspace_settings.name))
                            node.image=images[original]
                mesh.materials[i]=mats[material]
            bpy.context.view_layer.objects.active=copy
            copy.select_set(True)
            if triangles(mesh)>target:
                mod=copy.modifiers.new('WEB_REVIEW_DECIMATE','DECIMATE')
                mod.ratio=target/triangles(mesh)
                mod.use_collapse_triangulate=True
                bpy.ops.object.modifier_apply(modifier=mod.name)
            path=out/('tunnel-of-love-marquee-cleaned-v002-'+label+'-review.glb')
            options=dict(filepath=str(path),export_format='GLB',use_selection=True,
                         export_yup=True,export_animations=False)
            optional=dict(use_active_scene=True,export_cameras=False,export_lights=False,export_apply=False,
                          export_image_format='AUTO',export_jpeg_quality=85,
                          export_draco_mesh_compression_enable=False,export_extras=False)
            options.update({k:v for k,v in optional.items() if k in props})
            bpy.ops.export_scene.gltf(**options)
            with path.open('rb') as stream:header=stream.read(12)
            if header[:4]!=b'glTF' or int.from_bytes(header[8:12],'little')!=path.stat().st_size:
                raise RuntimeError('Invalid GLB output.')
            report['candidates'].append(dict(label=label,scene=review.name,filepath=str(path),
                target_triangles=target,triangles=triangles(copy.data),textures=textures,
                bytes=path.stat().st_size,sha256=sha(path)))
            report_file.write_text(json.dumps(report,indent=2))
        report['status']='exported_for_review_not_final'
    except Exception as error:
        report.update(status='failed',error=repr(error))
        raise
    finally:
        window.scene=scene
        window.view_layer=layer
        if base.users==0:bpy.data.meshes.remove(base)
        report['source_sha256_after']=sha(SOURCE)
        report['source_file_unchanged']=report['source_sha256']==report['source_sha256_after']
        report['source_transform_unchanged']=all(abs(source.matrix_world[r][c]-world[r][c])<1e-7 for r in range(4) for c in range(4))
        report_file.write_text(json.dumps(report,indent=2))
    def popup(self,context):
        self.layout.label(text='Three cleaned marquee review GLBs exported.')
        self.layout.label(text='Return to Codex. Source .blend was not saved.')
        self.layout.label(text='Do not save temporary review scenes over your master.')
    bpy.context.window_manager.popup_menu(popup,title='Cleaned marquee export complete',icon='INFO')


if __name__=='__main__':
    main()
