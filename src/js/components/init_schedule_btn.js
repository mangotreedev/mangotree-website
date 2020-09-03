export const initScheduleBtn = () => {
  const scheduleBtn = document.querySelector('.js-schedule-btn');
  const scheduleBtnBrowser = document.querySelector('.js-schedule-btn-browser');

  scheduleBtn.addEventListener('click', () => {
    document.querySelector('.typeform-container').classList.toggle('display-block');
  });

  scheduleBtnBrowser.addEventListener('click', () => {
    document.querySelector('.typeform-container-browser').classList.toggle('display-block');
  });
};
