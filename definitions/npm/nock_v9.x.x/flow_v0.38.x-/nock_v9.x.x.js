import EventEmitter from 'eventemitter';

declare module 'nock' {
  declare type Path = string|RegExp|((url: string) => bool);
  declare type Parameter = string|RegExp|Object|((body: Object) => bool);

  declare type RecordedCall = {
    scope: string,
    method: string,
    path: string,
    body: any,
    status: number,
    response: any,
    headers: Object,
    reqheader: Object,
  }

  declare class Recorder {
    rec(options?: {
      dont_print?: bool,
      output_objects?: bool,
      enable_reqheaders_recording?: bool,
      logging?: (content: any) => any,
      use_separator: bool,
    }): void;
    play(): RecordedCall[];
  }

  declare type InterceptorOptions = {
    hostname: string,
    path: string,
    method: string,
    proto: string,
  }

  declare class NockBack {
    $call(path: string, cb: (cb: Function) => any): void;
    fixtures: string;
    setMode(mode: string): void;
  }

  declare class Nock {
    static $call(url: string|RegExp, options?: {
      reqheaders?: Object,
      badheaders?: string[],
      filteringScope?: (scope: string) => bool;
      allowUnmocked?: bool,
    }): Nock;
    static restore(): void;
    static cleanAll(): void;
    static disableNetConnect(): void;
    static enableNetConnect(path?: Path): void;
    static load(path: string): RecordedCall[];
    // TODO: type definitions
    static definitions(path: string): any;
    static define(nocks: any): any;
    static removeInterceptor(interceptor: Nock|$Shape<InterceptorOptions>): void;
    static emitter: EventEmitter;
    static recorder: Recorder;
    static back: NockBack;
    get(path: Path, parameter?: Parameter): this;
    post(path: Path, parameter?: Parameter): this;
    put(path: Path, parameter?: Parameter): this;
    head(path: Path, parameter?: Parameter): this;
    delete(path: Path, parameter?: Parameter): this;
    patch(path: Path, parameter?: Parameter): this;
    merge(path: Path, parameter?: Parameter): this;
    query(query: Object|bool|(query: Object) => bool): this;
    reply(code: number, data?: ((uri: string, body: mixed, cb: ((error: ?Error, result: mixed) => any)) => mixed)|mixed, header?: Object): this;
    reply(fn: (uri: string, body: mixed, cb: (error: ?Error, result: mixed) => any) => mixed): this;
    replyWithFile(code: number, path: string): this;
    replyWithError(error: mixed): this;
    basicAuth(auth: {
      user: string,
      pass: string,
    }): this;
    defaultReplyHeaders(header: {[key: string]: string|(req: any, res: any, body: any) => any}): this;
    replyContentLength(): this;
    replyDate(date?: Date): this;
    intercept(path: Path, verb: string, parameter?: Parameter, options?: any): this;
    times(number: number): this;
    once(): this;
    twice(): this;
    thrice(): this;
    delayBody(delay: number): this;
    delayConnection(delay: number): this;
    delay(delay: number|{ head: number, body: number }): this;
    socketDelay(delay: number): this;
    filteringPath(path: RegExp, replace: string): this;
    filteringPath(fn: (path: string) => string): this;
    filteringRequestBody(body: RegExp, replace: string): this;
    filteringRequestBody(fn: (path: string) => string): this;
    matchHeader(header: string, value: mixed|(value: mixed) => bool): this;
    optionally(): this;
    persist(): this;

    done(): void;
    isDone(): bool;
    static isDone(): bool;
    pendingMocks(): string[];
    static pendingMocks(): string[];
    activeMocks(): string[];
    static activeMocks(): string[];
    log(logFn: Function): this;
  }
  declare module.exports: typeof Nock;
}
