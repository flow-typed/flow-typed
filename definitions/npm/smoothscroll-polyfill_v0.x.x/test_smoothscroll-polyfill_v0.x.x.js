/* @flow */
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

// $FlowExpectedError
smoothscroll.polyfill(2);
