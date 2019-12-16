declare module '@koa/cors' {
  declare type Middleware = (
    ctx: any,
    next: () => Promise<void>
  ) => Promise<void> | void;
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

  declare export default function cors(options?: Options): Middleware;
}
