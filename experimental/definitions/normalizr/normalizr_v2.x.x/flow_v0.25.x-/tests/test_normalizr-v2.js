// @flow
import Normalizr from 'normalizr';

(Normalizr.normalize({ foo: '' }, {}): Object);
(Normalizr.normalize([{ foo: '' }], {}): Object);
(Normalizr.valuesOf({}): Normalizr$Schema);
// $ExpectError
(Normalizr.normalize(): Object);
