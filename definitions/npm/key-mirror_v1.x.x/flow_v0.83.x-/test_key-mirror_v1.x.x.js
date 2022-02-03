// @flow
import { describe, it } from 'flow-typed-test';
import keyMirror from 'key-mirror';

describe('key-mirror', () => {
  it('works', () => {
    const constants = keyMirror({a: null, b: null});

    const a: string = constants.a;

    // $FlowExpectedError[prop-missing]
    constants.c;
  });
});
