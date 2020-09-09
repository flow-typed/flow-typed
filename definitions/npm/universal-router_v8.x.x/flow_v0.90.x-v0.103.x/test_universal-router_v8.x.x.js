/* @flow */

import { describe, it } from 'flow-typed-test';
import UniversalRouter, {
  type $Route,
  type ResolveContext,
} from 'universal-router';
import UniversalRouterSync, {
  type $Route as $RouteSync,
  type ResolveContext as ResolveContextSync,
} from 'universal-router/sync';
import generateUrls from 'universal-router/generateUrls';

describe('#universalRouter', () => {
  type Context = {
    user?: string,
  };
  type Result =
    | {|
        redirect: string,
        from: string,
      |}
    | string;
  type ResolveContextCustom = ResolveContext & {
    search?: string,
  };
  type RouteCustom<C, RR, RC> = {|
    ...$Exact<$Route<RouteCustom<C, RR, RC>, C, RR, RC>>,
    protected?: boolean,
  |};

  it('UniversalRouter', () => {
    const routes: RouteCustom<Context, Result, ResolveContextCustom> = {
      name: 'root',
      async action({ next }) {
        const child = await next();
        return child;
      },
      children: [
        {
          path: '/users',
          name: 'users',
          protected: true,
          children: [
            {
              path: '',
              action: () => 'Users',
            },
            {
              path: '/:username',
              name: 'user',
              action(context, params) {
                // $FlowExpectedError
                const url: number = context.baseUrl;
                const pathname: string = context.pathname;
                // $FlowExpectedError
                const search: number = context.search;
                const username = ((params.username: any): string);

                return `Profile ${username}`;
              },
            },
          ],
        },
      ],
    };

    const router = new UniversalRouter<
      _,
      Context,
      Result,
      ResolveContextCustom
    >(routes, {
      context: {
        user: 'username',
      },
      baseUrl: '/base',
      resolveRoute(context, params) {
        if (context.route.protected && !context.user) {
          return { redirect: '/login', from: context.pathname };
        }

        if (typeof context.route.action === 'function') {
          return context.route.action(context, params);
        }

        return undefined;
      },
      errorHandler: (error, context) => {
        return error.status === 404 ? 'Not Found' : 'Something went wrong';
      },
    });

    const result1: Promise<Result> = router.resolve('/users');
    const result2: Promise<Result> = router.resolve({
      pathname: '/users/admin',
      search: '?foo=bar',
    });

    // $FlowExpectedError
    const wrongResult: Promise<string> = router.resolve('/');

    const router2 = new UniversalRouter<>([
      {
        async action(context) {
          // $FlowExpectedError
          const url: number = context.baseUrl;

          const child = await context.next();
          return child;
        },
        children: [
          {
            path: '/hello',
            action() {
              return { foo: 'bar' };
            },
          },
        ],
      },
    ]);

    const anyResult: Promise<any> = router2.resolve('/hello');
  });

  it('UniversalRouterSync', () => {
    type ResolveContextSyncCustom = ResolveContextSync & {
      search?: string,
    };
    type RouteSyncCustom<C, RR, RC> = {|
      ...$Exact<$RouteSync<RouteSyncCustom<C, RR, RC>, C, RR, RC>>,
      protected?: boolean,
    |};

    const routesSync: RouteSyncCustom<
      Context,
      Result,
      ResolveContextSyncCustom
    > = {
      name: 'root',
      action({ next }) {
        return next();
      },
      children: [
        {
          path: '/users',
          name: 'users',
          protected: true,
          children: [
            {
              path: '',
              action: () => 'Users',
            },
            {
              path: '/:username',
              name: 'user',
              action(context, params) {
                // $FlowExpectedError
                const url: number = context.baseUrl;
                const pathname: string = context.pathname;
                // $FlowExpectedError
                const search: number = context.search;
                const username = ((params.username: any): string);

                return `Profile ${username}`;
              },
            },
          ],
        },
      ],
    };

    const routerSync = new UniversalRouterSync<
      _,
      Context,
      Result,
      ResolveContextSyncCustom
    >(routesSync, {
      context: {
        user: 'username',
      },
      baseUrl: '/base',
      resolveRoute(context, params) {
        if (context.route.protected && !context.user) {
          return { redirect: '/login', from: context.pathname };
        }

        if (typeof context.route.action === 'function') {
          return context.route.action(context, params);
        }

        return undefined;
      },
      errorHandler: (error, context) => {
        return error.status === 404 ? 'Not Found' : 'Something went wrong';
      },
    });

    const resultSync1: Result = routerSync.resolve('/users');
    const resultSync2: Result = routerSync.resolve({
      pathname: '/users/admin',
      search: '?foo=bar',
    });

    // $FlowExpectedError
    const wrongResultSync: string = routerSync.resolve('/');

    const routerSync2 = new UniversalRouterSync<>([
      {
        action(context) {
          // $FlowExpectedError
          const url: number = context.baseUrl;

          return context.next();
        },
        children: [
          {
            path: '/hello',
            action() {
              return { foo: 'bar' };
            },
          },
        ],
      },
    ]);

    const anyResultSync: any = routerSync2.resolve('/hello');
  });

  it('generateUrls', () => {
    const router = new UniversalRouter<
      RouteCustom<Context, Result, ResolveContextCustom>,
      Context,
      Result,
      ResolveContextCustom
    >(
      [
        {
          name: 'home',
          path: '',
        },
        {
          name: 'users',
          path: '/users',
        },
        {
          name: 'user',
          path: '/user/:username',
        },
        {
          name: 'post',
          path: '/blog/:category+/:title',
        },
      ],
      { baseUrl: '/base' }
    );

    const path = generateUrls(router);

    const resultPath1: string = path('home'); // => '/base'
    // $FlowExpectedError
    const resultPath2: number = path('users'); // => '/base/users'

    const options = {
      encode: (value: string) => value,
      stringifyQueryParams(params) {
        return Object.keys(params)
          .map(key => `${key}=${params[key]}`)
          .join('&');
      },
    };

    // $FlowExpectedError
    generateUrls();
    // $FlowExpectedError
    generateUrls({});
    // $FlowExpectedError
    generateUrls(router, { foo: 'bar' });

    const url = generateUrls(router, options);

    const resultUrl1: string = url('users'); // => '/base/users'
    const resultUrl2: string = url('user', { username: 'John', busy: 1 }); // => '/base/user/John?busy=1'
    const resultUrl3: string = url('post', {
      category: ['a', 'b'],
      title: 'c',
    }); // => '/base/blog/a/b/c'
    // $FlowExpectedError
    const resultUrl4: number = url('home');
  });
});
