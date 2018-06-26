// @flow

declare module '@reach/router' {
  declare type NavigateFn = (to: string, options?: NavigateOptions<{}>) => void;
  declare export var navigate: NavigateFn;

  declare export type HistoryListener = () => void;
  declare export type HistoryUnlistener = () => void;

  declare export interface History {
    location: string;
    transitioning: boolean;
    listen: (listener: HistoryListener) => HistoryUnlistener;
    navigate: NavigateFn;
  }

  declare export interface HistorySource {
    location: typeof location;
    addEventListener(name: string, listener: (event: Event) => void): void;
    removeEventListener(name: string, listener: (event: Event) => void): void;

    history: {
      state: any,
      pushState(state: any, title: string, uri: string): void,
      replaceState(state: any, title: string, uri: string): void,
    };
  }

  declare export interface NavigateOptions<State> {
    state?: State;
    replace?: boolean;
  }

  declare type CommonRouteProps = {|
    children?: React$Node,
    location?: typeof location,
    navigate?: NavigateFn,
    uri?: string,
  |};

  declare export type DefaultRouteProps = {
    ...CommonRouteProps,
    default: boolean,
  };

  declare export type RouteProps = {
    ...CommonRouteProps,
    path: string,
  };

  declare export type LocationProviderRenderFn = (context: {|
    location: typeof location,
    navigate: NavigateFn,
  |}) => React$Node;

  declare export class Router extends React$Component<{|
    children?: React$Node,
    basepath?: string,
    primary?: boolean,
    location?: typeof location,
  |}> {}

  declare export class Link<State> extends React$Component<{
    ...$Shape<HTMLAnchorElement>,
    children: React$Node,
    getProps?: (props: {
      isCurrent: boolean,
      isPartiallyCurrent: boolean,
      href: string,
      location: typeof location,
    }) => {},
    state?: State,
    to?: string,
    replace?: boolean,
    href?: empty, // remove href, as it's ignored by the router
  }> {}

  declare export class Redirect extends React$Component<{|
    from?: string,
    to: string,
    noThrow?: boolean,
  |}> {}

  declare export class Match<Params> extends React$Component<{|
    path: string,
    children: (props: {|
      match: null | ({ uri: string, path: string } & Params),
      location: typeof location,
      navigate: NavigateFn,
    |}) => React$Node,
  |}> {}

  declare export class Location extends React$Component<{|
    children: LocationProviderRenderFn,
  |}> {}

  declare export class LocationProvider extends React$Component<{|
    history: History,
    children?: React$Node | LocationProviderRenderFn,
  |}> {}

  declare export class ServerLocation extends React$Component<{|
    url: string,
    children?: React$Node,
  |}> {}

  declare export function createHistory(source: HistorySource): History;
  declare export function createMemorySource(
    initialPath: string,
  ): HistorySource;

  declare export function isRedirect(error: any): $Exact<{ uri: string }>;
  declare export function redirectTo(uri: string): void;
}
