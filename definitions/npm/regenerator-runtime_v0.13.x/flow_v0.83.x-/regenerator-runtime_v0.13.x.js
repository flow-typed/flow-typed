declare module 'regenerator-runtime' {
  declare module.exports: $Exports<'regenerator-runtime/runtime'>;
}

declare module 'regenerator-runtime/path' {
  declare module.exports: {|
    path: string,
  |};
}

declare module 'regenerator-runtime/runtime' {
  declare type ContextLocation = number | 'end';

  declare type CompletionType = 'normal' | 'return' | 'throw' | 'break' | 'continue';

  declare type CompletionRecord = {|
    type: CompletionType,
    arg: mixed,
  |};

  declare type TryEntry = {|
    +tryLoc: number,
    +catchLoc?: number,
    +finallyLoc?: number,
    +afterLoc?: ContextLocation,
    completion?: CompletionRecord,
  |};

  declare type DelegatedIterator = {|
    iterator: Iterator<mixed, mixed, mixed>,
  |}

  declare type Context<TYield = mixed, TReturn = mixed, TNext = mixed> = {
    /**
     * The first entry should be of TryEntry with tryLoc: 'root'
     * while the remaining are of TryEntry.
     * But currently cannot type in that way dynamically
     */
    +tryEntries: Array<
      | {|
        ...TryEntry,
        +tryLoc: 'root'
      |}
      | TryEntry,
    >;

    /**
     * The value passed to `next()`.
     */
    sent: TNext;

    /**
     * The label of the previous location, needs to be set to `next` at the start of user code.
     */
    prev: mixed;

    /**
     * The label of the next location, is set to `'end'` when the generator needs to close abruptly.
     */
    next: number | 'end';

    /**
     * Whether the generator has finished.
     */
    done: boolean;

    /**
     * The return value, set by `abrupt("return")`.
     */
    rval: TReturn;

    /**
     * If truthy, then it contains information about the currently `yield*` delegated iterator.
     */
    delegate: DelegatedIterator | void;

    /**
     * The generator method.
     */
    method: 'next' | 'return' | 'throw';

    /**
     * The argument passed to the generator method.
     */
    arg: mixed;

    reset(skipTempReset?: boolean): void;

    /**
     * Ends the iteration.
     */
    stop(): TReturn;

    /**
     * Dispatches an exception to `innerFn`
     *
     * @param exception The exception to dispatch.
     */
    dispatchException(exception: mixed): boolean;

    /**
     * @param type The completion type.
     * @param rval The return value.
     */
    abrupt(type: 'return', rval?: TReturn): mixed;

    /**
     * @param type The completion type.
     * @param exception The exception to throw.
     */
    abrupt(type: 'throw', exception?: mixed): void;

    /**
     * @param type The completion type.
     * @param nextLoc The location label to resume iteration at.
     */
    abrupt(type: 'break' | 'continue', nextLoc: number): mixed;

    /**
     * @param type The completion type.
     * @param arg The [[Value]] or [[Target]] of the completion record.
     */
    abrupt(type: CompletionType, arg?: mixed): mixed;

    /**
     * @param record The completion record.
     * @param afterLoc The location to resume the generator at, only used by normal completions.
     */
    complete(record: $ReadOnly<CompletionRecord>, afterLoc?: ContextLocation): mixed;

    /**
     * Used to signify the end of a finally block.
     *
     * @param finallyLoc The label of the beginning of the finally block.
     */
    finish(finallyLoc: number): mixed;

    /**
     * Used to obtain the exception that was thrown in the associated try block.
     *
     * @param tryLoc The label of the beginning of the try block.
     */
    catch(tryLoc: number): mixed;

    /**
     * @param iterable The iterable to delegate to.
     * @param resultName The name of the property to assign to on this context.
     * @param nextLoc The label of the location where to resume iteration.
     */
    delegateYield(
        iterable: { [key: typeof Symbol.iterator]: () => Iterator<TYield, mixed, mixed> },
        resultName: string,
        nextLoc: ContextLocation,
    ): mixed;

    [
      /**
       * Expects properties to match `/^t[+-]?\d*(?:(?<=\d)\.\d*|\.\d+)?(?:e[+-]?\d+)?$/`.
       */
      temp: string
    ]: any;
  }

  declare type TryLocationsList = $ReadOnlyArray<
    | [number, number]
    | [number, number | void, number, ContextLocation]
  >;

  /**
   * The implementation of the generator.
   */
  declare type InnerFunction<T = void, TYield = mixed, TReturn = mixed, TNext = mixed> = (
    this: T,
    context: Context<TYield, TReturn, TNext>,
  ) => mixed;

  declare module.exports: {|
    wrap<T = void, TYield = mixed, TReturn = mixed, TNext = mixed>(
      innerFn: InnerFunction<T, TYield, TReturn, TNext>,
      outerFn?: ((...args: Array<any>) => any) | null,
      self?: T,
      tryLocsList?: TryLocationsList,
    ): Generator<TYield, TReturn, TNext>,
    isGeneratorFunction(func: mixed): boolean,
    mark(func: (...args: Array<any>) => any): any,
    awrap<V>(arg: V): {| +__await: V |},
    AsyncIterator: any,
    async: any,
    keys(object: { [key: string]: any }): (() => IteratorResult<string, void>);
    values: (
      | <I: Iterator<mixed, mixed, mixed>>(iterable: { [key: typeof Symbol.iterator]: () => I }) => I
      | <T>(iterableOrArrayLike: Iterable<T> | Array<T>) => Iterator<T, mixed, mixed>
    ),
  |};
}
