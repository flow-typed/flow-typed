// @flow
// Flowtype definitions for ioredis
// Project: https://github.com/luin/ioredis
// Definitions by: York Yao <https://github.com/plantain-00/>
//                 Christopher Eck <https://github.com/chrisleck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Ported to Flow by Samuel Reed <https://github.com/strml>

/* =================== USAGE ===================
    import * as Redis from "ioredis";
    const redis = new Redis();
 =============================================== */

declare module "ioredis" {
  declare class Commander extends events$EventEmitter {
    getBuiltinCommands(): string[];
    createBuiltinCommand(commandName: string): {};
    defineCommand(
      name: string,
      definition: {
        numberOfKeys?: number,
        lua?: string
      }
    ): any;
    sendCommand(): void;
  }

  declare class Redis extends Commander {
    constructor(port?: number, host?: string, options?: RedisOptions): void;
    constructor(host?: string, options?: RedisOptions): void;
    constructor(options: RedisOptions): void;
    constructor(url: string): void;

    status:
      | "close"
      | "disconnecting"
      | "wait"
      | "connecting"
      | "connect"
      | "ready"
      | "end";
    connect(callback?: Function): Promise<any>;
    disconnect(): void;
    duplicate(): Redis;
    monitor(
      callback?: (error: Error, monitor: events$EventEmitter) => void
    ): Promise<events$EventEmitter>;

    send_command(command: string, ...args: any[]): any;
    auth(password: string, callback?: ResCallbackT<any>): Promise<any>;
    ping(callback?: ResCallbackT<number>): Promise<number>;
    append(
      key: string,
      value: string,
      callback?: ResCallbackT<number>
    ): Promise<number>;
    bitcount(key: string, callback?: ResCallbackT<number>): Promise<number>;
    bitcount(
      key: string,
      start: number,
      end: number,
      callback?: ResCallbackT<number>
    ): Promise<number>;
    set(
      key: string,
      value: string,
      nx?: "NX",
      ex?: "EX",
      expires?: number,
      callback?: ResCallbackT<string>
    ): Promise<string>;
    get(key: string, callback?: ResCallbackT<string>): Promise<string>;
    exists(
      key: string,
      value: string,
      callback?: ResCallbackT<number>
    ): Promise<number>;
    publish(channel: string, value: any): Promise<void>;
    subscribe(channel: string): Promise<void>;
    psubscribe(channel: string): Promise<void>;
    getBuffer(key: string, callback?: ResCallbackT<Buffer>): Promise<Buffer>;

