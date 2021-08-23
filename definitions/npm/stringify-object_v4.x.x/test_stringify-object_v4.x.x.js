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
    // $FlowExpectedError
    stringifyObject('');

    // $FlowExpectedError
    stringifyObject(true);

    // $FlowExpectedError
    stringifyObject();
  });
});

describe('The `options` parameter', () => {
  it('should accept valid objects', () => {
    stringifyObject(obj, {});
  });

  it('should error on non object types', () => {
    // $FlowExpectedError
    stringifyObject(obj, '');

    // $FlowExpectedError
    stringifyObject(obj, true);

    // $FlowExpectedError
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
      // $FlowExpectedError
      indent: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      indent: 123,
    });

    stringifyObject(obj, {
      // $FlowExpectedError
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
      // $FlowExpectedError
      singleQuotes: '',
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      singleQuotes: 123,
    });

    stringifyObject(obj, {
      // $FlowExpectedError
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
      // $FlowExpectedError
      filter: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      filter: '',
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      filter: [],
    });

    it('should error on non boolean return types', () => {
      stringifyObject(obj, {
        // $FlowExpectedError
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
      // $FlowExpectedError
      transform: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      transform: 123,
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      transform: [],
    });
  });

  it('should error on non string return types', () => {
    stringifyObject(obj, {
      // $FlowExpectedError
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
      // $FlowExpectedError
      inlineCharacterLimit: '',
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      inlineCharacterLimit: true,
    });

    stringifyObject(obj, {
      // $FlowExpectedError
      inlineCharacterLimit: [],
    });
  });
});

describe('The `pad` parameter', () => {
  it('should accept valid strings', () => {
    stringifyObject(obj, {}, '  ');
  });

  it('should error on non string types', () => {
    // $FlowExpectedError
    stringifyObject(obj, {}, true);

    // $FlowExpectedError
    stringifyObject(obj, {}, 123);

    // $FlowExpectedError
    stringifyObject(obj, {}, []);
  });
});
