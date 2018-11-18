// @flow
import * as R from "ramda";
import { it, describe } from "flow-typed-test";

const NumberToString = (v: number): string => `${v}`;

describe("R.map()", () => {
  describe("Read Only", () => {
    it("should return readonly Array", () => {
      const readOnlyArrNumbers: $ReadOnlyArray<number> = [1, 2, 3];

      (R.map(NumberToString, readOnlyArrNumbers): $ReadOnlyArray<string>);

      (R.map(NumberToString)(readOnlyArrNumbers): $ReadOnlyArray<string>);
    });

    it("should return readonly Object", () => {
      const readOnlyArrNumbers: $ReadOnlyArray<number> = [1, 2, 3];

      (R.map(NumberToString, readOnlyArrNumbers): $ReadOnlyArray<string>);

      (R.map(NumberToString)(readOnlyArrNumbers): $ReadOnlyArray<string>);
    });
  });
});
