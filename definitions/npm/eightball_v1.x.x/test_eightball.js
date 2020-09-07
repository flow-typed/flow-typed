// @flow

import eightball from 'eightball';

(eightball(): string);
(eightball.predictions: Array<string>);

// $FlowExpectedError
(eightball(): number);

// $FlowExpectedError
(eightball.predictions: string);
