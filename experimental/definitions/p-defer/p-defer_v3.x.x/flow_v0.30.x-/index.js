declare module 'p-defer' {
  declare interface DeferredPromise<ValueType> {
    /**
		Resolves the promise with a value or the result of another promise.
		@param value - The value to resolve the promise with.
		*/
    resolve(value?: ValueType | Promise<ValueType>): void;

    /**
		Reject the promise with a provided reason or error.
		@param reason - The reason or error to reject the promise with.
		*/
    reject(reason?: mixed): void;

    /**
		The deferred promise.
		*/
    promise: Promise<ValueType>;
  }

  /**
   * Create a deferred promise.
   * @example
   * ```
   * import pDefer from 'p-defer';
   * function delay(ms) {
   *   const deferred = pDefer();
   *   setTimeout(deferred.resolve, ms, '🦄');
   *   return deferred.promise;
   * }
   * (async () => {
   *   console.log(await delay(100));
   *   //=> '🦄'
   * })();
   * ```
   */
  declare export default function pDefer<ValueType>(): DeferredPromise<
    ValueType
  >;
}
