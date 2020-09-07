export const initDefineBtn = () => {
  const defineBtns = document.querySelectorAll('.js-define-btn');
  var logo = document.querySelector(".js-shake-logo");

  const expandTitle = (title) => {
    title.classList.add('expanded');
  }

  const showDefinition = (list) => {
    list.classList.add('expanded');
    list.classList.add('definition-list--active');
  }

  // For init_landing_transition usage
  const displayLogo = (logo) => {
    logo.classList.add('js-logo-active');
  }

  const gsapTransition = () => {
    const tl = gsap.timeline();
    var logoY = -logo.getBoundingClientRect().y + logo.getBoundingClientRect().height / 2

    if (logo.classList.contains('js-logo-background')) {
      TweenLite.set(logo, {y: logoY});
      // Falling out of the screen and falling back from the top
      tl.to(logo, 1.25, {y:'100vh'})
        .to(logo, 0.01, {x:'100vh'})
        .to(logo, 0.01, {y:'-100vh'})
        .to(logo, 0.01, {x:0})
        .to(logo, 0.25, { opacity: 1 }, 0)
        .to(logo, 1.25, {y:'-100vh'})
        .to(logo, 1.25, {y:0, ease:Bounce.easeOut})
        .to(logo, 0.25, {css: {position: 'relative'}}, 0)
    } else {
      // Falling from the top
      TweenLite.set(logo, {y:'-100vh'});

      tl.to(logo, 0.25, { opacity: 1 }, 0)
        .to(logo, 1.25, {y:'-100vh'})
        .to(logo, 1.25, {y:0, ease:Bounce.easeOut})
    }
  };

  const addListener = (button) => {
    button.addEventListener('click', (event) => {
      gsapTransition();

      document.querySelectorAll('.primary-title').forEach(expandTitle);
      document.querySelectorAll('.definition-list').forEach(showDefinition);
      document.querySelectorAll('.landing-page__right img').forEach(displayLogo);

      event.currentTarget.classList.add("define-btn--disabled");
    });
  }

  defineBtns.forEach(addListener);
};
