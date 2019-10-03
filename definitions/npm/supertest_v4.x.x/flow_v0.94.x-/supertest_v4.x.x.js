declare module 'supertest' {
  import type { IncomingMessage, ServerResponse } from 'http';
  import type { ReadStream as fs$ReadStream } from 'fs';

  // ----- Types from superagent -----
  declare type superagent$ResponseError = {|
    status: number,
    text: string,
    method: string,
    path: string,
  |} & Error;

  declare type superagent$Response = {|
    text?: string, // Present for text/json/urlencoded answers.
    body: any,
    type: string,
    xhr: XMLHttpRequest,
    redirects: string[],

    charset?: string, // This is decoded from the content-type
    error: superagent$ResponseError | false,
    files: any,
    get(header: string): string,
    get(header: 'Set-Cookie'): string[],
    headers: {| [key: string]: string |},
    header: {| [key: string]: string |},

    links: {| [key: string]: string |},

    // status numbers
    status: number,
    statusCode: number,
    statusType: 1 | 2 | 3 | 4 | 5,

    // Status boolean
    info: boolean, // 1xx
    ok: boolean, // 2xx
    redirect: boolean, // 3xx
    clientError: boolean, // 4xx
    serverError: boolean, // 5xx

    created: boolean, // 201
    accepted: boolean, // 202
    noContent: boolean, // 204
    badRequest: boolean, // 400
    unauthorized: boolean, // 401
    forbidden: boolean, // 403
    notFound: boolean, // 404
    notAcceptable: boolean, // 406
    unprocessableEntity: boolean, // 422
  |} & stream$Readable;

  declare type MultipartValueSingle =
    | Blob
    | Buffer
    | fs$ReadStream
    | string
    | boolean
    | number;

  declare type MultipartValue = MultipartValueSingle | MultipartValueSingle[];

  declare type superagent$CallbackHandler = (
    err: any,
    res: superagent$Response
  ) => mixed;

  declare type superagent$BrowserParser = (str: string) => mixed;
  declare type superagent$NodeParser = (
    res: superagent$Response,
    callback: (err: Error | null, body: any) => void
  ) => void;
  declare type superagent$Parser =
    | superagent$BrowserParser
    | superagent$NodeParser;

  // We declare only the event emitted from node. The one in the browser is
  // quite different.
  declare type superagent$ProgressEvent = {|
    direction: 'upload',
    loaded: number,
    lengthComputable: true,
    total: number,
  |};

  // Note: superagent$Request should inherit from both a Promise and a node
  // Stream, but I don't know how to do it with Flow... I decided to use the
  // Promise because it's likely more useful.
  declare class superagent$Request extends Promise<superagent$Response> {
    abort(): void;
    accept(type: string): this;
    attach(
      field: string,
      file: MultipartValueSingle,
      options?:
        | string
        | {|
            filename: string,
            contentType?: string,
          |}
    ): this;
    auth(
      user: string,
      pass: string,
      options?: {|
        type: 'basic' | 'auto', // "auto" isn't available in node
      |}
    ): this;
    auth(
      token: string,
      options: {|
        type: 'bearer',
      |}
    ): this;
    buffer(val?: boolean): this;
    ca(cert: string | string[] | Buffer | Buffer[]): this;
    cert(cert: string | string[] | Buffer | Buffer[]): this;
    clearTimeout(): this;
    // Removing it here because it's overriden below in supertest, and Flow
    // doesn't let the override work because the return value is different.
    // end(callback?: superagent$CallbackHandler): void;
    field(name: string, val: MultipartValue): this;
    field(fields: {|
      [fieldName: string]: MultipartValue,
    |}): this;
    get(field: string): string;
    key(cert: string | string[] | Buffer | Buffer[]): this;
    ok(callback: (res: superagent$Response) => boolean): this;
    on(name: 'error', handler: (err: any) => void): this;
    on(
      name: 'progress',
      handler: (event: superagent$ProgressEvent) => void
    ): this;
    on(
      name: 'response',
      handler: (response: superagent$Response) => void
    ): this;
    on(name: string, handler: (event: any) => void): this;
    parse(parser: superagent$Parser): this;
    part(): this;
    pfx(
      cert:
        | string
        | string[]
        | Buffer
        | Buffer[]
        | {|
            pfx: string | Buffer,
            passphrase: string,
          |}
    ): this;
    pipe(
      stream: stream$Writable,
      options?: {| end: boolean |}
    ): stream$Writable;
    query(val: { ... } | string): this;
    redirects(n: number): this;
    responseType(type: string): this;
    retry(count?: number, callback?: superagent$CallbackHandler): this;
    send(data?: string | { ... }): this;
    serialize(serializer: (any) => string): this;
    set(field: { ... }): this;
    set(field: string, val: string): this;
    set(field: 'Cookie', val: string[]): this;
    timeout(
      ms:
        | number
        | {|
            deadline?: number,
            response?: number,
          |}
    ): this;
    type(val: string): this;
    unset(field: string): this;
    // use(fn: request$Plugin): this; TODO No support for plugins
    withCredentials(): this;
    write(data: string | Buffer, encoding?: string): this;
    maxResponseSize(size: number): this;
  }

  // ----- Types from supertest -----
  declare type supertest$RequestFunction = (url: string) => supertest$Test;

  // Possible HTTP requests.
  declare type supertest$Request = {|
    acl: supertest$RequestFunction,
    bind: supertest$RequestFunction,
    checkout: supertest$RequestFunction,
    connect: supertest$RequestFunction,
    copy: supertest$RequestFunction,
    delete: supertest$RequestFunction,
    del: supertest$RequestFunction,
    get: supertest$RequestFunction,
    head: supertest$RequestFunction,
    link: supertest$RequestFunction,
    lock: supertest$RequestFunction,
    'm-search': supertest$RequestFunction,
    merge: supertest$RequestFunction,
    mkactivity: supertest$RequestFunction,
    mkcalendar: supertest$RequestFunction,
    mkcol: supertest$RequestFunction,
    move: supertest$RequestFunction,
    notify: supertest$RequestFunction,
    options: supertest$RequestFunction,
    patch: supertest$RequestFunction,
    post: supertest$RequestFunction,
    propfind: supertest$RequestFunction,
    proppatch: supertest$RequestFunction,
    purge: supertest$RequestFunction,
    put: supertest$RequestFunction,
    rebind: supertest$RequestFunction,
    report: supertest$RequestFunction,
    search: supertest$RequestFunction,
    source: supertest$RequestFunction,
    subscribe: supertest$RequestFunction,
    trace: supertest$RequestFunction,
    unbind: supertest$RequestFunction,
    unlink: supertest$RequestFunction,
    unlock: supertest$RequestFunction,
    unsubscribe: supertest$RequestFunction,
  |};

  declare type supertest$BodyAssertion = RegExp | string | { ... };

  declare class supertest$Test extends superagent$Request {
    constructor(
      app: http$Server | string,
      method: string,
      path: string,
      host?: string
    ): this;
    app: http$Server | string;
    url: string;

    // ASSERTIONS

    // Queue a status assertion
    expect(status: number, callback?: superagent$CallbackHandler): this;

    // Queue a status and body assertion
    expect(
      status: number,
      body: supertest$BodyAssertion,
      callback?: superagent$CallbackHandler
    ): this;

    // Queue a body assertion
    expect(
      body: supertest$BodyAssertion,
      callback?: superagent$CallbackHandler
    ): this;

    // Queue a header assertion
    expect(
      field: string,
      val: string | number | RegExp,
      callback?: superagent$CallbackHandler
    ): this;

    // Queue a generic assertion
    // Note: it should appear after all other `expect` shapes because otherwise
    // Flow has problems selecting the right form.
    expect(checker: (res: superagent$Response) => mixed): this;

    // Run the queued assertions
    end(callback?: superagent$CallbackHandler): this;
  }

  // Accepted arguments to the supertest function.
  declare type supertest$Server =
    | string
    | http$Server
    | (<I: IncomingMessage, R: ServerResponse>(I, R) => void);

  declare module.exports: {|
    (server: supertest$Server): supertest$Request,
    Test: supertest$Test,
    // TODO implement a proper supertest$agent
    agent: any,
  |};
}
