// @flow
import { describe, it } from 'flow-typed-test';
import Cookies from 'universal-cookie';

describe('universal-cookie', () => {
  it('constructor', () => {
    const cookies = new Cookies();
    new Cookies('test');
    new Cookies({ foo: 'bar' });
    new Cookies(null);

    new Cookies('test', { decode: (a: string) => a });

    // $FlowExpectedError[incompatible-call] Does not accept just anything
    new Cookies(123);
    // $FlowExpectedError[prop-missing] Only accepts decode in second arg obj
    new Cookies('test', { foo: () => {} });
  });
});
