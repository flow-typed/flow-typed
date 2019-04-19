declare module 'winston' {
  declare export type $winstonLevels = {
    [string]: number
  };

  declare export type $winstonNpmLogLevels = {
    error: number,
    warn: number,
    info: number,
    verbose: number,
    debug: number,
    silly: number
  };

  declare export type $winstonInfo<T: $winstonLevels> = {
    [optionName: string]: any,
    level: $Keys<T>,
    message: string
  };

  declare export type $winstonFormat = Object;

  declare export type $winstonFileTransportConfig<T: $winstonLevels> = {
    filename: string,
    level?: $Keys<T>
  };

  declare export class $winstonTransport {
    level?: string;
    silent?: boolean;
  }

  declare export class $winstonFileTransport<T> extends $winstonTransport {
    constructor($winstonFileTransportConfig<T>): $winstonFileTransport<T>;
  }

  declare export type $winstonConsoleTransportConfig<T: $winstonLevels> = {
    level?: $Keys<T>
  };

  declare export class $winstonConsoleTransport<T> extends $winstonTransport {
    constructor(config?: $winstonConsoleTransportConfig<T>): $winstonConsoleTransport<T>;
  }

  declare export type $winstonLoggerConfig<T: $winstonLevels> = {
    exitOnError?: boolean,
    format?: $winstonFormat,
    level?: $Keys<T>,
    levels?: T,
    transports?: Array<$winstonTransport>
  };

  declare export type $winstonLogger<T: $winstonLevels> = {
    [$Keys<T>]: (message: string, meta?: Object) => void,
    add: $winstonTransport => void,
    clear: () => void,
    configure: ($winstonLoggerConfig<T>) => void,
    log: (message: $winstonInfo<T>) => void,
    remove: $winstonTransport => void
  };

  declare export type $winstonConfigSubModule = {
    npm: () => $winstonNpmLogLevels
  };

  declare export type $winstonFormatSubModule = {
    ((info: Object) => Object): $winstonFormat,
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

  declare export type $winstonDefaultLogger = $winstonLogger<$winstonNpmLogLevels>;

  declare export class $winstonContainer<T> {
    constructor(config?: $winstonLoggerConfig<T>): $winstonContainer<T>;
    add(loggerId: string, config?: $winstonLoggerConfig<T>): $winstonLogger<T>;
    get(loggerId: string): $winstonLogger<T>;
    has(loggerId: string): boolean;
  }

  declare export default $winstonDefaultLogger & {
    format: $winstonFormatSubModule,
    transports: {
      Console: typeof $winstonConsoleTransport,
      File: typeof $winstonFileTransport
    },
    createLogger: <T>($winstonLoggerConfig<T>) => $winstonLogger<T>,
    Container: typeof $winstonContainer,
    loggers: $winstonContainer<$winstonLevels>
  };
}
