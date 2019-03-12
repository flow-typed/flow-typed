//@flow

import React from 'react';
import onClickOutside, { type OnClickOutsideProps, IGNORE_CLASS_NAME } from 'react-onclickoutside';

(IGNORE_CLASS_NAME: string);

class A extends React.Component<OnClickOutsideProps & { a: string }> {
  render() {
    return <div>{this.props.a}</div>;
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
  // $ExpectError
  <B a="foo" eventTypes={1} />
}

{
  <B a="foo" disableOnClickOutside eventTypes={['mouseDown']} outsideClickIgnoreClass="foo-bar" />
}
