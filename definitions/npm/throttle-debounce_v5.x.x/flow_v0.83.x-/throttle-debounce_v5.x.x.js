declare module 'throttle-debounce' {
  declare export type ThrottleOptions = {|
    noTrailing?: boolean,
    noLeading?: boolean,
    debounceMode?: boolean,
  |};

  declare export type Throttle<T: (...args: any[]) => void> = T & {|
    cancel: (options?: {|
      upcomingOnly?: boolean,
    |}) => void,
  |};

  declare export type Debounce<T: (...args: any[]) => void> = Throttle<T>;

  /**
   * Throttle execution of a function. Especially useful for rate limiting
   * execution of handlers on events like resize and scroll.
   *
   * @param delay
   * A zero-or-greater delay in milliseconds. For event callbacks, values around
   * 100 or 250 (or even higher) are most useful.
   *
   * @param callback
   * A function to be executed after delay milliseconds. The `this` context and
   * all arguments are passed through, as-is, to `callback` when the
   * throttled-function is executed.
   *
   * @param options
   * An object to configure options.
   *
   * @param options.noTrailing
   * Optional, defaults to false. If noTrailing is true, callback will only execute
   * every `delay` milliseconds while the throttled-function is being called. If
   * noTrailing is false or unspecified, callback will be executed one final time
   * after the last throttled-function call. (After the throttled-function has not
   * been called for `delay` milliseconds, the internal counter is reset)
   *
   * @param options.noLeading
   * Optional, defaults to false. If noLeading is false, the first throttled-function
   * call will execute callback immediately. If noLeading is true, the first the
   * callback execution will be skipped. It should be noted that callback will never
   * executed if both noLeading = true and noTrailing = true.
   *
   * @param options.debounceMode If `debounceMode` is true (at begin), schedule
   * `callback` to execute after `delay` ms. If `debounceMode` is false (at end),
   * schedule `callback` to execute after `delay` ms.
   *
   * @return
   * A new, throttled, function.
   */
  declare export function throttle<T: (...args: any[]) => void>(
      delay: number,
      callback: T,
      options?: ThrottleOptions,
  ): Throttle<T>;

  declare export type DebounceOptions = {|
    atBegin?: boolean,
  |};

  /**
   * Debounce execution of a function. Debouncing, unlike throttling,
   * guarantees that a function is only executed a single time, either at the
   * very beginning of a series of calls, or at the very end.
   *
   * @param delay
   * A zero-or-greater delay in milliseconds. For event callbacks, values around
   * 100 or 250 (or even higher) are most useful.
   *
   * @param callback
   * A function to be executed after delay milliseconds. The `this` context and
   * all arguments are passed through, as-is, to `callback` when the
   * debounced-function is executed.
   *
   * @param options
   * An object to configure options.
   *
   * @param options.atBegin
   * If atBegin is false or unspecified, callback will only be executed `delay`
   * milliseconds after the last debounced-function call. If atBegin is true,
   * callback will be executed only at the first debounced-function call. (After
   * the throttled-function has not been called for `delay` milliseconds, the
   * internal counter is reset).
   *
   * @return
   * A new, debounced function.
   */
  declare export function debounce<T: (...args: any[]) => any>(
    delay: number,
    callback: T,
    options?: DebounceOptions,
  ): Debounce<T>;
}
