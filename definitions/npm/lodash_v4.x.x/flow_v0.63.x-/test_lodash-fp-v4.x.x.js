// @flow

import assignIn from 'lodash/fp/assignIn';
import extend from 'lodash/fp/extend';
import sortedLastIndexBy from 'lodash/fp/sortedLastIndexBy';
import sortedIndexBy from 'lodash/fp/sortedIndexBy';
import range from 'lodash/fp/range';
import isEqual from 'lodash/fp/isEqual';
import clone from 'lodash/fp/clone';
import uniqBy from 'lodash/fp/uniqBy';
import unionBy from 'lodash/fp/unionBy';
import pullAllBy from 'lodash/fp/pullAllBy';
import map from 'lodash/fp/map';
import keyBy from 'lodash/fp/keyBy';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import intersectionBy from 'lodash/fp/intersectionBy';
import groupBy from 'lodash/fp/groupBy';
import findFrom from 'lodash/fp/findFrom';
import find from 'lodash/fp/find';
import differenceBy from 'lodash/fp/differenceBy';
import countBy from 'lodash/fp/countBy';
import attempt from 'lodash/fp/attempt';
import filter from 'lodash/fp/filter';
import xorBy from 'lodash/fp/xorBy';
import zip from 'lodash/fp/zip';
import isString from 'lodash/fp/isString';
import concat from 'lodash/fp/concat';
import first from 'lodash/fp/first';
import conformsTo from 'lodash/fp/conformsTo';
import defaultTo from 'lodash/fp/defaultTo';
import tap from 'lodash/fp/tap';
import thru from 'lodash/fp/thru';
import times from 'lodash/fp/times';
import flatMap from 'lodash/fp/flatMap';
import noop from 'lodash/fp/noop';
import pipe from 'lodash/fp/pipe';
import compose from 'lodash/fp/compose';
import includes from 'lodash/fp/includes';

filter('x', [{x: 1}, {x: 2}]);
filter('x')([{x: 1}, {x: 2}]);
filter('x', {a: {x: 1}, b: {x: 2}});
filter('x')({a: {x: 1}, b: {x: 2}});
filter((v: {y?: number}) => v.y)({a: {x: 1}, b: {x: 2}})[0].x;
// $ExpectError
filter((v: {y: number}) => v.y)({a: {x: 1}, b: {x: 2}});

/**
 * attempt
 */
attempt(() => void 0)
attempt(x => x)
attempt((x, y, z) => {})

/**
 * countBy
 */
countBy(Math.floor, [6.1, 4.2, 6.3]);
countBy('length', ['one', 'two', 'three']);
countBy('length')(['one', 'two', 'three']);
countBy('length')({one: 'one', two: 'two', three: 'three'});


/**
 * differenceBy
 */
differenceBy(Math.floor, ([2.1, 1.2]: $ReadOnlyArray<*>), [2.3, 3.4]);
differenceBy('x', [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]);
differenceBy('x')([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]);


/**
 * find
 */
find(x => x * 1 == 3, [1, 2, 3]);
findFrom(x => x == 2, 1, [1, 2, 3]);
// $ExpectError number cannot be compared to string
find(x => x == 'a', [1, 2, 3]);
// $ExpectError number. This type is incompatible with function type.
find(1, [1, 2, 3]);
// $ExpectError property `y`. Property not found in object literal
find(v => v.y == 3, [{x:1}, {x:2}, {x:3}]);
find(v => v.x == 3, [{x:1}, {x:2}, {x:3}]);
find((a: number, b: string) => a, {x: 1, y: 2});
find({ x: 3 }, {x: 1, y: 2});
find({ x: 3 })({x: 1, y: 2});

// $ExpectError undefined. This type is incompatible with object type.
var result: Object = find('active', users);

/**
 * find examples from the official doc
 */
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

find(function(o) { return o.age < 40; }, users);

// The `matches` iteratee shorthand.
find({ 'age': 1, 'active': true }, users);

// The `matchesProperty` iteratee shorthand.
find(['active', false], users);

// The `property` iteratee shorthand.
find('active', users);


/**
 * groupBy
 */
