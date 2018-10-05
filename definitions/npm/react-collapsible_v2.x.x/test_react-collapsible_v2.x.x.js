// @flow
import React from "react";
import Collapsible from "react-collapsible";
import { describe, it } from "flow-typed-test";

describe("react-collapsible", () => {
  it("should render", () => {
    var component = (
      <Collapsible trigger="Click me">
        <p>Children</p>
      </Collapsible>
    );
  });

  describe("should throw an error when", () => {
    it("overflowWhenOpen prop has the wrong value", () => {
      // $ExpectError
      var error = <Collapsible overflowWhenOpen="cool" />;
    });
  });
});
