// @flow

/**
 * Please add tests for new functions in the same order as they are in the main file and lodash documentation.
 */

import assignIn from "lodash/assignIn";
import attempt from "lodash/attempt";
import chunk from "lodash/chunk";
import clone from "lodash/clone";
import compact from "lodash/compact";
import concat from "lodash/concat";
import conformsTo from "lodash/conformsTo";
import countBy from "lodash/countBy";
import debounce from "lodash/debounce";
import defaultTo from "lodash/defaultTo";
import difference from "lodash/difference";
import differenceBy from "lodash/differenceBy";
import differenceWith from "lodash/differenceWith";
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
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import pickBy from "lodash/pickBy";
import pullAllBy from "lodash/pullAllBy";
import range from "lodash/range";
import sortedIndexBy from "lodash/sortedIndexBy";
import sortedLastIndexBy from "lodash/sortedLastIndexBy";
import sortedUniq from "lodash/sortedUniq";
import sortedUniqBy from "lodash/sortedUniqBy";
import take from "lodash/take";
import takeRight from "lodash/takeRight";
import tap from "lodash/tap";
import thru from "lodash/thru";
import times from "lodash/times";
import toPairs from "lodash/toPairs";
import toPairsIn from "lodash/toPairsIn";
import unionBy from "lodash/unionBy";
import uniqBy from "lodash/uniqBy";
import xorBy from "lodash/xorBy";
import zip from "lodash/zip";
import zipWith from "lodash/zipWith";

type ReadOnlyArray = $ReadOnlyArray<number>
const readOnlyArray : ReadOnlyArray = [1, 2, 3, 4];

type ReadOnlyObject = $ReadOnly<{ [string]: number, ... }>
const readOnlyObject : ReadOnlyObject = { [1]: 1, [2]: 2 };

// =====   Array   =====

/**
 * _.chunk
 */
chunk(readOnlyArray, 2);

/**
 * _.compact
 */
compact(readOnlyArray);

/**
 * _.concat
 */
concat(readOnlyArray, readOnlyArray, readOnlyArray);
// Copy pasted tests from iflow-lodash
const nums: number[] = [1, 2, 3, 4, 5, 6];
(concat(nums, "123", "456"): Array<number | string>);
(concat(nums, ["123", "456"]): Array<number | string>);
(concat(nums, [[1, 2, 3], "456"]): Array<number | string>);
(concat(nums, [[1, 2, 3], "456"]): Array<mixed>);

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
differenceBy(([2.1, 1.2]: $ReadOnlyArray<number>), [2.3, 3.4], Math.floor);
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
differenceBy(([2.1, 1.2]: $ReadOnlyArray<number>), [2.3, 3.4], Math.floor);
type A = {| a: 1 |};
type B = {| b: 1 |};
differenceBy(([{ a: 1 }, { a: 1 }]: $ReadOnlyArray<A>), ([{ b: 1 }, { b: 1 }]: $ReadOnlyArray<B>), (x: A | B) => {
  return x.a || x.b;
});

/**
 * _.differenceWith
 */
differenceWith(([{ a: 1 }, { a: 1 }]: $ReadOnlyArray<A>), ([{ b: 1 }, { b: 1 }]: $ReadOnlyArray<B>), (x: A, y: B) => {
  return x.a === y.b;
});

/**
 * _.intersectionBy
 */
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");

/**
 * _.pullAllBy
 */
pullAllBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], "x");

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
 * _.take / _.takeRight
 */
var taken: string[];
taken = take((["abc", "123"]: $ReadOnlyArray<string>), 3);
taken = takeRight((["abc", "123"]: $ReadOnlyArray<string>));

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
zipWith(["a", "b", "c"], [1, 2, 3], (str: string, num) => ({ [str]: num }));
zipWith((["a", "b", "c"]: $ReadOnlyArray<string>), ([1, 2, 3]: $ReadOnlyArray<number>), (str: string, num) => ({ [str]: num }));
zipWith(readOnlyArray, readOnlyArray, readOnlyArray);
zipWith(readOnlyArray, readOnlyArray, readOnlyArray, (a: number, b: number, c: number) => [a, b, c]);
zipWith(readOnlyArray, readOnlyArray, readOnlyArray, readOnlyArray);
zipWith(readOnlyArray, readOnlyArray, readOnlyArray, readOnlyArray, (a: number, b: number, c: number, d: number) => [a, b, c, d]);
// $ExpectError `x` should be a `string`, `y` a `number`
zipWith(["a", "b", "c"], [1, 2, 3]).map(([x, y]) => x * y);




