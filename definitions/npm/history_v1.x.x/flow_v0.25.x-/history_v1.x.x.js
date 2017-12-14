// https://github.com/ReactTraining/history
declare module "history" {
  declare type JSONLike =
    | void
    | string
    | boolean
    | number
    | { [key: string]: JSONLike }
    | Array<JSONLike>;
  declare type Action = "PUSH" | "REPLACE" | "POP";
  declare type CreateHistory<History> = (options: ?HistoryOptions) => History;
  declare type CreateHistoryEnhancer<HistoryEnhanced> = (
    createHistory: CreateHistory<History>
  ) => CreateHistory<HistoryEnhanced>;
  declare type Hash = string;
  declare type History = {
    length: number,
    location: Location,
    action: ?Action,
    listenBefore(hook: TransitionHook): HistoryListenerRef,
    listen(listener: LocationListener): HistoryListenerRef,
    transitionTo(location: Location): void,
    push(location: LocationDescriptor): void,
    replace(location: LocationDescriptor): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    createKey(): LocationKey,
    createPath(location: LocationDescriptor): Path,
    createHref(location: LocationDescriptor): Href,
    createLocation(
      location: LocationDescriptor,
      action: ?Action,
      key: ?LocationKey
    ): Location
  };
  declare type HistoryListenerRef = () => void;
  declare type HistoryOptions = Object;
  declare type Href = string;
  declare type Location = {
    pathname: Pathname,
    search: Search,
    query: Query,
    state: LocationState,
    action: Action,
    key: LocationKey
  };
  declare type LocationDescriptorObject = {
    pathname: Pathname,
    search: Search,
    query: Query,
    state: LocationState
  };
  declare type LocationDescriptor = LocationDescriptorObject | Path;
  declare type LocationKey = string;
  declare type LocationListener = (location: Location) => void;
  declare type LocationState = ?JSONLike;
  declare type Path = string;
  declare type Pathname = string;
  declare type Query = Object;
  declare type Search = string;
  declare type TransitionHook = (
    location: Location,
    callback: ?(result: any) => void
  ) => any;

  // base API
  declare var createHistory: CreateHistory<History>;
  declare var createHashHistory: CreateHistory<History>;
  declare var createMemoryHistory: CreateHistory<
    History & {
      index: number,
      entries: any[],
      canGo(n: number): boolean
    }
  >;

  // basename enhancer
  declare var useBasename: CreateHistoryEnhancer<History>;

  // before unload enhancer
  declare type BeforeUnloadHook = () => ?string;
  declare type BeforeUnloadExt = {
    listenBeforeUnload(hook: BeforeUnloadHook): HistoryListenerRef
  };
  declare var useBeforeUnload: CreateHistoryEnhancer<History & BeforeUnloadExt>;

  // queries enhancer
  declare var useQueries: CreateHistoryEnhancer<History>;
}

declare module "history/lib/createBrowserHistory" {
  declare module.exports: any; // TODO
}

declare module "history/lib/createHashHistory" {
  declare module.exports: any; // TODO
}

declare module "history/lib/createMemoryHistory" {
  declare module.exports: any; // TODO
}
