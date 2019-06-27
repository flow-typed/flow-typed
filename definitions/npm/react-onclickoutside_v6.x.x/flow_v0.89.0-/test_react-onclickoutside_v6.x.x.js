import React from 'react';
import onClickOutside, { IGNORE_CLASS_NAME } from 'react-onclickoutside';
import { describe, it } from 'flow-typed-test';

describe('react-onclickoutside', () => {
  it('IGNORE_CLASS_NAME', () => {
    IGNORE_CLASS_NAME.slice();

    // $ExpectError Cannot perform arithmetic operation because string literal `ignore-react-onclickoutside` [1] is not a number.
    IGNORE_CLASS_NAME - 1;
  });

  it('should not to wrap a component with preventDefault props of incorrect type', () => {
    // $ExpectError Cannot call `onClickOutside` because string [1] is incompatible with boolean [2].
    class FailComponent extends React.Component<{ preventDefault: string }> {
      render() {
        return <div/>;
      }
    }
    const FailComponentWithClickOutside = onClickOutside(FailComponent);
    <FailComponentWithClickOutside />;
  });

  describe('should wrap a component and', () => {
    class A extends React.Component<{a: string, preventDefault: boolean }> {
      render() {
        return this.props.preventDefault ? <div>{this.props.a}</div> : null;
      }
    }
    const B = onClickOutside(A);

    it('not accept incorrect props', () => {
      // $ExpectError
      <B />;
      // $ExpectError
      <B a={12}/>;
      // $ExpectError
      <B a="foo" preventDefault="no" />;
    });

    it('accept correct props', () => {
        <B a="foo" />;
        <B a="foo" preventDefault={true} />;
    });

    it('access a method on the wrapped component', () => {
      const fn = ref => ref ? ref.getInstance().render() : null;
      <B a="foo" ref={fn} />;
    });

    it('error when a non-existing method is accessed', () => {
      // $ExpectError
      const fn = ref => ref ? ref.getInstance().nonexisting() : null;
      <B a="foo" ref={fn} />;
    });
  });
});
