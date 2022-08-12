// @flow
import { describe, test } from 'flow-typed-test';

const Koa = require('koa');
const { userAgent } = require('koa-useragent');

describe('koa-useragent', () => {
  test('works', () => {
    const app = new Koa();

    app.use(userAgent);
  });

  test('fails', () => {
    // $FlowExpectedError[prop-missing]
    require('koa-useragent').foo;
  });
});
