import "../css/website.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

import { initDefineBtn } from "./components/init_define_btn";
import { initSoundIcons } from "./components/init_sound_icons";
import { initFadeEffect } from "./components/init_fade_effect";
import { initNavbar } from "./components/init_navbar";
import { initScheduleBtn } from "./components/init_schedule_btn";
import { initDrawingTrigger } from "./components/init_drawing_trigger";

initScheduleBtn();
initDrawingTrigger();
initDefineBtn();
initSoundIcons();
initFadeEffect();
initNavbar();

