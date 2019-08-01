// @flow
import { describe, it } from "flow-typed-test";
import { isEnd, END } from "redux-saga";

describe("isEnd(any) => boolean", () => {
  it("must return true when first argument is END object", () => {
    (isEnd(END): true);
  });

  it("must return false when first argument isn't END object", () => {
    (isEnd(): false);
    (isEnd({}): false);
    (isEnd(null): false);
    (isEnd(undefined): false);
  });
});
