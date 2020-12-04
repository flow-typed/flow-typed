import isRelativeUrl from 'is-relative-url';

isRelativeUrl('any-string');
(isRelativeUrl('any-string'): boolean);

// $FlowExpectedError
isRelativeUrl(4);

// $FlowExpectedError
isRelativeUrl({});

// $FlowExpectedError
isRelativeUrl();

// $FlowExpectedError
isRelativeUrl(null);

// $FlowExpectedError
(isRelativeUrl('any-string'): number);
