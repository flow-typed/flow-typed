import isAbsoluteUrl from 'is-absolute-url';

isAbsoluteUrl('any-string');
(isAbsoluteUrl('any-string'): boolean);

// $FlowExpectedError
isAbsoluteUrl(4);

// $FlowExpectedError
isAbsoluteUrl({});

// $FlowExpectedError
isAbsoluteUrl();

// $FlowExpectedError
isAbsoluteUrl(null);

// $FlowExpectedError
(isAbsoluteUrl('any-string'): number);
