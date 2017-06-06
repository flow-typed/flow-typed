// @flow
import Koa from 'koa';

const koa: Koa = new Koa();
// $ExpectError missing port
(koa.listen(): void);
koa.use((ctx, next) => {
  (ctx.fresh: bool);
  (ctx.path: string);
  (ctx.request.origin: string);
  // $ExpectError req !== request
  (ctx.req.origin: string);
  (ctx.response.status: ?number);
  // $ExpectError res !== response
  (ctx.res.status: ?number);
});
