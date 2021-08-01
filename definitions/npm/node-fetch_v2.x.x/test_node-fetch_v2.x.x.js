// @flow

import http from 'http';
import https from 'https';
import nodeFetch, { type Headers, type Response } from 'node-fetch';
import type { Readable } from 'stream';

(nodeFetch('foo'): Promise<Response>);
(nodeFetch('foo', {}): Promise<Response>);

// $FlowExpectedError[incompatible-call] Error url has to be string
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
    // $FlowExpectedError[incompatible-call]  number is not a valid body type
    body: 5,
    // $FlowExpectedError[incompatible-call]  number is not a valid agent type
    agent: 5,
});

// Response tests
nodeFetch('foo').then(res => {
    (res.clone(): Response);

    // Response Headers
    (res.headers: Headers);
    (res.headers.append('foo', 'bar'): void);
    // $FlowExpectedError[incompatible-call] 
    (res.headers.append(5, 'bar'): void);
    (res.headers.delete('foo'): void);
    // $FlowExpectedError[incompatible-call] 
    (res.headers.delete(5): void);
    (res.headers.entries(): Iterator<[string, string]>);
    (res.headers.get('test'): string);
    // $FlowExpectedError[incompatible-call] 
    (res.headers.get(5): string);
    (res.headers.getAll('test'): Array<string>);
    (res.headers.has('foo'): boolean);
    // $FlowExpectedError[incompatible-call] 
    (res.headers.has(5): boolean);
    (res.headers.keys(): Iterator<string>);
    // $FlowExpectedError[incompatible-call]  value should be a string
    (res.headers.set('foo', 5): void);
    (res.headers.values(): Iterator<string>);


    (res.ok: boolean);
    (res.status: number);
    (res.statusText: string);

    // Response type
    (res.type: ResponseType);
    res.type = 'basic';
    // $FlowExpectedError[incompatible-type]  foo is not a valid option
    res.type = 'foo';

    (res.url: string);
    (res.size: number);
    (res.timeout: number);

    (res.bodyUsed: boolean);
    (res.body: Readable);
    (res.text(): Promise<string>);
    (res.buffer(): Promise<Buffer>);
});
