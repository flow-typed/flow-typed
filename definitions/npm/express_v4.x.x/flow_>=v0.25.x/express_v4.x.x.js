// @flow
import type { Server } from 'http';
declare module 'express' {
  declare type RouterOptions = {
    caseSensitive?: boolean,
    mergeParams?: boolean,
    strict?: boolean
  };
  declare class RequestResponseBase {
    app: Application;
    get(field: string): string | void;
  }
  declare class Request extends http$IncomingMessage mixins RequestResponseBase {
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


  declare type CookieOptions = {
    domain?: string,
    encode?: (value: string) => string,
    expires?: Date,
    httpOnly?: boolean,
    maxAge?: string,
    path?: string,
    secure?: boolean,
    signed?: boolean
  };

  declare type SendFileOptions = {
    maxAge?: number,
    root?: string,
    lastModified?: boolean,
    headers?: {[name: string]: string},
    dotfiles?: 'allow' | 'deny' | 'ignore'
  };
  declare class Response extends http$ClientRequest mixins RequestResponseBase {
    headersSent: boolean;
    locals: mixed;
    append(field: string, value?: string): this;
    attachment(filename?: string): this;
    cookie(name: string, value: string, options?: CookieOptions): this;
    clearCookie(name: string, options?: CookieOptions): this;
    download(path: string, filename?: string, callback?: (err?: ?Error) => void): this;
    format(typesObject: {[type: string]: Function}): this;
    json(body?: mixed): this;
    jsonp(body?: mixed): this;
    links(links: {[name: string]: string}): this;
    location(path: string): this;
    redirect(status?: number, path: string): this;
    render(view: string, locals?: mixed, callback: (err?: ?Error) => mixed): this;
    send(body?: mixed): this;
    sendFile(path: string, options?: SendFileOptions, callback?: (err?: ?Error) => mixed): this;
    sendStatus(statusCode: number): this;
    set(field: string, value?: string): this;
    status(statusCode: number): this;
    type(type: string): this;
    vary(field: string): this;
  }
  declare type $Response = Response;
  declare type $Request = Request;
  declare type NextFunction = (err?: ?Error) => mixed;
  declare type Middleware =
    (req: Request, res: Response, next: NextFunction) => mixed |
    (error: ?Error, req : Request, res: Response, next: NextFunction) => mixed;
  declare class Route {
    get(middleware: Middleware): this;
    get(...middelware: Array<Middleware>): this;
    get(path: string, ...middelware: Array<Middleware>): this;

    post(middleware: Middleware): this;
    post(...middelware: Array<Middleware>): this;
    post(path: string, ...middelware: Array<Middleware>): this;

    put(middleware: Middleware): this;
    put(...middelware: Array<Middleware>): this;
    put(path: string, ...middelware: Array<Middleware>): this;

    head(middleware: Middleware): this;
    head(...middelware: Array<Middleware>): this;
    head(path: string, ...middelware: Array<Middleware>): this;

    delete(middleware: Middleware): this;
    delete(...middelware: Array<Middleware>): this;
    delete(path: string, ...middelware: Array<Middleware>): this;

    options(middleware: Middleware): this;
    options(...middelware: Array<Middleware>): this;
    options(path: string, ...middelware: Array<Middleware>): this;

    trace(middleware: Middleware): this;
    trace(...middelware: Array<Middleware>): this;
    trace(path: string, ...middelware: Array<Middleware>): this;

    copy(middleware: Middleware): this;
    copy(...middelware: Array<Middleware>): this;
    copy(path: string, ...middelware: Array<Middleware>): this;

    lock(middleware: Middleware): this;
    lock(...middelware: Array<Middleware>): this;
    lock(path: string, ...middelware: Array<Middleware>): this;

    mkcol(middleware: Middleware): this;
    mkcol(...middelware: Array<Middleware>): this;
    mkcol(path: string, ...middelware: Array<Middleware>): this;

    move(middleware: Middleware): this;
    move(...middelware: Array<Middleware>): this;
    move(path: string, ...middelware: Array<Middleware>): this;

    purge(middleware: Middleware): this;
    purge(...middelware: Array<Middleware>): this;
    purge(path: string, ...middelware: Array<Middleware>): this;

    propfind(middleware: Middleware): this;
    propfind(...middelware: Array<Middleware>): this;
    propfind(path: string, ...middelware: Array<Middleware>): this;

    proppatch(middleware: Middleware): this;
    proppatch(...middelware: Array<Middleware>): this;
    proppatch(path: string, ...middelware: Array<Middleware>): this;

    unlock(middleware: Middleware): this;
    unlock(...middelware: Array<Middleware>): this;
    unlock(path: string, ...middelware: Array<Middleware>): this;

    report(middleware: Middleware): this;
    report(...middelware: Array<Middleware>): this;
    report(path: string, ...middelware: Array<Middleware>): this;

    mkactivity(middleware: Middleware): this;
    mkactivity(...middelware: Array<Middleware>): this;
    mkactivity(path: string, ...middelware: Array<Middleware>): this;

    checkout(middleware: Middleware): this;
    checkout(...middelware: Array<Middleware>): this;
    checkout(path: string, ...middelware: Array<Middleware>): this;

    merge(middleware: Middleware): this;
    merge(...middelware: Array<Middleware>): this;
    merge(path: string, ...middelware: Array<Middleware>): this;

    // @TODO Missing 'm-search' but get flow illegal name error.

    notify(middleware: Middleware): this;
    notify(...middelware: Array<Middleware>): this;
    notify(path: string, ...middelware: Array<Middleware>): this;

    subscribe(middleware: Middleware): this;
    subscribe(...middelware: Array<Middleware>): this;
    subscribe(path: string, ...middelware: Array<Middleware>): this;

    unsubscribe(middleware: Middleware): this;
    unsubscribe(...middelware: Array<Middleware>): this;
    unsubscribe(path: string, ...middelware: Array<Middleware>): this;

    patch(middleware: Middleware): this;
    patch(...middelware: Array<Middleware>): this;
    patch(path: string, ...middelware: Array<Middleware>): this;

    search(middleware: Middleware): this;
    search(...middelware: Array<Middleware>): this;
    search(path: string, ...middelware: Array<Middleware>): this;

    connect(middleware: Middleware): this;
    connect(...middelware: Array<Middleware>): this;
    connect(path: string, ...middelware: Array<Middleware>): this;
  }
  declare class Router extends Route {
    constructor(options?: RouterOptions): void;

    use(middleware: Middleware): this;
    use(...middelware: Array<Middleware>): this;
    use(path: string, ...middelware: Array<Middleware>): this;
    use(path: string, router: Router): this;

    route(path: string): Route;
  }

  declare function serveStatic(root: string, options?: Object): Middleware;

  declare class Application extends Router mixins events$EventEmitter {
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
    render(name: string, optionsOrFunction: {[name: string]: mixed}, callback: (err: ?Error, html: string) => mixed): void;
  }

  declare type $Application = Application;

  declare module.exports: {
    (): Application, // If you try to call like a function, it will use this signature
    static: serveStatic, // `static` property on the function
    Router: typeof Router, // `Router` property on the function
  };
}
