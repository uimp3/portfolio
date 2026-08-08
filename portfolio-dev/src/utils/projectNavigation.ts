let projectCardNavigationBound = false;

const openProject = (card: Element) => {
  const url = card.getAttribute('data-project-url');

  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const isInteractiveElement = (element: Element | null) =>
  Boolean(element?.closest('a, button, input, select, textarea, summary'));

export const initProjectCardNavigation = () => {
  if (projectCardNavigationBound) {
    return;
  }

  projectCardNavigationBound = true;

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest('[data-gallery-trigger]')) {
      return;
    }

    const card = event.target.closest('.project-card[data-project-url]');
    if (!card || isInteractiveElement(event.target)) {
      return;
    }

    openProject(card);
  });

  document.addEventListener('keydown', (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest('[data-gallery-trigger]')) {
      return;
    }

    const card = event.target.closest('.project-card[data-project-url]');
    if (!card) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(card);
    }
  });
};