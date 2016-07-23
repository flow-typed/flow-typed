declare module 'cache-manager' {
  declare type _CacheOptions = {
    ttl?: number,
  }
  declare type CacheOptions = $Shape<_CacheOptions> | Object
  declare class Cache {
    get(key: mixed, options?: CacheOptions): Promise<mixed>;
    set(key: mixed, value: mixed, options?: CacheOptions): Promise<void>;
    del(key: mixed, options?: CacheOptions): Promise<void>;
  }
  declare class caching {
    constructor(options?: Object): Cache;
    static (options?: Object): Cache;
  }
  declare class multiCaching {
    constructor(caches: Cache[]): Cache;
    static (caches: Cache[]): Cache;
  }
  declare module.exports: {
    Cache: typeof Cache,
    caching: typeof caching,
    multiCaching: typeof multiCaching,
  }
}
