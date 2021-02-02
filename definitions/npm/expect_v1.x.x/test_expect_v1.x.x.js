// @flow
import expect from 'expect';

/* Trivial case */
expect(true).toBe(true);
expect(true).toBe('foo');

// $FlowExpectedError
expect.foo();

// $FlowExpectedError
expect(true).toFoo();


/* expect.assert() */

expect.assert(true, 'mymessage');

// $FlowExpectedError
expect.assert('foo', '');
