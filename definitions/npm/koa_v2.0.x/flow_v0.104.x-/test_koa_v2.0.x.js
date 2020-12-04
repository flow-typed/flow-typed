// @flow
const Koa = require('koa');
import type {
  Middleware,
  Context,
  Request,
  Response,
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
  // $FlowExpectedError
  const _context: number = app.context;
  const callback: () => (req: http$IncomingMessage<>, res: http$ServerResponse) => void = app.callback;
  const handler: (req: http$IncomingMessage<>, res: http$ServerResponse) => void = app.callback();
  // $FlowExpectedError
  const _callback: (req: http$IncomingMessage<>, res: http$ServerResponse) => void = app.callback;
  const env: string = app.env;
  // $FlowExpectedError
  const _env: number = app.env;
  const keys: void|Array<string>|Object = app.keys;
  // $FlowExpectedError
  const _keys: null = app.keys;
  const middleware: Array<Middleware> = app.middleware;
  // $FlowExpectedError
  const _middleware: Middleware = app.middleware;
  const name: void|string = app.name;
  // $FlowExpectedError
  const _name: number = app.name;
  const proxy: boolean = app.proxy;
  // $FlowExpectedError
  const _proxy: number = app.proxy;
  const request: Request = app.request;
  // $FlowExpectedError
  const _request: number = app.request;
  const response: Response = app.response;
  // $FlowExpectedError
  const _response: number = app.response;
  const server: http$Server = app.server;
  // $FlowExpectedError
  const _server: number = app.server;
  const subdomainOffset: number = app.subdomainOffset;
  // $FlowExpectedError
  const _subdomainOffset: string = app.subdomainOffset;
  const listen: $PropertyType<http$Server, 'listen'> = app.listen;
  // $FlowExpectedError
  const _listen: () => string = app.listen;
  const toJSON: () => ApplicationJSON = app.toJSON;
  // $FlowExpectedError
  const _toJSON: () => string = app.toJSON;
  const inspect: () => ApplicationJSON = app.inspect;
  // $FlowExpectedError
  const _inspect: () => string = app.inspect;
  app.use( (ctx, next) => {
    const ctx1: Context = ctx;
    // $FlowExpectedError
    const _ctx1: number = ctx;
    const next1: () => Promise<void> = next;
    // $FlowExpectedError
    const _next1: () => Promise<string> = next;
    return;
  });
  app.use(async (ctx, next) => {
    // $FlowExpectedError
    return 'hello';
  });
}

function test_response() {
  declare var response:Response;
  const req: http$IncomingMessage<> = response.req;
  // $FlowExpectedError
  const _req: number = response.req;
  const res: http$ServerResponse = response.res;
  // $FlowExpectedError
  const _res: number = response.res;
  const ctx: Context = response.ctx;
  // $FlowExpectedError
  const _ctx: number = response.ctx;
  const request: Request = response.request;
  // $FlowExpectedError
  const _request: number = response.request;

  const body: $PropertyType<Response, 'body'> = response.body;
  // $FlowExpectedError
  const _body: number = response.body;
  const etag: string = response.etag;
  // $FlowExpectedError
  const _etag: number = response.etag;
  const header: SimpleHeader = response.header;
  // $FlowExpectedError
  const _header: { [key: string]: string, ... } = response.header;
  const headers: SimpleHeader = response.headers;
  // $FlowExpectedError
  const _headers: { [key: string]: string, ... } = response.headers;
  const headerSent: boolean = response.headerSent;
  // $FlowExpectedError
  const _headerSent: number = response.headerSent;

  const lastModified: Date = response.lastModified;
  // $FlowExpectedError
  const _lastModified: boolean = response.lastModified;
  const message: string = response.message;
  // $FlowExpectedError
  const _message: number = response.message;
  const socket: net$Socket = response.socket;
  // $FlowExpectedError
  const _socket: number = response.socket;
  const status: number = response.status;
  // $FlowExpectedError
  const _status: string = response.status;
  const type: string = response.type;
  // $FlowExpectedError
  const _type: number = response.type;
  const writable: boolean = response.writable;
  // $FlowExpectedError
  const _writable: string = response.writable;

  const length: number|void = response.length;
  // $FlowExpectedError
  const _length: number = response.length;
  const append: (field: string, val: string | string[]) => void = response.append;
  // $FlowExpectedError
  response.append(1, true);
  const attachment: (filename?: string) => void = response.attachment;
  // $FlowExpectedError
  response.attachment(1);
  const get: (field: string) => string = response.get;
  // $FlowExpectedError
  const value: number = response.get(1);
  const mimeType: string = response.is();
  // $FlowExpectedError
  const _mimeType: string[] = response.is();
  const mimeOrFalse1: string|false = response.is('html');
  // $FlowExpectedError
  const _mimeOrFalse1: string = response.is('html');
  const mimeOrFalse2: string|false = response.is(['html']);
  // $FlowExpectedError
  const _mimeOrFalse2: string = response.is(['html']);
  const redirect: (url: string, alt?: string) => void = response.redirect;
  // $FlowExpectedError
  response.redirect(1, true);
  const remove: (field: string) => void = response.remove;
  // $FlowExpectedError
  response.remove(1);
  response.set({
    'Etag': '1234',
    'Last-Modified': 'date',
  });
  // $FlowExpectedError
  response.set({
    'Etag': 1234,
    'Last-Modified': 123,
  });
  response.set('Etag', '1234');
  // $FlowExpectedError
  response.set('Etag', 1234);
  const vary: (field: string) => void = response.vary;
  // $FlowExpectedError
  response.vary(1);
  const toJSON: () => ResponseJSON = response.toJSON;
  // $FlowExpectedError
  const _json: number = response.toJSON();
  const inspect: () => ResponseInspect = response.inspect;
  // $FlowExpectedError
  const _inspectJson: number = response.inspect();
}

