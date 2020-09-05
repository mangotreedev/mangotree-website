const oneToTwo = () => {
  function gsapTransition() {

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
