export const initNavbar = () => {
  const navbarIcon = document.querySelector('.js-navbar-icon');
  navbarIcon.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('burger-icon--active');
  })
};
