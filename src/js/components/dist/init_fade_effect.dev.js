"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFadeEffect = void 0;

var initFadeEffect = function initFadeEffect() {
  var scrollHandler = function scrollHandler() {
    var margin = innerHeight / 2;
    var angleDown = document.querySelector(".js-angle-down");
    var angleDownHeight = angleDown.getBoundingClientRect().height;
    var newOpacity = (margin - scrollY) / (margin + angleDownHeight);
    angleDown.style.opacity = newOpacity;
    if (newOpacity > 1) return false;
  };

  document.addEventListener('scroll', scrollHandler);
};

exports.initFadeEffect = initFadeEffect;