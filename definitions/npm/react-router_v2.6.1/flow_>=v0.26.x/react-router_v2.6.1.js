/* @flow */
declare interface ReactRouterHistory {
  listenBefore: (hook: Function) => Function;
  listen: (listener: Function) => Function;
  transitionTo: (location: Object) => void;
  push: (location: Object) => void;
  replace: (location: Object) => void;
  go: (n: number) => void;
  goBack: () => void;
  goForward: () => void;
  createKey: () => string;
  createPath: (location: Object) => string;
  createHref: (location: Object) => string;
  createLocation: (location: Object, action?: string, key?: string) => string;  
}

declare interface BaseRouteProps {
  component?: ReactClass<*>;
  components?: { [key: string]: ReactClass<*> };
  getComponent?: (nextState: Object, callback: Function) => void;
  getComponents?: (nextState: Object, callback: Function) => void;
  children?: any;
  onEnter?: (nextState: Object, replace: Function, callback?: Function) => void;
  onChange?: (nextState: Object, replace: Function, callback?: Function) => void;
  onLeave?: (prevState: Object) => void
}

declare interface RouteProps extends BaseRouteProps {
  path?: string;
}

declare interface IndexRouteProps extends BaseRouteProps {};

declare interface RouterProps {
  children?: any;
  routes?: any;
  history?: ReactRouterHistory;
  createElement?: (Component: React$Component<*, *, *>, props: Object) => React$Element<any>;
  onError?: (error: any) => void;
  onUpdate?: () => void;
  render?: (props: Object) => React$Element<any>;
}

declare interface BaseLinkProps {
  to?: string | Object;
  activeClassName?: string;
  activeStyle?: string;
  onClick?: (e: Object) => void;
  onlyActiveOnIndex?: boolean;
}
declare interface LinkProps extends BaseLinkProps {
  onlyActiveOnIndex?: boolean;
}

declare interface IndexLinkProps extends BaseLinkProps {}

declare interface BaseRedirectProps {
  to: string;
}

declare interface RedirectProps extends BaseRedirectProps {
  from: string;
}

declare interface IndexRedirectProps extends BaseRedirectProps {}

declare interface ReactRouterPropTypes {
  falsy: Function;
  history: Function;
  location: Function;
  component: Function;
  components: Function;
  route: Function;
  router: Function;
}

declare interface Router extends React$Component<void, RouterProps, any> {}
declare interface Route extends React$Component<void, RouteProps, any> {}
declare interface IndexRoute extends React$Component<void, IndexRouteProps, any> {}
declare interface Link extends React$Component<void, LinkProps, any> {}
declare interface IndexLink extends React$Component<void, IndexLinkProps, any> {}
declare interface Redirect extends React$Component<void, RedirectProps, any> {}
declare interface IndexRedirect extends React$Component<void, IndexRedirectProps, any> {}

declare module 'react-router' {
  declare class ReactRouter {
    Router: Class<Router>;
    Route: Class<Route>;
    IndexRoute: Class<IndexRoute>;
    Link: Class<Link>;
    IndexLink: Class<IndexLink>;
    Redirect: Class<Redirect>;
    IndexRedirect: Class<IndexRedirect>;
    match(options: Object, cb: Function): void;
    RouterContext: ReactClass<*>;
    createRoutes(routes: React$Element<*>): Array<Object>;
    formatPattern(pattern: string, params: Object): string;
    useRouterHistory(historyFactory: Function): (options?: Object) => Object;
    withRouter(Component: ReactClass<*>, options?: Object): ReactClass<*>;
    browserHistory: ReactRouterHistory;
    hashHistory: ReactRouterHistory;
    PropTypes: ReactRouterPropTypes;
    createMemoryHistory(options?: Object): ReactRouterHistory;  
  }
  declare var exports: ReactRouter;
}