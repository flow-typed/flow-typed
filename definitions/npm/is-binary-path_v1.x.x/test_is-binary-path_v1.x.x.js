import isBinaryPath from 'is-binary-path';

isBinaryPath('any-string');
(isBinaryPath('any-string'): boolean);

// $FlowExpectedError
isBinaryPath(4);

// $FlowExpectedError
isBinaryPath({});

// $FlowExpectedError
isBinaryPath();

// $FlowExpectedError
isBinaryPath(null);

// $FlowExpectedError
(isBinaryPath('any-string'): number);
