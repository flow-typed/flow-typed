declare module 'fast-memoize' {
  declare type Cache<K, V> = {
    get: (key: K) => V,
    set: (key: K, value: V) => void,
    has: (key: K) =>  boolean
  }

  declare type Options = {
    cache?: Cache<*, *>;
    serializer?: (...args: any[]) => any;
    strategy?: <T>(fn: T, options?: Options) => T;
  }


  declare module.exports: <T>(fn: T, options?: Options) => T;
}
