// @flow
import { describe, it } from 'flow-typed-test';
import jwtDecode from 'jwt-decode';

describe('jwt-decode', () => {
  it('returns object', () => {
    jwtDecode('');
    // $FlowExpectedError[incompatible-call]
    jwtDecode(true);
    // $FlowExpectedError[incompatible-type]
    const t: string = jwtDecode('');
  });

  it('accepts headers', () => {
    jwtDecode('', { header: true });
    // $FlowExpectedError[incompatible-call]
    jwtDecode('', { header: '' });
    // $FlowExpectedError[prop-missing]
    jwtDecode('', { header: true, test: '' });
  });
});
