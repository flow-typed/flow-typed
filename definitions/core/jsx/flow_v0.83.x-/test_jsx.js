// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'react';

describe('jsx', () => {
  it('has input props', () => {
    type Props = {|
      ...jsx$HTMLElementProps,
      foo: string,
    |}

    const Input = ({
      foo,

    }: Props) => {
      return (
        <input />
      )
    }
  });
});
