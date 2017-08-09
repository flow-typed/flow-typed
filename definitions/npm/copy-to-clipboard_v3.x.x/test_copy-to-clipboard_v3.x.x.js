// @flow

import copyToClipboard from 'copy-to-clipboard';

copyToClipboard('a string to copy');
copyToClipboard('a string to copy', { debug: true });
copyToClipboard('a string to copy', { message: 'copied' });
copyToClipboard('a string to copy', { debug: true, message: 'copied' });

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

// $ExpectError
copyToClipboard('a string to copy', null);
