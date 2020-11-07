import { WriteStream } from "fs";
import { Console } from "console";
import { EventEmitter } from "events";

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
  declare interface LogLevels {
    info: "info";
    warn: "warn";
    error: "error";
    debug: "log" | false;
    [key: string]: any;
  }
  declare export class LambdaLog mixins EventEmitter {
    LambdaLog: LambdaLog;
    options: LambdaLogOptions;
    console: Console;
  [key: string]: any;
    constructor(options?: LambdaLogOptions, levels?: any): this;
    log(level: string, msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    info(msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    warn(msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    error(msg: string | Error, meta?: { ... }, tags?: string[]): LogMessage;
    debug(msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    assert(test: any, msg: string, meta?: { ... }, tags?: string[]): boolean | LogMessage;
  }

  declare export default {|
    LambdaLog(options?: LambdaLogOptions, levels?: any): LambdaLog;
    log(level: string, msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    info(msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    warn(msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    error(msg: string | Error, meta?: { ... }, tags?: string[]): LogMessage;
    debug(msg: string, meta?: { ... }, tags?: string[]): LogMessage;
    assert(test: any, msg: string, meta?: { ... }, tags?: string[]): boolean | LogMessage;
  |};
}
