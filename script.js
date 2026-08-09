import { createAmbientController } from './js/ambient.js';
import { initModals } from './js/modals.js';
import { initScrollAnimations } from './js/scroll.js';

// This file intentionally contains orchestration only. Narrative choreography
// belongs to scene modules; time-based loops belong to the ambient controller.
const ambient = createAmbientController();
let scroll = null;
const modals = initModals({
  onOpen: () => {
    ambient.pause();
    scroll?.pause();
  },
  onClose: () => {
    scroll?.resume();
    ambient.resume();
  },
});

if (window.gsap && window.ScrollTrigger) {
  scroll = initScrollAnimations({
    gsap: window.gsap,
    ScrollTrigger: window.ScrollTrigger,
  });
} else {
  console.error('Heart Direction: GSAP or ScrollTrigger failed to load.');
}

// Exposed as one lifecycle handle for local debugging and future page teardown.
window.heartDirection = {
  ambient,
  modals,
  scroll,
  destroy() {
    modals.destroy();
    ambient.destroy();
    scroll?.destroy();
  },
};
