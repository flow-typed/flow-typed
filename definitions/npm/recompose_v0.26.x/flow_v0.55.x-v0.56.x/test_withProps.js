/* eslint-disable no-unused-vars, no-unused-expressions */
/* @flow */
import React from "react";
import { compose, withProps } from "recompose";

import type { HOC } from "recompose";

type EnhancedCompProps = { a: string, b: number };

const Comp = ({ hello, b }) => (
  <div>
    {hello}
    {b}
    {
      // $FlowExpectedError
      (b: number)
    }
    {
      // $FlowExpectedError
      (hello: number)
    }
  </div>
);

const enhancer: HOC<*, EnhancedCompProps> = compose(
  withProps(({ a, b }) => ({
    hello: a,
    b: `${b}`
  })),
  withProps(({ b, hello }) => ({
    hello: (hello: string),
    // $FlowExpectedError (This type is incompatible with number)
    c: (b: number)
  })),
  // check non functional form of with props
  withProps({
    d: "hi"
  }),
  withProps(props => ({
    a: (props.a: string),
    d: (props.d: string),
    // $FlowExpectedError property not found
    err: props.iMNotExists,
    // $FlowExpectedError a not a number and not any
    aErr: (props.a: number),
    // $FlowExpectedError d not a number and not any
    dErr: (props.d: number)
  }))
);

const EnhancedComponent = enhancer(Comp);
<EnhancedComponent a={"1"} b={1} />;

// $FlowExpectedError
<EnhancedComponent a={"1"} b={"1"} />;

// $FlowExpectedError
<EnhancedComponent a={"1"} />;
