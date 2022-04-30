// @flow

import { extract, parse, stringify } from "query-string";

extract("?test");

// $FlowExpectedError[incompatible-call]: should be a string
extract({});

parse("test");

parse("test", { arrayFormat: "bracket" });

// $FlowExpectedError[prop-missing]: strict is not a parse option
parse("test", { strict: true });

// $FlowExpectedError[incompatible-call]: should be a string
parse({ test: null });

stringify({ test: null });

stringify({ test: null }, { strict: true });

// $FlowExpectedError[incompatible-call]: should be an object
stringify("test");

// $FlowExpectedError[prop-missing]: true is not a stringify option
stringify({ test: null }, { test: true });
