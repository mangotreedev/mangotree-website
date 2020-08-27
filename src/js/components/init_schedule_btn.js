export const initScheduleBtn = () => {
  const scheduleBtn = document.querySelector('.js-schedule-btn');

  scheduleBtn.addEventListener('click', () => {
    document.getElementById('typeform-full').classList.toggle('display-block');
  });
};
