/* @flow */

const isLts = require("is-lts");

isLts();

// $FlowExpectedError
isLts().length;

// $FlowExpectedError
isLts() * 2;
