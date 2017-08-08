// @flow

import copyToClipboard from 'copy-to-clipboard';

copyToClipboard('a string to copy');

// $ExpectError
copyToClipboard();

// $ExpectError
copyToClipboard(undefined);

// $ExpectError
copyToClipboard(null);

// $ExpectError
copyToClipboard(123);

// $ExpectError
copyToClipboard({});
