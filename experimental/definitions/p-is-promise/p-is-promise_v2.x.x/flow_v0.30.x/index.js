declare module 'p-is-promise' {
  /**
   * Check if `input` is a ES2015 promise.
   * @param input - Value to be checked.
   * @example
   * ```
   * import isPromise from 'p-is-promise';
   * isPromise(Promise.resolve('🦄'));
   * //=> true
   * ```
   */
  declare export default function pIsPromise(
    input: mixed
  ): boolean %checks(input instanceof Promise);
}
