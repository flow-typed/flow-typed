// @flow
import { describe, test } from 'flow-typed-test';

const deepmerge = require('deepmerge');

describe('deepmerge', () => {
  test('basic', () => {
    const m1: { a: string, b: string, ... } = deepmerge({a: ''}, { b: '' });

    const m2: { a: string, b: string, ... } = deepmerge.all([ {a: ''}, { b: '' } ]);

    // $FlowExpectedError[incompatible-type]
    const m3: { a: number, b: string, ... } = deepmerge({a: ''}, { b: '' });
  });

  describe('options', () => {
    test('arrayMerge', () => {
      deepmerge({ a: '' }, { b: '' }, {
        arrayMerge: (dest, src) => [],
      });

      deepmerge({ a: '' }, { b: '' }, {
        arrayMerge: (dest, src, options) => {
          options.cloneUnlessOtherwiseSpecified({});
          options.cloneUnlessOtherwiseSpecified({}, {
            clone: true,
          });
          (options.isMergeableObject({}): boolean);

          return [];
        },
      });

      deepmerge({ a: '' }, { b: '' }, {
        arrayMerge: (dest, src, options) => {
          // $FlowExpectedError[prop-missing]
          options.cloneUnlessOtherwiseSpecified({}, {
            foo: 'bar',
          });
          // $FlowExpectedError[incompatible-cast]
          (options.isMergeableObject({}): string);

          return [];
        },
      });
    });
  });
});

