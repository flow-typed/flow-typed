import isRootPath from 'is-root-path';

isRootPath('any-string');
(isRootPath('any-string'): boolean);

// $FlowExpectedError
isRootPath(4);

// $FlowExpectedError
isRootPath({});

// $FlowExpectedError
isRootPath();

// $FlowExpectedError
isRootPath(null);

// $FlowExpectedError
(isRootPath('any-string'): number);
