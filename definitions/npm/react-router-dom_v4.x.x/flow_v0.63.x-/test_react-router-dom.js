// @flow
import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  matchPath,
  withRouter
} from "react-router-dom";
import type {
  ContextRouter,
  Match,
  StaticRouterContext,
  RouterHistory
} from "react-router-dom";
import { it, describe } from "flow-typed-test";

describe("react-router-dom", () => {
  describe("BrowserRouter", () => {
    it("works", () => {
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
    });

    it("raises error if passed incorrect props", () => {
      // $ExpectError - basename must be a string
      <BrowserRouter basename={{}} />;
    });
  });

  describe("HashRouter", () => {
    it("works", () => {
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
    });

    it("raises error if passed incorrect props", () => {
      // $ExpectError - hashType must be a string
      <HashRouter hashType="magic" />;
    });
  });

  describe("<Link />", () => {
    it("works", () => {
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
    });

    it("raises error if passed incorrect props", () => {
      // $ExpectError - to prop is required
      <Link />;

      // $ExpectError - to prop must be a string or LocationShape
      <Link to={[]} />;
    });
  });

  describe("<NavLink />", () => {
    it("works", () => {
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
    });

    it("raises error if passed incorrect props", () => {
      // $ExpectError - to prop is required
      <NavLink />;

      // $ExpectError - to prop must be a string or LocationShape
      <NavLink to={[]} />;
    });
  });

  describe("matchPath", () => {
    it("works", () => {
      const match: null | Match = matchPath("/the/pathname", {
        path: "/the/:dynamicId",
        exact: true,
        strict: false
      });
      const match2: null | Match = matchPath("/the/pathname", {
        path: "/the/:dynamicId"
      });
      const match3: null | Match = matchPath("/the/pathname");
    });

    it("raises an error if passed invalid argument", () => {
      // $ExpectError - pathname argument is required
      matchPath();

      // $ExpectError - matchPath returns Match or null
      const matchError: string = matchPath("/the/pathname", {
        path: "the/:dynamicId"
      });
    });
  });

  describe("withRouter", () => {
    type Props = {
      history: RouterHistory,
      location: Location,
      match: Match,
      staticContext: StaticRouterContext,
      s: string
    };
    describe("Stateless Functional Components", () => {
      it("passes if the component is passed required props", () => {
        const Comp = ({
          history,
          location,
          match,
          staticContext,
          s
        }: Props) => <div />;
        const WrappedComp = withRouter(Comp);
        <WrappedComp s="" />;
      });

      it("errors if the component is not passed correct props", () => {
        const Comp = ({
          history,
          location,
          match,
          staticContext,
          s
        }: Props) => <div />;
        const WrappedComp = withRouter(Comp);
        // $ExpectError - missing prop "s"
        <WrappedComp />;
        // $ExpectError - wrong type
        <WrappedComp s={1} />;
      });

      it("errors if trying to access a prop that withRouter does not supply", () => {
        const Comp = ({ histry, s }: { histry: RouterHistory, s: string }) => (
          <div />
        );
        const WrappedComp = withRouter(Comp);
      });
    });

    describe("Class Components", () => {
      it("passes if the component is passed required props", () => {
        class Comp extends React.Component<Props> {
          render() {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        <WrappedComp s="" />;
      });

      it("errors if the component is not passed the correct props", () => {
        class Comp extends React.Component<Props> {
          render() {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        // $ExpectError - missing prop "s"
        <WrappedComp />;
        // $ExpectError - wrong type
        <WrappedComp s={1} />;
      });

      it("passes if a required prop is handled by defaultProps", () => {
        class Comp extends React.Component<Props> {
          static defaultProps = {
            s: "defaultS"
          };
          render() {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        <WrappedComp />;
        <WrappedComp s="" />;
      });

      it("errors if a required prop that has a defaultProp is passed the wrong type", () => {
        class Comp extends React.Component<Props> {
          static defaultProps = {
            s: "defaultS"
          };
          render() {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        // $ExpectError - wrong type
        <WrappedComp s={123} />;
      });
    });
  });
});
