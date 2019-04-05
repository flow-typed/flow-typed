// @flow
import { describe, it } from 'flow-typed-test';
import React, { Component } from 'react';
import { withStateHandlers } from 'recompose';

describe('withStateHandlers', () => {
  type OwnProps = {|
    initialCounter?: number,
    variant: 'black' | 'white',
  |};

  type State = {|
    counter: number,
  |};

  type StateHandlers = {|
    incrementCounter: number => void,
    resetCounter: () => void,
  |};

  type Props = $ReadOnly<{|
    ...OwnProps,
    ...State,
    ...StateHandlers,
  |}>;

  class Item extends Component<Props> {}

  const WithCounterState = withStateHandlers(
    ({ initialCounter = 0 }) => ({
      counter: initialCounter,
    }),
    {
      incrementCounter: ({ counter }) => value => ({
        counter: counter + value,
      }),
      resetCounter: (_, { initialCounter = 0 }) => () => ({
        counter: initialCounter,
      }),
    }
  )(Item);

  it('should passes when used properly', () => {
    <Item
      variant="white"
      counter={0}
      incrementCounter={(a: number) => {}}
      resetCounter={() => {}}
    />;
  });

  it('should passes when used properly', () => {
    <WithCounterState variant="black" />;
  });

  it('should remove injected props', () => {
    // $ExpectError: `counter` is missing in props
    <WithCounterState variant="black" counter={0} />;
  });
});
