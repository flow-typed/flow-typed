import isoUnfetch from 'isomorphic-unfetch';

(isoUnfetch('foo'): Promise<Response>);
(isoUnfetch('foo', {}): Promise<Response>);

// $ExpectError url has to be string
(isoUnfetch(123): Promise<any>);

isoUnfetch('foo', {
    method: 'GET'
});

isoUnfetch('foo', {
    body: 'bar'
});

// $ExpectError number is not a valid body type
isoUnfetch('foo', {
    body: 5
});

// Response tests
isoUnfetch('foo').then(res => {
    (res.clone(): Response);

    // Response Headers
    (res.headers: Headers);
    (res.headers.append('foo', 'bar'): void);
    // $ExpectError
    (res.headers.append(5, 'bar'): void);
    (res.headers.delete('foo'): void);
    // $ExpectError
    (res.headers.delete(5): void);
    (res.headers.entries(): Iterator<*>);
    (res.headers.get('test'): null | string);
    // $ExpectError
    (res.headers.get(5): null | string);
    (res.headers.has('foo'): boolean);
    // $ExpectError
    (res.headers.has(5): boolean);
    (res.headers.keys(): Iterator<string>);
    // $ExpectError value should be a string
    (res.headers.set('foo', 5): void);
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
});
