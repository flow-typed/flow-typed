// @flow

import matchSorter, { rankings, caseRankings } from 'match-sorter';

// $ExpectError
const startsWith: string = rankings.STARTS_WITH;

// $ExpectError
rankings.foo;

// $ExpectError
matchSorter(1, 2);

// $ExpectError
matchSorter([], 2);

const found1: Array<number> = matchSorter([1, 2, 3], '2');

// $ExpectError
matchSorter([], 'foo', { foo: bar });

const sampleCollection = [{ baz: '1' }, { baz: '2' }, { baz: 'foooooo' }];

// $ExpectError
matchSorter(sampleCollection, 'foo', { invalidProp: 'bar' });

// $ExpectError
matchSorter(sampleCollection, 'foo', { keys: 1 });

// string key accessor
const [found2] = matchSorter(sampleCollection, 'foo', { keys: ['baz'] });
const prop: string = found2.baz;

// callback key accessor
matchSorter(sampleCollection, 'foo', { keys: [item => item.baz] });

// object key accessor
matchSorter(sampleCollection, 'foo', { keys: [{ key: 'baz' }] });

// $ExpectError
matchSorter(sampleCollection, 'foo', { keys: [{ foo: 'baz' }] });
