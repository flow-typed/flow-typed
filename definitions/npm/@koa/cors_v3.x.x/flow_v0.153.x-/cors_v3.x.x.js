declare module '@koa/cors' {
  import type { Middleware } from 'koa';

  declare type Options = $Shape<{|
    // TODO better support the "function" use case.
    // This is a bit painful to type this object from scratch.
    origin: string | ((ctx: any) => string | Promise<string>),
    allowMethods: string | string[],
    exposeHeaders: string | string[],
    allowHeaders: string | string[],
    maxAge: string | number,
    credentials: boolean,
    keepHeadersOnError: boolean,
  |}>;

  declare module.exports: (options?: Options) => Middleware;
}
