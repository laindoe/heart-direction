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

// Section-1 -> section-2 scroll-pinned reveal: section-2 (the front layer,
// see .tunnel-layer-front's clip-path in styles.css) is clipped to a growing
// circle as the user scrolls through .tunnel-transition, so it progressively
// covers more of section-1 (the plain, un-clipped back layer) underneath.
const tunnelTransition = document.querySelector('.tunnel-transition');

if (tunnelTransition) {
  const REVEAL_FRACTION = 0.5; // the circle grows over the first half of the pinned scroll range
  const MIN_RADIUS = 8; // px, roughly matches the tunnel graphic's own tiny opening

  const updateTunnelReveal = () => {
    const extraScrollable = tunnelTransition.offsetHeight - window.innerHeight;
    if (extraScrollable <= 0) return;

    const scrolledIntoWrapper = -tunnelTransition.getBoundingClientRect().top;
    const fraction = Math.min(1, Math.max(0, scrolledIntoWrapper / extraScrollable));
    const revealProgress = Math.min(1, fraction / REVEAL_FRACTION);
    // A bit more than the viewport's own diagonal guarantees full coverage
    // regardless of screen size, however off-center the circle's origin is.
    const maxRadius = Math.hypot(window.innerWidth, window.innerHeight) * 1.05;
    const radius = MIN_RADIUS + revealProgress * (maxRadius - MIN_RADIUS);

    tunnelTransition.style.setProperty('--reveal-radius', `${radius}px`);
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
