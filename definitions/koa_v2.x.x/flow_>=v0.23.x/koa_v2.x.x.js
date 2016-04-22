type Request$charset = string;
type Request$fresh = bool;
type Request$header = Object;
type Request$host = string;
type Request$hostname = string;
type Request$href = string;
type Request$idempotent = bool;
type Request$ip = string;
type Request$ips = string[];
type Request$length = ?number;
type Request$method = any;
type Request$origin = string;
type Request$originalUrl = string;
type Request$path = string;
type Request$protocol = string;
type Request$query = Object;
type Request$querystring = string;
type Request$search = string;
type Request$socket = any;
type Request$stale = bool;
type Request$subdomains = string[];
type Request$type = string;
type Request$url = string;

declare module 'koa' {
  declare class Request extends http$ClientRequest {
    accepts(...types: string[]): string;
    acceptsCharsets(...charsets: string[]): string;
    acceptsEncodings(...types: string[]): string;
    acceptsLanguages(...charsets: string[]): string;
    charset: Request$charset;
    fresh: Request$fresh;
    get(field: string): any;
    header: Request$header;
    headers: Request$header;
    host: Request$host;
    hostname: Request$hostname;
    href: Request$href;
    idempotent: Request$idempotent;
    ip: Request$ip;
    ips: Request$ips;
    is(...types: string[]): bool;
    length: Request$length;
    method: Request$method;
    origin: Request$origin;
    originalUrl: Request$originalUrl;
    path: Request$path;
    protocol: Request$protocol;
    query: Request$query;
    querystring: Request$querystring;
    search: Request$search;
    secure: bool;
    socket: Request$socket;
    stale: Request$stale;
    subdomains: Request$subdomains;
    type: Request$type;
    url: Request$url;
  }
  declare class Response extends http$IncomingMessage {
    append(field: string, value: string): void;
    attachment(filename?: string): void;
    body?: ?string|Buffer|stream$Duplex|Object;
    etag: ?any;
    get(field: string): string;
    header: Object;
    headers: Object;
    headerSent: bool;
    is(...types: string[]): bool;
    lastModified: ?Date;
    length: ?number;
    message?: ?string;
    redirect(url: string, alt?: string): void;
    remove(field: string): void;
    set(field: string, value: string): void;
    set(fields: { [key: string]: string }): void;
    socket: any;
    status?: ?number;
    type: ?string;
    vary(field: string): void;

  }
  declare class Cookies {
    get(name: string, options?: {
      signed: bool,
    }): string;
    set(name: string, value: string, options?: {
      signed?: bool,
      expires?: Date,
      path?: string,
      domain?: string,
      secure?: bool,
      httpOnly?: bool,
    }): this;
  }
  declare class Context {
    app: Koa;
    assert(value: any, msgOrStatus?: number|string, properties?: Object): void;
    assert(value: any, msgOrStatus?: number|string, statusOrMsg?: number|string, properties?: Object): void;
    cookies: Cookies;
    req: http$ClientRequest;
    request: Request;
    res: http$IncomingMessage;
    respond: bool;
    response: Response;
    state: Object;
    throw(msg: string, properties?: Object): void;
    throw(msg: string, statusCode: number, properties?: Object): void;
    throw(statusCode: number, msg: string, properties?: Object): void;
    throw(statusCode: number, properties?: Object): void;

    //Request aliases
    accepts(...types: string[]): string;
    acceptsCharsets(...charsets: string[]): string;
    acceptsEncodings(...types: string[]): string;
    acceptsLanguages(...charsets: string[]): string;
    fresh: Request$fresh;
    get(field: string): any;
    header: Request$header;
    headers: Request$header;
    host: Request$host;
    hostname: Request$hostname;
    href: Request$href;
    ip: Request$ip;
    ips: Request$ips;
    is(...types: string[]): bool;
    method: Request$method;
    origin: Request$origin;
    originalUrl: Request$originalUrl;
    path: Request$path;
    protocol: Request$protocol;
    query: Request$query;
    querystring: Request$querystring;
    secure: bool;
    socket: Request$socket;
    stale: Request$stale;
    subdomains: Request$subdomains;
    url: Request$url;

    //Response aliases
    append(field: string, value: string): void;
    attachment(filename?: string): void;
    body?: ?string|Buffer|stream$Duplex|Object;
    etag: ?any;
    lastModified: ?Date;
    redirect(url: string, alt?: string): void;
    remove(field: string): void;
    set(field: string, value: string): void;
    set(fields: { [key: string]: string }): void;
    status?: ?number;

  }
  declare class Koa extends events$EventEmitter {
    static constructor(): Koa;
    listen(port: number): void;
    callback(): Function;
    keys: string[] | Object;
    use(contextFn: (ctx: Context, next: Function) => ?Promise): this;
  }
  declare var exports: Class<Koa>;
}
