import isArchive from 'is-archive';

isArchive('any-string');
(isArchive('any-string'): boolean);

// $FlowExpectedError
isArchive(4);

// $FlowExpectedError
isArchive({});

// $FlowExpectedError
isArchive();

// $FlowExpectedError
isArchive(null);

// $FlowExpectedError
(isArchive('any-string'): number);
