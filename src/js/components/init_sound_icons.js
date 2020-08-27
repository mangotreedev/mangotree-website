export const initSoundIcons = () => {
  const soundIcons = document.querySelectorAll('.js-volume-icon');

  const addIconsListener = (icon) => {
    icon.addEventListener('click', (event) => {
      var audio = new Audio('https://www.kozco.com/tech/piano2.wav');
      audio.play();
      event.currentTarget.classList.add("sound-icon--active");

      audio.onended = () => {
        icon.classList.remove("sound-icon--active");
      }
    });
  }

  soundIcons.forEach(addIconsListener);
};

