export const initLandingTransitions = () => {
  const logo = document.querySelector(".js-background-logo");
  const title = document.querySelector(".js-primary-title");
  const defineBtns = document.querySelectorAll(".js-define-btn");
  let fallenMango = false;

  function triggerDefine() {
    const notTriggered = !(document.querySelector('.define-btn--disabled'));
    if (window.scrollY >= window.innerHeight * .10 && notTriggered) {
      defineBtns.forEach((btn) => btn.click());
      document.removeEventListener('scroll', triggerDefine);
    }
  }

  document.addEventListener('scroll', triggerDefine);

  document.addEventListener('scroll', () => {
    if (window.scrollY >= title.getBoundingClientRect().bottom && logo.classList.contains('js-logo-active')) {
      if (!fallenMango) {
        const tl = gsap.timeline();

        tl.to(logo, .3, { css: { zIndex: 100, rotation: 8 } })
          .to(logo, .3, { css: { zIndex: 100, rotation: -8 } })
          .to(logo, .3, { css: { zIndex: 100, rotation: 8 } })
          .to(logo, .2, { css: { zIndex: 100, rotation: 0 } })
          .to(logo, 10, { y: '600vh', opacity: 0, ease: "power1.inOut" })
          .set(logo, { y: '-100vh' });
        fallenMango = true;
      }
    }
  });
}
