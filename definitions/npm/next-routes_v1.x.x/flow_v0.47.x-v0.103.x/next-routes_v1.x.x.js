// @flow

declare module 'next-routes' {
  declare export type URLObject = {
    +href?: string,
    +protocol?: string,
    +slashes?: boolean,
    +auth?: string,
    +hostname?: string,
    +port?: string | number,
    +host?: string,
    +pathname?: string,
    +search?: string,
    +query?: Object,
    +hash?: string
  };

  declare export type LinkProps = {
    prefetch?: boolean,
    shallow?: boolean,
    scroll?: boolean,
    replace?: boolean,
    onError?: (error: any) => void,
    href: string | URLObject,
    as?: string | URLObject,
    passHref?: boolean
  };

  declare export type NextLink = Class<React$Component<LinkProps>>;

  declare export type RouteError = Error & { cancelled: boolean };
  declare export type RouteCallback = (url: string) => void;
  declare export type RouteErrorCallback = (
    err: RouteError,
    url: string
  ) => void;

  declare export type EventChangeOptions = {
    shallow?: boolean,
    [key: string]: any
  };

  declare export interface RouterEvents {
    on(event: "routeChangeStart", cb: RouteCallback): RouterEvents,
    on(event: "routeChangeComplete", cb: RouteCallback): RouterEvents,
    on(event: "routeChangeError", cb: RouteErrorCallback): RouterEvents,
    on(event: "beforeHistoryChange", cb: RouteCallback): RouterEvents,
    on(event: "hashChangeStart", cb: RouteCallback): RouterEvents,
    on(event: "hashChangeComplete", cb: RouteCallback): RouterEvents,

    off(event: "routeChangeStart", cb: RouteCallback): RouterEvents,
    off(event: "routeChangeComplete", cb: RouteCallback): RouterEvents,
    off(event: "routeChangeError", cb: RouteErrorCallback): RouterEvents,
    off(event: "beforeHistoryChange", cb: RouteCallback): RouterEvents,
    off(event: "hashChangeStart", cb: RouteCallback): RouterEvents,
    off(event: "hashChangeComplete", cb: RouteCallback): RouterEvents
  }

  declare export type NextRouter = {
    +route: string,
    +pathname: string,
    +asPath: string,
    +query: Object,
    events: RouterEvents,
    onRouteChangeStart: ?RouteCallback,
    onRouteChangeComplete: ?RouteCallback,
    onRouteChangeError: ?RouteErrorCallback,
    onBeforeHistoryChange: ?RouteCallback,
    onAppUpdated: ?RouteCallback,
    push(
      url: string,
      as: ?string,
      options?: EventChangeOptions
    ): Promise<boolean>,
    replace(
      url: string,
      as: ?string,
      options?: EventChangeOptions
    ): Promise<boolean>,
    prefetch(url: string): Promise<*>,
    pushRoute(
      route: string,
      params?: { [name: string]: string },
      options?: any
    ): Promise<boolean>,
    replaceRoute(
      route: string,
      params?: { [name: string]: string },
      options?: any
    ): Promise<boolean>,
    prefetchRoute(
      route: string,
      params?: { [name: string]: string },
      options?: any
    ): Promise<*>,
  };

  declare type RoutesOpt = {
    Link: NextLink,
    Router: NextRouter
  };

  declare type Route = {
    name: string,
    pattern: string,
    page: string
  };

  declare interface Routes {
    Link: NextLink;
    Router: NextRouter;
    add(route: Route | string): Routes;
    add(pattern: string, page: string): Routes;
    add(name: string, pattern: string, page: string): Routes;
    getRequestHandler(app: Object, customHandler?: (any) => any): Function;
  }

  declare module.exports: (opt?: RoutesOpt) => Routes;
}
