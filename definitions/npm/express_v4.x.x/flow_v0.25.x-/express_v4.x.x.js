// @flow
import type { Server } from 'http';

declare type express$RouterOptions = {
  caseSensitive?: boolean,
  mergeParams?: boolean,
  strict?: boolean
};

declare class express$RequestResponseBase {
  app: express$Application;
  get(field: string): string | void;
}

declare class express$Request extends http$IncomingMessage mixins express$RequestResponseBase {
  baseUrl: string;
  body: mixed;
  cookies: {[cookie: string]: string};
  fresh: boolean;
  hostname: boolean;
  ip: string;
  ips: Array<string>;
  method: string;
  originalUrl: string;
  params: {[param: string]: string};
  path: string;
  protocol: 'https' | 'http';
  query: {[name: string]: string};
  route: string;
  secure: boolean;
  signedCookies: {[signedCookie: string]: string};
  stale: boolean;
  subdomains: Array<string>;
  xhr: boolean;
  accepts(types: string): string | false;
  acceptsCharsets(...charsets: Array<string>): string | false;
  acceptsEncodings(...encoding: Array<string>): string | false;
  acceptsLanguages(...lang: Array<string>): string | false;
  header(field: string): string | void;
  is(type: string): boolean;
  param(name: string, defaultValue?: string): string | void;
}

declare type express$CookieOptions = {
  domain?: string,
  encode?: (value: string) => string,
  expires?: Date,
  httpOnly?: boolean,
  maxAge?: number,
  path?: string,
  secure?: boolean,
  signed?: boolean
};

declare type express$RenderCallback = (err: Error | null, html?: string) => mixed;

declare type express$SendFileOptions = {
  maxAge?: number,
  root?: string,
  lastModified?: boolean,
  headers?: {[name: string]: string},
  dotfiles?: 'allow' | 'deny' | 'ignore'
};

declare class express$Response extends http$ClientRequest mixins express$RequestResponseBase {
  headersSent: boolean;
  locals: {[name: string]: mixed};
  append(field: string, value?: string): this;
  attachment(filename?: string): this;
  cookie(name: string, value: string, options?: express$CookieOptions): this;
  clearCookie(name: string, options?: express$CookieOptions): this;
  download(path: string, filename?: string, callback?: (err?: ?Error) => void): this;
  format(typesObject: {[type: string]: Function}): this;
  json(body?: mixed): this;
  jsonp(body?: mixed): this;
  links(links: {[name: string]: string}): this;
  location(path: string): this;
  redirect(url: string, ...args: Array<void>): this;
  redirect(status: number, url: string, ...args: Array<void>): this;
  render(view: string, locals?: {[name: string]: mixed}, callback?: express$RenderCallback): this;
  send(body?: mixed): this;
  sendFile(path: string, options?: express$SendFileOptions, callback?: (err?: ?Error) => mixed): this;
  sendStatus(statusCode: number): this;
  set(field: string, value?: string): this;
  status(statusCode: number): this;
  type(type: string): this;
  vary(field: string): this;
}

declare type express$NextFunction = (err?: ?Error) => mixed;
declare type express$BaseMiddleware<Req, Res> =
  ((req: Req, res: Res, next: express$NextFunction) => mixed) |
  ((error: ?Error, req: Req, res: Res, next: express$NextFunction) => mixed);
