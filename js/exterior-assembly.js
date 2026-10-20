import { createRollingHills } from './rolling-hills.js?v=hill-crest-samples-7';
import { portalV003Aperture } from './portal-v003-aperture.js';
import * as THREE from './vendor/three.module.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';

// Non-destructive web derivatives of the supplied Tripo models.
export function createExteriorAssembly(scene, waterLevel) {
  const assembly = new THREE.Group(); assembly.name = 'EXTERIOR_TRIPO_ASSEMBLY';
  scene.add(assembly);
  const settings = {
    // About three quarters above water; lower point clears the unchanged pool width.
    portalSize: 8, portalY: waterLevel + 1.65, portalZ: 16.2, tunnelDepth: 84,
    palmRows: [.55,1.55,4.8,7,10,14,19,25].map(z=>[.86,z,1.12]),
  };
  // Extra foreground and intermediate rows fill the wide desktop promenade.
  // Keep the approved portrait arrangement unchanged, including after resize.
  const desktopPalms=new THREE.Group();desktopPalms.name='DESKTOP_PALM_ROWS';
  desktopPalms.visible=false;assembly.add(desktopPalms);
  const portal = new THREE.Group(); portal.name = 'PORTAL_V003_REVIEW';
  portal.position.set(0,settings.portalY,settings.portalZ);assembly.add(portal);
  function createPassage(aperture){
  // Match the actual alpha aperture instead of approximating it with a generic heart.
  const apertureCenter=new THREE.Vector3(...aperture.center.map(v=>v*settings.portalSize),0);
  const outline=aperture.points.map(([x,y])=>new THREE.Vector2(x*settings.portalSize,y*settings.portalSize));
  const heart=new THREE.Shape(outline);
  const seal=new THREE.Shape(outline.map(v=>v.clone().multiplyScalar(1.075)));
  seal.holes.push(new THREE.Path(outline.map(v=>v.clone().multiplyScalar(.985)).reverse()));
  const backing=new THREE.Mesh(new THREE.ShapeGeometry(seal),new THREE.MeshBasicMaterial({color:0x07030e,side:THREE.DoubleSide}));
  backing.scale.setScalar(1);backing.position.copy(apertureCenter);backing.position.z=.013;
  portal.add(backing);
  const tunnel=new THREE.Group();tunnel.name='APERTURE_MATCHED_DEPTH_TUNNEL';
  tunnel.matrixAutoUpdate=false;portal.add(tunnel);
  const depth=settings.tunnelDepth,segments=16,wallPositions=[],wallColors=[];
  for(let j=0;j<segments;j++)for(let i=0;i<outline.length;i++){
    const a=outline[i],b=outline[(i+1)%outline.length];
    const z0=j*depth/segments,z1=(j+1)*depth/segments;
    for(const [v,z] of [[a,z0],[b,z0],[a,z1],[b,z0],[b,z1],[a,z1]]){
      wallPositions.push(v.x*1.015,v.y*1.015,z);
      const shade=.002+.007*Math.exp(-z/7)+.001*Math.abs(v.x);
      wallColors.push(shade*1.3,shade*.25,shade*.95);
    }
  }
  const wallGeometry=new THREE.BufferGeometry();
  wallGeometry.setAttribute('position',new THREE.Float32BufferAttribute(wallPositions,3));
  wallGeometry.setAttribute('color',new THREE.Float32BufferAttribute(wallColors,3));
  wallGeometry.computeVertexNormals();
  tunnel.add(new THREE.Mesh(wallGeometry,new THREE.MeshBasicMaterial({vertexColors:true,side:THREE.DoubleSide})));
  const cap=new THREE.Mesh(new THREE.ShapeGeometry(heart),new THREE.MeshBasicMaterial({color:0x07020c,side:THREE.DoubleSide}));
  cap.position.z=depth;tunnel.add(cap);
  // Open arches meet the water rather than closing into a stack of little hearts.
  // World-horizontal water, just above the exterior surface to avoid z-fighting.
  const floorY=waterLevel+.002-settings.portalY-apertureCenter.y;
  const waterline=[];
  outline.forEach((a,i)=>{
    const b=outline[(i+1)%outline.length];
    if((a.y-floorY)*(b.y-floorY)<0)waterline.push(THREE.MathUtils.lerp(a.x,b.x,(floorY-a.y)/(b.y-a.y)));
  });
  const floorHalfWidth=Math.min(...waterline.map(Math.abs));
  const arch=outline.filter(v=>v.y>floorY);
  // The trace begins at the right shoulder; rotate to start at the waterline.
  const start=arch.findIndex((v,i)=>i && arch[i-1].x<0 && v.x>0);
  const ordered=start<0?arch:[...arch.slice(start),...arch.slice(0,start)];
  const archPoints=[new THREE.Vector3(floorHalfWidth,floorY,0),
    ...ordered.map(v=>new THREE.Vector3(v.x,v.y,0)),new THREE.Vector3(-floorHalfWidth,floorY,0)];
  const curve=new THREE.CurvePath();
  archPoints.slice(1).forEach((point,i)=>curve.add(new THREE.LineCurve3(archPoints[i],point)));
  const coreGeometry=new THREE.TubeGeometry(curve,192,.005,5,false);
  const glowGeometry=new THREE.TubeGeometry(curve,192,.025,6,false);
  const coreMaterial=new THREE.MeshBasicMaterial({color:0xffc9e7,toneMapped:false});
  const glowMaterial=new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
    uniforms:{tint:{value:new THREE.Color(0xff137f)}},
    vertexShader:`varying vec3 normalView; varying vec3 eyeView;
      void main(){vec4 p=modelViewMatrix*vec4(position,1.);normalView=normalize(normalMatrix*normal);
      eyeView=-p.xyz;gl_Position=projectionMatrix*p;}`,
    fragmentShader:`uniform vec3 tint; varying vec3 normalView; varying vec3 eyeView;
      void main(){float light=pow(abs(dot(normalize(normalView),normalize(eyeView))),3.);
      gl_FragColor=vec4(tint,light*.55);}`
  });
  // Equal-size arches in one straight corridor; perspective supplies their recession.
  for(let i=0;i<34;i++){
    const rib=new THREE.Group();rib.name='DEPTH_TUNNEL_RIB_'+i;rib.position.z=.025+i*depth/34;
    rib.add(new THREE.Mesh(coreGeometry,coreMaterial),new THREE.Mesh(glowGeometry,glowMaterial));
    tunnel.add(rib);
  }
  // The existing exterior water plane continues through this corridor.
  // No second floor/shader or narrowing guides: one level surface between walls.
  // Sparse stars live in the corridor volume, not on a flat plane over the opening.
  const stars=[];
  for(let i=0;i<280;i++){
    const n=s=>{const v=Math.sin(i*127.1+s*74.7)*43758.5453;return v-Math.floor(v);};
    stars.push((n(1)-.5)*.65,(n(2)-.5)*.42+.1,.5+n(3)*depth);
  }
  const starGeometry=new THREE.BufferGeometry();starGeometry.setAttribute('position',new THREE.Float32BufferAttribute(stars,3));
  tunnel.add(new THREE.Points(starGeometry,new THREE.PointsMaterial({color:0xc58ba9,size:.008,transparent:true,opacity:.6,depthWrite:false,toneMapped:false})));
  function updateView(camera){
    desktopPalms.visible=innerWidth>=900 && camera.aspect>1;
    // Fixed straight corridor: camera perspective supplies the vanishing point.
    // No camera-driven vertical shear; the water stays horizontal during boarding.
    tunnel.matrix.makeTranslation(apertureCenter.x,apertureCenter.y,.014);
    tunnel.matrixWorldNeedsUpdate=true;
  }
    return updateView;
  }
  let updatePassage=camera=>{desktopPalms.visible=innerWidth>=900 && camera.aspect>1;};
  function updateView(camera){updatePassage(camera);}
  // Raised promenade edges make every row converge to one water-level horizon.
  const poolStart=-5,poolEnd=settings.portalZ+settings.tunnelDepth,poolLength=poolEnd-poolStart,poolCenter=(poolStart+poolEnd)/2;
  const bankMaterial=new THREE.MeshStandardMaterial({color:0x185d70,metalness:.3,roughness:.45});
  for(const side of [-1,1]) {
    const bank=new THREE.Mesh(new THREE.BoxGeometry(4,.22,poolLength),bankMaterial);
    bank.position.set(side*2.8,waterLevel+.03,poolCenter);assembly.add(bank);
    // Pool wall: solid inner face, tiled grid, and a continuous illuminated coping.
    const wall=new THREE.Mesh(new THREE.BoxGeometry(.12,.22,poolLength),new THREE.MeshStandardMaterial({color:0x24162d,metalness:.45,roughness:.3}));
    wall.name='POOL_WALL_'+side;wall.position.set(side*.76,waterLevel+.05,poolCenter);assembly.add(wall);
    const faceX=side*.699,faceLines=[];
    for(let y=-.05;y<=.161;y+=.05)faceLines.push(new THREE.Vector3(faceX,waterLevel+y,poolStart),new THREE.Vector3(faceX,waterLevel+y,poolEnd));
    for(let z=poolStart;z<=poolEnd;z+=.25)faceLines.push(new THREE.Vector3(faceX,waterLevel-.06,z),new THREE.Vector3(faceX,waterLevel+.16,z));
    const tiles=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(faceLines),new THREE.LineBasicMaterial({color:0xff56c7,toneMapped:false}));
    tiles.name='POOL_WALL_TILE_GRID_'+side;assembly.add(tiles);
    const cap=new THREE.Mesh(new THREE.BoxGeometry(.145,.014,poolLength),new THREE.MeshStandardMaterial({color:0x24162d,metalness:.45,roughness:.3}));
    cap.name='POOL_WALL_COPING_'+side;cap.position.set(side*.76,waterLevel+.167,poolCenter);assembly.add(cap);
    // Square cells measured in world units across both horizontal coping surfaces.
    const topLines=[],topY=waterLevel+.175,topMin=side*.76-.0725,topMax=side*.76+.0725;
    const tileSize=.145/3;
    for(let i=0;i<=3;i++){
      const x=topMin+i*tileSize;
      topLines.push(new THREE.Vector3(x,topY,poolStart),new THREE.Vector3(x,topY,poolEnd));
    }
    for(let i=0;i*tileSize<=poolLength;i++){
      const z=poolStart+i*tileSize;
      topLines.push(new THREE.Vector3(topMin,topY,z),new THREE.Vector3(topMax,topY,z));
    }
    const topGrid=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(topLines),tiles.material);
    topGrid.name='POOL_WALL_TOP_GRID_'+side;assembly.add(topGrid);

  }
  // Temporary planting markers; replace these independently with owner-made artwork.
  const flowerShape=new THREE.Shape();
  flowerShape.moveTo(0,.018);
  flowerShape.bezierCurveTo(-.018,.052,-.058,.035,-.047,.004);
  flowerShape.bezierCurveTo(-.04,-.015,-.012,-.033,0,-.047);
  flowerShape.bezierCurveTo(.012,-.033,.04,-.015,.047,.004);
  flowerShape.bezierCurveTo(.058,.035,.018,.052,0,.018);
  const flowerHeads=[],flowerStems=[],flowerLeaves=[];
  const transform=new THREE.Object3D();
  for(const side of [-1,1])for(const z of [1.05,3.175,5.9,8.5,12]){
    for(let i=0;i<3;i++){
      const height=[.24,.37,.29][i],x=side*(.91+i*.025),depth=z+(i-1)*.14;
      flowerHeads.push([x,waterLevel+.14+height,depth]);
      flowerStems.push([x,waterLevel+.14+height/2,depth,height]);
      for(const leafSide of [-1,1])flowerLeaves.push([x+leafSide*.025,waterLevel+.14+height*.48,depth,leafSide]);
    }
  }
  function instances(name,geometry,material,items,position){
    const mesh=new THREE.InstancedMesh(geometry,material,items.length);mesh.name=name;
    items.forEach((item,i)=>{transform.position.set(0,0,0);transform.rotation.set(0,0,0);transform.scale.set(1,1,1);
      position(transform,item);transform.updateMatrix();mesh.setMatrixAt(i,transform.matrix);});
    mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();assembly.add(mesh);return mesh;
  }
  const heartGeometry=new THREE.ShapeGeometry(flowerShape,8);
  instances('PLACEHOLDER_HEART_FLOWER_HEADS',heartGeometry,
    new THREE.MeshStandardMaterial({color:0xff65b9,emissive:0xb80d69,emissiveIntensity:.35,metalness:.3,roughness:.3,side:THREE.DoubleSide}),
    flowerHeads,(object,[x,y,z])=>{object.position.set(x,y,z);});
  instances('PLACEHOLDER_HEART_FLOWER_STEMS',new THREE.CylinderGeometry(.004,.005,1,5),
    new THREE.MeshBasicMaterial({color:0xc44fa9}),flowerStems,
    (object,[x,y,z,height])=>{object.position.set(x,y,z);object.scale.y=height;});
  instances('PLACEHOLDER_HEART_FLOWER_LEAVES',heartGeometry,
    new THREE.MeshStandardMaterial({color:0x258fae,metalness:.3,roughness:.4,side:THREE.DoubleSide}),flowerLeaves,
    (object,[x,y,z,side])=>{object.position.set(x,y,z);object.scale.setScalar(.5);object.rotation.z=side*.85;});
  // Instanced lamps and one shared glow map avoid hundreds of dynamic lights.
  const bulbs=[];
  for(const side of [-1,1])for(let z=poolStart+.35;z<poolEnd;z+=1.2)bulbs.push([side*.76,waterLevel+.199,z]);
  instances('POOL_COPING_LIGHT_BULBS',new THREE.SphereGeometry(.023,10,6),
    new THREE.MeshBasicMaterial({color:0xffe8cb,toneMapped:false}),bulbs,
    (object,[x,y,z])=>{object.position.set(x,y,z);});
  const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;
  const glowContext=glowCanvas.getContext('2d');
  const gradient=glowContext.createRadialGradient(32,32,0,32,32,32);
  gradient.addColorStop(0,'rgba(255,245,220,1)');gradient.addColorStop(.2,'rgba(255,150,205,.8)');
  gradient.addColorStop(.5,'rgba(255,45,160,.25)');gradient.addColorStop(1,'rgba(255,30,145,0)');
  glowContext.fillStyle=gradient;glowContext.fillRect(0,0,64,64);
  const glowMap=new THREE.CanvasTexture(glowCanvas);
  const lampGlow=new THREE.Points(new THREE.BufferGeometry().setFromPoints(bulbs.map(p=>new THREE.Vector3(...p))),
    new THREE.PointsMaterial({map:glowMap,color:0xffffff,size:.15,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));
  lampGlow.name='POOL_COPING_LIGHT_GLOWS';assembly.add(lampGlow);
  const status=document.querySelector('#exterior-assets-status');
  const canvas=document.querySelector('#ship-view');
  createRollingHills(assembly,waterLevel,settings.palmRows[0][2],settings.portalZ-1.2);
  canvas.dataset.hillStyle='solid-rounded-continuous';
  status.textContent='Loading scenery…';
  const modelLoader=new GLTFLoader();
  // No legacy portal plate during loading; entry remains available without it.
  canvas.dataset.portalReady='loading';
  modelLoader.loadAsync('assets/models/heart-direction-rebuild/portal/heart-direction-portal-v003-balanced-review.glb').then(({scene:model})=>{
    const meshes=[];model.traverse(o=>{if(o.isMesh)meshes.push(o);});
    if(meshes.length!==3)throw new Error('Unexpected portal assembly');
    const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3());
    if(![size.x,size.y,size.z].every(Number.isFinite)||size.y<=0)throw new Error('Invalid portal bounds');
    // Preserve all internal transforms. Fit the whole assembly uniformly.
    // glTF source front is +Z; website camera views the -Z side.
    model.rotation.y=Math.PI;
    model.scale.setScalar(settings.portalSize*.90/size.y);
    const fitted=new THREE.Box3().setFromObject(model),center=fitted.getCenter(new THREE.Vector3());
    model.position.set(-center.x,-center.y,-center.z-.005);
    model.name='PORTAL_V003_BALANCED_REVIEW';
    // Refit only the passage entrance to the new artwork; preserve its design.
    const geometries=new Set(),materials=new Set();
    for(const child of [...portal.children]){
      child.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});
      portal.remove(child);
    }
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
    updatePassage=createPassage(portalV003Aperture);portal.add(model);

    canvas.dataset.portalReady='true';
    window.dispatchEvent(new Event('exterior-asset-ready'));
  }).catch(error=>{
    canvas.dataset.portalReady='false';console.warn('Portal GLB unavailable',error);
    status.textContent='Portal unavailable';
    window.dispatchEvent(new Event('exterior-asset-ready'));
  });

  canvas.dataset.marqueeReady='loading';
  modelLoader.loadAsync('assets/models/heart-direction-rebuild/portal/tunnel-of-love-marquee-cleaned-v002-balanced-review.glb').then(({scene:sign})=>{
    sign.rotation.y=Math.PI;
    let box=new THREE.Box3().setFromObject(sign);
    sign.scale.setScalar(settings.portalSize*.90*.883*.80/box.getSize(new THREE.Vector3()).x);
    box=new THREE.Box3().setFromObject(sign);
    const center=box.getCenter(new THREE.Vector3());
    sign.position.set(-center.x,settings.portalY+settings.portalSize*.45-.22-box.min.y,settings.portalZ-.04-center.z);
    sign.name='TUNNEL_OF_LOVE_MARQUEE_REVIEW';assembly.add(sign);
    canvas.dataset.marqueeReady='true';window.dispatchEvent(new Event('exterior-asset-ready'));
  }).catch(error=>{
    canvas.dataset.marqueeReady='false';console.warn('Marquee unavailable',error);
    window.dispatchEvent(new Event('exterior-asset-ready'));
  });
  let complete=0;
  function place(model,name,dimension,size,position,yaw=0,mirrorX=false) {
    const copy=model.clone(true);copy.name=name;copy.rotation.y=yaw;
    if(mirrorX)copy.scale.x*=-1;
    const bounds=new THREE.Box3().setFromObject(copy);
    const extent=bounds.getSize(new THREE.Vector3()).getComponent(dimension);
    if(extent<=0)throw new Error('Zero-size scenery asset: '+name);
    copy.scale.multiplyScalar(size/extent);
    const fitted=new THREE.Box3().setFromObject(copy);
    const center=fitted.getCenter(new THREE.Vector3());
    copy.position.add(new THREE.Vector3(position[0]-center.x,position[1]-fitted.min.y,position[2]-center.z));
    assembly.add(copy);
    return copy;
  }
  const models=[
    ['palm','neon-palm-v001.glb',model=>{
      settings.palmRows.filter(([,z])=>z<=settings.portalZ-1.2).forEach(([x,z,height],row)=>{
        for(const side of [-1,1])place(model,`TRIPO_PALM_${row}_${side}`,1,height,[side*x,waterLevel+.14,z],side*.12);
      });
      const extraRows=[-1.5,-.8,-.1,2.8,3.8,6,8.5,12,16,22,29,34];
      extraRows.filter(z=>z<=settings.portalZ-1.2).forEach((z,row)=>{
        for(const side of [-1,1])desktopPalms.add(place(model,`DESKTOP_PALM_${row}_${side}`,1,1.12,[side*.86,waterLevel+.14,z],side*.12));
      });
    }],
    ['cherub','silver-cherub-v001.glb',model=>{
      // Camera faces +Z, so negative world X is the right side of the screen.
      for(const side of [-1,1])place(model,`TRIPO_CHERUB_${side}`,0,settings.portalSize*.31,[side*settings.portalSize*.38,settings.portalY+settings.portalSize*.45-1.20,settings.portalZ-.35],Math.PI+side*.2,side===-1);
    }],
  ];
  // Load each model once, then share geometry/textures across its placements.
  // Scenery is independent of boarding: a slow or failed model never blocks entry.
  const ready=Promise.allSettled(models.map(async([kind,filename,install])=>{
    try {
      const {scene:model}=await modelLoader.loadAsync('assets/models/heart-direction-rebuild/environment/'+filename);
      install(model);complete++;
      canvas.dataset[kind+'Ready']='true';
      window.dispatchEvent(new Event('exterior-asset-ready'));
    } catch(error) {
      canvas.dataset[kind+'Ready']='false';console.warn('Scenery asset unavailable: '+kind,error);throw error;
    }
  })).then(results=>{
    status.textContent=complete===models.length?'':'Some scenery could not load';
    canvas.dataset.environmentReady=String(complete===models.length);
    window.dispatchEvent(new Event('exterior-asset-ready'));
    return results;
  });
  return { group:assembly, settings, ready, updateView };
}
