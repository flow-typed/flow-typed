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

describe('The `obj` parameter', () => {
  it('should accept valid objects', () => {
    stringifyObject(obj);
  });

  it('should error on non object types', () => {
    // $ExpectError
    stringifyObject('');

    // $ExpectError
    stringifyObject(true);

    // $ExpectError
    stringifyObject();
  });
});

describe('The `options` parameter', () => {
  it('should accept valid objects', () => {
    stringifyObject(obj, {});
  });

  it('should error on non object types', () => {
    // $ExpectError
    stringifyObject(obj, '');

    // $ExpectError
    stringifyObject(obj, true);

    // $ExpectError
    stringifyObject(obj, []);
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
      // $ExpectError
      indent: true,
    });

    stringifyObject(obj, {
      // $ExpectError
      indent: 123,
    });

    stringifyObject(obj, {
      // $ExpectError
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
      // $ExpectError
      singleQuotes: '',
    });

    stringifyObject(obj, {
      // $ExpectError
      singleQuotes: 123,
    });

    stringifyObject(obj, {
      // $ExpectError
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
      // $ExpectError
      filter: true,
    });

    stringifyObject(obj, {
      // $ExpectError
      filter: '',
    });

    stringifyObject(obj, {
      // $ExpectError
      filter: [],
    });

    it('should error on non boolean return types', () => {
      stringifyObject(obj, {
        // $ExpectError
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
      // $ExpectError
      transform: true,
    });

    stringifyObject(obj, {
      // $ExpectError
      transform: 123,
    });

    stringifyObject(obj, {
      // $ExpectError
      transform: [],
    });
  });

  it('should error on non string return types', () => {
    stringifyObject(obj, {
      // $ExpectError
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
      // $ExpectError
      inlineCharacterLimit: '',
    });

    stringifyObject(obj, {
      // $ExpectError
      inlineCharacterLimit: true,
    });

    stringifyObject(obj, {
      // $ExpectError
      inlineCharacterLimit: [],
    });
  });
});

describe('The `pad` parameter', () => {
  it('should accept valid strings', () => {
    stringifyObject(obj, {}, '  ');
  });

  it('should error on non string types', () => {
    // $ExpectError
    stringifyObject(obj, {}, true);

    // $ExpectError
    stringifyObject(obj, {}, 123);

    // $ExpectError
    stringifyObject(obj, {}, []);
  });
});
