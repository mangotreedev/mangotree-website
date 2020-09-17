export const initLandingTransitions = () => {
  const logo = document.querySelector(".js-background-logo");
  const title = document.querySelector(".js-primary-title");

  const gsapTransition = () => {
    const tl = gsap.timeline();

    tl.to(logo, 0, {css: { zIndex: 100 }})
      .to(logo, 3, { y: '200vh' })
  };

  document.addEventListener('scroll', () => {
    if (window.scrollY >= title.getBoundingClientRect().top && logo.classList.contains('js-logo-active')) {
      gsapTransition();
      console.log("DOING SOMETHING")
    }
  });
}
