// @flow

import type OptionType from 'fantasy-options';
import Option from 'fantasy-options';

const { Some, None } = Option;

const testFoo = (name: string): OptionType<*> =>
  name === 'foo' ? Some('correct') : None;

let f: OptionType<*> = testFoo('bar');

// $ExpectError
const testFooError = (name: string): OptionType<string> =>
  name === 'foo' ? Some(1) : None;

Some(x => x * 3).ap(Some(4));

// $ExpectError
Some(x => x * 4).ap(Some('foo'));

Some('foo').ap(Some.of(x => x * 4));

Some(1).map(x => x + 2);

// $ExpectError
Some(1).map(3);

// $ExpectError
Some('foo').map(x => x * 3);

Some('world').fold(x => `Hello, ${x}!`, () => 'I dunno');
None.fold(x => 'a', () => 'b');

// $ExpectError
Some('Hello').fold(x => `${x}, world!`, 24)

// $ExpectError
Some('Hello').fold(42, () => 43)

Some('Hello').chain(x => Some('world!'));

// $ExpectError
Some('Hello').chain(x => x * x);

Some([1, 2]).concat(Some[(3, 4)]);

Some([]).concat(None).getOrElse([]);

// This should be an error, unsure how to type concat
Some(3).concat(Some([3, 3]));

Some(3).orElse('foo');
None.orElse('foo') === 'foo';
