declare module "koa-views" {
  declare type Context = { [key: string]: any, ... };

  declare type Middleware = (
    ctx: Context,
    next: () => Promise<void>
  ) => Promise<void> | void;

  declare type Options = {|
    extension?: string,
    options?: { [key: string]: any, ... },
    map?: { [key: string]: any, ... },
    engineSource?: { [key: string]: any, ... }
  |};

  declare module.exports: (
    root: string,
    opts?: Options
  ) => Middleware;
}
