// @flow

import StoryRouter from "storybook-router";

function linkTo(kind, story) {
  return (...args) => {};
}

StoryRouter();

StoryRouter({}, { autoRoute: false });

StoryRouter({ "/about": linkTo }, { initialEntry: ["/"], autoRoute: false });

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
