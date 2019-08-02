// @flow strict
/* eslint-disable flowtype/no-weak-types */

// @see https://docs.newrelic.com/docs/agents/nodejs-agent/supported-features/nodejs-agent-api
declare module 'newrelic' {

  declare type TransactionHandle = {
    end: (callback?: () => any) => void,
    ignore: () => void
  }

  declare type Instrument = {
    (opts: { moduleName: string, onRequire: () => void, onError?: (err: Error) => void }): void;
    (moduleName: string, onRequire: () => void, onError?: (err: Error) => void): void;
  }

  declare type Metric = {
    count: number;
    total: number;
    min: number;
    max: number;
    sumOfSquares: number;
  }

  declare type NewRelicAPI = {

    //  Request API calls
    setTransactionName: (name: string) => void,
    setControllerName: (name: string, action?: string) => void,

    //  Custom instrumentation API calls
    instrument: Instrument,
    instrumentDatastore: Instrument,
    instrumentWebframework: Instrument,
    instrumentMessages: Instrument,
    startWebTransaction: (url: string, handle: () => any) => any,
    startBackgroundTransaction: (name: string, group?: string, handle: () => any) => any;
    startSegment: <T>(name: string, record: boolean, handler: (cd: T => any) => T | Promise<T>) => Promise<T>,
    getTransaction: () => TransactionHandle,
    endTransaction: () => void,

    // Custom metrics API calls
    recordMetric: (name: string, value: number | Metric) => void,
    incrementMetric: (name: string, amount?: number) => void,

    // Custom events API calls
    recordCustomEvent: (eventType: string, attributes: { [key: string]: number | string | boolean }) => void,

    // Other API calls
    addCustomAttribute: (name: string, value: number | string | boolean) => void,
    addCustomAttributes: (params: { [key: string]: number | string | boolean }) => void,
    getBrowserTimingHeader: () => string,
    setIgnoreTransaction: (ignored: boolean) => void,
    noticeError: (error: Error | string, customParameters?: { [key: string]: number | string | boolean }) => void,
    shutdown: (
      options?: {|
        collectPendingData?: boolean,
        timeout: number
      |},
      callback?: (error: ?Error, result: mixed) => void
    ) => void,

    // API calls for rules
    addNamingRule: (pattern: string, name: string) => void,
    addIgnoringRule: (pattern: string) => void
  }

  declare module.exports: NewRelicAPI;
}
