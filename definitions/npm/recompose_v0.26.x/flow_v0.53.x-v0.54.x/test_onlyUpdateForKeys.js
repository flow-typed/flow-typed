/* eslint-disable no-unused-vars, no-unused-expressions */
/* @flow */
import React from "react";
import { compose, withProps, onlyUpdateForKeys } from "recompose";

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
  onlyUpdateForKeys(["eA"]),
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
  // $FlowExpectedError property not found
  onlyUpdateForKeys(["eB"])
);

const EnhancedComponent = enhacer(Comp);
