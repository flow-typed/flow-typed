import pReduce from 'p-reduce';
import { it } from 'flow-typed-test';

it('handles correct inputs with initialValue specified', () => {
  (pReduce(
    [1, 2, Promise.resolve(3)],
    (previousValue: number, currentValue: number, index: number) => 1,
    0,
  ): Promise<number>);
});

it('handles correct inputs with initialValue unspecified', () => {
  (pReduce(
    [1, 2, Promise.resolve(3)],
    (previousValue: ?number, currentValue: number, index: number) => 1,
  ): Promise<number>);
});

it('handles handles mismactched input and initialValue types', () => {
  (pReduce(
    [1, 2, Promise.resolve(3)],
    (
      previousValue: number | string,
      currentValue: number | string,
      index: number,
    ) => 'string',
    'not a number',
  ): Promise<string>);
});

it('errors when no initialValue passed, and expecting non-nullable previousValue', () => {
  // $FlowExpectedError
  pReduce(
    [1, 2, Promise.resolve(3)],
    (previousValue: number, currentValue: number, index: number) => 1,
  );
});

it('errors when wrong initialValue type ', () => {
  pReduce(
    [1, 2, Promise.resolve(3)],
    // $FlowExpectedError
    (previousValue: number, currentValue: number, index: number) => 1,
    'not a number',
  );
});

it('errors when wrong reducer types ', () => {
  pReduce(
    [1, 2, Promise.resolve(3)],
    // $FlowExpectedError
    (previousValue: ?string, currentValue: string, index: number) => 1,
  );
});

it('errors when wrong return type ', () => {
  (pReduce(
    [1, 2, Promise.resolve(3)],
    (previousValue: ?number, currentValue: number, index: number) => 1,
    // $FlowExpectedError
  ): Promise<string>);
});
