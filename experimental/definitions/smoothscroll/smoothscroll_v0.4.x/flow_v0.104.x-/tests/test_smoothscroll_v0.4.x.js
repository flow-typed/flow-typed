// @flow

import smoothScroll from "smoothscroll";

const target = document.createElement("div");
const context = document.createElement("div");
const callback = (x: number | Element) => {};

smoothScroll(target);
smoothScroll(0);
smoothScroll(123);

// $ExpectError
smoothScroll("div");
// $ExpectError
smoothScroll(".target");

smoothScroll(target, 123);
smoothScroll(123, 456);

// $ExpectError
smoothScroll(target, "string");

smoothScroll(target, 123, callback);
smoothScroll(target, null, callback);

// $ExpectError
smoothScroll(target, 123, (x: string) => x);

smoothScroll(target, null, null, context);
smoothScroll(target, null, callback, context);
smoothScroll(target, 123, null, context);
smoothScroll(target, 123, callback, context);

// $ExpectError
smoothScroll(target, null, null, ".context");
