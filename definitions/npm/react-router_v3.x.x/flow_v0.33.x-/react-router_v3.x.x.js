import React from 'react';

declare module 'react-router' {
  declare var exports: {
    IndexRoute: React.Component<*, *, *>;
    Link: React.Component<*, *, *>;
    IndexLink: React.Component<*, *, *>;
    Redirect: React.Component<*, *, *>;
    IndexRedirect: React.Component<*, *, *>;
    Route: React.Component<*, *, *>;
    Router: React.Component<*, *, *>;
    browserHistory: any;
    useRouterHistory: (historyFactory: Function) => (options: ?Object) => Object;
    match: Function;
    RouterContext: React.Component<*, *, *>;
    createRoutes: (routes: React$Element<*>) => Array<Object>;
    formatPattern: (pattern: string, params: Object) => string;
    withRouter: (component: React.Component<*, *, *>, options: ?Object) => React.Component<*, *, *>;
  }
}
declare module 'react-router/lib/PropTypes' {
  declare var routerShape: ReactPropsChainableTypeChecker;
  declare var locationShape: ReactPropsChainableTypeChecker;
}
