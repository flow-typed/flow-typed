
declare module 'next-routes' {
  import type { $Application, Middleware } from 'express';
  import type { Link as NextLink, Router as NextRouter } from 'next';

  declare type RoutesOpt = {
    Link: NextLink,
    Router: NextRouter
  }

  declare type Route = {
    name: string,
    pattern: string,
    page: string
  }

  declare interface Routes {
    Link: NextLink,
    Router: NextRouter,
    add(route: Route | string): Routes,
    add(pattern: string, page: string): Routes,
    add(name: string, pattern: string, page: string): Routes,
    getRequestHandler(app: $Application, customHandler: any => any): Middleware,
    pushRoute(route: string, params?: { [name: string]: string }, options?: any): void,
    replaceRoute(route: string, params?: { [name: string]: string }, options?: any): void,
    prefetchRoute(route: string, params?: { [name: string]: string }, options?: any): void
  }



  declare module.exports: (opt?: RoutesOpt) => Routes;
}
