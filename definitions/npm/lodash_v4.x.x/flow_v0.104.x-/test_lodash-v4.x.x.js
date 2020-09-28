// @flow

/**
 * Please add tests for new functions in the same order as they are in the main file and lodash documentation.
 */

import { describe, it } from "flow-typed-test";
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
import eachRight from "lodash/eachRight";
import every from "lodash/every";
import extend from "lodash/extend";
import filter from "lodash/filter";
import find from "lodash/find";
import findLast from "lodash/findLast";
import first from "lodash/first";
import flatMap from "lodash/flatMap";
import flatMapDeep from "lodash/flatMapDeep";
import flatMapDepth from "lodash/flatMapDepth";
import forEach from "lodash/forEach";
import forEachRight from "lodash/forEachRight";
import get from "lodash/get";
import groupBy from "lodash/groupBy";
import includes from "lodash/includes";
import intersectionBy from "lodash/intersectionBy";
import invokeMap from "lodash/invokeMap";
import isEqual from "lodash/isEqual";
import isString from "lodash/isString";
import keyBy from "lodash/keyBy";
import keys from "lodash/keys";
import map from "lodash/map";
import memoize from "lodash/memoize";
import noop from "lodash/noop";
import omitBy from "lodash/omitBy";
import orderBy from 'lodash/orderBy';
import partition from 'lodash/partition';
import pick from 'lodash/pick';
import pickBy from "lodash/pickBy";
import pullAllBy from "lodash/pullAllBy";
import range from "lodash/range";
import reduce from "lodash/reduce";
import reduceRight from "lodash/reduceRight";
import reject from "lodash/reject";
import sample from "lodash/sample";
import sampleSize from "lodash/sampleSize";
import shuffle from "lodash/shuffle";
import size from "lodash/size";
import some from "lodash/some";
import sortBy from "lodash/sortBy";
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

// Ideally, there should be a test for each of the variables below. To verify that these use cases do not break on code changes.
// Test arrays
type ReadOnlyArray = $ReadOnlyArray<number>
const readOnlyArray : ReadOnlyArray = Object.freeze([1, 2, 3, 4]);

type ArrayOrNullOrVoid = number[] | null | void;
const arrayOrNullOrVoid: ArrayOrNullOrVoid = readOnlyArray[0] > 100 ? [1, 2, 3] : readOnlyArray[1] > 100 ? null : undefined;

// Test objects
type IndexerObject = { [string]: number, ... };
const indexerObject: IndexerObject = { a: 1, b: 2, c: 3 };

type ExactObject = {| a: number, b: number, c: number; |};
const exactObject: ExactObject = { a: 1, b: 2, c: 3 };

type ExactHeterogeneousObject = {| a: number, b: string, c: boolean; |};
type ExactHeterogeneousObjectValue = number | string | boolean;
const exactHeterogeneousObject: ExactHeterogeneousObject = { a: 1, b: 'abc', c: true };

type ReadOnlyIndexerObject = $ReadOnly<IndexerObject>
const readOnlyIndexerObject: ReadOnlyIndexerObject = { ...indexerObject }; // example of inexact object

type ReadOnlyExactObject = $ReadOnly<ExactObject>
const readOnlyExactObject: ReadOnlyExactObject = { ...exactObject };

type ObjectOrNullOrVoid = IndexerObject | null | void;
const objectOrNullOrVoid: ObjectOrNullOrVoid = readOnlyArray[0] > 100 ? indexerObject : readOnlyArray[1] > 100 ? null : undefined;

type ArrayOrObjectOrString = number[] | ExactObject | string;
const arrayOrObjectOrString: ArrayOrObjectOrString = readOnlyArray[0] > 100 ? [1, 2, 3] : (readOnlyArray[1] > 100 ? exactObject : 'abc');


