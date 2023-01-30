declare module "react-router-dom" {
  declare export var BrowserRouter: React$ComponentType<{|
    basename?: string,
    forceRefresh?: boolean,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Node
  |}>

  declare export var HashRouter: React$ComponentType<{|
    basename?: string,
    getUserConfirmation?: GetUserConfirmation,
    hashType?: "slash" | "noslash" | "hashbang",
    children?: React$Node
  |}>

  declare export var Link: React$ComponentType<{
    +className?: string,
    +to: string | LocationShape,
    +replace?: boolean,
    +children?: React$Node,
    ...
  }>

  declare export var NavLink: React$ComponentType<{
    +to: string | LocationShape,
    +activeClassName?: string,
    +className?: string,
    +activeStyle?: { +[string]: mixed, ... },
    +style?: { +[string]: mixed, ... },
    +isActive?: (match: Match, location: Location) => boolean,
    +children?: React$Node,
    +exact?: boolean,
    +strict?: boolean,
    ...
  }>

  // NOTE: Below are duplicated from react-router. If updating these, please
  // update the react-router and react-router-native types as well.
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
      callback: string | (location: Location, action: HistoryAction) => ?string
    ): () => void,
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
    match: Match,
    staticContext?: StaticRouterContext
  |};

  declare type ContextRouterVoid = {
    history: RouterHistory | void,
    location: Location | void,
    match: Match | void,
    staticContext?: StaticRouterContext | void,
    ...
  };

  declare export type GetUserConfirmation = (
    message: string,
    callback: (confirmed: boolean) => void
  ) => void;

  declare export type StaticRouterContext = { url?: string, ... };

  declare export var StaticRouter: React$ComponentType<{|
    basename?: string,
    location?: string | Location,
    context: StaticRouterContext,
    children?: React$Node
  |}>

  declare export var MemoryRouter: React$ComponentType<{|
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Node
  |}>

  declare export var Router: React$ComponentType<{|
    history: RouterHistory,
    children?: React$Node
  |}>

  declare export var Route: React$ComponentType<{|
    caseSensitive?: boolean,
    children?: React$Node,
    element?: React$Element<any> | null,
    index?: boolean,
    path?: string,
  |}>

  declare export var Prompt: React$ComponentType<{|
    message: string | ((location: Location) => string | boolean),
    when?: boolean
  |}>

  declare export var Outlet: React$ComponentType<{|
    context?: mixed;
  |}>

  declare export var useNavigate: () => (
    & ((
      to: To,
      options?: {|
        replace?: boolean, state?: any,
      |},
    ) => void)
    & ((delta: number) => void)
  );

  declare export var Navigate: (props: {|
    to: To;
    replace?: boolean;
    state?: any;
  |}) => null;

  declare export var Routes: React$ComponentType<{|
    children?: React$Node,
    location?: Location
  |}>

  declare export function withRouter<Props: {...}, Component: React$ComponentType<Props>>(
    WrappedComponent: Component
  ): React$ComponentType<$Diff<React$ElementConfig<Component>, ContextRouterVoid>>;

  declare type MatchPathOptions = {
    path?: string | string[],
    exact?: boolean,
    sensitive?: boolean,
    strict?: boolean,
    ...
  };

  declare export function matchPath(
    pathname: string,
    options?: MatchPathOptions | string | string[],
    parent?: Match
  ): null | Match;

  declare export function useHistory(): $PropertyType<ContextRouter, 'history'>;
  declare export function useLocation(): $PropertyType<ContextRouter, 'location'>;
  declare export function useOutletContext<T>(): T;
  declare export function useParams<Params = $PropertyType<$PropertyType<ContextRouter, 'match'>, 'params'>>(): Params;
  declare export function useRouteMatch(path?: MatchPathOptions | string | string[]): $PropertyType<ContextRouter, 'match'>;

  declare export function generatePath(pattern?: string, params?: { +[string]: mixed, ... }): string;

  declare type RouteObject = {|
    caseSensitive?: boolean,
    children?: Array<RouteObject>,
    element?: React$Node,
    index?: boolean,
    path?: string,
  |};

  declare export function createRoutesFromChildren(
    children: React$Node,
  ): Array<RouteObject>;

  declare type Params<Key: string> = {
    +[key: Key]: string | void;
  };

  declare type RouteMatch<ParamKey: string> = {|
    params: Params<ParamKey>,
    pathname: string,
    route: RouteObject,
  |};

  declare export function matchRoutes(
    routes: Array<RouteObject>,
    location: LocationShape | string,
    basename?: string,
  ): Array<RouteMatch<string>> | null;

  declare export function renderMatches(
    matches: Array<RouteMatch<string>> | null,
  ): React$Element<any> | null;

  declare type PathPattern = {|
    path: string,
    caseSensitive?: boolean,
    end?: boolean,
  |};

  declare type PathMatch<ParamKey: string = string> = {|
    params: Params<ParamKey>,
    pathname: string,
    pattern: PathPattern,
  |};

  declare export function matchPath<ParamKey: string = string>(
    pattern: PathPattern | string,
    pathname: string,
  ): PathMatch<ParamKey> | null;

  declare type To = LocationShape | string;

  declare type Path = {|
    pathname: string,
    search: string,
    hash: string,
  |};

  declare export function resolvePath(
    to: To,
    fromPathname?: string
  ): Path;

  declare export function useHref(to: To): string;

  declare export function useInRouterContext(): boolean;

  declare export function useNavigationType(): 'POP' | 'PUSH' | 'REPLACE';

  declare export function useMatch<ParamKey: string = string>(
    pattern: PathPattern | string
  ): PathMatch<ParamKey> | null;

  declare export function useMatches<Data = mixed, Handle = mixed>(): Array<{|
    id: string;
    pathname: string;
    params: Params<string>;
    data: Data;
    handle: Handle;
  |}>;

  declare export function useOutlet<T = any>(): React$Element<T> | null;

  declare export function useRoutes<T = any>(
    routes: Array<RouteObject>,
    location?: LocationShape | string,
  ): React$Element<T> | null;

  declare export function useSearchParams(
    defaultInit?: URLSearchParamsInit
  ): [URLSearchParams, SetURLSearchParams];

  declare type URLSearchParamsInit =
    | string
    | Array<[string, string]>
    | { [key: string]: string | Array<string>, ... }
    | URLSearchParams;

  declare type SetURLSearchParams = (
    nextInit?: URLSearchParamsInit,
    navigateOpts?: {|
      replace?: boolean,
      state?: any,
    |}
  ) => void;

  declare export function createSearchParams(
    init?: URLSearchParamsInit,
  ): URLSearchParams;
}
