// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

const sample = { name: "foobar", num: 42 };

it("should infer correctly", () => {
  const o = of(sample).pipe(distinctUntilKeyChanged("name"));
});

it("should infer correctly with compare", () => {
  const o = of(sample).pipe(distinctUntilKeyChanged("name", () => true));
});

it("should enforce key set", () => {
  // $FlowExpectedError
  const o = of(sample).pipe(distinctUntilKeyChanged("something"));
});

it("should enforce key set with compare", () => {
  // $FlowExpectedError
  const o = of(sample).pipe(distinctUntilKeyChanged("something", () => true));
});

it("should enforce compare's type", () => {
  // $FlowExpectedError
  const o = of(sample).pipe(distinctUntilKeyChanged("name", (a: number, b: number) => true));
});

it("should enforce key set and compare's type", () => {
  // $FlowExpectedError
  const o = of(sample).pipe(distinctUntilKeyChanged("something", (a: number, b: number) => true));
});