var numbersGroupedByMathFloor = groupBy(Math.floor, [6.1, 4.2, 6.3]);
if (numbersGroupedByMathFloor[6]) {
  numbersGroupedByMathFloor[6][0] / numbersGroupedByMathFloor[6][1]
}
var stringsGroupedByLength = groupBy('length', ['one', 'two', 'three']);
if (stringsGroupedByLength[3]) {
  stringsGroupedByLength[3][0].toLowerCase();
}
var numbersObj: {[key: string]: number} = {a: 6.1, b: 4.2, c: 6.3};
var numbersGroupedByMathFloor2 = groupBy(Math.floor, numbersObj);
if (numbersGroupedByMathFloor2[6]) {
  numbersGroupedByMathFloor2[6][0] / numbersGroupedByMathFloor2[6][1]
}
var stringObj: {[key: string]: string} = {a: 'one', b: 'two', c: 'three'};
var stringsGroupedByLength2 = groupBy('length', stringObj);
if (stringsGroupedByLength2[3]) {
  stringsGroupedByLength2[3][0].toLowerCase();
}


/**
 * intersectionBy
 */
intersectionBy(Math.floor, [2.1, 1.2], [2.3, 3.4]);
intersectionBy('x', [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]);


/**
 * get
 */

// Object — examples from lodash docs
var exampleObjectForGetTest = { 'a': [{ 'b': { 'c': 3 } }] };
get('a[0].b.c', exampleObjectForGetTest);
get(['a', '0', 'b', 'c'], exampleObjectForGetTest);
getOr('default', 'a.b.c', exampleObjectForGetTest);

// Array — not documented, but get does support arrays
get('0', [1, 2, 3]);
get(0, [1, 2, 3]);
get([0], [1, 2, 3]);
get('[1]', ['foo', 'bar', 'baz']);
get('2', [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }]);
get('3', [[1, 2], [3, 4], [5, 6], [7, 8]]);
get('3')([[1, 2], [3, 4], [5, 6], [7, 8]]);

// Nil - it is safe to perform on nil root values, just like nil values along the "get" path
get('thing', null);
get('data', undefined);
getOr('default', 'stuff', null);
getOr(12345, 'info', undefined);

/**
 * keyBy
 */
keyBy(function(o) {
  return String.fromCharCode(o.code);
}, [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
]);
keyBy('dir', [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
]);
keyBy('dir')(([
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
]: $ReadOnlyArray<*>));

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

var keyByTest_map2: KeyByTest$ByNumberMaybe<KeyByTest$Record> = keyBy('id', keyByTest_map)
var keyByTest_map3: KeyByTest$ByNumberMaybe<KeyByTest$Record> = keyBy('id')(keyByTest_map)


/**
 * map examples from the official doc
 */
function square(n) {
  return n * n;
}

map(square, [4, 8]);
map(square, { 'a': 4, 'b': 8 });

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The `property` iteratee shorthand.
map('user', users);


/**
 * pullAllBy
 */
pullAllBy('x', [{ 'x': 1 }, { 'x': 3 }], [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]);
pullAllBy('x')([{ 'x': 1 }, { 'x': 3 }])([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]);


/**
 * unionBy
 */
unionBy(Math.floor, [2.1], [1.2, 2.3]);
unionBy('x', [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]);


/**
 * uniqBy
 */
uniqBy(Math.floor, [2.1, 1.2, 2.3]);
uniqBy('x', [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }]);


/**
 * clone
 */
clone({a: 1}).a == 1;
// $ExpectError property `b`. Property not found in object literal
clone({a: 1}).b == 1
// $ExpectError number. This type is incompatible with function type.
clone({a: 1}).a == 'c';

/**
 * isEqual
 */
isEqual('a', 'b');
isEqual({x: 1}, {y: 2});
isEqual({x: 1})({y: 2});

// $ExpectError function type expects no more than 2 arguments
isEqual(1, 2, 3);


/**
 * range
 */
range(0, 10)[4] == 4
range(0)(10)[4] == 4
// $ExpectError string. This type is incompatible with number
range(0, 'a');
// $ExpectError string cannot be compared to number
range(0, 10)[4] == 'a';


/**
 * sortedIndexBy
 */
