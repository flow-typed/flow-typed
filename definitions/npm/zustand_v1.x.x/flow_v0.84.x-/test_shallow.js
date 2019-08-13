// @flow strict
import shallow, { shallow as namedShallow } from 'zustand/shallow';

(shallow({ a: 1 }, { b: 2 }): boolean);
(namedShallow({ a: 1 }, { b: 2 }): boolean);
