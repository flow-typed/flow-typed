// @flow

import matchSorter, { rankings, caseRankings } from 'match-sorter';

// $FlowExpectedError
const startsWith: string = rankings.STARTS_WITH;

// $FlowExpectedError
rankings.foo;

// $FlowExpectedError
matchSorter(1, 2);

// $FlowExpectedError
matchSorter([], 2);

const found1: Array<number> = matchSorter([1, 2, 3], '2');

// $FlowExpectedError
matchSorter([], 'foo', { foo: bar });

const sampleCollection = [{ baz: '1' }, { baz: '2' }, { baz: 'foooooo' }];

// $FlowExpectedError
matchSorter(sampleCollection, 'foo', { invalidProp: 'bar' });

// $FlowExpectedError
matchSorter(sampleCollection, 'foo', { keys: 1 });

// string key accessor
const [found2] = matchSorter(sampleCollection, 'foo', { keys: ['baz'] });
const prop: string = found2.baz;

// callback key accessor
matchSorter(sampleCollection, 'foo', { keys: [item => item.baz] });

// object key accessor
matchSorter(sampleCollection, 'foo', { keys: [{ key: 'baz' }] });

// $FlowExpectedError
matchSorter(sampleCollection, 'foo', { keys: [{ foo: 'baz' }] });
