// @flow
import { describe, it } from 'flow-typed-test';

const beautify = require('json-beautify');

describe('json-beautify', () => {
  const obj = {
    str: "Hello World",
    num: 42,
    smallarray: [ 1, 2, 3, "foo", {} ],
    smallobject: {
      foo: "bar",
      bar: 42,
    },
    bigarray: [
      1,
      2,
      3,
      "foo",
      { foo: "bar", bar: 42, arr: [ 1, 2, 3, "foo", {} ] },
    ],
    bigobject: {
      foo: [ 1, 2, 3, "foo", {} ],
      bar: 42,
      a: {
        b: { c: 42 },
      },
      foobar: "FooBar",
    },
  };

  it('works', () => {
    beautify(obj, null, 2, 100);
  });

  it('errors', () => {
    // $FlowExpectedError[incompatible-call]
    beautify();

    // $FlowExpectedError[incompatible-call]
    beautify(obj, null, 2, '');
    // $FlowExpectedError[incompatible-call]
    beautify(obj, null, true, 100);
    // $FlowExpectedError[incompatible-call]
    beautify(obj, '', 2, 100);
  });
});
