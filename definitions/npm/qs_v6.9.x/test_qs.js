// @flow

import { it, describe } from "flow-typed-test";
import { parse, stringify, formats } from "qs";

function noop() {}

describe('parse', () => {

  // TODO: Break out the rest of the parameters into the "it" form.
  parse("test", {
    allowPrototypes: true,
    arrayLimit: 5,
    decoder: noop,
    delimiter: "/",
    depth: 10,
    parameterLimit: 15,
    plainObjects: true,
    strictNullHandling: true,
    ignoreQueryPrefix: true,
    parseArrays: true,
    allowDots: true
  });

  it('only accepts a string for the data parameter', () => {
    parse('foo')

    // $ExpectError
    parse({})
    // $ExpectError
    parse(0)
    // $ExpectError
    parse([])
  })

  it('returns an inert object', () => {
    // This assertion isn't great because the any (Object) can be cast without
    // issue.
    const obj: $ReadOnly<{ [string]: mixed, ... }> = parse("test")

    // This combined with the positive assertion above should make for a robust
    // enforcement of the return type, immune to Object/any's type coverage
    // loss.
    //
    // $ExpectError
    const s: string = parse("test")
  })

  it("accepts a 'utf-8' format with charsetSentinel", () => {
    parse('foo', { charset: 'utf-8', charsetSentinel: true })
  })

  it("accepts a 'iso-8859-1' format with charsetSentinel", () => {
    parse('foo', { charset: 'iso-8859-1', charsetSentinel: true })
  })

  it('accepts a charsetSentinel boolean option', () => {
    parse('foo', { charsetSentinel: true })
    parse('foo', { charsetSentinel: false })

    // $ExpectError
    parse('foo', { charsetSentinel: 'baz' })
  })

  it('accepts a comma boolean option', () => {
    parse('foo', { comma: true })
    parse('foo', { comma: false })

    // $ExpectError
    parse('foo', { comma: 'baz' })
  })

  it('accepts an decoder option as a function', () => {
    parse('foo', { decoder: () => '' })
    // $ExpectError
    parse('foo', { decoder: {} })
    // $ExpectError
    parse('foo', { decoder: [] })
    // $ExpectError
    parse('foo', { decoder: 5 })
    // $ExpectError
    parse('foo', { decoder: 'foo' })
  })

  describe('decoder function', () => {
    // The error conditions here insure type coverage is enforced.
    it('accepts a string', () => {
      parse('foo', { decoder: (x: string) => '' })
      // $ExpectError
      parse('foo', { decoder: (x: number) => '' })
      // $ExpectError
      parse('foo', { decoder: (x: Array<mixed>) => '' })
      // $ExpectError
      parse('foo', { decoder: (x: void) => '' })
    })

    it('returns any value', () => {
      parse('foo', { decoder: () => '' })
      parse('foo', { decoder: () => ({}) })
      parse('foo', { decoder: () => [] })
      parse('foo', { decoder: () => null })
      parse('foo', { decoder: () => undefined })
      parse('foo', { decoder: () => 5 })
    })
  })

  it('accepts an filter option as a function', () => {
    stringify([], { filter: () => '' })
  })

  it('accepts an filter option as an array of numbers or strings', () => {
    stringify([], { filter: [] })
    stringify([], { filter: ['foo'] })
    stringify([], { filter: [5] })
  })

  it('does not allow other types to be used for the filter option', () => {
    // $ExpectError
    stringify([], { filter: {} })
    // $ExpectError
    stringify([], { filter: 5 })
    // $ExpectError
    stringify([], { filter: 'foo' })
  })

  it('accepts an interpretNumericEntities boolean option', () => {
    parse('foo', { interpretNumericEntities: true })
    parse('foo', { interpretNumericEntities: false })

    // $ExpectError
    parse('foo', { interpretNumericEntities: 'baz' })
  })

  it("does not accept an arbitrary charset", () => {
    // $ExpectError
    parse('foo', { charset: 'foobar', charsetSentinel: true })
  })

  it('does not accept unknown options', () => {
    // $ExpectError
    parse('foo', { bar: 'baz' })
  })
})

