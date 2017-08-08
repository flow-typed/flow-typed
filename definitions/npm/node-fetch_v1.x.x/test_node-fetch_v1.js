// @flow

import nodeFetch, { type Headers, type Response } from 'node-fetch';
import type { Readable } from 'stream';

(nodeFetch('foo'): Promise<Response>);
(nodeFetch('foo', {}): Promise<Response>);

// $ExpectError url has to be string
(nodeFetch(123): Promise<Response>);

nodeFetch('foo', {
    method: 'GET'
});

nodeFetch('foo', {
    body: 'bar'
});

nodeFetch('foo', {
    // $ExpectError number is not a valid body type
    body: 5
});

// Response tests
nodeFetch('foo').then(res => {
    (res.clone(): Response);

    // Response Headers
    (res.headers: Headers);
    (res.headers.append('foo', 'bar'): void);
    // $ExpectError
    (res.headers.append(5, 'bar'): void);
    (res.headers.delete('foo'): void);
    // $ExpectError
    (res.headers.delete(5): void);
    // $ExpectError `entries` not found in Headers
    (res.headers.entries(): Iterator<*>);
    (res.headers.get('test'): string);
    // $ExpectError
    (res.headers.get(5): string);
    (res.headers.getAll('test'): Array<string>);
    (res.headers.has('foo'): boolean);
    // $ExpectError
    (res.headers.has(5): boolean);
    // $ExpectError `keys` not found in Headers
    (res.headers.keys(): Iterator<string>);
    // $ExpectError value should be a string
    (res.headers.set('foo', 5): void);
    // $ExpectError `values` not found in Headers
    (res.headers.values(): Iterator<*>);


    (res.ok: boolean);
    (res.status: number);
    (res.statusText: string);

    // Response type
    (res.type: ResponseType);
    res.type = 'basic';
    // $ExpectError foo is not a valid option
    res.type = 'foo';

    (res.url: string);
    (res.size: number);
    (res.timeout: number);

    (res.bodyUsed: boolean);
    (res.body: Readable);
    (res.text(): Promise<string>);
    (res.buffer(): Promise<Buffer>);
});
