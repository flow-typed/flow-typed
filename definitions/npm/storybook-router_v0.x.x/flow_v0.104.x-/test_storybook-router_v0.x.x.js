// @flow

import { describe, it } from "flow-typed-test";
import React from "react";

// $ExpectError
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-router";

function linkTo(kind, story) {
  return (...args) => {};
}

describe("The `StoryRouter` decorator", () => {
  it("should validate on default usage", () => {
    storiesOf("", module)
      .addDecorator(StoryRouter())
      .add("", () => <div />);
  });

  it("should accept valid options", () => {
    StoryRouter({}, { autoRoute: false });

    StoryRouter(
      { "/about": linkTo },
      { initialEntry: ["/"], autoRoute: false }
    );

    StoryRouter({
      "/about": linkTo
    });

    StoryRouter({ "/": linkTo }, { initialEntry: ["/about"] });

    StoryRouter(
      {},
      { getUserConfirmation: (message, cb) => cb(window.confirm(message)) }
    );

    StoryRouter(
      {},
      {
        initialEntries: [
          {
            pathname: "string",
            search: "string"
          }
        ]
      }
    );

    StoryRouter({}, { getUserConfirmation: ("string", confirmed => {}) });
  });

  it("should error on invalid options", () => {
    // $ExpectError
    StoryRouter(false);

    // $ExpectError
    StoryRouter("string");

    // $ExpectError
    StoryRouter({}, false);

    // $ExpectError
    StoryRouter({}, { autoRoute: "string" });

    // $ExpectError
    StoryRouter({}, { initialEntry: "string" });

    // $ExpectError
    StoryRouter({}, { initialEntries: "string" });

    // $ExpectError
    StoryRouter({}, { keyLength: "string" });
  });
});
