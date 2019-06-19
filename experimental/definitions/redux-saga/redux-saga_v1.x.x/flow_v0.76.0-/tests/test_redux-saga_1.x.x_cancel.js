// @flow
import { describe, it } from "flow-typed-test";
import type { Task } from "redux-saga";
import { cancel } from "redux-saga/effects";

describe("cancel(task)", () => {
  describe("structure", () => {
    const c = cancel();

    it('type must be equal "CANCEL"', () => {
      (c.type: "CANCEL");
    });

    it("returned object must be read only", () => {
      // $ExpectError: read-only  property
      c.type = "anyType";
      // $ExpectError: read-only  property
      c.payload = {};
    });

    it("returned object must be exact", () => {
      // $ExpectError: exact type
      c.abc = 69;
    });
  });

  describe("passes when used properly", () => {
    it("must return self cancellation", () => {
      const selfCancel = cancel();

      (selfCancel.payload: "@@redux-saga/SELF_CANCELLATION");
    });

    it("must return task cancellation", () => {
      declare var task1: Task<string>;
      declare var task2: Task<number>;

      const c1 = cancel(task1);
      const c2 = cancel(task2);
      const c3 = cancel([task1, task2]);

      (c1.payload: typeof task1);
      (c2.payload: typeof task2);
      (c3.payload: $ReadOnlyArray<typeof task1 | typeof task2>);
    });
  });
});
