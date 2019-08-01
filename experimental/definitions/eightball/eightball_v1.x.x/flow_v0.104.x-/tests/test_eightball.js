// @flow

import eightball from 'eightball';

(eightball(): string);
(eightball.predictions: Array<string>);

// $ExpectError
(eightball(): number);

// $ExpectError
(eightball.predictions: string);
