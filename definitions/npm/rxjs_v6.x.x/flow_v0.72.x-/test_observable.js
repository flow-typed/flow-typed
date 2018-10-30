// @flow

import { describe, it } from "flow-typed-test";
import { Observable, of } from "rxjs";
import { mapTo } from "rxjs/operators";

declare function a<I: string, O: string>(
  output: O
): rxjs$OperatorFunction<I, O>;

describe("pipe", () => {
  it("should infer for no arguments", () => {
    const o = of("foo").pipe();
  });

  it("should infer for 1 argument", () => {
    const o = of("foo").pipe(a("1"));
  });

  it("should infer for 2 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2")
    );
  });

  it("should infer for 3 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3")
    );
  });

  it("should infer for 4 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4")
    );
  });

  it("should infer for 5 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4"),
      a("5")
    );
  });

  it("should infer for 6 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4"),
      a("5"),
      a("6")
    );
  });

  it("should infer for 7 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4"),
      a("5"),
      a("6"),
      a("7")
    );
  });

  it("should infer for 8 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4"),
      a("5"),
      a("6"),
      a("7"),
      a("8")
    );
  });

  it("should infer for 9 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4"),
      a("5"),
      a("6"),
      a("7"),
      a("8"),
      a("9")
    );
  });

  it("should infer {} for more than 9 arguments", () => {
    const o = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4"),
      a("5"),
      a("6"),
      a("7"),
      a("8"),
      a("9"),
      a("10")
    );
  });

  it("should require a type assertion for more than 9 arguments", () => {
    // $ExpectError
    const o: Observable<"10"> = of("foo").pipe(
      a("1"),
      a("2"),
      a("3"),
      a("4"),
      a("5"),
      a("6"),
      a("7"),
      a("8"),
      a("9"),
      a("10")
    );
  });

  it("should support operators that return generics", () => {
    const customOperator = () => (a: Observable<*>) => a;
    const o = of("foo").pipe(customOperator());
  });
});
