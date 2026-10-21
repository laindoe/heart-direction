"""Local-only failure/slow-load/reduced-motion harness. No production code flags."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlsplit, parse_qs
from pathlib import Path
import time
class Handler(SimpleHTTPRequestHandler):
 def do_GET(self):
  mode=parse_qs(urlsplit(self.headers.get('Referer','')).query).get('test',[''])[0]
  if '/portal/heart-direction-portal' in self.path:
   if mode=='failed':self.send_error(503,'Deliberate portal failure');return
   if mode=='slow':time.sleep(12)
  parsed=urlsplit(self.path)
  if parsed.path=='/' and parse_qs(parsed.query).get('test')==['reduced']:
   body=Path('index.html').read_text().replace('<head>', '''<head><script>
   const originalMatchMedia=window.matchMedia.bind(window);
   window.matchMedia=q=>q.includes('prefers-reduced-motion')?{matches:true,media:q,addEventListener(){},removeEventListener(){}}:originalMatchMedia(q);
   </script>''').encode()
   self.send_response(200);self.send_header('Content-Type','text/html');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body);return
  return super().do_GET()
ThreadingHTTPServer(('127.0.0.1',8001),Handler).serve_forever()
