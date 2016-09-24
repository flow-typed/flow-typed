import isoFetch, { Response, Headers } from 'isomorphic-fetch';
import type { ResponseType } from 'isomorphic-fetch';

(isoFetch('foo'): Promise<Response>);
(isoFetch('foo', {}): Promise<Response>);

// $ExpectError url has to be string
(isoFetch(123): Promise<any>);

isoFetch('foo', {
    method: 'GET'
});

// $ExpectError foo is not a valid method
isoFetch('foo', {
    method: 'foo'
});

isoFetch('foo', {
    body: 'bar'
});

// $ExpectError number is not a valid body type
isoFetch('foo', {
    body: 5
});

// Response tests
isoFetch('foo').then(res => {
    (res.Response(): Response);
    (res.clone(): Response);
    (res.error(): Response);
    (res.redirect('foo', 500): Response);
    // $ExpectError too few arguments
    (res.redirect(): Response);
    // $ExpectError url should be a string
    (res.redirect(1, 200): Response);

    // Response Headers
    (res.headers: Headers);
    (res.headers.Headers(): Headers);
    (res.headers.append('foo', 'bar'): void);
    // $ExpectError
    (res.headers.append(5, 'bar'): void);
    (res.headers.delete('foo'): void);
    // $ExpectError
    (res.headers.delete(5): void);
    (res.headers.entries(): Iterator<*>);
    (res.headers.get('test'): string);
    // $ExpectError
    (res.headers.get(5): string);
    (res.headers.getAll('foo'): Array<string>);
    // $ExpectError
    (res.headers.getAll(5): Array<string>);
    (res.headers.has('foo'): Boolean);
    // $ExpectError
    (res.headers.has(5): Boolean);
    (res.headers.keys(): Iterator<string>);
    (res.headers.set('foo', 5): void);
    (res.headers.values(): Iterator<*>);


    (res.ok: Boolean);
    (res.redirected: Boolean);
    (res.status: number);
    (res.statusText: string);

    // Response type
    (res.type: ResponseType);
    // $ExpectError foo is not a valid option
    res.type = 'foo';

    (res.url: string);
});





