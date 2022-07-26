// @flow

import {supported, notSupportedReason} from '@mapbox/mapbox-gl-supported';

// $FlowExpectedError
supported({});
supported({failIfMajorPerformanceCaveat: true});
const isSupported = supported();

// $FlowExpectedError
notSupportedReason({});
notSupportedReason({failIfMajorPerformanceCaveat: true});
const reason = notSupportedReason();
