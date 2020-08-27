export const initFadeEffect = () => {
  const scrollHandler = () => {
    var margin = innerHeight / 2;
    var angleDown = document.querySelector(".js-angle-down");
    var angleDownHeight = angleDown.getBoundingClientRect().height;
    var newOpacity = (margin - scrollY) / (margin + angleDownHeight);
    angleDown.style.opacity = newOpacity;
    if (newOpacity > 1) return false;
  }

  document.addEventListener('scroll', scrollHandler);
}
