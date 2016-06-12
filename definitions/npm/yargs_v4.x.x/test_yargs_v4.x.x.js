// @flow

import yargs from "yargs";

yargs
  .options({'foo': {alias: 'foo-alias', default: true}})
  .describe('foo', 'This is a description of foo!');

// $ExpectError
yargs.nope;