function test_request() {
  declare var request:Request;
  const req: http$IncomingMessage<> = request.req;
  // $FlowExpectedError
  const _req: number = request.req;
  const res: http$ServerResponse = request.res;
  // $FlowExpectedError
  const _res: number = request.res;
  const ctx: Context = request.ctx;
  // $FlowExpectedError
  const _ctx: number = request.ctx;
  const response: Response = request.response;
  // $FlowExpectedError
  const _response: number = request.response;
  const fresh: boolean = request.fresh;
  // $FlowExpectedError
  const _fresh: number = request.fresh;
  const header: SimpleHeader = request.header;
  // $FlowExpectedError
  const _header: { [key: string]: string, ... }  = request.header;
  const headers: SimpleHeader = request.headers;
  // $FlowExpectedError
  const _headers: { [key: string]: string, ... } = request.headers;
  const host: string = request.host;
  // $FlowExpectedError
  const _host: number = request.host;
  const hostname: string = request.hostname;
  // $FlowExpectedError
  const _hostname: number = request.hostname;
  const href: string = request.href;
  // $FlowExpectedError
  const _href: number = request.href;
  const idempotent: boolean = request.idempotent;
  // $FlowExpectedError
  const _idempotent: number = request.idempotent;
  const ip: string = request.ip;
  // $FlowExpectedError
  const _ip: number = request.ip;
  const ips: string[] = request.ips;
  // $FlowExpectedError
  const _ips: string = request.ips;
  const method: string = request.method;
  // $FlowExpectedError
  const _method: number = request.method;
  const origin: string = request.origin;
  // $FlowExpectedError
  const _origin: number = request.origin;
  const originalUrl: string = request.originalUrl;
  // $FlowExpectedError
  const _originalUrl: string[] = request.originalUrl;
  const path: string = request.path;
  // $FlowExpectedError
  const _path: number = request.path;
  const protocol: string = request.protocol;
  // $FlowExpectedError
  const _protocol: number = request.protocol;
  const query: { [key: string]: string, ... } = request.query;
  // $FlowExpectedError
  const _query: { [key: string]: string|number, ... } = request.query;
  const querystring: string = request.querystring;
  // $FlowExpectedError
  const _querystring: number = request.querystring;
  const search: string = request.search;
  // $FlowExpectedError
  const _search: number = request.search;
  const secure: boolean = request.secure;
  // $FlowExpectedError
  const _secure: number = request.secure;
  const socket: net$Socket = request.socket;
  // $FlowExpectedError
  const _socket: number = request.socket;
  const stale: boolean = request.stale;
  // $FlowExpectedError
  const _stale: number = request.stale;
  const subdomains: string[] = request.subdomains;
  // $FlowExpectedError
  const _subdomains: string = request.subdomains;
  const type: string = request.type;
  // $FlowExpectedError
  const _type: string[] = request.type;
  const url: string = request.url;
  // $FlowExpectedError
  const _url: number = request.url;

  const charset: string|void = request.charset;
  // $FlowExpectedError
  const _charset: string = request.charset;
  const length: number|void = request.length;
  // $FlowExpectedError
  const _length: number = request.length;

  const type_: string[] = request.accepts();
  // $FlowExpectedError
  const _type_: string = request.accepts();
  const typeOrFalse1: string|false = request.accepts('text/html');
  // $FlowExpectedError
  const _typeOrFalse1: string = request.accepts('text/html');
  const typeOrFalse2: string|false = request.accepts('json', 'text');
  // $FlowExpectedError
  const _typeOrFalse2: string[] = request.accepts('json', 'text');
  // ToDo: https://github.com/facebook/flow/issues/3009
  const typeOrFalse3: string|false = request.accepts((['json', 'text']:Array<string>));
  // $FlowExpectedError
  const _typeOrFalse3: string[] = request.accepts((['json', 'text']:Array<string>));

  const charsets: string[] = request.acceptsCharsets();
  // $FlowExpectedError
  const _charsets: string = request.acceptsCharsets();
  const charset1: buffer$Encoding|false =
    request.acceptsCharsets('gzip', 'deflate', 'identity');
  // $FlowExpectedError
  const _charset1: number =
    request.acceptsCharsets('gzip', 'deflate', 'identity');
  // ToDo: https://github.com/facebook/flow/issues/3009
  const charset2: buffer$Encoding|false =
    request.acceptsCharsets((['gzip', 'deflate', 'identity']:Array<string>));
  // $FlowExpectedError
  const _charset2: number =
    request.acceptsCharsets((['gzip', 'deflate', 'identity']:Array<string>));

  const languages: string[] = request.acceptsLanguages();
  // $FlowExpectedError
  const _languages: string = request.acceptsLanguages();
  const language1: string|false = request.acceptsLanguages('es', 'en');
  // $FlowExpectedError
  const _language1: string = request.acceptsLanguages('es', 'en');
  const language2: string|false = request.acceptsLanguages((['es', 'en']:string[]));
  // $FlowExpectedError
  const _language2: string = request.acceptsLanguages((['es', 'en']:string[]));

  const get: (field: string) => string = request.get;
  // $FlowExpectedError
  const _get: (field: number) => number = request.get;

  const mimeType: string = request.is();
  // $FlowExpectedError
  const _mimeType: number = request.is();
  const mimeOrFalse1: string|false|null = request.is('html');
  // $FlowExpectedError
  const _mimeOrFalse1: string = request.is('html');
  const mimeOrFalse2: string|false|null = request.is(['html']);
  // $FlowExpectedError
  const _mimeOrFalse2: string = request.is(['html']);
  const toJSON: () => RequestJSON = request.toJSON;
  // $FlowExpectedError
  const _toJSON: () => number = request.toJSON;
  const inspect: () => RequestInspect = request.inspect;
  // $FlowExpectedError
  const _inspect: () => RequestJSON = request.inspect;
}

/*
 * simple test
 * pick from koa's api docs
 * https://github.com/koajs/koa/blob/v2.x/docs/api/index.md
*/
function test_index_md() {
  const app:Koa = new Koa();
  // $FlowExpectedError
  const _app:number = new Koa();
  app.use((ctx) => {
    ctx.body = 'Hello World';
    ctx.body = { key: 'value' };
    // $FlowExpectedError
    ctx.body = 1;
  });
  app.listen(3000);
  app.listen(3000, () => {});

  function test_cascading() {
    // x-response-time
    app.use(async function(ctx, next) {
      const start = new Date();
      await next();
      const ms = new Date() - start;
      ctx.set('X-Response-Time', `${ms}ms`);
      // $FlowExpectedError
      ctx.set(ms, `${ms}ms`);
      // $FlowExpectedError
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
      // $FlowExpectedError
      ctx.body = 1;
    });

    app.listen(3000);
    app.listen(3000, () => {});
  }
}
