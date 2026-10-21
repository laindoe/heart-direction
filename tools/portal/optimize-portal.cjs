// Offline tools already present in /tmp/hd-asset-tools; no installation.
const {createRequire}=require('node:module');
const {join,resolve}=require('node:path');
const fs=require('node:fs/promises');
const crypto=require('node:crypto');
const dep=createRequire('/tmp/hd-asset-tools/package.json');
const {NodeIO}=dep('@gltf-transform/core');
const {ALL_EXTENSIONS}=dep('@gltf-transform/extensions');
const {dedup,prune,textureCompress}=dep('@gltf-transform/functions');
const sharp=dep('sharp');
(async()=>{
 const dir=resolve(process.argv[2]);
 const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
 const report=[];
 for(const label of ['detail','balanced','lean']){
  const path=join(dir,`heart-direction-portal-v003-${label}-review.glb`);
  const original=await fs.readFile(path);
  const doc=await io.readBinary(original);
  // No further simplification or transform changes: dedup + texture encoding only.
  await doc.transform(dedup(),prune(),textureCompress({encoder:sharp,targetFormat:'webp',quality:90,slots:/^(?!normalTexture).*$/}));
  const bytes=await io.writeBinary(doc);
  const check=await io.readBinary(bytes);
  let triangles=0;
  for(const mesh of check.getRoot().listMeshes())for(const p of mesh.listPrimitives()){
   const pos=p.getAttribute('POSITION'); const idx=p.getIndices();
   if(!pos || !idx || idx.getCount()%3)throw Error('Invalid triangles');
   for(const x of pos.getArray())if(!Number.isFinite(x))throw Error('Nonfinite vertex');
   for(const x of idx.getArray())if(x>=pos.getCount())throw Error('Invalid index');
   triangles+=idx.getCount()/3;
  }
  const output=join(dir,`heart-direction-portal-v003-${label}-web-review.glb`);
  await fs.writeFile(output,bytes);
  const row={label,output,sourceBytes:original.length,bytes:bytes.length,triangles,
   sha256:crypto.createHash('sha256').update(bytes).digest('hex'),
   textures:check.getRoot().listTextures().map(t=>({name:t.getName(),size:t.getSize(),mime:t.getMimeType()})),
   materials:check.getRoot().listMaterials().map(m=>({name:m.getName(),metallic:m.getMetallicFactor(),roughness:m.getRoughnessFactor()})),
   extensions:check.getRoot().listExtensionsRequired().map(e=>e.extensionName)};
  report.push(row); console.log(JSON.stringify(row));
 }
 await fs.writeFile(join(dir,'web-optimization-report.json'),JSON.stringify(report,null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});
