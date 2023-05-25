declare module 'react-router-dom' {
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

  declare export type InitialEntry = string | Partial<Location>;

  declare type LowerCaseFormMethod =
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete';
  declare type UpperCaseFormMethod =
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'DELETE';

  /**
   * Users can specify either lowercase or uppercase form methods on <Form>,
   * useSubmit(), <fetcher.Form>, etc.
   */
  declare export type HTMLFormMethod =
    | LowerCaseFormMethod
    | UpperCaseFormMethod;

  declare type V7_FormMethod = UpperCaseFormMethod;

  declare export type FormEncType =
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data';

  /**
   * Potential states for state.navigation
   */
  declare export type NavigationStates = {|
    Idle: {|
      state: 'idle',
      location: void,
      formMethod: void,
      formAction: void,
      formEncType: void,
      formData: void,
    |},
    Loading: {|
      state: 'loading',
      location: Location,
      formMethod: RemixFormMethod | V7_FormMethod | void,
      formAction: string | void,
      formEncType: FormEncType | void,
      formData: FormData | void,
    |},
    Submitting: {|
      state: 'submitting',
      location: Location,
      formMethod: RemixFormMethod | V7_FormMethod,
      formAction: string,
      formEncType: FormEncType,
      formData: FormData,
    |},
  |};

  declare export type Navigation = NavigationStates[$Keys<NavigationStates>];

  declare export type RevalidationState = 'idle' | 'loading';

  /**
   * Potential states for fetchers
   */
  declare type FetcherStates<TData = any> = {|
    Idle: {|
      state: 'idle',
      formMethod: void,
      formAction: void,
      formEncType: void,
      formData: void,
      data: TData | void,
      ' _hasFetcherDoneAnything '?: boolean,
    |},
    Loading: {|
      state: 'loading',
      formMethod: RemixFormMethod | V7_FormMethod | void,
      formAction: string | void,
      formEncType: FormEncType | void,
      formData: FormData | void,
      data: TData | void,
      ' _hasFetcherDoneAnything '?: boolean,
    |},
    Submitting: {|
      state: 'submitting',
      formMethod: RemixFormMethod | V7_FormMethod,
      formAction: string,
      formEncType: FormEncType,
      formData: FormData,
      data: TData | void,
      ' _hasFetcherDoneAnything '?: boolean,
    |},
  |};

  declare export type Fetcher<TData = any> = FetcherStates<TData>[$Keys<
    FetcherStates<TData>
  >];

  declare type BlockerBlocked = {|
    state: 'blocked',
    reset(): void,
    proceed(): void,
    location: Location,
  |};

  declare type BlockerUnblocked = {|
    state: 'unblocked',
    reset: void,
    proceed: void,
    location: void,
  |};

  declare type BlockerProceeding = {|
    state: 'proceeding',
    reset: void,
    proceed: void,
    location: Location,
  |};

  declare export type Blocker =
    | BlockerUnblocked
    | BlockerBlocked
    | BlockerProceeding;

  /**
   * State maintained internally by the router.  During a navigation, all states
   * reflect the the "old" location unless otherwise noted.
   */
  declare export type RouterState = {|
    /**
     * The action of the most recent navigation
     */
    historyAction: HistoryAction,

    /**
     * The current location reflected by the router
     */
    location: Location,

    /**
     * The current set of route matches
     */
    matches: AgnosticDataRouteMatch[],

    /**
     * Tracks whether we've completed our initial data load
     */
    initialized: boolean,

    /**
     * Current scroll position we should start at for a new view
     *  - number -> scroll position to restore to
     *  - false -> do not restore scroll at all (used during submissions)
     *  - null -> don't have a saved position, scroll to hash or top of page
     */
    restoreScrollPosition: number | false | null,

    /**
     * Indicate whether this navigation should skip resetting the scroll position
     * if we are unable to restore the scroll position
     */
    preventScrollReset: boolean,

    /**
     * Tracks the state of the current navigation
     */
    navigation: Navigation,

    /**
     * Tracks any in-progress revalidations
     */
    revalidation: RevalidationState,

    /**
     * Data from the loaders for the current matches
     */
    loaderData: RouteData,

    /**
     * Data from the action for the current matches
     */
    actionData: RouteData | null,

    /**
     * Errors caught from loaders for the current matches
     */
    errors: RouteData | null,

    /**
     * Map of current fetchers
     */
    fetchers: { [key: string]: Fetcher<> },

    /**
     * Map of current blockers
     */
    blockers: { [key: string]: Blocker<> },
  |};

  /**
   * Data that can be passed into hydrate a Router from SSR
   */
  declare export type HydrationState = Partial<{|
    loaderData: RouterState['loaderData'],
    actionData: RouterState['actionData'],
    errors: RouterState['errors'],
  |}>;

  declare export type RelativeRoutingType = 'route' | 'path';

  declare type BaseNavigateOptions = {|
    replace?: boolean,
    state?: any,
    preventScrollReset?: boolean,
    relative?: RelativeRoutingType,
    fromRouteId?: string,
  |};

  /**
   * Options for a navigate() call for a Link navigation
   */
  declare type LinkNavigateOptions = BaseNavigateOptions;

  /**
   * Options for a navigate() call for a Form navigation
   */
  declare type SubmissionNavigateOptions = {|
    ...BaseNavigateOptions,
    formMethod?: HTMLFormMethod,
    formEncType?: FormEncType,
    formData: FormData,
  |};

  /**
   * Options to pass to navigate() for either a Link or Form navigation
   */
  declare export type RouterNavigateOptions =
    | LinkNavigateOptions
    | SubmissionNavigateOptions;

  // ----------------------------------/
  // `react-router`                    /
  // ----------------------------------/

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

  declare export type MemoryRouterProps = {|
    basename?: string,
    children?: React$Node,
    initialEntries?: InitialEntry[],
    initialIndex?: number,
  |};

  declare export var MemoryRouter: React$ComponentType<MemoryRouterProps>;

  declare export function createMemoryRouter(
    routes: RouteObject[],
    opts?: {|
      basename?: string,
      future?: FutureConfig,
      hydrationData?: HydrationState,
      initialEntries?: InitialEntry[],
      initialIndex?: number,
    |}
  ): RemixRouter;

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

  /**
   * Because you can return or throw responses in loaders and actions,
   * you can use redirect to redirect to another route.
   *
   * It's really just a shortcut for this:
   *
   * new Response("", {
   *   status: 302,
   *   headers: {
   *     Location: someUrl,
   *   },
   * });
   */
  declare export function redirect(
    url: string,
    init?: number | ResponseOptions
  ): Response;

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

  /**
   * Returns the nearest ancestor Route error, which could be a loader/action
   * error or a render error.  This is intended to be called from your
   * ErrorBoundary/errorElement to display a proper error message.
   */
  declare export function useRouteError(): any;

  /**
   * Returns the loader data for the nearest ancestor Route loader
   */
  declare export function useLoaderData(): any;

  declare export type RouterProviderProps = {|
    fallbackElement?: React$Node,
    router: RemixRouter,
  |};

  declare export function RouterProvider(RouterProviderProps): React$Node;

  // ----------------------------------/
  // `react-router-dom`                /
  // ----------------------------------/

  declare type DOMRouterOpts = {|
    basename?: string,
    future?: FutureConfig,
    hydrationData?: {|
      loaderData?: RouteData,
      actionData?: RouteData | null,
      errors?: RouteData | null,
    |},
    // Should be Window type but flow doesn't have this
    window?: any,
  |};

  declare export function createBrowserRouter(
    routes: Array<RouteObject>,
    opts?: DOMRouterOpts
  ): RemixRouter;

  declare type URLSearchParamsInit =
    | string
    | Array<[string, string]>
    | { [key: string]: string | Array<string>, ... }
    | URLSearchParams;

  declare type SetURLSearchParams = (
    nextInit?:
      | URLSearchParamsInit
      | ((prevSearchParam: URLSearchParams) => URLSearchParamsInit),
    navigateOpts?: {|
      replace?: boolean,
      state?: any,
    |}
  ) => void;

  declare export type FormMethod = 'get' | RemixFormMethod;

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

  /**
   * exported as FormMethod in `@remix/router` but there is name collision in `react-router-dom`
   */
  declare export type RemixFormMethod = LowerCaseFormMethod;

  /**
   * named `Action` in `@remix-run/router`
   */
  declare export type HistoryAction = 'PUSH' | 'REPLACE' | 'POP';

  /**
   * named `History` in `@remix-run/router`
   */
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

  /**
   * exported as `Router` from `@remix/router` but `react-router` also export the component `Router`.
   * Note: the current type ommits private and internal properties and might need to be added in the futur.
   */
  declare export type RemixRouter = {|
    /**
     * Navigate to the given path
     * @param to Path to navigate to
     * @param opts Navigation options (method, submission, etc.)
     */
    navigate(to: To | null, opts?: RouterNavigateOptions): Promise<void>,
  |};

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
