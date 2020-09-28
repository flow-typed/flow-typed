// @flow
import { describe, it } from 'flow-typed-test';
import body from 'koa-json-body';

describe('koa-json-body', () => {
  it('supports being called without options', async () => {
    const middleware = body();
    const context: any = 'foo';
    await middleware(context, () => Promise.resolve());
  });

  it('supports being called with all options', () => {
    body({
      fallback: true,
      limit: '1mb',
      strict: false,
    });

    body({
      limit: 1000000,
    });

    // $FlowExpectedError
    body({
      foo: 'bar',
    });
  });
})
