/* @flow */
import { describe, it } from 'flow-typed-test';
import { parse, stringify, extract } from "query-string";

describe('#parse', () => {
    it('should accept a string as an argument', () => {
        parse('?foo=bar');
    });

    it('should not accept a number as an argument', () => {
        // $ExpectError: should be a string
        parse(10);
    });

    it('should return a object', () => {
        (parse(' '): {})
    });
});


describe('#stringify', () => {
    it('should accept a object as an argument', () => {
        stringify({foo: 'bar'})
    });

    it('should not accept a number as an argument', () => {
        // $ExpectError: should be an object
        stringify(10);
    });

    it('should return a string', () => {
        (stringify({foo: null}): string)
    });
});

describe('#extract', () => {
    it('should accept a string as an argument', () => {
        extract('http://example.com?query=foo')
    });

    it('should not accept a number as an argument', () => {
        // $ExpectError: should be a string
        extract(10);
    });

    it('should return a string', () => {
        (extract(''): string)
    });
});