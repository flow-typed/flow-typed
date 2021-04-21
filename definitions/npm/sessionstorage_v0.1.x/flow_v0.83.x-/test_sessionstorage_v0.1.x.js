// @flow
import { describe, it } from 'flow-typed-test';
import sessionStorage from 'sessionstorage';

describe('sessionstorage', () => {
  it('getItem', () => {
    const a = sessionStorage.getItem('test');
    // $FlowExpectedError[incompatible-call] `a` is still a maybe type
    JSON.parse(a);
    if (a) {
      JSON.parse(a);
    }
    // $FlowExpectedError[incompatible-call]
    sessionStorage.getItem();
  });

  it('setItem', () => {
    const a: void = sessionStorage.setItem('test', 'value');
  });

  it('removeItem', () => {
    (sessionStorage.removeItem('test'): void);
    // $FlowExpectedError[incompatible-call]
    sessionStorage.removeItem();
  });

  it('clear', () => {
    sessionStorage.clear();
    // $FlowExpectedError[extra-arg] accepts no args
    sessionStorage.clear('test');
  });
});
