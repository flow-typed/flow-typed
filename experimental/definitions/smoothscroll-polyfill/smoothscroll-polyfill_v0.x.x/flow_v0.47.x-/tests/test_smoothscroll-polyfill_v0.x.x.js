/* @flow */
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

// $ExpectError
smoothscroll.polyfill(2);
