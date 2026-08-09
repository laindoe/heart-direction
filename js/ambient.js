export function createAmbientController() {
  const factories = new Set();
  const animations = new Set();
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;

  const stopAnimations = () => {
    animations.forEach((animation) => animation?.kill?.());
    animations.clear();
  };

  const startAnimations = () => {
    stopAnimations();
    if (media.matches) return;
    factories.forEach((factory) => {
      const animation = factory();
      if (animation) animations.add(animation);
    });
    if (paused) animations.forEach((animation) => animation?.pause?.());
  };

  const onMotionPreferenceChange = () => startAnimations();
  media.addEventListener('change', onMotionPreferenceChange);

  // Ambient factories are time-based only. Scene modules must never register
  // narrative scroll choreography here. No new ambient effects are enabled by
  // this foundation refactor; later scenes can opt in through register().
  return {
    register(factory) {
      factories.add(factory);
      startAnimations();
      return () => {
        factories.delete(factory);
        startAnimations();
      };
    },
    pause() {
      paused = true;
      animations.forEach((animation) => animation?.pause?.());
    },
    resume() {
      paused = false;
      animations.forEach((animation) => animation?.resume?.());
    },
    destroy() {
      stopAnimations();
      factories.clear();
      media.removeEventListener('change', onMotionPreferenceChange);
    },
  };
}
