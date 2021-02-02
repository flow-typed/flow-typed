import isPathCwd from 'is-path-cwd';

isPathCwd('any-string');
(isPathCwd('any-string'): boolean);

// $FlowExpectedError
isPathCwd(4);

// $FlowExpectedError
isPathCwd({});

// $FlowExpectedError
isPathCwd();

// $FlowExpectedError
isPathCwd(null);

// $FlowExpectedError
(isPathCwd('any-string'): number);
