// @flow
import { describe, it } from 'flow-typed-test';
import Fuse from 'fuse.js';

const TEST_LIST = [
  { id: '001', name: 'Alice', age: 21, role: 'admin', city: 'New York' },
  { id: '002', name: 'Alii', age: 22, role: 'user', city: 'Paris' },
  { id: '123', name: 'Bob', age: 22, role: 'admin', city: 'Tokyo' },
  { id: '124', name: 'Charlie', age: 23, role: 'viewer', city: 'Taipei' },
  { id: '125', name: 'David', age: 24, role: 'marketing', city: 'Seoul' },
  { id: '160', name: 'Edward', age: 25, role: 'marketing', city: 'London' },
  { id: '234', name: 'Frank', age: 26, role: 'viewer', city: 'New York' },
];

describe('fuse.js constructor', () => {
  it('should type constructor correctly', () => {
    const fuse = new Fuse(TEST_LIST);
  });

  it('should error when required parameter of constructor is missing', () => {
    // $FlowExpectedError[incompatible-call] `list` is missing
    const fuse = new Fuse();
  });

  describe('options', () => {
    it('should type constructor correctly', () => {
      const fuse = new Fuse(TEST_LIST, {
        keys: ['name', 'city'],
        threshold: 0.3,
        shouldSort: false,
        ignoreLocation: true,
      });
    });

    it('should error when not support option key been set', () => {
      // $FlowExpectedError[prop-missing] `notExistOptionKey` is missing in the options
      const fuse = new Fuse(TEST_LIST, {
        notExistOptionKey: true,
        keys: ['name', 'city'],
        threshold: 0.3,
        shouldSort: false,
        ignoreLocation: true,
      });
    });

    it('should error when not support option type been set', () => {
      // $FlowExpectedError[incompatible-call] `threshold` should be `number`
      const fuse = new Fuse(TEST_LIST, {
        keys: ['name', 'city'],
        threshold: true,
        shouldSort: false,
        ignoreLocation: true,
      });
    });
  });
});

describe('fuse.js search', () => {
  const fuse = new Fuse(TEST_LIST, {
    keys: ['name', 'city'],
    threshold: 0.3,
    shouldSort: false,
    ignoreLocation: true,
  });

  it('should type constructor correctly', () => {
    const results = fuse.search('Alice');
  });

  it('should error when required parameter of search is missing', () => {
    // $FlowExpectedError[incompatible-call] `pattern` is missing
    const results = fuse.search();
  });

  it('should error when access not exist property from search results', () => {
    const results = fuse.search('Alice');

    results.map(result => result.item);

    // $FlowExpectedError[prop-missing] `notExistKey` is missing in the result
    results.map(result => result.notExistKey);
  });
});
