"use strict";

require("../css/website.scss");

require("core-js/stable");

require("regenerator-runtime/runtime");

var _init_define_btn = require("./components/init_define_btn");

var _init_sound_icons = require("./components/init_sound_icons");

var _init_fade_effect = require("./components/init_fade_effect");

var _init_navbar = require("./components/init_navbar");

(0, _init_define_btn.initDefineBtn)();
(0, _init_sound_icons.initSoundIcons)();
(0, _init_fade_effect.initFadeEffect)();
(0, _init_navbar.initNavbar)();