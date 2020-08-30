"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLeftScroll = void 0;

var initLeftScroll = function initLeftScroll() {
  var elementsToScroll = document.querySelectorAll('.js-scroll-left');

  var scrollLeft = function scrollLeft(element) {
    element.scrollLeft = element.scrollWidth;
  };

  elementsToScroll.forEach(scrollLeft);
};

exports.initLeftScroll = initLeftScroll;