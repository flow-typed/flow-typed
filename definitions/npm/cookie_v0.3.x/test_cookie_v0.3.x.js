import { describe, it } from 'flow-typed-test';
import cookie from 'cookie';

describe('cookie library', () => {
  describe('parse method', () => {
    it('parse string', () => {
      const parsedData: {[string]: string} = cookie.parse('some-string');
    });

    it('parse string with custom decode method', () => {
      cookie.parse('some-string', {
        decode: () => { return 'some-string' },
      });
    });

    it('cannot parse object', () => {
      // $ExpectError
      cookie.parse({});
    });
  });

  describe('serialize method', () => {
    it('serialize strings', () => {
      const serializedData: string = cookie.serialize('name', 'value');
    });

    it('serialize strings with custom options', () => {
      const serializedData: string = cookie.serialize('name', 'value', {
        expires: new Date('2018-05-05'),
        sameSite: 'lax',
      });
    });

    it('accept two strings only', () => {
      // $ExpectError
      cookie.serialize('name');

      // $ExpectError
      cookie.serialize('name', {});
    });

    it('accept expire as options only as Date', () => {
      // $ExpectError
      cookie.parse('name', 'value', {
        expires: 'date',
      });
    });
  });
});
