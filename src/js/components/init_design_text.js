import { hideSkills } from "./init_skills_float";

const initDesignText = () => {
  const designBtn = document.querySelector('.js-skills-btn--design');
  const designText = document.querySelector('.js-skills-display--text');
  const words = document.querySelectorAll('.js-text__word');
  const firstBg = document.querySelector('.js-text__first--bg');
  const secBg = document.querySelector('.js-text__second--bg');
  const thirdBg = document.querySelector('.js-text__third--bg');

  const skillsBtns = document.querySelectorAll('.js-skills-btn');

  function displayText() {
    skillsBtns.forEach((btn) => {
      hideSkills.call(btn)
    });
    hideText()

    document.querySelector('.skills-display').classList.add('design');
    const tl = gsap.timeline();
    tl
      .to('.skills-display p', 0.01, { display: "block" })
      .to('.skills-display p', 0.5, { opacity: 1, ease: Sine.easeInOut })
      .to(firstBg, 0.2, { scaleX: 1 })
      .to(secBg, 0.2, { scaleX: 1 })
      .to(thirdBg, 0.2, { scaleX: 1 })
      .to(words, 0.15, { opacity: 1 }, "-=0.1")
      .to(firstBg, 0.2, { scaleX: 0 })
      .to(secBg, 0.2, { scaleX: 0 })
      .to(thirdBg, 0.2, { scaleX: 0 });
  }

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    designBtn.addEventListener('click', displayText);
  } else {
    designBtn.addEventListener('mouseenter', displayText);
    designBtn.addEventListener('mouseleave', hideText);
  }
}

function hideText() {
  const words = document.querySelectorAll('.js-text__word');

  document.querySelector('.skills-display').classList.remove('design');
  gsap.to('.skills-display p', 0, {
    display: "none",
    opacity: 0
  });
  gsap.to(words, 0, {
    opacity: 0
  });
}

export { initDesignText, hideText };
