// @flow
type RouterOptions = {
  caseSensitive?: boolean,
  mergeParams?: boolean,
  strict?: boolean
};
type next = (err?: ?Error) => void;

declare class Request extends http$IncomingMessage {
  app: any;
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
  get(field: string): string | void;
  header(field: string): string | void;
  is(type: string): boolean;
  param(name: string, defaultValue?: string): string | void;
}

declare class Response extends http$ClientRequest {

}
declare function middleware(req: Request, res: Response, next?: next): void;
declare function middleware(error: ?Error, req: Request, res: Response, next?: next): void;

declare class Router {
  constructor(options?: RouterOptions): void;
  use(path?: string, ...callbacks: Array<middleware>): void;
  use(...callbacks: Array<middleware>): void;
  get(path?: string, ...callbacks: Array<middleware>): void;
  post(path?: string, ...callbacks: Array<middleware>): void;
  put(path?: string , ...callbacks: Array<middleware>): void;
  delete(path?: string, ...callbacks: Array<middleware>): void;
}

declare function serveStatic(root: string, options?: Object): middleware;

declare class Application extends Router {
  constructor(): void;
}


function createApplication(): Application {
  return new Application();
}
Object.defineProperties(createApplication, {
  static: {
    value: serveStatic,
    writable: false,
    configurable: false
  },
  Router: {
    value: Router,
    writable: false,
    configurable: false
  }
});


declare module 'express' {
  declare var exports: typeof createApplication;
}
