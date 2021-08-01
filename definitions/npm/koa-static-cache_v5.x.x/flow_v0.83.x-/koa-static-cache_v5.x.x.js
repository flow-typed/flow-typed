declare module 'koa-static-cache' {
  declare type Context = any;
  declare type Response = any;

  declare type Middleware = (
    ctx: Context,
    next: () => Promise<void>
  ) => Promise<void> | void;

  declare type Files = {|
    [path: string]: Options;
  |};

  declare type Options = {|
    dir?: string,
    maxAge?: number,
    cacheControl?: string,
    buffer?: boolean,
    gzip?: boolean,
    usePrecompiledGzip?: boolean,
    alias?: { ... },
    prefix?: string,
    dynamic?: boolean,
    filter?: ((path: string) => boolean) | Array<string>,
    preload?: boolean,
    files?: Files,
  |};

  declare module.exports: (
    dir: string | Options,
    options?: Options | Files,
    files?: Files
  ) => Middleware;
}
