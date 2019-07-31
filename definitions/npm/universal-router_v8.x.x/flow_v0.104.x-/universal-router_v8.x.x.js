// PathToRegexpKey copied from 'path-to-regexp'
type $npm$UniversalRouter$PathToRegexpKey = {
  name: string | number,
  prefix: string,
  delimiter: string,
  optional: boolean,
  repeat: boolean,
  pattern: string,
  ...
};

type $npm$UniversalRouter$QueryParams = { [paramName: string]: string | string[], ... };

type $npm$UniversalRouter$Context = {...};

type $npm$UniversalRouter$ResolveContext = { pathname: string, ... };

declare module 'universal-router' {
  declare export type QueryParams = $npm$UniversalRouter$QueryParams;

  declare export type Context = $npm$UniversalRouter$Context;

  declare export type ResolveContext = $npm$UniversalRouter$ResolveContext;

  declare export type RouteContext<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = {
    router: UniversalRouter<R, C, RR, RC>,
    route: R,
    baseUrl: string,
    path: string,
    params: QueryParams,
    keys: Array<$npm$UniversalRouter$PathToRegexpKey>,
    next: (resume?: boolean) => Promise<RR>,
    ...
  };

  declare export type Result<T> = T | Promise<T | void> | void;

  declare export type $Route<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = {
    path?: string | RegExp | Array<string | RegExp>,
    name?: string,
    parent?: R | null,
    children?: $ReadOnlyArray<R>,
    action?: (
      context: RouteContext<R, C, RR, RC> & RC & C,
      params: QueryParams
    ) => Result<RR>,
    ...
  };

  declare export type RouteDefault = {|
    ...$Exact<$Route<RouteDefault, Context, any, ResolveContext>>,
  |};

  declare export type ResolveRoute<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = (
    context: RouteContext<R, C, RR, RC> & RC & C,
    params: QueryParams
  ) => Result<RR>;

  declare export type ErrorHandler<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = (
    error: Error & { status?: number, ... },
    context: RouteContext<R, C, RR, RC> & RC & C
  ) => Result<RR>;

  declare export type Options<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = {|
    context?: C,
    baseUrl?: string,
    resolveRoute?: ResolveRoute<R, C, RR, RC>,
    errorHandler?: ErrorHandler<R, C, RR, RC>,
  |};

  declare export default class UniversalRouter<
    R = RouteDefault,
    C = Context,
    RR = any, // Resolve result
    RC: ResolveContext = ResolveContext // Resolve context
  > {
    constructor(
      routes: R | $ReadOnlyArray<R>,
      options?: Options<R, C, RR, RC>
    ): void;
    baseUrl: string;
    errorHandler?: ErrorHandler<R, C, RR, RC>;
    resolveRoute: ResolveRoute<R, C, RR, RC>;
    context: { router: UniversalRouter<R, C, RR, RC>, ... } & C;
    root: R;
    routesByName?: Map<string, R>;
    resolve(pathnameOrContext: string | RC): Promise<RR>;
  }
}

declare module 'universal-router/sync' {
  declare export type QueryParams = $npm$UniversalRouter$QueryParams;

  declare export type Context = $npm$UniversalRouter$Context;

  declare export type ResolveContext = $npm$UniversalRouter$ResolveContext;

  declare export type RouteContext<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = {
    router: UniversalRouterSync<R, C, RR, RC>,
    route: R,
    baseUrl: string,
    path: string,
    params: QueryParams,
    keys: Array<$npm$UniversalRouter$PathToRegexpKey>,
    next: (resume?: boolean) => RR,
    ...
  };

  declare export type Result<T> = T | void;

  declare export type $Route<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = {
    path?: string | RegExp | Array<string | RegExp>,
    name?: string,
    parent?: R | null,
    children?: $ReadOnlyArray<R>,
    action?: (
      context: RouteContext<R, C, RR, RC> & RC & C,
      params: QueryParams
    ) => Result<RR>,
    ...
  };

  declare export type RouteDefault = {|
    ...$Exact<$Route<RouteDefault, Context, any, ResolveContext>>,
  |};

  declare export type ResolveRoute<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = (
    context: RouteContext<R, C, RR, RC> & RC & C,
    params: QueryParams
  ) => Result<RR>;

  declare export type ErrorHandler<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = (
    error: Error & { status?: number, ... },
    context: RouteContext<R, C, RR, RC> & RC & C
  ) => Result<RR>;

  declare export type Options<
    R,
    C = Context,
    RR = any,
    RC: ResolveContext = ResolveContext
  > = {|
    context?: C,
    baseUrl?: string,
    resolveRoute?: ResolveRoute<R, C, RR, RC>,
    errorHandler?: ErrorHandler<R, C, RR, RC>,
  |};

  declare export default class UniversalRouterSync<
    R = RouteDefault,
    C = Context,
    RR = any, // Resolve result
    RC: ResolveContext = ResolveContext // Resolve context
  > {
    constructor(
      routes: R | $ReadOnlyArray<R>,
      options?: Options<R, C, RR, RC>
    ): void;
    baseUrl: string;
    errorHandler?: ErrorHandler<R, C, RR, RC>;
    resolveRoute: ResolveRoute<R, C, RR, RC>;
    context: { router: UniversalRouterSync<R, C, RR, RC>, ... } & C;
    root: R;
    routesByName?: Map<string, R>;
    resolve(pathnameOrContext: string | RC): RR;
  }
}

declare module 'universal-router/generateUrls' {
  import type UniversalRouter from 'universal-router';

  declare type Params = { [paramName: string]: any, ... };

  declare type Options = {|
    encode?: (
      value: string,
      token: $npm$UniversalRouter$PathToRegexpKey
    ) => string,
    noValidate?: boolean,
    stringifyQueryParams?: (params: Params) => string,
  |};

  declare export default function generateUrls(
    router: UniversalRouter<any, any, any, any>,
    options?: Options
  ): (routeName: string, params?: Params) => string;
}
