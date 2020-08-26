"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDefineBtn = void 0;

var initDefineBtn = function initDefineBtn() {
  var defineBtn = document.querySelector('.js-define-btn');
  defineBtn.addEventListener('click', function () {
    document.querySelector('.primary-title').classList.add('expanded');
  });
};

exports.initDefineBtn = initDefineBtn;