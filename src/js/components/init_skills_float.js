import { hideText } from "./init_design_text";

const initSkillsFloat = () => {

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

  const skillsBtns = document.querySelectorAll('.js-skills-btn')

  function displaySkills() {
    skillsBtns.forEach((btn) => { hideSkills.call(btn) });
    hideText();

    const icons = document.querySelectorAll(`.skill-icon--${this.dataset.type}`);
    if (icons.length > 0) {
      gsap.to(icons, 0.01, { display: "block", opacity: 0 });
      gsap.to(icons, { opacity: 1, stagger: 0.05 });
      // icons.forEach(icon => {
      //   gsap.set(icon, {
      //     x: randomX(-1),
      //     y: randomY(1),
      //     rotation: randomAngle(-1)
      //   });

      //   moveX(icon, 1);
      //   moveY(icon, -1);
      //   rotate(icon, 1);
      // })
    }
  }

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    skillsBtns.forEach(skillBtn => skillBtn.addEventListener('click', displaySkills));
  } else {
    skillsBtns.forEach(skillBtn => skillBtn.addEventListener('mouseenter', displaySkills));
    skillsBtns.forEach(skillBtn => skillBtn.addEventListener('mouseleave', hideSkills));
  }
};

function hideSkills() {
  const icons = document.querySelectorAll(`.skill-icon--${this.dataset.type}`);
  if (icons.length > 0) {
    icons.forEach(icon => {
      gsap.to(icon, 0.01, {
        display: "none"
      });
    });
  }
}

export { initSkillsFloat, hideSkills };