describe('Array', () => {
  it('chunk', () => {
    chunk(readOnlyArray, 2);
  });

  it('compact', () => {
    compact(readOnlyArray);
  });

  it('concat', () => {
    concat(readOnlyArray, readOnlyArray, readOnlyArray);
  // Copy pasted tests from iflow-lodash
    const nums: number[] = [1, 2, 3, 4, 5, 6];
    (concat(nums, "123", "456"): Array<number | string>);
    (concat(nums, ["123", "456"]): Array<number | string>);
    (concat(nums, [[1, 2, 3], "456"]): Array<number | string>);
    (concat(nums, [[1, 2, 3], "456"]): Array<mixed>);
  });

  it('difference', () => {
    difference(
      (["a", "b"]: $ReadOnlyArray<string>),
      (["b"]: $ReadOnlyArray<string>)
    );
    difference(
      (["a", "b"]: $ReadOnlyArray<string>),
      (["b"]: $ReadOnlyArray<string>),
      (["a"]: $ReadOnlyArray<string>)
    );
  });

  it('differenceBy', () => {
    differenceBy(([2.1, 1.2]: $ReadOnlyArray<number>), [2.3, 3.4], Math.floor);
    differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
    differenceBy(([2.1, 1.2]: $ReadOnlyArray<number>), [2.3, 3.4], Math.floor);
    type A = {| a: 1 |};
    type B = {| b: 1 |};
    differenceBy(([{ a: 1 }, { a: 1 }]: $ReadOnlyArray<A>), ([{ b: 1 }, { b: 1 }]: $ReadOnlyArray<B>), (x: A | B) => {
      return x.a || x.b;
    });
  });

  it('differenceWith', () => {
    type A = {| a: 1 |};
    type B = {| b: 1 |};
    differenceWith(([{ a: 1 }, { a: 1 }]: $ReadOnlyArray<A>), ([{ b: 1 }, { b: 1 }]: $ReadOnlyArray<B>), (x: A, y: B) => {
      return x.a === y.b;
    });
  });

  it('first', () => {
    (first([1, 2, 3, 4]): number);
  });

  it('intersectionBy', () => {
    intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
  });

  it('pullAllBy', () => {
    pullAllBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], "x");
  });

  it('sortedIndexBy', () => {
    sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, function(o) {
      return o.x;
    });
    sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, "x");
  });

  it('sortedLastIndexBy', () => {
    sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, function(o) {
      return o.x;
    });
    sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, "x");
  });

  it('sortedUniq', () => {
    sortedUniq([1, 2, 2]);
    sortedUniq(["a", "b", "b"]);
  });

  it('sortedUniqBy', () => {
    sortedUniqBy([1.2, 2.1, 2.3], Math.floor);
    sortedUniqBy([{ x: 1 }, { x: 1 }, { x: 2 }], "x");
  });

  it('take / _.takeRight', () => {
    (take((["abc", "123"]: $ReadOnlyArray<string>), 3): string[]);
    (takeRight((["abc", "123"]: $ReadOnlyArray<string>)): string[]);
  });

  it('unionBy', () => {
    unionBy([2.1], [1.2, 2.3], Math.floor);
    unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
  });

  it('uniqBy', () => {
    uniqBy([2.1, 1.2, 2.3], Math.floor);
    uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x");
  });

  it('xorBy', () => {
    xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
  });

  it('zip', () => {
    zip(["a", "b", "c"], ["d", "e", "f"])[0].length;
    zip(["a", "b", "c"], [1, 2, 3])[0].length;
    zip(["a", "b", "c"], [1, 2, 3])[0][0] + "a";
    zip(["a", "b", "c"], [1, 2, 3])[0][1] * 10;
    // $FlowExpectedError `x` property not found in Array
    zip([{ x: 1 }], [{ x: 2, y: 1 }])[0].x;
    // $FlowExpectedError `y` property not found in object literal
    zip([{ x: 1 }], [{ x: 2, y: 1 }])[0][0].y;
    zip([{ x: 1 }], [{ x: 2, y: 1 }])[0][1].y;
    // $FlowExpectedError Flow could potentially catch this -- the tuple only has two elements.
    zip([{ x: 1 }], [{ x: 2, y: 1 }])[0][2];
  });

  it('zipWith', () => {
    zipWith(["a", "b", "c"], [1, 2, 3], (str: string, num) => ({ [str]: num }));
    zipWith((["a", "b", "c"]: $ReadOnlyArray<string>), ([1, 2, 3]: $ReadOnlyArray<number>), (str: string, num) => ({ [str]: num }));
    zipWith(readOnlyArray, readOnlyArray, readOnlyArray);
    zipWith(readOnlyArray, readOnlyArray, readOnlyArray, (a: number, b: number, c: number) => [a, b, c]);
    zipWith(readOnlyArray, readOnlyArray, readOnlyArray, readOnlyArray);
    zipWith(readOnlyArray, readOnlyArray, readOnlyArray, readOnlyArray, (a: number, b: number, c: number, d: number) => [a, b, c, d]);
    // $FlowExpectedError `x` should be a `string`, `y` a `number`
    zipWith(["a", "b", "c"], [1, 2, 3]).map(([x, y]) => x * y);
  });
});

