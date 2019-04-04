// @flow
import { describe, it } from 'flow-typed-test';
import React, { Component } from 'react';
import { defaultProps } from 'recompose';

describe('defaultProps', () => {
  type Props = {|
    +id: number,
    +isActive: boolean,
    +onChange: (id: number, status: boolean) => mixed,
  |};

  class Comp extends Component<Props> {}

  const injectOnChange = defaultProps({
    onChange: () => {},
  });

  const WithInjectedComponent = injectOnChange(Comp);

  it('should passes when used properly', () => {
    <WithInjectedComponent id={1} isActive={false} />;
  });

  it("should rises an error when don't pass all required props", () => {
    // $ExpectError: `onChange` required
    <Comp id={1} isActive={false} />;
  });

  it('should rises an error when pass wrong onChange handler function', () => {
    // $ExpectError: `id:string` is incompatible with `id:number`
    <WithInjectedComponent
      id={1}
      isActive={false}
      onChange={(id: string) => {}}
    />;
  });
});
