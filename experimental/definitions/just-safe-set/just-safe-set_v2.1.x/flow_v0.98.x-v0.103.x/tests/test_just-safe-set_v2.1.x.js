// @flow

import { describe, it } from 'flow-typed-test';
import set from 'just-safe-set';

describe('Sanity tests', () => {
  it('should pass when used properly', () => {
    var obj1 = {};
    (set(obj1, 'a.aa.aaa', 4): boolean);

    var obj2 = {};
    (set(obj2, ['a', 'aa', 'aaa'], 4): boolean);

    var obj3 = {a: {aa: {aaa: 2}}};
    (set(obj3, 'a.aa.aaa', 3): boolean);

    // don't clobber existing
    var obj4 = {a: {aa: {aaa: 2}}};
    (set(obj4, 'a.aa', {bbb: 7}): boolean); // false
    
    const obj5 = {a: {}};
    const sym = Symbol();
    (set(obj5.a, sym, 7): boolean);
  });

  it('raise an error with malformed inputs', () => {
    // $ExpectError
    set('hello');

    // $ExpectError
    set({}, 5);
  });
});
