


declare module "nock" {

  declare type Path = string | RegExp | ((url: string) => boolean);
  declare type Parameter =
    | string
    | RegExp
    | Array<mixed>
    | Object
    | ((body: Object | Array<mixed>) => boolean);

  declare type RecordedCall = {
    scope: string,
    method: string,
    path: string,
    body: any,
    status: number,
    response: any,
    headers: Object,
    reqheader: Object
  };

  declare class Recorder {
    rec(options?: {
      dont_print?: boolean,
      output_objects?: boolean,
      enable_reqheaders_recording?: boolean,
      logging?: (content: any) => any,
      use_separator: boolean
    }): void;
    play(): RecordedCall[];
  }

  declare type InterceptorOptions = {
    hostname: string,
    path: string,
    method: string,
    proto: string
  };

  declare class NockBack {
    [[call]](path: string, cb: (cb: Function) => any): void;
    fixtures: string;
    setMode(mode: string): void;
  }

  declare class Nock {
    static [[call]](
      url: string | RegExp,
      options?: {
        reqheaders?: Object,
        badheaders?: string[],
        filteringScope?: (scope: string) => boolean,
        allowUnmocked?: boolean
      }
    ): Nock;
    static restore(): void;
    static cleanAll(): void;
    static disableNetConnect(): void;
    static enableNetConnect(path?: Path): void;
    static load(path: string): RecordedCall[];
    // TODO: type definitions
    static definitions(path: string): any;
    static define(nocks: any): any;
    static removeInterceptor(
      interceptor: Nock | $Shape<InterceptorOptions>
    ): void;
    static emitter: events$EventEmitter;
    static recorder: Recorder;
    static back: NockBack;
    get(path: Path, parameter?: Parameter): this;
    post(path: Path, parameter?: Parameter): this;
    put(path: Path, parameter?: Parameter): this;
    head(path: Path, parameter?: Parameter): this;
    delete(path: Path, parameter?: Parameter): this;
    patch(path: Path, parameter?: Parameter): this;
    merge(path: Path, parameter?: Parameter): this;
    query(query: Object | boolean | ((query: Object) => boolean)): this;
    reply(
      code: number,
      data?:
        | ((
            uri: string,
            body: mixed,
            cb: (error: ?Error, result: mixed) => any
          ) => mixed)
        | mixed,
      header?: Object
    ): this;
    reply(
      fn: (
        uri: string,
        body: mixed,
        cb: (error: ?Error, result: mixed) => any
      ) => mixed
    ): this;
    replyWithFile(code: number, path: string): this;
    replyWithError(error: mixed): this;
    basicAuth(auth: {
      user: string,
      pass: string
    }): this;
    defaultReplyHeaders(header: {
      [key: string]: string | ((req: any, res: any, body: any) => any)
    }): this;
    replyContentLength(): this;
    replyDate(date?: Date): this;
    intercept(
      path: Path,
      verb: string,
      parameter?: Parameter,
      options?: any
    ): this;
    times(number: number): this;
    once(): this;
    twice(): this;
    thrice(): this;
    delayBody(delay: number): this;
    delayConnection(delay: number): this;
    delay(delay: number | { head: number, body: number }): this;
    socketDelay(delay: number): this;
    filteringPath(path: RegExp, replace: string): this;
    filteringPath(fn: (path: string) => string): this;
    filteringRequestBody(body: RegExp, replace: string): this;
    filteringRequestBody(fn: (path: string) => string): this;
    matchHeader(header: string, value: mixed | ((value: mixed) => boolean)): this;
    optionally(optional?: boolean): this;
    persist(): this;

    done(): void;
    isDone(): boolean;
    static isDone(): boolean;
    pendingMocks(): string[];
    static pendingMocks(): string[];
    activeMocks(): string[];
    static activeMocks(): string[];
    log(logFn: Function): this;
  }

  declare module.exports: typeof Nock;
}
