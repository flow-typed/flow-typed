// @flow

import { describe, it } from "flow-typed-test";
import React from "react";

// $ExpectError
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";

describe("The `host` decorator", () => {
  it("should validate on default usage", () => {
    storiesOf("button", module)
      .addDecorator(host({}))
      .add("", () => <div />);
  });

  it("should accept valid options", () => {
    host({
      mobXDevTools: true,
      title: "",
      hr: true,
      align: "left",
      height: "",
      width: "",
      background: true,
      backdrop: true,
      cropMarks: true,
      border: true,
      padding: 123
    });
  });

  it("should error on invalid options", () => {
    // $ExpectError
    host({
      title: 123
    });
  });

  it("should error on unknown options", () => {
    // $ExpectError
    host({
      foobar: ""
    });
  });
});
