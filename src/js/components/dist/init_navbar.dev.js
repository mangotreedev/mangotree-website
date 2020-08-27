"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNavbar = void 0;

var initNavbar = function initNavbar() {
  var navbarIcon = document.querySelector('.js-navbar-icon');
  navbarIcon.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('burger-icon--active');
  });
};

exports.initNavbar = initNavbar;