// @flow
import assignIn from "lodash/assignIn";
import attempt from "lodash/attempt";
import clone from "lodash/clone";
import concat from "lodash/concat";
import conformsTo from "lodash/conformsTo";
import countBy from "lodash/countBy";
import debounce from "lodash/debounce";
import defaultTo from "lodash/defaultTo";
import difference from "lodash/difference";
import differenceBy from "lodash/differenceBy";
import each from "lodash/each";
import extend from "lodash/extend";
import find from "lodash/find";
import first from "lodash/first";
import flatMap from "lodash/flatMap";
import forEach from "lodash/forEach";
import get from "lodash/get";
import groupBy from "lodash/groupBy";
import intersectionBy from "lodash/intersectionBy";
import isEqual from "lodash/isEqual";
import isString from "lodash/isString";
import keyBy from "lodash/keyBy";
import map from "lodash/map";
import memoize from "lodash/memoize";
import noop from "lodash/noop";
import omitBy from "lodash/omitBy";
import pickBy from "lodash/pickBy";
import pullAllBy from "lodash/pullAllBy";
import range from "lodash/range";
import sortedIndexBy from "lodash/sortedIndexBy";
import sortedLastIndexBy from "lodash/sortedLastIndexBy";
import sortedUniq from "lodash/sortedUniq";
import sortedUniqBy from "lodash/sortedUniqBy";
import tap from "lodash/tap";
import thru from "lodash/thru";
import times from "lodash/times";
import toPairs from "lodash/toPairs";
import toPairsIn from "lodash/toPairsIn";
import unionBy from "lodash/unionBy";
import uniqBy from "lodash/uniqBy";
import values from "lodash/values";
import xorBy from "lodash/xorBy";
import zip from "lodash/zip";
import zipWith from "lodash/zipWith";

/**
 * _.attempt
 */
attempt(() => void 0);
attempt(x => x);
attempt(x => x, "first arg");
attempt((x, y, z) => {}, null, {}, []);

/**
 * _.countBy
 */
countBy([6.1, 4.2, 6.3], Math.floor);
countBy(["one", "two", "three"], "length");

/**
 * _.difference
 */
difference(
  (["a", "b"]: $ReadOnlyArray<string>),
  (["b"]: $ReadOnlyArray<string>)
);
difference(
  (["a", "b"]: $ReadOnlyArray<string>),
  (["b"]: $ReadOnlyArray<string>),
  (["a"]: $ReadOnlyArray<string>)
);

/**
 * _.differenceBy
 */
differenceBy(([2.1, 1.2]: $ReadOnlyArray<*>), [2.3, 3.4], Math.floor);
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");

/**
 * _.differenceBy
 */
differenceBy(([2.1, 1.2]: $ReadOnlyArray<*>), [2.3, 3.4], Math.floor);

/**
 * _.each
 */
each(([1, 2]: $ReadOnlyArray<number>), (item: number) => false);

/**
 * _.find
 */
find([1, 2, 3], x => x * 1 == 3);
find([1, 2, 3], x => x == 2, 1);
// $ExpectError number cannot be compared to string
find([1, 2, 3], x => x == "a");
// $ExpectError number. This type is incompatible with function type.
find([1, 2, 3], 1);
// $ExpectError property `y`. Property not found in object literal
find([{ x: 1 }, { x: 2 }, { x: 3 }], v => v.y == 3);
find([{ x: 1 }, { x: 2 }, { x: 3 }], v => v.x == 3);
find({ x: 1, y: 2 }, (a: number, b: string) => a);
find({ x: 1, y: 2 }, { x: 3 });
find((["a", "b"]: $ReadOnlyArray<string>), "c");
// opaque types are allowed as keys of objects
opaque type O = string;
const v: { [O]: number } = { x: 1, y: 2 };
find(v, { x: 3 });

/**
 * _.find examples from the official doc
 */
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true }
];

