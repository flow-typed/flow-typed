// @flow
import * as catNames from 'cat-names';

// $FlowExpectedError
(catNames.all: string);
(catNames.all: Array<string>);

// $FlowExpectedError
(catNames.random(): number);
(catNames.random(): string);

