const LEGACY_ZOOM_END = 0.3;
const OPENING_RADIUS = 28;

function getLegacyTunnelScale() {
  const heroScale = Math.max(window.innerWidth / 402, window.innerHeight / 871);
  const openingRadius = OPENING_RADIUS * heroScale;
  return (Math.hypot(window.innerWidth, window.innerHeight) * 1.4) / openingRadius;
}

export function createScene01({ gsap, reducedMotion, createScrollTrigger }) {
  const transition = document.querySelector('.tunnel-transition');
  const foreground = document.querySelector('[data-scene="01"]');
  const enterButton = foreground?.querySelector('.hd2-marquee-btn');
  if (!transition || !foreground) return null;

  // Compatibility choreography only: this reproduces the current flat-layer
  // tunnel push until Scene 1 is implemented from its animation specification.
  const clock = {};
  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: createScrollTrigger(),
  });
  timeline.to(clock, { duration: 1 }, 0);
  timeline.set(foreground, { visibility: 'visible', scale: 1 }, 0);
  timeline.to(
    foreground,
    {
      scale: getLegacyTunnelScale,
      duration: LEGACY_ZOOM_END,
      ease: 'power1.in',
    },
    0
  );
  timeline.set(foreground, { visibility: 'hidden' }, LEGACY_ZOOM_END);

  const enterTunnel = () => {
    const scrollDistance = transition.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: transition.offsetTop + LEGACY_ZOOM_END * scrollDistance,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };
  enterButton?.addEventListener('click', enterTunnel);

  return () => {
    enterButton?.removeEventListener('click', enterTunnel);
    timeline.scrollTrigger?.kill();
    timeline.kill();
    gsap.set(foreground, { clearProps: 'visibility,scale' });
  };
}
