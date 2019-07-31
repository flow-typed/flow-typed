// @flow
import R, { filter, type RefineFilter } from "ramda";
import { it, describe } from "flow-typed-test";

describe("filter", () => {
  it("perserves the element type in the predicate and result array (number)", () => {
    const s: Array<number> = filter(x => x > 1, [1, 2]);
  });

  it("perserves the element type in the predicate and result array (number)", () => {
    const s: Array<string> = R.filter(x => x === "2", ["2", "3"]);
  });

  it("filters objects by passing the value to the predicate", () => {
    const s: { [key: string]: string, ... } = R.filter(x => x === "2", {
      a: "2",
      b: "3"
    });
  });

  it("refines the element type using the predicate", () => {
    const notNull = (x): boolean %checks => x != null;
    const ns: Array<number> = (filter: RefineFilter)(notNull, [1, 2, null]);
  });

  it("fails when type refinement is incorrect", () => {
    const isString = (x): boolean %checks => typeof x === "string";
    // $ExpectError
    const ns: Array<number> = (filter: RefineFilter)(isString, ["1", 2]);
  });

  it("fails when attempting to refine from a non $Pred predicate", () => {
    const isNumber = x => typeof x === "number";
    // $ExpectError
    const ns: Array<number> = filter(isNumber, ["1", 2]);
  });

  it("does not accept predicates missing %checks when using RefineFilter", () => {
    const isNumber = x => typeof x === "number";
    // $ExpectError
    const ns: Array<number> = (filter: RefineFilter)(isNumber, ["1", 2]);
  });

  describe("read only", () => {
    it("should return readonly Array<number>", () => {
      const readOnlyArrNumbers: $ReadOnlyArray<number> = Object.freeze([1, 2, 3]);

      const result1 = filter(x => x > 1, readOnlyArrNumbers);
      (result1: $ReadOnlyArray<number>);

      // $ExpectError
      (result1: { +[key: string]: number, ... });
      // $ExpectError
      (result1: { [key: string]: number, ... });
      // $ExpectError
      (result1: Array<number>);

      const result2 = filter(x => x > 1)(readOnlyArrNumbers);

      (result2: $ReadOnlyArray<number>);

      // $ExpectError
      (result2: { +[key: string]: number, ... });
      // $ExpectError
      (result2: { [key: string]: number, ... });
      // $ExpectError
      (result2: Array<number>);
    });

    it("should return readonly Object", () => {
      type O = {| key: number |};
      const readOnlyObj: { +[k: string]: O, ... } = Object.freeze({
        a: { key: 1 },
        c: { key: 2 },
        d: { key: 3 }
      });

      (filter(
        R.pipe(
          R.prop("key"),
          (v: number) => v === 0
        ),
        readOnlyObj
      ): $ReadOnly<{ [k: string]: O, ... }>);

      (filter(
        R.pipe(
          R.prop("key"),
          (v: number) => v === 0
        )
      )(readOnlyObj): { +[k: string]: O, ... });
    });
  });
});
