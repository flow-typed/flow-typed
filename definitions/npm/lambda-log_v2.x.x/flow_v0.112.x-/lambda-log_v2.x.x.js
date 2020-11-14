import { WriteStream } from "fs";
import { Console } from "console";

declare module "lambda-log" {
  declare interface LogRecordOptions {
    level: string;
    msg: string;
    meta?: any;
    tags?: string[];
  }
  declare interface LogRecord {
    msg: string;
    meta: any;
    _logLevel: string;
    _tags: string[];
  }
  declare export class LogMessage {
    level: string;
    msg: string;
    meta?: any;
    tags?: string[];
    constructor(logRecordOptions: LogRecordOptions, opts: LambdaLogOptions): this;
    value: LogRecord;
    log: LogRecord;
    throw: void;
    toJSON(format?: boolean): string;
    static isError(val: any): boolean;
  }
  declare interface LambdaLogOptions {
    meta?: any;
    tags?: string[];
    dynamicMeta?: (message: LogMessage) => any;
    debug?: boolean;
    dev?: boolean;
    silent?: boolean;
    replacer?: (key: string, value: any) => any;
    stdoutStream?: WriteStream;
    stderrStream?: WriteStream;
  }

  declare type ConsoleMethods = $Keys<typeof console>;

  // The Log Levels object defines custom levels. The value of each level is either a console method name or a function that returns a console method name. https://www.npmjs.com/package/lambda-log#log-levels-object
  declare export type LogLevelsParam = {
    [string]: ConsoleMethods | (message) => ConsoleMethods | boolean,
    ...
  };

  declare export type DefaultLogLevels = {|
    info: 'info',
    warn: 'warn',
    error: 'error',
    debug: false
  |};

  declare type GetLevelMethod = <V>(V) => ((msg: string, meta?: { ... }, tags?: string[]) => LogMessage);
  declare type CustomLogLevelMethods<LogLevels: LogLevelsParam> = $ObjMap<LogLevels, GetLevelMethod>;

  declare export type LambdaLog<LogLevels: LogLevelsParam> = {|

    // extends EventEmitter
    addListener(event: string | symbol, listener: (...args: any[]) => void): LambdaLog<LogLevels>,
    on(event: string | symbol, listener: (...args: any[]) => void): LambdaLog<LogLevels>,
    once(event: string | symbol, listener: (...args: any[]) => void): LambdaLog<LogLevels>,
    prependListener(event: string | symbol, listener: (...args: any[]) => void): LambdaLog<LogLevels>,
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): LambdaLog<LogLevels>,
    removeListener(event: string | symbol, listener: (...args: any[]) => void): LambdaLog<LogLevels>,
    off(event: string | symbol, listener: (...args: any[]) => void): LambdaLog<LogLevels>,
    removeAllListeners(event?: string | symbol): LambdaLog<LogLevels>,
    setMaxListeners(n: number): LambdaLog<LogLevels>,
    getMaxListeners(): number,
    listeners(event: string | symbol): Function[],
    rawListeners(event: string | symbol): Function[],
    emit(event: string | symbol, ...args: any[]): boolean,
    eventNames(): Array<string | symbol>,
    listenerCount(type: string | symbol): number,

    // log-level methods
    info(msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    warn(msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    error(msg: string | Error, meta?: { ... }, tags?: string[]): LogMessage,
    debug(msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    ...CustomLogLevelMethods<LogLevels>,

    // other methods
    options: LambdaLogOptions,
    console: Console,
    LambdaLog<T>(options?: LambdaLogOptions, levels?: T): LambdaLog<T>,
    log(level: string, msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    assert(test: any, msg: string, meta?: { ... }, tags?: string[]): boolean | LogMessage
  |};

  declare export default LambdaLog<{| |}>;
}