describe('Collection', () => {
  it('countBy', () => {
    (countBy([6.1, 4.2, 6.3], Math.floor): { [string]: number, ... });
    (countBy(["one", "two", "three"], "length"): { [string]: number, ... });

    (countBy(readOnlyArray, (v: number) => v): { [string]: number, ... });
    (countBy(readOnlyArray, (v: number | string| boolean) => v): { [string]: number, ... });
    (countBy(arrayOrNullOrVoid, (v: number) => v): { [string]: number, ... });

    (countBy(indexerObject, (v: number) => v): { [string]: number, ... });
    (countBy(exactObject, (v: number) => v): { [string]: number, ... });
    (countBy(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue) => v): { [string]: number, ... });
    // $FlowExpectedError wrong value type
    (countBy(exactHeterogeneousObject, (v: number) => v): { [string]: number, ... });
    (countBy(readOnlyIndexerObject, (v: number) => v): { [string]: number, ... });
    (countBy(readOnlyExactObject, (v: number) => v): { [string]: number, ... });
    (countBy(objectOrNullOrVoid, (v: number) => v): { [string]: number, ... });
    (countBy(arrayOrObjectOrString, (v: number | string) => v): { [string]: number, ... });

    // $FlowExpectedError wrong return type
    (countBy(["one", "two", "three"], "length"): { [string]: string, ... });
    // $FlowExpectedError wrong first argument
    countBy(123, "length");
    // $FlowExpectedError wrong value type
    countBy(["one", "two", "three"], (v: boolean) => v);
    // $FlowExpectedError wrong indexer type
    countBy(["one", "two", "three"], (v, arg2: number) => arg2);
  });

  /**
   * Reusing such functions allows to:
   * 1) Ensure all tests are run and up to date for each function
   * 2) Enforce that type definitions for all related functions (e.g. each, eachRight, forEach, forEachRight) are the same, as they should be by the docs.
   */
  const testForEachFunction = (f: typeof forEach) => {
    (f('123', (char: string) => {}): string);

    (f(readOnlyArray, (v: number) => false): $ReadOnlyArray<number>);
    // $FlowExpectedError forEach returns its first argument, therefore, if it was readonly, it should remain readonly
    (f(readOnlyArray, (v) => {}): number[]);
    (f(arrayOrNullOrVoid, (v: number) => !!v): ArrayOrNullOrVoid);

    (f(indexerObject, (v: number, k: string, c: IndexerObject) => {}): IndexerObject);
    (f(exactObject, (v: number, k: string, c: ExactObject) => !!v): ExactObject);
    (f(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue, k: string, c: ExactHeterogeneousObject) => !!v): ExactHeterogeneousObject);
    // $FlowExpectedError wrong iteratee argument type
    f(exactHeterogeneousObject, (v: number) => false);
    (f(readOnlyIndexerObject, (v: number, k: string, c: ReadOnlyIndexerObject) => {}): ReadOnlyIndexerObject);
    (f(readOnlyExactObject, (v: number, k: string, c: ReadOnlyExactObject) => {}): ReadOnlyExactObject);
    // $FlowExpectedError forEach returns its first argument, therefore, if it was readonly, it should remain readonly
    (f(readOnlyExactObject, (v) => {}): ExactObject);
    (f(objectOrNullOrVoid, (v: number, k: string, c: ObjectOrNullOrVoid) => {}): ObjectOrNullOrVoid);
    (f(arrayOrObjectOrString, (v: number | string, key: string, c: ArrayOrObjectOrString) => !!v): ArrayOrObjectOrString);
    // $FlowExpectedError wrong iteratee argument type,
    (f(arrayOrObjectOrString, (v: string) => !!v): ArrayOrObjectOrString);

    // $FlowExpectedError wrong iteratee return value
    f(exactObject, (v) => ({ a: 1, b: 2}));
    // $FlowExpectedError wrong return type: forEach() returns collection passed in the first argument
    (f(exactObject, (v) => false): void);
    // $FlowExpectedError wrong iteratee return type
    f(exactObject, (v) => v + 2);
    // $FlowExpectedError wrong iteratee type, should be function
    f(exactObject, {a: 1});
  }

  it('each', () => {
    testForEachFunction(each);
  });

  it('eachRight', () => {
    testForEachFunction(eachRight);
  });

  it('every', () => {
    const users = [
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];

    (every([true, 1, null, 'yes'], Boolean): boolean);
    (every(users, { 'user': 'barney', 'active': false }): boolean);
    (every(users, ['active', false]): boolean);
    (every(users, 'active'): boolean);

    (every(readOnlyArray, (v: number) => false): boolean);
    (every(arrayOrNullOrVoid, (v: number) => !!v): boolean);

    (every(indexerObject, (v: number, k: string, c: IndexerObject) => {}): boolean);
    (every(exactObject, (v: number, k: string, c: ExactObject) => !!v): boolean);
    (every(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue, k: string, c: ExactHeterogeneousObject) => !!v): boolean);
    (every(readOnlyIndexerObject, (v: number, k: string, c: ReadOnlyIndexerObject) => {}): boolean);
    (every(readOnlyExactObject, (v: number, k: string, c: ReadOnlyExactObject) => {}): boolean);
    (every(objectOrNullOrVoid, (v: number, k: string, c: ObjectOrNullOrVoid) => {}): boolean);
    (every(arrayOrObjectOrString, (v: number | string, key: string, c: ArrayOrObjectOrString) => !!v): boolean);
  });

  const testFilterFunction = (f: typeof filter) => {
    type User = {| user: string, age: number, active: boolean; |}
    const users : User[] = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];

    (f(users, (u: User, i: number, collection: User[]) => !u.active ): User[]);
    (f(users, { 'age': 36, 'active': true }): User[]);
    (f(users, ['active', false]): User[]);
    (f(users, 'active'): User[]);

    (f(readOnlyArray, (v: number) => false): number[]);
    (f(arrayOrNullOrVoid, (v: number) => !!v): number[]);

    (f(indexerObject, (v: number, k: string, c: IndexerObject) => {}): number[]);
    (f(exactObject, (v: number, k: string, c: ExactObject) => !!v): number[]);
    (f(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue, k: string, c: ExactHeterogeneousObject) => !!v): ExactHeterogeneousObjectValue[]);
    (f(readOnlyIndexerObject, (v: number, k: string, c: ReadOnlyIndexerObject) => {}): number[]);
    (f(readOnlyExactObject, (v: number, k: string, c: ReadOnlyExactObject) => {}): number[]);
    (f(objectOrNullOrVoid, (v: number, k: string, c: ObjectOrNullOrVoid) => {}): number[]);

    // $FlowExpectedError first arg should be array or object type is wrong
    f(123, function(o) { return !o.active; });
    // $FlowExpectedError return type is wrong
    (f(users, function(o) { return !o.active; }): boolean);
  };

  it('filter', () => {
    testFilterFunction(filter);
  });

  const testFindFunction = (f: typeof find) => {
    // examples from the official doc
    type User = {| user: string, age: number, active: boolean |};
    const users: User[] = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true }
    ];
    (f(users, function(o) { return o.age < 40; }): User | void);
    (f(users, { age: 1, active: true }): User | void);
    (f(users, ["active", false]): User | void);
    (f(users, "active"): User | void);
    (f(users, "active"): User | void);

    (f([1, 2, 3], x => x * 1 == 3): number | void);
    (f([1, 2, 3], x => x == 2, 1): number | void);

    (f([{ x: 1 }, { x: 2 }, { x: 3 }], v => v.x == 3): {| x: number |} | void);
    (f({ x: 1, y: 2 }, (v: number, key: string) => v): number | void);

    (f((["a", "b"]: $ReadOnlyArray<string>), "c"): string | void);
    (f([1, 2, 3], x => x == 1): number | void);

    (f(readOnlyArray, (v: number) => false): number | void);
    (f(arrayOrNullOrVoid, v => !!v, null): number | void);

    (f(indexerObject, (v: number, k: string, c: IndexerObject) => {}): number | void);
    (f(exactObject, (v: number, k: string, c: ExactObject) => !!v): number | void);
    (f(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue, k: string, c: ExactHeterogeneousObject) => !!v): ExactHeterogeneousObjectValue[]);
    (f(readOnlyIndexerObject, (v: number, k: string, c: ReadOnlyIndexerObject) => {}): number | void);
    (f(readOnlyExactObject, (v: number, k: string, c: ReadOnlyExactObject) => {}): number | void);
    (f(objectOrNullOrVoid, (v: number, k: string, c: ObjectOrNullOrVoid) => !!v): number | void);

    // $FlowExpectedError number cannot be compared to string
    f([1, 2, 3], x => x == "a");
    // $FlowExpectedError number is incompatible with function type.
    f([1, 2, 3], 1);
    // $FlowExpectedError property `y` not found in object literal
    f([{ x: 1 }, { x: 2 }, { x: 3 }], v => v.y == 3);
    // $FlowExpectedError function may not find the item, therefore `void` is always a valid result
    (f(users, function(o) { return o.age < 40; }): User);
  }

  it('find', () => {
    testFindFunction(find);
  });

  it('findLast', () => {
    testFindFunction(findLast);
  });

  it('flatMap', () => {
    // this arrow function needs a type annotation due to a bug in flow: https://github.com/facebook/flow/issues/1948
    (flatMap([1, 2, 3], (n: number) => [n, n]): number[]);

    (flatMap([1, 2, 3], (n: number, i: number, c: number[]) => n): number[]);
    (flatMap(['a', 'b', 'c'], (v: string, i: number, c: string[]) => [v, c[0], i]): (number | string)[]);
    // $FlowExpectedError array index is a number
    (flatMap(['a', 'b', 'c'], (v, i: string) => [v, v]));

    (flatMap(['a', 'b', 'c'], (v: string, i: number, c: string[]) => [{ v, i }]): ({| v: string, i: number |})[]);
    flatMap([{ a: [1, 2] }, { a: [3,4] }], 'a');
    (flatMap({ a: 1, b: 2 }, (n: number, k: string, c: {| a: number, b: number |}) => [n, k]): (number| string)[]);

    (flatMap(readOnlyArray, (n: number, i: number, c: ReadOnlyArray) => [n, n]): number[]);
    (flatMap(arrayOrNullOrVoid, (n: number, i: number, c: ArrayOrNullOrVoid): number[] => [n, n]): number[]);

    (flatMap(indexerObject, (v: number, k: string, c: IndexerObject) => [v, v]): number[]);
    (flatMap(exactObject, (v: number, k: string, c: ExactObject) => [v, v]): number[]);
    (flatMap(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue, k: string, c: ExactHeterogeneousObject) => [v, v]): ExactHeterogeneousObjectValue[]);
    (flatMap(readOnlyIndexerObject, (n: number, k: string, c: ReadOnlyIndexerObject) => [n, n]): number[]);
    (flatMap(readOnlyExactObject, (n: number, k: string, c: ReadOnlyExactObject) => [n, n]): number[]);
    (flatMap(objectOrNullOrVoid, (n: number, k: string, c: ObjectOrNullOrVoid) => [n, n]): number[]);
    (flatMap(arrayOrObjectOrString, (n: number| string, k: number | string, c: ArrayOrObjectOrString) => [n, n]): (number| string)[]);
    // $FlowExpectedError key cannot be only string since index is `number` for array
    flatMap(arrayOrObjectOrString, (n, k: string) => [n, n]);
  });

  it('flatMapDeep', () => {
    (flatMapDeep([1, 2, 3], (n: number) => [[[n, n]]]): number[]);

    (flatMapDeep(['a', 'b', 'c'], (v: string, i: number, c: string[]) => [[[v, c[0], i]]]): (number | string)[]);
    (flatMapDeep(readOnlyArray, (n: number, i: number, c: ReadOnlyArray) => [[[n, n]]]): number[]);
    (flatMapDeep(arrayOrNullOrVoid, (n: number, i: number, c: ArrayOrNullOrVoid) => [[[n, n]]]): number[]);

    (flatMapDeep({ a: 1, b: 2 }, (n: number, k: string, c: {| a: number, b: number |}) => [[[n, k]]]): (number| string)[]);
    (flatMapDeep(indexerObject, (v: number, k: string, c: IndexerObject) => [[[v, v]]]): number[]);
    (flatMapDeep(exactObject, (v: number, k: string, c: ExactObject) => [[[v, v]]]): number[]);
    (flatMapDeep(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue, k: string, c: ExactHeterogeneousObject) => [[[v, v]]]): ExactHeterogeneousObjectValue[]);
    (flatMapDeep(readOnlyIndexerObject, (n: number, k: string, c: ReadOnlyIndexerObject) => [[[n, n]]]): number[]);
    (flatMapDeep(readOnlyExactObject, (n: number, k: string, c: ReadOnlyExactObject) => [[[n, n]]]): number[]);
    (flatMapDeep(objectOrNullOrVoid, (n: number, k: string, c: ObjectOrNullOrVoid) => [[[n, n]]]): number[]);
    (flatMapDeep(arrayOrObjectOrString, (n: number| string, k: number | string, c: ArrayOrObjectOrString) => [[[n, n]]]): (number| string)[]);
    // $FlowExpectedError key cannot be only string since index is `number` for array
    flatMapDeep(arrayOrObjectOrString, (n, k: string) => [[[n, n]]]);
  });

  it('flatMapDepth', () => {
    (flatMapDepth([1, 2, 3], (n) => [[[n, n]]], 2): number[]);

    (flatMapDepth(['a', 'b', 'c'], (v: string, i: number, c: string[]) => [[[v, c[0], i]]], 2): (number | string)[]);
    (flatMapDepth(readOnlyArray, (n: number, i: number, c: ReadOnlyArray) => [[[n, n]]], 2): number[]);
    (flatMapDepth(arrayOrNullOrVoid, (n: number, i: number, c: ArrayOrNullOrVoid) => [[[n, n]]], 2): number[]);

    (flatMapDepth({ a: 1, b: 2 }, (n: number, k: string, c: {| a: number, b: number |}) => [[[n, k]]], 2): (number| string)[]);
    (flatMapDepth(indexerObject, (v: number, k: string, c: IndexerObject) => [[[v, v]]], 2): number[]);
    (flatMapDepth(exactObject, (v: number, k: string, c: ExactObject) => [[[v, v]]], 2): number[]);
    (flatMapDepth(exactHeterogeneousObject, (v: ExactHeterogeneousObjectValue, k: string, c: ExactHeterogeneousObject) => [[[v, v]]], 2): ExactHeterogeneousObjectValue[]);
    (flatMapDepth(readOnlyIndexerObject, (n: number, k: string, c: ReadOnlyIndexerObject) => [[[n, n]]], 2): number[]);
    (flatMapDepth(readOnlyExactObject, (n: number, k: string, c: ReadOnlyExactObject) => [[[n, n]]], 2): number[]);
    (flatMapDepth(objectOrNullOrVoid, (n: number, k: string, c: ObjectOrNullOrVoid) => [[[n, n]]], 2): number[]);
    (flatMapDepth(arrayOrObjectOrString, (n: number| string, k: number | string, c: ArrayOrObjectOrString) => [[[n, n]]], 2): (number| string)[]);
    // $FlowExpectedError key cannot be only string since index is `number` for array
    flatMapDepth(arrayOrObjectOrString, (n, k: string) => [[[n, n]]], 2);
  });

  it('forEach', () => {
    testForEachFunction(forEach);
  });

  it('forEachRight', () => {
    testForEachFunction(forEachRight);
  });

  it('groupBy', () => {
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
  });

  it('includes', function () {
    (includes([1, 2, 3], 1): boolean);
    (includes([1, 2, 3], 1, 2): boolean);
    (includes({ 'a': 1, 'b': 2 }, 1): boolean);
    (includes('abcd', 'bc'): boolean);
  })

  it('invokeMap', function () {
    (invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'): number[][]);
    (invokeMap(['123', '456'], String.prototype.split, ''): string[][]);

    // $FlowExpectedError
    invokeMap([123, 456], String.prototype.split, '');
  })

  it('keyBy', () => {
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
  });

  it('map', () => {
    // examples from the official doc
    function square(n: number): number {
      return n * n;
    }
    (map([4, 8], square): number[]);
    (map({ a: 4, b: 8 }, square): number[]);
    (map([{ user: "barney" }, { user: "fred" }], "user"): string[]);
    (map([{ user: "barney", anotherProp: 1 }, { user: "fred", anotherProp: 2 }], "user"): string[]);

    //accepts tuple types
    const tuple: [number, number] = [1, 2];
    (map(tuple, val => val + 2): number[]);
    //$FlowExpectedError cannot push to tuple
    map(tuple, (val, nothing, tupleArray) => tupleArray.push(123));
    //$FlowExpectedError wrong return type
    (map(tuple, val => val + 2): [number, number]);

    // Array#map, lodash.map, lodash#map
    const nums: number[] = [1, 2, 3, 4, 5, 6];
    (nums.map(num => num * num): number[]);
    (map(nums, num => num * num): number[]);

    // return type of iterator is reflected in result and chain
    (nums.map(num => JSON.stringify(num)): string[]);
    (map(nums, num => JSON.stringify(num)): string[]);
  });

  it('orderBy', () => {
    type User = {| user: string, age: number |};
    const users: User[] = [
      { 'user': 'fred',   'age': 48 },
      { 'user': 'barney', 'age': 34 },
      { 'user': 'fred',   'age': 40 },
      { 'user': 'barney', 'age': 36 }
    ];
    (orderBy(users, ['user', 'age'], ['asc', 'desc']): User[]);

    type Item = {| a: number, b: number |};
    (orderBy([{a: 1, b: 2}, {a: 2, b: 1}, {a: 3, b: 0}], ['a']): Item[]);
    (orderBy([{a: 1, b: 2}, {a: 2, b: 1}, {a: 3, b: 0}], [x => x.a]): Item[]);
    (orderBy({[0]: {a: 1, b: 2}, [2]: {a: 2, b: 1}, [1]: {a: 3, b: 0}}, ['a']): Item[]);
    (orderBy({[0]: {a: 1, b: 2}, [2]: {a: 2, b: 1}, [1]: {a: 3, b: 0}}, [x => x.a]): Item[]);
  });

  it('partition', () => {
    type User = {| user: string, age: number, active: boolean |}
    const users: User[] = [
      { 'user': 'barney',  'age': 36, 'active': false },
      { 'user': 'fred',    'age': 40, 'active': true },
      { 'user': 'pebbles', 'age': 1,  'active': false }
    ];
    (partition(users, function(o) { return o.active; }): [User[], User[]] );
    (partition(users, { 'age': 1, 'active': false }): [User[], User[]]);
    (partition(users, ['active', false]): [User[], User[]]);
    (partition(users, 'active'): [User[], User[]]);
  });

  const testReduceFunction = (f: typeof reduce) => {
    (f([1, 2], function(sum: number, n: number) { return sum + n;}, 0): number);

    type Result = {[number]: string[], ...};
    (f({ 'a': 1, 'b': 2, 'c': 1 }, function(result: Result, value: number, key: string) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {}): Result);

    (f([[0, 1], [2, 3], [4, 5]], function(flattened: number[], other: number[]) {
      return flattened.concat(other);
    }, []): number[]);

    // $FlowExpectedError return type
    (f([1, 2], function(sum, n) { return sum + n;}, 0): string);

    (f(readOnlyArray, (r: number, v: number, i: number) => r + v, 0): number);
    (f(arrayOrNullOrVoid, (r: number, v: number, i: number) => r + (v != null ? v : 0), 0): number);

    (f(indexerObject, (r: number, v: number, k: string) => r + v, 0): number);
    (f(exactObject, (r: number, v: number, k: string) => r + v, 0): number);
    (f(exactHeterogeneousObject, (r: ExactHeterogeneousObjectValue[], v: ExactHeterogeneousObjectValue, k: string) => [...r, v], []): ExactHeterogeneousObjectValue[]);
    (f(readOnlyIndexerObject, (r: number, v: number, k: string) => r + v, 0): number);
    (f(readOnlyExactObject, (r: number, v: number, k: string) => r + v, 0): number);
    (f(objectOrNullOrVoid, (r: number, v: number, k: string) => r + v, 0): number);
  };

  it('reduce', () => {
    testReduceFunction(reduce);
  });

  it('reduceRight', () => {
    testReduceFunction(reduceRight);
  });

  it('reject', () => {
    testFilterFunction(reject);
  });

  it('sample', () => {
    (sample([1, 2, 3, 4]): number);
    (sample(readOnlyArray): number);
    (sample(readOnlyIndexerObject): number);
    (sample({ a: 1, b: 'abc' }): number| string);

    // $FlowExpectedError
    (sample({ a: 1, b: 'abc' }): number);
  });

  it('sampleSize', () => {
    (sampleSize([1, 2, 3], 4): number[]);
    (sampleSize(readOnlyArray, 2): number[]);
    (sampleSize(readOnlyIndexerObject, 2): number[]);
    (sampleSize({ a: 1, b: 'abc' }, 2): (number| string)[]);

    // $FlowExpectedError
    (shuffle({ a: 1, b: 'abc' }, 2): number[]);
  });

  it('shuffle', () => {
    (shuffle([1, 2, 3, 4]): number[]);
    (shuffle(readOnlyArray): number[]);
    (shuffle(readOnlyIndexerObject): number[]);
    (shuffle(readOnlyIndexerObject): (number | string)[]);

    // $FlowExpectedError
    (shuffle({ a: 1, b: 'abc' }): number[]);
  });

  it('size', () => {
    (size([1, 2, 3]): number);
    (size({ 'a': 1, 'b': 2 }): number);
    (size('pebbles'): number);

    (size(readOnlyArray): number);
    (size(readOnlyIndexerObject): number);
  });

  it('some', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    (some([null, 0, 'yes', false], Boolean): boolean);
    (some(users, { 'user': 'barney', 'active': false }): boolean);
    (some(users, ['active', false]): boolean);
    (some(users, 'active'): boolean);

    (some(readOnlyArray, Boolean): boolean);
    (some(readOnlyIndexerObject, Boolean): boolean);
  });

  it('sortBy', () => {
    const users = [
      { 'user': 'fred',   'age': 48 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred',   'age': 40 },
      { 'user': 'barney', 'age': 34 }
    ];
    (sortBy(users, [function(o) { return o.user; }]): typeof users);
    (sortBy(users, ['user', 'age']): typeof users);

    (sortBy(readOnlyArray, (v) => v): typeof readOnlyArray);
  });
});

