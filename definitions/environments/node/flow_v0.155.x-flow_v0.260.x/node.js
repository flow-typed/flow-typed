// https://nodejs.org/api/esm.html#node-imports

declare module 'node:assert' {
  declare module.exports: $Exports<'assert'>;
}

declare module 'node:assert/strict' {
  declare module.exports: $Exports<'assert'>['strict'];
}

declare module 'node:events' {
  declare module.exports: $Exports<'events'>;
}

declare module 'node:fs' {
  declare module.exports: $Exports<'fs'>;
}

declare module 'node:os' {
  declare module.exports: $Exports<'os'>;
}

declare module 'fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

declare module 'node:fs/promises' {
  declare module.exports: $Exports<'fs'>['promises'];
}

declare module 'node:path' {
  declare module.exports: $Exports<'path'>;
}

declare module 'process' {
  declare module.exports: Process;
}

declare module 'node:process' {
  declare module.exports: $Exports<'process'>;
}

declare module 'node:util' {
  declare module.exports: $Exports<'util'>;
}

declare module 'node:url' {
  declare module.exports: $Exports<'url'>;
}

declare module 'worker_threads' {
  declare var isMainThread: boolean;
  declare var parentPort: null | MessagePort;
  declare var threadId: number;
  declare var workerData: any;

  declare class MessageChannel {
    +port1: MessagePort;
    +port2: MessagePort;
  }

  declare class MessagePort extends events$EventEmitter {
    close(): void;
    postMessage(value: any, transferList?: Array<ArrayBuffer | MessagePort>): void;
    ref(): void;
    unref(): void;
    start(): void;

    addListener(event: "close", listener: () => void): this;
    addListener(event: "message", listener: (value: any) => void): this;
    addListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    emit(event: "close"): boolean;
    emit(event: "message", value: any): boolean;
    emit(event: string | Symbol, ...args: any[]): boolean;

    on(event: "close", listener: () => void): this;
    on(event: "message", listener: (value: any) => void): this;
    on(event: string | Symbol, listener: (...args: any[]) => void): this;

    once(event: "close", listener: () => void): this;
    once(event: "message", listener: (value: any) => void): this;
    once(event: string | Symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "message", listener: (value: any) => void): this;
    prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "message", listener: (value: any) => void): this;
    prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "message", listener: (value: any) => void): this;
    removeListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    off(event: "close", listener: () => void): this;
    off(event: "message", listener: (value: any) => void): this;
    off(event: string | Symbol, listener: (...args: any[]) => void): this;
  }

  declare type WorkerOptions = {|
    env?: Object,
    eval?: boolean,
    workerData?: any,
    stdin?: boolean,
    stdout?: boolean,
    stderr?: boolean,
    execArgv?: string[]
  |}

  declare class Worker extends events$EventEmitter {
    +stdin: stream$Writable | null;
    +stdout: stream$Readable;
    +stderr: stream$Readable;
    +threadId: number;

    constructor(filename: string, options?: WorkerOptions): void;

    postMessage(value: any, transferList?: Array<ArrayBuffer | MessagePort>): void;
    ref(): void;
    unref(): void;
    terminate(callback?: (err: Error, exitCode: number) => void): void;
    /**
     * Transfer a `MessagePort` to a different `vm` Context. The original `port`
     * object will be rendered unusable, and the returned `MessagePort` instance will
     * take its place.
     *
     * The returned `MessagePort` will be an object in the target context, and will
     * inherit from its global `Object` class. Objects passed to the
     * `port.onmessage()` listener will also be created in the target context
     * and inherit from its global `Object` class.
     *
     * However, the created `MessagePort` will no longer inherit from
     * `EventEmitter`, and only `port.onmessage()` can be used to receive
     * events using it.
     */
    moveMessagePortToContext(port: MessagePort, context: vm$Context): MessagePort;

    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "exit", listener: (exitCode: number) => void): this;
    addListener(event: "message", listener: (value: any) => void): this;
    addListener(event: "online", listener: () => void): this;
    addListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    emit(event: "error", err: Error): boolean;
    emit(event: "exit", exitCode: number): boolean;
    emit(event: "message", value: any): boolean;
    emit(event: "online"): boolean;
    emit(event: string | Symbol, ...args: any[]): boolean;

    on(event: "error", listener: (err: Error) => void): this;
    on(event: "exit", listener: (exitCode: number) => void): this;
    on(event: "message", listener: (value: any) => void): this;
    on(event: "online", listener: () => void): this;
    on(event: string | Symbol, listener: (...args: any[]) => void): this;

    once(event: "error", listener: (err: Error) => void): this;
    once(event: "exit", listener: (exitCode: number) => void): this;
    once(event: "message", listener: (value: any) => void): this;
    once(event: "online", listener: () => void): this;
    once(event: string | Symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "exit", listener: (exitCode: number) => void): this;
    prependListener(event: "message", listener: (value: any) => void): this;
    prependListener(event: "online", listener: () => void): this;
    prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "exit", listener: (exitCode: number) => void): this;
    prependOnceListener(event: "message", listener: (value: any) => void): this;
    prependOnceListener(event: "online", listener: () => void): this;
    prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "exit", listener: (exitCode: number) => void): this;
    removeListener(event: "message", listener: (value: any) => void): this;
    removeListener(event: "online", listener: () => void): this;
    removeListener(event: string | Symbol, listener: (...args: any[]) => void): this;

    off(event: "error", listener: (err: Error) => void): this;
    off(event: "exit", listener: (exitCode: number) => void): this;
    off(event: "message", listener: (value: any) => void): this;
    off(event: "online", listener: () => void): this;
    off(event: string | Symbol, listener: (...args: any[]) => void): this;
  }
}

declare module 'node:worker_threads' {
  declare module.exports: $Exports<'worker_threads'>;
}
