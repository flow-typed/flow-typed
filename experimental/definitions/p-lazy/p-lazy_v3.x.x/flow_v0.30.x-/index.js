declare module 'p-lazy' {
  /**
   * Create a lazy promise that defers execution until it's awaited or when `.then()` or `.catch()` is called.
   */
  declare class PLazy<ValueType> extends Promise<ValueType> {
    /**
     * Create a `PLazy` promise from a promise-returning or async function.
     * @example
     * ```
     * import PLazy from 'p-lazy';
     * const lazyPromise = new PLazy(resolve => {
     * 	someHeavyOperation(resolve);
     * });
     * // `someHeavyOperation` is not yet called
     * (async () => {
     * 	await doSomethingFun;
     * 	// `someHeavyOperation` is called
     * 	console.log(await lazyPromise);
     * })();
     * ```
     */
    static from<ValueType>(
      fn: () => ValueType | Promise<ValueType>
    ): PLazy<ValueType>;
  }

  declare export default PLazy;
}
