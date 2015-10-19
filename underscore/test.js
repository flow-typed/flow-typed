/** @flow */
var _ = require('underscore');

/**
 * _.isEqual
 */
_.isEqual('a', 'b');
_.isEqual({x: 1}, {y: 2});

// Flow considers these compatible with isEqual(a: any, b: any).
// Reasonable people disagree about whether these should be considered legal calls.
// See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
_.isEqual(1);
_.isEqual(1, 2, 3);

/**
 * _.any
 */
_.any([1, 2, 3], x => x == 1);
// $FlowError number cannot be compared to string.
_.any([1, 2, 3], x => x == 'a');


/**
 * _.find
 */
_.find([1, 2, 3], x => x == 1);
// $FlowError number. This type is incompatible with function type.
_.find([1, 2, 3], 1);
// $FlowError Callable signature not found in object literal
_.find([1, 2, 3], {val: 1});

