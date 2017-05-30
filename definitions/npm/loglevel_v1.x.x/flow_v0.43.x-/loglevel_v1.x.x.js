declare module 'loglevel' {
  declare type LevelName =
    | 'trace'
    | 'debug'
    | 'info'
    | 'warn'
    | 'error';
  declare type LevelValue = 0 | 1 | 2 | 3 | 4 | 5;
  declare type Level =
    | LevelValue
    | LevelName;

  declare type Logger = {
    getLevel(): LevelValue;
    setLevel(level: Level, persist?: boolean): void;
    setDefaultLevel(level: Level): void;
    enableAll(): void;
    disableAll(): void;

    trace(...args: Array<any>): void;
    debug(...args: Array<any>): void;
    info(...args: Array<any>): void;
    warn(...args: Array<any>): void;
    error(...args: Array<any>): void;

    methodFactory: (methodName: LevelName, logLevel: LevelValue, loggerName: string) => (() => void);
  };

  declare type LogLevelModule = Logger & {
    noConflict(): LogLevelModule;
    getLogger(name: string): Logger;
    levels: {
      TRACE: 0;
      DEBUG: 1;
      INFO: 2;
      WARN: 3;
      ERROR: 4;
      SILENT: 5;
    }
  };

  declare var exports: LogLevelModule;
}