    // These are mostly stubbed, TODO
    setnx(key: string, value: any, callback: ResCallbackT<any>): void;
    setnx(key: string, value: any): Promise<any>;
    setex(key: string, timeout: number, value: any, callback: ResCallbackT<any>): void;
    setex(key: string, timeout: number, value: any): Promise<any>;
    psetex(key: string, timeout: number, value: any, callback: ResCallbackT<any>): void;
    psetex(key: string, timeout: number, value: any): Promise<any>;
    append(key: string, value: any, callback: ResCallbackT<any>): void;
    append(key: string, value: any): Promise<any>;
    strlen(key: string, callback: ResCallbackT<any>): void;
    strlen(key: string): Promise<any>;
    del(...args: any[]): Promise<any>;
    exists(...args: any[]): Promise<any>;
    setbit(key: string, offset: number, value: any, callback: ResCallbackT<any>): void;
    setbit(key: string, offset: number, value: any): Promise<any>;
    getbit(key: string, offset: number, callback: ResCallbackT<any>): void;
    getbit(key: string, offset: number): Promise<any>;
    setrange(key: string, offset: number, value: any, callback: ResCallbackT<any>): void;
    setrange(key: string, offset: number, value: any): Promise<any>;
    getrange(key: string, start: number, end: number, callback: ResCallbackT<any>): void;
    getrange(key: string, start: number, end: number): Promise<any>;
    substr(key: string, start: number, end: number, callback: ResCallbackT<any>): void;
    substr(key: string, start: number, end: number): Promise<any>;
    incr(key: string, callback: ResCallbackT<any>): void;
    incr(key: string): Promise<any>;
    decr(key: string, callback: ResCallbackT<any>): void;
    decr(key: string): Promise<any>;
    mget(...args: any[]): Promise<any>;
    rpush(...args: any[]): Promise<any>;
    lpush(...args: any[]): Promise<any>;
    rpushx(key: string, values: any[], callback: ResCallbackT<any>): void;
    rpushx(key: string, values: any[]): Promise<any>;
    lpushx(key: string, value: any, callback: ResCallbackT<any>): void;
    lpushx(key: string, value: any): Promise<any>;
    linsert(key: string, direction: "BEFORE" | "AFTER", pivot: string, value: any, callback: ResCallbackT<any>): void;
    linsert(key: string, direction: "BEFORE" | "AFTER", pivot: string, value: any): Promise<any>;
    rpop(key: string, callback: ResCallbackT<any>): void;
    rpop(key: string): Promise<any>;
    lpop(key: string, callback: ResCallbackT<any>): void;
    lpop(key: string): Promise<any>;
    brpop(...key: any[]): any;
    brpoplpush(source: string, destination: string, callback: ResCallbackT<any>): void;
    brpoplpush(source: string, destination: string): Promise<any>;
    blpop(...args: string[]): any;
    llen(key: string, callback: ResCallbackT<any>): void;
    llen(key: string): Promise<any>;
    lindex(key: string, index: number, callback: ResCallbackT<any>): void;
    lindex(key: string, index: number): Promise<any>;
    lset(key: string, index: number, value: any, callback: ResCallbackT<any>): void;
    lset(key: string, index: number, value: any): Promise<any>;
    lrange(key: string, start: number, stop: number, callback: ResCallbackT<any>): void;
    lrange(key: string, start: number, stop: number): Promise<any>;
    ltrim(key: string, start: number, stop: number, callback: ResCallbackT<any>): void;
    ltrim(key: string, start: number, stop: number): Promise<any>;
    lrem(key: string, count: number, value: any, callback: ResCallbackT<any>): void;
    lrem(key: string, count: number, value: any): Promise<any>;
    rpoplpush(source: string, destination: string, callback: ResCallbackT<any>): void;
    rpoplpush(source: string, destination: string,): Promise<any>;
    sadd(args: any[], callback: ResCallbackT<any>): void;
    sadd(...args: any[]): Promise<any>;
    srem(args: any[], callback: ResCallbackT<any>): void;
    srem(...args: any[]): Promise<any>;
    smove(source: string, destination: string, member: string, callback: ResCallbackT<any>): void;
    smove(source: string, destination: string, member: string): Promise<any>;
    sismember(key: string, member: string, callback: ResCallbackT<any>): void;
    sismember(key: string, member: string): Promise<any>;
    scard(key: string, callback: ResCallbackT<any>): void;
    scard(key: string): Promise<any>;
    spop(key: string, callback: ResCallbackT<any>): void;
    spop(key: string, count: number, callback: ResCallbackT<any>): void;
    spop(key: string, count?: number): Promise<any>;
    srandmember(key: string, callback: ResCallbackT<any>): void;
    srandmember(key: string, count: number, callback: ResCallbackT<any>): void;
    srandmember(key: string, count?: number): Promise<any>;
    sinter(args: any[], callback: ResCallbackT<any>): void;
    sinter(...args: any[]): Promise<any>;
    sinterstore(args: any[], callback: ResCallbackT<any>): void;
    sinterstore(...args: any[]): Promise<any>;
    sunion(args: any[], callback: ResCallbackT<any>): void;
    sunion(...args: any[]): Promise<any>;
    sunionstore(args: any[], callback: ResCallbackT<any>): void;
    sunionstore(...args: any[]): Promise<any>;
    sdiff(args: any[], callback: ResCallbackT<any>): void;
    sdiff(...args: any[]): Promise<any>;
    sdiffstore(args: any[], callback: ResCallbackT<any>): void;
    sdiffstore(...args: any[]): Promise<any>;
    smembers(key: string, callback: ResCallbackT<any>): void;
    smembers(key: string): Promise<any>;
    zadd(args: any[], callback: ResCallbackT<any>): void;
    zadd(...args: any[]): Promise<any>;
    zincrby(key: string, increment: number, member: string, callback: ResCallbackT<any>): void;
    zincrby(key: string, increment: number, member: string): Promise<any>;
    zrem(args: any[], callback: ResCallbackT<any>): void;
    zrem(...args: any[]): Promise<any>;
    zremrangebyscore(args: any[], callback: ResCallbackT<any>): void;
    zremrangebyscore(...args: any[]): Promise<any>;
    zremrangebyrank(key: string, start: number, stop: number, callback: ResCallbackT<any>): void;
    zremrangebyrank(key: string, start: number, stop: number): Promise<any>;
    zunionstore(args: any[], callback: ResCallbackT<any>): void;
    zunionstore(...args: any[]): Promise<any>;
    zinterstore(args: any[], callback: ResCallbackT<any>): void;
    zinterstore(...args: any[]): Promise<any>;
    zrange(key: string, start: number, stop: number, callback: ResCallbackT<any>): void;
    zrange(key: string, start: number, stop: number): Promise<any>;
    zrangebyscore(args: any[], callback: ResCallbackT<any>): void;
    zrangebyscore(...args: any[]): Promise<any>;
    zrevrangebyscore(args: any[], callback: ResCallbackT<any>): void;
    zrevrangebyscore(...args: any[]): Promise<any>;
    zcount(key: string, min: number | string, max: number | string, callback: ResCallbackT<any>): void;
    zcount(key: string, min: number | string, max: number | string): Promise<any>;
    zrevrange(key: string, start: number, stop: number, withScores: string, callback: ResCallbackT<any>): void;
    zrevrange(key: string, start: number, stop: number, withScores?: string): Promise<any>;
    zcard(key: string, callback: ResCallbackT<any>): void;
    zcard(key: string): Promise<any>;
    zscore(key: string, member: string, callback: ResCallbackT<any>): void;
    zscore(key: string, member: string): Promise<any>;
    zrank(key: string, member: string, callback: ResCallbackT<any>): void;
    zrank(key: string, member: string): Promise<any>;
    zrevrank(key: string, member: string, callback: ResCallbackT<any>): void;
    zrevrank(key: string, member: string): Promise<any>;
    hset(key: string, field: string, value: any, callback: ResCallbackT<any>): void;
    hset(key: string, field: string, value: any): Promise<any>;
    hsetnx(key: string, field: string, value: any, callback: ResCallbackT<any>): void;
    hsetnx(key: string, field: string, value: any): Promise<any>;
    hget(key: string, field: string, callback: ResCallbackT<any>): void;
    hget(key: string, field: string): Promise<any>;
    hmset(args: any[], callback: ResCallbackT<any>): void;
    hmset(key: string, hash: any, callback: ResCallbackT<any>): void;
    hmset(...args: any[]): Promise<any>;
    hmget(args: any[], callback: ResCallbackT<any>): void;
    hmget(...args: any[]): Promise<any>;
    hincrby(key: string, field: string, increment: number, callback: ResCallbackT<any>): void;
    hincrby(key: string, field: string, increment: number): Promise<any>;
    hincrbyfloat(key: string, field: string, increment: number, callback: ResCallbackT<any>): void;
    hincrbyfloat(key: string, field: string, increment: number): Promise<any>;
    hdel(args: any[], callback: ResCallbackT<any>): void;
    hdel(...args: any[]): Promise<any>;
    hlen(key: string, callback: ResCallbackT<any>): void;
    hlen(key: string): Promise<any>;
    hkeys(key: string, callback: ResCallbackT<any>): void;
    hkeys(key: string): Promise<any>;
    hvals(key: string, callback: ResCallbackT<any>): void;
    hvals(key: string): Promise<any>;
    hgetall(key: string, callback: ResCallbackT<any>): void;
    hgetall(key: string): Promise<any>;
    hexists(key: string, field: string, callback: ResCallbackT<any>): void;
    hexists(key: string, field: string): Promise<any>;
    incrby(key: string, increment: number, callback: ResCallbackT<any>): void;
    incrby(key: string, increment: number): Promise<any>;
    incrbyfloat(key: string, increment: number, callback: ResCallbackT<any>): void;
    incrbyfloat(key: string, increment: number): Promise<any>;
    decrby(key: string, decrement: number, callback: ResCallbackT<any>): void;
    decrby(key: string, decrement: number): Promise<any>;
    getset(key: string, value: any, callback: ResCallbackT<any>): void;
    getset(key: string, value: any): Promise<any>;
    mset(args: any[], callback: ResCallbackT<any>): void;
    mset(...args: any[]): Promise<any>;
    msetnx(args: any[], callback: ResCallbackT<any>): void;
    msetnx(...args: any[]): Promise<any>;
    randomkey(callback: ResCallbackT<any>): void;
    randomkey(): Promise<any>;
    select(idx: number, callback: ResCallbackT<any>): void;
    select(idx: number): Promise<string>;
    move(key: string, db: string, callback: ResCallbackT<any>): void;
    move(key: string, db: string): Promise<any>;
    rename(key: string, newkey: string, callback: ResCallbackT<any>): void;
    rename(key: string, newkey: string): Promise<any>;
    renamenx(key: string, newkey: string, callback: ResCallbackT<any>): void;
    renamenx(key: string, newkey: string): Promise<any>;
    expire(key: string, sec: number, callback: ResCallbackT<any>): void;
    expire(key: string, sec: number): Promise<any>;
    pexpire(key: string, ms: number, callback: ResCallbackT<any>): void;
    pexpire(key: string, ms: number): Promise<any>;
    expireat(key: string, timestamp: number, callback: ResCallbackT<any>): void;
    expireat(key: string, timestamp: number): Promise<any>;
    pexpireat(key: string, msTimestamp: number, callback: ResCallbackT<any>): void;
    pexpireat(key: string, msTimestamp: number): Promise<any>;
    keys(pattern: string, callback: ResCallbackT<any>): void;
    keys(pattern: string): Promise<any>;
    dbsize(callback: ResCallbackT<any>): void;
    dbsize(): Promise<any>;
    auth(password: string, callback: ResCallbackT<any>): void;
    auth(password: string): Promise<any>;
    ping(message: string, callback: ResCallbackT<any>): void;
    ping(message?: string): Promise<any>;
    echo(message: string, callback: ResCallbackT<any>): void;
    echo(message: string): Promise<any>;
    save(callback: ResCallbackT<any>): void;
    save(): Promise<any>;
    bgsave(callback: ResCallbackT<any>): void;
    bgsave(): Promise<any>;
    bgrewriteaof(callback: ResCallbackT<any>): void;
    bgrewriteaof(): Promise<any>;
    shutdown(save: string, callback: ResCallbackT<any>): void;
    shutdown(save: string): Promise<any>;
    lastsave(callback: ResCallbackT<any>): void;
    lastsave(): Promise<any>;
    type(key: string, callback: ResCallbackT<any>): void;
    type(key: string): Promise<any>;
    multi(commands?: string[][], options?: MultiOptions): Pipeline;
    multi(options: { pipeline: false }): Promise<string>;
    exec(callback: ResCallbackT<any>): void;
    exec(): Promise<any>;
    discard(callback: ResCallbackT<any>): void;
    discard(): Promise<any>;
    sync(args: any[], callback: ResCallbackT<any>): void;
    sync(...args: any[]): Promise<any>;
    flushdb(callback: ResCallbackT<any>): void;
    flushdb(): Promise<any>;
    flushall(callback: ResCallbackT<any>): void;
    flushall(): Promise<string>;
    sort(key: string, ...args: string[]): any;
    info(callback: ResCallbackT<any>): void;
    info(section: string, callback: ResCallbackT<any>): void;
    info(section?: string): Promise<any>;
    time(callback: ResCallbackT<any>): void;
    time(): Promise<any>;
    monitor(callback: ResCallbackT<any>): void;
    monitor(): Promise<any>;
    ttl(key: string, callback: ResCallbackT<any>): void;
    ttl(key: string): Promise<any>;
    persist(key: string, callback: ResCallbackT<any>): void;
    persist(key: string): Promise<any>;
    slaveof(host: string, port: number, callback: ResCallbackT<any>): void;
    slaveof(host: string, port: number): Promise<string>;
    debug(args: any[], callback: ResCallbackT<any>): void;
    debug(...args: any[]): Promise<any>;
    config(args: any[], callback: ResCallbackT<any>): void;
    config(...args: any[]): Promise<any>;
    subscribe(args: any[], callback: ResCallbackT<any>): void;
    subscribe(...args: string[]): Promise<any>;
    unsubscribe(args: any[], callback: ResCallbackT<any>): void;
    unsubscribe(...args: any[]): Promise<any>;
    psubscribe(args: any[], callback: ResCallbackT<any>): void;
    psubscribe(...args: string[]): Promise<any>;
    punsubscribe(args: any[], callback: ResCallbackT<any>): void;
    punsubscribe(...args: string[]): Promise<any>;
    publish(channel: string, message: string, callback: ResCallbackT<any>): void;
    publish(channel: string, message: string): Promise<number>;
    watch(args: any[], callback: ResCallbackT<any>): void;
    watch(...args: any[]): Promise<any>;
    unwatch(args: any[], callback: ResCallbackT<any>): void;
    unwatch(...args: any[]): Promise<any>;
    cluster(args: any[], callback: ResCallbackT<any>): void;
    cluster(...args: any[]): Promise<any>;
    restore(args: any[], callback: ResCallbackT<any>): void;
    restore(...args: any[]): Promise<any>;
    migrate(args: any[], callback: ResCallbackT<any>): void;
    migrate(...args: any[]): Promise<any>;
    dump(args: any[], callback: ResCallbackT<any>): void;
    dump(...args: any[]): Promise<any>;
    object(args: any[], callback: ResCallbackT<any>): void;
    object(...args: any[]): Promise<any>;
    client(args: any[], callback: ResCallbackT<any>): void;
    client(...args: any[]): Promise<any>;
    eval(args: any[], callback: ResCallbackT<any>): void;
    eval(...args: any[]): Promise<any>;
    evalsha(args: any[], callback: ResCallbackT<any>): void;
    evalsha(...args: any[]): Promise<any>;
    script(args: any[], callback: ResCallbackT<any>): void;
    script(...args: any[]): Promise<any>;
    script(key: string, callback: ResCallbackT<any>): void;
    quit(...args: any[]): Promise<any>;
    quit(args: any[], callback: ResCallbackT<any>): void;
    scan(...args: any[]): Promise<any>;
    scan(args: any[], callback: ResCallbackT<any>): void;
    hscan(...args: any[]): Promise<any>;
    hscan(args: any[], callback: ResCallbackT<any>): void;
    zscan(...args: any[]): Promise<any>;
    zscan(args: any[], callback: ResCallbackT<any>): void;
    pipeline(): Pipeline;
    pipeline(commands: string[][]): Pipeline;
    scanStream(options?: ScanStreamOption): events$EventEmitter;
    hscanStream(key: string, options?: ScanStreamOption): events$EventEmitter;
    zscanStream(key: string, options?: ScanStreamOption): events$EventEmitter;
  }

