// @flow

import { describe, it } from 'flow-typed-test';
import supported from '@mapbox/mapbox-gl-supported';

describe('supported', () => {
  it('should fail when the options format is incorrect', () => {
    // $FlowExpectedError[prop-missing]
    supported({ incorrectProp: false });
    // $FlowExpectedError[prop-missing]
    supported({ failIfMajorPerformanceCaveat: true, otherProp: 100 });
  });

  it('should not fail when the options format is correct', () => {
    supported({ failIfMajorPerformanceCaveat: true });
    const isSupported = supported();
  });
});
