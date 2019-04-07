// @flow
import { describe, it } from 'flow-typed-test';
import React, { Component } from 'react';
import { pure } from 'recompose';

describe('defaultProps', () => {
  type Props = {|
    +id: number,
  |};

  class Item extends Component<Props> {}

  const PureItem = pure(Item);

  it('should passes when used properly', () => {
    <PureItem id={1} />;

    <Item id={1} />;
  });

  it("should rises an error when don't pass required prop", () => {
    // $ExpectError: `id` is required
    <PureItem />;
  });

  it('should rises an error when pass undeclared prop', () => {
    // $ExpectError: `someProp` is missing in `Props`
    <PureItem id={1} someProp="test" />;
  });
});
