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
  level: $Keys<T>,
  message: string
};

declare type $winstonFormat = Object;

declare type $winstonFileTransportConfig<T: $winstonLevels> = {
  filename: string,
  level?: $Keys<T>
};

declare class $winstonTransport {}

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
  [$Keys<T>]: (message: string) => void,
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
  prettyPrint: () => $winstonFormat,
  simple: () => $winstonFormat,
  timestamp: () => $winstonFormat
};

declare type $winstonDefaultLogger = $winstonLogger<$winstonNpmLogLevels>;

declare module "winston" {
  declare module.exports: $winstonDefaultLogger & {
    format: $winstonFormatSubModule,
    transports: {
      Console: typeof $winstonConsoleTransport,
      File: typeof $winstonFileTransport
    },
    createLogger: <T>($winstonLoggerConfig<T>) => $winstonLogger<T>
  };
}
