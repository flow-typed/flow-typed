/**
 * This is an libdef for:
 *
 *   'koa-bunyan-logger'
 * 
 * NOTE: once import types from modules is working, 
 * remove types redeclaration from bunyan and koa
 *
 */

declare module 'koa-bunyan-logger' {
  /** 
   * copy from bunyan library, import type does not work here? 
   * import type bunyan, { Logger, LoggerOptions, BunyanLogLevels } from 'bunyan';
  **/
  declare type BunyanLogLevels =
    60 | // fatal
    50 | // error
    40 | // warn
    30 | // info
    20 | // debug
    10;  // info
  declare type BunyanRecord = {
      v: number,
      level: BunyanLogLevels,
      name: string,
      hostname: string,
      pid: string,
      time: Date,
      msg: string,
      src: string,
      err?: {
          message: string,
          name: string,
          code: any,
          signal: any,
          stack: string,
      },
      [key: string]: any
  };
  declare type Writable = {
    write(rec: BunyanRecord): void
  }
  declare type Stream = {
      type?: string;
      level?: number | string;
      path?: string;
      stream?: stream$Writable | tty$WriteStream | Stream | Writable;
      closeOnExit?: boolean;
      period?: string;
      count?: number;
  }
  declare interface LoggerOptions {
    streams?: Array<Stream>;
    level?: BunyanLogLevels | string,
    stream?: stream$Writable;
    serializers?: Serializers;
    src?: boolean;
  }
  declare class Logger extends events$EventEmitter {
      addSerializers(serializers: Serializers): void;
      child(opts?: LoggerOptions, simple?: boolean): Logger;
      reopenFileStreams(): void;
      level(): string | number;
      level(value: number | string): void;
      levels(name: number | string, value: number | string): void;
      trace(...params: Array<void>): boolean;
      trace(error: Error, format?: any, ...params: Array<any>): void;
      trace(buffer: Buffer, format?: any, ...params: Array<any>): void;
      trace(obj: Object, format?: any, ...params: Array<any>): void;
      trace(format: string, ...params: Array<any>): void;
      debug(...params: Array<void>): boolean;
      debug(error: Error, format?: any, ...params: Array<any>): void;
      debug(buffer: Buffer, format?: any, ...params: Array<any>): void;
      debug(obj: Object, format?: any, ...params: Array<any>): void;
      debug(format: string, ...params: Array<any>): void;
      info(...params: Array<void>): boolean;
      info(error: Error, format?: any, ...params: Array<any>): void;
      info(buffer: Buffer, format?: any, ...params: Array<any>): void;
      info(obj: Object, format?: any, ...params: Array<any>): void;
      info(format: string, ...params: Array<any>): void;
      warn(...params: Array<void>): boolean;
      warn(error: Error, format?: any, ...params: Array<any>): void;
      warn(buffer: Buffer, format?: any, ...params: Array<any>): void;
      warn(obj: Object, format?: any, ...params: Array<any>): void;
      warn(format: string, ...params: Array<any>): void;
      error(...params: Array<void>): boolean;
      error(error: Error, format?: any, ...params: Array<any>): void;
      error(buffer: Buffer, format?: any, ...params: Array<any>): void;
      error(obj: Object, format?: any, ...params: Array<any>): void;
      error(format: string, ...params: Array<any>): void;
      fatal(...params: Array<void>): boolean;
      fatal(error: Error, format?: any, ...params: Array<any>): void;
      fatal(buffer: Buffer, format?: any, ...params: Array<any>): void;
      fatal(obj: Object, format?: any, ...params: Array<any>): void;
      fatal(format: string, ...params: Array<any>): void;
  }
  declare type Serializers = {
      [key: string]: (input: any) => mixed;
  }
  declare type StdSerializers = {
    req: (req: http$ClientRequest) => {
        method: string,
        url: string,
        headers: mixed,
        remoteAddress: string,
        remotePort: number
    },
    res: (res: http$IncomingMessage) => {  statusCode: number, header: string },
    err: (err: Error) => {
        message: string,
        name: string,
        stack: string,
        code: string,
        signal: string
    }
  };

  /** 
   * copy from koa library, import type does not work 
   * import type { Middleware } from 'koa';
  **/
  declare type Middleware =
    (ctx: *, next: () => Promise<void>) => Promise<void> | void;

  declare type MiddlewareType = Middleware;

  declare type LoggerFactoryOptions = LoggerOptions & { name: string };

  declare type FieldsModifier = (fields: Object) => Object;
  declare type FieldsStringifier = (fields: Object) => string;

  declare type RequestLogger$Options = {
    durationField?: string,
    levelFn?: (status: number, err: Error) => BunyanLogLevels,
    updateLogFields?: FieldsModifier,
    updateRequestLogFields?: FieldsModifier,
    updateResponseLogFields?: FieldsModifier,
    formatRequestMessage?: FieldsStringifier,
    formatResponseMessage?: FieldsStringifier
  }

  declare type TimeContext$Options = {
    logLevel?: BunyanLogLevels,
    updateLogFields?: FieldsModifier
  }

  declare type RequestIdOptions = {
    header?: string,
    prop?: string,
    requestProp?: string,
    field?: string
  }

  declare module.exports: {
    requestIdContext(options?: RequestIdOptions): MiddlewareType;
    requestLogger(options: RequestLogger$Options): MiddlewareType;
    timeContext(options: TimeContext$Options): MiddlewareType;
    (options?: LoggerFactoryOptions | Logger): Logger;
    bunyan: {
      stdSerializers: StdSerializers;
      createLogger(options: LoggerFactoryOptions): Logger;
    };
  };
}
