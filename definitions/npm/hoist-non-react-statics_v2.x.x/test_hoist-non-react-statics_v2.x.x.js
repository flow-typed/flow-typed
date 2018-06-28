// @flow

import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

// $ExpectError
hoistNonReactStatics(1);
// $ExpectError
hoistNonReactStatics(1, 2);
// $ExpectError
hoistNonReactStatics(1, 2, 3);

let C1 = (props: {
  a: number,
  b: string
}) =>
  <div>
    {props.a} {props.b}
  </div>;

const C2 = (props: {
  a: number,
  b: string,
  c: boolean
}) =>
  <div>
    {props.a} {props.b} {props.c}
  </div>;
C2.foo = 1;
C2.bar = 2;

C1 = hoistNonReactStatics(C1, C2, { foo: true });
C1.bar;

class A extends React.Component<{}> {
  static foo() { return 123; }
}

class B extends React.Component<{}> {
  render() { return <A />; }
}

const C = hoistNonReactStatics(B, A);

A.foo();
// $ExpectError
B.foo();
C.foo();
