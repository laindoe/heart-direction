import { launchConfig } from './js/launch-config.js';
const $ = selector => document.querySelector(selector);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let state = 'exterior', model = null, modelReady = false;

function setState(value) {
  state = value;
  document.body.dataset.state = value;
  $('#state-label').textContent = value.toUpperCase();
}
function animate(duration, step) {
  return new Promise(resolve => {
    const start = performance.now();
    function tick(now) {
      const p = reduced.matches ? 1 : Math.min(1, (now - start) / duration);
      step(p * p * (3 - 2 * p));
      if (p < 1) requestAnimationFrame(tick); else resolve();
    }
    requestAnimationFrame(tick);
  });
}
$('#board-ship').addEventListener('click',()=>{if(state==='exterior')$('#get-in').click();});
$('#get-in').addEventListener('click', async () => {
  if (state !== 'exterior') return;
  setState('boarding');
  $('#board-ship').disabled=true;
  $('#get-in').disabled = true;
  $('#load-status').textContent = 'Boarding…';
  await animate(2600, p => {
    model?.frame(p);
    if (!model) {
      $('#ship-fallback').style.transform = `translateY(${-80 * p}px) scale(${1 + p})`;
      $('#ship-fallback').style.opacity = String(1 - p);
    }
  });
  $('#exterior').hidden = true;
  $('#dashboard').hidden = false;
  model?.dashboard();
  setState('dashboard');
  $('#dashboard-title').focus();
});
$('#heart-home').addEventListener('click', () => {
  if (state !== 'dashboard') return;
  welcome();
  $('#dashboard').hidden = true;
  $('#exterior').hidden = false;
  $('#get-in').disabled = false;
  $('#board-ship').disabled=false;
  $('#ship-fallback').style.cssText = '';
  $('#load-status').textContent = modelReady ? 'Ready to board' : '3D unavailable · dashboard available';
  setState('exterior');
  model?.reset();
  $('#get-in').focus();
});
function paragraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  return p;
}
function secureUrl(value) {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
  catch { return null; }
}
function buildPanel(name) {
  const body = $('#screen-content');
  body.replaceChildren();
  if (name === 'Saturn' || name === 'Moon') {
    body.append(paragraph('Coming soon'));
  } else if (name === 'Store') {
    const product = launchConfig.product;
    const imageUrl = secureUrl(product.imageUrl);
    if (imageUrl) {
      const image = document.createElement('img');
      image.src = imageUrl; image.alt = product.name || 'Digital download preview';
      image.className = 'product-preview'; body.append(image);
    }
    body.append(paragraph(product.name || 'Digital download — coming soon'));
    if (product.description) body.append(paragraph(product.description));
    if (product.price) body.append(paragraph(product.price));
    const checkout = secureUrl(product.checkoutUrl);
    if (checkout && product.name && product.price) {
      const link = document.createElement('a');
      link.href = checkout; link.textContent = 'BUY NOW'; link.className = 'purchase-link';
      link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Buy ' + product.name + ' (opens checkout in a new tab)');
      body.append(link);
    }
  } else if (name === 'Socials') {
    const list = document.createElement('ul');
    for (const [platform, value] of Object.entries(launchConfig.socials)) {
      const item = document.createElement('li');
      const url = secureUrl(value);
      if (url) {
        const link = document.createElement('a');
        link.href = url; link.textContent = platform; link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', platform + ' (opens in a new tab)');
        item.append(link);
      } else item.textContent = platform + ' — coming soon';
      list.append(item);
    }
    body.append(list);
  }
}
function showDestination(name) {
  $('#dashboard-title').textContent = name.toUpperCase();
  buildPanel(name);
  document.querySelectorAll('[data-content]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.content === name));
  });
  $('#dashboard-screen').scrollTop = 0;
  $('#screen-announcement').textContent = name + (name === 'Saturn' || name === 'Moon' ? ' — Coming soon' : ' selected');
}
function welcome() {
  $('#dashboard-title').textContent = 'WELCOME TO HEART DIRECTION';
  $('#screen-content').replaceChildren(paragraph('Journey through Lain Doe Love’s heart, mind, and body of work.'));
  document.querySelectorAll('[data-content]').forEach(button => button.setAttribute('aria-pressed', 'false'));
  $('#dashboard-screen').scrollTop = 0;
  $('#screen-announcement').textContent = '';
}
document.querySelectorAll('[data-content]').forEach(button => {
  button.addEventListener('click', () => {
    if (state === 'dashboard') showDestination(button.dataset.content);
  });
});
// All semantic controls work even if the prototype model cannot load.
const timeout = setTimeout(() => {
  if (state === 'exterior') $('#load-status').textContent = 'Spaceship still loading · GET IN remains available';
}, 10000);
import('./js/graybox-ship.js?v=tunnel-distant-glow-26').then(module => module.createShip()).then(ship => {
  clearTimeout(timeout); model = ship; modelReady = true;
  if (state === 'dashboard') { model.frame(1); model.dashboard(); }
  else if (state === 'exterior') $('#load-status').textContent = 'Ready to board';
}).catch(error => {
  clearTimeout(timeout); console.warn('Graybox 3D fallback:', error);
  $('#ship-fallback').hidden = false;
  if (state === 'exterior') $('#load-status').textContent = '3D unavailable · dashboard available';
});
