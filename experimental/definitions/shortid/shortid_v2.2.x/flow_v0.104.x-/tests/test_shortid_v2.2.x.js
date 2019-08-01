// @flow

import shortid from 'shortid';

(shortid(): string);

(shortid.generate(): string);

shortid.seed(10);
shortid.seed(10).seed(20);
// $ExpectError
shortid.seed();
// $ExpectError
shortid.seed('hello');

shortid.worker(10);
shortid.worker(10).worker(20);
// $ExpectError
shortid.worker();
// $ExpectError
shortid.worker('hello');

const chars: string = shortid.characters('abcd');
// $ExpectError
shortid.characters();
// $ExpectError
shortid.characters(2);

(shortid.decode('qwerty').version: number);
(shortid.decode('qwerty').worker: number);
// $ExpectError
(shortid.decode('qwerty').other: number);
// $ExpectError
shortid.decode(1);

(shortid.isValid('qwerty'): boolean);
(shortid.isValid(123): boolean);
(shortid.isValid({}): boolean);
(shortid.isValid(): boolean);
