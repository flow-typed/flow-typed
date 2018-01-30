/**
 * @flow
 */

import App, { type Middleware } from "koa";
import Router, { type ParamMiddleware } from "koa-router";

// $ExpectError
Router.url("/");
Router.url("/", {});

const router = new Router();

// $ExpectError
const badRouter1 = new Router("api");
const goodRouter1 = new Router({ prefix: "/api" });

// $ExpectError
const badRouter2 = new Router({ sensitive: "true" });
const goodRouter2 = new Router({ sensitive: true });

const middleware: Middleware = async (ctx, next) => {
  ctx.body = "ok";
  await next();
};

const paramMiddleware: ParamMiddleware = async (param, ctx, next) => {
  ctx.body = "ok";
  await next();
};

// $ExpectError
router.use((ctx: string) => "bad type");
router.use("/", middleware);
router.use("/", middleware, middleware);
router.use(middleware);
router.use(middleware, middleware);

// $ExpectError
router.get();
router.get("/", middleware);
router.get("/", middleware, middleware);

// $ExpectError
router.post();
router.post("/", middleware);
router.post("/", middleware, middleware);

// $ExpectError
router.put();
router.put("/", middleware);
router.put("/", middleware, middleware);

// $ExpectError
router.patch();
router.patch("/", middleware);
router.patch("/", middleware, middleware);

// $ExpectError
router.delete();
router.delete("/", middleware);
router.delete("/", middleware, middleware);

// $ExpectError
router.del();
router.del("/", middleware);
router.del("/", middleware, middleware);

// $ExpectError
router.all();
router.all("name", "/", middleware);
router.all("/", middleware);
router.all("/", middleware, middleware);

// $ExpectError
router.param(10);
router.param("param", paramMiddleware);

// $ExpectError
router.param("param");
router.param("param", paramMiddleware);

// $ExpectError
router.prefix();
router.prefix("/api");

// $ExpectError
router.url();
router.url("name");

const app = new App();

// $ExpectError
app.use(router.route());
app.use(router.routes());

// $ExpectError
app.use(router.allowedMethod());
app.use(router.allowedMethods());
