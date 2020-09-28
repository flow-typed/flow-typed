import pDoWhilst from 'p-do-whilst';
import { it } from 'flow-typed-test';

it('handles correct inputs and return types', () => {
  pDoWhilst(() => Promise.resolve('foo'), () => false);
  (pDoWhilst(() => 1, () => true): Promise<void>);
});

it('errors on invalid input', () => {
  // $FlowExpectedError
  pDoWhilst(() => Promise.resolve('foo'));
  // $FlowExpectedError
  pDoWhilst(() => Promise.resolve('foo'), () => 'hi');
});
