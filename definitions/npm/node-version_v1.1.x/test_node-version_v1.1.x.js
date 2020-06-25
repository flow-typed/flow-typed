/* @flow */

const version = require("node-version");

Object.keys(version);
version.original.length;
version.short.length;
version.long.length;
version.major.length;
version.minor.length;
version.build.length;

// $FlowExpectedError
version.foo;

// $FlowExpectedError
version.original * 2;

// $FlowExpectedError
version.short * 2;

// $FlowExpectedError
version.long * 2;

// $FlowExpectedError
version.major * 2;

// $FlowExpectedError
version.minor * 2;

// $FlowExpectedError
version.build * 2;
