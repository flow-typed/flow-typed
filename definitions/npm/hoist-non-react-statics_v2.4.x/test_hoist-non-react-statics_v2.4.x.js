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
