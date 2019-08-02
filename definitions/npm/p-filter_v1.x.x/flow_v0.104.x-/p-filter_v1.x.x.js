declare module 'p-filter' {
  declare export default function PFilter<T>(
    input: Iterable<Promise<T> | T>,
    filterer: (element: T, index: number) => boolean | Promise<boolean>,
    options?: { concurrency?: number, ... },
  ): Promise<Array<T>>;
}
