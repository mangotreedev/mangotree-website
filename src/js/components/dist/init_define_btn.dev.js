"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDefineBtn = void 0;

var initDefineBtn = function initDefineBtn() {
  var defineBtn = document.querySelector('.js-define-btn');
  defineBtn.addEventListener('click', function (event) {
    document.querySelector('.primary-title').classList.add('expanded');
    document.querySelector('.definition-list').classList.add('definition-list--active');
    event.currentTarget.classList.add("define-btn--disabled");
  });
};

exports.initDefineBtn = initDefineBtn;