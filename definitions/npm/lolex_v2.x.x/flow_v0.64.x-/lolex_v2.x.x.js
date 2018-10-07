// @flow
declare module 'lolex' {
  declare opaque type ImmediateID;
  declare type installConfig = {
    target?: Object,
    now?: number | Date,
    toFake?: string[],
    loopLimit?: number,
    shouldAdvanceTime?: boolean,
    advanceTimeDelta?: number,
  };
  declare type lolex = {
    createClock(now?: number, loopLimit?: number): Clock,
    install(config?: installConfig): Clock,
    timers: Object,
    withGlobal(global: Object): lolex,
  };
  declare type Clock = {
    setTimeout: typeof setTimeout;
    clearTimeout: typeof clearTimeout;
    setInterval: typeof setInterval;
    clearInterval: typeof clearInterval;
    setImmediate: typeof setImmediate;
    clearImmediate: typeof clearImmediate;
    requestAnimationFrame: typeof requestAnimationFrame;
    cancelAnimationFrame: typeof cancelAnimationFrame;
    hrtime: typeof process.hrtime;
    nextTick: typeof process.nextTick;
    now: number;
    performance?: {
      now: typeof performance.now,
    };
    tick(time: number | string): void;
    next(): void;
    reset(): void;
    runAll(): void;
    runMicrotasks(): void;
    runToFrame(): void;
    runToLast(): void;
    setSystemTime(now?: number | Date): void;
    uninstall(): Object[];
    Date: typeof Date;
    Performance: typeof Performance;
  }
  declare module.exports: lolex;
}
