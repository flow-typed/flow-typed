import pEachSeries from 'p-each-series';
import { it } from 'flow-typed-test';

it('handles correct inputs and return type', () => {
  (pEachSeries(['a', 'b', 'c'], (el: string, index: number) => null): Promise<
    Iterable<string>,
  >);
  (pEachSeries([1, 2, Promise.resolve(3)], (el: number, index: number) =>
    Promise.resolve(el),
  ): Promise<Iterable<number>>);
});

it('errors on invalid iterator element type', () => {
  // $ExpectError
  pEachSeries([1, 2, Promise.resolve(3)], (el: string, index: number) => null);
});

it('errors on invalid return type', () => {
  // $ExpectError
  (pEachSeries(['a', 'b', 'c'], () => null): Promise<Iterable<number>>);
});
