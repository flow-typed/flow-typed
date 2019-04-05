// @flow
import { describe, it } from 'flow-typed-test';
import React, { Component } from 'react';
import { withProps } from 'recompose';

describe('withProps', () => {
  type Props = {|
    +style?: {},
    +id: number,
    +info: string,
  |};

  class Item extends Component<Props> {}

  it('should passes when used properly', () => {
    <Item info="title" id={0} />;
  });

  describe('Object argument', () => {
    const WithPropItem = withProps({
      info: '',
    })(Item);

    it('should passes when used properly', () => {
      <WithPropItem id={69} />;
    });

    it('should remove injected prop', () => {
      // $ExpectError: `info` is missing in props
      <WithPropItem id={69} info="ups" />;
    });
  });

  describe('Function argument', () => {
    const WithPropItem = withProps<Props, _>((props: Props) => ({
      id: 1,
    }))(Item);

    it('should passes when used properly', () => {
      <WithPropItem info="info" />;
    });

    it('should remove injected prop', () => {
      // $ExpectError: `id` is missing in props
      <WithPropItem id={69} info="info" />;
    });
  });
});
