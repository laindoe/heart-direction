const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function initModals({ onOpen = () => {}, onClose = () => {} } = {}) {
  let openOverlay = null;
  let lastTrigger = null;
  let savedScrollX = 0;
  let savedScrollY = 0;
  let savedBodyStyles = null;
  const removers = [];

  const lockPageScroll = () => {
    savedScrollX = window.scrollX;
    savedScrollY = window.scrollY;
    savedBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    // Fixing the body at the inverse scroll offset freezes the exact rendered
    // scene state on iOS as well as desktop. The values are restored verbatim
    // before returning the window to the saved coordinates.
    Object.assign(document.body.style, {
      position: 'fixed',
      top: `${-savedScrollY}px`,
      left: `${-savedScrollX}px`,
      right: '0',
      width: '100%',
      overflow: 'hidden',
    });
    document.documentElement.classList.add('modal-open');
  };

  const unlockPageScroll = () => {
    Object.assign(document.body.style, savedBodyStyles);
    document.documentElement.classList.remove('modal-open');
    window.scrollTo(savedScrollX, savedScrollY);
    savedBodyStyles = null;
  };

  const closeModal = () => {
    if (!openOverlay) return;
    const triggerToRestore = lastTrigger;
    openOverlay.hidden = true;
    openOverlay = null;
    lastTrigger = null;
    unlockPageScroll();
    onClose();
    triggerToRestore?.focus({ preventScroll: true });
  };

  const onKeydown = (event) => {
    if (!openOverlay) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = [...openOverlay.querySelectorAll(focusableSelector)];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  document.addEventListener('keydown', onKeydown);
  removers.push(() => document.removeEventListener('keydown', onKeydown));

  for (const trigger of document.querySelectorAll('[data-modal]')) {
    const overlay = document.querySelector(`[data-modal-panel="${trigger.dataset.modal}"]`);
    if (!overlay) continue;

    const openModal = () => {
      if (openOverlay) closeModal();
      openOverlay = overlay;
      lastTrigger = trigger;
      lockPageScroll();
      overlay.hidden = false;
      onOpen();
      overlay.querySelector('.hd-modal-close')?.focus({ preventScroll: true });
    };
    const onOverlayClick = (event) => {
      if (event.target === overlay) closeModal();
    };
    const closeButton = overlay.querySelector('.hd-modal-close');

    trigger.addEventListener('click', openModal);
    overlay.addEventListener('click', onOverlayClick);
    closeButton?.addEventListener('click', closeModal);
    removers.push(() => trigger.removeEventListener('click', openModal));
    removers.push(() => overlay.removeEventListener('click', onOverlayClick));
    if (closeButton) removers.push(() => closeButton.removeEventListener('click', closeModal));
  }

  return {
    close: closeModal,
    destroy() {
      if (openOverlay) closeModal();
      removers.reverse().forEach((remove) => remove());
    },
  };
}
