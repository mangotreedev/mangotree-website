export const initSoundIcons = () => {
  const soundIcon = document.querySelector('.primary-title i');

  soundIcon.addEventListener('click', (event) => {
    var audio = new Audio('https://www.kozco.com/tech/piano2.wav');
    audio.play();
    event.currentTarget.classList.add("sound-icon--active");

    audio.onended = () => {
      soundIcon.classList.remove("sound-icon--active");
    }
  });
};

