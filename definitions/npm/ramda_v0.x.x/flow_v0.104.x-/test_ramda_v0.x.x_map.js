// @flow
import * as R from "ramda";
import { it, describe } from "flow-typed-test";

const NumberToString = (v: number): string => `${v}`;

describe("R.map()", () => {
  describe("Not read only", () => {
    it("should return Array<string>", () => {
      const ArrNumbers = Object.freeze([1, 2, 3]);

      (R.map(NumberToString, ArrNumbers): Array<string>);

      (R.map(NumberToString)(ArrNumbers): Array<string>);
    });

    it("should return Object {key: number}", () => {
      const Obj = Object.freeze({
        a: { key: 1 },
        c: { key: 2 },
        d: { key: 3 }
      });

      (R.map(R.prop("key"), Obj): { [key: string]: number, ... });

      (R.map(R.prop("key"))(Obj): { [key: string]: number, ... });
    });

    describe("{}::map(fn)", () => {
      class Index {
        ids: Array<number>;

        map<T>(fn: (e: number) => T): Array<T> {
          return this.ids.map(e => fn(e));
        }
      }

      it("should return array string", () => {
        (R.map(NumberToString, new Index()): Array<string>);

        (R.map(NumberToString)(new Index()): Array<string>);
      });

      it("raises an error when passed fn incompatible with Index map function", () => {
        const fn = (s: string): string => "";

        // $ExpectError
        (R.map(fn, new Index()): Array<string>);
      });
    });
  });

  describe("Read Only", () => {
    it("should return readonly Array", () => {
      const readOnlyArrNumbers = Object.freeze([1, 2, 3]);

      (R.map(NumberToString, readOnlyArrNumbers): $ReadOnlyArray<string>);

      (R.map(NumberToString)(readOnlyArrNumbers): $ReadOnlyArray<string>);
    });

    it("should return readonly Object", () => {
      const readOnlyObj = Object.freeze({
        a: { key: 1 },
        c: { key: 2 },
        d: { key: 3 }
      });

      (R.map(R.prop("key"), readOnlyObj): $ReadOnly<{ [key: string]: number, ... }>);

      (R.map(R.prop("key"))(readOnlyObj): $ReadOnly<{ [key: string]: number, ... }>);
    });

    describe("{}::map(fn)", () => {
      class Index {
        ids: $ReadOnlyArray<number>;

        map<T>(fn: (e: number) => T): $ReadOnlyArray<T> {
          return this.ids.map(e => fn(e));
        }
      }

      it("should return read only Array<string>", () => {
        (R.map(NumberToString, new Index()): $ReadOnlyArray<string>);

        (R.map(NumberToString)(new Index()): $ReadOnlyArray<string>);
      });

      it("raises an error when passed fn incompatible with Index map function", () => {
        const fn = (s: string): string => "";

        // $ExpectError
        (R.map(fn, new Index()): $ReadOnlyArray<string>);
      });
    });
  });
});
