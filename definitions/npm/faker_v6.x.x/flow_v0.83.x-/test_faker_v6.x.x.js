// @flow
import { describe, it } from 'flow-typed-test';
import faker from 'faker';

describe('faker', () => {
  it('is empty', () => {
    (faker: void);
  });

  it('errors', () => {
    // $FlowExpectedError[incompatible-use]
    faker.address.zipCode();
    // $FlowExpectedError[incompatible-use]
    faker.seed(12);
  });
});
