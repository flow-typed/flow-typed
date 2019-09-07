declare module 'react-use' {
  declare type AsyncState<T> =
    | {|
        loading: boolean,
        error?: void,
        value?: void,
      |}
    | {|
        loading: false,
        error: Error,
        value?: void,
      |}
    | {|
        loading: false,
        error?: Error,
        value: T,
      |};

  declare export function useAsync<Result>(
    fn: (...args: Array<any>) => Promise<Result>,
    deps?: $ReadOnlyArray<any>
  ): AsyncState<Result>;

  declare export function useAsyncFn<Result, Args: Array<any> = Array<any>>(
    fn: (...args: Args) => Promise<Result>,
    deps?: $ReadOnlyArray<any>
  ): [AsyncState<Result>, (...args: Args) => Promise<Result>];

  declare export function usePrevious<T>(state: T): ?T;

  declare export function useEffectOnce(
    effect: () => (() => void) | void
  ): void;

  declare export function useMount(fn: () => void): void;
}
