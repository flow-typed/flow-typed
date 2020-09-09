import isPathInCwd from 'is-path-in-cwd';

isPathInCwd('any-string');
(isPathInCwd('any-string'): boolean);

// $FlowExpectedError
isPathInCwd(4);

// $FlowExpectedError
isPathInCwd({});

// $FlowExpectedError
isPathInCwd();

// $FlowExpectedError
isPathInCwd(null);

// $FlowExpectedError
(isPathInCwd('any-string'): number);
