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

  declare type Event = "log";
  declare type Listener = LogMessage => void;

  declare type NoCustomLogLevels = {| |};

  declare export type LambdaLog<LogLevels: LogLevelsParam> = {|

    // extends EventEmitter
    addListener(event: Event, listener: Listener): LambdaLog<LogLevels>,
    on(event: Event, listener: Listener): LambdaLog<LogLevels>,
    once(event: Event, listener: Listener): LambdaLog<LogLevels>,
    prependListener(event: Event, listener: Listener): LambdaLog<LogLevels>,
    prependOnceListener(event: Event, listener: Listener): LambdaLog<LogLevels>,
    removeListener(event: Event, listener: Listener): LambdaLog<LogLevels>,
    off(event: Event, listener: Listener): LambdaLog<LogLevels>,
    removeAllListeners(event?: Event): LambdaLog<LogLevels>,
    setMaxListeners(n: number): LambdaLog<LogLevels>,
    getMaxListeners(): number,
    listeners(event: Event): Listener,
    rawListeners(event: Event): Listener,
    emit(event: Event, LogMessage): boolean,
    eventNames(): Array<Event>,
    listenerCount(type: Event): number,

    // log-level methods
    info(msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    warn(msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    error(msg: string | Error, meta?: { ... }, tags?: string[]): LogMessage,
    debug(msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    ...CustomLogLevelMethods<LogLevels>,

    // other methods
    options: LambdaLogOptions,
    console: Console,
    LambdaLog<T = NoCustomLogLevels>(options?: LambdaLogOptions, levels?: T): LambdaLog<T>,
    log(level: string, msg: string, meta?: { ... }, tags?: string[]): LogMessage,
    assert(test: any, msg: string, meta?: { ... }, tags?: string[]): boolean | LogMessage
  |};

  declare export default LambdaLog<NoCustomLogLevels>;
}
