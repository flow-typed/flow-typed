declare module 'react-router-dom' {
  import type { Node as ReactNode } from 'react';

  // NOTE: Below are duplicated from react-router
  // A work in progress of refactoring will move related types to their own
  // package definition as the main branch of flow-typed is able to handle this
  // type of structuration.

  // ----------------------------------/
  // `@remix-run/router`               /
  // ----------------------------------/

  declare type FutureConfig = {|
    v7_normalizeFormMethod: boolean,
  |};

  declare type RouteData = {|
    [routeId: string]: any,
  |};

  declare type To = LocationShape | string;

  declare export type Location = $ReadOnly<{
    pathname: string,
    search: string,
    hash: string,
    state?: any,
    key?: string,
    ...
  }>;

  /**
   * Index routes must not have children
   */
  declare export type AgnosticIndexRouteObject = {|
    ...AgnosticBaseRouteObject,
    children?: void,
    index: true,
  |};

  declare export type AgnosticDataIndexRouteObject = {|
    ...AgnosticIndexRouteObject,
    id: string,
  |};

  declare export type AgnosticNonIndexRouteObject = {|
    ...AgnosticBaseRouteObject,
    children?: AgnosticRouteObject[],
    index?: false,
  |};

  declare export type AgnosticDataNonIndexRouteObject = {|
    ...AgnosticNonIndexRouteObject,
    children?: AgnosticDataRouteObject[],
    id: string,
  |};

  /**
   * A data route object, which is just a RouteObject with a required unique ID
   */
  declare export type AgnosticDataRouteObject =
    | AgnosticDataIndexRouteObject
    | AgnosticDataNonIndexRouteObject;

  /**
   * A route object represents a logical route, with (optionally) its child
   * routes organized in a tree-like structure.
   */
  declare export type AgnosticRouteObject =
    | AgnosticIndexRouteObject
    | AgnosticNonIndexRouteObject;

  /**
   * A RouteMatch contains info about how a route matched a URL.
   */
  declare export type AgnosticRouteMatch<
    ParamKey: string = string,
    RouteObjectType: AgnosticRouteObject = AgnosticRouteObject
  > = {|
    /**
     * The names and values of dynamic parameters in the URL.
     */
    params: Params<ParamKey>,
    /**
     * The portion of the URL pathname that was matched.
     */
    pathname: string,
    /**
     * The portion of the URL pathname that was matched before child routes.
     */
    pathnameBase: string,
    /**
     * The route object that was used to match.
     */
    route: RouteObjectType,
  |};

  declare export type AgnosticDataRouteMatch = AgnosticRouteMatch<
    string,
    AgnosticDataRouteObject
  >;

  /**
   * @private
   * Arguments passed to route loader/action functions.  Same for now but we keep
   * this as a private implementation detail in case they diverge in the future.
   */
  declare type DataFunctionArgs = {|
    request: Request,
    params: Params<string>,
    context?: any,
  |};

  /**
   * Arguments passed to loader functions
   */
  declare export type LoaderFunctionArgs = DataFunctionArgs;

  /**
   * Arguments passed to action functions
   */
  declare export type ActionFunctionArgs = DataFunctionArgs;

  /**
   * Route loader function signature
   */
  declare export type LoaderFunction = (
    args: LoaderFunctionArgs
  ) => Promise<Response> | Response | Promise<any> | any;

  /**
   * Route action function signature
   */
  declare export type ActionFunction = (
    args: ActionFunctionArgs
  ) => Promise<Response> | Response | Promise<any> | any;

  /**
   * Route shouldRevalidate function signature.  This runs after any submission
   * (navigation or fetcher), so we flatten the navigation/fetcher submission
   * onto the arguments.  It shouldn't matter whether it came from a navigation
   * or a fetcher, what really matters is the URLs and the formData since loaders
   * have to re-run based on the data models that were potentially mutated.
   */
  declare export type ShouldRevalidateFunction = (args: {|
    currentUrl: URL,
    currentParams: AgnosticDataRouteMatch['params'],
    nextUrl: URL,
    nextParams: AgnosticDataRouteMatch['params'],
    formMethod?: Submission['formMethod'],
    formAction?: Submission['formAction'],
    formEncType?: Submission['formEncType'],
    formData?: Submission['formData'],
    actionResult?: DataResult,
    defaultShouldRevalidate: boolean,
  |}) => boolean;

  /**
   * Base RouteObject with common props shared by all types of routes
   */
  declare type AgnosticBaseRouteObject = {|
    caseSensitive?: boolean,
    path?: string,
    id?: string,
    loader?: LoaderFunction,
    action?: ActionFunction,
    hasErrorBoundary?: boolean,
    shouldRevalidate?: ShouldRevalidateFunction,
    handle?: mixed,
  |};

  declare type MatchPathOptions = {
    path?: string | string[],
    exact?: boolean,
    sensitive?: boolean,
    strict?: boolean,
    ...
  };

  // FIXME: 2 declarations of the same function
  declare export function matchPath(
    pathname: string,
    options?: MatchPathOptions | string | string[],
    parent?: Match
  ): null | Match;

  declare export function matchPath<ParamKey: string = string>(
    pattern: PathPattern | string,
    pathname: string
  ): PathMatch<ParamKey> | null;

  declare export function generatePath(
    pattern?: string,
    params?: { +[string]: mixed, ... }
  ): string;

  declare export type Params<Key: string> = {
    +[key: Key]: string | void,
  };

  declare export function matchRoutes<
    RouteObjectType: RouteObject = RouteObject
  >(
    routes: Array<RouteObject>,
    location: LocationShape | string,
    basename?: string
  ): Array<AgnosticRouteMatch<string, RouteObjectType>> | null;

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

  declare type Path = {|
    pathname: string,
    search: string,
    hash: string,
  |};

  declare export function resolvePath(to: To, fromPathname?: string): Path;

  // ----------------------------------/
  // `react-router`                    /
  // ----------------------------------/

  declare export type RouterProviderProps = {|
    fallbackElement?: ReactNode;
    router: Router;
  |}

  declare export function RouterProvider(RouterProviderProps): ReactNode;

  declare export type IndexRouteObject = {|
    caseSensitive?: AgnosticIndexRouteObject['caseSensitive'],
    path?: AgnosticIndexRouteObject['path'],
    id?: AgnosticIndexRouteObject['id'],
    loader?: AgnosticIndexRouteObject['loader'],
    action?: AgnosticIndexRouteObject['action'],
    hasErrorBoundary?: AgnosticIndexRouteObject['hasErrorBoundary'],
    shouldRevalidate?: AgnosticIndexRouteObject['shouldRevalidate'],
    handle?: AgnosticIndexRouteObject['handle'],
    index: true,
    children?: void,
    element?: React$Node | null,
    errorElement?: React$Node | null,
  |};

  declare export type NonIndexRouteObject = {|
    caseSensitive?: AgnosticNonIndexRouteObject['caseSensitive'],
    path?: AgnosticNonIndexRouteObject['path'],
    id?: AgnosticNonIndexRouteObject['id'],
    loader?: AgnosticNonIndexRouteObject['loader'],
    action?: AgnosticNonIndexRouteObject['action'],
    hasErrorBoundary?: AgnosticNonIndexRouteObject['hasErrorBoundary'],
    shouldRevalidate?: AgnosticNonIndexRouteObject['shouldRevalidate'],
    handle?: AgnosticNonIndexRouteObject['handle'],
    index?: false,
    children?: RouteObject[],
    element?: React$Node | null,
    errorElement?: React$Node | null,
  |};

  declare export type RouteObject = IndexRouteObject | NonIndexRouteObject;

  declare export type IndexRouteProps = {|
    caseSensitive?: IndexRouteObject['caseSensitive'],
    path?: IndexRouteObject['path'],
    id?: IndexRouteObject['id'],
    loader?: IndexRouteObject['loader'],
    action?: IndexRouteObject['action'],
    hasErrorBoundary?: IndexRouteObject['hasErrorBoundary'],
    shouldRevalidate?: IndexRouteObject['shouldRevalidate'],
    handle?: IndexRouteObject['handle'],
    index: true,
    children?: void,
    element?: React$Node | null,
    errorElement?: React$Node | null,
  |};

  declare export type RouteProps =
    | PathRouteProps
    | LayoutRouteProps
    | IndexRouteProps;

  declare export type PathRouteProps = {|
    caseSensitive?: NonIndexRouteObject['caseSensitive'],
    path?: NonIndexRouteObject['path'],
    id?: NonIndexRouteObject['id'],
    loader?: NonIndexRouteObject['loader'],
    action?: NonIndexRouteObject['action'],
    hasErrorBoundary?: NonIndexRouteObject['hasErrorBoundary'],
    shouldRevalidate?: NonIndexRouteObject['shouldRevalidate'],
    handle?: NonIndexRouteObject['handle'],
    index?: false,
    children?: React$Node,
    element?: React$Node | null,
    errorElement?: React$Node | null,
  |};

  declare export type LayoutRouteProps = PathRouteProps;

  declare export var createRoutesFromChildren: typeof createRoutesFromElements;

  declare export function renderMatches<RouteObjectType = RouteObject>(
    matches: Array<RouteMatch<string, RouteObjectType>> | null
  ): React$Element<any> | null;

  declare export type RouteMatch<
    ParamKey: string = string,
    RouteObjectType: RouteObject = RouteObject
  > = AgnosticRouteMatch<ParamKey, RouteObjectType>;

  declare export var MemoryRouter: React$ComponentType<{|
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Node,
  |}>;

  declare export var Navigate: (props: {|
    to: To,
    replace?: boolean,
    state?: any,
  |}) => null;

  declare export var Outlet: React$ComponentType<{|
    context?: mixed,
  |}>;

  declare export var Route: React$ComponentType<RouteProps>;

  declare export var Router: React$ComponentType<{|
    history: RouterHistory,
    children?: React$Node,
  |}>;

  declare export var Routes: React$ComponentType<{|
    children?: React$Node,
    location?: Location,
  |}>;

  declare export function createRoutesFromElements(
    elements: React$Node
  ): RouteObject[];

  declare export function useHref(to: To): string;

  declare export function useInRouterContext(): boolean;

  declare export function useLocation(): $PropertyType<
    ContextRouter,
    'location'
  >;

  declare export function useMatch<ParamKey: string = string>(
    pattern: PathPattern | string
  ): PathMatch<ParamKey> | null;

  declare export function useNavigationType(): 'POP' | 'PUSH' | 'REPLACE';

  declare export var useNavigate: () => ((
    to: To,
    options?: {|
      replace?: boolean,
      state?: any,
    |}
  ) => void) &
    ((delta: number) => void);

  declare export function useOutlet<T = any>(): React$Element<T> | null;

  declare export function useOutletContext<T = any>(): T;

  declare export function useParams<
    Params = $PropertyType<$PropertyType<ContextRouter, 'match'>, 'params'>
  >(): Params;
  declare export function useRouteMatch(
    path?: MatchPathOptions | string | string[]
  ): $PropertyType<ContextRouter, 'match'>;

  declare export function useRoutes<T = any>(
    routes: Array<RouteObject>,
    location?: LocationShape | string
  ): React$Element<T> | null;

  declare export function useMatches<Data = mixed, Handle = mixed>(): Array<{|
    id: string,
    pathname: string,
    params: Params<string>,
    data: Data,
    handle: Handle,
  |}>;

  // ----------------------------------/
  // `react-router-dom`                /
  // ----------------------------------/

  declare type DOMRouterOpts = {
    basename?: string,
    future?: FutureConfig,
    hydrationData?: {|
      loaderData: RouteData,
      actionData: RouteData | null,
      errors: RouteData | null,
    |},
    // Should be Window type but flow doesn't have this
    window?: any,
  };

  declare export function createBrowserRouter(
    routes: Array<RouteObject>,
    opts?: DOMRouterOpts
  ): Router;

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

  declare export type FormEncType =
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data';
  declare export type FormMethod = 'get' | MutationFormMethod;

  declare export var BrowserRouter: React$ComponentType<{|
    basename?: string,
    forceRefresh?: boolean,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Node,
  |}>;

  declare export var HashRouter: React$ComponentType<{|
    basename?: string,
    getUserConfirmation?: GetUserConfirmation,
    hashType?: 'slash' | 'noslash' | 'hashbang',
    children?: React$Node,
  |}>;

  declare export var Link: React$ComponentType<{
    +className?: string,
    +to: string | LocationShape,
    +replace?: boolean,
    +children?: React$Node,
    ...
  }>;

  declare export var NavLink: React$ComponentType<{
    +to: string | LocationShape,
    +className?:
      | string
      | ((props: {| isActive: boolean, isPending: boolean |}) => string | void),
    +style?:
      | { +[string]: mixed, ... }
      | ((props: {| isActive: boolean, isPending: boolean |}) => {
          +[string]: mixed,
          ...
        } | void),
    +children?:
      | React$Node
      | (({| isActive: boolean, isPending: boolean |}) => React$Node),
    +end?: boolean,
    +strict?: boolean,
    ...
  }>;

  declare export function useSearchParams(
    defaultInit?: URLSearchParamsInit
  ): [URLSearchParams, SetURLSearchParams];

  declare export function createSearchParams(
    init?: URLSearchParamsInit
  ): URLSearchParams;

  // ----------------------------------/
  // WIP (or unofficial)               /
  // ----------------------------------/

  declare export type GetUserConfirmation = (
    message: string,
    callback: (confirmed: boolean) => void
  ) => void;

  declare export type LocationShape = {
    pathname?: string,
    search?: string,
    hash?: string,
    state?: any,
    ...
  };

  declare export type MutationFormMethod = 'post' | 'put' | 'patch' | 'delete';

  // named `Action` in `@remix-run/router`
  declare export type HistoryAction = 'PUSH' | 'REPLACE' | 'POP';

  // named `History` in `@remix-run/router`
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
      callback:
        | string
        | ((location: Location, action: HistoryAction) => ?string)
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
    staticContext?: StaticRouterContext,
  |};

  declare type ContextRouterVoid = {
    history: RouterHistory | void,
    location: Location | void,
    match: Match | void,
    staticContext?: StaticRouterContext | void,
    ...
  };

  declare export type StaticRouterContext = { url?: string, ... };

  declare export var StaticRouter: React$ComponentType<{|
    basename?: string,
    location?: string | Location,
    context: StaticRouterContext,
    children?: React$Node,
  |}>;

  declare export type ResultTypeData = 'data';
  declare export type ResultTypeDeferred = 'deferred';
  declare export type ResultTypeRedirect = 'redirect';
  declare export type ResultTypeError = 'error';

  /**
   * Successful result from a loader or action
   */
  declare export type SuccessResult = {|
    type: ResultTypeData,
    data: any,
    statusCode?: number,
    headers?: Headers,
  |};

  // named UNSAFE_DeferredData in `@remix-run/router`
  declare export class DeferredData {
    (data: mixed, responseInit?: ResponseOptions): void;
    subscribe: mixed;
    cancel: mixed;
    resolveData: mixed;
    done: mixed;
    unwrappedData: mixed;
    pendingKeys: mixed;
  }

  /**
   * Successful defer() result from a loader or action
   */
  declare export type DeferredResult = {|
    type: ResultTypeDeferred,
    deferredData: DeferredData,
    statusCode?: number,
    headers?: Headers,
  |};

  /**
   * Redirect result from a loader or action
   */
  declare export type RedirectResult = {|
    type: ResultTypeRedirect,
    status: number,
    location: string,
    revalidate: boolean,
  |};

  /**
   * Unsuccessful result from a loader or action
   */
  declare export type ErrorResult = {|
    type: ResultTypeError,
    error: any,
    headers?: Headers,
  |};

  /**
   * Result from a loader or action - potentially successful or unsuccessful
   */
  declare export type DataResult =
    | SuccessResult
    | DeferredResult
    | RedirectResult
    | ErrorResult;

  /**
   * @private
   * Internal interface to pass around for action submissions, not intended for
   * external consumption
   */
  declare export type Submission = {|
    formMethod: FormMethod,
    formAction: string,
    formEncType: FormEncType,
    formData: FormData,
  |};

  declare export var Prompt: React$ComponentType<{|
    message: string | ((location: Location) => string | boolean),
    when?: boolean,
  |}>;

  declare export function withRouter<
    Props: { ... },
    Component: React$ComponentType<Props>
  >(
    WrappedComponent: Component
  ): React$ComponentType<
    $Diff<React$ElementConfig<Component>, ContextRouterVoid>
  >;

  declare export function useHistory(): $PropertyType<ContextRouter, 'history'>;
}
