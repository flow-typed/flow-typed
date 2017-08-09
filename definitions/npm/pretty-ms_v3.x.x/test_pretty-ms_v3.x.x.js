// @flow

import prettyMs from 'pretty-ms';

prettyMs(1502217145948);
prettyMs(1502217145948, { verbose: true });
prettyMs(1502217145948, { compact: true });
prettyMs(1502217145948, { msDecimalDigits: 2 });
prettyMs(1502217145948, { secDecimalDigits: 2 });
prettyMs(1502217145948, { verbose: true, compact: true, msDecimalDigits: 2, secDecimalDigits: 2 });

// $ExpectError
prettyMs('text');

// $ExpectError
prettyMs({});

// $ExpectError
prettyMs(null);

// $ExpectError
prettyMs();

// $ExpectError
prettyMs(1502217145948, null);
