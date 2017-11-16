// @flow

import { parse, stringify, formats } from "qs";

function noop() {}

parse("test");

// $ExpectError: should be a string
parse({});

parse("test");

parse("test", {
  allowPrototypes: true,
  arrayLimit: 5,
  decoder: noop,
  delimiter: "/",
  depth: 10,
  parameterLimit: 15,
  plainObjects: true,
  strictNullHandling: true,
  ignoreQueryPrefix: true,
  parseArrays: true,
  allowDots: true
});

const obj = { test: null };

stringify(obj);

stringify([1, 2, "test"]);

stringify(obj, {
  encoder: noop,
  delimiter: "/",
  strictNullHandling: true,
  skipNulls: true,
  encode: true,
  sort: noop,
  allowDots: true,
  serializeDate: noop,
  encodeValuesOnly: true,
  format: "/",
  addQueryPrefix: true
});

stringify(obj, { arrayFormat: "brackets" });
stringify(obj, { arrayFormat: "indices" });
stringify(obj, { arrayFormat: "repeat" });

// $ExpectError: arrayFormat is not an enum value
stringify(obj, { arrayFormat: false });
// $ExpectError: arrayFormat is not an enum value
stringify(obj, { arrayFormat: "test" });

// $ExpectError: should be an object
stringify("test");
