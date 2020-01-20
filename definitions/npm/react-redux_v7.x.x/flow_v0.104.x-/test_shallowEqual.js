// @flow

import { describe, it } from 'flow-typed-test';
import { shallowEqual } from 'react-redux';

describe('shallowEqual', () => {
  it('fails with different types', () => {
    // $ExpectError types differ
    shallowEqual('a', 1);
  })
});

