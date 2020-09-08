export const initPortfolioParallax = (controller) => {
  var tl = gsap.timeline();


  var child = document.querySelector('.portfolio-card-display__image');
  var background = document.querySelector('.portfolio-card-display__background');

  tl.to(child, 1, { y: -120, ease: Linear.easeNone }, 0);
  tl.to(background, 1, { y: -60, ease: Linear.easeNone }, 0);

  var scene = new ScrollMagic.Scene({
    triggerElement: document.querySelector('.portfolio-card'),
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
