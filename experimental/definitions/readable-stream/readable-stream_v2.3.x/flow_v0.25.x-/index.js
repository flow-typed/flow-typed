declare module 'readable-stream' {
  import typeof * as events from 'events';

  import typeof * as stream from 'stream';

  import typeof * as SafeBuffer from 'safe-buffer';

  import type { StringDecoder } from 'string_decoder';

  declare class _Readable extends stream$Readable {
    _readableState: _Readable$ReadableState;
    destroyed: boolean;
    constructor(options?: _Readable$ReadableOptions): this;
    destroy(err?: Error, callback?: (error: Error | null) => void): this;
    _undestroy(): void;
    static NodeBaseExport: typeof _Readable$NodeBaseExport;
    static Readable: typeof _Readable$Readable;
    static Duplex: typeof _Readable$Duplex;
    static PassThrough: typeof _Readable$PassThrough;
    static Transform: typeof _Readable$Transform;
    static Writable: typeof _Readable$Writable;
    static Stream: typeof _Readable$Stream;
  }

  declare interface _Readable$Entry<D> {
    data: D;
    next: _Readable$Entry<D> | null;
  }

  declare interface _Readable$BufferList<D: SafeBuffer.Buffer> {
    head: _Readable$Entry<D>;
    tail: _Readable$Entry<D>;
    length: number;
    push(v: D): void;
    unshift(v: D): void;
    shift(): D;
    clear(): void;
    join(s: any): string;
    concat(n: number): D;
  }

  declare interface _Readable$Destroy {
    destroy(
      error: Error | null,
      callback?: (error: Error | null) => void
    ): _Readable$Readable | _Readable$Writable;
    undestroy(): void;
  }

  declare type _Readable$DuplexOptions = _Readable$ReadableOptions &
    _Readable$WritableOptions & {
      allowHalfOpen?: boolean,
      readable?: boolean,
      writable?: boolean,
      read(size: number): void,
      write(
        chunk: any,
        encoding: string,
        callback: (error?: Error | null) => void
      ): void,
      writev(
        chunks: Array<{
          chunk: any,
          encoding: string,
        }>,
        callback: (error?: Error | null) => void
      ): void,
      final(callback: (error?: Error | null) => void): void,
      destroy(
        error: Error | null,
        callback: (error: Error | null) => void
      ): void,
    };

  declare class _Readable$Duplex extends _Readable$Writable
    implements /*extends*/ _Readable, stream$Duplex {
    allowHalfOpen: boolean;
    destroyed: boolean;
    readable: boolean;
    readableHighWaterMark: number;
    readableLength: number;
    _readableState: _Readable$ReadableState;
    _read(size?: number): void;
    read(size?: number): any;
    setEncoding(enc: string): this;
    resume(): this;
    pause(): this;
    isPaused(): boolean;
    unpipe(dest?: NodeJS.WritableStream): this;
    unshift(chunk: any): boolean;
    wrap(oldStream: NodeJS.ReadableStream): this;
    push(chunk: any, encoding?: string): boolean;
    _destroy(err: Error | null, callback: (error: Error | null) => void): void;
    destroy(err?: Error, callback?: (error: Error | null) => void): this;
    pipe<S: NodeJS.WritableStream>(
      dest: S,
      pipeOpts?: {
        end?: boolean,
      }
    ): S;
    addListener(ev: string | Symbol, fn: (...args: any[]) => void): this;
    on(ev: string | Symbol, fn: (...args: any[]) => void): this;
    _undestroy(): void;
    undefined(): AsyncIterableIterator<string | Buffer>;
    constructor(options?: _Readable$DuplexOptions): this;
  }

  declare class _Readable$PassThrough
    mixins _Readable$Transform, stream$PassThrough {
    constructor(options?: _Readable$TransformOptions): this;
    _transform<T>(
      chunk: T,
      encoding: string | null | void,
      callback: (error: any, data: T) => void
    ): void;
  }

  declare type _Readable$ReadableStateOptions = {
    defaultEncoding?: string,
    encoding?: string,
    highWaterMark?: number,
    objectMode?: boolean,
    readableObjectMode?: boolean,
    readableHighWaterMark?: number,
  };

  declare type _Readable$ReadableState = {
    objectMode: boolean,
    highWaterMark: number,
    buffer: _Readable$BufferList<any>,
    length: number,
    pipes: any,
    pipesCount: number,
    flowing: any,
    ended: boolean,
    endEmitted: boolean,
    reading: boolean,
    sync: boolean,
    needReadable: boolean,
    emittedReadable: boolean,
    readableListening: boolean,
    resumeScheduled: boolean,
    destroyed: boolean,
    awaitDrain: number,
    defaultEncoding: string,
    readingMore: boolean,
    decoder: StringDecoder | null,
    encoding: string | null,
  };

  declare type _Readable$ReadableOptions = _Readable$ReadableStateOptions & {
    read(size: number): void,
    destroy(error: Error | null, callback: (error: Error | null) => void): void,
  };

  declare class _Readable$Readable extends _Readable {
    constructor(options?: _Readable$ReadableOptions): this;
  }

  declare type _Readable$TransformOptions = _Readable$DuplexOptions & {
    read(size: number): void,
    write(
      chunk: any,
      encoding: string,
      callback: (error?: Error | null) => void
    ): void,
    writev(
      chunks: Array<{
        chunk: any,
        encoding: string,
      }>,
      callback: (error?: Error | null) => void
    ): void,
    final(callback: (error?: Error | null) => void): void,
    destroy(error: Error | null, callback: (error: Error | null) => void): void,
    transform(
      chunk: any,
      encoding: string,
      callback: (error?: Error, data?: any) => void
    ): void,
    flush(callback: (er: any, data: any) => void): void,
  };

  declare class _Readable$Transform extends _Readable$Duplex
    implements stream$Transform {
    _transformState: {
      afterTransform: (er: any, data: any) => void | boolean,
      needTransform: boolean,
      transforming: boolean,
      writecb: ((err: any) => any) | null,
      writechunk: any,
      writeencoding: string | null,
    };
    constructor(options?: _Readable$TransformOptions): this;
    _transform(
      chunk: any,
      encoding: string,
      callback: (error?: Error, data?: any) => void
    ): void;
    _flush(callback: (error?: Error, data?: any) => void): void;
  }

  declare type _Readable$CorkedRequest = {
    next: any,
    entry: any,
    finish(): void,
  };

  declare type _Readable$BufferRequest = {
    chunk: any,
    encoding: string,
    isBuf: boolean,
    callback: (error?: Error | null) => void,
    next: _Readable$BufferRequest | null,
  };

  declare type _Readable$WritableStateOptions = {
    decodeStrings?: boolean,
    defaultEncoding?: string,
    highWaterMark?: number,
    objectMode?: boolean,
    writableObjectMode?: boolean,
    writableHighWaterMark?: number,
  };

  declare type _Readable$WritableState = {
    buffer: _Readable$BufferRequest[],
    objectMode: boolean,
    highWaterMark: number,
    finalCalled: boolean,
    needDrain: boolean,
    ending: boolean,
    ended: boolean,
    finished: boolean,
    destroyed: boolean,
    decodeStrings: boolean,
    defaultEncoding: string,
    length: number,
    writing: boolean,
    corked: number,
    sync: boolean,
    bufferProcessing: boolean,
    writelen: number,
    pendingcb: number,
    prefinished: boolean,
    errorEmitted: boolean,
    bufferedRequestCount: number,
    writecb: ((err?: Error | null) => void) | null,
    onwrite: (er?: Error | null) => any,
    bufferedRequest: _Readable$BufferRequest | null,
    lastBufferedRequest: _Readable$BufferRequest | null,
    corkedRequestsFree: _Readable$CorkedRequest,
    getBuffer(): _Readable$BufferRequest[],
  };

  declare type _Readable$WritableOptions = _Readable$WritableStateOptions & {
    write(
      chunk: any,
      encoding: string,
      callback: (error?: Error | null) => void
    ): void,
    writev(
      chunk: ArrayLike<{
        chunk: any,
        encoding: string,
      }>,
      callback: (error?: Error | null) => void
    ): void,
    destroy(error: Error | null, callback: (error: Error | null) => void): void,
    final(callback: (error?: Error | null) => void): void,
  };

  declare class _Readable$Writable extends stream$Writable {
    destroyed: boolean;
    _writableState: _Readable$WritableState;
    constructor(options?: _Readable$WritableOptions): this;
    destroy(error?: Error, callback?: (error?: Error | null) => void): this;
    _undestroy(): void;
  }

  declare class _Readable$Stream extends _Readable {
    constructor(options?: _Readable$ReadableOptions): this;
  }

  declare var _Readable$NodeBaseExport: stream$Readable & {
    _Readable$Readable: stream$Readable,
    _Readable$Writable: stream$Writable,
    _Readable$Duplex: stream$Duplex,
    _Readable$Transform: stream$Transform,
    _Readable$PassThrough: stream$PassThrough,
    _Readable$Stream: stream,
  };

  declare module.exports: typeof _Readable;
}
