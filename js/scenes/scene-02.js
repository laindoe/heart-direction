const REVEAL_START = 210 / 511;
const REVEAL_END = 261 / 511;
const DRAW_START = 281 / 511;
const DRAW_END = 361 / 511;

export function createScene02({ gsap, createScrollTrigger }) {
  const transition = document.querySelector('.tunnel-transition');
  if (!transition || !document.querySelector('[data-scene="02"]')) return null;

  // Compatibility choreography for the existing Scene 2 portion. Keeping it
  // isolated here allows the merged DOM canvas to be split later without
  // coupling Scene 1 or Scene 3 to its implementation details.
  const clock = {};
  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: createScrollTrigger(),
  });
  timeline.to(clock, { duration: 1 }, 0);
  timeline.set(
    transition,
    {
      '--weapon-offset': '-140px',
      '--weapon-opacity': 0,
      '--character-scoot': '0px',
      '--bow-draw-offset': '0px',
      '--arrow-travel': '0px',
    },
    0
  );
  timeline.to(
    transition,
    {
      '--weapon-offset': '0px',
      '--weapon-opacity': 1,
      duration: REVEAL_END - REVEAL_START,
    },
    REVEAL_START
  );
  timeline.to(
    transition,
    {
      '--character-scoot': '-200px',
      '--bow-draw-offset': '-70px',
      '--arrow-travel': '-110px',
      duration: DRAW_END - DRAW_START,
    },
    DRAW_START
  );

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
    gsap.set(transition, {
      clearProps:
        '--weapon-offset,--weapon-opacity,--character-scoot,--bow-draw-offset,--arrow-travel,--arrow-pull-scale,--scene2-pan,--bow-opacity',
    });
  };
}
