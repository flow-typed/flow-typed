declare module '@sinonjs/fake-timers' {
  declare opaque type ImmediateID;

  declare type FakeMethod =
    | 'setTimeout'
    | 'clearTimeout'
    | 'setImmediate'
    | 'clearImmediate'
    | 'setInterval'
    | 'clearInterval'
    | 'Date'
    | 'nextTick'
    | 'hrtime'
    | 'requestAnimationFrame'
    | 'cancelAnimationFrame'
    | 'requestIdleCallback'
    | 'cancelIdleCallback';

  declare type InstallConfig = {|
    target?: { ... },
    now?: number | Date,
    toFake?: FakeMethod[],
    loopLimit?: number,
    shouldAdvanceTime?: boolean,
    advanceTimeDelta?: number,
  |};

  declare type Timers = {|
    setTimeout: typeof setTimeout,
    clearTimeout: typeof clearTimeout,
    setInterval: typeof setInterval,
    clearInterval: typeof clearInterval,
    setImmediate: typeof setImmediate,
    clearImmediate: typeof clearImmediate,
    Date: typeof Date,
  |};

  declare type Clock = {|
    ...Timers,
    requestAnimationFrame: typeof requestAnimationFrame,
    cancelAnimationFrame: typeof cancelAnimationFrame,
    requestIdleCallback: typeof requestIdleCallback,
    cancelIdleCallback: typeof cancelIdleCallback,
    now: number,
    timeouts: { ... },
    loopLimit: number,
    countTimers(): number,
    hrtime: typeof process.hrtime,
    nextTick: typeof process.nextTick,
    performance?: { now: typeof performance.now, ... },
    tick(time: number | string): void,
    tickAsync(time: number | string): Promise<void>,
    next(): void,
    nextAsync(): Promise<void>,
    reset(): void,
    runAll(): void,
    runAllAsync(): Promise<void>,
    runMicrotasks(): void,
    runToFrame(): void,
    runToLast(): void,
    runToLastAsync(): Promise<void>,
    setSystemTime(now?: number | Date): void,
    uninstall(): void,
    Performance: typeof Performance,
  |};

  declare type FakeTimers = {
    timers: Timers,
    createClock(now?: number | Date, loopLimit?: number): Clock,
    install(config?: InstallConfig): Clock,
    withGlobal(global: { ... }): FakeTimers,
    ...
  };

  declare module.exports: FakeTimers;
}
