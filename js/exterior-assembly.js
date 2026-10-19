import { portalAperture } from './portal-aperture.js';
import * as THREE from './vendor/three.module.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';

// Non-destructive web derivatives of the supplied Tripo models.
export function createExteriorAssembly(scene, waterLevel) {
  const assembly = new THREE.Group(); assembly.name = 'EXTERIOR_TRIPO_ASSEMBLY';
  scene.add(assembly);
  const settings = {
    portalSize: 1.95, portalY: waterLevel + 1.26, portalZ: 2.2,
    palmRows: [.55,1.55,4.8,7,10,14,19,25].map(z=>[.86,z,1.12]),
  };
  const portal = new THREE.Group(); portal.name = 'PORTAL_V002_PLATE';
  portal.position.set(0,settings.portalY,settings.portalZ);assembly.add(portal);
  // Match the actual alpha aperture instead of approximating it with a generic heart.
  const apertureCenter=new THREE.Vector3(...portalAperture.center.map(v=>v*settings.portalSize),0);
  const outline=portalAperture.points.map(([x,y])=>new THREE.Vector2(x*settings.portalSize,y*settings.portalSize));
  const heart=new THREE.Shape(outline);
  const seal=new THREE.Shape(outline.map(v=>v.clone().multiplyScalar(1.045)));
  seal.holes.push(new THREE.Path(outline.map(v=>v.clone().multiplyScalar(.997)).reverse()));
  const backing=new THREE.Mesh(new THREE.ShapeGeometry(seal),new THREE.MeshBasicMaterial({color:0x07030e,side:THREE.DoubleSide}));
  backing.scale.setScalar(1);backing.position.copy(apertureCenter);backing.position.z=.013;
  portal.add(backing);
  const tunnel=new THREE.Group();tunnel.name='APERTURE_MATCHED_DEPTH_TUNNEL';
  tunnel.matrixAutoUpdate=false;portal.add(tunnel);
  const depth=60,segments=28,wallPositions=[],wallColors=[];
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
  const curve=new THREE.CurvePath();
  outline.forEach((a,i)=>{const b=outline[(i+1)%outline.length];curve.add(new THREE.LineCurve3(new THREE.Vector3(a.x,a.y,0),new THREE.Vector3(b.x,b.y,0)));});
  const coreGeometry=new THREE.TubeGeometry(curve,320,.0042,5,true);
  const haloGeometry=new THREE.TubeGeometry(curve,320,.009,5,true);
  // Equal-size arches at actual increasing Z distances: perspective supplies the recession.
  for(let i=0;i<34;i++){
    const rib=new THREE.Group();rib.name='DEPTH_TUNNEL_RIB_'+i;rib.position.z=.025+i*1.8;
    rib.add(new THREE.Mesh(coreGeometry,new THREE.MeshBasicMaterial({color:0xffacd3,toneMapped:false})));
    rib.add(new THREE.Mesh(haloGeometry,new THREE.MeshBasicMaterial({color:0xff087b,transparent:true,opacity:.28,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false})));
    tunnel.add(rib);
  }
  // A continuous deck and edge lights connect the arches into an inhabitable corridor.
  const floorY=-settings.portalSize*.155,floorHalfWidth=settings.portalSize*.092;
  const entranceY=Math.min(...outline.map(p=>p.y))+.012;
  const deckVertices=[-floorHalfWidth,floorY,0,floorHalfWidth,floorY,0,-floorHalfWidth,floorY,depth,
    floorHalfWidth,floorY,0,floorHalfWidth,floorY,depth,-floorHalfWidth,floorY,depth,
    -.008,entranceY,.018,-floorHalfWidth,floorY,.018,floorHalfWidth,floorY,.018];
  const deckGeometry=new THREE.BufferGeometry();deckGeometry.setAttribute('position',new THREE.Float32BufferAttribute(deckVertices,3));
  const floor=new THREE.Mesh(deckGeometry,new THREE.MeshBasicMaterial({color:0x102934,side:THREE.DoubleSide}));
  tunnel.add(floor);
  const guides=[];
  for(const side of [-1,1])guides.push(new THREE.Vector3(side*floorHalfWidth,floorY+.002,0),new THREE.Vector3(side*floorHalfWidth,floorY+.002,depth));
  for(let z=0;z<depth;z+=1.8)guides.push(new THREE.Vector3(-floorHalfWidth,floorY+.002,z),new THREE.Vector3(floorHalfWidth,floorY+.002,z));
  tunnel.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(guides),new THREE.LineBasicMaterial({color:0xff459e,transparent:true,opacity:.5,toneMapped:false})));
  // Sparse stars live in the corridor volume, not on a flat plane over the opening.
  const stars=[];
  for(let i=0;i<100;i++){
    const n=s=>{const v=Math.sin(i*127.1+s*74.7)*43758.5453;return v-Math.floor(v);};
    stars.push((n(1)-.5)*.65,(n(2)-.5)*.42+.1,.5+n(3)*depth);
  }
  const starGeometry=new THREE.BufferGeometry();starGeometry.setAttribute('position',new THREE.Float32BufferAttribute(stars,3));
  tunnel.add(new THREE.Points(starGeometry,new THREE.PointsMaterial({color:0xc58ba9,size:.004,transparent:true,opacity:.6,depthWrite:false,toneMapped:false})));
  function updateView(camera){
    // Straight axis through the aperture center, aligned to the entry sightline.
    // Shear leaves the traced front cross-section flush against the artwork.
    const world=portal.position.clone().add(apertureCenter),dz=world.z-camera.position.z;
    const sx=(world.x-camera.position.x)/dz,sy=(world.y-camera.position.y)/dz;
    tunnel.matrix.set(1,0,sx,apertureCenter.x,0,1,sy,apertureCenter.y,0,0,1,.014,0,0,0,1);
    tunnel.matrixWorldNeedsUpdate=true;
  }
  // Raised promenade edges make every row converge to one water-level horizon.
  const bankMaterial=new THREE.MeshStandardMaterial({color:0x185d70,metalness:.3,roughness:.45});
  const bankGrid=new THREE.LineBasicMaterial({color:0xff60d6,transparent:true,opacity:.65,toneMapped:false});
  for(const side of [-1,1]) {
    const bank=new THREE.Mesh(new THREE.BoxGeometry(4,.22,40),bankMaterial);
    bank.position.set(side*2.8,waterLevel+.03,15);assembly.add(bank);
    const lines=[];
    for(let z=-5;z<=35;z+=.5)lines.push(new THREE.Vector3(side*.8,waterLevel+.143,z),new THREE.Vector3(side*4.8,waterLevel+.143,z));
    for(let x=.8;x<=4.8;x+=.5)lines.push(new THREE.Vector3(side*x,waterLevel+.143,-5),new THREE.Vector3(side*x,waterLevel+.143,35));
    assembly.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(lines),bankGrid));
    // Pool wall: solid inner face, tiled grid, and a continuous illuminated coping.
    const wall=new THREE.Mesh(new THREE.BoxGeometry(.12,.22,40),new THREE.MeshStandardMaterial({color:0x24162d,metalness:.45,roughness:.3}));
    wall.name='POOL_WALL_'+side;wall.position.set(side*.76,waterLevel+.05,15);assembly.add(wall);
    const faceX=side*.699,faceLines=[];
    for(let y=-.05;y<=.161;y+=.05)faceLines.push(new THREE.Vector3(faceX,waterLevel+y,-5),new THREE.Vector3(faceX,waterLevel+y,35));
    for(let z=-5;z<=35;z+=.25)faceLines.push(new THREE.Vector3(faceX,waterLevel-.06,z),new THREE.Vector3(faceX,waterLevel+.16,z));
    const tiles=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(faceLines),new THREE.LineBasicMaterial({color:0xff56c7,toneMapped:false}));
    tiles.name='POOL_WALL_TILE_GRID_'+side;assembly.add(tiles);
    const cap=new THREE.Mesh(new THREE.BoxGeometry(.145,.014,40),new THREE.MeshStandardMaterial({color:0xffb0e2,emissive:0xff309d,emissiveIntensity:1.8,metalness:.35,roughness:.25}));
    cap.name='POOL_WALL_COPING_'+side;cap.position.set(side*.76,waterLevel+.167,15);assembly.add(cap);

  }
  // The camera views the -Z side. Flip the plate horizontally so lettering reads.
  const loader = new THREE.TextureLoader();
  loader.load('assets/images/heart-direction-rebuild/exterior/portal-v002-cutout.png',texture=>{
    texture.colorSpace=THREE.SRGBColorSpace;
    const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.025,side:THREE.DoubleSide,depthWrite:false,toneMapped:false});
    const plate=new THREE.Mesh(new THREE.PlaneGeometry(settings.portalSize,settings.portalSize),material);
    plate.rotation.y=Math.PI;plate.position.z=-.005;plate.renderOrder=2;portal.add(plate);
    window.dispatchEvent(new Event('exterior-asset-ready'));
  },undefined,()=>{
    document.querySelector('#exterior-assets-status').textContent='Portal preview unavailable';
  });
  const status=document.querySelector('#exterior-assets-status');
  const canvas=document.querySelector('#ship-view');
  status.textContent='Loading scenery…';
  const modelLoader=new GLTFLoader();
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
  }
  const models=[
    ['palm','neon-palm-v001.glb',model=>{
      settings.palmRows.forEach(([x,z,height],row)=>{
        for(const side of [-1,1])place(model,`TRIPO_PALM_${row}_${side}`,1,height,[side*x,waterLevel+.14,z],side*.12);
      });
    }],
    ['mountain','neon-mountain-ridge-tile-v002.glb',model=>{
      // Continuous overlapping strips, not isolated islands. Bury the source's
      // rectangular plinth below the bank so only the mountain contours show.
      model.updateMatrixWorld(true);
      const bounds=new THREE.Box3().setFromObject(model);
      const size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
      const baseScale=4/size.x,step=size.z*baseScale*.48;
      const firstZ=-4,lastZ=34,count=Math.ceil((lastZ-firstZ)/step)+1;
      if(!Number.isFinite(step)||step<=0)throw new Error('Invalid mountain ridge depth');
      const sources=[];model.traverse(node=>{if(node.isMesh)sources.push(node);});
      // Stable, different layouts on each bank; no random changes on reload.
      const noise=(i,side,salt)=>{
        const n=Math.sin(i*127.1+side*311.7+salt*74.7)*43758.5453;
        return n-Math.floor(n);
      };
      for(const side of [-1,1]) {
        const ridge=new THREE.Group();ridge.name='CONTINUOUS_MOUNTAIN_BANK_'+side;
        const transforms=Array.from({length:count},(_,i)=>{
          const scale=baseScale*(.80+noise(i,side,1)*.42);
          const yaw=(noise(i,side,2)-.5)*.9+(noise(i,side,3)>.5?Math.PI:0);
          const rotation=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),yaw);
          const rotated=bounds.clone().translate(center.clone().negate())
            .applyMatrix4(new THREE.Matrix4().makeRotationY(yaw));
          // Tuck the irregular mountain feet under the palm line and coping.
          // Bounding-box edges alone left a visible empty promenade strip.
          const x=side*(.76+rotated.getSize(new THREE.Vector3()).x*scale*.40+noise(i,side,4)*.04);
          const position=new THREE.Vector3(x,waterLevel-.01-bounds.min.y*scale,
            firstZ+i*step+(noise(i,side,5)-.5)*step*.16);
          return new THREE.Matrix4().compose(position,rotation,new THREE.Vector3(scale,scale,scale))
            .multiply(new THREE.Matrix4().makeTranslation(-center.x,0,-center.z));
        });
        for(const source of sources){
          // Clip the overlapping feet at the outside of the pool wall so the
          // ridge meets the palms without spilling into the water channel.
          const edgePlane=new THREE.Plane(new THREE.Vector3(side,0,0),-.82);
          const trim=material=>{const copy=material.clone();copy.clippingPlanes=[edgePlane];return copy;};
          const material=Array.isArray(source.material)?source.material.map(trim):trim(source.material);
          const instances=new THREE.InstancedMesh(source.geometry,material,count);
          for(let i=0;i<count;i++){
            instances.setMatrixAt(i,transforms[i].clone().multiply(source.matrixWorld));
          }
          instances.instanceMatrix.needsUpdate=true;instances.computeBoundingSphere();ridge.add(instances);
        }
        assembly.add(ridge);
      }
      canvas.dataset.mountainLayout='continuous-banks';
    }],
    ['cherub','silver-cherub-v001.glb',model=>{
      // Camera faces +Z, so negative world X is the right side of the screen.
      for(const side of [-1,1])place(model,`TRIPO_CHERUB_${side}`,0,.68,[side*.70,settings.portalY+.40,settings.portalZ-.04],Math.PI+side*.2,side===-1);
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
