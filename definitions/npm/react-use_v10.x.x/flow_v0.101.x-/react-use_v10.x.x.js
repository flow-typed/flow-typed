declare module 'react-use' {
  declare type AsyncState<T> =
    | {
        loading: boolean,
        error?: *,
        value?: T,
      }
    | {
        loading: false,
        error: Error,
        value?: T,
      }
    | {
        loading: false,
        error?: *,
        value: T,
      };
  declare module.exports: {
    useAsync<Result>(
      fn: (...args: Array<any>) => Promise<Result>,
      deps?: $ReadOnlyArray<any>
    ): AsyncState<Result>, 
    useAsyncFn<Result, Args = Array<any>>(
      fn: (...args: Args) => Promise<Result>,
      deps?: $ReadOnlyArray<any>
    ): [AsyncState<Result>, (...args: Args) => Promise<Result>],
    usePrevious<T>(state: T): ?T,
    useEffectOnce(effect: () => (() => void) | void): void,
    useMount(fn: () => void): void,
  };
}
