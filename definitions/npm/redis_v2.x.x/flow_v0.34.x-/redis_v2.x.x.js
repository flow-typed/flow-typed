/* This module definition is by no means complete. A lot of methods of the RedisClient class are missing */
declare module "redis" {
  declare class RedisClient extends events$EventEmitter mixins RedisClientPromisified {
    hmset: (key: string, map: any, callback: (?Error) => void) => void;
    rpush: (key: string, value: string, callback: (?Error) => void) => void;
    lpush: (key: string, value: string, callback?: (?Error, number) => void) => void;
    lrem: (
      topic: string,
      cursor: number,
      value: string
    ) => Array<string> | void;
    lrange: (
      topic: string,
      cursor: number,
      cursor2: number,
      (error: Error | null, entries: Array<string>) => void
    ) => boolean;
    llen: (key: string, (error: Error | null, length: number) => void) => boolean;
    hset: (topic: string, key: string, value: string) => number;
    hget: (topic: string, key: string, value: string) => string | void;
    hgetall: (topic: string, key: string) => Array<string> | void;
    hdel: (topic: string, key: string) => number;
    get: (key: string, (Error | null, string | null) => void) => void;
    set: (key: string, value: string, cb?: (error: Error | null) => void) => void;
    setex: (key: string, timeout: number, value: string, callback?: (error: ?Error, result: ?string) => void) => void;
    ttl: (key: string, callback: (error: ?Error, ttl: ?number) => void) => void;
    del: (keys: Array<string>, cb?: (Error | null) => void) => void;
    mget: (keys: Array<string>, (Error | null, Array<string | null>) => void) => void;
    mset: (keysAndValues: Array<string>, cb?: (Error | null) => void) => void;
    rpoplpush: (source: string, destination: string) => string | void;
    flushall: (cb?: (Error | null) => void) => void;
    publish: (topic: string, value: any) => void;
    subscribe: (topic: string) => void;
    unsubscribe: (topic: string) => void;
    psubscribe: (pattern: string) => void;
    punsubscribe: (pattern: string) => void;
    duplicate: () => RedisClient;
    end: (flush: boolean) => void;
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
    ) => Promise<Array<string>>;
    hsetAsync: (topic: string, key: string, value: string) => Promise<number>;
    hgetAsync: (topic: string, key: string) => Promise<string> | Promise<void>;
    hgetallAsync: (
      topic: string,
      key: string
    ) => Promise<Array<string>> | Promise<void>;
    hdelAsync: (topic: string, key: string) => Promise<number>;
    getAsync: (key: string) => Promise<any>;
    setAsync: (key: string, value: any) => Promise<void>;
    delAsync: (...keys: Array<string>) => Promise<void>;
    rpoplpushAsync: (
      source: string,
      destination: string
    ) => Promise<string> | Promise<void>;
    publishAsync: (topic: string, value: any) => Promise<void>;
    subscribeAsync: (topic: string) => Promise<void>;
    unsubscribeAsync: (topic: string) => Promise<void>;
    psubscribeAsync: (pattern: string) => Promise<void>;
    punsubscribeAsync: (pattern: string) => Promise<void>;
    duplicateAsync: () => Promise<RedisClientPromisified>;
    endAsync: (flush: boolean) => Promise<void>;
    quitAsync: () => Promise<void>;
  }

  declare type CreateOptions = {
    host?: string,
    port?: number,
    path?: string,
    url?: string,
    parser?: "javascript" | "hiredis",
    string_numbers?: boolean,
    return_buffers?: boolean,
    detect_buffers?: boolean,
    socket_keepalive?: boolean,
    no_ready_check?: boolean,
    enable_offline_queue?: boolean,
    retry_max_delay?: ?number,
    connect_timeout?: number,
    max_attempts?: number,
    retry_unfulfilled_commands?: boolean,
    password?: string,
    db?: number,
    family?: "IPv4" | "IPv6",
    disable_resubscribing?: boolean,
    rename_commands?: { [name: string]: string },
    tls?: Object,
    prefix?: string,
    retry_strategy?: (options: {
      attempt: number,
      total_retry_time: number,
      error: Error,
      times_connected: number
    }) => any
  };

  declare type CreateClient = ((
    port: number,
    host?: string,
    options?: CreateOptions
  ) => RedisClient) &
    ((port: number, options?: CreateOptions) => RedisClient) &
    ((socketOrUrl: string, options?: CreateOptions) => RedisClient) &
    ((options?: CreateOptions) => RedisClient);

  declare module.exports: {
    RedisClient: typeof RedisClient,
    RedisClientPromisified: typeof RedisClientPromisified,
    createClient: CreateClient
  };
}
