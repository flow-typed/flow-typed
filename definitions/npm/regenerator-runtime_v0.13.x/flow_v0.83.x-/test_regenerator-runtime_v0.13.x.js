// @flow
import { describe, test } from 'flow-typed-test';

const {
  wrap,
  isGeneratorFunction,
  mark,
  awrap,
  AsyncIterator,
  async,
  keys,
  values,
} = require('regenerator-runtime');

describe('regenerator-runtime', () => {
  test('wrap', () => {

  });

  test('isGeneratorFunction', () => {

  });

  test('mark', () => {
    mark(() => {});
    mark(() => new Promise(() => {}));

    // $FlowExpectedError[incompatible-call] must be function
    mark('');
  });

  test('awrap', () => {
    const awrapped = awrap('');
    (awrap(1).__await: number);

    awrapped.__await.toLowerCase();
    // $FlowExpectedError[cannot-write]
    awrapped.__await = 'something else';
    // $FlowExpectedError[prop-missing]
    awrapped.random();
  });

  test('AsyncIterator', () => {
    // Currently typed as any
    AsyncIterator();
  });

  test('async', () => {
    // Currently typed as any
    async();
  });

  test('keys', () => {

  });

  test('values', () => {

  });
});
