import isPathCwd from 'is-path-cwd';

isPathCwd('any-string');
(isPathCwd('any-string'): boolean);

// $ExpectError
isPathCwd(4);

// $ExpectError
isPathCwd({});

// $ExpectError
isPathCwd();

// $ExpectError
isPathCwd(null);

// $ExpectError
(isPathCwd('any-string'): number);
