//@flow

import React from 'react';
import onClickOutside, { IGNORE_CLASS_NAME } from 'react-onclickoutside';

IGNORE_CLASS_NAME.slice();

// $ExpectError Cannot perform arithmetic operation because string literal `ignore-react-onclickoutside` [1] is not a number.
IGNORE_CLASS_NAME - 1;

// class and const are in same line to make all flow versions unhappy in the same line.
// $ExpectError Cannot call `onClickOutside` because string [1] is incompatible with boolean [2].
class FailComponent extends React.Component<{ preventDefault: string }> {render() {return <div/>;}} const FailComponentWithClickOutside = onClickOutside(FailComponent);
<FailComponentWithClickOutside />;

class A extends React.Component<{a: string, preventDefault: boolean }> {
  render() {
    return this.props.preventDefault ? <div>{this.props.a}</div> : null;
  }
}

const B = onClickOutside(A);

{
  // $ExpectError
  <B />
}

{
  // $ExpectError
  <B a={12}/>
}

{
  <B a="foo" />
}

{
  // $ExpectError
  <B a="foo" preventDefault="no" />
}

{
  <B a="foo" preventDefault={true} />
}
