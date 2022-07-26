// @flow

import { describe, it } from 'flow-typed-test';
import { supported, notSupportedReason } from '@mapbox/mapbox-gl-supported';

describe('supported', () => {
  it('should fail when the options format is incorrect', () => {
    // $FlowExpectedError[prop-missing]
    supported({ incorrectProp: false });
  });

  it('should not fail when the options format is correct', () => {
    supported({ failIfMajorPerformanceCaveat: true });
    supported({ failIfMajorPerformanceCaveat: true, otherProp: 100 });
    const isSupported = supported();
  });
});

describe('notSupportedReason', () => {
  it('should fail when the options format is incorrect', () => {
    // $FlowExpectedError[prop-missing]
    notSupportedReason({ incorrectProp: false });
  });

  it('should not fail when the options format is correct', () => {
    notSupportedReason({ failIfMajorPerformanceCaveat: true });
    notSupportedReason({ failIfMajorPerformanceCaveat: true, otherProp: 100 });
    const reason = notSupportedReason();
  });
});
