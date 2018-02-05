/**
 * @flow
 */

import Router from "koa-router";

/**
 * Test Global KoaRouter$Middleware type
 */

// $ExpectError
const badMiddleware: KoaRouter$Middleware = 10;
const goodMiddleware: KoaRouter$Middleware = async (ctx, next) => {};

/**
 * Test Router instantiation
 */

// $ExpectError
const badRouter = new Router({ prefix: 10 });
const goodRouter = new Router({ prefix: "/api" });

/**
 * Test Router methods
 */

// $ExpectError
goodRouter.get(10);
goodRouter.get("/", async ctx => {
  ctx.body = "Hello World";
});
goodRouter.get(["/", "/foo"], ctx => {});
goodRouter.get(["/", "/foo"], ctx => {}, ctx => {});

// $ExpectError
goodRouter.use(10);
goodRouter.use(async ctx => {});
goodRouter.use("/foo", async ctx => {});

goodRouter.param("foo", async ctx => {
  // $ExpectError
  console.log(ctx.params.foo);
});
goodRouter.param("foo", async (foo, ctx) => {});
goodRouter.param("foo", (foo, ctx, next) => {});
