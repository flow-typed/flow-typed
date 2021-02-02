// @flow
import { describe, it } from 'flow-typed-test';
import cors from '@koa/cors';

describe('cors', () => {
  it('supports being called without options', async () => {
    const middleware = cors();
    const context: any = 'foo';
    await middleware(context, () => Promise.resolve());
  });

  it('supports being called with all options', () => {
    cors({
      origin: 'origin',
      allowMethods: 'GET,PUT',
      exposeHeaders: 'Accept',
      maxAge: 1234466,
      credentials: true,
      keepHeadersOnError: true,
    });

    // $FlowExpectedError
    cors({
      foo: 'bar',
    });
  });

  it('supports other types for some of the options too', () => {
    cors({
      allowMethods: ['GET', 'POST'],
      exposeHeaders: ['Accept', 'X-Forwarding-For'],
      allowHeaders: ['Accept', 'X-Forwarding-For'],
      maxAge: '12344567',
    });
  });
})
