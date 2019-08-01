// @flow

import { extract, parse, stringify } from "query-string";

extract("?test");

// $ExpectError: should be a string
extract({});

parse("test");

parse("test", { arrayFormat: "bracket" });

// $ExpectError: strict is not a parse option
parse("test", { strict: true });

// $ExpectError: should be a string
parse({ test: null });

stringify({ test: null });

stringify({ test: null }, { strict: true });

// $ExpectError: should be an object
stringify("test");

// $ExpectError: true is not a stringify option
stringify({ test: null }, { test: true });
