"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNavbar = void 0;

var initNavbar = function initNavbar() {
  // TODO: Disable scrolling when navbar is open
  var navbarIcon = document.querySelector('.js-navbar-icon');
  navbarIcon.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('burger-icon--active');
    document.querySelector('.navbar-menu').classList.toggle('navbar-menu--active');
  });
  var nabarLinks = document.querySelectorAll('.js-links-list li');

  var closeNavbar = function closeNavbar(link) {
    link.addEventListener('click', function () {
      document.querySelector('.navbar-menu').classList.remove('navbar-menu--active');
      navbarIcon.classList.toggle('burger-icon--active');
    });
  };

  nabarLinks.forEach(closeNavbar);
};

exports.initNavbar = initNavbar;