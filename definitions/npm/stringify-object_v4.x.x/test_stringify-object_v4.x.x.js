// @flow

import { describe, it } from 'flow-typed-test';
import stringifyObject from 'stringify-object';

const obj = {
  foo: "bar 'bar'",
  foo2: [
    'foo',
    'bar',
    {
      foo: "bar 'bar'",
    },
  ],
  'foo-foo': 'bar',
  '2foo': 'bar',
  '@#': 'bar',
  $el: 'bar',
  _private: 'bar',
  number: 1,
  boolean: true,
  date: new Date('2014-01-29T22:41:05.665Z'),
  escapedString: '""',
  null: null,
  undefined: undefined,
  fn: function fn() {},
  regexp: /./,
  NaN: NaN,
  Infinity: Infinity,
  newlines: 'foo\nbar\r\nbaz',
  // See https://github.com/facebook/flow/issues/3258
  // [Symbol()]: Symbol(),
  // [Symbol('foo')]: Symbol('foo'),
  // [Symbol.for('foo')]: Symbol.for('foo'),
};

describe('The `input` parameter', () => {
  it('should accept mixed values', () => {
    // See https://github.com/yeoman/stringify-object/blob/f9e53f4e422510a2868e4876291058c69ca12b80/index.js#L52-L62
    stringifyObject(obj);
    stringifyObject('');
    stringifyObject(123);
    stringifyObject([1, 2, 3]);
    stringifyObject();
  });
});

describe('The `options` parameter', () => {
  it('should accept valid objects', () => {
    stringifyObject(obj, {});
  });

  it('should error on non object types', () => {
    // $FlowExpectedError[incompatible-call]
    stringifyObject(obj, '');

    // $FlowExpectedError[incompatible-call]
    stringifyObject(obj, true);

    // $FlowExpectedError[incompatible-call]
    stringifyObject(obj, []);
  });

  it('should error on malformed options objects', () => {
    // $FlowExpectedError[prop-missing]
    stringifyObject(obj, { foo: 'bar' });
  });
});

describe('The `indent` option', () => {
  it('should accept valid strings', () => {
    stringifyObject(obj, {
      indent: '  ',
    });
  });

  it('should error on non string types', () => {
    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      indent: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      indent: 123,
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      indent: [],
    });
  });
});

describe('The `singleQuotes` option', () => {
  it('should accept valid booleans', () => {
    stringifyObject(obj, {
      singleQuotes: true,
    });
  });

  it('should error on non boolean types', () => {
    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      singleQuotes: '',
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      singleQuotes: 123,
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      singleQuotes: [],
    });
  });
});

describe('The `filter` option', () => {
  it('should accept valid functions', () => {
    stringifyObject(obj, {
      filter: (obj, prop) => typeof obj[prop] === 'string',
    });
  });

  it('should error on non function types', () => {
    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      filter: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      filter: '',
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      filter: [],
    });

    it('should error on non boolean return types', () => {
      stringifyObject(obj, {
        // $FlowExpectedError[incompatible-call]
        filter: () => '',
      });
    });
  });
});

describe('The `transform` option', () => {
  it('should accept valid functions', () => {
    stringifyObject(
      {
        user: 'becky',
        password: 'secret',
      },
      {
        transform: (obj, prop, originalResult) => {
          if (prop === 'password') {
            return originalResult.replace(/\w/g, '*');
          } else {
            return originalResult;
          }
        },
      }
    );
  });

  it('should error on non function types', () => {
    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      transform: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      transform: 123,
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      transform: [],
    });
  });

  it('should error on non string return types', () => {
    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      transform: () => true,
    });
  });
});

describe('The `inlineCharacterLimit` option', () => {
  it('should accept valid numbers', () => {
    stringifyObject(obj, {
      inlineCharacterLimit: 12,
    });
  });

  it('should error on non number types', () => {
    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      inlineCharacterLimit: '',
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      inlineCharacterLimit: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError[incompatible-call]
      inlineCharacterLimit: [],
    });
  });
});

describe('The `pad` parameter', () => {
  it('should accept valid strings', () => {
    stringifyObject(obj, {}, '  ');
  });

  it('should error on non string types', () => {
    // $FlowExpectedError[incompatible-call]
    stringifyObject(obj, {}, true);

    // $FlowExpectedError[incompatible-call]
    stringifyObject(obj, {}, 123);

    // $FlowExpectedError[incompatible-call]
    stringifyObject(obj, {}, []);
  });
});
