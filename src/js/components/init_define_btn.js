export const initDefineBtn = () => {
  const defineBtns = document.querySelectorAll('.js-define-btn');

  const expandTitle = (title) => {
    title.classList.add('expanded');
  }

  const showDefinition = (list) => {
    list.classList.add('expanded');
    list.classList.add('definition-list--active');
  }

  const displayLogo = (logo) => {
    logo.classList.add('logo--active');
  }

  const addListener = (button) => {
    button.addEventListener('click', (event) => {
      document.querySelectorAll('.primary-title').forEach(expandTitle);
      document.querySelectorAll('.definition-list').forEach(showDefinition);

      document.querySelectorAll('.landing-page__right img').forEach(displayLogo);

      event.currentTarget.classList.add("define-btn--disabled");
    });
  }

  defineBtns.forEach(addListener);
};
