// @flow
import * as route from "koa-route";

const getData = async (param: string) => Promise.resolve({ foo: param });

const getter = route.get("/login");
getter((ctx, next) => {
  ctx.body = { status: "OK" };
  next();
});

route.put("/api/:param", async (ctx, param, next) => {
  const data = await getData(param);
  ctx.body = { status: "OK", ...data };
  next();
});

route.post(/public/g, () => {});
route.all("creator");
// $ExpectError
route.all({});
