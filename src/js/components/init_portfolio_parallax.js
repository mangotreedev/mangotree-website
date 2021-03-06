export const initPortfolioParallax = (controller) => {
  const cards = document.querySelectorAll('.js-portfolio-card');

  cards.forEach(setParallax);

  function setParallax(card) {
    const child = card.querySelector('.js-image');
    const background = card.querySelector('.js-background');

    const tl = gsap.timeline();
    tl.to(child, 1, { rotation: -3}, 0);
    tl.to(child, 1, { y: 80, ease: Linear.easeNone }, 0);
    tl.to(background, 1, { y: 40, ease: Linear.easeNone }, 0);

    const scene = new ScrollMagic.Scene({
      triggerElement: card,
      triggerHook: 0.9,
      duration: "150%"
    });

    scene.setTween(tl).addTo(controller);
  }

}
