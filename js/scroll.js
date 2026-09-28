import { createScene01 } from './scenes/scene-01.js';
import { createScene02 } from './scenes/scene-02.js';
import { createScene03 } from './scenes/scene-03.js';
import { createScene04 } from './scenes/scene-04.js';
import { createScene05 } from './scenes/scene-05.js';
import { createScene06 } from './scenes/scene-06.js';
import { createScene07 } from './scenes/scene-07.js';

const sceneFactories = [
  createScene01,
  createScene02,
  createScene03,
  createScene04,
  createScene05,
  createScene06,
  createScene07,
];

export function createSceneScrollTrigger(ScrollTrigger, options = {}) {
  const trigger = document.querySelector('.tunnel-transition');
  if (!trigger) return null;

  return {
    trigger,
    start: 'top top',
    end: 'bottom bottom',
    scrub: options.reducedMotion ? true : 0.35,
    invalidateOnRefresh: true,
    fastScrollEnd: false,
  };
}

export function initScrollAnimations({ gsap, ScrollTrigger }) {
  gsap.registerPlugin(ScrollTrigger);

  const media = gsap.matchMedia();
  let refreshFrame = 0;
  let refreshTimer = 0;

  // Every scene owns and cleans up its own timeline. matchMedia rebuilds those
  // timelines when reduced-motion preference changes, preserving one native
  // document scroller and avoiding custom scroll physics or forced snapping.
  media.add(
    {
      reducedMotion: '(prefers-reduced-motion: reduce)',
      fullMotion: '(prefers-reduced-motion: no-preference)',
    },
    (context) => {
      const options = {
        gsap,
        ScrollTrigger,
        reducedMotion: context.conditions.reducedMotion,
        createScrollTrigger: (sceneOptions = {}) =>
          createSceneScrollTrigger(ScrollTrigger, {
            reducedMotion: context.conditions.reducedMotion,
            ...sceneOptions,
          }),
      };
      const cleanups = sceneFactories
        .map((createScene) => createScene(options))
        .filter(Boolean);

      return () => cleanups.reverse().forEach((cleanup) => cleanup());
    }
  );

  const scheduleRefresh = () => {
    cancelAnimationFrame(refreshFrame);
    clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(() => {
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh(true));
    }, 150);
  };

  // ScrollTrigger caches geometry and recalculates through refresh hooks rather
  // than reading layout in every native scroll callback. visualViewport covers
  // mobile browser chrome and orientation changes that do not behave like a
  // conventional desktop resize.
  window.addEventListener('load', scheduleRefresh, { once: true });
  window.addEventListener('orientationchange', scheduleRefresh);
  window.visualViewport?.addEventListener('resize', scheduleRefresh);
  scheduleRefresh();

  return {
    refresh: scheduleRefresh,
    pause() {
      ScrollTrigger.getAll().forEach((trigger) => trigger.getTween()?.pause());
    },
    resume() {
      ScrollTrigger.getAll().forEach((trigger) => trigger.getTween()?.resume());
      ScrollTrigger.update();
    },
    destroy() {
      cancelAnimationFrame(refreshFrame);
      clearTimeout(refreshTimer);
      window.removeEventListener('orientationchange', scheduleRefresh);
      window.visualViewport?.removeEventListener('resize', scheduleRefresh);
      media.revert();
    },
  };
}
