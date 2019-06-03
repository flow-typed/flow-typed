// @flow

import { describe, it } from 'flow-typed-test';

import { extract, parse, stringify, parseUrl } from 'query-string';

describe('query-string', () => {
  describe('extract', () => {
    it('should accept a single string argument', () => {
      extract('?test');
    });

    it('should not accept non-string argument', () => {
      // $ExpectError: should be a string
      extract({});
    });

    it('should not accept more than one arguments', () => {
      // $ExpectError: Cannot call `extract` because no more than 1 argument is expected by function
      extract('?test', '&test');
    });
  });

  describe('parse', () => {
    it('should accept a single string argument', () => {
      parse('test');
    });

    it('should not accept non-string 1st argument', () => {
      // $ExpectError: should be a string
      parse({ test: null });
    });

    it('should accept a single string argument and an optional ParserOptions', () => {
      parse('test', { arrayFormat: 'bracket' });
    });

    it('should only accept exact ParserOptions type as second argument', () => {
      // $ExpectError: strict is not a parse option
      parse('test', { strict: true });
    });
  });

  describe('stringify', () => {
    it('should accept a single Object argument', () => {
      stringify({ test: null });
    });

    it('should not accept non-Object 1st argument', () => {
      // $ExpectError: should be an object
      stringify('test');
    });

    it('should accept an Object argument and an optional StringifyOptions', () => {
      stringify({ test: null }, { strict: true });
    });

    it('should only accept exact StringifyOptions type as second argument', () => {
      // $ExpectError: true is not a stringify option
      stringify({ test: null }, { test: true });
    });
  });

  describe('parseUrl', () => {
    it('should accept a single string argument', () => {
      parseUrl('test');
    });

    it('should not accept non-string 1st argument', () => {
      // $ExpectError: should be a string
      parseUrl({ test: null });
    });

    it('should accept a single string argument and an optional ParserOptions', () => {
      parseUrl('test', { arrayFormat: 'bracket' });
    });

    it('should only accept exact ParserOptions type as second argument', () => {
      // $ExpectError: strict is not a parse option
      parseUrl('test', { strict: true });
    });
  });
});
