import isRootPath from 'is-root-path';

isRootPath('any-string');
(isRootPath('any-string'): boolean);

// $ExpectError
isRootPath(4);

// $ExpectError
isRootPath({});

// $ExpectError
isRootPath();

// $ExpectError
isRootPath(null);

// $ExpectError
(isRootPath('any-string'): number);
