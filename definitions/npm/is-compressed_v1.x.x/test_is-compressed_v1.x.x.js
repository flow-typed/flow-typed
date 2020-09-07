import isCompressed from 'is-compressed';

isCompressed('any-string');
(isCompressed('any-string'): boolean);

// $FlowExpectedError
isCompressed(4);

// $FlowExpectedError
isCompressed({});

// $FlowExpectedError
isCompressed();

// $FlowExpectedError
isCompressed(null);

// $FlowExpectedError
(isCompressed('any-string'): number);
