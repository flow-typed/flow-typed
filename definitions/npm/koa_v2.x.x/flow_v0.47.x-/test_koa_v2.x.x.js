// @flow
const Koa = require('koa');
import type {
  Middleware,
  Context,
  Request,
  Response,
  ServerType,
  ApplicationJSON,
  ResponseJSON,
  ResponseInspect,
  SimpleHeader,
  RequestJSON,
  RequestInspect,
} from 'koa';

function test_Application() {
  const app = new Koa();
  const context: Context = app.context;
  // $ExpectError
  const _context: number = app.context;
  const callback: () => (req: http$IncomingMessage, res: http$ServerResponse) => void = app.callback;
  const handler: (req: http$IncomingMessage, res: http$ServerResponse) => void = app.callback();
  // $ExpectError
  const _callback: (req: http$IncomingMessage, res: http$ServerResponse) => void = app.callback;
  const env: string = app.env;
  // $ExpectError
  const _env: number = app.env;
  const keys: void|Array<string>|Object = app.keys;
  // $ExpectError
  const _keys: null = app.keys;
  const middleware: Array<Middleware> = app.middleware;
  // $ExpectError
  const _middleware: Middleware = app.middleware;
  const proxy: boolean = app.proxy;
  // $ExpectError
  const _proxy: number = app.proxy;
  const request: Request = app.request;
  // $ExpectError
  const _request: number = app.request;
  const response: Response = app.response;
  // $ExpectError
  const _response: number = app.response;
  const server: ServerType = app.server;
  // $ExpectError
  const _server: number = app.server;
  const subdomainOffset: number = app.subdomainOffset;
  // $ExpectError
  const _subdomainOffset: string = app.subdomainOffset;
  const listen: $PropertyType<ServerType, 'listen'> = app.listen;
  // $ExpectError
  const _listen: () => string = app.listen;
  const toJSON: () => ApplicationJSON = app.toJSON;
  // $ExpectError
  const _toJSON: () => string = app.toJSON;
  const inspect: () => ApplicationJSON = app.inspect;
  // $ExpectError
  const _inspect: () => string = app.inspect;
  app.use( (ctx, next) => {
    const ctx1: Context = ctx;
    // $ExpectError
    const _ctx1: number = ctx;
    const next1: () => Promise<void> = next;
    // $ExpectError
    const _next1: () => Promise<string> = next;
    return;
  });
  app.use(async (ctx, next) => {
    // $ExpectError
    return 'hello';
  });
}

function test_response() {
  declare var response:Response;
  const req: http$IncomingMessage = response.req;
  // $ExpectError
  const _req: number = response.req;
  const res: http$ServerResponse = response.res;
  // $ExpectError
  const _res: number = response.res;
  const ctx: Context = response.ctx;
  // $ExpectError
  const _ctx: number = response.ctx;
  const request: Request = response.request;
  // $ExpectError
  const _request: number = response.request;

  const body: string|Buffer|stream$Stream|Object|null|Array<mixed> = response.body;
  // $ExpectError
  const _body: number = response.body;
  const etag: string = response.etag;
  // $ExpectError
  const _etag: number = response.etag;
  const header: SimpleHeader = response.header;
  // $ExpectError
  const _header: {[key: string]: string} = response.header;
  const headers: SimpleHeader = response.headers;
  // $ExpectError
  const _headers: {[key: string]: string} = response.headers;
  const headerSent: boolean = response.headerSent;
  // $ExpectError
  const _headerSent: number = response.headerSent;

  const lastModified: Date = response.lastModified;
  // $ExpectError
  const _lastModified: boolean = response.lastModified;
  const message: string = response.message;
  // $ExpectError
  const _message: number = response.message;
  const socket: net$Socket = response.socket;
  // $ExpectError
  const _socket: number = response.socket;
  const status: number = response.status;
  // $ExpectError
  const _status: string = response.status;
  const type: string = response.type;
  // $ExpectError
  const _type: number = response.type;
  const writable: boolean = response.writable;
  // $ExpectError
  const _writable: string = response.writable;

  const length: number|void = response.length;
  // $ExpectError
  const _length: number = response.length;
  const append: (field: string, val: string | string[]) => void = response.append;
  // $ExpectError
  response.append(1, true);
  const attachment: (filename?: string) => void = response.attachment;
  // $ExpectError
  response.attachment(1);
  const get: (field: string) => string = response.get;
  // $ExpectError
  const value: number = response.get(1);
  const mimeType: string = response.is();
  // $ExpectError
  const _mimeType: string[] = response.is();
  const mimeOrFalse1: string|false = response.is('html');
  // $ExpectError
  const _mimeOrFalse1: string = response.is('html');
  const mimeOrFalse2: string|false = response.is(['html']);
  // $ExpectError
  const _mimeOrFalse2: string = response.is(['html']);
  const redirect: (url: string, alt?: string) => void = response.redirect;
  // $ExpectError
  response.redirect(1, true);
  const remove: (field: string) => void = response.remove;
  // $ExpectError
  response.remove(1);
  response.set({
    'Etag': '1234',
    'Last-Modified': 'date',
  });
  // $ExpectError
  response.set({
    'Etag': 1234,
    'Last-Modified': 123,
  });
  response.set('Etag', '1234');
  // $ExpectError
  response.set('Etag', 1234);
  const vary: (field: string) => void = response.vary;
  // $ExpectError
  response.vary(1);
  const toJSON: () => ResponseJSON = response.toJSON;
  // $ExpectError
  const _json: number = response.toJSON();
  const inspect: () => ResponseInspect = response.inspect;
  // $ExpectError
  const _inspectJson: number = response.inspect();
}

