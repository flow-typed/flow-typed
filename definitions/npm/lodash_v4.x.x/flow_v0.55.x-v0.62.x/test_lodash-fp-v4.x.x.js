// @flow
import _ from 'lodash/fp';

_.filter('x', [{x: 1}, {x: 2}]);
_.filter('x')([{x: 1}, {x: 2}]);
_.filter('x', {a: {x: 1}, b: {x: 2}});
_.filter('x')({a: {x: 1}, b: {x: 2}});
_.filter((v: {y?: number}) => v.y)({a: {x: 1}, b: {x: 2}})[0].x;
// $ExpectError
_.filter((v: {y: number}) => v.y)({a: {x: 1}, b: {x: 2}});

/**
 * _.attempt
 */
_.attempt(() => void 0)
_.attempt(x => x)
_.attempt((x, y, z) => {})

/**
 * _.countBy
 */
_.countBy(Math.floor, [6.1, 4.2, 6.3]);
_.countBy('length', ['one', 'two', 'three']);
_.countBy('length')(['one', 'two', 'three']);
_.countBy('length')({one: 'one', two: 'two', three: 'three'});


/**
 * _.differenceBy
 */
_.differenceBy(Math.floor, [2.1, 1.2], [2.3, 3.4]);
_.differenceBy('x', [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]);
_.differenceBy('x')([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]);


/**
 * _.find
 */
_.find(x => x * 1 == 3, [1, 2, 3]);
_.findFrom(x => x == 2, 1, [1, 2, 3]);
// $ExpectError number cannot be compared to string
_.find(x => x == 'a', [1, 2, 3]);
// $ExpectError number. This type is incompatible with function type.
_.find(1, [1, 2, 3]);
// $ExpectError property `y`. Property not found in object literal
_.find(v => v.y == 3, [{x:1}, {x:2}, {x:3}]);
_.find(v => v.x == 3, [{x:1}, {x:2}, {x:3}]);
_.find((a: number, b: string) => a, {x: 1, y: 2});
_.find({ x: 3 }, {x: 1, y: 2});
_.find({ x: 3 })({x: 1, y: 2});

// $ExpectError undefined. This type is incompatible with object type.
var result: Object = _.find('active', users);

/**
 * _.find examples from the official doc
 */
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(function(o) { return o.age < 40; }, users);

// The `_.matches` iteratee shorthand.
_.find({ 'age': 1, 'active': true }, users);

// The `_.matchesProperty` iteratee shorthand.
_.find(['active', false], users);

// The `_.property` iteratee shorthand.
_.find('active', users);


/**
 * _.groupBy
 */
var numbersGroupedByMathFloor = _.groupBy(Math.floor, [6.1, 4.2, 6.3]);
if (numbersGroupedByMathFloor[6]) {
  numbersGroupedByMathFloor[6][0] / numbersGroupedByMathFloor[6][1]
}
var stringsGroupedByLength = _.groupBy('length', ['one', 'two', 'three']);
if (stringsGroupedByLength[3]) {
  stringsGroupedByLength[3][0].toLowerCase();
}
var numbersObj: {[key: string]: number} = {a: 6.1, b: 4.2, c: 6.3};
var numbersGroupedByMathFloor2 = _.groupBy(Math.floor, numbersObj);
if (numbersGroupedByMathFloor2[6]) {
  numbersGroupedByMathFloor2[6][0] / numbersGroupedByMathFloor2[6][1]
}
var stringObj: {[key: string]: string} = {a: 'one', b: 'two', c: 'three'};
var stringsGroupedByLength2 = _.groupBy('length', stringObj);
if (stringsGroupedByLength2[3]) {
  stringsGroupedByLength2[3][0].toLowerCase();
}


/**
 * _.intersectionBy
 */
_.intersectionBy(Math.floor, [2.1, 1.2], [2.3, 3.4]);
_.intersectionBy('x', [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]);


/**
 * _.get
 */

// Object — examples from lodash docs
var exampleObjectForGetTest = { 'a': [{ 'b': { 'c': 3 } }] };
_.get('a[0].b.c', exampleObjectForGetTest);
_.get(['a', '0', 'b', 'c'], exampleObjectForGetTest);
_.getOr('default', 'a.b.c', exampleObjectForGetTest);

// Array — not documented, but _.get does support arrays
_.get('0', [1, 2, 3]);
_.get('[1]', ['foo', 'bar', 'baz']);
_.get('2', [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }]);
_.get('3', [[1, 2], [3, 4], [5, 6], [7, 8]]);
_.get('3')([[1, 2], [3, 4], [5, 6], [7, 8]]);

// First argument must be string when looking for array items by index
// $ExpectError number This type is incompatible with union: ?array type | string
_.get(0, [1, 2, 3]);


/**
 * _.keyBy
 */
_.keyBy(function(o) {
  return String.fromCharCode(o.code);
}, [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
]);
_.keyBy('dir', [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
]);
_.keyBy('dir')([
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
]);

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

var keyByTest_map2: KeyByTest$ByNumberMaybe<KeyByTest$Record> = _.keyBy('id', keyByTest_map)
var keyByTest_map3: KeyByTest$ByNumberMaybe<KeyByTest$Record> = _.keyBy('id')(keyByTest_map)


