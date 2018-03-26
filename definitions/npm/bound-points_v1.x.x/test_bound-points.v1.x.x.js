// @flow

import boundPoints from 'bound-points'

// $ExpectError boundPoints does not return `string`.
(boundPoints([[10, 20]]): string);

// $ExpectError boundPoints takes an array of arrays.
boundPoints(['a', 'b']);

// $ExpectError boundPoints takes an array of arrays.
boundPoints([10, 20]);

// $ExpectError boundPoints returns array of arrays.
(boundPoints([[10, 20], [30, 40]]): [number, number]);

(boundPoints([[10, 20], [30, 40]]): [[number, number], [number, number]]);
