// @flow
import { describe, it } from "flow-typed-test";
import { type Task } from "redux-saga";
import { join } from "redux-saga/effects";

describe("join effect", () => {
  describe("structure", () => {
    declare var t: Task<number>;
    const c = join(t);

    it('type must be equal "JOIN"', () => {
      (c.type: "JOIN");
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

  it("must passes when used properly", () => {
    declare var task1: Task<string>;
    declare var task2: Task<number>;

    const arrTasks = [task1, task2];
    const j1 = join(task1);
    const j2 = join(arrTasks);

    (j1.payload: typeof task1);
    (j2.payload: typeof arrTasks);
  });
});
