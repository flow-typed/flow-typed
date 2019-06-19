declare module 'p-forever' {
  declare var pForever: {
    /**
     * Run promise-returning & async functions until you end it.
     * @param fn - Receives the previously returned value. If a `Promise` is returned, it's awaited before calling `fn` again.
     * @param initialValue - Initial value to pass to `fn`.
     * @returns Fulfills when `fn` returns `pForever.end`, or rejects if any of the promises returned from `fn` rejects.
     * @example
     * ```
     * import pForever from 'p-forever';
     * pForever(async i => {
     *   i++;
     *   if (i > 100) {
     *     return pForever.end;
     *   }
     *   await createFixture(i);
     *   return i;
     * }, 0);
     * // or
     * let i = 0;
     * pForever(async () => {
     *   i++;
     *   if (i > 100) {
     *     return pForever.end;
     *   }
     *   await createFixture(i);
     * });
     * ```
     */
    <ValueType>(
      fn: (
        previousValue?: ValueType
      ) => ValueType | Promise<ValueType> | typeof pForever.end
    ): Promise<void>,
    <ValueType>(
      fn: (
        previousValue: ValueType
      ) => ValueType | Promise<ValueType> | typeof pForever.end,
      initialValue: ValueType | Promise<ValueType>
    ): Promise<void>,

    /**
     * Symbol used to end the loop.
     */
    +end: Symbol,
  };

  declare export default pForever;
}
