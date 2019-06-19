// @flow
import * as catNames from 'cat-names';

// $ExpectError
(catNames.all: string);
(catNames.all: Array<string>);

// $ExpectError
(catNames.random(): number);
(catNames.random(): string);

