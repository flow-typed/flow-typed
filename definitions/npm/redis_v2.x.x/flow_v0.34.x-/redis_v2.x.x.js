/* This module definition is by no means complete. A lot of methods of the RedisClient class are missing */
declare module "redis" {
  declare class RedisClient extends events$EventEmitter mixins RedisClientPromisified {
    hmset: (key: string, map: any, callback: (?Error) => void) => void;
    rpush: (key: string, value: string, callback: (?Error) => void) => void;
    lpush: (key: string, value: any) => number;
    lrem: (
      topic: string,
      cursor: number,
      value: string
    ) => Array<string> | void;
    lrange: (
      topic: string,
      cursor: number,
      cursor2: number
    ) => Array<string> | void;
    hset: (topic: string, key: string, value: string) => number;
    hget: (topic: string, key: string, value: string) => string | void;
    hgetall: (topic: string, key: string) => Array<string> | void;
    hdel: (topic: string, key: string) => number;
    get: (key: string) => any;
    set: (key: string, value: any) => void;
    del: (...keys: Array<string>) => void;
    publish: (topic: string, value: any) => void;
    subscribe: (topic: string) => void;
    unsubscribe: (topic: string) => void;
    psubscribe: (pattern: string) => void;
    punsubscribe: (pattern: string) => void;
    duplicate: () => RedisClient;
    quit: () => void;
  }

  declare class RedisClientPromisified extends RedisClient {
    hmsetAsync: (
      key: string,
      map: any,
      callback: (?Error) => void
    ) => Promise<void>;
    rpushAsync: (
      key: string,
      value: string,
      callback: (?Error) => void
    ) => Promise<void>;
    lpushAsync: (key: string, value: any) => Promise<void>;
    lremAsync: (
      topic: string,
      cursor: number,
      value: string
    ) => Promise<Array<string>> | Promise<void>;
    lrangeAsync: (
      topic: string,
      cursor: number,
      cursor2: number
    ) => Promise<Array<string>> | Promise<void>;
    hsetAsync: (topic: string, key: string, value: string) => Promise<number>;
    hgetAsync: (
      topic: string,
      key: string
    ) => Promise<string> | Promise<void>;
    hgetallAsync: (
      topic: string,
      key: string
    ) => Promise<Array<string>> | Promise<void>;
    hdelAsync: (topic: string, key: string) => Promise<number>;
    getAsync: (key: string) => Promise<any>;
    setAsync: (key: string, value: any) => Promise<void>;
    delAsync: (...keys: Array<string>) => Promise<void>;
    publishAsync: (topic: string, value: any) => Promise<void>;
    subscribeAsync: (topic: string) => Promise<void>;
    unsubscribeAsync: (topic: string) => Promise<void>;
    psubscribeAsync: (pattern: string) => Promise<void>;
    punsubscribeAsync: (pattern: string) => Promise<void>;
    duplicateAsync: () => Promise<RedisClientPromisified>;
    quitAsync: () => Promise<void>;
  }

  declare module.exports: {
    RedisClient: typeof RedisClient,
    RedisClientPromisified: typeof RedisClientPromisified,
    createClient: (settings: any) => RedisClient | RedisClientPromisified
  };
}
