// @flow

import deepFreeze, { type DeepReadOnly } from 'deep-freeze';
import { it, describe } from 'flow-typed-test';

describe('No properties', () => {
  const test1 = deepFreeze(({}: { ... }));

  it('throws error', () => {
    // $FlowExpectedError[prop-missing]
    test1.disabled = true;
  });
});

describe('Object', () => {
  const test1 = deepFreeze(({ disabled: false }: {| disabled: boolean |}));

  it('throws error', () => {
    // $FlowExpectedError[cannot-write]
    test1.disabled = true;

    // $FlowExpectedError[prop-missing]
    test1.newprop = true;
  });
});

describe('$ReadOnly Object', () => {
  const test1 = deepFreeze(
    ({ disabled: false }: $ReadOnly<{| disabled: boolean |}>)
  );

  it('throws error', () => {
    // $FlowExpectedError[cannot-write]
    test1.disabled = true;

    // $FlowExpectedError[prop-missing]
    test1.newprop = true;
  });
});

describe('Array', () => {
  const test1: $ReadOnlyArray<DeepReadOnly<{| name: string |}>> = deepFreeze([
    { name: 'foo' },
  ]);

  it('raises error', () => {
    // $FlowExpectedError[cannot-write]
    test1[0].name = true;
  });
});

describe('$ReadOnlyArray', () => {
  const test1: $ReadOnlyArray<DeepReadOnly<{| name: string |}>> = deepFreeze(
    ([{ name: 'foo' }]: $ReadOnlyArray<{| name: string |}>)
  );

  it('raises error', () => {
    // $FlowExpectedError[cannot-write]
    test1[0].name = true;
  });
});

describe('Nested object', () => {
  const test1: $ReadOnlyArray<DeepReadOnly<{| name: string |}>> = deepFreeze(
    ([{ name: 'foo' }]: $ReadOnlyArray<{| name: string |}>)
  );

  it('raises error', () => {
    // $FlowExpectedError[cannot-write]
    test1[0].name = true;
  });
});

describe('Complex object', () => {
  const test1: $ReadOnlyArray<DeepReadOnly<{foo: Array<{bar: Array<{foobar: boolean, ...}>, ...}>, ...}>> = deepFreeze([
    {
      foo: [
        {
          bar: [
            {
              foobar: false,
            },
          ],
        },
      ],
    },
  ]);

  it('raises error', () => {
    // $FlowExpectedError[prop-missing]
    test1[0].push('foo');

    // $FlowExpectedError[prop-missing]
    test1[0].newprop = true;

    // $FlowExpectedError[cannot-write]
    test1[0].foo[0].bar[0].foobar = true;

    // $FlowExpectedError[incompatible-type]
    // $FlowExpectedError[cannot-write]
    test1[1] = {foo: "value"}
  });
});

describe('Number', () => {
  const test1: number = deepFreeze(1);
});

describe('string', () => {
  const test1: string = deepFreeze('3');
});
