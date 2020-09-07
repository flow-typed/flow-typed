declare module 'p-reduce' {
  declare export default function PReduce<I, O>(
    input: Iterable<Promise<I> | I>,
    reducer: (previousValue: ?I, currentValue: I, index: number) => O,
  ): Promise<O>;

  declare export default function PReduce<I, O>(
    input: Iterable<Promise<I> | I>,
    reducer: (previousValue: I, currentValue: I, index: number) => O,
    initialValue: I,
  ): Promise<O>;
}
