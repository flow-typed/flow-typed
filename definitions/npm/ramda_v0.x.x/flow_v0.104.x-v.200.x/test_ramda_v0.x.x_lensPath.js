// @flow
import R, {type Lens} from "ramda";
import { it, describe } from "flow-typed-test";

describe("R.lensPath()", () => {
  it("should except implicit input type strings only", () => {
    const path = ["a", "b"];

    (R.lensPath(path): Lens);
  });

  it("should except implicit input type numbers only", () => {
    const path = [1, 2];

    (R.lensPath(path): Lens);
  });

  it("should except implicit input type mixed", () => {
    const path = ["a", 1];

    (R.lensPath(path): Lens);
  });

  it("should except explicit number array", () => {
    const path: number[] = [1, 2];

    (R.lensPath(path): Lens);
  });

  it("should except explicit string array", () => {
    const path: string[] = ["a", "b"];

    (R.lensPath(path): Lens);
  });

  it("should except explicit mixed array", () => {
    const path: (string | number)[] = ["a", 1];

    (R.lensPath(path): Lens);
  });
});
