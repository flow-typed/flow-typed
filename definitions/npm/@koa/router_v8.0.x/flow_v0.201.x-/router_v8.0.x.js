declare module "@koa/router" {
  declare type Middleware = (
    ctx: any,
    next: () => Promise<void>
  ) => Promise<void> | void;

  declare type ParamMiddleware = (
    param: string,
    ctx: any,
    next: () => Promise<void>
  ) => Promise<void> | void;

  declare class Router {
    constructor(opts?: $Shape<{|
      +prefix: string,
      +sensitive: boolean,
      +strict: boolean,
      +methods: Array<string>,
    |}>): Router;

    get(
      name: string,
      route: string | string[],
      handler: Middleware
    ): this;
    get(
      route: string | string[],
      ...middleware: Array<Middleware>
    ): this;

    patch(
      name: string,
      route: string | string[],
      handler: Middleware
    ): this;
    patch(
      route: string | string[],
      ...middleware: Array<Middleware>
    ): this;

    post(
      name: string,
      route: string | string[],
      handler: Middleware
    ): this;
    post(
      route: string | string[],
      ...middleware: Array<Middleware>
    ): this;

    put(
      name: string,
      route: string | string[],
      handler: Middleware
    ): this;
    put(
      route: string | string[],
      ...middleware: Array<Middleware>
    ): this;

    delete(
      name: string,
      route: string | string[],
      handler: Middleware
    ): this;
    delete(
      route: string | string[],
      ...middleware: Array<Middleware>
    ): this;

    del(
      name: string,
      route: string | string[],
      handler: Middleware
    ): this;
    del(
      route: string | string[],
      ...middleware: Array<Middleware>
    ): this;

    all(
      name: string,
      route: string | string[],
      handler: Middleware
    ): this;
    all(
      route: string | string[],
      ...middleware: Array<Middleware>
    ): this;

    use(...middleware: Array<Middleware>): this;
    use(
      path: string | Array<string>,
      ...middleware: Array<Middleware>
    ): this;

    prefix(prefix: string): this;

    routes(): Middleware;

    allowedMethods(options?: $Shape<{|
      +throw: boolean,
      +notImplemented: () => any,
      +methodNotAllowed: () => any,
    |}>): Middleware;

    param(param: string, middleware: ParamMiddleware): this;

    redirect(source: string, destination: string, code?: number): this;

    route(name: string): any | false;

    url(name: string, params: { ... }, options?: {| query: { ... } | string |}): string | Error;

    static url(path: string, params: { ... }): string;
  }

  declare module.exports: typeof Router;
}
