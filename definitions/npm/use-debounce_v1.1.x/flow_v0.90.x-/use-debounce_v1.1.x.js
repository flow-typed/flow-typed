declare module 'use-debounce' {
  declare export function useDebounce<T>(
    value: T,
    delay: number,
    options?: {| maxWait?: number |}
  ): [T, () => void];

  declare export function useDebouncedCallback<T: (...args: Array<any>) => any>(
    callback: T,
    delay: number,
    deps: $ReadOnlyArray<any>,
    options?: {| maxWait?: number |}
  ): [T, () => void, () => void];
}
