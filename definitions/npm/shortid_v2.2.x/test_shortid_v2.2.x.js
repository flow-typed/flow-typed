// @flow

import shortid from 'shortid';

(shortid(): string);

(shortid.generate(): string);

shortid.seed(10);
shortid.seed(10).seed(20);
// $FlowExpectedError
shortid.seed();
// $FlowExpectedError
shortid.seed('hello');

shortid.worker(10);
shortid.worker(10).worker(20);
// $FlowExpectedError
shortid.worker();
// $FlowExpectedError
shortid.worker('hello');

const chars: string = shortid.characters('abcd');
// $FlowExpectedError
shortid.characters();
// $FlowExpectedError
shortid.characters(2);

(shortid.decode('qwerty').version: number);
(shortid.decode('qwerty').worker: number);
// $FlowExpectedError
(shortid.decode('qwerty').other: number);
// $FlowExpectedError
shortid.decode(1);

(shortid.isValid('qwerty'): boolean);
(shortid.isValid(123): boolean);
(shortid.isValid({}): boolean);
(shortid.isValid(): boolean);
