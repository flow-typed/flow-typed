// @flow
import type { PayloadAction } from "redux-starter-kit";
import { describe, it } from "flow-typed-test";

opaque type Person = { name: string, id: number }

describe("PayloadAction<P, T>", () => {

  it("should pass, if used properly", () => {
    const action1: PayloadAction<number, "increment"> = { type: "increment", payload: 3 };
    const action2: PayloadAction<Person> = {
      type: "addPerson", payload: { name: "Omid", id: 1 }
    };
  });

  it("should raise an error, if payload had an invalid type", () => {

    // $ExpectError
    const action1: PayloadAction<number> = { type: "increment", payload: "3" };

    // $ExpectError
    const action2: PayloadAction<Person> = { type: "addPerson", payload: { name: "Omid" } };

  });

});
