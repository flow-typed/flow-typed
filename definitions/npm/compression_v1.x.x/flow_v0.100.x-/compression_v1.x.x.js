declare module 'compression' {
  declare function e(options?: e$CompressionOptions): any; // express.RequestHandler;

  declare var npm$namespace$e: {|
    filter: typeof e$filter,
  |};

  /**
   * Default filter, used for extending filter given in CompressionOptions
   * See https://github.com/expressjs/compression#filter-1 regarding the usage
   */
  declare export function e$filter(
    req: any, // express.Request,
    res: any // express.Response
  ): boolean;

  declare type e$CompressionFilter = {
    (
      req: any, // express.Request
      res: any // express.Response
    ): boolean,
    ...
  };

  declare type e$CompressionOptions = {|
    /**
     * See https://github.com/expressjs/compression#chunksize regarding the usage.
     */
    chunkSize?: number,

    /**
     * See https://github.com/expressjs/compression#level regarding the usage.
     */
    level?: number,

    /**
     * See https://github.com/expressjs/compression#memlevel regarding the usage.
     */
    memLevel?: number,

    /**
     * See https://github.com/expressjs/compression#strategy regarding the usage.
     */
    strategy?: number,

    /**
     * See https://github.com/expressjs/compression#threshold regarding the usage.
     */
    threshold?: number | string,

    /**
     * See https://github.com/expressjs/compression#windowbits regarding the usage.
     */
    windowBits?: number,

    /**
     * See https://github.com/expressjs/compression#filter regarding the usage.
     */
    filter?: e$CompressionFilter,

    /**
     * See https://nodejs.org/api/zlib.html#zlib_class_options regarding the usage.
     */
    flush?: number,

    /**
     * See https://nodejs.org/api/zlib.html#zlib_class_options regarding the usage.
     */
    finishFlush?: number,
  |};

  declare export default typeof e;
}
