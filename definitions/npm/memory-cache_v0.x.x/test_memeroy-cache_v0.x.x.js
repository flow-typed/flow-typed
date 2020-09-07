// @flow
import { it, describe } from "flow-typed-test";
import cache from "memory-cache";

describe('memory-cache', () => {
  it('can use the cache', () => {
    cache.put('houdini', 'disappear', 100);
    cache.get('houdini');
    const size: number = cache.size();
    const deleted: boolean = cache.del('houdini');
    cache.clear()
  })

  it('can create new cache instances', () => {
    cache.put('foo', 'bar');

    const newCache = new cache.Cache();
    newCache.put('foo', 'newbaz');

    cache.get('foo');
    newCache.get('foo');
  })
});
