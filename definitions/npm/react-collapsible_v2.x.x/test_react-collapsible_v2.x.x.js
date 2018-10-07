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
    it("trigger prop is missing", () => {
      // $ExpectError
      var error = (
        <Collapsible>
          <p>I have no trigger prop</p>
        </Collapsible>
      );
    });
    it("overflowWhenOpen prop has the wrong value", () => {
      // $ExpectError
      var error = <Collapsible trigger="Click me" overflowWhenOpen="cool" />;
    });
  });
});
