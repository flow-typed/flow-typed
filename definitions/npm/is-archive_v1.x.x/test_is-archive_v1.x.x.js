import isArchive from 'is-archive';

isArchive('any-string');
(isArchive('any-string'): boolean);

// $ExpectError
isArchive(4);

// $ExpectError
isArchive({});

// $ExpectError
isArchive();

// $ExpectError
isArchive(null);

// $ExpectError
(isArchive('any-string'): number);
