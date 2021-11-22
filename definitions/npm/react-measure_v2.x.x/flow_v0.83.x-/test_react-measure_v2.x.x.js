// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'React'
import Measure from 'react-measure'

describe('react-measure', () => {
  it('', () => {
    const fail = () => (
      // $FlowExpectedError[incompatible-type]
      <Measure bounds="string" />
    )
  });
});
