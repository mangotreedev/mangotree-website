export const initPortfolioParallax = (controller) => {
  const cards = document.querySelectorAll('.js-portfolio-card');

  cards.forEach(card => setParallax(card));

  function setParallax(card) {
    var child = card.querySelector('.js-image');
    var background = card.querySelector('.js-background');

    var tl = gsap.timeline();
    tl.to(child, 1, { y: -120, ease: Linear.easeNone }, 0);
    tl.to(background, 1, { y: -60, ease: Linear.easeNone }, 0);

    var scene = new ScrollMagic.Scene({
      triggerElement: card,
      triggerHook: 0.8,
      duration: "80%"
    })
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
