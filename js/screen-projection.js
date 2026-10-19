// Map a rectangular HTML display into a projected 3D quadrilateral.
export function screenTransform(points, width, height) {
  const source = [[0,0],[width,0],[width,height],[0,height]];
  const rows = [];
  for (let i=0;i<4;i++) {
    const [x,y]=source[i], {x:u,y:v}=points[i];
    rows.push([x,y,1,0,0,0,-u*x,-u*y,u]);
    rows.push([0,0,0,x,y,1,-v*x,-v*y,v]);
  }
  for(let i=0;i<8;i++) {
    let pivot=i;
    for(let j=i+1;j<8;j++) if(Math.abs(rows[j][i])>Math.abs(rows[pivot][i])) pivot=j;
    [rows[i],rows[pivot]]=[rows[pivot],rows[i]];
    const divisor=rows[i][i];
    if(Math.abs(divisor)<1e-10) throw new Error('Degenerate dashboard screen projection');
    for(let k=i;k<9;k++) rows[i][k]/=divisor;
    for(let j=0;j<8;j++) if(j!==i){const factor=rows[j][i];for(let k=i;k<9;k++)rows[j][k]-=factor*rows[i][k];}
  }
  const [a,b,c,d,e,f,g,h]=rows.map(row=>row[8]);
  return `matrix3d(${[a,d,0,g,b,e,0,h,0,0,1,0,c,f,0,1].join(',')})`;
}
