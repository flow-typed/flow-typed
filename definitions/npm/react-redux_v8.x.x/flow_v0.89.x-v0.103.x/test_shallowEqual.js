// @flow
import { describe, it } from 'flow-typed-test';
import { shallowEqual } from 'react-redux';

describe('shallowEqual', () => {
  it('returns a boolean', () => {
    const x: boolean = shallowEqual('a', 'a');

    //$FlowExpectedError[incompatible-type]
    const y: number = shallowEqual('a', 'a');
  });

  it('can be called with any argument types', () => {
    shallowEqual('a', 'a');
    shallowEqual({ test: 'test' }, { test: 'test' });
    shallowEqual({ test: 'test' }, 'a');
  });

  it('should be called with two arguments', () => {
    // Flow considers these compatible with shallowEqual<T>(a: T, b: any).

    // The same is seen in tests for _.isEqual and the comment below is copied from those tests
    // Reasonable people disagree about whether these should be considered legal calls.
    // See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
    // and https://github.com/facebook/flow/issues/956
    shallowEqual();
    shallowEqual('a');
  });
});
