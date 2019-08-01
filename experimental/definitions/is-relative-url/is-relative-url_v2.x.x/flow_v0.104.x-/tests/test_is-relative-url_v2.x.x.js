import isRelativeUrl from 'is-relative-url';

isRelativeUrl('any-string');
(isRelativeUrl('any-string'): boolean);

// $ExpectError
isRelativeUrl(4);

// $ExpectError
isRelativeUrl({});

// $ExpectError
isRelativeUrl();

// $ExpectError
isRelativeUrl(null);

// $ExpectError
(isRelativeUrl('any-string'): number);
