// @flow
import { describe, it } from 'flow-typed-test';
import Cookies from 'universal-cookie';

describe('universal-cookie', () => {
  const cookies = new Cookies();

  it('constructor', () => {
    new Cookies('test');
    new Cookies({ foo: 'bar' });
    new Cookies(null);

    new Cookies('test', { decode: (a: string) => a });

    // $FlowExpectedError[incompatible-call] Does not accept just anything
    new Cookies(123);
    // $FlowExpectedError[prop-missing] Only accepts decode in second arg obj
    new Cookies('test', { foo: () => {} });
  });

  it('get', () => {
    const a: string = cookies.get('test');
    cookies.get('test', { doNotParse: true });
    cookies.get('test', {}, { decode: (s: string) => s });
    // $FlowExpectedError[incompatible-type] Can optionally accept generic
    const b: string = cookies.get<number>('test');
  });

  it('getAll', () => {
    const a: string = cookies.getAll({ doNotParse: true });
    cookies.getAll({}, { decode: (s: string) => s });
    // $FlowExpectedError[incompatible-type] Can optionally accept generic
    const b: string = cookies.getAll<number>({ doNotParse: true });
  });

  it('set', () => {

  });

  it('remove', () => {

  });

  it('addChangeListener', () => {

  });

  it('removeChangeListener', () => {

  });
});
