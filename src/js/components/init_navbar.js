export const initNavbar = () => {
  const navbarIcon = document.querySelector('.js-navbar-icon');
  if (navbarIcon) {
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
  }
};
