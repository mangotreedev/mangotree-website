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

    let drawing = document.querySelector('.js-drawing');
    if (drawing.offsetTop === 0) drawing = document.querySelector('.js-drawing-browser');
    const path = drawing.querySelector('.js-path');

    const startDrawAt = (window.scrollY + window.innerHeight);
    const isHalfShown = startDrawAt > drawing.offsetTop;

    if (isHalfShown) {
      path.classList.add('drawing--animate');
    } else {
      path.classList.remove('drawing--animate');
    }
  }

  window.addEventListener('scroll', debounce(checkDraw));
};
