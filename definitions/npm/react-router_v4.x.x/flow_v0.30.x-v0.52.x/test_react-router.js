// @flow
import React from "react";
import {
  StaticRouter,
  MemoryRouter,
  Router,
  Prompt,
  Redirect,
  Route,
  Switch,
  withRouter,
  matchPath
} from "react-router";
import type {
  Location,
  Match,
  ContextRouter,
  RouterHistory
} from "react-router";

// Location
var locationOK: Location = {
  pathname: "/path",
  search: "?search",
  hash: "#hash",
  state: null,
  key: "key"
};

// $FlowExpectedError
var locationError: Location = {};

// StaticRouter
<StaticRouter context={{}}>
  <div />
</StaticRouter>;
<StaticRouter location="/" context={{}} basename="/foo/">
  <div />
</StaticRouter>;

// $FlowExpectedError
<StaticRouter />;

// MemoryRouter
<MemoryRouter>
  <div />
</MemoryRouter>;
<MemoryRouter
  initialEntries={["/one", "/two", { pathname: "/three" }]}
  initialIndex={1}
  getUserConfirmation={(
    message: string,
    callback: (confirmed: boolean) => void
  ): void => {}}
  keyLength={3}
>
  <div />
</MemoryRouter>;

// $FlowExpectedError
<MemoryRouter initialEntries={""} />;

// Router
var history: History;
<Router history={history}>
  <div />
</Router>;

// $FlowExpectedError
<Router>
  <div />
</Router>;

// Prompt
<Prompt message="ok?" when={true} />;
<Prompt message={location => "ok?"} />;
<Prompt message={location => true} />;

// $FlowExpectedError
<Prompt />;

// Redirect
<Redirect to="/foo" push />;
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=foo",
    state: { referrer: "/current" }
  }}
/>;

// $FlowExpectedError
<Redirect />;

// Route
var User = () => <div />;
<Route path="/user/:username" component={User} exact={true} strict={true} />;
<Route
  path="/home"
  render={({ match }) =>
    <div>
      Home {match.path}
    </div>}
/>;
<Route
  path="/"
  children={({ match }) => <div className={match ? "active" : ""} />}
/>;

// $FlowExpectedError
<Route path="/user/:username" component={<User />} />;

// Switch
<Switch>
  <Route />
  <Route />
</Switch>;

// withRouter
type FooProps = {
  location: Location,
  name: string
};
const Foo = ({ location, name }: FooProps) =>
  <div>
    {location.pathname} {name}
  </div>;
const FooWithRouter = withRouter(Foo);
<FooWithRouter name="name" />;

class Bar extends React.Component {
  props: FooProps;
}
const BarWithRouter = withRouter(Bar);
<BarWithRouter name="name" />;

// $FlowExpectedError
withRouter("nope");

// const FooWithRouterError = withRouter(Foo);
// <FooWithRouterError name={3} />;

// $FlowExpectedError
const BarWithRouterError = withRouter(Bar);
<BarWithRouterError name={3} />;

// Test ContextRouter as props
type WithRouterProps = ContextRouter & {
  name: string
};

// $FlowExpectedError
const IncorrectHistoryUsage = ({ history, name }: Foo2Props) => {
  // Wrong arguments here, error will bubble up to the component declaration
  history.push(["bla"]);
  return (
    <div>
      {name}
    </div>
  );
};

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
const match: null | Match = matchPath("/the/pathname", "/the/:dynamicId", {
  exact: true,
  strict: false
});
const match2: null | Match = matchPath("/the/pathname", "/the/:dynamicId");

// $FlowExpectedError
matchPath("/the/pathname");
// $FlowExpectedError
matchPath();
// $FlowExpectedError
const matchError: string = matchPath("/the/pathname", "the/:dynamicId");
