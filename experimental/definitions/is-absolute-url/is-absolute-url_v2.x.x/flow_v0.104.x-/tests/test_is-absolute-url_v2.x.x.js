import isAbsoluteUrl from 'is-absolute-url';

isAbsoluteUrl('any-string');
(isAbsoluteUrl('any-string'): boolean);

// $ExpectError
isAbsoluteUrl(4);

// $ExpectError
isAbsoluteUrl({});

// $ExpectError
isAbsoluteUrl();

// $ExpectError
isAbsoluteUrl(null);

// $ExpectError
(isAbsoluteUrl('any-string'): number);
