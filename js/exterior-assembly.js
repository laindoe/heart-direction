import { createRollingHills } from './rolling-hills.js?v=hill-continuous-11';
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
  // Extra foreground and intermediate rows fill the wide desktop promenade.
  // Keep the approved portrait arrangement unchanged, including after resize.
  const desktopPalms=new THREE.Group();desktopPalms.name='DESKTOP_PALM_ROWS';
  desktopPalms.visible=false;assembly.add(desktopPalms);
  const portal = new THREE.Group(); portal.name = 'PORTAL_V002_PLATE';
  portal.position.set(0,settings.portalY,settings.portalZ);assembly.add(portal);
  // Match the actual alpha aperture instead of approximating it with a generic heart.
  const apertureCenter=new THREE.Vector3(...portalAperture.center.map(v=>v*settings.portalSize),0);
  const outline=portalAperture.points.map(([x,y])=>new THREE.Vector2(x*settings.portalSize,y*settings.portalSize));
  const heart=new THREE.Shape(outline);
  const seal=new THREE.Shape(outline.map(v=>v.clone().multiplyScalar(1.075)));
  seal.holes.push(new THREE.Path(outline.map(v=>v.clone().multiplyScalar(.985)).reverse()));
  const backing=new THREE.Mesh(new THREE.ShapeGeometry(seal),new THREE.MeshBasicMaterial({color:0x07030e,side:THREE.DoubleSide}));
  backing.scale.setScalar(1);backing.position.copy(apertureCenter);backing.position.z=.013;
  portal.add(backing);
  const tunnel=new THREE.Group();tunnel.name='APERTURE_MATCHED_DEPTH_TUNNEL';
  tunnel.matrixAutoUpdate=false;portal.add(tunnel);
  const depth=44,segments=16,wallPositions=[],wallColors=[];
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
  const floorY=-settings.portalSize*.185;
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
    const rib=new THREE.Group();rib.name='DEPTH_TUNNEL_RIB_'+i;rib.position.z=.025+i*1.3;
    rib.add(new THREE.Mesh(coreGeometry,coreMaterial),new THREE.Mesh(glowGeometry,glowMaterial));
    tunnel.add(rib);
  }
  // A single unbroken water surface replaces the stair-like transverse deck lines.
  // Its front triangle follows the pointed opening without changing the source plate.
  const entranceY=Math.min(...outline.map(p=>p.y))+.006;
  const deckVertices=[-floorHalfWidth,floorY,0,floorHalfWidth,floorY,0,-floorHalfWidth,floorY,depth,
    floorHalfWidth,floorY,0,floorHalfWidth,floorY,depth,-floorHalfWidth,floorY,depth,
    -.008,entranceY,.018,-floorHalfWidth,floorY,.018,floorHalfWidth,floorY,.018];
  const deckGeometry=new THREE.BufferGeometry();deckGeometry.setAttribute('position',new THREE.Float32BufferAttribute(deckVertices,3));
  const waterMaterial=new THREE.ShaderMaterial({side:THREE.DoubleSide,
    uniforms:{halfWidth:{value:floorHalfWidth}},
    vertexShader:`varying vec3 surface; void main(){surface=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec3 surface; uniform float halfWidth;
      void main(){float x=surface.x/halfWidth;float z=surface.z;
        float ripple=sin(z*118.+sin(x*47.)*2.7)+sin(z*233.-x*63.);
        float center=exp(-abs(x)*7.);
        float edges=pow(abs(x),10.);
        float broken=pow(max(0.,sin(z*89.+sin(x*37.)*3.)),9.);
        vec3 water=mix(vec3(.006,.065,.085),vec3(.018,.25,.29),.5+.18*ripple);
        vec3 reflection=vec3(1.,.04,.39)*(center*.8+edges*.48)*(.25+broken*.9);
        gl_FragColor=vec4(water+reflection,1.);}`
  });
  const floor=new THREE.Mesh(deckGeometry,waterMaterial);floor.name='CONTINUOUS_TUNNEL_WATER';tunnel.add(floor);
  const guides=[];
  for(const side of [-1,1])guides.push(new THREE.Vector3(side*floorHalfWidth,floorY+.002,0),new THREE.Vector3(side*floorHalfWidth,floorY+.002,depth));
  tunnel.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(guides),new THREE.LineBasicMaterial({color:0xff459e,transparent:true,opacity:.65,toneMapped:false})));
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
    // Straight axis through the aperture center, aligned to the entry sightline.
    // Shear leaves the traced front cross-section flush against the artwork.
    const world=portal.position.clone().add(apertureCenter);
    // Aim down the passage toward the water horizon, as in the supplied reference.
    world.y+=floorY+.18;
    const dz=world.z-camera.position.z;
    const sx=(world.x-camera.position.x)/dz,sy=(world.y-camera.position.y)/dz;
    tunnel.matrix.set(1,0,sx,apertureCenter.x,0,1,sy,apertureCenter.y,0,0,1,.014,0,0,0,1);
    tunnel.matrixWorldNeedsUpdate=true;
  }
  // Raised promenade edges make every row converge to one water-level horizon.
  const bankMaterial=new THREE.MeshStandardMaterial({color:0x185d70,metalness:.3,roughness:.45});
  for(const side of [-1,1]) {
    const bank=new THREE.Mesh(new THREE.BoxGeometry(4,.22,40),bankMaterial);
    bank.position.set(side*2.8,waterLevel+.03,15);assembly.add(bank);
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
  createRollingHills(assembly,waterLevel,settings.palmRows[0][2]);
  canvas.dataset.hillStyle='solid-rounded-continuous';
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
    return copy;
  }
  const models=[
    ['palm','neon-palm-v001.glb',model=>{
      settings.palmRows.forEach(([x,z,height],row)=>{
        for(const side of [-1,1])place(model,`TRIPO_PALM_${row}_${side}`,1,height,[side*x,waterLevel+.14,z],side*.12);
      });
      const extraRows=[-1.5,-.8,-.1,2.8,3.8,6,8.5,12,16,22,29,34];
      extraRows.forEach((z,row)=>{
        for(const side of [-1,1])desktopPalms.add(place(model,`DESKTOP_PALM_${row}_${side}`,1,1.12,[side*.86,waterLevel+.14,z],side*.12));
      });
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
