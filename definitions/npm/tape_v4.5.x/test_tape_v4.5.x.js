/* @flow */

/* eslint-disable no-console, no-unused-vars */

import test from 'tape';

test((t) => { t.end(); });
test('flow', (t) => { t.end(); });

test('flow', { skip: true }, (t) => {
  t.end();
});

test('flow', { timeout: 100 }, (t) => {
  t.end();
});

// $ExpectError
test('flow', { skip: 1 }, (t) => {
  t.end();
});

// $ExpectError
test('flow', { timeout: '' }, (t) => {
  t.end();
});

// Nested tests
test('flow', { skip: true }, (t) => {
  t.test({ skip: true }, (q) => {
    q.end();
  });

  t.test((q) => {
    q.end();
  });

  t.test('x', { skip: true }, (q) => {
    q.end();
  });

  t.test('y', (q) => {
    q.end();
  });
});

test({ skip: true }, (t) => {
  t.end();
});


// Context tests
// TODO: If there is no specific tape$Context annotation,
//       type errors inside this will not be directly marked,
//       because flow thinks that there is a parameter problem,
//       instead of telling the user that t.comment() was used wrong
test('flow', (t: tape$Context) => {
  const x = '1';
  const y = '2';

  t.onFinish(() => {});
  t.plan(5);
  t.fail('explode');
  t.pass('pass');
  t.timeoutAfter(1000);
  t.skip('skipped');

  t.ok(undefined, 'test');
  t.ok('', 'test');
  t.ok(true, 'test');
  t.ok({}, 'test');
  t.true(true, 'test');
  t.assert(true, 'test');

  t.notOk(false, 'test');
  t.false('', 'test');
  t.notok({}, 'test');

  t.error(new Error('error'), 'some error');
  t.error('', 'some error');
  t.ifError('', 'some error');
  t.ifErr('', 'some error');
  t.iferror('', 'some error');

  t.equal('1', '2', 'test');
  t.equals(undefined, 1, 'test');
  t.isEqual(undefined, undefined);
  t.is({}, {}, 'test');
  t.strictEqual(null, null, 'test');
  t.strictEquals('', '', 'test');

  t.notEqual('', 1, 'test');
  t.notEquals('', 1, 'test');
  t.notStrictEqual('', 1, 'test');
  t.notStrictEquals('', 1, 'test');
  t.isNotEqual('', 1, 'test');
  t.isNot('', 1);
  t.not(undefined, undefined, 'test');
  t.doesNotEqual('', null, 'test');
  t.isInequal('', 1, 'test');

  t.deepEqual({}, {}, 'test');
  t.deepEquals({}, {}, 'test');
  t.isEquivalent({}, {}, 'test');
  t.same({}, {}, 'test');

  t.notDeepEqual({}, {}, 'test');
  t.notEquivalent({}, {}, 'test');
  t.notDeeply({}, {}, 'test');
  t.notSame({}, {}, 'test');
  t.isNotDeepEqual({}, {}, 'test');
  t.isNotDeeply({}, {}, 'test');
  t.isNotEquivalent({}, {}, 'test');
  t.isInequivalent({}, {}, 'test');

  t.deepLooseEqual({}, {}, 'test');
  t.looseEqual({}, {}, 'test');
  t.looseEquals({}, {}, 'test');

  t.notDeepLooseEqual({}, {}, 'test');
  t.notLooseEqual({}, {});
  t.notLooseEquals({}, {}, '');

  t.throws(() => {}, /expected error message/, 'test');
  t.throws(() => {}, () => {}, 'test');
  t.throws(() => {});

  t.doesNotThrow(() => {}, /err message/, 'test');
  t.doesNotThrow(() => {});

  t.comment('test');

  // $ExpectError: needs message
  t.comment();

  t.end();
});

const htest = test.createHarness();
htest.createStream().pipe(process.stdout);
htest.createStream({ objectMode: true }).pipe(process.stdout);

// $ExpectError: objectMode should be a boolean
htest.createStream({ objectMode: '' }).pipe(process.stdout);

test.createStream({ objectMode: true }).on('data', (row) => {
  console.log(JSON.stringify(row));
});

test.only('test', (t) => {
  t.end();
});

test.only('test', { timeout: 1000 }, (t) => {
  t.end();
});
