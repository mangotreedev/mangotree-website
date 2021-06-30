import "../css/website.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

import { initDefineBtn } from "./components/init_define_btn";
import { initSoundIcons } from "./components/init_sound_icons";
import { initFadeEffect } from "./components/init_fade_effect";
import { initNavbar } from "./components/init_navbar";
import { initDrawingTrigger } from "./components/init_drawing_trigger";
import { initLeftScroll } from "./components/init_left_scroll";
import { initKonamiCode } from "./components/init_konami_code"
import * as teamTransition from "./components/init_team_transitions";
import { initLandingTransitions } from "./components/init_landing_transitions";
import { initHideNavbar } from "./components/init_hide_navbar";
import { initPortfolioParallax } from "./components/init_portfolio_parallax";
import { initDesignText } from "./components/init_design_text";
import { initSkillsFloat } from "./components/init_skills_float";
import { initVideoModal } from "./components/init_video_modal";
import { initShareDropdown } from "./components/init_share_dropdown";

// Set up of singular scroll magic controller
var scrollMagicController = new ScrollMagic.Controller();

initDrawingTrigger();
initDefineBtn();
initSoundIcons();
initFadeEffect();
initNavbar();
initLeftScroll();
initKonamiCode();
initLandingTransitions();
initHideNavbar();
initVideoModal();
initShareDropdown();

//Bundled team transitions for browser
teamTransition.oneToTwo();
teamTransition.twoToThree();
teamTransition.threeToOne();

initSkillsFloat();
initDesignText();

initPortfolioParallax(scrollMagicController);


