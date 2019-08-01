import isTextPath from 'is-text-path';

isTextPath('any-string');
(isTextPath('any-string'): boolean);

// $ExpectError
isTextPath(4);

// $ExpectError
isTextPath({});

// $ExpectError
isTextPath();

// $ExpectError
isTextPath(null);

// $ExpectError
(isTextPath('any-string'): number);
