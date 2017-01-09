
import _ from 'lodash';

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
_.find({x: 1, y: 2}, (a: number, b: string) => a);
_.find({x: 1, y: 2}, { x: 3 });

/**
 * _.find examples from the official doc
 */
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(users, function(o) { return o.age < 40; });

// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });

// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);

// The `_.property` iteratee shorthand.
_.find(users, 'active');


/**
 * _.map examples from the official doc
 */
function square(n) {
  return n * n;
}

_.map([4, 8], square);
_.map({ 'a': 4, 'b': 8 }, square);

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The `_.property` iteratee shorthand.
_.map(users, 'user');

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
// $ExpectError property `c`. Poperty not found in object literal
_.assignIn({a: 1}, {b: 2}).c


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
 * _.find
 */
_.find([1, 2, 3], x => x == 1);
// $ExpectError number. This type is incompatible with function type.
_.find([1, 2, 3], 1);


// Copy pasted tests from iflow-lodash
var nums : number[] = [1,2,3,4,5,6];
var num : number;
var string : string;
var bool : bool;

var nativeSquares : number[];
var directSquares : number[];

var nativeStrings : string[];
var directStrings : string[];

var allNums : number[];
var numsAndStrList : Array<number|string>;
var mixedList : Array<mixed>;
allNums = _.concat(nums, nums, nums);
numsAndStrList = _.concat(nums, '123', '456');
numsAndStrList = _.concat(nums, ['123', '456']);
numsAndStrList = _.concat(nums, [[1,2,3], '456']);
mixedList = _.concat(nums, [[1,2,3], '456']);

// Array#map, lodash.map, lodash#map
nativeSquares = nums.map(function(num) {
  return num * num;
});
directSquares = _.map(nums, function(num) {
  return num * num;
});

num = _.first(nums);

// return type of iterator is reflected in result and chain
nativeStrings = nums.map(function(num) {
  return JSON.stringify(num);
});
directStrings = _.map(nums, function(num) {
  return JSON.stringify(num);
});

var obj = {a:1, b:2};
bool = _.conformsTo(obj, {
  a: function(x:number) {
    return true;
  },
});

num = _.defaultTo(undefined, 2);
string = _.defaultTo(undefined, 'str');
bool = _.defaultTo(true, 'str');
string = _.defaultTo('str', true);

num = _.tap(1, function(n) { return false; });
bool = _.thru(1, function(n) { return false; });

var timesNums: number[];

timesNums = _.times(5);
// $ExpectError string. This type is incompatible with number
var strings : string[] = _.times(5);
timesNums = _.times(5, function(i: number) { return i + 1; });
// $ExpectError string. This type is incompatible with number
timesNums = _.times(5, function(i: number) { return JSON.stringify(i); });
