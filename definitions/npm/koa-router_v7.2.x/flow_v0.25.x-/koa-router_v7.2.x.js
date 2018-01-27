/**
 * @flow
 */

// The usage of generics here is simply because `import type`
// doesn't seem to work outside of a `module`, so we just pass
// the type through a generic.
type KoaRouter$Middleware<Ctx> = (
  ctx: Ctx,
  next: () => Promise<void>
) => Promise<void> | void;

type KoaRouter$ParamMiddleware<Ctx> = (
  param: string,
  ctx: Ctx,
  next: () => Promise<void>
) => Promise<void> | void;

declare module "koa-router" {

  // It seems like `import type` only works inside a module, so we can just
  // pass this to the types above by using generics.
  import type { Context } from 'koa';

  declare class Router {
    constructor(opts?: {
      prefix?: string,
      sensitive?: boolean,
      strict?: boolean,
      methods?: Array<string>
    }): Router;

    get(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware<Context>
    ): this;
    get(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    patch(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware<Context>
    ): this;
    patch(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    post(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware<Context>
    ): this;
    post(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    put(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware<Context>
    ): this;
    put(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    delete(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware<Context>
    ): this;
    delete(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    del(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware<Context>
    ): this;
    del(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    all(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware<Context>
    ): this;
    all(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    use(...middleware: Array<KoaRouter$Middleware<Context>>): this;
    use(
      path: string | Array<string>,
      ...middleware: Array<KoaRouter$Middleware<Context>>
    ): this;

    prefix(prefix: string): this;

    routes(): KoaRouter$Middleware<Context>;

    allowedMethods(options?: {
      throw?: boolean,
      notImplemented?: () => any,
      methodNotAllowed?: () => any
    }): KoaRouter$Middleware<Context>;

    param(param: string, middleware: KoaRouter$ParamMiddleware<Context>): this;

    redirect(source: string, destination: string, code?: number): this;

    route(name: string): any | false;

    url(name: string, params?: any): string | Error;

    static url(path: string, params: Object): string
  }

  declare module.exports: typeof Router;
}
