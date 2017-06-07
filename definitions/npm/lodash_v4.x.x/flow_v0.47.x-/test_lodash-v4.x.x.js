// @flow
import _ from 'lodash';

/**
 * _.countBy
 */
_.countBy([6.1, 4.2, 6.3], Math.floor);
_.countBy(['one', 'two', 'three'], 'length');


/**
 * _.differenceBy
 */
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');


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

// $ExpectError undefined. This type is incompatible with object type.
var result: Object = _.find(users, 'active');

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
 * _.groupBy
 */
var numbersGroupedByMathFloor = _.groupBy([6.1, 4.2, 6.3], Math.floor);
if (numbersGroupedByMathFloor[6]) {
  numbersGroupedByMathFloor[6][0] / numbersGroupedByMathFloor[6][1]
}
var stringsGroupedByLength = _.groupBy(['one', 'two', 'three'], 'length');
if (stringsGroupedByLength[3]) {
  stringsGroupedByLength[3][0].toLowerCase();
}
var numbersObj: {[key: string]: number} = {a: 6.1, b: 4.2, c: 6.3};
var numbersGroupedByMathFloor2 = _.groupBy(numbersObj, Math.floor);
if (numbersGroupedByMathFloor2[6]) {
  numbersGroupedByMathFloor2[6][0] / numbersGroupedByMathFloor2[6][1]
}
var stringObj: {[key: string]: string} = {a: 'one', b: 'two', c: 'three'};
var stringsGroupedByLength2 = _.groupBy(stringObj, 'length');
if (stringsGroupedByLength2[3]) {
  stringsGroupedByLength2[3][0].toLowerCase();
}


/**
 * _.intersectionBy
 */
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');


/**
 * _.get
 */

// Object — examples from lodash docs
var exampleObjectForGetTest = { 'a': [{ 'b': { 'c': 3 } }] };
_.get(exampleObjectForGetTest, 'a[0].b.c');
_.get(exampleObjectForGetTest, ['a', '0', 'b', 'c']);
_.get(exampleObjectForGetTest, 'a.b.c', 'default');

// Array — not documented, but _.get does support arrays
_.get([1, 2, 3], '0');
_.get(['foo', 'bar', 'baz'], '[1]');
_.get([{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }], '2');
_.get([[1, 2], [3, 4], [5, 6], [7, 8]], '3');

// Second argument must be string when looking for array items by index
// $ExpectError number This type is incompatible with union: ?array type | string
_.get([1, 2, 3], 0);


/**
 * _.keyBy
 */
_.keyBy([
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
], function(o) {
  return String.fromCharCode(o.code);
});
_.keyBy([
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
], 'dir');

// Example of keying a map of objects by a number type
type KeyByTest$ByNumber<T: Object> = { [number]: T }
type KeyByTest$ByNumberMaybe<T: ?Object> = { [number]: T }
type KeyByTest$Record = { id: number }
var keyByTest_array: Array<KeyByTest$Record> = [{ id: 4 }, { id: 4 }, { id: 7 }]
var keyByTest_map: KeyByTest$ByNumber<KeyByTest$Record> = {
  [keyByTest_array[0].id]: keyByTest_array[0],
  [keyByTest_array[1].id]: keyByTest_array[1],
  [keyByTest_array[2].id]: keyByTest_array[2],
}

var keyByTest_map2: KeyByTest$ByNumberMaybe<?KeyByTest$Record> = _.keyBy(keyByTest_map, 'id')


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
 * _.pullAllBy
 */
_.pullAllBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x');


/**
 * _.unionBy
 */
_.unionBy([2.1], [1.2, 2.3], Math.floor);
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');


/**
 * _.uniqBy
 */
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');


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

// Flow considers this compatible with isEqual(a: any, b: any).
// Reasonable people disagree about whether this should be considered a legal call.
// See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
// and https://github.com/facebook/flow/issues/956
_.isEqual(1);

// $ExpectError function type expects no more than 2 arguments
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
 * _.sortedIndexBy
 */
_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, function(o) { return o.x; });
_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');


/**
 * _.sortedLastIndexBy
 */
_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, function(o) { return o.x; });
_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');

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
 * _.xorBy
 */
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');


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
// $ExpectError Flow could potentially catch this -- the tuple only has two elements.
_.zip([{x:1}], [{x:2,y:1}])[0][2]

/**
 * _.isString
 */

var boolTrue: true;
var boolFalse: false;

boolTrue  = _.isString('foo');
boolFalse = _.isString(['']);
boolFalse = _.isString({});
boolFalse = _.isString(5);
boolFalse = _.isString(function(f) { return f });
boolFalse = _.isString();

// $ExpectError
boolFalse = _.isString('');
// $ExpectError
boolTrue = _.isString(undefined);


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

// lodash.flatMap for collections and objects
// this arrow function needs a type annotation due to a bug in flow
// https://github.com/facebook/flow/issues/1948
_.flatMap([1, 2, 3], (n): number[] => [n, n]);
_.flatMap({a: 1, b: 2}, n => [n, n]);

/**
 * _.noop
 */
_.noop();
_.noop(1);
_.noop('a', 2, [], null);
(_.noop: (string) => void);
(_.noop: (number, string) => void);
// $ExpectError functions are contravariant in return types
(_.noop: (string) => string);
