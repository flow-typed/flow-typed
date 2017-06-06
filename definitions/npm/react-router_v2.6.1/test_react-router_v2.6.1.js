/* @flow */
import React from 'react';
import { IndexRoute, IndexRedirect, Link, Redirect, Router, Route } from 'react-router';

class TestComponent extends React.Component<void, void, void> {
  render() {
    return <div></div>;
  }
}

// Router tests

const t1 = <Router>
  <Route path="/" component={TestComponent} />
</Router>;

const r1 = <Route path="/" component={TestComponent} />;

const t2 = <Router routes={[r1]} />;

// Route tests

const t3 = <Route path="/" component={TestComponent} />;

const t4 = <Route path="/" component={TestComponent}>
  <Route path="/bob" component={TestComponent} />
</Route>;

const t5 = <Route path="/" component={TestComponent}>
  <IndexRoute path="/bob" component={TestComponent} />
</Route>;

const t6 = <Route path="/" component={TestComponent}>
  <Redirect from="bob" to="jim" />
</Route>;

const t7 = <Route path="/" component={TestComponent}>
  <IndexRedirect from="bob" to="jim" />
</Route>;

// $ExpectError
const t8 = <Route path="/" component="bob" />;

// $ExpectError
const t9 = <Route path={1} component={TestComponent} />;

// IndexRoute tests

const t10 = <IndexRoute component={TestComponent} />;

// $ExpectError
const t11 = <IndexRoute component="bob" />;

// Link tests

const t12 = <Link to="jim" />;

// $ExpectError
const t13 = <Link to={true} />;

// Redirect tests

const t14 = <Redirect from="jim" to="bob" />;

// $ExpectError
const t15 = <Redirect from="jim" to={1} />;

// $ExpectError
const t16 = <Redirect from={1} to="bob" />;

// IndexRedirect tests

const t17 = <IndexRedirect to="bob" />

// $ExpectError
const t18 = <IndexRedirect to={1} />;