// =====   Collection   =====

/**
 * _.countBy
 */
(countBy([6.1, 4.2, 6.3], Math.floor): { [string]: number, ... });
(countBy(["one", "two", "three"], "length"): { [string]: number, ... });
// $ExpectError
(countBy(["one", "two", "three"], "length"): { [string]: string, ... });

/**
 * _.each
 */
each(([1, 2]: $ReadOnlyArray<number>), (item: number) => false);
each(readOnlyObject, (item: number) => false);

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
const v: { [O]: number, ... } = { x: 1, y: 2 };
find(v, { x: 3 });

(find([1, 2, 3], x => x == 1): void | number);
// $ExpectError number. This type is incompatible with function type.
(find([1, 2, 3], 1): void | number);

// _.find examples from the official doc
const users = [
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
 * _.flatMap
 */
// this arrow function needs a type annotation due to a bug in flow: https://github.com/facebook/flow/issues/1948
flatMap([1, 2, 3], (n): number[] => [n, n]);
flatMap({ a: 1, b: 2 }, n => [n, n]);

/**
 * _.forEach
 */
forEach(([1, 2]: $ReadOnlyArray<number>), (item: number) => false);

/**
 * _.groupBy
 */
const numbersGroupedByMathFloor = groupBy([6.1, 4.2, 6.3], Math.floor);
if (numbersGroupedByMathFloor[6]) {
  numbersGroupedByMathFloor[6][0] / numbersGroupedByMathFloor[6][1];
}
const stringsGroupedByLength = groupBy(["one", "two", "three"], "length");
if (stringsGroupedByLength[3]) {
  stringsGroupedByLength[3][0].toLowerCase();
}
const numbersObj: { [key: string]: number, ... } = { a: 6.1, b: 4.2, c: 6.3 };
const numbersGroupedByMathFloor2 = groupBy(numbersObj, Math.floor);
if (numbersGroupedByMathFloor2[6]) {
  numbersGroupedByMathFloor2[6][0] / numbersGroupedByMathFloor2[6][1];
}
const stringObj: { [key: string]: string, ... } = { a: "one", b: "two", c: "three" };
const stringsGroupedByLength2 = groupBy(stringObj, "length");
if (stringsGroupedByLength2[3]) {
  stringsGroupedByLength2[3][0].toLowerCase();
}

/**
 * _.keyBy
 */
keyBy([{ dir: "left", code: 97 }, { dir: "right", code: 100 }], function(o) {
  return String.fromCharCode(o.code);
});
keyBy([{ dir: "left", code: 97 }, { dir: "right", code: 100 }], "dir");

// Example of keying a map of objects by a number type
type KeyByTest$ByNumber<T: Object> = { [number]: T, ... };
type KeyByTest$ByNumberMaybe<T: ?Object> = { [number]: T, ... };
type KeyByTest$Record = { id: number, ... };
const keyByTest_array: Array<KeyByTest$Record> = [
  { id: 4 },
  { id: 4 },
  { id: 7 }
];
const keyByTest_map: KeyByTest$ByNumber<KeyByTest$Record> = {
  [keyByTest_array[0].id]: keyByTest_array[0],
  [keyByTest_array[1].id]: keyByTest_array[1],
  [keyByTest_array[2].id]: keyByTest_array[2]
};
(keyBy(keyByTest_map, "id"): KeyByTest$ByNumberMaybe<KeyByTest$Record>);

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

// The `_.property` iteratee shorthand.
map([{ user: "barney" }, { user: "fred" }], "user");

// Array#map, lodash.map, lodash#map
(nums.map(num => num * num): number[]);
(map(nums, num => num * num): number[]);

// return type of iterator is reflected in result and chain
(nums.map(num => JSON.stringify(num)): string[]);
(map(nums, num => JSON.stringify(num)): string[]);

/**
 * _.orderBy
 */
(orderBy([{a: 1, b: 2}, {a: 2, b: 1}, {a: 3, b: 0}], ['a']): Array<{
  a: number,
  b: number,
  ...
}>);
(orderBy([{a: 1, b: 2}, {a: 2, b: 1}, {a: 3, b: 0}], [x => x.a]): Array<{
  a: number,
  b: number,
  ...
}>);
(orderBy({[0]: {a: 1, b: 2}, [2]: {a: 2, b: 1}, [1]: {a: 3, b: 0}}, ['a']): Array<{
  a: number,
  b: number,
  ...
}>);
(orderBy({[0]: {a: 1, b: 2}, [2]: {a: 2, b: 1}, [1]: {a: 3, b: 0}}, [x => x.a]): Array<{
  a: number,
  b: number,
  ...
}>);

// =====   Date   =====



// =====   Function   =====

/**
 * _.debounce
 */
var debounced = debounce((a: number) => "foo");
debounced(1);
debounced.cancel();
debounced.flush();
// $ExpectError string is incompatible with number
debounced("a");

/**
 * _.memoize
 */
var memoized: (a: number) => string = memoize((a: number) => "foo");
// $ExpectError memoize retains type information
memoized = memoize(() => {});

// =====   Lang   =====

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
 * _.conformsTo
 */
(conformsTo({ a: 1, b: 2 }, {
  a: function(x: number) {
    return true;
  }
}): boolean);




// =====   Math   =====



// =====   Number   =====



// =====   Object   =====

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
 * _.omitBy
 */
(omitBy({ a: 2, b: 3, c: 4 }, num => num % 2): { [prop: string]: number, ... });
(omitBy(null, num => num % 2): {...});
(omitBy(undefined, num => num % 2): {...});
(omitBy({ [1]: 1, [2]: 2 }, num => num === 2): { [prop: number]: number, ... });

/**
 * _.pick
 */
(pick({ a: 2, b: 3, c: 4 }, 'a'): { [prop: string]: number, ... });
(pick(null, 'a'): {...});
(pick(undefined, 'a'): {...});
(pick({ [1]: 1, [2]: 2 }, 'a'): { [prop: number]: number, ... });

// $ExpectError
pick({ a: 2 }, 1);

/**
 * _.pickBy
 */
(pickBy({ a: 2, b: 3, c: 4 }, num => num % 2): { [prop: string]: number, ... });
(pickBy(null, num => num % 2): {...});
(pickBy(undefined, num => num % 2): {...});
(pickBy({ [1]: 1, [2]: 2 }, num => num === 2): { [prop: number]: number, ... });
(pickBy(readOnlyObject, num => num === 2): { [prop: number]: number, ... });

/**
 * _.toPairs / _.toPairsIn
 */
var pairs: [string, number][];
pairs = toPairs({ a: 12, b: 100 });
pairs = toPairsIn({ a: 12, b: 100 });


// =====   Seq   =====

/**
 * _.tap
 */
(tap(1, n => false): number);

/**
 * _.thru
 */
(thru(1, n => false): boolean);

// =====   String   =====



// =====   Util   =====

/**
   * _.attempt
 */
attempt(() => void 0);
attempt(x => x);
attempt(x => x, "first arg");
attempt((x, y, z) => {}, null, {}, []);

/**
 * _.defaultTo
 */
(defaultTo(undefined, 2): number);
(defaultTo(undefined, "str"): string);
(defaultTo(true, "str"): boolean);
(defaultTo("str", true): string);

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
 * _.range
 */
range(0, 10)[4] == 4;
// $ExpectError string. This type is incompatible with number
range(0, "a");
// $ExpectError string cannot be compared to number
range(0, 10)[4] == "a";

/**
 * _.times
 */
var timesNums: number[];
timesNums = times(5);
// $ExpectError string. This type is incompatible with number
(times(5): string[]);
timesNums = times(5, function(i: number) {
  return i + 1;
});
// $ExpectError string. This type is incompatible with number
timesNums = times(5, function(i: number) {
  return JSON.stringify(i);
});

