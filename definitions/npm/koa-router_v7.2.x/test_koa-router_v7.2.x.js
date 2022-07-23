// @flow
import type { Middleware } from 'koa';
import Router from 'koa-router';

/**
 * Test Global Middleware type
 */

// $FlowExpectedError[incompatible-type]
const badMiddleware: Middleware = 10;
const goodMiddleware: Middleware = async (ctx, next) => {};

/**
 * Test Router instantiation
 */

// $FlowExpectedError[incompatible-call]
const badRouter = new Router({ prefix: 10 });
const goodRouter = new Router({ prefix: "/api" });

/**
 * Test Router methods
 */

// $FlowExpectedError[incompatible-call]
goodRouter.get(10);
goodRouter.get("/", async ctx => {
  ctx.body = "Hello World";
});
goodRouter.get(["/", "/foo"], ctx => {});
goodRouter.get(["/", "/foo"], ctx => {}, ctx => {});

// $FlowExpectedError[incompatible-call]
goodRouter.use(10);
goodRouter.use(async ctx => {});
goodRouter.use("/foo", async ctx => {});

goodRouter.param("foo", async ctx => {
  // $FlowExpectedError[prop-missing]
  console.log(ctx.params.foo);
});
goodRouter.param("foo", async (foo, ctx) => {});
goodRouter.param("foo", (foo, ctx, next) => {});