describe('stringify', () => {
  it('accepts an inert object for the input data', () => {
    stringify({ foo: 'bar' })
  })

  it('accepts an array for the input data', () => {
    stringify([])
  })

  it('does not accept non-array and non-object types', () => {
    // $ExpectError
    stringify(3)
    // $ExpectError
    stringify('baz')
  })

  it('does not accept unknown options', () => {
    // $ExpectError
    stringify([], { foobar: 'baz' })
  })

  it('accepts an arrayFormat option that can only be brackets, comma, indices, or repeat', () => {
    stringify([], { arrayFormat: 'brackets' })
    stringify([], { arrayFormat: 'comma' })
    stringify([], { arrayFormat: 'indices' })
    stringify([], { arrayFormat: 'repeat' })
    // $ExpectError
    stringify([], { arrayFormat: 'foo' })
  })

  it("accepts a 'utf-8' format with charsetSentinel", () => {
    stringify({}, { charset: 'utf-8', charsetSentinel: true })
  })

  it("accepts a 'iso-8859-1' format with charsetSentinel", () => {
    stringify({}, { charset: 'iso-8859-1', charsetSentinel: true })
  })

  it('accepts a charsetSentinel boolean option', () => {
    stringify({}, { charsetSentinel: true })
    stringify({}, { charsetSentinel: false })

    // $ExpectError
    stringify({}, { charsetSentinel: 'baz' })
  })

  it('accepts an encode option as a boolean', () => {
    stringify([], { encode: true })
    stringify([], { encode: false })
    // $ExpectError
    stringify([], { encode: 'foo' })
    // $ExpectError
    stringify([], { encode: [] })
    // $ExpectError
    stringify([], { encode: {} })
  })

  it('accepts an encodeValuesOnly option as a boolean', () => {
    stringify([], { encodeValuesOnly: true })
    stringify([], { encodeValuesOnly: false })
    // $ExpectError
    stringify([], { encodeValuesOnly: 'foo' })
    // $ExpectError
    stringify([], { encodeValuesOnly: [] })
    // $ExpectError
    stringify([], { encodeValuesOnly: {} })
  })

  it('accepts an encoder option as a function', () => {
    stringify([], { encoder: () => '' })
    // $ExpectError
    stringify([], { encoder: {} })
    // $ExpectError
    stringify([], { encoder: [] })
    // $ExpectError
    stringify([], { encoder: 5 })
    // $ExpectError
    stringify([], { encoder: 'foo' })
  })

  describe('encoder function', () => {
    // The error conditions here insure type coverage is enforced.
    it('accepts any value', () => {
      stringify({}, { encoder: (x: mixed) => '' })
      // $ExpectError
      stringify({}, { encoder: (x: number) => '' })
      // $ExpectError
      stringify({}, { encoder: (x: string) => '' })
      // $ExpectError
      stringify({}, { encoder: (x: Array<mixed>) => '' })
      // $ExpectError
      stringify({}, { encoder: (x: void) => '' })
    })

    it('returns a string', () => {
      stringify({}, { encoder: (x: mixed) => '' })
      // $ExpectError
      stringify({}, { encoder: (x: mixed) => ({}) })
      // $ExpectError
      stringify({}, { encoder: (x: mixed) => [] })
      // $ExpectError
      stringify({}, { encoder: (x: mixed) => null })
      // $ExpectError
      stringify({}, { encoder: (x: mixed) => 5 })
    })
  })

  it('accepts an filter option as a function', () => {
    stringify([], { filter: () => '' })
  })

  it('accepts an filter option as an array of numbers or strings', () => {
    stringify([], { filter: [] })
    stringify([], { filter: ['foo'] })
    stringify([], { filter: [5] })
  })

  it('does not allow other types to be used for the filter option', () => {
    // $ExpectError
    stringify([], { filter: {} })
    // $ExpectError
    stringify([], { filter: 5 })
    // $ExpectError
    stringify([], { filter: 'foo' })
  })

  describe('filter function', () => {
    // The error conditions here insure type coverage is enforced.
    it('accepts a string for the first parameter', () => {
      stringify({}, { filter: (x: string) => '' })
      // $ExpectError
      stringify({}, { filter: (x: number) => '' })
      // $ExpectError
      stringify({}, { filter: (x: Array<mixed>) => '' })
      // $ExpectError
      stringify({}, { filter: (x: void) => '' })
    })

    it('accepts any value for the second parameter', () => {
      stringify({}, { filter: (x, y: mixed) => '' })
      // $ExpectError
      stringify({}, { filter: (x, y: string) => '' })
      // $ExpectError
      stringify({}, { filter: (x, y: number) => '' })
      // $ExpectError
      stringify({}, { filter: (x, y: Array<mixed>) => '' })
      // $ExpectError
      stringify({}, { filter: (x, y: void) => '' })
    })

    it('returns any kind of value', () => {
      stringify({}, { filter: () => '' })
      stringify({}, { filter: () => ({}) })
      stringify({}, { filter: () => [] })
      stringify({}, { filter: () => null })
      stringify({}, { filter: () => undefined })
      stringify({}, { filter: () => 5 })
    })
  })

  it('accepts an indices option as a boolean', () => {
    stringify([], { indices: true })
    stringify([], { indices: false })
    // $ExpectError
    stringify([], { indices: 'foo' })
    // $ExpectError
    stringify([], { indices: [] })
    // $ExpectError
    stringify([], { indices: {} })
  })

  it('accepts a sort option as a function', () => {
    stringify([], { sort: () => 0 })
    // $ExpectError
    stringify([], { sort: {} })
    // $ExpectError
    stringify([], { sort: [] })
    // $ExpectError
    stringify([], { sort: 5 })
    // $ExpectError
    stringify([], { sort: 'foo' })
  })

  describe('sort function', () => {
    // The error conditions here insure type coverage is enforced.
    it('accepts two strings', () => {
      stringify({}, { sort: (a: string, b: string) => 0 })
      // $ExpectError
      stringify({}, { sort: (a: number) => 0 })
      // $ExpectError
      stringify({}, { sort: (a: Array<mixed>) => 0 })
      // $ExpectError
      stringify({}, { sort: (a: {[string]: mixed}) => 0 })
      // $ExpectError
      stringify({}, { sort: (a: void) => 0 })
      // $ExpectError
      stringify({}, { sort: (a, b: number) => 0 })
      // $ExpectError
      stringify({}, { sort: (a, b: Array<mixed>) => 0 })
      // $ExpectError
      stringify({}, { sort: (a, b: {[string]: mixed}) => 0 })
      // $ExpectError
      stringify({}, { sort: (a, b: void) => 0 })
    })

    it('returns a number that is -1, 0, or 1', () => {
      stringify({}, { sort: () => -1 })
      stringify({}, { sort: () => 0 })
      stringify({}, { sort: () => 1 })
      // $ExpectError
      stringify({}, { sort: () => 2 })
      // $ExpectError
      stringify({}, { sort: () => -2 })
      // $ExpectError
      stringify({}, { sort: () => ({}) })
      // $ExpectError
      stringify({}, { sort: () => [] })
      // $ExpectError
      stringify({}, { sort: () => null })
      // $ExpectError
      stringify({}, { sort: () => 5 })
    })
  })
})

describe('module', () => {
  it('does not support unknown properties', () => {
    // $ExpectError
    qs.foobar
  })
})

const obj = { test: null };

// TODO: Break out the rest of the parameters into the "it" form.
stringify(obj, {
  addQueryPrefix: true,
  allowDots: true,
  delimiter: "/",
  encode: true,
  encodeValuesOnly: true,
  encoder: x => '',
  format: "/",
  serializeDate: noop,
  skipNulls: true,
  sort: (a, b) => -1,
  strictNullHandling: true,
});

stringify(obj, { arrayFormat: "brackets" });
stringify(obj, { arrayFormat: "indices" });
stringify(obj, { arrayFormat: "repeat" });

// $ExpectError: arrayFormat is not an enum value
stringify(obj, { arrayFormat: false });
// $ExpectError: arrayFormat is not an enum value
stringify(obj, { arrayFormat: "test" });

// $ExpectError: should be an object
stringify("test");
