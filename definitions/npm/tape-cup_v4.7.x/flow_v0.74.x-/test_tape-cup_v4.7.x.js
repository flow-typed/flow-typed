// @flow

import test from 'tape-cup';

test('some sanity test', t => {
  t.fail();
  t.fail('some message');

  t.ok(5, 'some value provided');
  t.ok(5); // without optional message

  t.equal('hello', 'goodbye', 'some message');

  // $ExpectError
  t.plan();
  t.plan(5);
});

test.only('single sanity test', t => {});
