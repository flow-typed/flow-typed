// flow-typed signature: 2fd21db3d7d3c371b608c10f78bdc0a3
// flow-typed version: da30fe6876/throttle-debounce_v1.x.x/flow_>=v0.25.x

declare module "throttle-debounce" {
  /**
   * Throttle execution of a function. Especially useful for rate limiting execution of handlers
   * on events like resize and scroll.
   */
  declare function throttle<T>(
    delay: number,
    noTrailing: boolean,
    callback: (...args: Array<any>) => T,
    debounceMode: boolean
  ): (...args: Array<any>) => T;
  declare function throttle<T>(
    delay: number,
    noTrailing: boolean,
    callback: (...args: Array<any>) => T
  ): (...args: Array<any>) => T;
  declare function throttle<T>(
    delay: number,
    callback: (...args: Array<any>) => T,
    debounceMode: boolean
  ): (...args: Array<any>) => T;
  declare function throttle<T>(delay: number, callback: (...args: Array<any>) => T): (...args: Array<any>) => T;

  /**
   * Debounce execution of a function. Debouncing, unlike throttling, guarantees that a function is only executed a single time,
   * either at the very beginning of a series of calls, or at the very end.
   */
  declare function debounce<T>(
    delay: number,
    atBegin: boolean,
    callback: (...args: Array<any>) => T
  ): (...args: Array<any>) => T;

  declare function debounce<T>(delay: number, callback: (...args: Array<any>) => T): (...args: Array<any>) => T;
}
