export const initScheduleBtn = () => {
  const scheduleBtn = document.querySelector('.js-schedule-btn');

  scheduleBtn.addEventListener('click', () => {
    document.querySelector('.typeform-container').classList.toggle('display-block');
  });
};
