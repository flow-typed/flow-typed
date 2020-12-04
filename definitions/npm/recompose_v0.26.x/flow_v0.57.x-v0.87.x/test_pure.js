/* eslint-disable no-unused-vars, no-unused-expressions */
/* @flow */
import React from "react";
import { compose, withProps, pure } from "recompose";

import type { HOC } from "recompose";

type EnhancedCompProps = { eA: 1 };

const Comp = ({ eA }) => (
  <div>
    {(eA: number)}
    {
      // $FlowExpectedError eA nor any nor string
      (eA: string)
    }
  </div>
);

const enhacer: HOC<*, EnhancedCompProps> = compose(
  pure,
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

const EnhancedComponent = enhacer(Comp);
