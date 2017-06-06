// @flow
import {
  // Components
  Router,
  Link,
  IndexLink,
  withRouter,
  RouterContext,
  // Configruation Components
  Route, // PlainRoute,
  Redirect,
  IndexRoute,
  IndexRedirect,
  // Utils
  match,
  createRoutes,
} from 'react-router';

import {
  routerShape,
  locationShape,
} from 'react-router/lib/PropTypes';

import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
