import isPathInCwd from 'is-path-in-cwd';

isPathInCwd('any-string');
(isPathInCwd('any-string'): boolean);

// $ExpectError
isPathInCwd(4);

// $ExpectError
isPathInCwd({});

// $ExpectError
isPathInCwd();

// $ExpectError
isPathInCwd(null);

// $ExpectError
(isPathInCwd('any-string'): number);
