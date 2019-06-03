declare module 'use-resize-observer' {
  declare export default function useResizeObserver<T: HTMLElement>(): [
    { current: T | null, ... },
    number,
    number,
  ];
}
