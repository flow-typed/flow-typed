import pFilter from 'p-filter';
import { it } from 'flow-typed-test';

it('handles correct inputs and return type', () => {
  (pFilter([1, 2, 3], (el: number, index: number) => true): Promise<
    Array<number>,
  >);
  (pFilter(
    ['a', 'b', Promise.resolve('c')],
    (el: string, index: number) => false,
    { concurrency: 2 },
  ): Promise<Array<string>>);
});

it('errors on invalid filterer element type', () => {
  // $FlowExpectedError
  pFilter(['a', 'b', Promise.resolve(3)], (el: string, index: number) => true);
});

it('errors on invalid filterer return type', () => {
  // $FlowExpectedError
  pFilter([1, 2, Promise.resolve(3)], (el: number, index: number) => null);
});

it('errors on invalid return type', () => {
  // $FlowExpectedError
  (pFilter([1, 2, 3], (el: number, index: number) => true): Promise<
    Array<string>,
  >);
});

it('errors on invalid options', () => {
  // $FlowExpectedError
  pFilter([1, 2, 3], (el: number, index: number) => true, { concurrency: '1' });
});
