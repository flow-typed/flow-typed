/* @flow */

import MagicString, { Bundle } from 'magic-string';

new MagicString('a + b')
  .insertRight(0, '(')
  .insertLeft(4, ')')
  .toString();

// $ExpectError
new MagicString('foo').insert();

let bundle = new Bundle();
bundle.addSource({
  filename: 'a',
  content: new MagicString('a + b')
});
