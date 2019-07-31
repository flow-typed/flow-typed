import { describe, it } from 'flow-typed-test';
import memoize, { type Cache } from 'fast-memoize';

describe('fast-memoize', () => {

  it('should memoize', () => {
    const fn: string => string = _ => _.trim();
    const memoizedFn1: string => string = memoize(fn)
    // $ExpectError
    const memoizedFn2: number => number = memoize(fn)
  })

  it('should memoize with external cache', () => {
    const cache: Cache<string, string> = {
      get: (key: string) => key,
      set: (key: string, value: string) => {},
      has: (key: string) => true
    };
    const fn: string => string = _ => _.trim();
    const memoizedFn1: string => string = memoize(
      fn,
      { cache, serializer: () => '' }
    );
  })
})