declare type express$Middleware = express$BaseMiddleware<express$Request, express$Response>
declare interface express$BaseRouteMethodType<Req, Res, T> {
  (middleware: express$BaseMiddleware<Req, Res>): T;
  (...middleware: Array<express$BaseMiddleware<Req, Res>>): T;
  (path: string|RegExp|string[], ...middleware: Array<express$BaseMiddleware<Req, Res>>): T;
}
declare type express$RouteMethodType<T> = express$BaseRouteMethodType<express$Request, express$Response, T>;
declare interface express$BaseRouterMethodType<Req, Res, T> {
  (middleware: express$BaseMiddleware<Req, Res>): T;
  (...middleware: Array<express$BaseMiddleware<Req, Res>>): T;
  (path: string|RegExp|string[], ...middleware: Array<express$BaseMiddleware<Req, Res>>): T;
  (path: string, router: express$BaseRouter<Req, Res>): T;
}
declare type express$RouterMethodType<T> = express$BaseRouterMethodType<express$Request, express$Response, T>;
declare class express$BaseRoute<Req, Res> {
  all: express$BaseRouteMethodType<Req, Res, this>;
  get: express$BaseRouteMethodType<Req, Res, this>;
  post: express$BaseRouteMethodType<Req, Res, this>;
  put: express$BaseRouteMethodType<Req, Res, this>;
  head: express$BaseRouteMethodType<Req, Res, this>;
  delete: express$BaseRouteMethodType<Req, Res, this>;
  options: express$BaseRouteMethodType<Req, Res, this>;
  trace: express$BaseRouteMethodType<Req, Res, this>;
  copy: express$BaseRouteMethodType<Req, Res, this>;
  lock: express$BaseRouteMethodType<Req, Res, this>;
  mkcol: express$BaseRouteMethodType<Req, Res, this>;
  move: express$BaseRouteMethodType<Req, Res, this>;
  purge: express$BaseRouteMethodType<Req, Res, this>;
  propfind: express$BaseRouteMethodType<Req, Res, this>;
  proppatch: express$BaseRouteMethodType<Req, Res, this>;
  unlock: express$BaseRouteMethodType<Req, Res, this>;
  report: express$BaseRouteMethodType<Req, Res, this>;
  mkactivity: express$BaseRouteMethodType<Req, Res, this>;
  checkout: express$BaseRouteMethodType<Req, Res, this>;
  merge: express$BaseRouteMethodType<Req, Res, this>;

  // @TODO Missing 'm-search' but get flow illegal name error.

  notify: express$BaseRouteMethodType<Req, Res, this>;
  subscribe: express$BaseRouteMethodType<Req, Res, this>;
  unsubscribe: express$BaseRouteMethodType<Req, Res, this>;
  patch: express$BaseRouteMethodType<Req, Res, this>;
  search: express$BaseRouteMethodType<Req, Res, this>;
  connect: express$BaseRouteMethodType<Req, Res, this>;
}
declare type express$Route = express$BaseRoute<express$Request, express$Response>;

declare class express$BaseRouter<Req, Res> extends express$BaseRoute<Req, Res> {
  constructor(options?: express$RouterOptions): void;
  use: express$BaseRouterMethodType<Req, Res, this>;
  route(path: string): express$BaseRoute<Req, Res>;
  static (): this;
}
declare type express$Router = express$BaseRouter<express$Request, express$Response>;

declare class express$BaseApplication<Req, Res> extends express$BaseRouter<Req, Res> mixins events$EventEmitter {
  constructor(): void;
  locals: {[name: string]: mixed};
  mountpath: string;
  listen(port: number, hostname?: string, backlog?: number, callback?: (err?: ?Error) => mixed): Server;
  listen(port: number, hostname?: string, callback?: (err?: ?Error) => mixed): Server;
  listen(port: number, callback?: (err?: ?Error) => mixed): Server;
  listen(path: string, callback?: (err?: ?Error) => mixed): Server;
  listen(handle: Object, callback?: (err?: ?Error) => mixed): Server;
  disable(name: string): void;
  disabled(name: string): boolean;
  enable(name: string): void;
  enabled(name: string): boolean;
  engine(name: string, callback: Function): void;
  /**
   * Mixed will not be taken as a value option. Issue around using the GET http method name and the get for settings.
   */
  //   get(name: string): mixed;
  set(name: string, value: mixed): mixed;
  render(name: string, optionsOrFunction: {[name: string]: mixed}, callback: express$RenderCallback): void;
}
declare type express$Application = express$BaseApplication<express$Request, express$Response>;

declare module 'express' {
  declare function serveStatic(root: string, options?: Object): express$Middleware;

  declare type RouterOptions = express$RouterOptions;
  declare type CookieOptions = express$CookieOptions;
  declare type Middleware = express$Middleware;
  declare type NextFunction = express$NextFunction;
  declare type $Response = express$Response;
  declare type $Request = express$Request;
  declare type $Application = express$Application;

  declare module.exports: {
    (): express$BaseApplication<*, *>, // If you try to call like a function, it will use this signature
    static: serveStatic, // `static` property on the function
    Router: Class<express$Router>, // `Router` property on the function
  };
}
