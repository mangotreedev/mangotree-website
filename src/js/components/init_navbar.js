export const initNavbar = () => {
  // TODO: Disable scrolling when navbar is open
  const navbarIcon = document.querySelector('.js-navbar-icon');
  navbarIcon.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('burger-icon--active');
    document.querySelector('.navbar-menu').classList.toggle('navbar-menu--active');
  })

  const nabarLinks = document.querySelectorAll('.js-links-list li');

  const closeNavbar = (link) => {
    link.addEventListener('click', () => {
      document.querySelector('.navbar-menu').classList.remove('navbar-menu--active');
      navbarIcon.classList.toggle('burger-icon--active');
    })
  }

  nabarLinks.forEach(closeNavbar);
};
