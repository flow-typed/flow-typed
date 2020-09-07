// @flow
import keycode from 'keycode';
import { describe, it } from 'flow-typed-test';

describe('keycode', () => {
  let stringResult: string;
  let numberResult: number;
  it('parses a keycode', () => {
    stringResult = keycode(1);
  });
  it('parses a key name', () => {
    numberResult = keycode('enter');
  });
  it('parses a keyboard event', () => {
    stringResult = keycode(new KeyboardEvent('keyboard'));
  });

  it('errors parsing invalid arg', () => {
    // $FlowExpectedError
    keycode({});
  });
});

describe('#eventKey', () => {
  const boolResult: boolean = keycode.isEventKey(
    new KeyboardEvent('keyboard'),
    1
  );
});

describe('raw data access', () => {
  keycode.codes;
  keycode.aliases;
  keycode.names;
});
