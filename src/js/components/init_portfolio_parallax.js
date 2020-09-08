export const initPortfolioParallax = (controller) => {
  var tl = gsap.timeline();
  var child = document.querySelector('.portfolio-card-display__image');

  tl.to(child, 1, { y: -180, ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({
    triggerElement: document.querySelector('.portfolio-card-display'),
    triggerHook: 0.4,
    duration: "100%"
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
