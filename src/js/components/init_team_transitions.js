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
    tl.to(nicoOne, 2, { x: nicoCoords.x, y: nicoCoords.y, ease: "back.inOut(1.7)" }, 0);
    tl.to(syOne, 2, { x: syCoords.x, y: syCoords.y, ease: "back.inOut(1.7)" }, 0);
    tl.to(this, 0.8, { opacity: 0 }, 0)


    // Shake photos
    tl.to(nicoOne, 0.15, { x: nicoCoords.x + 20, repeat: 5, yoyo: true, ease: Sine.easeInOut }).to(nicoOne, 0.3, { opacity: 0 }).to(nicoTwo, 0.7, { opacity: 1 });
    tl.to(syOne, 0.15, { x: syCoords.x + 20, repeat: 5, yoyo: true, ease: Sine.easeInOut }).to(syOne, 0.3, { opacity: 0 }).to(syTwo, 0.7, { opacity: 1 });

    // Flip the z-index for the team transitions
    tl.set(('.team-transition--part-one'), { css: { zIndex: 0 } }).set(('.team-transition--part-two'), { css: { zIndex: 10 } });

    // Show the second button
    tl.to('.js-team-transition__btn--part-two', 0.5, { opacity: 1 });

  }

  const transBtn = document.querySelector('.js-team-transition__btn--part-one');

  if (transBtn) transBtn.addEventListener('click', gsapTransition);
}

const twoToThree = () => {
  function gsapTransition() {
    const [nicoTwo, syTwo] = document.querySelectorAll('.team-transition_nico-photo--part-two, .team-transition_sy-photo--part-two');
    const [nicoThree, syThree] = document.querySelectorAll('.team-transition_nico--part-three img, .team-transition_sy--part-three img');
    const [nicoThreeFull, syThreeFull] = document.querySelectorAll('.team-transition_nico--part-three, .team-transition_sy--part-three');

    const nicoCoords = {
      x: nicoThree.getBoundingClientRect().right - nicoTwo.getBoundingClientRect().right,
      y: nicoThree.getBoundingClientRect().y - nicoTwo.getBoundingClientRect().y
    }
    const syCoords = {
      x: syThree.getBoundingClientRect().left - syTwo.getBoundingClientRect().left,
      y: syThree.getBoundingClientRect().y - syTwo.getBoundingClientRect().y
    }

    // Build GSAP Timeline
    const tl = gsap.timeline();
    // Make text dissappear
    tl.to('.team-transition_nico--part-two p', 0.8, { opacity: 0 }, 0);
    tl.to('.team-transition_sy--part-two div', 0.8, { opacity: 0 }, 0);
    // Move photos across page, make button disappear
    tl.to(nicoTwo, 2, { x: nicoCoords.x, y: nicoCoords.y, ease: "back.inOut(1.7)" }, 1);
    tl.to(syTwo, 2, { x: syCoords.x, y: syCoords.y, ease: "back.inOut(1.7)" }, 1);
    tl.to(this, 0.8, { opacity: 0 }, 1);

    // Shake photos, and show part three
    tl.to(nicoTwo, 0.15, { x: nicoCoords.x + 20, repeat: 5, yoyo: true, ease: Sine.easeInOut }).to(nicoTwo, 0.3, { opacity: 0 }).to(nicoThreeFull, 0.7, { opacity: 1 });
    tl.to(syTwo, 0.15, { x: syCoords.x + 20, repeat: 5, yoyo: true, ease: Sine.easeInOut }).to(syTwo, 0.3, { opacity: 0 }).to(syThreeFull, 0.7, { opacity: 1 });


    // Flip the z-index for the team transitions
    tl.set(('.team-transition--part-two'), { css: { zIndex: 0 } }).set(('.team-transition--part-three'), { css: { zIndex: 10 } });

    // Show the second button
    tl.to('.js-team-transition__btn--part-three', 0.5, { opacity: 1 });

  }

  const transBtn = document.querySelector('.js-team-transition__btn--part-two');

  if (transBtn) transBtn.addEventListener('click', gsapTransition);
}

const threeToOne = () => {
  const [nicoOne, syOne] = document.querySelectorAll('.team-transition_nico--part-one, .team-transition_sy--part-one');
  const [nicoThree, syThree] = document.querySelectorAll('.team-transition_nico--part-three img, .team-transition_sy--part-three img');

  const nicoCoords = {
    x: nicoOne.getBoundingClientRect().right - nicoTwo.getBoundingClientRect().right,
    y: nicoOne.getBoundingClientRect().y - nicoTwo.getBoundingClientRect().y
  }
  const syCoords = {
    x: syOne.getBoundingClientRect().left - syTwo.getBoundingClientRect().left,
    y: syOne.getBoundingClientRect().y - syTwo.getBoundingClientRect().y
  }
}

export { oneToTwo, twoToThree, threeToOne }
