export const initDefineBtn = () => {
  const defineBtn = document.querySelector('.js-define-btn');

  defineBtn.addEventListener('click', () => {
    document.querySelector('.primary-title').classList.add('expanded');
  });
};