function test_request() {
  declare var request:Request;
  const req: http$IncomingMessage = request.req;
  // $ExpectError
  const _req: number = request.req;
  const res: http$ServerResponse = request.res;
  // $ExpectError
  const _res: number = request.res;
  const ctx: Context = request.ctx;
  // $ExpectError
  const _ctx: number = request.ctx;
  const response: Response = request.response;
  // $ExpectError
  const _response: number = request.response;
  const fresh: boolean = request.fresh;
  // $ExpectError
  const _fresh: number = request.fresh;
  const header: SimpleHeader = request.header;
  // $ExpectError
  const _header: {[key: string]: string}  = request.header;
  const headers: SimpleHeader = request.headers;
  // $ExpectError
  const _headers: {[key: string]: string} = request.headers;
  const host: string = request.host;
  // $ExpectError
  const _host: number = request.host;
  const hostname: string = request.hostname;
  // $ExpectError
  const _hostname: number = request.hostname;
  const href: string = request.href;
  // $ExpectError
  const _href: number = request.href;
  const idempotent: boolean = request.idempotent;
  // $ExpectError
  const _idempotent: number = request.idempotent;
  const ip: string = request.ip;
  // $ExpectError
  const _ip: number = request.ip;
  const ips: string[] = request.ips;
  // $ExpectError
  const _ips: string = request.ips;
  const method: string = request.method;
  // $ExpectError
  const _method: number = request.method;
  const origin: string = request.origin;
  // $ExpectError
  const _origin: number = request.origin;
  const originalUrl: string = request.originalUrl;
  // $ExpectError
  const _originalUrl: string[] = request.originalUrl;
  const path: string = request.path;
  // $ExpectError
  const _path: number = request.path;
  const protocol: string = request.protocol;
  // $ExpectError
  const _protocol: number = request.protocol;
  const query: {[key: string]: string} = request.query;
  // $ExpectError
  const _query: {[key: string]: string|number} = request.query;
  const querystring: string = request.querystring;
  // $ExpectError
  const _querystring: number = request.querystring;
  const search: string = request.search;
  // $ExpectError
  const _search: number = request.search;
  const secure: boolean = request.secure;
  // $ExpectError
  const _secure: number = request.secure;
  const socket: net$Socket = request.socket;
  // $ExpectError
  const _socket: number = request.socket;
  const stale: boolean = request.stale;
  // $ExpectError
  const _stale: number = request.stale;
  const subdomains: string[] = request.subdomains;
  // $ExpectError
  const _subdomains: string = request.subdomains;
  const type: string = request.type;
  // $ExpectError
  const _type: string[] = request.type;
  const url: string = request.url;
  // $ExpectError
  const _url: number = request.url;

  const charset: string|void = request.charset;
  // $ExpectError
  const _charset: string = request.charset;
  const length: number|void = request.length;
  // $ExpectError
  const _length: number = request.length;

  const type_: string[] = request.accepts();
  // $ExpectError
  const _type_: string = request.accepts();
  const typeOrFalse1: string|false = request.accepts('text/html');
  // $ExpectError
  const _typeOrFalse1: string = request.accepts('text/html');
  const typeOrFalse2: string|false = request.accepts('json', 'text');
  // $ExpectError
  const _typeOrFalse2: string[] = request.accepts('json', 'text');
  // ToDo: https://github.com/facebook/flow/issues/3009
  const typeOrFalse3: string|false = request.accepts((['json', 'text']:Array<string>));
  // $ExpectError
  const _typeOrFalse3: string[] = request.accepts((['json', 'text']:Array<string>));

  const charsets: string[] = request.acceptsCharsets();
  // $ExpectError
  const _charsets: string = request.acceptsCharsets();
  const charset1: buffer$Encoding|false =
    request.acceptsCharsets('gzip', 'deflate', 'identity');
  // $ExpectError
  const _charset1: number =
    request.acceptsCharsets('gzip', 'deflate', 'identity');
  // ToDo: https://github.com/facebook/flow/issues/3009
  const charset2: buffer$Encoding|false =
    request.acceptsCharsets((['gzip', 'deflate', 'identity']:Array<string>));
  // $ExpectError
  const _charset2: number =
    request.acceptsCharsets((['gzip', 'deflate', 'identity']:Array<string>));

  const languages: string[] = request.acceptsLanguages();
  // $ExpectError
  const _languages: string = request.acceptsLanguages();
  const language1: string|false = request.acceptsLanguages('es', 'en');
  // $ExpectError
  const _language1: string = request.acceptsLanguages('es', 'en');
  const language2: string|false = request.acceptsLanguages((['es', 'en']:string[]));
  // $ExpectError
  const _language2: string = request.acceptsLanguages((['es', 'en']:string[]));

  const get: (field: string) => string = request.get;
  // $ExpectError
  const _get: (field: number) => number = request.get;

  const mimeType: string = request.is();
  // $ExpectError
  const _mimeType: number = request.is();
  const mimeOrFalse1: string|false|null = request.is('html');
  // $ExpectError
  const _mimeOrFalse1: string = request.is('html');
  const mimeOrFalse2: string|false|null = request.is(['html']);
  // $ExpectError
  const _mimeOrFalse2: string = request.is(['html']);
  const toJSON: () => RequestJSON = request.toJSON;
  // $ExpectError
  const _toJSON: () => number = request.toJSON;
  const inspect: () => RequestInspect = request.inspect;
  // $ExpectError
  const _inspect: () => RequestJSON = request.inspect;
}

/*
 * simple test
 * pick from koa's api docs
 * https://github.com/koajs/koa/blob/v2.x/docs/api/index.md
*/
function test_index_md() {
  const app:Koa = new Koa();
  // $ExpectError
  const _app:number = new Koa();
  app.use((ctx) => {
    ctx.body = 'Hello World';
    // $ExpectError
    ctx.body = 1;
  });
  app.listen(3000);
  // $ExpectError
  app.listen(true);

  function test_cascading() {
    // x-response-time
    app.use(async function(ctx, next) {
      const start = new Date();
      await next();
      const ms = new Date() - start;
      ctx.set('X-Response-Time', `${ms}ms`);
      // $ExpectError
      ctx.set(ms, `${ms}ms`);
      // $ExpectError
      ctx.set(`${ms}ms`);
    });

    // logger
    app.use(async function (ctx, next) {
      const start = new Date();
      await next();
      const ms = new Date() - start;
      console.log(`${ctx.method} ${ctx.url} - ${ms}`);
    });

    // response
    app.use(ctx => {
      ctx.body = 'Hello World';
      // $ExpectError
      ctx.body = 1;
    });

    app.listen(3000);
    // $ExpectError
    app.listen(true);
  }
}
