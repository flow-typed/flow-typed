/**
 * @flow
 */

type KoaRouter$Middleware = (
  ctx: any,
  next: () => void | Promise<void>
) => Promise<void> | void;

type KoaRouter$ParamMiddleware = (
  param: string,
  ctx: any,
  next: () => void | Promise<void>
) => Promise<void> | void;

declare module "koa-router" {
  declare class Router {
    constructor(opts?: {
      prefix?: string,
      sensitive?: boolean,
      strict?: boolean,
      methods?: Array<string>
    }): Router;

    get(name: string, route: string, handler: KoaRouter$Middleware): this;
    get(route: string, handler: KoaRouter$Middleware): this;

    patch(name: string, route: string, handler: KoaRouter$Middleware): this;
    patch(route: string, handler: KoaRouter$Middleware): this;

    post(name: string, route: string, handler: KoaRouter$Middleware): this;
    post(route: string, handler: KoaRouter$Middleware): this;

    put(name: string, route: string, handler: KoaRouter$Middleware): this;
    put(route: string, handler: KoaRouter$Middleware): this;

    delete(name: string, route: string, handler: KoaRouter$Middleware): this;
    delete(route: string, handler: KoaRouter$Middleware): this;

    del(name: string, route: string, handler: KoaRouter$Middleware): this;
    del(route: string, handler: KoaRouter$Middleware): this;

    use(...middleware: Array<KoaRouter$Middleware>): this;
    use(
      path: string | Array<string>,
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    prefix(prefix: string): this;

    routes(): KoaRouter$Middleware;

    allowedMethods(options?: {
      throw?: boolean,
      notImplemented?: () => any,
      methodNotAllowed?: () => any
    }): KoaRouter$Middleware;

    param(param: string, middleware: KoaRouter$ParamMiddleware): this;

    redirect(source: string, destination: string, code?: number): this;

    route(name: string): any | false;

    url(name: string, params?: any): string | Error;

    static url(path: string, params: Object): string;
  }

  declare module.exports: typeof Router;
}
