import "../css/website.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

import { initDefineBtn } from "./components/init_define_btn";
import { initSoundIcons } from "./components/init_sound_icons";
import { initFadeEffect } from "./components/init_fade_effect";
import { initNavbar } from "./components/init_navbar";
import { initScheduleBtn } from "./components/init_schedule_btn";
import { initDrawingTrigger } from "./components/init_drawing_trigger";
import { initLeftScroll } from "./components/init_left_scroll";
import { initKonamiCode } from "./components/init_konami_code"
import * as teamTransition from "./components/init_team_transitions";

initScheduleBtn();
initDrawingTrigger();
initDefineBtn();
initSoundIcons();
initFadeEffect();
initNavbar();
initLeftScroll();
initKonamiCode();

//Bundled team transitions for browser
teamTransition.oneToTwo();
teamTransition.twoToThree();
teamTransition.threeToOne();
