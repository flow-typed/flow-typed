/* eslint-disable no-unused-vars, no-unused-expressions, arrow-body-style */
/* @flow */
import React from "react";
import { compose, withProps, shouldUpdate } from "recompose";

import type { HOC } from "recompose";

type EnhancedCompProps = { eA: 1 };

const Comp = ({ eA }) =>
  <div>
    {(eA: number)}
    {
      // $FlowExpectedError eA nor any nor string
      (eA: string)
    }
  </div>;

const enhacer: HOC<*, EnhancedCompProps> = compose(
  shouldUpdate((props, nextProps) => {
    // $FlowExpectedError eA nor any nor string
    (props.eA: string);
    // $FlowExpectedError eA nor any nor string
    (nextProps.eA: string);

    return props.eA === nextProps.eA;
  }),
  withProps(props => ({
    eA: (props.eA: number),
    // $FlowExpectedError eA nor any nor string
    eAErr: (props.eA: string)
  })),
  withProps(props => ({
    // $FlowExpectedError property not found
    err: props.iMNotExists
  }))
);

const enhacerErr: HOC<*, EnhancedCompProps> = compose(
  shouldUpdate(() => {
    // $FlowExpectedError must be boolean
    return 1;
  })
);

const EnhancedComponent = enhacer(Comp);
