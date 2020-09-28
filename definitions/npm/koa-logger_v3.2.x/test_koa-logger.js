import { describe, it } from 'flow-typed-test';
import logger from 'koa-logger';

describe('koa-logger', () => {
  it('returns a logger suitable for koa', async () => {
    const loggerMiddleware = logger();
    await loggerMiddleware({ context: 'foo' }, () => Promise.resolve());
  });

  it('can change the transporter', () => {
    function transporter(str, args) {
      (str: string);
      const [ format, method, url, status, time, length ] = args;
      (format: string);
      (method: string);
      (url: string);
      (status: number | void);
      (time: string | void);
      (length: string | void);
    }

    logger(transporter);
    logger({ transporter });

    // $FlowExpectedError
    logger('foo');
  });
});
