export const initDrawingTrigger = () => {
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const checkDraw = (e) => {
    const drawing = document.querySelector('.js-drawing');
    const path = document.querySelector('.js-path');

    const startDrawAt = (window.scrollY + window.innerHeight) - drawing.scrollHeight / 2;
    const drawingBottom = drawing.offsetTop + drawing.scrollHeight;

    const isHalfShown = startDrawAt > drawing.offsetTop;
    const isNotScrolledPast = window.scrollY < drawingBottom;

    if (isHalfShown && isNotScrolledPast) {
      path.classList.add('drawing--animate');
    } else {
      path.classList.remove('drawing--animate');
    }
  }

  window.addEventListener('scroll', debounce(checkDraw));
};
