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
const tunnelLayerFront = tunnelTransition?.querySelector('.tunnel-layer-front');

if (tunnelTransition) {
  // Ease the zoom in (progress^2) so it starts slow — the tunnel rings
  // visibly enlarge and rush past — and accelerates into the reveal, instead
  // of snapping open in the first moments of scroll. SCALE_FRACTION is
  // deliberately well under 1: CANVAS_OPENING_RADIUS is the *transparent
  // hole's* own measured extent, but the opaque ring immediately bordering
  // it (the innermost heart's point) sits a bit further from the pivot and
  // needs more scale to fully clear the viewport than the hole itself does.
  // Rather than measure that ring precisely, finish the ramp (and force-hide
  // the foreground, below) well before the halfway point of the scroll, so
  // there's a large safety margin — and a generous static hold afterward —
  // regardless of exactly where a user's scroll settles.
  const SCALE_FRACTION = 0.45;
  // The opening's real canvas-space radius (~28px out of the 402x871
  // design canvas), measured by flood-filling heart-tunnel.webp's alpha
  // channel from its visual center to isolate just the enclosed hole.
  const CANVAS_OPENING_RADIUS = 28;
  // Bow + arrow reveal: starts once the zoom's done plus a short pause
  // (0.55), finishes with a decent chunk of static hold still left before
  // section-3 (0.8). Negative offset: they start up near the top cloud
  // (behind/above the portrait) and descend into their resting spot, as if
  // protruding down out of the cloud she's on, rather than rising from below.
  const WEAPON_REVEAL_START = 0.55;
  const WEAPON_REVEAL_END = 0.8;
  const WEAPON_OFFSET_PX = -140;

  const updateTunnelScale = () => {
    const extraScrollable = tunnelTransition.offsetHeight - window.innerHeight;
    if (extraScrollable <= 0) return;

    const scrolledIntoWrapper = -tunnelTransition.getBoundingClientRect().top;
    const fraction = Math.min(1, Math.max(0, scrolledIntoWrapper / extraScrollable));
    const progress = Math.min(1, fraction / SCALE_FRACTION);
    const eased = progress * progress;

    // The opening's on-screen size at 1x depends on the same cover-fit
    // hero-scale the CSS uses (--hero-scale), so this has to track it
    // rather than assume a fixed pixel radius.
    const heroScale = Math.max(window.innerWidth / 402, window.innerHeight / 871);
    const openingRadiusPx = CANVAS_OPENING_RADIUS * heroScale;
    const viewportDiagonal = Math.hypot(window.innerWidth, window.innerHeight);
    const maxScale = (viewportDiagonal * 1.4) / openingRadiusPx;
    const scale = 1 + eased * (maxScale - 1);

    tunnelTransition.style.setProperty('--tunnel-scale', scale);

    // Belt-and-suspenders: the scale math is tuned to carry every part of
    // the foreground past all four edges by the time progress hits 1, but
    // rather than trust that pixel-perfectly across every viewport size
    // (and iOS's dynamic toolbar resizing mid-scroll), just hide it outright
    // once the reveal is done, so nothing blurry can linger on top of
    // section-2. Toggled back on scrolling up so the zoom still works both ways.
    if (tunnelLayerFront) {
      tunnelLayerFront.style.visibility = fraction >= SCALE_FRACTION ? 'hidden' : 'visible';
    }

    // Once section-2 is settled (with a short pause after the zoom so it
    // doesn't feel rushed), the bow + arrow descend into place over their
    // own scroll stretch — they start faded out and shifted up behind the
    // portrait so she reads first, then settle down as if protruding out
    // from the cloud she's on.
    const weaponT = Math.min(
      1,
      Math.max(0, (fraction - WEAPON_REVEAL_START) / (WEAPON_REVEAL_END - WEAPON_REVEAL_START))
    );
    tunnelTransition.style.setProperty('--weapon-offset', `${(1 - weaponT) * WEAPON_OFFSET_PX}px`);
    tunnelTransition.style.setProperty('--weapon-opacity', weaponT);
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

// "Peek inside" modal, opened by tapping the heart pendant hotspot.
const heartHotspot = document.querySelector('.hd3-heart-hotspot');
const heartModalOverlay = document.getElementById('heart-modal-overlay');
const heartModalClose = document.querySelector('.heart-modal-close');

if (heartHotspot && heartModalOverlay) {
  const openHeartModal = () => {
    heartModalOverlay.hidden = false;
    heartModalClose?.focus();
    document.addEventListener('keydown', onHeartModalKeydown);
  };

  const closeHeartModal = () => {
    heartModalOverlay.hidden = true;
    document.removeEventListener('keydown', onHeartModalKeydown);
    heartHotspot.focus();
  };

  function onHeartModalKeydown(event) {
    if (event.key === 'Escape') closeHeartModal();
  }

  heartHotspot.addEventListener('click', openHeartModal);
  heartModalClose?.addEventListener('click', closeHeartModal);
  heartModalOverlay.addEventListener('click', (event) => {
    if (event.target === heartModalOverlay) closeHeartModal();
  });
}
