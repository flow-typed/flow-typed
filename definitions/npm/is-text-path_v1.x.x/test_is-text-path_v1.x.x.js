import isTextPath from 'is-text-path';

isTextPath('any-string');
(isTextPath('any-string'): boolean);

// $FlowExpectedError
isTextPath(4);

// $FlowExpectedError
isTextPath({});

// $FlowExpectedError
isTextPath();

// $FlowExpectedError
isTextPath(null);

// $FlowExpectedError
(isTextPath('any-string'): number);
