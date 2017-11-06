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
goodRouter.get("/");
goodRouter.get("/", async ctx => {
  ctx.body = "Hello World";
});

// $ExpectError
goodRouter.use(10);
goodRouter.use(async ctx => {});
goodRouter.use("/foo", async ctx => {});
