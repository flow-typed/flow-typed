// @flow

import { extract, parse, parseUrl, stringify, stringifyUrl } from 'query-string';

extract('?test');

// $ExpectError: should be a string
extract({});

parse('test');

parse('test', { arrayFormat: 'bracket' });

parse('test', { decode: true, sort: false, parseNumbers: true, parseBooleans: true });

// $ExpectError: strict is not a parse option
parse('test', { strict: true });

// $ExpectError: should be a string
parse({ test: null });

(parse('foo').foo: null | string | Array<string>);

// $ExpectError: result props cannot be undefined
(parse('foo').foo: void);

stringify({ test: null });

stringify({ test: null }, { strict: true });

// $ExpectError: should be an object
stringify('test');

// $ExpectError: true is not a stringify option
stringify({ test: null }, { test: true });

stringify({ test: [1, 2, 3] }, { arrayFormat: 'bracket' });
stringify(
    { test: 1, empty: null },
    { encode: true, strict: true, sort: false, skipNull: true }
);

stringify({ test: 1 });

stringify({ test: [1, 2, 3] });

stringify({ test: false });

stringify({ test: null });

stringify({ test: undefined });

stringify({ test: 'test', empty: null }, { skipNull: true });

// Check we can strongly type the query object.
type Query = {|
  parameter: string,
|};

type ReadOnlyQuery = {|
  +parameter: string,
|};

type OptionalQuery = {|
  parameter?: string,
  other?: string,
|};

const query: Query = { parameter: 'foo' };
const shapedQuery1: $Shape<Query> = { parameter: 'foo' };
const shapedQuery2: $Shape<Query> = {};
const optionalQuery1: OptionalQuery = { parameter: 'foo' };
const optionalQuery2: OptionalQuery = { parameter: 'foo', other: 'bar' };
const readOnlyQuery: ReadOnlyQuery = { parameter: 'foo' };
stringify(query);
stringify(shapedQuery1);
stringify(shapedQuery2);
stringify(optionalQuery1);
stringify(optionalQuery2);
stringify(readOnlyQuery);

parseUrl('test');

parseUrl('test', { arrayFormat: 'bracket' });

// $ExpectError: strict is not a parse option
parseUrl('test', { strict: true });

// $ExpectError: should be a string
parseUrl({ test: null });

stringifyUrl(
    { url: 'https://example.com', query: { test: [1, 2, 3] } },
    { encode: true, strict: true, sort: false, skipNull: true }
);
