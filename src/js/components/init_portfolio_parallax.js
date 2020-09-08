export const initPortfolioParallax = (controller) => {
  const cards = document.querySelectorAll('.js-portfolio-card');

  cards.forEach(setParallax);

  function setParallax(card) {
    const child = card.querySelector('.js-image');
    const background = card.querySelector('.js-background');

    const tl = gsap.timeline();
    tl.to(child, 1, { rotation: -3}, 0);
    tl.to(child, 1, { y: 100, ease: Linear.easeNone }, 0);
    tl.to(background, 1, { y: 50, ease: Linear.easeNone }, 0);

    const scene = new ScrollMagic.Scene({
      triggerElement: card,
      triggerHook: 0.9,
      duration: "100%"
    });

    scene.setTween(tl)
      .addIndicators({
        colorTrigger: "black",
        colorStart: "black",
        colorEnd: "black",
        indent: 10
      })
      .addTo(controller);
  }

}
