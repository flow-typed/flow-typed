// @flow
import { describe, test } from 'flow-typed-test';

const outdent = require('outdent');

describe('outdent', () => {
  test('normal', () => {
    outdent`Hello world`;

    // $FlowExpectedError[incompatible-call]
    outdent();
  });

  test('options', () => {
    outdent({});
    outdent({
      trimLeadingNewline: false,
      trimTrailingNewline: false,
      newline: '',
    });
    outdent({
      newline: null,
    });

    // $FlowExpectedError[incompatible-call]
    outdent({ foo: 'bar' });
  });

  test('chaining', () => {
    outdent({trimLeadingNewline: false, trimTrailingNewline: false})`
        Hello world!
    `;
  });
});
