// @flow

import { extract, parse, stringify, parseUrl } from "query-string";

extract("?test");

// $ExpectError: should be a string
extract({});

parse("test");

parse("test", { arrayFormat: "bracket" });

// $ExpectError: strict is not a parse option
parse("test", { strict: true });

// $ExpectError: should be a string
parse({ test: null });

(parse("foo").foo: null | string | Array<string>);

// $ExpectError: result props cannot be undefined
(parse("foo").foo: void);

stringify({ test: null });

stringify({ test: null }, { strict: true });

// $ExpectError: should be an object
stringify("test");

// $ExpectError: true is not a stringify option
stringify({ test: null }, { test: true });

parseUrl("test");

parseUrl("test", { arrayFormat: "bracket" });

// $ExpectError: strict is not a parse option
parseUrl("test", { strict: true });

// $ExpectError: should be a string
parseUrl({ test: null });
