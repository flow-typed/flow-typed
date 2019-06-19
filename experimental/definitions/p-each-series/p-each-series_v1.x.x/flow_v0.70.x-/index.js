declare module 'p-each-series' {
  declare export default function PEachSeries<T>(
    input: Iterable<Promise<T> | T>,
    iterator: (element: T, index: number) => any,
  ): Promise<Iterable<T>>;
}
