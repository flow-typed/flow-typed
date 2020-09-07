declare module 'cache-manager' {
  declare type _CacheOptions = {
    ttl?: number,
  }
  /*declare type CacheOptions = $Shape<_CacheOptions> | Object*/
  declare type CacheOptions = Object
  declare type CachingOptions = _CacheOptions & {
    ignoreCacheErrors?: bool,
    isCacheableValue?: (value: mixed) => bool,
    promiseDependency?: any, // typeof Promise?
    max?: number,
    store: any //any because this can be specified by a lot
  }
  declare class Cache {
    get(key: mixed, options?: CacheOptions): Promise<mixed>;
    set(key: mixed, value: mixed, options?: CacheOptions): Promise<void>;
    del(key: mixed, options?: CacheOptions): Promise<void>;
    wrap(key: mixed, cb: (cacheCallback: Function) => mixed, options?: CacheOptions): Promise<any>;
  }
  declare class caching {
    constructor(options?: CachingOptions): Cache;
    static (options?: CachingOptions): Cache;
  }
  declare class multiCaching {
    constructor(caches: Cache[], options?: CachingOptions): Cache;
    static (caches: Cache[], options?: CachingOptions): Cache;
  }
  declare module.exports: {
    Cache: typeof Cache,
    caching: typeof caching,
    multiCaching: typeof multiCaching,
  }
}
