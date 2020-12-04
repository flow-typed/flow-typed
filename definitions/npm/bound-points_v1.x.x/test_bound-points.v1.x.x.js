// @flow

import boundPoints from 'bound-points'

// $FlowExpectedError boundPoints does not return `string`.
(boundPoints([[10, 20]]): string);

// $FlowExpectedError boundPoints takes an array of arrays.
boundPoints(['a', 'b']);

// $FlowExpectedError boundPoints takes an array of arrays.
boundPoints([10, 20]);

// $FlowExpectedError boundPoints returns array of arrays.
(boundPoints([[10, 20], [30, 40]]): [number, number]);

(boundPoints([[10, 20], [30, 40]]): [[number, number], [number, number]]);
