declare type $winstonLevels = { [string]: number, ... };

declare type $winstonNpmLogLevels = {
  error: number,
  warn: number,
  info: number,
  verbose: number,
  debug: number,
  silly: number,
  ...
};

declare type $winstonInfo<T: $winstonLevels> = {
  [optionName: string]: any,
  level: $Keys<T>,
  message: string,
  ...
};

declare type $winstonFormat = Object;

declare type $winstonFileTransportConfig<T: $winstonLevels> = {
  filename: string,
  level?: $Keys<T>,
  ...
};

declare class $winstonTransport {
  level?: string;
  silent?: boolean;
}

declare class $winstonFileTransport<T> extends $winstonTransport {
  constructor($winstonFileTransportConfig<T>): $winstonFileTransport<T>;
}

declare type $winstonConsoleTransportConfig<T: $winstonLevels> = { level?: $Keys<T>, ... };

declare class $winstonConsoleTransport<T> extends $winstonTransport {
  constructor(
    config?: $winstonConsoleTransportConfig<T>
  ): $winstonConsoleTransport<T>;
}

declare type $winstonLoggerConfig<T: $winstonLevels> = {
  exitOnError?: boolean,
  format?: $winstonFormat,
  level?: $Keys<T>,
  levels?: T,
  transports?: Array<$winstonTransport>,
  ...
};

declare type $winstonLogger<T: $winstonLevels> = {
  [$Keys<T>]: (message: string, meta?: Object) => void,
  add: $winstonTransport => void,
  clear: () => void,
  configure: ($winstonLoggerConfig<T>) => void,
  log: (message: $winstonInfo<T>) => void,
  remove: $winstonTransport => void,
  ...
};

declare type $winstonConfigSubModule = { npm: () => $winstonNpmLogLevels, ... };
  
declare type $winstonFormatJsonOptions = {
  replacer?: (key: string, value: any) => any,
  space?: number,
  stable?: boolean,
  ...
};

declare type $winstonFormatSubModule = {
  ((info: Object) => Object): () => $winstonFormat,
  combine: (...args: Array<$winstonFormat>) => $winstonFormat,
  json: (options?: $winstonFormatJsonOptions) => $winstonFormat,
  label: (config?: Object) => $winstonFormat,
  metadata: () => $winstonFormat,
  prettyPrint: () => $winstonFormat,
  simple: () => $winstonFormat,
  splat: () => $winstonFormat,
  timestamp: (?{
    alias?: string,
    format?: string,
    ...
  }) => $winstonFormat,
  colorize: () => $winstonFormat,
  logstash: () => $winstonFormat,
  printf: ((args: $winstonInfo<Object>) => string) => $winstonFormat,
  ...
};

declare type $winstonDefaultLogger = $winstonLogger<$winstonNpmLogLevels>;

declare class $winstonContainer<T> {
  constructor(config?: $winstonLoggerConfig<T>): $winstonContainer<T>;
  add(loggerId: string, config?: $winstonLoggerConfig<T>): $winstonLogger<T>;
  get(loggerId: string): $winstonLogger<T>;
  has(loggerId: string): boolean;
}

declare module "winston" {
  declare export type Levels = $winstonLevels;
  declare export type NpmLogLevels = $winstonNpmLogLevels;
  declare export type Info<T: Levels > = $winstonInfo<T>;
  declare export type Format = $winstonFormat;
  declare export type FileTransportConfig<T: Levels> = $winstonFileTransportConfig<T>;
  declare export type Transport = typeof $winstonTransport;
  declare export type FileTransport<T: Levels> = $winstonFileTransport<T>;
  declare export type ConsoleTransportConfig<T: Levels> = $winstonConsoleTransportConfig<T>;
  declare export type ConsoleTransport<T: Levels> = $winstonConsoleTransport<T>;
  declare export type LoggerConfig<T: Levels> = $winstonLoggerConfig<T>;
  declare export type Logger<T: Levels> = $winstonLogger<T>;
  declare export type ConfigSubModule = $winstonConfigSubModule;
  declare export type FormatSubModule = $winstonFormatSubModule;
  declare export type DefaultLogger = $winstonDefaultLogger;
  declare export type Container<T: Levels> = $winstonContainer<T>;

  declare module.exports: {
    ...$Exact<$winstonDefaultLogger>,
    format: $winstonFormatSubModule,
    transports: {
      Console: typeof $winstonConsoleTransport,
      File: typeof $winstonFileTransport,
      ...
    },
    createLogger: <T>($winstonLoggerConfig<T>) => $winstonLogger<T>,
    Container: typeof $winstonContainer,
    loggers: $winstonContainer<*>,
    ...
  };
}
