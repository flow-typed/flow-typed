// @flow
import React from 'react'
import {
  StaticRouter,
  MemoryRouter,
  Router,
  Prompt,
  Redirect,
  Route,
  Switch,
  withRouter,
  matchPath,
} from 'react-router';
import type { Location, Match } from 'react-router';

// Location
var locationOK: Location = {
  pathname: "/path",
  search: "?search",
  hash: "#hash",
  state: null,
  key: "key",
};

// $ExpectError
var locationError: Location = {};

// StaticRouter
<StaticRouter context={{}}><div /></StaticRouter>;
<StaticRouter
  location="/"
  context={{}}
  basename="/foo/"
>
  <div />
</StaticRouter>;

// $ExpectError
<StaticRouter />;

// MemoryRouter
<MemoryRouter><div /></MemoryRouter>;
<MemoryRouter
  initialEntries={[ '/one', '/two', { pathname: '/three' } ]}
  initialIndex={1}
  getUserConfirmation={(message: string, callback: (confirmed: boolean) => void): void => {}}
  keyLength={3}
  >
  <div />
</MemoryRouter>;

// $ExpectError
<MemoryRouter initialEntries={''} />;

// Router
var history: History;
<Router history={history}><div /></Router>;

// $ExpectError
<Router><div /></Router>;

// Prompt
<Prompt message="ok?" when={true} />;
<Prompt message={(location) => "ok?"} />;
<Prompt message={(location) => true} />;

// $ExpectError
<Prompt />;

// Redirect
<Redirect to="/foo" push />;
<Redirect to={{
  pathname: '/login',
  search: '?utm=foo',
  state: { referrer: '/current' }
}}/>;

// $ExpectError
<Redirect />;

// Route
var User = () => <div />;
<Route path="/user/:username" component={User} exact={true} strict={true} />;
<Route path="/home" render={({ match }) => <div>Home {match.path}</div>}/>;
  <Route path="/" children={({ match }) => (
  <div className={match ? 'active' : ''} />
)}/>;

// $ExpectError
<Route path="/user/:username" component={<User />} />;

// Switch
<Switch>
  <Route />
  <Route />
</Switch>;

// withRouter
type FooProps = {
  location: Location,
  name: string,
}
const Foo = ({ location, name }: FooProps) =>
      <div>{location.pathname} {name}</div>;
const FooWithRouter = withRouter(Foo);
<FooWithRouter name="name" />;

class Bar extends React.Component {
  props: FooProps
}
const BarWithRouter = withRouter(Bar);
<BarWithRouter name="name" />;

// $ExpectError
withRouter('nope');
// $ExpectError
const FooWithRouterError = withRouter(Foo);
<FooWithRouterError name={3} />;
// $ExpectError
const BarWithRouterError = withRouter(Bar);
<BarWithRouterError name={3} />;

// matchPath
const match: null | Match = matchPath('/the/pathname', '/the/:dynamicId', {
  exact: true,
  strict: false
})
const match2: null | Match = matchPath('/the/pathname', '/the/:dynamicId')

// $ExpectError
matchPath('/the/pathname')
// $ExpectError
matchPath()
// $ExpectError
const matchError: string = matchPath('/the/pathname', 'the/:dynamicId')
