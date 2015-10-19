/** @flow */
var _ = require('underscore');

/**
 * _.isEqual
 */
_.isEqual('a', 'b');
_.isEqual({x: 1}, {y: 2});

// Flow bug: Flow does not appear to check the number of parameters to declared functions.
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

