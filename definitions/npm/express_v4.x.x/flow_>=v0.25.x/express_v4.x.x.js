// @flow

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
      cookies: { [cookie: string]: string },
      fresh: boolean;
      hostname: boolean;
      ip: string;
      ips: Array<string>,
      method: string,
      originalUrl: string;
      params: { [param: string]: string },
      path: string,
      protocol: 'https' | 'http',
      query: { [name: string]: string },
      route: string,
      secure: boolean,
      signedCookies: { [signedCookie: string]: string },
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
        headers?: { [name: string]: string },
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
        (error: ?Error, req: Request, res: Response, next: NextFunction) => mixed;
    declare class Router {
      constructor(options?: RouterOptions): void;

      use(middleware: Middleware): void;
      use(...middelware: Array<Middleware>): void;
      use(path: string, ...middelware: Array<Middleware>): void;

      get(middleware: Middleware): void;
      get(...middelware: Array<Middleware>): void;
      get(path: string, ...middelware: Array<Middleware>): void;

      post(middleware: Middleware): void;
      post(...middelware: Array<Middleware>): void;
      post(path: string, ...middelware: Array<Middleware>): void;

      put(middleware: Middleware): void;
      put(...middelware: Array<Middleware>): void;
      put(path: string, ...middelware: Array<Middleware>): void;

      delete(middleware: Middleware): void;
      delete(...middelware: Array<Middleware>): void;
      delete(path: string, ...middelware: Array<Middleware>): void;
    }

    declare function serveStatic(root: string, options?: Object): Middleware;

    declare class Application extends Router mixins events$EventEmitter {
      constructor(): void;
      locals: {[name: string]: mixed};
      mountpath: string;
    }
    declare type $Application = Application;

    declare module.exports: {
        (): Application, // If you try to call like a function, it will use this signature
        static: serveStatic, // `static` property on the function
        Router: typeof Router, // `Router` property on the function
    };
}
