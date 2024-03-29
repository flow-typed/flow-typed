// @flow
import { describe, it } from "flow-typed-test";
import { END } from "redux-saga";

describe("END", () => {
  it("must import END object with type property", () => {
    (END.type: "@@redux-saga/CHANNEL_END");
  });

  it("property 'type' must be read-only", () => {
    // $FlowExpectedError[cannot-write] - type is read-only
    END.type = "Mur Amur";
  });

  it("object END must be exact", () => {
    // $FlowExpectedError[prop-missing] - exact type
    END.abc = "Mur Amur";
  });
});