describe('Date', () => {
});

describe('Function', () => {
  it('debounce', () => {
    var debounced = debounce((a: number) => "foo");
    debounced(1);
    debounced.cancel();
    debounced.flush();
    // $FlowExpectedError string is incompatible with number
    debounced("a");
  });

  it('memoize', () => {
    var memoized: (a: number) => string = memoize((a: number) => "foo");
    // $FlowExpectedError memoize retains type information
    memoized = memoize(() => {});
  });
});

describe('Lang', () => {
  it('clone', () => {
    clone({ a: 1 }).a == 1;
    // $FlowExpectedError property `b`. Property not found in object literal
    clone({ a: 1 }).b == 1;
    // $FlowExpectedError number. This type is incompatible with function type.
    clone({ a: 1 }).a == "c";
  });

  it('isEqual', () => {
    isEqual("a", "b");
    isEqual({ x: 1 }, { y: 2 });

    // Flow considers this compatible with isEqual(a: any, b: any).
    // Reasonable people disagree about whether this should be considered a legal call.
    // See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
    // and https://github.com/facebook/flow/issues/956
    isEqual(1);

    // $FlowExpectedError function type expects no more than 2 arguments
    isEqual(1, 2, 3);
  });

  it('isString', () => {
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

    // $FlowExpectedError
    boolFalse = isString("");
    // $FlowExpectedError
    boolTrue = isString(undefined);
  });

  it('conformsTo', () => {
    (conformsTo({ a: 1, b: 2 }, { b: function(n: number) { return true; }}): boolean);
  });
});

