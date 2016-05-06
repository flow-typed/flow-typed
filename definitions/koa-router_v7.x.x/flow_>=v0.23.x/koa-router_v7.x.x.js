declare module 'koa-router' {
  declare class RouterContext extends Koa$Context {
    params: Object;
  }
  declare class Router {
    static constructor(options?: {
      prefix?: string,
    }): Router;
    static (options?: {
      prefix?: string,
    }): Router;
    delete(name: string, route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    delete(route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    get(name: string, route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    get(route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    patch(name: string, route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    patch(route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    post(name: string, route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    post(route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    prefix(prefix: string): this;
    put(name: string, route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    put(route: string, handler: (ctx: RouterContext, next: Function) => ?Promise): this;
    routes(): Function;
    use(...middlewares: ((ctx: Koa$Context, next: Function) => ?Promise)[]): this;
    use(path: string|string[], ...middlewares: ((ctx: Koa$Context, next: Function) => ?Promise)[]): this;
    allowedMethods(options?: {
      throw?: bool,
      notImplemented?: Function,
      methodNotAllowed?: Function,
    }): Function;
    param(param: string, middleware: Function): this;
    redirect(source: string, destination: string, code?: number): this;
    route(name: string): any|false;
    url(name: string, params?: any): string|Error;
    url(path: string, params: Object): string;

  }
  declare var exports: Class<Router>;
}
