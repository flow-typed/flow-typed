import pWhilst from 'p-whilst';
import { it } from 'flow-typed-test';

it('handles correct inputs', () => {
  pWhilst(() => true, () => null);
  pWhilst(() => false, () => Promise.resolve(1));
});

it('types the return value', () => {
  (pWhilst(() => false, () => Promise.resolve(1)): Promise<void>);
});

it('errors on invalid input', () => {
  // $ExpectError
  pWhilst(() => null);
  // $ExpectError
  pWhilst(true, () => null);
});

it('errors on invalid return type', () => {
  // $ExpectError
  (pWhilst(() => true, () => 1): Promise<number>);
});
