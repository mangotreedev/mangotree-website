export const initVideoModal = () => {
  const videoBtns = document.querySelectorAll('.fa-video');
  const videoModal = document.querySelector('.js-video-modal');
  const videoCloseBtn = document.querySelector('.js-modal-close');

  const addListener = (btn) => {
    btn.addEventListener('click', (event) => {
      videoModal.classList.add('video-modal__active');
      videoModal.querySelector('iframe').src = event.currentTarget.dataset.url;
    })
  }
  videoBtns.forEach(addListener);

  videoCloseBtn.addEventListener('click', () => {
    videoModal.classList.remove('video-modal__active');
  })
}

