import { describe, it } from 'flow-typed-test';
import Router from "koa-router";

describe('expectations', () => {
  it('defines a Middleware type', () => {
    // $ExpectError
    const badMiddleware: KoaRouter$Middleware = 10;
    const goodMiddleware: KoaRouter$Middleware = async (ctx, next) => {};
  });

  it('types the constructor properly', () => {
    // $ExpectError
    const badRouter = new Router({ prefix: 10 });
    const goodRouter = new Router({ prefix: "/api" });
  });

  it('static url()', () => {
    // $ExpectError
    Router.url('/users/:id', 1);
    (Router.url('/users/:id', { id: 1 }): string);
  });

  it('Router is typechecked', () => {
    // $ExpectError
    Router.foobar();
  })

  describe('router methods', () => {
    const router = new Router();

    it('is typechecked', () => {
      // $ExpectError
      router.foobar();
    });

    it('get()', () => {
      // $ExpectError
      router.get(10);
      router.get("/", async ctx => {
        ctx.body = "Hello World";
      });
      router.get(["/", "/foo"], ctx => {});
      router.get(["/", "/foo"], ctx => {}, ctx => {});
      router.get('user', "/", ctx => {});
    });

    it('post()', () => {
      // $ExpectError
      router.post(10);
      router.post("/", async ctx => {
        ctx.body = "Hello World";
      });
      router.post(["/", "/foo"], ctx => {});
      router.post(["/", "/foo"], ctx => {}, ctx => {});
      router.post('user', "/", ctx => {});
    });

    it('patch()', () => {
      // $ExpectError
      router.patch(10);
      router.patch("/", async ctx => {
        ctx.body = "Hello World";
      });
      router.patch(["/", "/foo"], ctx => {});
      router.patch(["/", "/foo"], ctx => {}, ctx => {});
      router.patch('user', "/", ctx => {});
    });

    it('put()', () => {
      // $ExpectError
      router.put(10);
      router.put("/", async ctx => {
        ctx.body = "Hello World";
      });
      router.put(["/", "/foo"], ctx => {});
      router.put(["/", "/foo"], ctx => {}, ctx => {});
      router.put('user', "/", ctx => {});
    });

    it('delete()', () => {
      // $ExpectError
      router.delete(10);
      router.delete("/", async ctx => {
        ctx.body = "Hello World";
      });
      router.delete(["/", "/foo"], ctx => {});
      router.delete(["/", "/foo"], ctx => {}, ctx => {});
      router.delete('user', "/", ctx => {});
    });

    it('del()', () => {
      // $ExpectError
      router.del(10);
      router.del("/", async ctx => {
        ctx.body = "Hello World";
      });
      router.del(["/", "/foo"], ctx => {});
      router.del(["/", "/foo"], ctx => {}, ctx => {});
      router.del('user', "/", ctx => {});
    });

    it('all()', () => {
      // $ExpectError
      router.all(10);
      router.all("/", async ctx => {
        ctx.body = "Hello World";
      });
      router.all(["/", "/foo"], ctx => {});
      router.all(["/", "/foo"], ctx => {}, ctx => {});
      router.all('user', "/", ctx => {});
    });

    it('use()', () => {
      // $ExpectError
      router.use(10);
      router.use(async ctx => {});
      router.use("/foo", async ctx => {});
      router.use(["/foo", "/bar"], async ctx => {});
    });

    it('param()', () => {
      router.param("foo", async ctx => {
        // $ExpectError
        console.log(ctx.params.foo);
      });
      router.param("foo", async (foo, ctx) => {});
      router.param("foo", (foo, ctx, next) => {});
    });

    it('url()', () => {
      // $ExpectError
      router.url(10);
      // $ExpectError
      router.url('user');
      (router.url('user', { id: 3 }): string | Error);
      (router.url('user', { id: 3 }, { query: "limit=1" }): string | Error);
      (router.url('user', { id: 3 }, { query: { limit: 1 } }): string | Error);
    });

    it('redirect()', () => {
      router.redirect('/source', 'destination');
      router.redirect('/source', 'destination', 302);
      // $ExpectError
      router.redirect('/source', 302);
    });

    it('routes() and allowedMethods()', () => {
      const nestedRouter = new Router();
      router.use(nestedRouter.routes());
      router.use(nestedRouter.allowedMethods());
      router.use(nestedRouter.routes(), nestedRouter.allowedMethods());
    });
  });
});

