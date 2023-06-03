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
    const gen = wrap(
      () => {},
    );

    gen.next();
    // $FlowExpectedError[prop-missing]
    gen.foo();

    wrap(
      () => {},
      () => {},
    );
    wrap(
      () => {},
      null,
    );
    wrap<string>(
      () => {},
      () => {},
      '',
    );
    wrap<number>(
      () => {},
      () => {},
      // $FlowExpectedError[incompatible-call]
      '',
    );
    wrap<string>(
      () => {},
      () => {},
      '',
      [[1, 2]],
    );
    wrap<string>(
      () => {},
      () => {},
      '',
      // $FlowExpectedError[incompatible-call]
      [[1, 2], [1]],
    );
    wrap<string>(
      () => {},
      () => {},
      '',
      // $FlowExpectedError[incompatible-call]
      [1, 2],
    );
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
    keys({});
    keys([]);
    const keysResult = keys({ a: 'b' });

    (keysResult(): IteratorResult<string, void>);
    // $FlowExpectedError[incompatible-cast]
    (keysResult(): string);
    // $FlowExpectedError[extra-arg]
    keysResult('');

    // $FlowExpectedError[incompatible-call]
    keys();
  });

  test('values', () => {

  });
});
