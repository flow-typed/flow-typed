declare module "koa-views" {
  declare type Context = Object;

  declare type Middleware = (
    ctx: Context,
    next: () => Promise<void>
  ) => Promise<void> | void;

  declare type Options = {|
    extension?: string,
    options?: Object,
    map?: Object,
    engineSource?: Object
  |};

  declare export default function views(
    root: string,
    opts?: Options
  ): Middleware;
}
