// @flow

import { describe, it } from 'flow-typed-test';
import allSettled from '@ungap/promise-all-settled';

describe('The `allSettled` function', () => {
  it('usage with call', () => {
    allSettled.call(Promise, []);

    allSettled.call(Promise, [Promise.resolve(), Promise.resolve()]);

    allSettled.call(Promise, [123]);

    // $FlowExpectedError[incompatible-call]
    allSettled.call(Promise.resolve());
    // $FlowExpectedError[prop-missing]
    allSettled.call(Promise, Promise.resolve());
    // $FlowExpectedError[prop-missing]
    allSettled.call(Promise, 123);
  });

  it('usage with bind', () => {
    const $settled = allSettled.bind(Promise);

    $settled([]);
    $settled([Promise.resolve(), Promise.resolve()]);

    // $FlowExpectedError[prop-missing]
    $settled(Promise.resolve());
    // $FlowExpectedError[prop-missing]
    $settled(123);
  });
});
