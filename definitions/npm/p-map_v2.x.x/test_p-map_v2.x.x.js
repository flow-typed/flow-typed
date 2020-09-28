import pMap from 'p-map';
import { it } from 'flow-typed-test';

it('handles correct inputs and types return value', () => {
  (pMap(
    [1, 2, Promise.resolve(3)],
    (el: number, index: number) => (el + index).toString(),
    { concurrency: 2 },
  ): Promise<Array<string>>);
  (pMap(['a', 'b', Promise.resolve(3)], () => null): Promise<Array<null>>);
});

it('errors when wrong mapper element type', () => {
  // $FlowExpectedError
  pMap([1, 2, Promise.resolve(3)], (el: string) => 1);
});

it('errors when passing invalid options', () => {
  // $FlowExpectedError
  pMap([1, 2, Promise.resolve(3)], (el: number) => el, { concurrency: '1' });
});

it('errors when wrong return type', () => {
  // $FlowExpectedError
  (pMap([1, 2, Promise.resolve(3)], (el: number) => el): Promise<
    Array<string>,
  >);
});
