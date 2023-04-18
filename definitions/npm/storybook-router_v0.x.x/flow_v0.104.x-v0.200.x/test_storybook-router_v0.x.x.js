// @flow

import { describe, it } from "flow-typed-test";
import React from "react";

// $FlowExpectedError
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
    // $FlowExpectedError
    StoryRouter(false);

    // $FlowExpectedError
    StoryRouter("string");

    // $FlowExpectedError
    StoryRouter({}, false);

    // $FlowExpectedError
    StoryRouter({}, { autoRoute: "string" });

    // $FlowExpectedError
    StoryRouter({}, { initialEntry: "string" });

    // $FlowExpectedError
    StoryRouter({}, { initialEntries: "string" });

    // $FlowExpectedError
    StoryRouter({}, { keyLength: "string" });
  });
});
