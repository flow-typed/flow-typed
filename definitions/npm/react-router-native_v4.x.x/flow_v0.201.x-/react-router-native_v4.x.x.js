declare module "react-router-native" {
  declare export class NativeRouter extends React$Component<{
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Node,
    ...
  }> {}

  declare export class Link extends React$Component<{
    to: string | LocationShape,
    replace?: boolean,
    children?: React$Node,
    ...
  }> {}

  declare export class DeepLinking extends React$Component<{ children?: React$Node, ... }> {}
  
  declare export class BackButton extends React$Component<{ children?: React$Node, ... }> {}

  declare export class AndroidBackButton extends React$Component<{ children?: React$Node, ... }> {}

  // NOTE: Below are duplicated from react-router. If updating these, please
  // update the react-router and react-router-dom types as well.
  declare export type Location = $ReadOnly<{
    pathname: string,
    search: string,
    hash: string,
    state?: any,
    key?: string,
    ...
  }>;

  declare export type LocationShape = {
    pathname?: string,
    search?: string,
    hash?: string,
    state?: any,
    ...
  };

  declare export type HistoryAction = "PUSH" | "REPLACE" | "POP";

  declare export type RouterHistory = {
    length: number,
    location: Location,
    action: HistoryAction,
    listen(
      callback: (location: Location, action: HistoryAction) => void
    ): () => void,
    push(path: string | LocationShape, state?: any): void,
    replace(path: string | LocationShape, state?: any): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    canGo?: (n: number) => boolean,
    block(
      callback: (location: Location, action: HistoryAction) => boolean
    ): void,
    ...
  };

  declare export type Match = {
    params: { [key: string]: ?string, ... },
    isExact: boolean,
    path: string,
    url: string,
    ...
  };

  declare export type ContextRouter = {|
    history: RouterHistory,
    location: Location,
    match: Match
  |};

  declare export type GetUserConfirmation = (
    message: string,
    callback: (confirmed: boolean) => void
  ) => void;

  declare type StaticRouterContext = { url?: string, ... };

  declare export class StaticRouter extends React$Component<{
    basename?: string,
    location?: string | Location,
    context: StaticRouterContext,
    children?: React$Node,
    ...
  }> {}

  declare export class MemoryRouter extends React$Component<{
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Node,
    ...
  }> {}

  declare export class Router extends React$Component<{
    history: RouterHistory,
    children?: React$Node,
    ...
  }> {}

  declare export class Prompt extends React$Component<{
    message: string | ((location: Location) => string | true),
    when?: boolean,
    ...
  }> {}

  declare export class Redirect extends React$Component<{
    to: string | LocationShape,
    push?: boolean,
    ...
  }> {}

  declare export class Route extends React$Component<{
    component?: React$ComponentType<any>,
    render?: (router: ContextRouter) => React$Node,
    children?: React$ComponentType<ContextRouter> | React$Node,
    path?: string,
    exact?: boolean,
    strict?: boolean,
    ...
  }> {}

  declare export class Switch extends React$Component<{ children?: React$Node, ... }> {}

  declare export function withRouter<P>(
    Component: React$ComponentType<{| ...ContextRouter, ...P |}>
  ): React$ComponentType<P>;

  declare type MatchPathOptions = {
    path?: string,
    exact?: boolean,
    sensitive?: boolean,
    strict?: boolean,
    ...
  };

  declare export function matchPath(
    pathname: string,
    options?: MatchPathOptions | string
  ): null | Match;
}
