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

  const randomX = random(20, 20);
  const randomY = random(20, 20);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(8, 12);


  function displaySkills() {
    const icons = document.querySelectorAll(`.skill-icon--${this.dataset.type}`);
    if (icons.length > 0) {
      gsap.to(icons, 0.01, { display: "block", opacity: 0 });
      gsap.to(icons, { opacity: 1, stagger: 0.05 });
      icons.forEach(icon => {
        gsap.set(icon, {
          x: randomX(-1),
          y: randomY(1),
          rotation: randomAngle(-1)
        });

        moveX(icon, 1);
        moveY(icon, -1);
        rotate(icon, 1);
      })
    } else {
      document.querySelector('.skills-display').classList.add('design');
      gsap.to('.skills-display p', 0.01, { display: "block" })
        .to('.skills-display p', 1.5, { opacity: 1, ease: Sine.easeInOut } );
    }
  }

  function hideSkills () {
    const icons = document.querySelectorAll(`.skill-icon--${this.dataset.type}`);
    if (icons.length > 0) {
      icons.forEach(icon => {
        gsap.to(icon, 0.01, { display: "none" });
      });
    } else {
      document.querySelector('.skills-display').classList.remove('design');
      gsap.to('.skills-display p', 0.01, { display: "none" })
        .to('.skills-display p', 0.01, { opacity: 0, ease: Sine.easeInOut });
    }
  }

  const skillsBtns = document.querySelectorAll('.js-skills-btn');

  skillsBtns.forEach(skillBtn => skillBtn.addEventListener('mouseenter', displaySkills));

  skillsBtns.forEach(skillBtn => skillBtn.addEventListener('mouseleave', hideSkills));

};