find(users, function(o) {
  return o.age < 40;
});

// The `_.matches` iteratee shorthand.
find(users, { age: 1, active: true });

// The `_.matchesProperty` iteratee shorthand.
find(users, ["active", false]);

// The `_.property` iteratee shorthand.
find(users, "active");

/**
 * _.forEach
 */
forEach(([1, 2]: $ReadOnlyArray<number>), (item: number) => false);

/**
 * _.groupBy
 */
var numbersGroupedByMathFloor = groupBy([6.1, 4.2, 6.3], Math.floor);
if (numbersGroupedByMathFloor[6]) {
  numbersGroupedByMathFloor[6][0] / numbersGroupedByMathFloor[6][1];
}
var stringsGroupedByLength = groupBy(["one", "two", "three"], "length");
if (stringsGroupedByLength[3]) {
  stringsGroupedByLength[3][0].toLowerCase();
}
var numbersObj: { [key: string]: number } = { a: 6.1, b: 4.2, c: 6.3 };
var numbersGroupedByMathFloor2 = groupBy(numbersObj, Math.floor);
if (numbersGroupedByMathFloor2[6]) {
  numbersGroupedByMathFloor2[6][0] / numbersGroupedByMathFloor2[6][1];
}
var stringObj: { [key: string]: string } = { a: "one", b: "two", c: "three" };
var stringsGroupedByLength2 = groupBy(stringObj, "length");
if (stringsGroupedByLength2[3]) {
  stringsGroupedByLength2[3][0].toLowerCase();
}

/**
 * _.intersectionBy
 */
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");

/**
 * _.get
 */

// Object — examples from lodash docs
var exampleObjectForGetTest = { a: [{ b: { c: 3 } }] };
get(exampleObjectForGetTest, "a[0].b.c");
get(exampleObjectForGetTest, ["a", "0", "b", "c"]);
get(exampleObjectForGetTest, "a.b.c", "default");

// Array — not documented, but _.get does support arrays
get([1, 2, 3], "0");
get([1, 2, 3], 0);
get([1, 2, 3], [0]);
get(["foo", "bar", "baz"], "[1]");
get([{ a: "foo" }, { b: "bar" }, { c: "baz" }], "2");
get([[1, 2], [3, 4], [5, 6], [7, 8]], "3");

// Nil - it is safe to perform on nil root values, just like nil values along the "get" path
get(null, "thing");
get(undefined, "data");

/**
 * _.keyBy
 */
keyBy([{ dir: "left", code: 97 }, { dir: "right", code: 100 }], function(o) {
  return String.fromCharCode(o.code);
});
keyBy([{ dir: "left", code: 97 }, { dir: "right", code: 100 }], "dir");

// Example of keying a map of objects by a number type
type KeyByTest$ByNumber<T: Object> = { [number]: T };
type KeyByTest$ByNumberMaybe<T: ?Object> = { [number]: T };
type KeyByTest$Record = { id: number };
var keyByTest_array: Array<KeyByTest$Record> = [
  { id: 4 },
  { id: 4 },
  { id: 7 }
];
var keyByTest_map: KeyByTest$ByNumber<KeyByTest$Record> = {
  [keyByTest_array[0].id]: keyByTest_array[0],
  [keyByTest_array[1].id]: keyByTest_array[1],
  [keyByTest_array[2].id]: keyByTest_array[2]
};

var keyByTest_map2: KeyByTest$ByNumberMaybe<KeyByTest$Record> = keyBy(
  keyByTest_map,
  "id"
);

/**
 * _.map examples from the official doc
 */
function square(n) {
  return n * n;
}

map([4, 8], square);
map({ a: 4, b: 8 }, square);

//accepts tuple types

const tuple: [number, number] = [1, 2];
map(tuple, val => val + 2);
//$ExpectError cannot push to tuple
map(tuple, (val, nothing, tupleArray) => tupleArray.push(123));

