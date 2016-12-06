// @flow

import Uri from 'jsuri';

new Uri('testytest')
  .addQueryParam('test', 'para')
  .replaceQueryParam('test', 'ppp')
  .addTrailingSlash();

// $ExpectError
new Uri([]);

// $ExpectError
new Uri().host().port();
