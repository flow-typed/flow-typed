// @flow

import matchSorter, { rankings, caseRankings } from 'match-sorter';
import { describe, it } from 'flow-typed-test';

describe('rankings', () => {
  it('should be a number', () => {
    // $FlowExpectedError
    const startsWith: string = rankings.STARTS_WITH;
  });

  it('should fail on unknown ranking', () => {
    // $FlowExpectedError
    rankings.foo;
  });
});

describe('matchSorter', () => {
  const sampleCollection = [{ baz: '1' }, { baz: '2' }, { baz: 'foooooo' }];

  it('should fail with invalid collection', () => {
    // $FlowExpectedError
    matchSorter(1, 'foo');
  });

  it('query should be a string', () => {
    // $FlowExpectedError
    matchSorter([], 2);
  });

  it('should return collection with same element type', () => {
    const found1: Array<number> = matchSorter([1, 2, 3], '2');
  });

  it('should fail on invalid search options', () => {
    // $FlowExpectedError
    matchSorter(sampleCollection, 'foo', { foo: bar });

    // $FlowExpectedError
    matchSorter(sampleCollection, 'foo', { invalidProp: 'bar' });

    // $FlowExpectedError
    matchSorter(sampleCollection, 'foo', { keys: 1 });
  });

  it('should pass for string keys accessors', () => {
    // string key accessor
    const [found2] = matchSorter(sampleCollection, 'foo', { keys: ['baz'] });
    const prop: string = found2.baz;
  });

  it('should pass for callback keys accessor', () => {
    // callback key accessor
    matchSorter(sampleCollection, 'foo', { keys: [item => item.baz] });
  });

  it('should pass for object keys accessor', () => {
    // object key accessor
    matchSorter(sampleCollection, 'foo', { keys: [{ key: 'baz' }] });
  });

  it('should fail on unknown property in object key accessor', () => {
    // $FlowExpectedError
    matchSorter(sampleCollection, 'foo', { keys: [{ foo: 'baz' }] });
  });
});
