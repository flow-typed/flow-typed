// @flow strict

import { describe, it } from "flow-typed-test";

import {
  camelize,
  camelizeKeys,
  decamelize,
  decamelizeKeys,
  depascalize,
  depascalizeKeys,
  pascalize,
  pascalizeKeys
} from "humps";

describe("tests", () => {
  it("errors", () => {
    // $ExpectError
    (camelize(42): number);
  });

  it("works", () => {
    (camelize("foo"): string);
    (pascalize("foo"): string);
    (decamelize("foo"): string);
    (depascalize("foo"): string);
    (decamelize("foo", { separator: "-" }): string);
    (depascalize("foo", { split: /(?=[A-Z0-9])/ }): string);

    (camelizeKeys({ foo: 1 }): { [string]: mixed, ... });
    (pascalizeKeys({ foo: 1 }): { [string]: mixed, ... });
    (decamelizeKeys({ foo: 1 }): { [string]: mixed, ... });
    (depascalizeKeys({ foo: 1 }): { [string]: mixed, ... });
  });
});
