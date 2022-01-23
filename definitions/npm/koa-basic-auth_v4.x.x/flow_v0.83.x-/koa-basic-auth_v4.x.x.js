declare module 'koa-basic-auth' {
  declare type Middleware = (
    ctx: any,
    next: () => Promise<void>
  ) => Promise<void>;

  declare module.exports: (opts: {|
    name: string,
    pass: string,
  |}) => Middleware;
}
