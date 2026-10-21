"""Trace the actual orthographic mesh opening; no source artwork edits."""
import json
from PIL import Image, ImageDraw
from collections import deque
rows=json.load(open('/tmp/portal-projected.json'))
points=[v for r in rows for v in r['v']]
xlo=min(v[0] for v in points);xhi=max(v[0] for v in points)
ylo=min(v[1] for v in points);yhi=max(v[1] for v in points)
h=yhi-ylo; cx=(xlo+xhi)/2;cy=(ylo+yhi)/2
N=1400
# x flipped to match model's runtime pi yaw. y-down image.
def pixel(v):return (round(N/2+(-v[0]+cx)/h*1200),round(N/2-(v[1]-cy)/h*1200))
im=Image.new('L',(N,N),0);draw=ImageDraw.Draw(im)
for r in rows:
 v=[pixel(p) for p in r['v']];ix=r['indices']
 for i in range(0,len(ix),3):draw.polygon([v[ix[i]],v[ix[i+1]],v[ix[i+2]]],fill=255)
ImageDraw.floodfill(im,(0,0),128)
# Find largest enclosed transparent component.
p=im.load();seen=set();best=[]
for y in range(N):
 for x in range(N):
  if p[x,y]!=0 or (x,y) in seen:continue
  q=deque([(x,y)]);seen.add((x,y));component=[]
  while q:
   a,b=q.popleft();component.append((a,b))
   for c,d in ((a+1,b),(a-1,b),(a,b+1),(a,b-1)):
    if 0<=c<N and 0<=d<N and p[c,d]==0 and (c,d) not in seen:seen.add((c,d));q.append((c,d))
  if len(component)>len(best):best=component
# Follow pixel boundary, preserving the heart notch instead of scanline filling it.
inside=set(best);edges={}
for x,y in best:
 if (x,y-1) not in inside:edges[(x,y)]=(x+1,y)
 if (x+1,y) not in inside:edges[(x+1,y)]=(x+1,y+1)
 if (x,y+1) not in inside:edges[(x+1,y+1)]=(x,y+1)
 if (x-1,y) not in inside:edges[(x,y+1)]=(x,y)
loops=[]
while edges:
 start=next(iter(edges));current=start;loop=[]
 while current in edges:
  loop.append(current);current=edges.pop(current)
  if current==start:break
 loops.append(loop)
outline=max(loops,key=len)
# Start at right shoulder, matching the existing passage's arch ordering.
k=max(range(len(outline)),key=lambda i:outline[i][0])
outline=outline[k:]+outline[:k]
def simplify(pts,tol):
 if len(pts)<3:return pts
 a,b=pts[0],pts[-1];dx=b[0]-a[0];dy=b[1]-a[1];den=(dx*dx+dy*dy)**.5
 dist=[abs(dy*(x-a[0])-dx*(y-a[1]))/(den or 1) for x,y in pts]
 k=max(range(len(dist)),key=dist.__getitem__)
 if dist[k]<=tol:return [a,b]
 return simplify(pts[:k+1],tol)[:-1]+simplify(pts[k:],tol)
mid=len(outline)//2
poly=list(reversed(simplify(outline[:mid],1.2)+simplify(outline[mid:],1.2)))
coords=[((x-N/2)/1200*.9,(N/2-y)/1200*.9) for x,y in poly]
center=[(min(p[i] for p in coords)+max(p[i] for p in coords))/2 for i in range(2)]
result={'center':[round(v,7) for v in center],'points':[[round(x-center[0],7),round(y-center[1],7)] for x,y in coords]}
open('js/portal-v003-aperture.js','w').write('// Orthographic opening traced from balanced v003 GLB. Runtime whole-model height .90 × portalSize.\nexport const portalV003Aperture = '+json.dumps(result,separators=(',',':'))+';\n')
print('Aperture pixels',len(best),'vertices',len(poly),'center',center)
