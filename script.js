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

// Section-1 -> 2 -> 3, one pinned sequence: section-1 (the foreground, see
// .tunnel-layer-front in styles.css) scales up from 1x, pivoting on the
// tunnel's real transparent opening, so it carries its own artwork out past
// the viewport edges while section-2 (the plain, static back layer) sits
// fully still underneath, gradually exposed through that one real opening
// as the foreground grows past it. Later, section-2 itself plays out its
// own scene (bow + arrow descend, arrow grows), then the merged section-2/3
// canvas pans upward within its window to scroll from that scene into the
// targets — section-3's content literally lives inside section-2's canvas
// (see .hero-section-2-canvas in styles.css), not a separate layer.
const tunnelTransition = document.querySelector('.tunnel-transition');
const tunnelLayerFront = tunnelTransition?.querySelector('.tunnel-layer-front');

if (tunnelTransition) {
  // These are all fractions of the wrapper's *extra* scroll (now 481vh, see
  // .tunnel-transition in styles.css) — each phase's fraction is just its
  // cumulative vh (noted per constant below) divided by 481.

  // Ease the zoom in (progress^2) so it starts slow — the tunnel rings
  // visibly enlarge and rush past — and accelerates into the reveal, instead
  // of snapping open in the first moments of scroll. SCALE_FRACTION is
  // deliberately well under 1: CANVAS_OPENING_RADIUS is the *transparent
  // hole's* own measured extent, but the opaque ring immediately bordering
  // it (the innermost heart's point) sits a bit further from the pivot and
  // needs more scale to fully clear the viewport than the hole itself does.
  // Rather than measure that ring precisely, finish the ramp (and force-hide
  // the foreground, below) with a large safety margin regardless of exactly
  // where a user's scroll settles — well before WEAPON_REVEAL_START.
  const SCALE_FRACTION = 0.3;
  // The opening's real canvas-space radius (~28px out of the 402x871
  // design canvas), measured by flood-filling heart-tunnel.webp's alpha
  // channel from its visual center to isolate just the enclosed hole.
  const CANVAS_OPENING_RADIUS = 28;
  // Bow + arrow reveal: starts well after the zoom's done, with a long pause
  // in between so there's time to look at the portrait and tap the heart
  // before anything else happens (90vh zoom + 120vh pause = 210vh in).
  // Negative offset: they start up near the top cloud (behind/above the
  // portrait) and descend into their resting spot, as if protruding down out
  // of the cloud she's on, rather than rising from below.
  const WEAPON_REVEAL_START = 210 / 481;
  const WEAPON_REVEAL_END = 261 / 481; // 51vh descent
  const WEAPON_OFFSET_PX = -140;
  // Arrow grows in place: after the weapon settles and a short hold (20vh),
  // just the arrow (not the bow) grows over 80vh, as if shooting forward
  // toward the camera before it passes on behind the targets. Bow stays put.
  // Modest max (unlike an earlier version of this effect) since this is the
  // same arrow that has to stay in a sane relationship with the targets'
  // fixed positions once it settles, not a stand-in that gets swapped out.
  const ARROW_SCALE_START = 281 / 481;
  const ARROW_SCALE_END = 361 / 481;
  const ARROW_MAX_SCALE = 1.4;
  // Scene pan: after the arrow settles and another short hold (30vh), the
  // merged section-2/3 canvas pans upward by a full 803px (its own scene's
  // height) over 60vh, scrolling from the portrait/bow scene into the
  // targets — one continuous canvas, not a fade between two layers.
  const SCENE_PAN_START = 391 / 481;
  const SCENE_PAN_END = 451 / 481; // leaves ~30vh hold before section-4
  const SCENE_PAN_DISTANCE_PX = 803;

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

    // Pan the merged canvas up to scroll from section-2's scene into
    // section-3's, within the same fixed-size window (see
    // .hero-section-2-canvas) — negative because the canvas moves up to
    // reveal what's below it. Computed before weaponT below since the
    // weapon's own opacity needs it too.
    const panT = Math.min(
      1,
      Math.max(0, (fraction - SCENE_PAN_START) / (SCENE_PAN_END - SCENE_PAN_START))
    );
    tunnelTransition.style.setProperty('--scene2-pan', `${-panT * SCENE_PAN_DISTANCE_PX}px`);

    // Once section-2 is settled (with a short pause after the zoom so it
    // doesn't feel rushed), the bow + arrow descend into place together over
    // their own scroll stretch — they start faded out and shifted up behind
    // the portrait so she reads first, then settle down as if protruding out
    // from the cloud she's on. This entrance fade is shared by the whole
    // group (bow + arrow), but the bow alone ALSO fades back out once the
    // pan starts (--bow-opacity, multiplying on top of this one on just
    // .hd3-bow-crop) — the bow has no business lingering once the scene's
    // panned into the targets, but the arrow does: it's the same one arrow
    // that keeps threading behind them the whole time, so it stays put here.
    const weaponT = Math.min(
      1,
      Math.max(0, (fraction - WEAPON_REVEAL_START) / (WEAPON_REVEAL_END - WEAPON_REVEAL_START))
    );
    tunnelTransition.style.setProperty('--weapon-offset', `${(1 - weaponT) * WEAPON_OFFSET_PX}px`);
    tunnelTransition.style.setProperty('--weapon-opacity', weaponT);
    tunnelTransition.style.setProperty('--bow-opacity', 1 - panT);

    // Arrow grows from 1x to ARROW_MAX_SCALE in place once the descent's
    // settled — the bow itself doesn't scale.
    const arrowT = Math.min(
      1,
      Math.max(0, (fraction - ARROW_SCALE_START) / (ARROW_SCALE_END - ARROW_SCALE_START))
    );
    tunnelTransition.style.setProperty('--arrow-pull-scale', 1 + arrowT * (ARROW_MAX_SCALE - 1));
  };

  window.addEventListener('scroll', updateTunnelScale, { passive: true });
  window.addEventListener('resize', updateTunnelScale);
  updateTunnelScale();

  // "Enter the tunnel" smooth-scrolls through just the zoom, landing right
  // as section-2 finishes being revealed — not all the way through its own
  // bow/arrow/section-3-reveal scene, which the user can then scroll through
  // normally at their own pace.
  document.querySelector('.hd2-marquee-btn')?.addEventListener('click', () => {
    const extraScrollable = tunnelTransition.offsetHeight - window.innerHeight;
    const targetY = tunnelTransition.offsetTop + SCALE_FRACTION * extraScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  });
}

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
