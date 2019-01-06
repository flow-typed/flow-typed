// @flow strict

import randomize from 'randomatic';

// $ExpectError
randomize();

(randomize('00'): string);
(randomize('*', 10): string);
(randomize('Aa0!', 10): string);
