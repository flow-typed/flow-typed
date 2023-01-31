// @flow
import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  matchPath,
  withRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useHistory,
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
  useRouteMatch,
  useMatches,
} from "react-router-dom";
import type {
  Location,
  ContextRouter,
  Match,
  StaticRouterContext,
  RouterHistory,
  Params,
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
      // $FlowExpectedError[incompatible-type] - basename must be a string
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
      // $FlowExpectedError[incompatible-type] - hashType must be a string
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

    it("allows attributes of <a> element", () => {
      <Link
        to="/about"
        download
        hreflang="de"
        ping="https://www.example.com"
        referrerpolicy="no-referrer"
        target="_self"
        type="foo"
        onClick={() => {}}
      >About</Link>;
    });

    it("raises error if passed incorrect props", () => {
      // $FlowExpectedError[prop-missing] - to prop is required
      <Link />;

      // $FlowExpectedError[incompatible-type] - to prop must be a string or LocationShape
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

    it("allows attributes of <a> element", () => {
      <NavLink
        to="/about"
        download
        hreflang="de"
        ping="https://www.example.com"
        referrerpolicy="no-referrer"
        target="_self"
        type="foo"
        onClick={() => {}}
      >About</NavLink>;
    });

    it("raises error if passed incorrect props", () => {
      // $FlowExpectedError[prop-missing] - to prop is required
      <NavLink />;

      // $FlowExpectedError[incompatible-type] - to prop must be a string or LocationShape
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
        path: ["/the/:dynamicId", "/the/otherRoute"],
        exact: true,
        strict: false,
      });
      const match3: null | Match = matchPath("/the/pathname", "/the/:dynamicId");
      const match4: null | Match = matchPath("/the/pathname", [
        "/the/:dynamicId",
        "/the/otherRoute",
      ]);
      const match5: null | Match = matchPath("/the/pathname");
    });

    it("raises an error if passed invalid argument", () => {
      // $FlowExpectedError[incompatible-call] - pathname argument is required
      matchPath();

      // $FlowExpectedError[incompatible-type] - matchPath returns Match or null
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
      s: string,
      ...
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

        const ChainedHOC = withRouter(WrappedComp);
        <ChainedHOC s="" />;
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
        // $FlowExpectedError[prop-missing] - missing prop "s"
        <WrappedComp />;
        // $FlowExpectedError[incompatible-type] - wrong type
        <WrappedComp s={1} />;

        const ChainedHOC = withRouter(WrappedComp);
        // $FlowExpectedError[prop-missing] - missing prop "s"
        <ChainedHOC />;
        // $FlowExpectedError[incompatible-type] - wrong type
        <ChainedHOC s={1} />;
      });

      it("errors if trying to access a prop that withRouter does not supply", () => {
        const Comp = ({ histry, s }: {
          histry: RouterHistory,
          s: string,
          ...
        }) => (
          <div />
        );
        const WrappedComp = withRouter(Comp);
      });

      it("errors if using block() incorrectly", () => {
        const Comp = ({history}: { history: RouterHistory, ... }) => {
          // $FlowExpectedError[incompatible-call] - wrong param
          history.block(false);

          // These are valid
          history.block('Are you sure you want to leave this page?');
          history.block((location, action) => {
            return 'Are you sure you want to leave this page?';
          });

          return <div />;
        };
        const WrappedComp = withRouter(Comp);
      });
    });

    describe("Class Components", () => {
      it("passes if the component is passed required props", () => {
        class Comp extends React.Component<Props> {
          render(): React$Element<'div'> {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        <WrappedComp s="" />;

        const ChainedHOC = withRouter(WrappedComp);
        <ChainedHOC s="" />;
      });

      it("errors if the component is not passed the correct props", () => {
        class Comp extends React.Component<Props> {
          render(): React$Element<'div'> {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        // $FlowExpectedError[prop-missing] - missing prop "s"
        <WrappedComp />;
        // $FlowExpectedError[incompatible-type] - wrong type
        <WrappedComp s={1} />;

        const ChainedHOC = withRouter(WrappedComp);
        // $FlowExpectedError[prop-missing] - missing prop "s"
        <ChainedHOC />;
        // $FlowExpectedError[incompatible-type] - wrong type
        <ChainedHOC s={1} />;
      });

      it("passes if a required prop is handled by defaultProps", () => {
        type OwnProps = {|
          s: string,
        |};

        class Comp extends React.Component<Props> {
          static defaultProps: OwnProps = {
            s: "defaultS"
          };
          render(): React$Element<'div'> {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        <WrappedComp />;
        <WrappedComp s="" />;

        const ChainedHOC = withRouter(WrappedComp);
        <ChainedHOC />;
        <ChainedHOC s="" />;
      });

      it("errors if a required prop that has a defaultProp is passed the wrong type", () => {
        type OwnProps = {|
          s: string,
        |};

        class Comp extends React.Component<Props> {
          static defaultProps: OwnProps = {
            s: "defaultS"
          };
          render(): React$Element<'div'> {
            return <div />;
          }
        }
        const WrappedComp = withRouter(Comp);
        // $FlowExpectedError[incompatible-type] - wrong type
        <WrappedComp s={123} />;

        const ChainedHOC = withRouter(WrappedComp);
        // $FlowExpectedError[incompatible-type] - wrong type
        <ChainedHOC s={123} />;
      });
    });
  });

  describe("Navigate", () => {
    it("works", () => {
      <Navigate to="/login" />;

      <Navigate to="/new-path" replace />;

      <Navigate
        to={{
          pathname: "/courses",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true }
        }}
        state={{}}
      />;
    });

    it("raises error if passed incorrect props", () => {
      // $FlowExpectedError[prop-missing] - to prop is required
      <Navigate />;

      // $FlowExpectedError[incompatible-type] - to prop must be a string or LocationShape
      <Navigate to={[]} />;

      // $FlowExpectedError[prop-missing] - unexpected prop xxx
      <Navigate to='/x' xxx="1"/>;
    });
  });

  describe('useNavigate', () => {
    it('works', () => {
      const navigate = useNavigate();

      navigate("../success");
      navigate("../success", { replace: true });
      navigate(-1);
    });

    it('raises errors if used incorrectly', () => {
      // $FlowExpectedError[extra-arg] takes no args
      const navigate = useNavigate('test');

      // $FlowExpectedError[incompatible-call]
      navigate(true);
    });
  });

  describe("Route", () => {
    it("works", () => {
      const Component = () => <div>Hi!</div>;
      <Route path="/login" />;

      <Route path="/login" element={<Component />} />;

      <Route
        index
        caseSensitive
      />;

      <Route><div>Hi!</div></Route>;

      <Route
        caseSensitive
        path="/login"
        id="login"
        loader={({ request, params }) => {
          const myRequest: Request = request;
          const myParams: Params<string> = params;
        }}
        action={() => {}}
        hasErrorBoundary
        shouldRevalidate={() => false}
        handle={{ breadcrumb: 'login'}}
        index={false}
        element={<Component />}
        errorElement={<Component />}
      />;
    });

    it("raises error if passed incorrect props", () => {
      // $FlowExpectedError[incompatible-type] - prop must be a string
      <Route path={123} />;

      // $FlowExpectedError[prop-missing] - unexpected prop xxx
      <Route xxx="1" />;

      // $FlowExpectedError[incompatible-type]
      <Route action={(invalid: number) => true} />;

      // $FlowExpectedError[incompatible-type]
      <Route caseSensitive="123" />;

      <Route loader={({ request, params, ...loaderArgs}) => {
        // $FlowExpectedError[incompatible-type]
        const myRequest: string = request;

        // $FlowExpectedError[incompatible-type]
        const myParams: string = params;

        // $FlowExpectedError[prop-missing]
        const missing: any = loaderArgs.missing;

        return false;
      }} />;

      // $FlowExpectedError[incompatible-type]
      <Route hasErrorBoundary="invalid" />;

      // $FlowExpectedError[incompatible-type]
      // $FlowExpectedError[prop-missing]
      <Route shouldRevalidate={({ currentUrl }: {| currentUrl: number |}) => true} />;

      // $FlowExpectedError[incompatible-type]
      <Route index="invalid" />;
    });
  });

  describe('Routes', () => {
    it('works', () => {
      const Component = () => <div>Hi!</div>;
      <Routes>
        <Route path="/login" element={<Component />} />
      </Routes>;
    });
  });

  describe('Outlet', () => {
    it('can be used alone', () => {
      <Outlet />;
    });

    it('can be passed anything', () => {
      const [count, setCount] = React.useState(0);
      <Outlet context={[count, setCount]} />;
    });
  });

  describe('react hook', () => {
    it('useHistory', () => {
      const history: RouterHistory = useHistory();
    });

    it('useLocation', () => {
      const location: Location = useLocation();
    });

    it('useOutlet', () => {
      const [count, setCount] = useOutletContext();
      const increment = () => setCount((c) => c + 1);
      <button onClick={increment}>{count}</button>;

      // $FlowExpectedError[extra-arg]
      useOutletContext('');
    });

    it('useParams', () => {
      const params: { [key: string]: ?string, ... } = useParams();
    });

    it('useParams with generic', () => {
      type ParamsType = {|
        +slug: string,
      |};

      const params: ParamsType = useParams<ParamsType>();
    });

    it('useRouteMatch', () => {
      const match: Match = useRouteMatch();
      const matchPath: Match = useRouteMatch('/path');
      const matchArray: Match = useRouteMatch(['/path', '/the/otherRoute']);

      const matchObject: Match = useRouteMatch({
        path: '/path',
        strict: true,
        sensitive: true,
        exact: true,
      });

      // $FlowExpectedError[incompatible-call]
      const matchObject2: Match = useRouteMatch({
        sensitive: 'foo',
      });
    });

    it('useMatches', () => {
      type Matches = Array<{|
        id: string,
        pathname: string,
        params: Params<string>,
        data: mixed,
        handle: {|
          custom: string,
        |},
      |}>;
      const matches: Matches = useMatches();

      type MatchesWithHandle = Array<{|
        id: string,
        pathname: string,
        params: Params<string>,
        data: mixed,
        handle: {|
          custom: string,
        |},
      |}>;
      const matchesWithHandle: MatchesWithHandle = useMatches<
        mixed,
        {|
          custom: string,
        |}
      >();

      type InvalidMatchesMissingPathname = Array<{|
        id: string,
        params: Params<string>,
        data: mixed,
        handle: mixed,
      |}>;
      // $FlowExpectedError[prop-missing]
      const matchesMissingPathname: InvalidMatchesMissingPathname = useMatches();

      type InvalidMatchesIcompatibleParams = Array<{|
        id: string,
        pathname: string,
        params: Params<number>,
        data: mixed,
        handle: mixed,
      |}>;

      // $FlowExpectedError[incompatible-type-arg]
      const matchesIncompatibleParams: InvalidMatchesIcompatibleParams = useMatches();
    });
  });
});
