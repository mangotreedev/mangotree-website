export const initVideoModal = () => {
  const videoBtns = document.querySelectorAll('.fa-play-circle');
  const videoModal = document.querySelector('.js-video-modal');
  const videoCloseBtn = document.querySelector('.js-modal-close');

  if (videoBtns) {
    const addListener = (btn) => {
      btn.addEventListener('click', (event) => {
        videoModal.classList.add('video-modal__active');
        videoModal.querySelector('iframe').src = event.currentTarget.dataset.url;
      })
    }
    videoBtns.forEach(addListener);
  }

  if (videoCloseBtn) {
    videoCloseBtn.addEventListener('click', () => {
      videoModal.classList.remove('video-modal__active');
    })
  }
}

