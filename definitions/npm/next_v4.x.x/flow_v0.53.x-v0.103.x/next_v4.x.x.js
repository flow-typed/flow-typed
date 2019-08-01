declare module "next" {
  declare type RequestHandler = (
    req: http$IncomingMessage,
    res: http$ServerResponse,
    parsedUrl: any
  ) => Promise<void>;

  declare type NextApp = {
    prepare(): Promise<void>,
    getRequestHandler(): RequestHandler,
    render(
      req: http$IncomingMessage,
      res: http$ServerResponse,
      pathname: string,
      query?: Object
    ): Promise<void>,
    renderToHTML(
      req: http$IncomingMessage,
      res: http$ServerResponse,
      pathname: string,
      query?: Object
    ): string,
    renderError(
      err: Error,
      req: http$IncomingMessage,
      res: http$ServerResponse,
      pathname: string,
      query?: Object
    ): Promise<void>,
    renderErrorToHTML(
      err: Error,
      req: http$IncomingMessage,
      res: http$ServerResponse,
      pathname: string,
      query?: Object
    ): string
  };

  declare export type Options = {
    dev?: boolean,
    dir?: string,
    quiet?: boolean,
    staticMarkup?: boolean
  };

  declare export default (opts: Options) => NextApp
}

declare module "next/head" {
  declare module.exports: Class<React$Component<any, any>>;
}

declare module "next/link" {
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

  declare export type Props = {
    prefetch?: boolean,
    shallow?: boolean,
    scroll?: boolean,
    replace?: boolean,
    onError?: (error: any) => void,
    href: string | URLObject,
    as?: string | URLObject,
    passHref?: boolean
  };

  declare export default Class<React$Component<Props>>
}

declare module "next/router" {
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

  declare export type Router = {
    +route: string,
    +pathname: string,
    +asPath: string,
    +query: Object,
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
    ): Promise<boolean>
  };

  declare export function withRouter<T>(
    Component: React$ComponentType<T & { router: Router }>
  ): Class<React$Component<T>>;

  declare export default Router
}

declare module "next/document" {
  declare export type Context = {
    +pathname: string,
    +query: any,
    +req?: any,
    +res?: any,
    +xhr?: any,
    +err?: any
  };

  declare export var Head: Class<React$Component<any, any>>;
  declare export var Main: Class<React$Component<any, any>>;
  declare export var NextScript: Class<React$Component<any, any>>;
  declare export default Class<React$Component<any, any>> & {
    getInitialProps: (ctx: Context) => Promise<*>,
    renderPage(cb: Function): void
  }
}