sortedIndexBy(function(o) { return o.x; }, { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);
sortedIndexBy('x', { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);
sortedIndexBy('x')({ 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);


/**
 * sortedLastIndexBy
 */
sortedLastIndexBy(function(o) { return o.x; }, { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);
sortedLastIndexBy('x', { 'x': 4 }, [{ 'x': 4 }, { 'x': 5 }]);

/**
 * extend
 */
extend({a: 1}, {b: 2}).a
extend({a: 1})({b: 2}).a
extend({a: 1}, {b: 2}).b
// $ExpectError property `c`. Property not found in object literal
extend({a: 1}, {b: 2}).c
// $ExpectError property `c`. Poperty not found in object literal
assignIn({a: 1}, {b: 2}).c
// $ExpectError property `c`. Poperty not found in object literal
assignIn({a: 1})({b: 2}).c


/**
 * xorBy
 */
xorBy(Math.floor, [2.1, 1.2], [2.3, 3.4]);
xorBy('x', [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]);


/**
 * zip
 */
zip(['a', 'b', 'c'], ['d', 'e', 'f'])[0].length;
zip(['a', 'b', 'c'], [1, 2, 3])[0].length;
zip(['a', 'b', 'c'], [1, 2, 3])[0][0] + 'a'
zip(['a', 'b', 'c'], [1, 2, 3])[0][1] * 10
// $ExpectError `x` property not found in Array
zip([{x:1}], [{x:2,y:1}])[0].x
// $ExpectError `y` property not found in object literal
zip([{x:1}], [{x:2,y:1}])[0][0].y
zip([{x:1}], [{x:2,y:1}])[0][1].y
// $ExpectError Flow could potentially catch this -- the tuple only has two elements.
zip([{x:1}], [{x:2,y:1}])[0][2]

/**
 * isString
 */

var boolTrue: true;
var boolFalse: false;

boolTrue  = isString('foo');
boolFalse = isString(['']);
boolFalse = isString({});
boolFalse = isString(5);
boolFalse = isString(function(f) { return f });
boolFalse = isString();
boolFalse = isString(true);

// $ExpectError
boolFalse = isString('');
// $ExpectError
boolTrue = isString(undefined);


/**
 * find
 */
find(x => x == 1, [1, 2, 3]);
// $ExpectError number. This type is incompatible with function type.
find(1, [1, 2, 3]);


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
allNums = concat(nums, nums);
numsAndStrList = concat(nums, '123');
numsAndStrList = concat(nums)('123');
numsAndStrList = concat(nums)(['123']);
numsAndStrList = concat(nums, ['123', '456']);
numsAndStrList = concat(nums, [1,2,3, '456']);
mixedList = concat(nums, [[1,2,3], '456']);
(concat(1, 2): number[]);
(concat(1, [2]): number[]);
(concat([1], [2]): number[]);
(concat([1], 2): number[]);

// Array#map, lodash.map, lodash#map
nativeSquares = nums.map(function(num) {
  return num * num;
});
directSquares = map(function(num) {
  return num * num;
}, nums);

num = first(nums);

// return type of iterator is reflected in result and chain
nativeStrings = nums.map(function(num) {
  return JSON.stringify(num);
});
directStrings = map(function(num) {
  return JSON.stringify(num);
}, nums);

var obj = {a:1, b:2};
bool = conformsTo({
  a: function(x:number) {
    return true;
  },
}, obj);

num = defaultTo(2, undefined);
string = defaultTo('str', undefined);
bool = defaultTo('str', true);
string = defaultTo(true, 'str');

num = tap(function(n) { return false; }, 1);
bool = thru(function(n) { return false; }, 1);

var timesNums: number[];

timesNums = times((i: number) => i, 5);
timesNums = times((i: number) => i)(5);
// $ExpectError string. This type is incompatible with number
var strings : string[] = times((i) => i, 5);
timesNums = times(function(i: number) { return i + 1; }, 5);
// $ExpectError string. This type is incompatible with number
timesNums = times(function(i: number) { return JSON.stringify(i); }, 5);

// lodash.flatMap for collections and objects
// this arrow function needs a type annotation due to a bug in flow
// https://github.com/facebook/flow/issues/1948
flatMap((n): number[] => [n, n], [1, 2, 3]);
flatMap(n => [n, n], {a: 1, b: 2});

/**
 * noop
 */
noop();
noop(1);
noop('a', 2, [], null);
(noop: (string) => void);
(noop: (number, string) => void);
// $ExpectError functions are contravariant in return types
(noop: (string) => string);

const ab = (a: number) => `${a}`;
const bc = (b: string) => ({b});
const cd = (c: {b: string}) => [c.b];
const pipedResult: string[] = pipe(ab, bc, cd)(1);
const composedResult: string[] = compose(cd, bc, ab)(1);

/**
 * includes
 */
includes("test")({ a: "test2", b: "test" });
