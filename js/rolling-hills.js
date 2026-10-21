import * as THREE from './vendor/three.module.js';

// Joined terrain fills the saddles between firmer crests. Source GLBs are untouched.
export function createRollingHills(parent, waterLevel, palmHeight = 1.12, far = 76) {
  const material=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.78,metalness:0});
  const bankY=waterLevel+.174,lightDirection=new THREE.Vector3(2,4,-3).normalize();
  const heights=[.72,.22,.44,.16,.75,.31,.55,.20,.38];
  const lanes=[{x:1.62,radius:.76},{x:3.05,radius:1.05},{x:5.25,radius:1.5},{x:9,radius:2.5},{x:17,radius:5.5}];
  const baseAcross=144,inner=.8325,outer=24,near=-9;
  const baseAlong=Math.max(1,Math.ceil((far-near)*384/85));
  for(const side of [-1,1]) {
    const hills=[];
    lanes.forEach((lane,column)=>{
      for(let row=0;row<30;row++){
        const phase=row*2.17+column*3.31+side*1.43;
        const ratio=Math.min(.75,heights[(row+column*2+(side===1?3:0))%heights.length]+.025*Math.sin(phase*1.31));
        const yaw=.3*Math.sin(phase);
        hills.push({x:lane.x+.12*Math.sin(phase),z:-10+row*3+.55*Math.cos(phase*.83)+column*.55,
          height:palmHeight*ratio*(column>2?.75:1),rx:lane.radius*(.9+.2*ratio/.75),
          rz:1.12+.38*ratio/.75,cos:Math.cos(yaw),sin:Math.sin(yaw)});
      }
    });
    // Include each in-bounds crest explicitly: a uniform grid can bridge over
    // an unsampled summit and leave a short, visibly flattened silhouette.
    const visibleCrests=hills.filter(hill=>hill.x>inner && hill.x<outer && hill.z>near && hill.z<far);
    const xs=[...new Set([
      ...Array.from({length:baseAcross+1},(_,i)=>THREE.MathUtils.lerp(inner,outer,i/baseAcross)),
      ...visibleCrests.map(hill=>hill.x),
    ])].sort((a,b)=>a-b);
    const zs=[...new Set([
      ...Array.from({length:baseAlong+1},(_,i)=>THREE.MathUtils.lerp(near,far,i/baseAlong)),
      ...visibleCrests.map(hill=>hill.z),
    ])].sort((a,b)=>a-b);
    const across=xs.length-1,along=zs.length-1;
    const positions=[],colors=[],indices=[];
    const low=new THREE.Color(0x066b76),high=new THREE.Color(0x36aaa5);
    for(let row=0;row<=along;row++)for(let column=0;column<=across;column++){
      const x=xs[column],z=zs[row];
      let crest=0;
      for(const hill of hills){
        const dx=x-hill.x,dz=z-hill.z;
        const u=(dx*hill.cos+dz*hill.sin)/hill.rx,v=(-dx*hill.sin+dz*hill.cos)/hill.rz;
        const radiusSquared=u*u+v*v;
        // A firmer crown than the previous dome, with long overlapping shoulders.
        if(radiusSquared<20)crest=Math.max(crest,hill.height*Math.exp(-1.55*Math.pow(radiusSquared,.72)));
      }
      // Rolling relief replaces all exposed flat ground, including beside the coping.
      const saddle=palmHeight*(.045+.028*(.5+.5*Math.sin(x*2.7+Math.sin(z*.8))*Math.cos(z*1.1)));
      const toe=1-Math.exp(-Math.pow((x-inner)/.35,2));
      const endProgress=THREE.MathUtils.clamp((far-z)/1.8,0,1);
      const endFade=endProgress*endProgress*(3-2*endProgress);
      const height=(saddle+(palmHeight*.75-saddle)*Math.pow(crest/(palmHeight*.75),1.08))*toe*endFade;
      positions.push(side*x,bankY+height,z);
      const tint=low.clone().lerp(high,height/(palmHeight*.75));colors.push(tint.r,tint.g,tint.b);
      if(row<along && column<across){
        const a=row*(across+1)+column,b=a+1,c=a+across+1,d=c+1;
        if(side===1)indices.push(a,c,b,b,c,d);else indices.push(a,b,c,b,d,c);
      }
    }
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
    geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    geometry.setIndex(indices);geometry.computeVertexNormals();
    const normals=geometry.getAttribute('normal'),color=geometry.getAttribute('color');
    for(let i=0;i<normals.count;i++){
      const normal=new THREE.Vector3().fromBufferAttribute(normals,i);
      const shade=.32+.68*Math.max(0,normal.dot(lightDirection));
      color.setXYZ(i,color.getX(i)*shade,color.getY(i)*shade,color.getZ(i)*shade);
    }
    const bank=new THREE.Mesh(geometry,material);bank.name='CONTINUOUS_SCULPTED_HILLS_'+side;parent.add(bank);
    // Close the raised terrain edge behind the coping rather than leaving an open lip.
    const edge=[];
    for(let row=0;row<along;row++){
      const a=row*(across+1)*3,b=(row+1)*(across+1)*3;
      const topA=[positions[a],positions[a+1],positions[a+2]],topB=[positions[b],positions[b+1],positions[b+2]];
      const bottomA=[positions[a],waterLevel+.02,positions[a+2]],bottomB=[positions[b],waterLevel+.02,positions[b+2]];
      edge.push(...topA,...bottomA,...topB,...topB,...bottomA,...bottomB);
    }
    // Seal the rear shoreline where the mountains stop outside the tunnel.
    for(let column=0;column<across;column++){
      const a=(along*(across+1)+column)*3,b=a+3;
      const topA=positions.slice(a,a+3),topB=positions.slice(b,b+3);
      const bottomA=[positions[a],waterLevel+.02,positions[a+2]],bottomB=[positions[b],waterLevel+.02,positions[b+2]];
      edge.push(...topA,...topB,...bottomA,...topB,...bottomB,...bottomA);
    }
    const seamGeometry=new THREE.BufferGeometry();seamGeometry.setAttribute('position',new THREE.Float32BufferAttribute(edge,3));seamGeometry.computeVertexNormals();
    const seam=new THREE.Mesh(seamGeometry,new THREE.MeshStandardMaterial({color:0x066b76,roughness:.78,metalness:0,side:THREE.DoubleSide}));
    seam.name='HILL_BANK_SEALED_EDGE_'+side;parent.add(seam);
  }
}
