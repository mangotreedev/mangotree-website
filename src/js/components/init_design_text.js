export const initDesignText = () => {
  const designBtn = document.querySelector('.js-skills-btn--design');
  const designText = document.querySelector('.js-skills-display--text');

  const firstBg = document.querySelector('.js-text__first--bg');
  const secBg = document.querySelector('.js-text__second--bg');
  const thirdBg = document.querySelector('.js-text__third--bg');

  const words = document.querySelectorAll('.js-text__word');




  function hideText() {
    document.querySelector('.skills-display').classList.remove('design');
    const tl = gsap.timeline();
    tl
      .to('.skills-display p', 0.01, { display: "none" })
      .to('.skills-display p', 0.01, { opacity: 0, ease: Sine.easeInOut })
      .to(words, 0.1, { opacity: 0 });
  }

  function displayText() {
    document.querySelector('.skills-display').classList.add('design');
    const tl = gsap.timeline();
    tl
      .to('.skills-display p', 0.01, { display: "block" })
      .to('.skills-display p', 0.3, { opacity: 1, ease: Sine.easeInOut })
      .to(firstBg, 0.2, { scaleX: 1 })
      .to(secBg, 0.2, { scaleX: 1 })
      .to(thirdBg, 0.2, { scaleX: 1 })
      .to(words, 0.15, { opacity: 1 }, "-=0.1")
      .to(firstBg, 0.2, { scaleX: 0 })
      .to(secBg, 0.2, { scaleX: 0 })
      .to(thirdBg, 0.2, { scaleX: 0 });
  }

  designBtn.addEventListener('mouseenter', displayText);
  designBtn.addEventListener('mouseleave', hideText);

}
