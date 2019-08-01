// @flow
import expect from 'expect';

/* Trivial case */
expect(true).toBe(true);
expect(true).toBe('foo');

// $ExpectError
expect.foo();

// $ExpectError
expect(true).toFoo();


/* expect.assert() */

expect.assert(true, 'mymessage');

// $ExpectError
expect.assert('foo', '');
