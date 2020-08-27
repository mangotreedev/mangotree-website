import "../css/website.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

// import * as testComp from './components/test_component'

import { initDefineBtn } from "./components/init_define_btn";
import { initScheduleBtn } from "./components/init_schedule_btn";
import { initDrawingTrigger } from "./components/init_drawing_trigger";

//testComp.testFunction();
initDefineBtn();
initScheduleBtn();
initDrawingTrigger();
