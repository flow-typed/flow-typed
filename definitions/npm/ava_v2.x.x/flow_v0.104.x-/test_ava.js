// @flow
import test from 'ava';
import { describe, it } from 'flow-typed-test';

describe('ava', () => {
  it('writing tests', () => {
    test('simple test', t => {
      t.pass();
    });

    test.skip('simple test', t => {
      t.pass();
    });

    test.serial('passes serially', t => {
      t.pass();
    });

    test.serial.skip('passes serially', t => {
      t.pass();
    });

    test('planning', t => {
      t.plan(1)
      // $FlowExpectedError: not enough arguments.
      t.plan()
      // $FlowExpectedError: not a number.
      t.plan('foo')
    });

    test('resolves with unicorn', t => {
      return Promise.resolve('unicorn').then(result => {
        t.is(result, 'unicorn');
      });
    });

    test.cb('handles callbacks', t => {
      t.end();
    });
  });

  it('assertions', () => {
    test('simple test', async t => {
      t.assert(true);
      t.assert.skip(true);
      t.assert(true, 'message');
      t.assert.skip(true, 'message');
      // $FlowExpectedError: too many arguments.
      t.assert(true, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.assert.skip(true, 'message', 1);

      t.deepEqual({}, {});
      t.deepEqual.skip({}, {});
      t.deepEqual({}, {}, 'message');
      t.deepEqual.skip({}, {}, 'message');
      // $FlowExpectedError: too many arguments.
      t.deepEqual({}, {}, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.deepEqual.skip({}, {}, 'message', 1);

      t.fail();
      t.fail.skip();
      t.fail('message');
      t.fail.skip('message');
      // $FlowExpectedError: expected a string.
      t.fail(1);
      // $FlowExpectedError: too many arguments.
      t.fail('message', 1);
      // $FlowExpectedError: too many arguments.
      t.fail.skip('message', 1);

      t.false();
      t.false.skip();
      t.false(null, 'message');
      t.false.skip(null, 'message');
      // $FlowExpectedError: too many arguments.
      t.false(null, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.false.skip(null, 'message', 1);

      t.falsy();
      t.falsy.skip();
      t.falsy(null, 'message');
      t.falsy.skip(null, 'message');
      // $FlowExpectedError: too many arguments.
      t.falsy(null, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.falsy.skip(null, 'message', 1);

      t.is(1, 1);
      t.is.skip(1, 1);
      t.is(1, 1, 'message');
      t.is.skip(1, 1, 'message');
      // $FlowExpectedError: too many arguments.
      t.is(1, 1, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.is.skip(1, 1, 'message', 1);

      t.not(1, 2);
      t.not.skip(1, 2);
      t.not(1, 2, 'message');
      t.not.skip(1, 2, 'message');
      // $FlowExpectedError: too many arguments.
      t.not(1, 2, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.not.skip(1, 2, 'message', 1);

      t.notDeepEqual({ a: 1 }, { b: 1 });
      t.notDeepEqual.skip({ a: 1 }, { b: 1 });
      t.notDeepEqual({ a: 1 }, { b: 1 }, 'message');
      t.notDeepEqual.skip({ a: 1 }, { b: 1 }, 'message');
      // $FlowExpectedError: too many arguments.
      t.notDeepEqual({ a: 1 }, { b: 1 }, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.notDeepEqual.skip({ a: 1 }, { b: 1 }, 'message', 1);

      t.notRegex('a', /b/);
      t.notRegex.skip('a', /b/);
      t.notRegex('a', /b/, 'message');
      t.notRegex.skip('a', /b/, 'message');
      // $FlowExpectedError: too many arguments.
      t.notRegex('a', /b/, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.notRegex.skip('a', /b/, 'message', 1);

      t.notThrows(() => 'ok');
      t.notThrows.skip(() => 'ok');
      t.notThrows(() => 'ok', 'message');
      t.notThrows.skip(() => 'ok', 'message');
      // $FlowExpectedError: function not provided.
      t.notThrows('message');
      // $FlowExpectedError: function not provided.
      t.notThrows('ok', 'message');
      // $FlowExpectedError: too many arguments.
      t.notThrows(() => 'ok', 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.notThrows.skip(() => 'ok', 'message', 1);
      t.notThrows(() => 'ok');

      await t.notThrowsAsync(() => Promise.resolve('ok'));
      await t.notThrowsAsync.skip(() => Promise.resolve('ok'))
      await t.notThrowsAsync(Promise.resolve('ok'));
      await t.notThrowsAsync.skip(Promise.resolve('ok'));
      await t.notThrowsAsync(Promise.resolve('ok'), 'message');
      await t.notThrowsAsync.skip(Promise.resolve('ok'), 'message');
      // $FlowExpectedError: not a function or promise.
      await t.notThrowsAsync('not good', 'message');
      // $FlowExpectedError: doesn't return a promise.
      await t.notThrowsAsync(() => 'not good', 'message');
      // $FlowExpectedError: too many arguments.
      await t.notThrowsAsync(Promise.resolve('ok'), 'message', 1);
      // $FlowExpectedError: too many arguments.
      await t.notThrowsAsync.skip(Promise.resolve('ok'), 'message', 1);

      t.pass();
      t.pass.skip();
      t.pass('message');
      t.pass.skip('message');
      // $FlowExpectedError: not a string.
      t.pass(1);1
      // $FlowExpectedError: too many arguments.
      t.pass('message', 1);

      t.regex('a', /a/);
      t.regex.skip('a', /a/);
      t.regex('a', /a/, 'message');
      t.regex.skip('a', /a/, 'message');
      // $FlowExpectedError: too many arguments.
      t.regex('a', /a/, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.regex.skip('a', /a/, 'message', 1);

      t.snapshot(null);
      // t.snapshot.skip(null);
      t.snapshot(null, 'message');
      // t.snapshot.skip(null, 'message');
      t.snapshot(null, {id: 'test' }, 'message');
      t.snapshot.skip(null, {id: 'test' }, 'message');
      // $FlowExpectedError: invalid arguments.
      t.snapshot(null, null);
      // $FlowExpectedError: invalid snapshot options.
      t.snapshot.skip(null, {id: 1 });
      // $FlowExpectedError: too many arguments.
      t.snapshot(null, {id: 'test' }, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.snapshot.skip(null, {id: 'test' }, 'message', 1);

      t.throws(() => { throw new Error() });
      t.throws.skip(() => { throw new Error() });
      t.throws(() => { throw new Error() }, 'message');
      t.throws.skip(() => { throw new Error() }, 'message');
      // $FlowExpectedError: function not provided.
      t.throws('message');
      // $FlowExpectedError: function not provided.
      t.throws(new Error(), 'message');
      // $FlowExpectedError: too many arguments.
      t.throws(() => { throw new Error() }, 'message', 1);
      // $FlowExpectedError: too many arguments.
      t.throws.skip(() => { throw new Error() }, 'message', 1);
    });
  });
});
