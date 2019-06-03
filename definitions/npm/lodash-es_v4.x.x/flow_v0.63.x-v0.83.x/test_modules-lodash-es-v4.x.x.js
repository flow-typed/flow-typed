// @flow
import assignIn from 'lodash-es/assignIn'
import attempt from 'lodash-es/attempt'
import clone from 'lodash-es/clone'
import concat from 'lodash-es/concat'
import conformsTo from 'lodash-es/conformsTo'
import countBy from 'lodash-es/countBy'
import defaultTo from 'lodash-es/defaultTo'
import difference from 'lodash-es/difference'
import differenceBy from 'lodash-es/differenceBy'
import each from 'lodash-es/each'
import extend from 'lodash-es/extend'
import find from 'lodash-es/find'
import first from 'lodash-es/first'
import flatMap from 'lodash-es/flatMap'
import forEach from 'lodash-es/forEach'
import get from 'lodash-es/get'
import groupBy from 'lodash-es/groupBy'
import intersectionBy from 'lodash-es/intersectionBy'
import isEqual from 'lodash-es/isEqual'
import keyBy from 'lodash-es/keyBy'
import pullAllBy from 'lodash-es/pullAllBy'
import range from 'lodash-es/range'
import tap from 'lodash-es/tap'
import thru from 'lodash-es/thru'
import times from 'lodash-es/times'
import zip from 'lodash-es/zip'

/**
 * _.attempt
 */
attempt(() => void 0);

/**
 * _.countBy
 */
countBy([6.1, 4.2, 6.3], Math.floor);

/**
 * _.difference
 */
difference((["a", "b"]: $ReadOnlyArray<string>), (["b"]: $ReadOnlyArray<string>));

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

/**
 * _.forEach
 */
forEach(([1, 2]: $ReadOnlyArray<number>), (item: number) => false);

/**
 * _.groupBy
 */
var numbersGroupedByMathFloor = groupBy([6.1, 4.2, 6.3], Math.floor);

/**
 * _.intersectionBy
 */
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);

/**
 * _.get
 */

var exampleObjectForGetTest = { a: [{ b: { c: 3 } }] };
get(exampleObjectForGetTest, "a[0].b.c");

/**
 * _.keyBy
 */
keyBy([{ dir: "left", code: 97 }, { dir: "right", code: 100 }], function(o) {
  return String.fromCharCode(o.code);
});

/**
 * _.pullAllBy
 */
pullAllBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], "x");

/**
 * _.clone
 */
clone({ a: 1 }).a == 1;

/**
 * _.isEqual
 */
isEqual("a", "b");

/**
 * _.range
 */
range(0, 10)[4] == 4;

/**
 * _.extend
 */
extend({ a: 1 }, { b: 2 }).a;

/**
 * _.zip
 */
zip(["a", "b", "c"], ["d", "e", "f"])[0].length;

/**
 * _.find
 */
find([1, 2, 3], x => x == 1);
