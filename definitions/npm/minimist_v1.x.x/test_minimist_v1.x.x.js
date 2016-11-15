import minimist from 'minimist';

// Correct:
minimist(process.argv);
// $ExpectError
minimist([1, 2, 3]);

// Correct:
minimist(process.argv, {
  string: 'baz',
  boolean: true,
  alias: { f: 'foo', b: ['bar', 'baz'] },
  default: { foo: NaN },
  stopEarly: true,
  // TODO: Strings as keys don't work...
  // '--': true,
  unknown: (param: string) => true
});

const result = minimist(process.argv, {});
const _: Array<string> = result._;
const foo: string | boolean = result.foo;
// $ExpectError
const bar: true = result.bar;
