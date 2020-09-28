// @flow
import cacheManager from 'cache-manager';
import type { Cache } from 'cache-manager';

const memoryCache: Cache = new cacheManager.caching({
  store: 'memory', max: 100, ttl: 10
});

// $FlowExpectedError store missing
const invalidMemoryCache: Cache = new cacheManager.caching({
  max: 200,
});

// $FlowExpectedError
const invalidMemoryCache2: Cache = new cacheManager.caching({ max: '200' });

(memoryCache.set('foo', 'bar', { ttl: 5 }): Promise<void>);
// $FlowExpectedError Wrong Promise return
(memoryCache.set('foo', 'bar', { ttl: 5 }): Promise<number>);

memoryCache.get('foo');
memoryCache.del('foo');
