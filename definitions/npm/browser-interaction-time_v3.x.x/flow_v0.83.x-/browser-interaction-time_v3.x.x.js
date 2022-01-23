declare module 'browser-interaction-time' {
  declare type BaseTimeEllapsedCallbackData = {|
    callback: (timeInMs: number) => void,
    timeInMilliseconds: number,
  |};

  declare type TimeIntervalEllapsedCallbackData = {|
    ...BaseTimeEllapsedCallbackData,
    multiplier: (time: number) => number,
  |};

  declare type AbsoluteTimeEllapsedCallbackData = {|
    ...BaseTimeEllapsedCallbackData,
    pending: boolean,
  |};

  declare type BasicCallback = (timeInMs: number) => void;

  declare class BrowserInteractionTime {
    constructor(options: {|
      timeIntervalEllapsedCallbacks?: Array<TimeIntervalEllapsedCallbackData>,
      absoluteTimeEllapsedCallbacks?: Array<AbsoluteTimeEllapsedCallbackData>,
      browserTabInactiveCallbacks?: Array<BasicCallback>,
      browserTabActiveCallbacks?: Array<BasicCallback>,
      idleCallbacks?: Array<BasicCallback>,
      activeCallbacks?: Array<BasicCallback>,
      idleTimeoutMs?: number,
      stopTimerOnTabchange?: boolean,
      checkCallbacksIntervalMs?: number,
    |}): this;

    startTimer(): void;
    stopTimer(): void;
    addTimeIntervalEllapsedCallback(timeIntervalEllapsedCallback: TimeIntervalEllapsedCallbackData): void;
    addAbsoluteTimeEllapsedCallback(absoluteTimeEllapsedCallback: AbsoluteTimeEllapsedCallbackData): void;
    addBrowserTabInactiveCallback(browserTabInactiveCallback: BasicCallback): void;
    addBrowserTabActiveCallback(browserTabActiveCallback: BasicCallback): void;
    addIdleCallback(inactiveCallback: BasicCallback): void;
    addActiveCallback(activeCallback: BasicCallback): void;
    getTimeInMilliseconds(): number;
    isRunning(): boolean;
    isIdle(): boolean;
    reset(): void;
    destroy(): void;
    mark(key: string): void;
    getMarks(name: string): Array<{|
      time: number,
    |}> | void;
    measure(name: string, startMarkName: string, endMarkName: string): void;
    getMeasures(name: string): Array<{|
      name: string,
      startTime: number,
      duration: number,
    |}> | void;
  }

  declare module.exports: typeof BrowserInteractionTime;
}
