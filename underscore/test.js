/** @flow */
var _ = require('underscore');

/**
 * _.find
 */
_.find([1, 2, 3], x => x * 1 == 3);
// $ExpectError number cannot be compared to string
_.find([1, 2, 3], x => x == 'a');
// $ExpectError number. This type is incompatible with function type.
_.find([1, 2, 3], 1);
// $ExpectError property `y`. Property not found in object literal
_.find([{x:1}, {x:2}, {x:3}], v => v.y == 3);
_.find([{x:1}, {x:2}, {x:3}], v => v.x == 3);

/**
 * _.findWhere
 */
_.findWhere([{x: 1}, {y: 2}], {x: 2});
// $ExpectError number. This type is incompatible with function type.
_.findWhere([{x: 1}, {y: 2}], 1);
// XXX: It would be nice if Flow could catch this error.
// See https://github.com/facebook/flow/issues/946
_.findWhere([{x:1}, {x:2}, {x:3}], v => v.x == 3);


/**
 * _.clone
 */
_.clone({a: 1}).a == 1;
// $ExpectError property `b`. Property not found in object literal
_.clone({a: 1}).b == 1
// $ExpectError number. This type is incompatible with function type.
_.clone({a: 1}).a == 'c';

/**
 * _.isEqual
 */
_.isEqual('a', 'b');
_.isEqual({x: 1}, {y: 2});

// Flow considers these compatible with isEqual(a: any, b: any).
// Reasonable people disagree about whether these should be considered legal calls.
// See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
// and https://github.com/facebook/flow/issues/956
_.isEqual(1);
_.isEqual(1, 2, 3);


/**
 * _.range
 */
_.range(0, 10)[4] == 4
// $ExpectError string. This type is incompatible with number
_.range(0, 'a');
// $ExpectError string cannot be compared to number
_.range(0, 10)[4] == 'a';


/**
 * _.extend
 */
_.extend({a: 1}, {b: 2}).a
_.extend({a: 1}, {b: 2}).b
// $ExpectError property `c`. Property not found in object literal
_.extend({a: 1}, {b: 2}).c


/**
 * _.zip
 */
_.zip(['a', 'b', 'c'], ['d', 'e', 'f'])[0].length;
_.zip(['a', 'b', 'c'], [1, 2, 3])[0].length;
_.zip(['a', 'b', 'c'], [1, 2, 3])[0][0] + 'a'
_.zip(['a', 'b', 'c'], [1, 2, 3])[0][1] * 10
// $ExpectError `x` property not found in Array
_.zip([{x:1}], [{x:2,y:1}])[0].x
// $ExpectError `y` property not found in object literal
_.zip([{x:1}], [{x:2,y:1}])[0][0].y
_.zip([{x:1}], [{x:2,y:1}])[0][1].y
// Flow could potentially catch this -- the tuple only has two elements.
_.zip([{x:1}], [{x:2,y:1}])[0][2]


/**
 * _.any
 */
_.any([1, 2, 3], x => x == 1);
// $ExpectError number cannot be compared to string.
_.any([1, 2, 3], x => x == 'a');


/**
 * _.find
 */
_.find([1, 2, 3], x => x == 1);
// $ExpectError number. This type is incompatible with function type.
_.find([1, 2, 3], 1);
// $ExpectError Callable signature not found in object literal
_.find([1, 2, 3], {val: 1});

