// @flow

declare module "pino" {
  declare interface IPinoLog {
    pid: number,
    hostname: string,
    level: number,
    time: string,
    msg: string,
    v: number
  }

  declare type Level =
    | "fatal"
    | "error"
    | "warn"
    | "info"
    | "debug"
    | "trace"
    | "silent";

  declare type LevelChangeEventListener = (
    lvl: string,
    val: number,
    prevLvl: string,
    prevVal: number
  ) => void;
  declare type LevelChangeEvent = "level-change";

  declare interface LevelLabelsToValues {
    [level: string]: number
  }

  declare interface LevelValuesToLabels {
    [level: number]: string
  }

  declare interface Logger {
    child(bindings: {}): Logger,
    level: Level,
    levelVal: number,
    on(event: LevelChangeEvent, listener: LevelChangeEventListener): void,
    fatal(msg: string, ...args: any[]): void,
    fatal(obj: {}, msg?: string, ...args: any[]): void,
    error(msg: string, ...args: any[]): void,
    error(obj: {}, msg?: string, ...args: any[]): void,
    warn(msg: string, ...args: any[]): void,
    warn(obj: {}, msg?: string, ...args: any[]): void,
    info(msg: string, ...args: any[]): void,
    info(obj: {}, msg?: string, ...args: any[]): void,
    debug(msg: string, ...args: any[]): void,
    debug(obj: {}, msg?: string, ...args: any[]): void,
    trace(msg: string, ...args: any[]): void,
    trace(obj: {}, msg?: string, ...args: any[]): void,
    levels: {
      values: LevelLabelsToValues,
      labels: LevelValuesToLabels
    },
    LOG_VERSION: number,
    stdSerializers: Serializers
  }

  declare interface LoggerOptions {
    safe?: boolean,
    name?: string,
    serializers?: Serializers,
    slowtime?: boolean,
    extreme?: boolean,
    enabled?: boolean,
    level?: Level | string,
    levelVal?: number
  }

  declare interface Serializers {
    req(req: any): any,
    res(res: any): any,
    err(error: Error): any
  }

  declare function pretty(opts?: {
    timeTransOnly?: boolean,
    levelFirst?: boolean,
    formatter?: (log: IPinoLog) => string
  }): stream$Transform;

  declare function P(
    optionsOrStream?:
      | LoggerOptions
      | stream$Writable
      | stream$Duplex
      | stream$Transform
  ): Logger;
  declare function P(
    options: LoggerOptions,
    stream: stream$Writable | stream$Duplex | stream$Transform
  ): Logger;

  declare module.exports: P;
}
