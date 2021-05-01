import { describe, it } from 'flow-typed-test';
import staticCache from 'koa-static-cache';

describe('koa-static-cache', () => {
  it('returns a function suitable for koa', async () => {
    const middleware = staticCache('/test');
    await middleware({ context: 'foo' }, () => Promise.resolve());
  });

  it('accepts just a dir', () => {
    staticCache('/test');
    // $FlowExpectedError[incompatible-call] must be string
    staticCache(123);
    // $FlowExpectedError[incompatible-call] must pass something in
    staticCache();
  });

  it('accepts options only', () => {
    staticCache({
      maxAge: 123,
      cacheControl: 'test',
      buffer: true,
      gzip: true,
      usePrecompiledGzip: true,
      alias: {
        foo: 'bar',
      },
      prefix: '123',
      dynamic: false,
      filter: ['', '', ''],
      preload: true,
      files: {
        '/test': {
          cacheControl: 'test',
          buffer: true,
          gzip: true,
        }
      },
    });

    // $FlowExpectedError[incompatible-call] Cannot be random types
    staticCache({
      maxAge: true,
      cacheControl: 123,
    });

    // $FlowExpectedError[incompatible-call] Cannot have random properties
    staticCache({
      random: '123',
    })
  });

  it('accepts file and options', () => {
    staticCache('/test', {
      maxAge: 123,
      cacheControl: 'test',
      buffer: true,
    });
  });

  it('accepts file, options and files', () => {
    staticCache(
      '/test',
      {
        maxAge: 123,
        cacheControl: 'test',
        buffer: true,
      },
      {
        '/test': {
          maxAge: 123,
          cacheControl: 'test',
          buffer: true,
        }
      }
    );
  });

  it('accepts options and files', () => {
    staticCache(
      {
        maxAge: 123,
        cacheControl: 'test',
        buffer: true,
      },
      {
        '/test': {
          maxAge: 123,
          cacheControl: 'test',
          buffer: true,
        }
      }
    );
  });
});
