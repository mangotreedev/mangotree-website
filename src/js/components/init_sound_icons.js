export const initSoundIcons = () => {
  const soundIcons = document.querySelectorAll('.js-volume-icon');

  const addIconsListener = (icon) => {
    icon.addEventListener('click', (event) => {
      var audio = new Audio('https://www.kozco.com/tech/piano2.wav');
      audio.play();
      event.currentTarget.classList.add("sound-icon--active");

      audio.onended = () => { icon.classList.remove("sound-icon--active") };

      const randomNum = (max, min) => Math.random() * (max - min) + min;
      var logo = document.querySelector(".js-shake-logo");
      var [count, limit] = [0, 15];

      function Tween() {
        if (++count > limit) return;

        TweenLite.to(logo, 0.15, {
          x: randomNum(-10, 10),
          y: randomNum(-10, 10),
          scale: randomNum(1.1, 0.9),
          rotation: randomNum(-10, 10),
          ease: Sine.easeInOut,
          onComplete: Tween
        })
      };

      Tween();
    });
  }

  soundIcons.forEach(addIconsListener);
};

