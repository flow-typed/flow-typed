// @flow

import { extract, parse, stringify } from "query-string";

extract("?test");

// $FlowExpectedError: should be a string
extract({});

parse("test");

parse("test", { arrayFormat: "bracket" });

// $FlowExpectedError: strict is not a parse option
parse("test", { strict: true });

// $FlowExpectedError: should be a string
parse({ test: null });

stringify({ test: null });

stringify({ test: null }, { strict: true });

// $FlowExpectedError: should be an object
stringify("test");

// $FlowExpectedError: true is not a stringify option
stringify({ test: null }, { test: true });