var users = [{ user: "barney" }, { user: "fred" }];

// The `_.property` iteratee shorthand.
map(users, "user");

/**
 * _.pullAllBy
 */
pullAllBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], "x");

/**
 * _.unionBy
 */
unionBy([2.1], [1.2, 2.3], Math.floor);
unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");

/**
 * _.uniqBy
 */
uniqBy([2.1, 1.2, 2.3], Math.floor);
uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x");

/**
 * _.clone
 */
clone({ a: 1 }).a == 1;
// $ExpectError property `b`. Property not found in object literal
clone({ a: 1 }).b == 1;
// $ExpectError number. This type is incompatible with function type.
clone({ a: 1 }).a == "c";

/**
 * _.isEqual
 */
isEqual("a", "b");
isEqual({ x: 1 }, { y: 2 });

// Flow considers this compatible with isEqual(a: any, b: any).
// Reasonable people disagree about whether this should be considered a legal call.
// See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
// and https://github.com/facebook/flow/issues/956
isEqual(1);

// $ExpectError function type expects no more than 2 arguments
isEqual(1, 2, 3);

/**
 * _.range
 */
range(0, 10)[4] == 4;
// $ExpectError string. This type is incompatible with number
range(0, "a");
// $ExpectError string cannot be compared to number
range(0, 10)[4] == "a";

/**
 * _.sortedIndexBy
 */
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, function(o) {
  return o.x;
});
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, "x");

/**
 * _.sortedLastIndexBy
 */
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, function(o) {
  return o.x;
});
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, "x");

/**
 * _.sortedUniq
 */
sortedUniq([1, 2, 2]);
sortedUniq(["a", "b", "b"]);

/**
 * _.sortedUniqBy
 */
sortedUniqBy([1.2, 2.1, 2.3], Math.floor);
sortedUniqBy([{ x: 1 }, { x: 1 }, { x: 2 }], "x");

/**
 * _.extend
 */
extend({ a: 1 }, { b: 2 }).a;
extend({ a: 1 }, { b: 2 }).b;
// $ExpectError property `c`. Property not found in object literal
extend({ a: 1 }, { b: 2 }).c;
// $ExpectError property `c`. Poperty not found in object literal
assignIn({ a: 1 }, { b: 2 }).c;

/**
 * _.xorBy
 */
xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");

/**
 * _.zip
 */
zip(["a", "b", "c"], ["d", "e", "f"])[0].length;
zip(["a", "b", "c"], [1, 2, 3])[0].length;
zip(["a", "b", "c"], [1, 2, 3])[0][0] + "a";
zip(["a", "b", "c"], [1, 2, 3])[0][1] * 10;
// $ExpectError `x` property not found in Array
zip([{ x: 1 }], [{ x: 2, y: 1 }])[0].x;
// $ExpectError `y` property not found in object literal
zip([{ x: 1 }], [{ x: 2, y: 1 }])[0][0].y;
zip([{ x: 1 }], [{ x: 2, y: 1 }])[0][1].y;
// $ExpectError Flow could potentially catch this -- the tuple only has two elements.
zip([{ x: 1 }], [{ x: 2, y: 1 }])[0][2];

/**
 * _.zipWith
 */
zipWith(["a", "b", "c"], [1, 2, 3], (str, num) => ({ [str]: num }));
// $ExpectError `x` should be a `string`, `y` a `number`
zipWith(["a", "b", "c"], [1, 2, 3]).map(([x, y]) => x * y);

/**
 * _.isString
 */

var boolTrue: true;
var boolFalse: false;

boolTrue = isString("foo");
boolFalse = isString([""]);
boolFalse = isString({});
boolFalse = isString(5);
boolFalse = isString(function(f) {
  return f;
});
boolFalse = isString();
boolFalse = isString(true);

// $ExpectError
boolFalse = isString("");
// $ExpectError
boolTrue = isString(undefined);

