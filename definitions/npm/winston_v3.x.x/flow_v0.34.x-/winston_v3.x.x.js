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
}

declare module "winston" {
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
