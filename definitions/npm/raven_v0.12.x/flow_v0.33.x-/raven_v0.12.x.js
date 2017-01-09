declare module 'raven' {
  declare type ClientOptions = {
    logger?: string,
    release?: string,
    environment?: string,
    tags?: { [name: string]: string },
    extra: Object,
    dataCallback: (data: Object) => Object,
    transport: (options: any) => any,
  }
  declare class Raven extends events$EventEmitter {
    static constructor(dsn: string, options?: ClientOptions): Raven;
    patchGlobal(cb?: () => void): void;
    captureException(e: Error, cb?: (result: any) => void): void;
    setUserContext(data: Object): void;
    setExtraContext(extra: Object): void;
    setTagsContext(tags: { [name: string]: string }): void;
    captureMessage(message: string, cb?: (result: any) => void): void;
  }
  declare module.exports: {
    Client: typeof Raven,
    patchGlobal(clientOrDSN: Raven|string): void,
  }
}
