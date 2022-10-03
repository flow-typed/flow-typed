// @flow
import { describe, test } from "flow-typed-test";
import { extract, parse, stringify } from "query-string";

describe('query-string', () => {
  test('extract', () => {
    extract("?test");

    // $FlowExpectedError[incompatible-call]: should be a string
    extract({});
  });

  test('parse', () => {
    parse("test");

    parse("test", { arrayFormat: "bracket" });

    // $FlowExpectedError[prop-missing]: strict is not a parse option
    parse("test", { strict: true });

    // $FlowExpectedError[incompatible-call]: should be a string
    parse({ test: null });
  });

  test('stringify', () => {
    stringify({ test: null });

    stringify({ test: null }, { strict: true });

    // $FlowExpectedError[incompatible-call]: should be an object
    stringify("test");

    // $FlowExpectedError[prop-missing]: true is not a stringify option
    stringify({ test: null }, { test: true });
  });

  test('parse result passed into stringify', () => {
    const query = parse('?hello=world');
    const search = stringify(query);
  });
});

