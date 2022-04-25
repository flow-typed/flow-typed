// @flow
import { describe, it } from 'flow-typed-test';
import jwtDecode from 'jwt-decode';

describe('jwt-decode', () => {
  it('decodes', () => {
    jwtDecode('test');
    // It's any without generic passed in
    jwtDecode('test').a.b.c;

    jwtDecode<{ a: string, ... }>('test').a.toLowerCase();
    // $FlowExpectedError[prop-missing] does not match generic structure
    jwtDecode<{ a: string, ... }>('test').b;

    jwtDecode('test', {
      header: false,
    });
    jwtDecode('test', {
      // $FlowExpectedError[incompatible-call]
      header: '',
    });
    // $FlowExpectedError[prop-missing]
    jwtDecode('test', {
      aud: '',
    });
    jwtDecode('test', {});

    // $FlowExpectedError[incompatible-call]
    jwtDecode();
    // $FlowExpectedError[incompatible-call]
    jwtDecode('test', '');
  });
});