  declare type Pipeline = {
    exec(callback?: ResCallbackT<any[]>): any,

    get(args: any[], callback?: ResCallbackT<string>): Pipeline,
    get(...args: any[]): Pipeline,
    set(args: any[], callback?: ResCallbackT<string>): Pipeline,
    set(...args: any[]): Pipeline,
    setnx(args: any[], callback?: ResCallbackT<any>): Pipeline,
    setnx(...args: any[]): Pipeline,
    setex(args: any[], callback?: ResCallbackT<any>): Pipeline,
    setex(...args: any[]): Pipeline,
    psetex(args: any[], callback?: ResCallbackT<any>): Pipeline,
    psetex(...args: any[]): Pipeline,
    append(args: any[], callback?: ResCallbackT<any>): Pipeline,
    append(...args: any[]): Pipeline,
    strlen(args: any[], callback?: ResCallbackT<any>): Pipeline,
    strlen(...args: any[]): Pipeline,
    del(args: any[], callback?: ResCallbackT<any>): Pipeline,
    del(...args: any[]): Pipeline,
    exists(args: any[], callback?: ResCallbackT<any>): Pipeline,
    exists(...args: any[]): Pipeline,
    setbit(args: any[], callback?: ResCallbackT<any>): Pipeline,
    setbit(...args: any[]): Pipeline,
    getbit(args: any[], callback?: ResCallbackT<any>): Pipeline,
    getbit(...args: any[]): Pipeline,
    setrange(args: any[], callback?: ResCallbackT<any>): Pipeline,
    setrange(...args: any[]): Pipeline,
    getrange(args: any[], callback?: ResCallbackT<any>): Pipeline,
    getrange(...args: any[]): Pipeline,
    substr(args: any[], callback?: ResCallbackT<any>): Pipeline,
    substr(...args: any[]): Pipeline,
    incr(args: any[], callback?: ResCallbackT<any>): Pipeline,
    incr(...args: any[]): Pipeline,
    decr(args: any[], callback?: ResCallbackT<any>): Pipeline,
    decr(...args: any[]): Pipeline,
    mget(args: any[], callback?: ResCallbackT<any>): Pipeline,
    mget(...args: any[]): Pipeline,
    rpush(...args: any[]): Pipeline,
    lpush(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lpush(...args: any[]): Pipeline,
    rpushx(args: any[], callback?: ResCallbackT<any>): Pipeline,
    rpushx(...args: any[]): Pipeline,
    lpushx(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lpushx(...args: any[]): Pipeline,
    linsert(args: any[], callback?: ResCallbackT<any>): Pipeline,
    linsert(...args: any[]): Pipeline,
    rpop(args: any[], callback?: ResCallbackT<any>): Pipeline,
    rpop(...args: any[]): Pipeline,
    lpop(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lpop(...args: any[]): Pipeline,
    brpop(args: any[], callback?: ResCallbackT<any>): Pipeline,
    brpop(...args: any[]): Pipeline,
    brpoplpush(args: any[], callback?: ResCallbackT<any>): Pipeline,
    brpoplpush(...args: any[]): Pipeline,
    blpop(args: any[], callback?: ResCallbackT<any>): Pipeline,
    blpop(...args: any[]): Pipeline,
    llen(args: any[], callback?: ResCallbackT<any>): Pipeline,
    llen(...args: any[]): Pipeline,
    lindex(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lindex(...args: any[]): Pipeline,
    lset(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lset(...args: any[]): Pipeline,
    lrange(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lrange(...args: any[]): Pipeline,
    ltrim(args: any[], callback?: ResCallbackT<any>): Pipeline,
    ltrim(...args: any[]): Pipeline,
    lrem(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lrem(...args: any[]): Pipeline,
    rpoplpush(args: any[], callback?: ResCallbackT<any>): Pipeline,
    rpoplpush(...args: any[]): Pipeline,
    sadd(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sadd(...args: any[]): Pipeline,
    srem(args: any[], callback?: ResCallbackT<any>): Pipeline,
    srem(...args: any[]): Pipeline,
    smove(args: any[], callback?: ResCallbackT<any>): Pipeline,
    smove(...args: any[]): Pipeline,
    sismember(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sismember(...args: any[]): Pipeline,
    scard(args: any[], callback?: ResCallbackT<any>): Pipeline,
    scard(...args: any[]): Pipeline,
    spop(args: any[], callback?: ResCallbackT<any>): Pipeline,
    spop(...args: any[]): Pipeline,
    srandmember(args: any[], callback?: ResCallbackT<any>): Pipeline,
    srandmember(...args: any[]): Pipeline,
    sinter(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sinter(...args: any[]): Pipeline,
    sinterstore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sinterstore(...args: any[]): Pipeline,
    sunion(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sunion(...args: any[]): Pipeline,
    sunionstore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sunionstore(...args: any[]): Pipeline,
    sdiff(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sdiff(...args: any[]): Pipeline,
    sdiffstore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sdiffstore(...args: any[]): Pipeline,
    smembers(args: any[], callback?: ResCallbackT<any>): Pipeline,
    smembers(...args: any[]): Pipeline,
    zadd(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zadd(...args: any[]): Pipeline,
    zincrby(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zincrby(...args: any[]): Pipeline,
    zrem(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zrem(...args: any[]): Pipeline,
    zremrangebyscore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zremrangebyscore(...args: any[]): Pipeline,
    zremrangebyrank(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zremrangebyrank(...args: any[]): Pipeline,
    zunionstore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zunionstore(...args: any[]): Pipeline,
    zinterstore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zinterstore(...args: any[]): Pipeline,
    zrange(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zrange(...args: any[]): Pipeline,
    zrangebyscore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zrangebyscore(...args: any[]): Pipeline,
    zrevrangebyscore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zrevrangebyscore(...args: any[]): Pipeline,
    zcount(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zcount(...args: any[]): Pipeline,
    zrevrange(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zrevrange(...args: any[]): Pipeline,
    zcard(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zcard(...args: any[]): Pipeline,
    zscore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zscore(...args: any[]): Pipeline,
    zrank(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zrank(...args: any[]): Pipeline,
    zrevrank(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zrevrank(...args: any[]): Pipeline,
    hset(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hset(...args: any[]): Pipeline,
    hsetnx(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hsetnx(...args: any[]): Pipeline,
    hget(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hget(...args: any[]): Pipeline,
    hmset(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hmset(key: string, hash: any, callback?: ResCallbackT<any>): Pipeline,
    hmset(...args: any[]): Pipeline,
    hmget(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hmget(...args: any[]): Pipeline,
    hincrby(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hincrby(...args: any[]): Pipeline,
    hincrbyfloat(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hincrbyfloat(...args: any[]): Pipeline,
    hdel(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hdel(...args: any[]): Pipeline,
    hlen(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hlen(...args: any[]): Pipeline,
    hkeys(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hkeys(...args: any[]): Pipeline,
    hvals(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hvals(...args: any[]): Pipeline,
    hgetall(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hgetall(...args: any[]): Pipeline,
    hgetall(key: string, callback?: ResCallbackT<any>): Pipeline,
    hexists(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hexists(...args: any[]): Pipeline,
    incrby(args: any[], callback?: ResCallbackT<any>): Pipeline,
    incrby(...args: any[]): Pipeline,
    incrbyfloat(args: any[], callback?: ResCallbackT<any>): Pipeline,
    incrbyfloat(...args: any[]): Pipeline,
    decrby(args: any[], callback?: ResCallbackT<any>): Pipeline,
    decrby(...args: any[]): Pipeline,
    getset(args: any[], callback?: ResCallbackT<any>): Pipeline,
    getset(...args: any[]): Pipeline,
    mset(args: any[], callback?: ResCallbackT<any>): Pipeline,
    mset(...args: any[]): Pipeline,
    msetnx(args: any[], callback?: ResCallbackT<any>): Pipeline,
    msetnx(...args: any[]): Pipeline,
    randomkey(args: any[], callback?: ResCallbackT<any>): Pipeline,
    randomkey(...args: any[]): Pipeline,
    select(args: any[], callback?: ResCallbackT<any>): void,
    select(...args: any[]): Pipeline,
    move(args: any[], callback?: ResCallbackT<any>): Pipeline,
    move(...args: any[]): Pipeline,
    rename(args: any[], callback?: ResCallbackT<any>): Pipeline,
    rename(...args: any[]): Pipeline,
    renamenx(args: any[], callback?: ResCallbackT<any>): Pipeline,
    renamenx(...args: any[]): Pipeline,
    expire(args: any[], callback?: ResCallbackT<any>): Pipeline,
    expire(...args: any[]): Pipeline,
    pexpire(args: any[], callback?: ResCallbackT<any>): Pipeline,
    pexpire(...args: any[]): Pipeline,
    expireat(args: any[], callback?: ResCallbackT<any>): Pipeline,
    expireat(...args: any[]): Pipeline,
    pexpireat(args: any[], callback?: ResCallbackT<any>): Pipeline,
    pexpireat(...args: any[]): Pipeline,
    keys(args: any[], callback?: ResCallbackT<any>): Pipeline,
    keys(...args: any[]): Pipeline,
    dbsize(args: any[], callback?: ResCallbackT<any>): Pipeline,
    dbsize(...args: any[]): Pipeline,
    auth(args: any[], callback?: ResCallbackT<any>): void,
    auth(...args: any[]): void,
    ping(args: any[], callback?: ResCallbackT<any>): Pipeline,
    ping(...args: any[]): Pipeline,
    echo(args: any[], callback?: ResCallbackT<any>): Pipeline,
    echo(...args: any[]): Pipeline,
    save(args: any[], callback?: ResCallbackT<any>): Pipeline,
    save(...args: any[]): Pipeline,
    bgsave(args: any[], callback?: ResCallbackT<any>): Pipeline,
    bgsave(...args: any[]): Pipeline,
    bgrewriteaof(args: any[], callback?: ResCallbackT<any>): Pipeline,
    bgrewriteaof(...args: any[]): Pipeline,
    shutdown(args: any[], callback?: ResCallbackT<any>): Pipeline,
    shutdown(...args: any[]): Pipeline,
    lastsave(args: any[], callback?: ResCallbackT<any>): Pipeline,
    lastsave(...args: any[]): Pipeline,
    type(args: any[], callback?: ResCallbackT<any>): Pipeline,
    type(...args: any[]): Pipeline,
    multi(args: any[], callback?: ResCallbackT<any>): Pipeline,
    multi(...args: any[]): Pipeline,
    exec(args: any[], callback?: ResCallbackT<any>): Pipeline,
    exec(...args: any[]): Pipeline,
    discard(args: any[], callback?: ResCallbackT<any>): Pipeline,
    discard(...args: any[]): Pipeline,
    sync(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sync(...args: any[]): Pipeline,
    flushdb(args: any[], callback?: ResCallbackT<any>): Pipeline,
    flushdb(...args: any[]): Pipeline,
    flushall(args: any[], callback?: ResCallbackT<any>): Pipeline,
    flushall(...args: any[]): Pipeline,
    sort(args: any[], callback?: ResCallbackT<any>): Pipeline,
    sort(...args: any[]): Pipeline,
    info(args: any[], callback?: ResCallbackT<any>): Pipeline,
    info(...args: any[]): Pipeline,
    time(args: any[], callback?: ResCallbackT<any>): Pipeline,
    time(...args: any[]): Pipeline,
    monitor(args: any[], callback?: ResCallbackT<any>): Pipeline,
    monitor(...args: any[]): Pipeline,
    ttl(args: any[], callback?: ResCallbackT<any>): Pipeline,
    ttl(...args: any[]): Pipeline,
    persist(args: any[], callback?: ResCallbackT<any>): Pipeline,
    persist(...args: any[]): Pipeline,
    slaveof(args: any[], callback?: ResCallbackT<any>): Pipeline,
    slaveof(...args: any[]): Pipeline,
    debug(args: any[], callback?: ResCallbackT<any>): Pipeline,
    debug(...args: any[]): Pipeline,
    config(args: any[], callback?: ResCallbackT<any>): Pipeline,
    config(...args: any[]): Pipeline,
    subscribe(args: any[], callback?: ResCallbackT<any>): Pipeline,
    subscribe(...args: any[]): Pipeline,
    unsubscribe(args: any[], callback?: ResCallbackT<any>): Pipeline,
    unsubscribe(...args: any[]): Pipeline,
    psubscribe(args: any[], callback?: ResCallbackT<any>): Pipeline,
    psubscribe(...args: any[]): Pipeline,
    punsubscribe(args: any[], callback?: ResCallbackT<any>): Pipeline,
    punsubscribe(...args: any[]): Pipeline,
    publish(args: any[], callback?: ResCallbackT<any>): Pipeline,
    publish(...args: any[]): Pipeline,
    watch(args: any[], callback?: ResCallbackT<any>): Pipeline,
    watch(...args: any[]): Pipeline,
    unwatch(args: any[], callback?: ResCallbackT<any>): Pipeline,
    unwatch(...args: any[]): Pipeline,
    cluster(args: any[], callback?: ResCallbackT<any>): Pipeline,
    cluster(...args: any[]): Pipeline,
    restore(args: any[], callback?: ResCallbackT<any>): Pipeline,
    restore(...args: any[]): Pipeline,
    migrate(args: any[], callback?: ResCallbackT<any>): Pipeline,
    migrate(...args: any[]): Pipeline,
    dump(args: any[], callback?: ResCallbackT<any>): Pipeline,
    dump(...args: any[]): Pipeline,
    object(args: any[], callback?: ResCallbackT<any>): Pipeline,
    object(...args: any[]): Pipeline,
    client(args: any[], callback?: ResCallbackT<any>): Pipeline,
    client(...args: any[]): Pipeline,
    eval(args: any[], callback?: ResCallbackT<any>): Pipeline,
    eval(...args: any[]): Pipeline,
    evalsha(args: any[], callback?: ResCallbackT<any>): Pipeline,
    evalsha(...args: any[]): Pipeline,
    quit(args: any[], callback?: ResCallbackT<any>): Pipeline,
    quit(...args: any[]): Pipeline,
    scan(...args: any[]): Pipeline,
    scan(args: any[], callback?: ResCallbackT<any>): Pipeline,
    hscan(...args: any[]): Pipeline,
    hscan(args: any[], callback?: ResCallbackT<any>): Pipeline,
    zscan(...args: any[]): Pipeline,
    zscan(args: any[], callback?: ResCallbackT<any>): Pipeline
  };

  declare class Cluster extends Redis {
    constructor(
      nodes: { host: string, port: number }[],
      options?: ClusterOptions
    ): void;
    nodes(role: string): Redis[];
  }

  declare type ResCallbackT<R> = (err: Error, res: R) => void;

  declare type RedisOptions = {
    port?: number,
    host?: string,
    /**
     * 4 (IPv4) or 6 (IPv6), Defaults to 4.
     */
    family?: number,
    /**
     * Local domain socket path. If set the port, host and family will be ignored.
     */
    path?: string,
    /**
     * TCP KeepAlive on the socket with a X ms delay before start. Set to a non-number value to disable keepAlive.
     */
    keepAlive?: number,
    connectionName?: string,
    /**
     * If set, client will send AUTH command with the value of this option when connected.
     */
    password?: string,
    /**
     * Database index to use.
     */
    db?: number,
    /**
     * When a connection is established to the Redis server, the server might still be loading
     * the database from disk. While loading, the server not respond to any commands.
     * To work around this, when this option is true, ioredis will check the status of the Redis server,
     * and when the Redis server is able to process commands, a ready event will be emitted.
     */
    enableReadyCheck?: boolean,
    keyPrefix?: string,
    /**
     * When the return value isn't a number, ioredis will stop trying to reconnect.
     * Fixed in: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/15858
     */
    retryStrategy?: (times: number) => number | false,
    reconnectOnError?: (error: Error) => boolean,
    /**
     * By default, if there is no active connection to the Redis server, commands are added to a queue
     * and are executed once the connection is "ready" (when enableReadyCheck is true, "ready" means
     * the Redis server has loaded the database from disk, otherwise means the connection to the Redis
     * server has been established). If this option is false, when execute the command when the connection
     * isn't ready, an error will be returned.
     */
    enableOfflineQueue?: boolean,
    /**
     * The milliseconds before a timeout occurs during the initial connection to the Redis server.
     * default: 10000.
     */
    connectTimeout?: number,
    /**
     * After reconnected, if the previous connection was in the subscriber mode, client will auto re-subscribe these channels.
     * default: true.
     */
    autoResubscribe?: boolean,
    /**
     * If true, client will resend unfulfilled commands(e.g. block commands) in the previous connection when reconnected.
     * default: true.
     */
    autoResendUnfulfilledCommands?: boolean,
    lazyConnect?: boolean,
    tls?: tls$connectOptions,
    sentinels?: { host: string, port: number }[],
    name?: string,
    /**
     * Enable READONLY mode for the connection. Only available for cluster mode.
     * default: false.
     */
    readOnly?: boolean,
    /**
     * If you are using the hiredis parser, it's highly recommended to enable this option.
     * Create another instance with dropBufferSupport disabled for other commands that you want to return binary instead of string:
     */
    dropBufferSupport?: boolean
  };

  declare type ScanStreamOption = {
    match?: string,
    count?: number
  };

  declare type ClusterNodeType = "all" | "slave" | "master";

  declare type ClusterOptions = {
    clusterRetryStrategy?: (times: number) => number,
    enableOfflineQueue?: boolean,
    enableReadyCheck?: boolean,
    scaleReads?: ClusterNodeType,
    maxRedirections?: number,
    retryDelayOnFailover?: number,
    retryDelayOnClusterDown?: number,
    retryDelayOnTryAgain?: number,
    redisOptions?: RedisOptions
  };

  declare type MultiOptions = {
    pipeline: boolean;
  }

  declare class RedisStatic extends Redis {
    static Cluster: Class<Cluster>;
    static Commander: Class<Commander>;
  }

  declare module.exports: typeof RedisStatic;
}
