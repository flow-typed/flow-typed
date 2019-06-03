import type { Socket } from 'net';

declare module 'node-dogstatsd' {
  declare module.exports: $Exports<'node-dogstatsd/lib/statsd'>;
}


declare module 'node-dogstatsd/lib/statsd' {
  declare type ClientOptions = {
    global_tags: string[]
  }

  declare class Client {
    constructor(host?: string, port?: number, socket?: Socket, options?: ClientOptions): void;
    timing(stat: string, time: number, sample_rate: number, tags?: string[]): void;
    increment(stats: string | string[], sample_rate: number, tags?: string[]): void;
    incrementBy(stats: string | string[], value: number, tags?: string[]): void;
    decrement(stats: string | string[], sample_rate: number, tags?: string[]): void;
    decrementBy(stats: string | string[], value: number, tags?: string[]): void;
    gauge(stat: string, value: number, sample_rate: number, tags?: string[]): void;
    histogram(stat: string, value: number, sample_rate: number, tags?: string[]): void;
    set(stat: string, value: number, sample_rate: number, tags?: string[]): void;
    update_stats(stats: string | string[], delta: number, sample_rate: number, tags?: string[]): void;
    send_data(buf: Buffer): void;
    send(data: string, sample_rate: number, tags?: string[]): void;
    close(): void;
  }

  declare module.exports: {
    StatsD: typeof Client
  };
}

declare module 'node-dogstatsd/lib/statsd.js' {
  declare module.exports: $Exports<'node-dogstatsd/lib/statsd'>;
}