/**
 * _.map examples from the official doc
 */
function square(n) {
  return n * n;
}

_.map(square, [4, 8]);
_.map(square, { 'a': 4, 'b': 8 });

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The `_.property` iteratee shorthand.
_.map('user', users);


/**
 * _.pullAllBy
 */
_.pullAllBy('x', [{ 'x': 1 }, { 'x': 3 }], [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]);
_.pullAllBy('x')([{ 'x': 1 }, { 'x': 3 }])([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]);


/**
 * _.unionBy
 */
_.unionBy(Math.floor, [2.1], [1.2, 2.3]);
_.unionBy('x', [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]);


/**
 * _.uniqBy
 */
_.uniqBy(Math.floor, [2.1, 1.2, 2.3]);
_.uniqBy('x', [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }]);


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
_.isEqual({x: 1})({y: 2});

// $ExpectError function type expects no more than 2 arguments
_.isEqual(1, 2, 3);


/**
 * _.range
 */
_.range(0, 10)[4] == 4
_.range(0)(10)[4] == 4
// $ExpectError string. This type is incompatible with number
_.range(0, 'a');
// $ExpectError string cannot be compared to number
_.range(0, 10)[4] == 'a';


/**
 * _.sortedIndexBy
 */
_.sortedIndexBy(function(o) { return o.x; }, { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);
_.sortedIndexBy('x', { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);
_.sortedIndexBy('x')({ 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);


/**
 * _.sortedLastIndexBy
 */
_.sortedLastIndexBy(function(o) { return o.x; }, { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);
_.sortedLastIndexBy('x', { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);

/**
 * _.extend
 */
_.extend({a: 1}, {b: 2}).a
_.extend({a: 1})({b: 2}).a
_.extend({a: 1}, {b: 2}).b
// $ExpectError property `c`. Property not found in object literal
_.extend({a: 1}, {b: 2}).c
// $ExpectError property `c`. Poperty not found in object literal
_.assignIn({a: 1}, {b: 2}).c
// $ExpectError property `c`. Poperty not found in object literal
_.assignIn({a: 1})({b: 2}).c


/**
 * _.xorBy
 */
_.xorBy(Math.floor, [2.1, 1.2], [2.3, 3.4]);
_.xorBy('x', [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]);


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
boolFalse = _.isString(true);

// $ExpectError
boolFalse = _.isString('');
// $ExpectError
boolTrue = _.isString(undefined);


/**
 * _.find
 */
_.find(x => x == 1, [1, 2, 3]);
// $ExpectError number. This type is incompatible with function type.
_.find(1, [1, 2, 3]);


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
allNums = _.concat(nums, nums);
numsAndStrList = _.concat(nums, '123');
numsAndStrList = _.concat(nums)('123');
numsAndStrList = _.concat(nums)(['123']);
numsAndStrList = _.concat(nums, ['123', '456']);
numsAndStrList = _.concat(nums, [1,2,3, '456']);
mixedList = _.concat(nums, [[1,2,3], '456']);
(_.concat(1, 2): number[]);
(_.concat(1, [2]): number[]);
(_.concat([1], [2]): number[]);
(_.concat([1], 2): number[]);

// Array#map, lodash.map, lodash#map
nativeSquares = nums.map(function(num) {
  return num * num;
});
directSquares = _.map(function(num) {
  return num * num;
}, nums);

num = _.first(nums);

// return type of iterator is reflected in result and chain
nativeStrings = nums.map(function(num) {
  return JSON.stringify(num);
});
directStrings = _.map(function(num) {
  return JSON.stringify(num);
}, nums);

var obj = {a:1, b:2};
bool = _.conformsTo({
  a: function(x:number) {
    return true;
  },
}, obj);

num = _.defaultTo(2, undefined);
string = _.defaultTo('str', undefined);
bool = _.defaultTo('str', true);
string = _.defaultTo(true, 'str');

num = _.tap(function(n) { return false; }, 1);
bool = _.thru(function(n) { return false; }, 1);

var timesNums: number[];

timesNums = _.times((i: number) => i, 5);
timesNums = _.times((i: number) => i)(5);
// $ExpectError string. This type is incompatible with number
var strings : string[] = _.times((i) => i, 5);
timesNums = _.times(function(i: number) { return i + 1; }, 5);
// $ExpectError string. This type is incompatible with number
timesNums = _.times(function(i: number) { return JSON.stringify(i); }, 5);

// lodash.flatMap for collections and objects
// this arrow function needs a type annotation due to a bug in flow
// https://github.com/facebook/flow/issues/1948
_.flatMap((n): number[] => [n, n], [1, 2, 3]);
_.flatMap(n => [n, n], {a: 1, b: 2});

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

const ab = (a: number) => `${a}`;
const bc = (b: string) => ({b});
const cd = (c: {b: string}) => [c.b];
const pipedResult: string[] = _.pipe(ab, bc, cd)(1);
const composedResult: string[] = _.compose(cd, bc, ab)(1);
