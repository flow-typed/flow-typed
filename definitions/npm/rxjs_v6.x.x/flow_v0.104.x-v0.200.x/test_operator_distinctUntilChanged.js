// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

interface Person { name: string }
const sample: Person = { name: "Tim" };

it("should infer correctly", () => {
  const o = of(sample).pipe(distinctUntilChanged());
});

it("should accept a compare", () => {
  const o = of(sample).pipe(
    distinctUntilChanged((p1, p2) => p1.name === p2.name)
  );
});

it("should accept a keySelector", () => {
  const o = of(sample).pipe(
    distinctUntilChanged((name1, name2) => name1 === name2, p => p.name)
  );
});

it("should enforce types", () => {
  // $FlowExpectedError[incompatible-call]
  const o = of(sample).pipe(distinctUntilChanged("F00D"));
});

it("should enforce types of compare", () => {
  // $FlowExpectedError[incompatible-call]
  const o = of(sample).pipe(
    distinctUntilChanged((p1, p2) => p1.foo === p2.name)
  );
  // $FlowExpectedError[incompatible-call]
  const p = of(sample).pipe(
    distinctUntilChanged((p1, p2) => p1.name === p2.foo)
  );
});

it("should enforce types of keySelector", () => {
  // $FlowExpectedError[incompatible-call]
  const o = of(sample).pipe(
    distinctUntilChanged((name1, name2) => name1 === name2, p => p.foo)
  );
});

it("should enforce types of compare in combination with keySelector", () => {
  // $FlowExpectedError[incompatible-call]
  const o = of(sample).pipe(
    distinctUntilChanged((name1: number, name2) => name1 === name2, p => p.name)
  );
  // $FlowExpectedError[incompatible-call]
  const p = of(sample).pipe(
    distinctUntilChanged((name1, name2: number) => name1 === name2, p => p.name)
  );
});
