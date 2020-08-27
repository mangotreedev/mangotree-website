export const initDefineBtn = () => {
  const defineBtn = document.querySelector('.js-define-btn');

  defineBtn.addEventListener('click', (event) => {
    document.querySelector('.primary-title').classList.add('expanded');
    document.querySelector('.definition-list').classList.add('definition-list--active');
    event.currentTarget.classList.add("define-btn--disabled");
  });
};
