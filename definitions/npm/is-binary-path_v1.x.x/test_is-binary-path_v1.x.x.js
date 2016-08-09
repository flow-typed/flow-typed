import isBinaryPath from 'is-binary-path';

isBinaryPath('any-string');
(isBinaryPath('any-string'): boolean);

// $ExpectError
isBinaryPath(4);

// $ExpectError
isBinaryPath({});

// $ExpectError
isBinaryPath();

// $ExpectError
isBinaryPath(null);

// $ExpectError
(isBinaryPath('any-string'): number);
