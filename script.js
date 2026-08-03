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

// Section-1 -> section-2 "camera through a doorway": section-1 (the
// foreground, see .tunnel-layer-front in styles.css) scales up from 1x,
// pivoting on the tunnel's real transparent opening, so it carries its own
// artwork out past the viewport edges while section-2 (the plain, static
// back layer) sits fully still underneath, gradually exposed through that
// one real opening as the foreground grows past it.
const tunnelTransition = document.querySelector('.tunnel-transition');

if (tunnelTransition) {
  const SCALE_FRACTION = 0.5; // the foreground scales up over the first half of the pinned scroll range
  // The tunnel's own opening is only a few px wide at rest, so reaching a
  // scale where it covers the whole screen takes a large factor. Computed
  // from the viewport's diagonal (not hardcoded) so it holds up at any
  // screen size; OPENING_RADIUS_PX is a rough estimate of the opening's
  // rendered radius at 1x — tune this (or the pacing below) once you've
  // seen the effect in motion.
  const OPENING_RADIUS_PX = 14;

  const updateTunnelScale = () => {
    const extraScrollable = tunnelTransition.offsetHeight - window.innerHeight;
    if (extraScrollable <= 0) return;

    const scrolledIntoWrapper = -tunnelTransition.getBoundingClientRect().top;
    const fraction = Math.min(1, Math.max(0, scrolledIntoWrapper / extraScrollable));
    const progress = Math.min(1, fraction / SCALE_FRACTION);

    const viewportDiagonal = Math.hypot(window.innerWidth, window.innerHeight);
    const maxScale = (viewportDiagonal * 1.1) / OPENING_RADIUS_PX;
    const scale = 1 + progress * (maxScale - 1);

    tunnelTransition.style.setProperty('--tunnel-scale', scale);
  };

  window.addEventListener('scroll', updateTunnelScale, { passive: true });
  window.addEventListener('resize', updateTunnelScale);
  updateTunnelScale();
}

// "Enter the tunnel" smooth-scrolls through the whole reveal transition,
// landing on section-2 once it's fully revealed.
document.querySelector('.hd2-marquee-btn')?.addEventListener('click', () => {
  if (!tunnelTransition) return;
  const targetY = tunnelTransition.offsetTop + tunnelTransition.offsetHeight - window.innerHeight;
  window.scrollTo({ top: targetY, behavior: 'smooth' });
});
