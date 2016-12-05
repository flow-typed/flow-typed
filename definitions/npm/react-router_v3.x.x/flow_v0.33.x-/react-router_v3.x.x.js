declare module 'history' {
  declare type Action = 'PUSH' | 'REPLACE' | 'POP';
  declare type BeforeUnloadHook = () => ?string;
  declare type CreateHistory = (options: ?HistoryOptions) => History;
  declare type CreateHistoryEnhancer = (createHistory: CreateHistory) => CreateHistory;
  declare type Hash = string;
  declare type LocationDescriptor = LocationDescriptorObject | Path;
  declare type LocationKey = string;
  declare type LocationListener = (location: Location) => void;
  declare type LocationState = ?Object;
  declare type Path = string;
  declare type Pathname = string;
  declare type Query = Object;
  declare type Search = string;
  declare type TransitionHook = (location: Location, callback: ?Function) => any;
  declare type History = {
    listenBefore(hook: TransitionHook): Function;
    listen(listener: LocationListener): Function;
    transitionTo(location: Location): void;
    push(location: LocationDescriptor): void;
    replace(location: LocationDescriptor): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    createKey(): LocationKey;
    createPath(location: LocationDescriptor): Path;
    createHref(location: LocationDescriptor): Href;
    createLocation(location: LocationDescriptor, action: ?Action, key: ?LocationKey): Location;
  }
  declare type HistoryOptions = Object;
  declare type Href = string;
  declare type Location = {
    pathname: Pathname;
    search: Search;
    query: Query;
    state: LocationState;
    action: Action;
    key: LocationKey;
  };
  declare type LocationDescriptorObject = {
    pathname: Pathname;
    search: Search;
    query: Query;
    state: LocationState;
  };

  declare function createHistory(options?: HistoryOptions): History;
  declare function createHashHistory(options?: HistoryOptions): History;
  declare function createMemoryHistory(options?: HistoryOptions): History;
}

import typeof {
  createHistory,
  createHashHistory,
  createMemoryHistory,
} from 'history';

declare module 'history/lib/createBrowserHistory' {
  declare var exports: createHistory;
}


declare module 'history/lib/createHashHistory' {
  declare var exports: createHashHistory;
}

declare module 'history/lib/createMemoryHistory' {
  declare var exports: createMemoryHistory;
}

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
