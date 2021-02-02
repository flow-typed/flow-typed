// @flow

import http from 'http';
import https from 'https';
import nodeFetch, { type Headers, type Response } from 'node-fetch';
import type { Readable } from 'stream';

(nodeFetch('foo'): Promise<Response>);
(nodeFetch('foo', {}): Promise<Response>);

// $FlowExpectedError url has to be string
(nodeFetch(123): Promise<Response>);

nodeFetch('foo', {
    method: 'GET',
    headers: {
      Authorization: "Foo",
    },
});

nodeFetch('foo', {
    body: 'bar',
    agent: new http.Agent({}),
});

nodeFetch('foo', {
    // $FlowExpectedError number is not a valid body type
    body: 5,
    // $FlowExpectedError number is not a valid agent type
    agent: 5,
});

// Response tests
nodeFetch('foo').then(res => {
    (res.clone(): Response);

    // Response Headers
    (res.headers: Headers);
    (res.headers.append('foo', 'bar'): void);
    // $FlowExpectedError
    (res.headers.append(5, 'bar'): void);
    (res.headers.delete('foo'): void);
    // $FlowExpectedError
    (res.headers.delete(5): void);
    // $FlowExpectedError `entries` not found in Headers
    (res.headers.entries(): Iterator<*>);
    (res.headers.get('test'): string);
    // $FlowExpectedError
    (res.headers.get(5): string);
    (res.headers.getAll('test'): Array<string>);
    (res.headers.has('foo'): boolean);
    // $FlowExpectedError
    (res.headers.has(5): boolean);
    // $FlowExpectedError `keys` not found in Headers
    (res.headers.keys(): Iterator<string>);
    // $FlowExpectedError value should be a string
    (res.headers.set('foo', 5): void);
    // $FlowExpectedError `values` not found in Headers
    (res.headers.values(): Iterator<*>);


    (res.ok: boolean);
    (res.status: number);
    (res.statusText: string);

    // Response type
    (res.type: ResponseType);
    res.type = 'basic';
    // $FlowExpectedError foo is not a valid option
    res.type = 'foo';

    (res.url: string);
    (res.size: number);
    (res.timeout: number);

    (res.bodyUsed: boolean);
    (res.body: Readable);
    (res.text(): Promise<string>);
    (res.buffer(): Promise<Buffer>);
});
