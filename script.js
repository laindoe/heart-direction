// Marks each <section> as "in-view" while it's visible in the viewport.
// New sections just need to be added to the DOM (id="section-N") to pick this up.
const sections = document.querySelectorAll('#scrolly section');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    }
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

// Section-1 -> section-2 scroll-pinned reveal: a heart-shaped hole in
// section-1 (see #heart-reveal-mask in index.html) grows via --reveal-scale
// as the user scrolls through .tunnel-transition, exposing section-2 (sitting
// behind at a lower z-index) through it. The mask's <path> lives outside
// .tunnel-transition in the DOM (it's shared markup near the top of <body>),
// so the custom property is set on <html> — a common ancestor of both — to
// actually reach it via inheritance, rather than on .tunnel-transition itself.
const tunnelTransition = document.querySelector('.tunnel-transition');

if (tunnelTransition) {
  const REVEAL_FRACTION = 0.5; // the hole grows over the first half of the pinned scroll range
  const MAX_SCALE = 60; // large enough for the hole to cover the canvas from its off-center origin

  const updateTunnelReveal = () => {
    const extraScrollable = tunnelTransition.offsetHeight - window.innerHeight;
    if (extraScrollable <= 0) return;

    const scrolledIntoWrapper = -tunnelTransition.getBoundingClientRect().top;
    const fraction = Math.min(1, Math.max(0, scrolledIntoWrapper / extraScrollable));
    const revealProgress = Math.min(1, fraction / REVEAL_FRACTION);
    const scale = 1 + revealProgress * (MAX_SCALE - 1);

    document.documentElement.style.setProperty('--reveal-scale', scale);
  };

  window.addEventListener('scroll', updateTunnelReveal, { passive: true });
  window.addEventListener('resize', updateTunnelReveal);
  updateTunnelReveal();
}

// "Enter the tunnel" smooth-scrolls through the whole reveal transition,
// landing on section-2 once it's fully revealed.
document.querySelector('.hd2-marquee-btn')?.addEventListener('click', () => {
  if (!tunnelTransition) return;
  const targetY = tunnelTransition.offsetTop + tunnelTransition.offsetHeight - window.innerHeight;
  window.scrollTo({ top: targetY, behavior: 'smooth' });
});
