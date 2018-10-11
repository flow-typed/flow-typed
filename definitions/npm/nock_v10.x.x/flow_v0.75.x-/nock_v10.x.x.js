declare type $npm$nock$Path = string | RegExp | ((url: string) => boolean);
declare type $npm$nock$Parameter =
  | string
  | RegExp
  | Array<mixed>
  | Object
  | ((body: Object | Array<mixed>) => boolean);

declare type $npm$nock$RecordedCall = {
  scope: string,
  method: string,
  path: string,
  body: any,
  status: number,
  response: any,
  headers: Object,
  reqheader: Object
};

declare class $npm$nock$Recorder {
  rec(options?: {
    dont_print?: boolean,
    output_objects?: boolean,
    enable_reqheaders_recording?: boolean,
    logging?: (content: any) => any,
    use_separator: boolean
  }): void;
  play(): $npm$nock$RecordedCall[];
}

declare type $npm$nock$InterceptorOptions = {
  hostname: string,
  path: string,
  method: string,
  proto: string
};

declare class $npm$nock$NockBack {
  [[call]](path: string, cb: (cb: Function) => any): void;
  fixtures: string;
  setMode(mode: string): void;
}

declare class $npm$nock$Nock {
  static [[call]](
    url: string | RegExp,
    options?: {
      reqheaders?: Object,
      badheaders?: string[],
      filteringScope?: (scope: string) => boolean,
      allowUnmocked?: boolean
    }
  ): $npm$nock$Nock;
  static restore(): void;
  static cleanAll(): void;
  static disableNetConnect(): void;
  static enableNetConnect(path?: $npm$nock$Path): void;
  static load(path: string): $npm$nock$RecordedCall[];
  // TODO: type definitions
  static definitions(path: string): any;
  static define(nocks: any): any;
  static removeInterceptor(
    interceptor: $npm$nock$Nock | $Shape<$npm$nock$InterceptorOptions>
  ): void;
  static emitter: events$EventEmitter;
  static recorder: $npm$nock$Recorder;
  static back: $npm$nock$NockBack;
  get(path: $npm$nock$Path, parameter?: $npm$nock$Parameter): this;
  post(path: $npm$nock$Path, parameter?: $npm$nock$Parameter): this;
  put(path: $npm$nock$Path, parameter?: $npm$nock$Parameter): this;
  head(path: $npm$nock$Path, parameter?: $npm$nock$Parameter): this;
  delete(path: $npm$nock$Path, parameter?: $npm$nock$Parameter): this;
  patch(path: $npm$nock$Path, parameter?: $npm$nock$Parameter): this;
  merge(path: $npm$nock$Path, parameter?: $npm$nock$Parameter): this;
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
    path: $npm$nock$Path,
    verb: string,
    parameter?: $npm$nock$Parameter,
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
  filtering$npm$nock$Path(path: RegExp, replace: string): this;
  filtering$npm$nock$Path(fn: (path: string) => string): this;
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

declare module 'nock' {
  declare module.exports: typeof $npm$nock$Nock;
}
