export const initLandingTransitions = () => {
  var neverRunned = true;
  var logo = document.querySelector(".js-background-logo");

  const gsapTransition = () => {
    const tl = gsap.timeline();
    TweenLite.set(logo, { y: '-100vh' });

    tl.to(logo, 0.25, {
        css: {
          position: 'fixed',
          top: '0vh',
          zIndex: -10,
          opacity: 0.05
        }
      }, 0)
      .to(logo, 1.25, { y: '-100vh' })
      .to(logo, 3, { y: 0 })
  };

  document.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      if (neverRunned) {
        gsapTransition();
        logo.classList.remove('js-logo-active');
        logo.classList.add('js-logo-background');
        neverRunned = false;
      } else if (logo.classList.contains('js-logo-active')) {
        neverRunned = true;
      }
    }
  });
}
