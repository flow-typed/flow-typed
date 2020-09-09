import pAll from 'p-all';
import { it } from 'flow-typed-test';

it('handles correct inputs and return types', () => {
  (pAll([() => 1, () => 2, () => 3]): Promise<Array<number>>);
  (pAll([() => 1, () => 2, () => 3], {
    concurrency: 2,
  }): Promise<Array<number>>);
  (pAll([() => '1', () => 2, () => 3]): Promise<Array<string | number>>);
  (pAll([() => 1, () => Promise.resolve(2), () => Promise.resolve(3)]): Promise<
    Array<number>,
  >);
});

it('errors on invalid return type', () => {
  // $FlowExpectedError
  (pAll([() => 1, () => 2, () => 3]): Promise<Array<string>>);
  // $FlowExpectedError
  (pAll([() => '1', () => 2, () => 3]): Promise<Array<string>>);
});

it('errors on invalid options', () => {
  // $FlowExpectedError
  pAll([() => 1, () => 2, () => 3], { concurrency: '2' });
});