describe('Math', () => {
});

describe('Number', () => {
});

describe('Object', () => {
  it('extend', () => {
    extend({ a: 1 }, { b: 2 }).a;
    extend({ a: 1 }, { b: 2 }).b;
    // $FlowExpectedError property `c`. Property not found in object literal
    extend({ a: 1 }, { b: 2 }).c;
    // $FlowExpectedError property `c`. Poperty not found in object literal
    assignIn({ a: 1 }, { b: 2 }).c;
  });

  it('get', () => {
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
  });

  it('keys', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    (keys(new Foo): string[]);
    (keys('hi'): string[]);
  });

  it('omitBy', () => {
    (omitBy({ a: 2, b: 3, c: 4 }, num => num % 2): { [prop: string]: number, ... });
    (omitBy(null, num => num % 2): {...});
    (omitBy(undefined, num => num % 2): {...});
    (omitBy({ [1]: 1, [2]: 2 }, num => num === 2): { [prop: number]: number, ... });
  });

  it('pick', () => {
    (pick({ a: 2, b: 3, c: 4 }, 'a'): { [prop: string]: number, ... });
    (pick(null, 'a'): {...});
    (pick(undefined, 'a'): {...});
    (pick({ [1]: 1, [2]: 2 }, 'a'): { [prop: number]: number, ... });

    // $FlowExpectedError
    pick({ a: 2 }, 1);
  });

  it('pickBy', () => {
    (pickBy({ a: 2, b: 3, c: 4 }, num => num % 2): { [prop: string]: number, ... });
    (pickBy(null, num => num % 2): {...});
    (pickBy(undefined, num => num % 2): {...});
    (pickBy({ [1]: 1, [2]: 2 }, num => num === 2): { [prop: number]: number, ... });
    (pickBy(readOnlyIndexerObject, num => num === 2): { [prop: number]: number, ... });
  });

  it('toPairs / _.toPairsIn', () => {
    var pairs: [string, number][];
    pairs = toPairs({ a: 12, b: 100 });
    pairs = toPairsIn({ a: 12, b: 100 });
  });
});

