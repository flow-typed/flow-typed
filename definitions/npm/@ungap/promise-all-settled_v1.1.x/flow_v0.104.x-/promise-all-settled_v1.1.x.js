declare module '@ungap/promise-all-settled' {
  declare type SettledPromiseResult<+T> =
    | {|
        +status: 'fulfilled',
        +value: T,
      |}
    | {|
        +status: 'rejected',
        +reason: any,
      |};

  /**
   * Creates a Promise that is resolved with an array of results when all
   * of the provided Promises resolve or reject.
   * @param promises  An array of Promises.
   * @returns A new Promise.
   * @see https://github.com/facebook/flow/blob/92dad73bbc64540dcedecf6ad4589634544b62ea/lib/core.js#L1880
   */
  declare export default function allSettled<T: Iterable<mixed>>(
    promises: T
  ): Promise<$TupleMap<T, <T>(p: Promise<T> | T) => SettledPromiseResult<T>>>;
}
