import pSeries from 'p-series';
import { it } from 'flow-typed-test';

it('handles correct inputs', () => {
  (pSeries([() => 1, () => 2, () => Promise.resolve(2)]): Promise<
    Array<number>,
  >);
});

it('errors on invalid input', () => {
  // $FlowExpectedError
  pSeries([1, 2, 3]);
});

it('errors on invalid return type', () => {
  // $FlowExpectedError
  (pSeries([() => 1, () => 2, () => 3]): Promise<Array<string>>);
  // $FlowExpectedError
  (pSeries([() => 1, () => 2, () => 'a']): Promise<Array<string>>);
});
