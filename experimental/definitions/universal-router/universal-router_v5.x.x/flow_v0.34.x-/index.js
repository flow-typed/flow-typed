type UniversalRouterKey = {
  name: string | number,
  prefix?: string,
  delimiter?: string,
  optional: boolean,
  repeat: boolean,
  partial: boolean,
  pattern?: string
};

type UniversalRouterContext = {
  router: UniversalRouterType<*, *, *, *>,
  route: UniversalRouterRoute,
  next: (all?: boolean) => Promise<UniversalRouterRoute>,
  pathname: string,
  baseUrl: string,
  path: string,
  params: Object,
  keys: Array<UniversalRouterKey>
};

type UniversalRouterRoute = {
  path?: string,
  name?: string,
  parent?: ?UniversalRouterRoute,
  children?: ?Array<UniversalRouterRoute>,
  action?: (context: UniversalRouterContext, params: Object) => any
};

type UniversalRouterResolveRoute<R, C, O> = (context: C, params: Object) => O;

type UniversalRouterOptions<R, C, O> = {
  context?: C,
  baseUrl?: string,
  resolveRoute?: UniversalRouterResolveRoute<R, C, O>
};

type UniversalRouterResolveParams = {
  pathname: string
};

declare class UniversalRouterType<
  R, // Route type
  C, // Context type
  O, // Resolve output type
  RP: UniversalRouterResolveParams = UniversalRouterResolveParams
> {
  constructor(
    routes: R | Array<R>,
    options?: UniversalRouterOptions<R, C, O>
  ): UniversalRouterType<R, C, O, RP>;
  resolve(params: RP | string): Promise<O>;
  root: R;
}

declare module "universal-router" {
  declare module.exports: Class<UniversalRouterType<*, *, *, *>>;
}

type UniversalRouterGenerateUrl = (
  routeName: string,
  routeParams?: Object
) => string;
type UniversalRouterGenerateUrlsFnOpts = {
  encode?: string => string,
  stringifyQueryParams?: (params: Object) => string
};
type UniversalRouterGenerateUrlsFn = (
  router: UniversalRouterType<*, *, *, *>,
  options?: UniversalRouterGenerateUrlsFnOpts
) => UniversalRouterGenerateUrl;

declare module "universal-router/generateUrls" {
  declare module.exports: UniversalRouterGenerateUrlsFn;
}
