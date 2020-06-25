// @flow

import Uri from 'jsuri';

new Uri('testytest')
  .addQueryParam('test', 'para')
  .replaceQueryParam('test', 'ppp')
  .addTrailingSlash();

// $FlowExpectedError
new Uri([]);

// $FlowExpectedError
new Uri().host().port();
