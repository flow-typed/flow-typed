declare module 'p-map' {
  declare export default function PMap<I, O>(
    input: Iterable<Promise<I> | I>,
    mapper: (input: I, index: number) => Promise<O> | O,
    options?: { concurrency?: number, ... },
  ): Promise<Array<O>>;
}
