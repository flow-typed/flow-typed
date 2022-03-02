// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'react';

describe('jsx', () => {
  it('has input props', () => {
    type Props = {|
      ...$Exact<jsx$HTMLElement$Attributes>,
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
