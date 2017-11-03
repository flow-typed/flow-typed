/* @flow */

const version = require("node-version");

Object.keys(version);
version.original.length;
version.short.length;
version.long.length;
version.major.length;
version.minor.length;
version.build.length;

// $ExpectError
version.foo;

// $ExpectError
version.original * 2;

// $ExpectError
version.short * 2;

// $ExpectError
version.long * 2;

// $ExpectError
version.major * 2;

// $ExpectError
version.minor * 2;

// $ExpectError
version.build * 2;
