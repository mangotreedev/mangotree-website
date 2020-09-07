export const initHideNavbar = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".browser-navbar").style.top = "0";
    } else {
      document.querySelector(".browser-navbar").style.top = "-3em";
    }
    prevScrollpos = currentScrollPos;
  }
}

