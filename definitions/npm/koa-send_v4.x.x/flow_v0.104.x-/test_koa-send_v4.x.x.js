import send from "koa-send";
import type { Options, SendResult } from "koa-send";

const ctx = {};
const path = "/";

// $ExpectError (Must have ctx and path)
send();
// $ExpectError (Must have path)
send(ctx);
send(ctx, path);

// $ExpectError (Can't use invalid option names)
send(ctx, path, { hide: true });
send(ctx, path, { hidden: true });

// $ExpectError (Must use proper types for options)
send(ctx, path, { immutable: "true" });
send(ctx, path, { immutable: true });

send(ctx, path).then(result => {
  // $ExpectError (result should be a string)
  (result: number);
  (result: string);
});

async function sendAny(path: string, options: Options): SendResult {
  return await send(ctx, path, options);
}

sendAny(path, { root: '/root/path' });
