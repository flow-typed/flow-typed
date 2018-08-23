// @flow

declare module "pino" {
  declare type Level = "fatal" | "error" | "warn" | "info" | "debug" | "trace";
  declare type LevelWithSilent = Level | "silent";
  declare type LevelChangeEvent = "level-change";
  declare type LevelChangeEventListener = (
    lvl: LevelWithSilent | string,
    val: number,
    prevLvl: LevelWithSilent | string,
    prevVal: number
  ) => void;
  declare interface LevelMapping {
    values: { [level: string]: number };
    labels: { [level: number]: string };
  }

  declare type SerializerFn = (value: any) => any;
  declare type WriteFn = (o: {}) => void;
  declare type TimeFn = () => string;
  declare interface LogFn {
    (msg: string, ...args: any[]): void;
    (obj: {}, msg?: string, ...args: any[]): void;
  }

  declare interface stdSerializers {
    req(
      req: http$IncomingMessage
    ): {
      method: string,
      url: string,
      headers: {
        host: string,
        connection: string
      },
      remoteAddress: string,
      remotePort: number
    };

    res(
      res: http$ServerResponse
    ): {
      statusCode: number,
      header: string
    };

    err(
      err: Error
    ): {
      type: string,
      message: string,
      stack: string,
      [key: string]: any
    };
  }

  declare interface stdTimeFunctions {
    epochTime: TimeFn;
    unixTime: TimeFn;
    slowTime: TimeFn;
    nullTime: TimeFn;
  }

  declare type Logger = BaseLogger & { [key: string]: LogFn };

  declare interface BaseLogger {
    +pino: string;
    +LOG_VERSION: number;

    levels: LevelMapping;
    level: LevelWithSilent | string;
    levelVal: number;

    addLevel(name: string, lvl: number): boolean;
    isLevelEnabled(logLevel: LevelWithSilent | string): boolean;

    on(event: LevelChangeEvent, listener: LevelChangeEventListener): void;
    addListener(
      event: LevelChangeEvent,
      listener: LevelChangeEventListener
    ): void;
    once(event: LevelChangeEvent, listener: LevelChangeEventListener): void;
    prependListener(
      event: LevelChangeEvent,
      listener: LevelChangeEventListener
    ): void;
    prependOnceListener(
      event: LevelChangeEvent,
      listener: LevelChangeEventListener
    ): void;
    removeListener(
      event: LevelChangeEvent,
      listener: LevelChangeEventListener
    ): void;

    child(bindings: {
      level?: Level | string,
      serializers?: { [key: string]: SerializerFn },
      [key: string]: any
    }): Logger;

    fatal: LogFn;
    error: LogFn;
    warn: LogFn;
    info: LogFn;
    debug: LogFn;
    trace: LogFn;

    flush(): void;
  }

  declare interface LoggerOptions {
    safe?: boolean;
    name?: string;
    serializers?: { [key: string]: SerializerFn };
    timestamp?: TimeFn | false;
    // @deprecated: This option is scheduled to be removed in Pino 5.0.0
    slowtime?: boolean;
    extreme?: boolean;
    level?: LevelWithSilent | string;
    levelVal?: number;
    messageKey?: string;
    prettyPrint?: boolean | PrettyOptions;
    onTerminated?: (eventName: string, err: any) => void;
    enabled?: boolean;
    base?: any;
    crlf?: boolean;

    browser?: {
      asObject?: boolean,
      write?: WriteFn
    };
  }

  declare interface LogDescriptor {
    pid: number;
    hostname: string;
    level: number;
    time: string;
    msg: string;
    v: number;
    [key: string]: any;
  }

  declare interface PrettyOptions {
    timeTransOnly?: boolean;
    formatter?: (log: LogDescriptor) => string;
    levelFirst?: boolean;
    messageKey?: string;
    forceColor?: boolean;
    crlf?: boolean;
  }

  declare function pretty(options?: PrettyOptions): stream$Transform;

  declare function P(
    options: LoggerOptions,
    stream: stream$Writable | stream$Duplex | stream$Transform
  ): Logger;

  declare function P(
    optionsOrStream?:
      | LoggerOptions
      | stream$Writable
      | stream$Duplex
      | stream$Transform
  ): Logger;

  declare module.exports: P;
}
