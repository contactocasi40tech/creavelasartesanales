(() => {
  const config = window.CANDLE_SITE_CONFIG || {};
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

  document.querySelectorAll('[data-checkout]').forEach((link) => {
    if (config.checkoutUrl) link.href = config.checkoutUrl;
  });
  document.querySelectorAll('[data-price]').forEach((node) => {
    if (config.price) node.textContent = config.price;
  });
  document.querySelectorAll('[data-currency]').forEach((node) => {
    if (config.currency) node.textContent = config.currency;
  });
  document.querySelectorAll('[data-rating]').forEach((node) => {
    if (config.rating) node.textContent = config.rating;
  });
  document.querySelectorAll('[data-rating-count]').forEach((node) => {
    if (config.ratingCount) node.textContent = config.ratingCount;
  });
  document.querySelectorAll('[data-image]').forEach((image) => {
    const source = config.images?.[image.dataset.image];
    if (source) image.src = source;
  });
  const ratingLink = document.querySelector('.marketplace-link');
  if (ratingLink && config.ratingUrl) ratingLink.href = config.ratingUrl;

  if (!menuButton || !nav) return;
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    nav.classList.toggle('is-open', !isOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 721px)').matches) closeMenu();
  });
})();
