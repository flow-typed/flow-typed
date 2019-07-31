declare module 'p-series' {
  declare export default function PSeries<T>(
    tasks: Iterable<() => Promise<T> | T>,
  ): Promise<Array<T>>;
}
