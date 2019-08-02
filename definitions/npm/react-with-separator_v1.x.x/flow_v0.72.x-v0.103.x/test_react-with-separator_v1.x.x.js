import React from "react";
import { describe, it } from "flow-typed-test";
import WithSeparator from "react-with-separator";

describe("react-with-separator", () => {
  describe("default export WithSeparator", () => {
    describe("Valid usage", () => {
      it("Accepts a string as a separator", () => {
        <WithSeparator separator="|" />;
      });

      it("Accepts a React Element as a `separator`", () => {
        <WithSeparator separator={<div />} />;
      });

      it("Accepts all defined props", () => {
        <WithSeparator separator="|" leading trailing>
          {"Hello"}
        </WithSeparator>;
      });
    });

    describe("Invalid usage", () => {
      it("Rejects usage without `separator` prop", () => {
        // $ExpectError
        <WithSeparator />;
      });

      it("Rejects usage with invalid `Object` `separator` prop", () => {
        // $ExpectError
        <WithSeparator separator={{}} />;
      });
      it("Rejects usage with invalid `null` `separator` prop", () => {
        // $ExpectError
        <WithSeparator separator={null} />;
      });
      it("Rejects usage with invalid `void` `separator` prop", () => {
        // $ExpectError
        <WithSeparator separator={void 0} />;
      });
      it(" Rejects usage with invalid `boolean` `separator` prop", () => {
        // $ExpectError
        <WithSeparator separator={true} />;
      });
      it("Rejects usage with invalid `children` prop", () => {
        // $ExpectError
        <WithSeparator separator="|" children={{}} />;
      });
      it("Rejects usage with invalid `leading` prop", () => {
        // $ExpectError
        <WithSeparator separator="|" leading={1} />;
      });
      it("Rejects usage with invalid `trailing` prop", () => {
        // $ExpectError
        <WithSeparator separator="|" trailing={1} />;
      });
    });
  });
});
