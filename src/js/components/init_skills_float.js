export const initSkillsFloat = () => {

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }

  function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    });
  }

  const randomX = random(10, 20);
  const randomY = random(20, 30);
  const randomDelay = random(0, 1);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(8, 12);


  function displaySkills() {
    const icon = document.querySelector('.skill-icon--custom');

    gsap.set(icon, {
      x: randomX(-1),
      y: randomY(1),
      rotation: randomAngle(-1)
    });

    moveX(icon, 1);
    moveY(icon, -1);
    rotate(icon, 1);






  }

  const skillsBtns = document.querySelectorAll('.js-skills-btn');

  skillsBtns.forEach(skillBtn => skillBtn.addEventListener('mouseenter', displaySkills));


};
