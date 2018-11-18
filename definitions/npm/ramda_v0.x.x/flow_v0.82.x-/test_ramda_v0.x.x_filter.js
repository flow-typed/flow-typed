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
    const s: { [key: string]: string } = R.filter(x => x === "2", {
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

  describe("R.filter(fn, { filter(fn): boolean })", () => {
    class SomeFilterableClass<T: Array<*> | $ReadOnlyArray<*>> {
      values: T;

      constructor(v: T) {
        this.values = v;
      }

      filter(fn: number => boolean): T {
        return this.values.filter(fn);
      }
    }

    describe("not read only", () => {
      const ListNumbers = new SomeFilterableClass([1, 2, 3]);

      it("should return Array<number>", () => {
        const fn = (v: number) => v % 2 === 0;

        (R.filter(fn, ListNumbers): Array<number>);
        (R.filter(fn)(ListNumbers): Array<number>);
      });

      it("raises an error when fn argument type incompatible with filter function argument", () => {
        const fn = (s: string): boolean => s === "";

        // $ExpectError
        (R.filter(fn, ListNumbers): Array<number>);

        // $ExpectError
        (R.filter(fn)(ListNumbers): Array<number>);
      });
    });

    describe("read only", () => {
      const ReadOnlyListNumbers = new SomeFilterableClass(Object.freeze([1, 2, 3]));

      it("should return Read Only Array<number>", () => {
        const fn = (v: number) => v % 2 === 0;

        (R.filter(fn, ReadOnlyListNumbers): $ReadOnlyArray<number>);
        (R.filter(fn)(ReadOnlyListNumbers): $ReadOnlyArray<number>);
      });

      it("raises an error when fn argument type incompatible with filter function argument", () => {
        const fn = (s: string): boolean => s === "";

        // $ExpectError
        (R.filter(fn, ReadOnlyListNumbers): $ReadOnlyArray<number>);

        // $ExpectError
        (R.filter(fn)(ReadOnlyListNumbers): $ReadOnlyArray<number>);
      });
    });
  });
});
