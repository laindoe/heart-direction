import * as THREE from './vendor/three.module.js';
import { createExteriorAssembly } from './exterior-assembly.js?v=hill-continuous-11';
import { screenTransform } from './screen-projection.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';

export async function createShip() {
 const canvas = document.querySelector('#ship-view');
 const renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
 renderer.localClippingEnabled = true;
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(43,1,.005,80);
 const light = new THREE.DirectionalLight(0xffffff,4);light.position.set(2,4,-3);
 scene.add(light,new THREE.HemisphereLight(0xf2dcff,0x827694,3));
 const gltf = await new GLTFLoader().loadAsync('assets/models/heart-direction-rebuild/spaceship-blockout-v01.glb');
 const ship = gltf.scene;ship.scale.multiplyScalar(1.04); scene.add(ship);
 // Keep the hull on a shared 3D water plane instead of floating over a CSS backdrop.
 const hull = ship.children.find(o=>o.name.startsWith('SHIP_HULL_COCKPIT_CLEARED'));
 const waterLevel = new THREE.Box3().setFromObject(hull || ship).min.y + .003;
 const water = new THREE.Mesh(
  new THREE.PlaneGeometry(40,80),
  new THREE.MeshPhysicalMaterial({color:0x31b9be,metalness:.45,roughness:.25,clearcoat:.8,side:THREE.DoubleSide})
 );
 water.rotation.x=-Math.PI/2;water.position.set(0,waterLevel,25);
 scene.add(water);
 // Simple waterline marks communicate the horizontal surface without asset refinement.
 const marks=new THREE.Group();
 for(let z=-3;z<35;z+=.4){
  const line=new THREE.Line(
   new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-.8,waterLevel+.001,z),new THREE.Vector3(.8,waterLevel+.001,z)]),
   new THREE.LineBasicMaterial({color:0xd4c5e8,transparent:true,opacity:.35})
  );
  marks.add(line);
 }
 scene.add(marks);
 const exteriorAssembly=createExteriorAssembly(scene,waterLevel);
 const canopy = ship.children.find(o=>o.name.startsWith('CANOPY_SLEEK_REFINED'));
 if(!canopy) throw new Error('Required canopy node missing');
 const origin = canopy.position.clone();
 // Keep one physical ship/camera. Screen text and controls project onto its
 // original dashboard instead of rendering a detached dashboard on a second canvas.
 const dashboardObjects=ship.children.filter(o=>/^(DASHBOARD_|BUTTON_)/.test(o.name));
 canopy.traverse(node=>{
   if(!node.isMesh)return;
   const originals=Array.isArray(node.material)?node.material:[node.material];
   const materials=originals.map(source=>{
     const material=source.clone();
     material.opacity=.36;material.transparent=true;material.depthWrite=false;
     material.transmission=0;material.thickness=.006;material.roughness=.085;
     material.ior=1.45;material.specularIntensity=1;material.clearcoat=1;
     material.clearcoatRoughness=.06;material.envMapIntensity=1.5;
     return material;
   });
   node.material=Array.isArray(node.material)?materials:materials[0];
 });
 let current=0;
 const display = dashboardObjects.find(o=>o.name.startsWith('DASHBOARD_SCREEN_SURFACE'));
 const heart = dashboardObjects.find(o=>o.name.startsWith('DASHBOARD_HEART_JEWEL'));
 const controls = ['Saturn','Moon','Store','Socials'].map(name=>({
   node:dashboardObjects.find(o=>o.name.startsWith('BUTTON_'+name.toUpperCase()+'_CAP')),
   element:document.querySelector(`[data-content="${name}"]`)
 }));
 if(!display || !heart || controls.some(item=>!item.node)) throw new Error('Dashboard artwork components missing');
 // Neutral environment reflections reveal chrome without changing source materials.
 const room = new THREE.Scene(); room.background = new THREE.Color(0xb9b7c0);
 for(const [x,y,z,sx,sy] of [[0,3,0,6,2],[-3,1,-2,2,4],[3,1,-2,2,4]]) {
   const panel=new THREE.Mesh(new THREE.PlaneGeometry(sx,sy),new THREE.MeshBasicMaterial({color:0xffffff}));
   panel.position.set(x,y,z);panel.lookAt(0,0,0);room.add(panel);
 }
 const pmrem=new THREE.PMREMGenerator(renderer);
 const reflection=pmrem.fromScene(room,.04);scene.environment=reflection.texture;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
 pmrem.dispose();
 room.traverse(obj=>{obj.geometry?.dispose();obj.material?.dispose();});
 function dashboard(){
  const rect=canvas.getBoundingClientRect();if(!rect.width || !rect.height)return;
  scene.updateMatrixWorld(true);camera.updateMatrixWorld();
  const project=point=>{const p=point.clone().project(camera);return {x:(p.x+1)*rect.width/2,y:(1-p.y)*rect.height/2};};
  const box=new THREE.Box3().setFromObject(display);
  // The flat display slopes in Y/Z. Inset from its rounded/beveled boundary.
  const x=(box.max.x-box.min.x)*.44;
  const lowY=THREE.MathUtils.lerp(box.min.y,box.max.y,.10);
  const highY=THREE.MathUtils.lerp(box.min.y,box.max.y,.90);
  const lowZ=THREE.MathUtils.lerp(box.min.z,box.max.z,.10);
  const highZ=THREE.MathUtils.lerp(box.min.z,box.max.z,.90);
  // Camera faces glTF +Z; positive world X is the left side of the screen.
  const points=[new THREE.Vector3(x,highY,highZ),new THREE.Vector3(-x,highY,highZ),
    new THREE.Vector3(-x,lowY,lowZ),new THREE.Vector3(x,lowY,lowZ)].map(project);
  const screen=document.querySelector('#dashboard-screen');
  const screenWidth=Math.hypot(points[1].x-points[0].x,points[1].y-points[0].y);
  const screenHeight=Math.hypot(points[3].x-points[0].x,points[3].y-points[0].y);
  screen.style.width=screenWidth+'px';screen.style.height=screenHeight+'px';
  screen.style.transform=screenTransform(points,screenWidth,screenHeight);
  function place(node,element){
    const bounds=new THREE.Box3().setFromObject(node);
    const position=project(bounds.getCenter(new THREE.Vector3()));
    const corners=[];for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])corners.push(project(new THREE.Vector3(x,y,z)));
    const width=Math.max(44,Math.max(...corners.map(p=>p.x))-Math.min(...corners.map(p=>p.x)));
    const height=Math.max(44,Math.max(...corners.map(p=>p.y))-Math.min(...corners.map(p=>p.y)));
    element.style.left=position.x+'px';element.style.top=position.y+'px';
    element.style.width=width+'px';element.style.height=height+'px';
  }
  controls.forEach(({node,element})=>place(node,element));
  place(heart,document.querySelector('#heart-home'));
  document.querySelector('#dashboard').classList.add('art-ready');
 }
 function frame(t){
  current=t;
  ship.visible=true;
  const w=innerWidth,h=innerHeight;renderer.setSize(w,h,false);camera.aspect=w/h;
  const interiorProgress=Math.max(0,(t-.55)/.45);
  const cockpitFov=w/h<.8?110:65;
  camera.fov=THREE.MathUtils.lerp(43,cockpitFov,interiorProgress);
  camera.clearViewOffset();
  // Shift the pilot's view upward, preserving the original ship rim and controls
  // in the lower frame while leaving the forward view open.
  camera.setViewOffset(w,h,0,-h*(w/h<.8?.22:.04)*interiorProgress,w,h);
  camera.updateProjectionMatrix();
  // Rear is glTF -Z. Center the view on the forward +Z tunnel axis.
  const exteriorDistance=Math.max(2.3,.56/(Math.tan(THREE.MathUtils.degToRad(43/2))*(w/h)));
  const exterior=new THREE.Vector3(0,.72,-exteriorDistance);
  const above=new THREE.Vector3(0,.63,-.075),inside=new THREE.Vector3(0,.29,-.12).multiplyScalar(1.04);
  const opening=Math.min(1,t/.4);
  // Blender +Z lift becomes glTF +Y; Blender rear +Y becomes glTF -Z.
  canopy.position.copy(origin).add(new THREE.Vector3(0,.20*Math.min(1,opening*2),-.32*Math.max(0,(opening-.35)/.65)));
  canopy.visible=t<.91;
  canopy.userData.state=t===0?'closed':t<.91?'opening':'open';
  if(t<.4)camera.position.copy(exterior);
  else if(t<.72)camera.position.lerpVectors(exterior,above,(t-.4)/.32);
  else camera.position.lerpVectors(above,inside,(t-.72)/.28);
  const target=new THREE.Vector3(0,.60,1.5).lerp(new THREE.Vector3(0,.24,.12).multiplyScalar(1.04),Math.max(0,(t-.55)/.45));
  camera.lookAt(target);camera.updateMatrixWorld();
  const shipTarget=document.querySelector('#board-ship');
  if(t===0){
    const bounds=new THREE.Box3().setFromObject(ship),corners=[];
    for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
      const p=new THREE.Vector3(x,y,z).project(camera);corners.push({x:(p.x+1)*w/2,y:(1-p.y)*h/2});
    }
    const left=Math.max(0,Math.min(...corners.map(p=>p.x))),top=Math.max(0,Math.min(...corners.map(p=>p.y)));
    shipTarget.style.left=left+'px';shipTarget.style.top=top+'px';
    shipTarget.style.width=Math.max(44,Math.min(w,Math.max(...corners.map(p=>p.x)))-left)+'px';
    shipTarget.style.height=Math.max(44,Math.min(h,Math.max(...corners.map(p=>p.y)))-top)+'px';
  }
  exteriorAssembly.updateView(camera);
  renderer.render(scene,camera);
  canvas.dataset.canopy=canopy.visible?(t?'opening':'closed'):'hidden';
  canvas.dataset.camera=t===1?'cockpit':t?'boarding':'exterior';
  canvas.dataset.shipVisible=String(ship.visible);
  if(t===1)dashboard();
 }
 function resize(){frame(current);}
 window.addEventListener('exterior-asset-ready',()=>frame(current));
 window.addEventListener('resize',resize);
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();document.querySelector('#ship-fallback').hidden=false;document.querySelector('#dashboard').classList.remove('art-ready');});
 document.body.classList.add('scene-ready');
 frame(0);
 return {frame,dashboard,reset(){frame(0);},get position(){return camera.position.toArray();}};
}
