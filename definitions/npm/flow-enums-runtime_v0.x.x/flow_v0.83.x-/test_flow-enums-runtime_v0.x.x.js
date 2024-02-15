// @flow
import { describe, test } from 'flow-typed-test';
import flowEnumRuntime from 'flow-enums-runtime';

describe('flow-enums-runtime', () => {
  test('default function', () => {
    const obj = { a: 'a' }

    const res = flowEnumRuntime(obj);

    res.a;
    res.isValid('a');
    const valid = res.cast('a');
    // $FlowExpectedError[incompatible-use]
    valid.toLowerCase();
    if (valid) {
      valid.toLowerCase();
    }
    (res.members(): Array<$Keys<typeof obj>>);

    // $FlowExpectedError[prop-missing]
    res.b;
  });

  test('Mirrored', () => {
    const { Mirrored } = flowEnumRuntime;

    const obj = { a: 'b' };

    Mirrored<typeof obj>(([]: Array<$Keys<typeof obj>>));
    Mirrored<{| a: 'a', b: 'b' |}>(['a', 'b']);
    // $FlowExpectedError[prop-missing]
    Mirrored<{| a: 'a', b: 'b' |}>(['a', 'b', 'c']);
    // $FlowExpectedError[incompatible-call]
    Mirrored();
    // $FlowExpectedError[incompatible-call]
    Mirrored<{| a: 'a', b: 'b' |}>([1]);
  });
});
