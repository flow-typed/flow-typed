declare module 'koa-json-body' {
  declare type Middleware = (
    ctx: any,
    next: () => Promise<void>
  ) => Promise<void> | void;
  declare type Options = $Shape<{|
    fallback: boolean,
    limit: string | number,
    strict: boolean,
  |}>;

  declare module.exports: (options?: Options) => Middleware;
}
