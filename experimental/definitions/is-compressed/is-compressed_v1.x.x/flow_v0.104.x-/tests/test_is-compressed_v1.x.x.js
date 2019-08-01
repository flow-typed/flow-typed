import isCompressed from 'is-compressed';

isCompressed('any-string');
(isCompressed('any-string'): boolean);

// $ExpectError
isCompressed(4);

// $ExpectError
isCompressed({});

// $ExpectError
isCompressed();

// $ExpectError
isCompressed(null);

// $ExpectError
(isCompressed('any-string'): number);
