// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import { useSelector } from 'react-redux';

type State = {|
  a: number,
|};

describe('useSelector', () => {
  it('passes State as first parameter', () => {
    function Com() {
      // $ExpectError: the state has no `b`
      const count = useSelector<State, number>(state => state.b);
      return <div>{count}</div>;
    }
  });

  it('passes type of second parameter as params to `equalityFn`', () => {
    function Com2() {
      // $ExpectError: `equalityFn` is passed params of the second type, do not have `.size`
      const count = useSelector<State, number>(
        state => state.a,
        (a, b) => a.size === b.size
      );
      return <div>{count}</div>;
    }
  });

  it('returns type of second parameter', () => {
    function Com3() {
      const count = useSelector<State, number>(
        state => state.a,
        (a, b) => a === b
      );
      // `count` is type `number` and allows addition
      return <div>{count + 5}</div>;
    }
  });
});
