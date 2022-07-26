// @flow

import { describe, it } from 'flow-typed-test';
import { supported, notSupportedReason } from '@mapbox/mapbox-gl-supported';

describe('supported', () => {
  it('should fail when the options format is incorrect', () => {
    // $FlowExpectedError
    supported({});
  });

  it('should not fail when the options format is correct', () => {
    supported({ failIfMajorPerformanceCaveat: true });
    const isSupported = supported();
  });
});

describe('notSupportedReason', () => {
  it('should fail when the options format is incorrect', () => {
    // $FlowExpectedError
    notSupportedReason({});
  });

  it('should not fail when the options format is correct', () => {
    notSupportedReason({ failIfMajorPerformanceCaveat: true });
    const reason = notSupportedReason();
  });
});
