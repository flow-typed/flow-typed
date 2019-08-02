// @flow
import React from 'react';
import { describe, it } from 'flow-typed-test';
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
import type {
  Location,
  Match,
  ContextRouter,
  RouterHistory,
} from 'react-router';

describe('Location', () => {
  it('should error if wrong type is passed', () => {
    // $ExpectError
    const locationError: Location = 'location';
  });

  it('should work if type is correct', () => {
    const location: Location = {
      pathname: '/path',
      search: '?search',
      hash: '#hash',
      state: null,
      key: 'key',
    };
  });
});

describe('StaticRouter', () => {
  <StaticRouter context={{}}>
    <div />
  </StaticRouter>;
  <StaticRouter location="/" context={{}} basename="/foo/">
    <div />
  </StaticRouter>;

  // $ExpectError
  <StaticRouter />;
});

describe('MemoryRouter', () => {
  <MemoryRouter>
    <div />
  </MemoryRouter>;
  <MemoryRouter
    initialEntries={['/one', '/two', { pathname: '/three' }]}
    initialIndex={1}
    getUserConfirmation={(
      message: string,
      callback: (confirmed: boolean) => void,
    ): void => {}}
    keyLength={3}
  >
    <div />
  </MemoryRouter>;

  // $ExpectError
  <MemoryRouter initialEntries={''} />;
});

describe('RouterHistory', () => {
  declare var history: RouterHistory;
  <Router history={history}>
    <div />
  </Router>;

  // $ExpectError
  <Router>
    <div />
  </Router>;
});

describe('Prompt', () => {
  <Prompt message="ok?" when={true} />;
  <Prompt message={location => 'ok?'} />;
  <Prompt message={location => true} />;

  // $ExpectError
  <Prompt />;
});

describe('Redirect', () => {
  <Redirect to="/foo" push />;
  <Redirect
    to={{
      pathname: '/login',
      search: '?utm=foo',
      state: { referrer: '/current' },
    }}
  />;
  <Redirect to="/foo" push from="/x" />;

  // $ExpectError
  <Redirect />;
});

describe('Route', () => {
  const User = () => <div />;
  <Route
    path={['/', '/user/:username']}
    children={({ match }) => <div className={match ? 'active' : ''} />}
  />;
  <Route path="/user/:username" component={User} exact={true} strict={true} />;
  <Route path="/home" render={({ match }) => <div>Home {match.path}</div>} />;
  <Route
    path="/"
    children={({ match }) => <div className={match ? 'active' : ''} />}
  />;
  <Route>
    <div>children</div>
  </Route>;

  // $ExpectError
  <Route path="/user/:username" component={<User />} />;
});

describe('Switch', () => {
  <Switch>
    <Route />
    <Route />
  </Switch>;
});

describe('withRouter', () => {
  type FooProps = {|
    ...ContextRouter,
    name: string,
  |};
  const Foo = ({ location, name }: FooProps) => (
    <div>
      {location.pathname} {name}
    </div>
  );
  const FooWithRouter = withRouter(Foo);
  <FooWithRouter name="name" />;

  class Bar extends React.Component<FooProps> {}
  const BarWithRouter = withRouter(Bar);
  <BarWithRouter name="name" />;

  // $ExpectError
  withRouter('nope');

  const FooWithRouterError = withRouter(Foo);
  <FooWithRouterError name="3" />;

  const BarWithRouterError = withRouter(Bar);
  // $ExpectError
  <BarWithRouterError name={3} />;

  const IncorrectHistoryUsage = ({ history, name }: FooProps) => {
    // Wrong arguments here
    // $ExpectError
    history.push(['bla']);
    return <div>{name}</div>;
  };
});

describe('matchPath', () => {
  // matchPath
  const match: null | Match = matchPath('/the/pathname', {
    path: '/the/:dynamicId',
    exact: true,
    strict: false,
  });
  const match2: null | Match = matchPath('/the/pathname', '/the/:dynamicId');
  const match3: null | Match = matchPath('/the/pathname');

  // $ExpectError
  matchPath();
  // $ExpectError
  const matchError: string = matchPath('/the/pathname', 'the/:dynamicId');
});

describe('Unrouted', () => {
  const Unrouted: React$ComponentType<{|
    ...ContextRouter,
    someProp: string,
  |}> = () => <span />;

  const Routed1: React$ComponentType<{| someProp: string |}> = withRouter(
    Unrouted,
  );

  // $ExpectError: This error bubbles up from the assignment in Routed2.
  const Unrouted2: React$ComponentType<{|
    ...ContextRouter,
    someProp: string,
  |}> = () => <span />;

  const Routed2: React$ComponentType<{| someProp2: string |}> = withRouter(
    Unrouted2,
  );
});
