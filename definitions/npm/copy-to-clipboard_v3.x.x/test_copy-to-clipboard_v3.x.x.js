// @flow

import copyToClipboard from 'copy-to-clipboard';

copyToClipboard('a string to copy');
copyToClipboard('a string to copy', { debug: true });
copyToClipboard('a string to copy', { message: 'copied' });
copyToClipboard('a string to copy', { debug: true, message: 'copied' });

// $FlowExpectedError
copyToClipboard();

// $FlowExpectedError
copyToClipboard(undefined);

// $FlowExpectedError
copyToClipboard(null);

// $FlowExpectedError
copyToClipboard(123);

// $FlowExpectedError
copyToClipboard({});

// $FlowExpectedError
copyToClipboard('a string to copy', null);

// $FlowExpectedError
copyToClipboard('a string to copy', { test: '' });
