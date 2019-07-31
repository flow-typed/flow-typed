declare module 'p-all' {
  declare export default function PAll<T>(
    tasks: Iterable<() => Promise<T> | T>,
    options?: { concurrency?: number, ... },
  ): Promise<Array<T>>;
}
