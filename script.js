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
// as the foreground grows past it. Later, section-2 itself plays out its own
// scene (bow + arrow descend, arrow grows to full size, she scoots up while
// the bow + arrow draw back), then the merged section-2/3 canvas pans
// upward within its window — the "release" — to scroll from that scene into
// the targets — section-3's content literally lives inside section-2's
// canvas (see .hero-section-2-canvas in styles.css), not a separate layer.
const tunnelTransition = document.querySelector('.tunnel-transition');
const tunnelLayerFront = tunnelTransition?.querySelector('.tunnel-layer-front');

if (tunnelTransition) {
  // These are all fractions of the wrapper's *extra* scroll (now 511vh, see
  // .tunnel-transition in styles.css) — each phase's fraction is just its
  // cumulative vh (noted per constant below) divided by 511.

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
  const WEAPON_REVEAL_START = 210 / 511;
  const WEAPON_REVEAL_END = 261 / 511; // 51vh descent
  const WEAPON_OFFSET_PX = -140;
  // Draw: after the weapon settles and a short hold (20vh), she scoots up
  // over 80vh to open up room overhead, the bow rides up with her, and the
  // arrow rides up further still. The three different distances are the
  // whole point — if they all moved together it'd just read as the scene
  // sliding up, whereas the arrow outrunning the bow reads as the string
  // being drawn. The arrow does NOT change size during any of this.
  const DRAW_START = 281 / 511;
  const DRAW_END = 361 / 511;
  const CHARACTER_SCOOT_PX = -200;
  const BOW_DRAW_PX = -70;
  const ARROW_DRAW_PX = -110;
  // The shot: after a beat at full draw (20vh), everything below runs off
  // one eased progress over 90vh — the bow unwinding back down, the arrow
  // flying down and growing, AND the canvas panning to the targets. They're
  // deliberately locked to the same curve rather than sequenced: the arrow
  // covers 420px of canvas while the camera covers 803px, so the camera
  // outruns it, which is what carries the bow up and out of frame while the
  // arrow stays on screen the whole way (and the medallions rise up to meet
  // it). Sequencing them instead left a dead stretch where the arrow had
  // already flown out the bottom and the camera hadn't started following.
  // Eased out so it leaves fast off the string and settles on arrival.
  const SHOT_START = 381 / 511;
  const SHOT_END = 471 / 511; // leaves 40vh hold before section-4
  const ARROW_FLIGHT_PX = 310;
  const ARROW_MAX_SCALE = 1.6;
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

    // Once section-2 is settled (with a short pause after the zoom so it
    // doesn't feel rushed), the bow + arrow descend into place together over
    // their own scroll stretch — they start faded out and shifted up behind
    // the portrait so she reads first, then settle down as if protruding out
    // from the cloud she's on.
    const weaponT = Math.min(
      1,
      Math.max(0, (fraction - WEAPON_REVEAL_START) / (WEAPON_REVEAL_END - WEAPON_REVEAL_START))
    );
    tunnelTransition.style.setProperty('--weapon-offset', `${(1 - weaponT) * WEAPON_OFFSET_PX}px`);
    tunnelTransition.style.setProperty('--weapon-opacity', weaponT);

    // Draw: she scoots up to make room, the bow rides up a shorter distance
    // with her, and the arrow rides up further still — three different
    // distances for the same motion, which is what sells the string actually
    // being pulled rather than everything sliding up together. She stays up
    // from here on; only the bow and arrow come back down.
    const drawT = Math.min(
      1,
      Math.max(0, (fraction - DRAW_START) / (DRAW_END - DRAW_START))
    );
    tunnelTransition.style.setProperty('--character-scoot', `${drawT * CHARACTER_SCOOT_PX}px`);

    // The shot, all on one eased curve (see SHOT_START above for why the pan
    // is locked to it rather than sequenced after it): the bow unwinds back
    // to its resting spot, the arrow flies down past it — growing only now,
    // as it travels — and the camera pans down to the targets along with it.
    const shotRaw = Math.min(
      1,
      Math.max(0, (fraction - SHOT_START) / (SHOT_END - SHOT_START))
    );
    const shotT = 1 - Math.pow(1 - shotRaw, 3);

    tunnelTransition.style.setProperty('--bow-draw-offset', `${drawT * BOW_DRAW_PX * (1 - shotT)}px`);
    tunnelTransition.style.setProperty(
      '--arrow-travel',
      `${drawT * ARROW_DRAW_PX * (1 - shotT) + ARROW_FLIGHT_PX * shotT}px`
    );
    tunnelTransition.style.setProperty('--arrow-pull-scale', 1 + shotT * (ARROW_MAX_SCALE - 1));
    tunnelTransition.style.setProperty('--scene2-pan', `${-shotT * SCENE_PAN_DISTANCE_PX}px`);
    // The pan carries the bow up out of frame on its own, but fade it over
    // the back half of the shot too so it can't linger over the targets.
    tunnelTransition.style.setProperty(
      '--bow-opacity',
      1 - Math.min(1, Math.max(0, (shotT - 0.5) / 0.5))
    );
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

// Modals: the heart pendant hotspot and each of the three medallions.
// Wired generically by matching a trigger's data-modal to a panel's
// data-modal-panel, so adding another one is markup-only.
{
  let openOverlay = null;
  let lastTrigger = null;

  const closeModal = () => {
    if (!openOverlay) return;
    openOverlay.hidden = true;
    openOverlay = null;
    document.removeEventListener('keydown', onKeydown);
    lastTrigger?.focus();
  };

  function onKeydown(event) {
    if (event.key === 'Escape') closeModal();
  }

  for (const trigger of document.querySelectorAll('[data-modal]')) {
    const overlay = document.querySelector(
      `[data-modal-panel="${trigger.dataset.modal}"]`
    );
    if (!overlay) continue;

    trigger.addEventListener('click', () => {
      closeModal(); // never leave two open at once
      openOverlay = overlay;
      lastTrigger = trigger;
      overlay.hidden = false;
      overlay.querySelector('.hd-modal-close')?.focus();
      document.addEventListener('keydown', onKeydown);
    });

    overlay.querySelector('.hd-modal-close')?.addEventListener('click', closeModal);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeModal();
    });
  }
}
