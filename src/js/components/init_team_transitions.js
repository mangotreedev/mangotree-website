const oneToTwo = () => {
  function gsapTransition() {
    const [nicoOne, syOne] = document.querySelectorAll('.team-transition_nico--part-one, .team-transition_sy--part-one');
    const [nicoTwo, syTwo] = document.querySelectorAll('.team-transition_nico--part-two, .team-transition_sy--part-two');

    const nicoCoords = {
      x: nicoTwo.getBoundingClientRect().right - nicoOne.getBoundingClientRect().right,
      y: nicoTwo.getBoundingClientRect().y - nicoOne.getBoundingClientRect().y
    }
    const syCoords = {
      x: syTwo.getBoundingClientRect().left - syOne.getBoundingClientRect().left,
      y: syTwo.getBoundingClientRect().y - syOne.getBoundingClientRect().y
    }

    // Build GSAP Timeline
    const tl = gsap.timeline();
    // Move photos across page, make button disappear
    tl.to(nicoOne, 2, { x: nicoCoords.x, y: nicoCoords.y }, 0);
    tl.to(syOne, 2, { x: syCoords.x, y: syCoords.y }, 0);
    tl.to(this, 0.8, { opacity: 0 }, 0)


    // Shake photos
    tl.to(nicoOne, 0.15, { x: nicoCoords.x + 20, repeat: 5, yoyo: true, ease: Sine.easeInOut }).to(nicoOne, 0.3, { opacity: 0 }).to(nicoTwo, 0.5, { opacity: 1 });
    tl.to(syOne, 0.15, { x: syCoords.x + 20, repeat: 5, yoyo: true, ease: Sine.easeInOut }).to(syOne, 0.5, { opacity: 0 }).to(syTwo, 0.5, { opacity: 1 });

    tl.to('.js-team-transition__btn--part-two', 0.5, { opacity: 1 })

    // Flip the z-index for the team transitions
    tl.set(('.team-transition--part-one'), { css: { zIndex: 0 } }).set(('.team-transition--part-two'), { css: { zIndex: 10 } });

  }

  const transBtn = document.querySelector('.js-team-transition__btn--part-one');

  if (transBtn) transBtn.addEventListener('click', gsapTransition);
}

const twoToThree = () => {
  console.log("Sweet Tits 2");
}

const threeToOne = () => {
  console.log("Sweet Tits 3");
}

export { oneToTwo, twoToThree, threeToOne }
