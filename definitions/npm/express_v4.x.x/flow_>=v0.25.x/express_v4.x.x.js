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
      body: any;
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
    declare class Response extends http$ClientRequest mixins RequestResponseBase {
        headersSent: boolean;
        locals: any;
        append(field: string, value?: string): void;
        attachment(filename?: string): void;
        cookie(name: string, value: string, options?: CookieOptions): void;
        clearCookie(name: string, options?: CookieOptions): void;
        download(path: string, filename?: string, callback?: (err?: ?Error) => void): void;
        format(typesObject: {[type: string]: Function}): void;
        json(body?: any): void;
        jsonp(body?: any): void;
        links(links: {[name: string]: string}): void;
        location(path: string): void;
        redirect(status?: number, path: location): void;
        render(view: string, locals?: any, callback: (err?: ?Error) => any): void;
        send(body?: any): void;
        sendFile(path: string, options?: Object, callback?: (err?: ?Error) => any): void;
        sendStatus(statusCode: number): void;
        set(field: string, value?: string): void;
        status(statusCode: number): void;
        type(type: string): void;
        vary(field: string): void;
    }

    declare type NextFunction = (err?: ?Error) => any;
    declare type Middleware =
        (req: Request, res: Response, next: NextFunction) => any |
        (error: ?Error, req: Request, res: Response, next: NextFunction) => any;
    declare class Router {
      constructor(options?: RouterOptions): void;
      use(path?: string, ...middelware: Array<Middleware>): void;
      use(...middelware: Array<Middleware>): void;
      get(path?: string, ...middelware: Array<Middleware>): void;
      post(path?: string, ...middelware: Array<Middleware>): void;
      put(path?: string , ...middelware: Array<Middleware>): void;
      delete(path?: string, ...middelware: Array<Middleware>): void;
    }

    declare function serveStatic(root: string, options?: Object): Middleware;

    declare class Application extends Router {
      constructor(): void;
    }

    declare module.exports: {
        (): Application, // If you try to call like a function, it will use this signature
        static: serveStatic, // `static` property on the function
        Router: typeof Router, // `Router` property on the function
    };
}
