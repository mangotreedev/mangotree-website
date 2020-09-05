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

    console.log(syOne.getBoundingClientRect(), syTwo.getBoundingClientRect());

    gsap.to(nicoOne, { duration: 2, x: nicoCoords.x, y: nicoCoords.y, opacity: 0 });
    gsap.to(syOne, { duration: 2, x: syCoords.x, y: syCoords.y, opacity: 0 });
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
