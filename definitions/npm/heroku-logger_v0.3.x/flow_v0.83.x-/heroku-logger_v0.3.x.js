declare module 'heroku-logger' {
  declare type LogStructure = (
    message: string | Error,
    data?: { [key: string]: any, ... },
  ) => void;

  declare type TraceLog = LogStructure;
  declare type DebugLog = LogStructure;
  declare type InfoLog = LogStructure;
  declare type WarnLog = LogStructure;
  declare type ErrorLog = LogStructure;
  declare type FatalLog = LogStructure;
  declare type Log = (level: string, message: string | Error, data?: { [key: string]: any, ... },) => void;

  declare export type LoggerOptions = {|
    color?: boolean,
    delimiter?: string,
    level?: string,
    prefix?: string,
    readable?: boolean,
  |};

  declare class Logger {
    constructor(options: LoggerOptions): this;

    clone(options: LoggerOptions): this;

    trace: TraceLog;
    debug: DebugLog;
    info: InfoLog;
    warn: WarnLog;
    error: ErrorLog;
    fatal: FatalLog;
    log: Log;
  }

  declare module.exports: {|
    Logger: typeof Logger,
    trace: TraceLog,
    debug: DebugLog,
    info: InfoLog,
    warn: WarnLog,
    error: ErrorLog,
    fatal: FatalLog,
    log: Log,
  |};
}
