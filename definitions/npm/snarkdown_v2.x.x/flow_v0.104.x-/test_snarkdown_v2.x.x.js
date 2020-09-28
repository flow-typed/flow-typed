// @flow

import snarkdown from 'snarkdown';

snarkdown('A **test** string');
snarkdown('A **test** string', { test: 'https://test.dev' });
// $FlowExpectedError[incompatible-call]
snarkdown();
// $FlowExpectedError[incompatible-call]
snarkdown({});
// $FlowExpectedError[incompatible-call]
snarkdown('A **test** string', []);
