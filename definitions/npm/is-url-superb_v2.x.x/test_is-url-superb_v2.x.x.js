// @flow

import isUrl from 'is-url-superb';

(isUrl('http://flowtype.org'): boolean);

// $FlowExpectedError
isUrl({});

// $FlowExpectedError
isUrl(null);

// $FlowExpectedError
const t: string = isUrl('http://flowtype.org');
