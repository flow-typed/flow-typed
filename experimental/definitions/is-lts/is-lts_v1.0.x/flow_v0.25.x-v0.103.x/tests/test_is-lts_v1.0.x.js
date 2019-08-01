/* @flow */

const isLts = require("is-lts");

isLts();

// $ExpectError
isLts().length;

// $ExpectError
isLts() * 2;
