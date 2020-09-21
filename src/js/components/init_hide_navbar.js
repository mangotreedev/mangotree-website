export const initHideNavbar = () => {
  const hideNavbar = (navbar) => {
    navbar.style.top = "0";
  }

  const showNavbar = (navbar) => {
    navbar.style.top = "-5em";
  }

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const navbars = document.querySelectorAll(".js-browser-navbar, .js-navbar-icon")
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbars.forEach(hideNavbar);
    } else {
      navbars.forEach(showNavbar);
    }
    prevScrollpos = currentScrollPos;
  }
}

