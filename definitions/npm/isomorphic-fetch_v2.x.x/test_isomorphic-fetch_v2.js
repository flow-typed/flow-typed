import isoFetch from 'isomorphic-fetch';

(isoFetch('foo'): Promise<any>);
(isoFetch('foo', {}): Promise<any>);
// $ExpectError url has to be string
(isoFetch(123): Promise<any>);
