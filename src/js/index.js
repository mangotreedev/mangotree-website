import "../css/website.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

import * as testComp from './components/test_component'

import { initDefineBtn } from "./components/init_define_btn"

testComp.testFunction();
initDefineBtn();
