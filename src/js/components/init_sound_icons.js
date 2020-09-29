export const initSoundIcons = () => {
  const soundIcons = document.querySelectorAll('.js-volume-icon');

  const addIconsListener = (icon) => {
    icon.addEventListener('click', (event) => {
      icon.style.pointerEvents = 'none';
      var audio = new Audio('../assets/defineaudio.m4a');
      audio.play();
      event.currentTarget.classList.add("sound-icon--active");

      audio.onended = () => {
        icon.classList.remove("sound-icon--active");
        icon.style.pointerEvents = 'all';
      };
    });
  }

  soundIcons.forEach(addIconsListener);
};