describe('Seq', () => {
  it('tap', () => {
    (tap(1, n => false): number);
  });

  it('thru', () => {
    (thru(1, n => false): boolean);
  });
});

describe('String', () => {
})

describe('Util', () => {
  it('attempt', () => {
    attempt(() => void 0);
    attempt(x => x);
    attempt(x => x, "first arg");
    attempt((x, y, z) => {}, null, {}, []);
  });

  it('defaultTo', () => {
    (defaultTo(undefined, 2): number);
    (defaultTo(undefined, "str"): string);
    (defaultTo(true, "str"): boolean);
    (defaultTo("str", true): string);
  });

  it('noop', () => {
    noop();
    noop(1);
    noop("a", 2, [], null);
    (noop: string => void);
    (noop: (number, string) => void);
    // $FlowExpectedError functions are contravariant in return types
    (noop: string => string);
  });

  it('range', () => {
    range(0, 10)[4] == 4;
    // $FlowExpectedError string. This type is incompatible with number
    range(0, "a");
    // $FlowExpectedError string cannot be compared to number
    range(0, 10)[4] == "a";
  });

  it('times', () => {
    (times(5): number[]);
    // $FlowExpectedError string. This type is incompatible with number
    (times(5): string[]);
    (times(5, (i: number) => i + 1): number[]);
    // $FlowExpectedError string. This type is incompatible with number
    (times(5, (i: number) => JSON.stringify(i)): number[]);
  });
});
