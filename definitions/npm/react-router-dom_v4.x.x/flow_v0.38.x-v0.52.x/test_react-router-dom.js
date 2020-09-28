import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  matchPath,
  type Match,
  type RouterHistory
} from "react-router-dom";

// BrowserRouter
<BrowserRouter>
  <div />
</BrowserRouter>;
<BrowserRouter
  basename="/base"
  forceRefresh
  getUserConfirmation={(message, callback) => {}}
  keyLength={3}
>
  <div />
</BrowserRouter>;

// $FlowExpectedError
<BrowserRouter basename={{}} />;

// HashRouter
<HashRouter>
  <div />
</HashRouter>;
<HashRouter
  basename="/base"
  getUserConfirmation={(message, callback) => {}}
  hashType="noslash"
>
  <div />
</HashRouter>;

// $FlowExpectedError
<HashRouter hashType="magic" />;

// Link
<Link to="/about">About</Link>;
<Link replace to="/about">
  About
</Link>;
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
>
  About
</Link>;

// $FlowExpectedError
<Link to={[]} />;

// NavLink
<NavLink to="/about">About</NavLink>;
<NavLink
  to="/about"
  activeClassName="active"
  className="link"
  activeStyle={{ color: "red" }}
  style={{ color: "blue" }}
  isActive={(match, location) => true}
  strict
  exact
>
  About
</NavLink>;
<NavLink
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
>
  About
</NavLink>;

// $FlowExpectedError
<NavLink />;

const IncorrectHistoryBlockUsage = (history: RouterHistory) => {
  // Wrong arguments here
  // $FlowExpectedError
  history.block(false);

  // These are valid
  history.block('Are you sure you want to leave this page?');
  history.block((location, action) => {
    return 'Are you sure you want to leave this page?';
  });
};

// matchPath
const match: null | Match = matchPath("/the/pathname", {
  path: "/the/:dynamicId",
  exact: true,
  strict: false
});
const match2: null | Match = matchPath("/the/pathname", {
  path: "/the/:dynamicId"
});
const match3: null | Match = matchPath("/the/pathname");

// $FlowExpectedError
matchPath();
// $FlowExpectedError
const matchError: string = matchPath("/the/pathname", {
  path: "the/:dynamicId"
});
