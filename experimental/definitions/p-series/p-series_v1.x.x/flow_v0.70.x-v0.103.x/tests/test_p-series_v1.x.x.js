import pSeries from 'p-series';
import { it } from 'flow-typed-test';

it('handles correct inputs', () => {
  (pSeries([() => 1, () => 2, () => Promise.resolve(2)]): Promise<
    Array<number>,
  >);
});

it('errors on invalid input', () => {
  // $ExpectError
  pSeries([1, 2, 3]);
});

it('errors on invalid return type', () => {
  // $ExpectError
  (pSeries([() => 1, () => 2, () => 3]): Promise<Array<string>>);
  // $ExpectError
  (pSeries([() => 1, () => 2, () => 'a']): Promise<Array<string>>);
});
