"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSoundIcons = void 0;

var initSoundIcons = function initSoundIcons() {
  var soundIcons = document.querySelectorAll('.js-volume-icon');

  var addIconsListener = function addIconsListener(icon) {
    icon.addEventListener('click', function (event) {
      var audio = new Audio('https://www.kozco.com/tech/piano2.wav');
      audio.play();
      event.currentTarget.classList.add("sound-icon--active");

      audio.onended = function () {
        icon.classList.remove("sound-icon--active");
      };
    });
  };

  soundIcons.forEach(addIconsListener);
};

exports.initSoundIcons = initSoundIcons;