/**
 * _.find
 */
(find([1, 2, 3], x => x == 1): void | number);
// $ExpectError number. This type is incompatible with function type.
(find([1, 2, 3], 1): void | number);

// Copy pasted tests from iflow-lodash
var nums: number[] = [1, 2, 3, 4, 5, 6];
var num: number;
var string: string;
var bool: boolean;

var nativeSquares: number[];
var directSquares: number[];

var nativeStrings: string[];
var directStrings: string[];

var allNums: number[];
var numsAndStrList: Array<number | string>;
var mixedList: Array<mixed>;
allNums = concat(nums, nums, nums);
numsAndStrList = concat(nums, "123", "456");
numsAndStrList = concat(nums, ["123", "456"]);
numsAndStrList = concat(nums, [[1, 2, 3], "456"]);
mixedList = concat(nums, [[1, 2, 3], "456"]);

// Array#map, lodash.map, lodash#map
nativeSquares = nums.map(function(num) {
  return num * num;
});
directSquares = map(nums, function(num) {
  return num * num;
});

num = first(nums);

// return type of iterator is reflected in result and chain
nativeStrings = nums.map(function(num) {
  return JSON.stringify(num);
});
directStrings = map(nums, function(num) {
  return JSON.stringify(num);
});

var obj = { a: 1, b: 2 };
bool = conformsTo(obj, {
  a: function(x: number) {
    return true;
  }
});

num = defaultTo(undefined, 2);
string = defaultTo(undefined, "str");
bool = defaultTo(true, "str");
string = defaultTo("str", true);

num = tap(1, function(n) {
  return false;
});
bool = thru(1, function(n) {
  return false;
});

var timesNums: number[];

timesNums = times(5);
// $ExpectError string. This type is incompatible with number
var strings: string[] = times(5);
timesNums = times(5, function(i: number) {
  return i + 1;
});
// $ExpectError string. This type is incompatible with number
timesNums = times(5, function(i: number) {
  return JSON.stringify(i);
});

// lodash.flatMap for collections and objects
// this arrow function needs a type annotation due to a bug in flow
// https://github.com/facebook/flow/issues/1948
flatMap([1, 2, 3], (n): number[] => [n, n]);
flatMap({ a: 1, b: 2 }, n => [n, n]);

/**
 * _.noop
 */
noop();
noop(1);
noop("a", 2, [], null);
(noop: string => void);
(noop: (number, string) => void);
// $ExpectError functions are contravariant in return types
(noop: string => string);

/**
 * _.memoize
 */
var memoized: (a: number) => string = memoize((a: number) => "foo");
// $ExpectError memoize retains type information
memoized = memoize(() => {});

/**
 * _.debounce
 */
var debounced: (a: number) => string = debounce((a: number) => "foo");
// $ExpectError debounce retains type information
debounced = debounce(() => {});

/**
 * _.toPairs / _.toPairsIn
 */
var pairs: [string, number][];
pairs = toPairs({ a: 12, b: 100 });
pairs = toPairsIn({ a: 12, b: 100 });

/**
 * _.pickBy
 */
(pickBy({ a: 2, b: 3, c: 4 }, num => num % 2): { [prop: string]: number });
(pickBy(null, num => num % 2): {});
(pickBy(undefined, num => num % 2): {});
(pickBy({ [1]: 1, [2]: 2 }, num => num === 2): { [prop: number]: number });

/**
 * _.omitBy
 */
(omitBy({ a: 2, b: 3, c: 4 }, num => num % 2): { [prop: string]: number });
(omitBy(null, num => num % 2): {});
(omitBy(undefined, num => num % 2): {});
(omitBy({ [1]: 1, [2]: 2 }, num => num === 2): { [prop: number]: number });

/**
 * _.values
 */
// $ExpectError values retains the type of value
(values(({ a: 2 }: {[string]: number })): Array<string>);
