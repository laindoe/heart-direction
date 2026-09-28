const SHOT_START = 381 / 511;
const SHOT_END = 471 / 511;

export function createScene03({ gsap, createScrollTrigger }) {
  const transition = document.querySelector('.tunnel-transition');
  if (!transition || !document.querySelector('[data-scene-fragment="03"]')) return null;

  // Scene 3 still shares the legacy Scene 2 canvas visually, but its flight and
  // camera-pan timeline is now independently owned and can move to a dedicated
  // scene wrapper during the later structural separation.
  const clock = {};
  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: createScrollTrigger(),
  });
  timeline.to(clock, { duration: 1 }, 0);
  timeline.set(
    transition,
    {
      '--arrow-pull-scale': 1,
      '--scene2-pan': '0px',
      '--bow-opacity': 1,
    },
    0
  );
  timeline.fromTo(
    transition,
    {
      '--bow-draw-offset': '-70px',
      '--arrow-travel': '-110px',
      '--arrow-pull-scale': 1,
      '--scene2-pan': '0px',
    },
    {
      '--bow-draw-offset': '0px',
      '--arrow-travel': '310px',
      '--arrow-pull-scale': 1.6,
      '--scene2-pan': '-803px',
      duration: SHOT_END - SHOT_START,
      ease: 'power3.out',
    },
    SHOT_START
  );
  timeline.to(
    transition,
    {
      '--bow-opacity': 0,
      duration: (SHOT_END - SHOT_START) / 2,
    },
    SHOT_START + (SHOT_END - SHOT_START) / 2
  );

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
  };
}
