export const initLandingTransitions = () => {
  const logo = document.querySelector(".js-background-logo");
  const title = document.querySelector(".js-primary-title");
  let fallenMango = false;

  document.addEventListener('scroll', () => {
    if (window.scrollY >= title.getBoundingClientRect().bottom && logo.classList.contains('js-logo-active')) {
      if (!fallenMango) {
        const tl = gsap.timeline();

        tl.to(logo, 0, { css: { zIndex: 100 } })
          .to(logo, 10, { y: '600vh', opacity: 0, ease: "power1.inOut" })
          .set(logo, { y: '-100vh' });
        fallenMango = true;
      }
    }
  });
}
