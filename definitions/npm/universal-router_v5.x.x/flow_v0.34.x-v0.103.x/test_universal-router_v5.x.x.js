/* @flow */

import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";

const routes = [
  {
    path: "", // optional
    action: () => `<h1>Home</h1>`
  },
  {
    path: "/posts",
    action: () => console.log("checking child routes for /posts"),
    children: [
      {
        path: "", // optional, matches both "/posts" and "/posts/"
        action: () => `<h1>Posts</h1>`
      },
      {
        path: "/:id",
        action: context => `<h1>Post #${context.params.id}</h1>`
      }
    ]
  }
];

type RouterType = UniversalRouterType<
  UniversalRouterRoute,
  UniversalRouterContext,
  string
>;

const router: RouterType = new UniversalRouter(routes);

let postsResult: Promise<string> = router.resolve("/posts");
postsResult = router.resolve({ pathname: "/posts" });

// $ExpectError
const wrongPostsResult: Promise<number> = router.resolve("/posts");

const url = generateUrls(router);

// $ExpectError
const wrongUrl = generateUrls({});

const usersUrl: string = url("users");

// $ExpectError
const wrongUsersUrl: number = url("users");
