
declare module 'throttle-debounce' {

  /**
   * Throttle execution of a function. Especially useful for rate limiting execution of handlers
   * on events like resize and scroll.
   */
  declare function throttle<T>(delay: number, noTrailing: boolean, callback: () => T, debounceMode: boolean): () => T
  declare function throttle<T>(delay: number, noTrailing: boolean, callback: () => T): () => T
  declare function throttle<T>(delay: number, callback: () => T, debounceMode: boolean): () => T
  declare function throttle<T>(delay: number, callback: () => T): () => T


  /**
   * Debounce execution of a function. Debouncing, unlike throttling, guarantees that a function is only executed a single time,
   * either at the very beginning of a series of calls, or at the very end.
   */
  declare function debounce<T>(delay: number, atBegin: boolean, callback: () => T): () => T
  declare function debounce<T>(delay: number, callback: () => T): () => T

}
