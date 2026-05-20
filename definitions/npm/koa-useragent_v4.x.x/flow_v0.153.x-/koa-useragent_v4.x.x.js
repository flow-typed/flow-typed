declare module 'koa-useragent' {
  import type { Middleware } from 'koa';

  declare module.exports: {|
    userAgent: Middleware,
  |};
}
