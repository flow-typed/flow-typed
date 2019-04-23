declare type $winstonLevels = {
  [string]: number
};

declare type $winstonNpmLogLevels = {
  error: number,
  warn: number,
  info: number,
  verbose: number,
  debug: number,
  silly: number
};

declare type $winstonInfo<T: $winstonLevels> = {
  [optionName: string]: any,
  level: $Keys<T>,
  message: string
};

declare type $winstonFormat = Object;

declare type $winstonFileTransportConfig<T: $winstonLevels> = {
  filename: string,
  level?: $Keys<T>
};

declare class $winstonTransport {
  level?: string;
  silent?: boolean;
}

declare class $winstonFileTransport<T> extends $winstonTransport {
  constructor($winstonFileTransportConfig<T>): $winstonFileTransport<T>;
}

declare type $winstonConsoleTransportConfig<T: $winstonLevels> = {
  level?: $Keys<T>
};

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
  transports?: Array<$winstonTransport>
};

declare type $winstonLogger<T: $winstonLevels> = {
  [$Keys<T>]: (message: string, meta?: Object) => void,
  add: $winstonTransport => void,
  clear: () => void,
  configure: ($winstonLoggerConfig<T>) => void,
  log: (message: $winstonInfo<T>) => void,
  remove: $winstonTransport => void
};

declare type $winstonConfigSubModule = {
  npm: () => $winstonNpmLogLevels
};

declare type $winstonFormatSubModule = {
  ((info: Object) => Object): () => $winstonFormat,
  combine: (...args: Array<$winstonFormat>) => $winstonFormat,
  json: () => $winstonFormat,
  label: (config?: Object) => $winstonFormat,
  metadata: () => $winstonFormat,
  prettyPrint: () => $winstonFormat,
  simple: () => $winstonFormat,
  splat: () => $winstonFormat,
  timestamp: (?{ alias?: string, format?: string }) => $winstonFormat,
  colorize: () => $winstonFormat,
  logstash: () => $winstonFormat,
  printf: ((args: $winstonInfo<Object>) => string) => $winstonFormat
};

declare type $winstonDefaultLogger = $winstonLogger<$winstonNpmLogLevels>;

declare class $winstonContainer<T> {
  constructor(config?: $winstonLoggerConfig<T>): $winstonContainer<T>;
  add(loggerId: string, config?: $winstonLoggerConfig<T>): $winstonLogger<T>;
  get(loggerId: string): $winstonLogger<T>;
  has(loggerId: string): boolean;
}

declare module "winston" {
  declare export type $WinstonLevels = $winstonLevels;
  declare export type $WinstonNpmLogLevels = $winstonNpmLogLevels;
  declare export type $WinstonInfo<T: $WinstonLevels > = $winstonInfo<T>;
  declare export type $WinstonFormat = $winstonFormat;
  declare export type $WinstonFileTransportConfig<T: $WinstonLevels> = $winstonFileTransportConfig<T>;
  declare export type $WinstonTransport = typeof $winstonTransport;
  declare export type $WinstonFileTransport<T: $WinstonLevels> = $winstonFileTransport<T>;
  declare export type $WinstonConsoleTransportConfig<T: $WinstonLevels> = $winstonConsoleTransportConfig<T>;
  declare export type $WinstonConsoleTransport<T: $WinstonLevels> = $winstonConsoleTransport<T>;
  declare export type $WinstonLoggerConfig<T: $WinstonLevels> = $winstonLoggerConfig<T>;
  declare export type $WinstonLogger<T: $WinstonLevels> = $winstonLogger<T>;
  declare export type $WinstonConfigSubModule = $winstonConfigSubModule;
  declare export type $WinstonFormatSubModule = $winstonFormatSubModule;
  declare export type $WinstonDefaultLogger = $winstonDefaultLogger;
  declare export type $WinstonContainer<T: $WinstonLevels> = $winstonContainer<T>;

  declare module.exports: $winstonDefaultLogger & {
    format: $winstonFormatSubModule,
    transports: {
      Console: typeof $winstonConsoleTransport,
      File: typeof $winstonFileTransport
    },
    createLogger: <T>($winstonLoggerConfig<T>) => $winstonLogger<T>,
    Container: typeof $winstonContainer,
    loggers: $winstonContainer<*>
  };
}
