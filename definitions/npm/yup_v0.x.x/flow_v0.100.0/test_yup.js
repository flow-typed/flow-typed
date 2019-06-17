// @flow
import { array, bool, boolean, date, mixed, string, number, object } from 'yup';
import { it, describe } from 'flow-typed-test';

describe('bool and boolean', () => {
  it('should work properly', () => {
    new bool();

    bool();
  });
});
