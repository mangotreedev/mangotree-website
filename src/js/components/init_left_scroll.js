export const initLeftScroll = () => {
  const elementsToScroll = document.querySelectorAll('.js-scroll-left');
  const scrollLeft = (element) => {
    element.scrollLeft = element.scrollWidth;
  }

  elementsToScroll.forEach(scrollLeft);
}
