"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSoundIcons = void 0;

var initSoundIcons = function initSoundIcons() {
  var soundIcon = document.querySelector('.js-volume-icon');
  soundIcon.addEventListener('click', function (event) {
    var audio = new Audio('https://www.kozco.com/tech/piano2.wav');
    audio.play();
    event.currentTarget.classList.add("sound-icon--active");

    audio.onended = function () {
      soundIcon.classList.remove("sound-icon--active");
    };
  });
};

exports.initSoundIcons = initSoundIcons;