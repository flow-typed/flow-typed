// flow-typed signature: b701192ca557cf27adf1b295517299fd
// flow-typed version: b43dff3e0e/react-router_v4.x.x/flow_>=v0.53.x
import * as React from "react";

declare module "react-router" {
  // NOTE: many of these are re-exported by react-router-dom and
  // react-router-native, so when making changes, please be sure to update those
  // as well.
  declare export type Location = {
    pathname: string,
    search: string,
    hash: string,
    state?: any,
    key?: string
  };

  declare export type LocationShape = {
    pathname?: string,
    search?: string,
    hash?: string,
    state?: any
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
    // createMemoryHistory
    index?: number,
    entries?: Array<Location>
  };

  declare export type Match = {
    params: { [key: string]: ?string },
    isExact: boolean,
    path: string,
    url: string
  };

  declare export type ContextRouter = {
    history: RouterHistory,
    location: Location,
    match: Match
  };

  declare export type GetUserConfirmation = (
    message: string,
    callback: (confirmed: boolean) => void
  ) => void;

  declare type StaticRouterContext = {
    url?: string
  };

  declare type StaticRouterProps = {
    basename?: string,
    location?: string | Location,
    context: StaticRouterContext,
    children?: React$Element<*>
  };
  declare export class StaticRouter extends React$Component<
    StaticRouterProps
  > {}

  declare type MemoryRouterProps = {
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Element<*>
  };
  declare export class MemoryRouter extends React$Component<
    MemoryRouterProps
  > {}

  declare type RouterProps = {
    history: RouterHistory,
    children?: React$Element<*>
  };
  declare export class Router extends React$Component<RouterProps> {}

  declare type PromptProps = {
    message: string | ((location: Location) => string | true),
    when?: boolean
  };
  declare export class Prompt extends React$Component<PromptProps> {}

  declare type RedirectProps = {
    to: string | LocationShape,
    push?: boolean
  };
  declare export class Redirect extends React$Component<RedirectProps> {}

  declare type RouteProps = {
    component?: React$ComponentType<*>,
    render?: (router: ContextRouter) => React$Element<*>,
    children?: (router: ContextRouter) => React$Element<*>,
    path?: string,
    exact?: boolean,
    strict?: boolean
  };
  declare export class Route extends React$Component<RouteProps> {}

  declare type SwithcProps = {
    children?: Array<React$Element<*>>
  };
  declare export class Switch extends React$Component<SwithcProps> {}

  declare export function withRouter<P>(
    Component: React$ComponentType<ContextRouter & P>
  ): React$ComponentType<P>;

  declare type MatchPathOptions = {
    exact?: boolean,
    strict?: boolean
  };
  declare export function matchPath(
    pathname: string,
    path: string,
    options?: MatchPathOptions
  ): null | Match;
}
