// @flow
import bodyparser from 'koa-bodyparser';

bodyparser();
// $ExpectError
bodyparser({
  strict: true,
  encode: true,
});
