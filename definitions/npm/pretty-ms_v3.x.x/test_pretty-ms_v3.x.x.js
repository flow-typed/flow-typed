// @flow

import prettyMs from 'pretty-ms';

prettyMs(1502217145948);
prettyMs(1502217145948, { verbose: true });
prettyMs(1502217145948, { compact: true });
prettyMs(1502217145948, { msDecimalDigits: 2 });
prettyMs(1502217145948, { secDecimalDigits: 2 });
prettyMs(1502217145948, { verbose: true, compact: true, msDecimalDigits: 2, secDecimalDigits: 2 });

// $FlowExpectedError
prettyMs('text');

// $FlowExpectedError
prettyMs({});

// $FlowExpectedError
prettyMs(null);

// $FlowExpectedError
prettyMs();

// $FlowExpectedError
prettyMs(1502217145948, null);
