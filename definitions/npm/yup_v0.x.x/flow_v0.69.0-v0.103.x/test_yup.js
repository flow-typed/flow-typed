// @flow
import {
  isSchema,
  setLocale,
  array,
  bool,
  date,
  mixed,
  string,
  number,
  ref,
  object,
  type Schema,
} from 'yup';
import { it, describe } from 'flow-typed-test';

it('should return boolean when calling isSchema', () => {
  (isSchema(null): boolean);
});

describe('setLocale', () => {
  it('should work properly', () => {
    (setLocale({
      mixed: {
        notType: () => 'ой',
        required: 'Заполни',
      },
      string: {
        email: 'Введи нормальный э-майл адрес ганчар',
      },
    }): void);
  });

  it('should raise an error when passing object with missing key', () => {
    // $FlowExpectedError: `abc` is missing
    setLocale({ abc: { test: 'test' } });
  });

  it('should raise an error when passing invalid locale object', () => {
    // $FlowExpectedError: `min__` is missing
    setLocale({ number: { min__: 'test' } });
  });
});

describe('bool & boolean', () => {
  const instance = new bool();
  const instance2 = bool();

  describe('own methods', () => {
    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .nullable()
          .nullable(true)
          .nullable(false)
          .required()
          .required('message')
          .required(() => 'message')
          .notRequired();
      });
    });

    it('should raise an error when passing incompatible arguments', () => {
      [instance, instance2].map(schema => {
        // $FlowExpectedError
        schema.nullable('need boolean');

        // $FlowExpectedError
        schema.required({ need: 'function or string' });
      });
    });
  });

  describe('common schema methods', () => {
    it('should modify type by `nullable` and `required*` methods', () => {
      const val1 = bool()
        .nullable(false)
        .validateSync(null);

      (val1: boolean);
      // $FlowExpectedError: check any
      (val1: number);

      const val2 = bool()
        .nullable()
        .validateSync(null);

      (val2: ?boolean);
      // $FlowExpectedError: check any
      (val2: number);

      const val3 = bool()
        .required()
        .validateSync(null);

      (val3: boolean);
      // $FlowExpectedError: check any
      (val3: number);

      const val4 = bool()
        .notRequired()
        .validateSync(null);

      (val4: ?boolean);
      // $FlowExpectedError: check any
      (val4: number);
    });

    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .clone()
          .label('str')
          .meta({ meta: 'data' })
          .concat(bool())
          .strict(true)
          .strip(false)
          .default('any value')
          .typeError()
          .typeError('message')
          .typeError(() => 'message')
          .oneOf([true, false])
          .notOneOf([false, true])
          .when('key', { is: true, then: number(), otherwise: string() })
          .when(['key'], (other, schema) =>
            other === 4 ? schema.clone() : schema
          )
          .test('name', 'message', () => true)
          .test({
            test: () => Promise.resolve(true),
            name: 'name',
            message: 'message',
            params: {},
            exclusive: true,
          })
          .test({
            test: () => Promise.resolve(true),
          })
          .transform((a, b) => a + b)
          .clone();

        schema.validate(null).then(val => {
          (val: boolean);

          // $FlowExpectedError: check any
          (val: number);
        });

        schema.validate(null, {
          path: 'foo.baz',
          strict: true,
          abortEarly: true,
          stripUnknown: true,
          recursive: true,
          context: {},
        });
      });
    });
  });
});

describe('number', () => {
  const instance = new number();
  const instance2 = number();

  describe('own methods', () => {
    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .nullable()
          .nullable(true)
          .nullable(false)
          .required()
          .required('message')
          .required(() => 'message')
          .notRequired()
          .min(1)
          .min(1, 'message')
          .max(1)
          .max(1, 'message')
          .lessThan(1)
          .lessThan(1, 'message')
          .moreThan(1)
          .moreThan(1, 'message')
          .positive()
          .negative()
          .integer()
          .positive('message')
          .positive(() => 'message')
          .negative('message')
          .negative(() => 'message')
          .integer('message')
          .integer(() => 'message')
          .truncate()
          .round('floor');
      });
    });

    it('should raise an error when passing incompatible arguments', () => {
      [instance, instance2].map(schema => {
        // $FlowExpectedError
        schema.nullable('need number');
        // $FlowExpectedError
        schema.required({ need: 'function or string' });
        // $FlowExpectedError
        schema.min('need a number');
        // $FlowExpectedError
        schema.min(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.max('need a number');
        // $FlowExpectedError
        schema.max(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.lessThan('need a number');
        // $FlowExpectedError
        schema.lessThan(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.moreThan('need a number');
        // $FlowExpectedError
        schema.moreThan(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.positive({ need: 'func or string' });
        // $FlowExpectedError
        schema.negative({ need: 'func or string' });
        // $FlowExpectedError
        schema.integer({ need: 'func or string' });
        // $FlowExpectedError: `__floor` is missing in enum
        schema.round('__floor');
      });
    });
  });

  describe('common schema methods', () => {
    it('should modify type by `nullable` and `required*` methods', () => {
      const val1 = number()
        .nullable(false)
        .validateSync(null);

      (val1: number);
      // $FlowExpectedError: check any
      (val1: string);

      const val2 = number()
        .nullable()
        .validateSync(null);

      (val2: ?number);
      // $FlowExpectedError: check any
      (val2: string);

      const val3 = number()
        .required()
        .validateSync(null);

      (val3: number);
      // $FlowExpectedError: check any
      (val3: string);

      const val4 = number()
        .notRequired()
        .validateSync(null);

      (val4: ?number);
      // $FlowExpectedError: check any
      (val4: string);
    });

    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .clone()
          .label('str')
          .meta({ meta: 'data' })
          .concat(number())
          .strict(true)
          .strip(false)
          .default('any value')
          .typeError()
          .typeError('message')
          .typeError(() => 'message')
          .oneOf([1, 2])
          .notOneOf([1, 2, 3])
          .when('key', { is: '12', then: number(), otherwise: string() })
          .when(['key'], (other, schema) =>
            other === 4 ? schema.clone() : schema
          )
          .test('name', 'message', () => true)
          .test({
            test: () => Promise.resolve(true),
            name: 'name',
            message: 'message',
            params: {},
            exclusive: true,
          })
          .test({
            test: () => Promise.resolve(true),
          })
          .transform((a, b) => a + b)
          .clone();

        schema.validate(null).then(val => {
          (val: number);

          // $FlowExpectedError: check any
          (val: string);
        });

        schema.validate(null, {
          path: 'foo.baz',
          strict: true,
          abortEarly: true,
          stripUnknown: true,
          recursive: true,
          context: {},
        });
      });
    });
  });
});

describe('string', () => {
  const instance = new string();
  const instance2 = string();

  describe('own methods', () => {
    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .nullable()
          .nullable(true)
          .nullable(false)
          .required()
          .required('message')
          .required(() => 'message')
          .notRequired()
          .min(1)
          .min(1, 'message')
          .max(1)
          .max(1, 'message')
          .length(1)
          .length(1, 'message')
          .email()
          .email('message')
          .url()
          .url('message')
          .trim()
          .trim('message')
          .lowercase()
          .lowercase('message')
          .uppercase()
          .uppercase('message')
          .ensure()
          .matches(/a/g)
          .matches(/a/g, 'message');
      });
    });

    it('should raise an error when passing incompatible arguments', () => {
      [instance, instance2].map(schema => {
        // $FlowExpectedError
        schema.nullable('need string');
        // $FlowExpectedError
        schema.required({ need: 'function or string' });
        // $FlowExpectedError
        schema.min('need a number');
        // $FlowExpectedError
        schema.min(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.max('need a number');
        // $FlowExpectedError
        schema.max(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.length('need a number');
        // $FlowExpectedError
        schema.length(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.email({ need: 'func or string' });
        // $FlowExpectedError
        schema.url({ need: 'func or string' });
        // $FlowExpectedError
        schema.trim({ need: 'func or string' });
        // $FlowExpectedError
        schema.lowercase({ need: 'func or string' });
        // $FlowExpectedError
        schema.uppercase({ need: 'func or string' });
        // $FlowExpectedError
        schema.matches('need RegExp');
      });
    });
  });

  describe('common schema methods', () => {
    it('should modify type by `nullable` and `required*` methods', () => {
      const val1 = string()
        .nullable(false)
        .validateSync(null);

      (val1: string);
      // $FlowExpectedError: check any
      (val1: number);

      const val2 = string()
        .nullable()
        .validateSync(null);

      (val2: ?string);
      // $FlowExpectedError: check any
      (val2: number);

      const val3 = string()
        .required()
        .validateSync(null);

      (val3: string);
      // $FlowExpectedError: check any
      (val3: number);

      const val4 = string()
        .notRequired()
        .validateSync(null);

      (val4: ?string);
      // $FlowExpectedError: check any
      (val4: number);
    });

    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .clone()
          .label('str')
          .meta({ meta: 'data' })
          .concat(string())
          .strict(true)
          .strip(false)
          .default('any value')
          .typeError()
          .typeError('message')
          .typeError(() => 'message')
          .oneOf(['1', '2'])
          .notOneOf(['3', '3'])
          .when('key', { is: true, then: number(), otherwise: string() })
          .when(['key'], (other, schema) =>
            other === 4 ? schema.clone() : schema
          )
          .test('name', 'message', () => true)
          .test({
            test: () => Promise.resolve(true),
            name: 'name',
            message: 'message',
            params: {},
            exclusive: true,
          })
          .test({
            test: () => Promise.resolve(true),
          })
          .transform((a, b) => a + b)
          .clone();

        schema.validate(null).then(val => {
          (val: string);

          // $FlowExpectedError: check any
          (val: number);
        });

        schema.validate(null, {
          path: 'foo.baz',
          strict: true,
          abortEarly: true,
          stripUnknown: true,
          recursive: true,
          context: {},
        });
      });
    });
  });
});

describe('array', () => {
  const instance = new array();
  const instance2 = array<number>();

  describe('own methods', () => {
    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .nullable()
          .nullable(true)
          .nullable(false)
          .required()
          .required('message')
          .required(() => 'message')
          .notRequired()
          .min(1)
          .min(1, 'message')
          .max(1)
          .max(1, 'message')
          .ensure()
          .compact(() => true)
          .of(number());
      });
    });

    it('should raise an error when passing incompatible arguments', () => {
      [instance, instance2].map(schema => {
        // $FlowExpectedError
        schema.nullable('need string');
        // $FlowExpectedError
        schema.required({ need: 'function or string' });
        // $FlowExpectedError
        schema.min('need a number');
        // $FlowExpectedError
        schema.min(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.max('need a number');
        // $FlowExpectedError
        schema.max(1, { need: 'func or string' });
        // $FlowExpectedError
        schema.compact('need function');
        // $FlowExpectedError need yup schema
        schema.of(123);
      });
    });
  });

  describe('common schema methods', () => {
    it('should modify type by `nullable` and `required*` methods', () => {
      const val1 = array<number>()
        .nullable(false)
        .validateSync(null);

      (val1: Array<number>);
      // $FlowExpectedError: check any
      (val1: number);

      const val2 = array<number>()
        .nullable()
        .validateSync(null);

      (val2: ?Array<number>);
      // $FlowExpectedError: check any
      (val2: number);

      const val3 = array<number>()
        .required()
        .validateSync(null);

      (val3: Array<number>);
      // $FlowExpectedError: check any
      (val3: number);

      const val4 = array<number>()
        .notRequired()
        .validateSync(null);

      (val4: ?Array<number>);
      // $FlowExpectedError: check any
      (val4: number);
    });

    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .clone()
          .label('str')
          .meta({ meta: 'data' })
          .concat(array<number>())
          .strict(false)
          .strip(true)
          .default('any value')
          .typeError()
          .typeError('message')
          .typeError(() => 'message')
          .when('key', { is: true, then: number(), otherwise: string() })
          .when(['key'], (other, schema) =>
            other === 4 ? schema.clone() : schema
          )
          .test('name', 'message', () => true)
          .test({
            test: () => Promise.resolve(true),
            name: 'name',
            message: 'message',
            params: {},
            exclusive: true,
          })
          .test({
            test: () => Promise.resolve(true),
          })
          .transform((a, b) => a + b)
          .clone();

        schema.validate(null).then(val => {
          (val: Array<number>);

          // $FlowExpectedError: check any
          (val: number);
        });

        schema.validate(null, {
          path: 'foo.baz',
          strict: true,
          abortEarly: true,
          stripUnknown: true,
          recursive: true,
          context: {},
        });
      });
    });
  });
});

describe('date', () => {
  const instance = new date();
  const instance2 = date();

  describe('own methods', () => {
    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .nullable()
          .nullable(true)
          .nullable(false)
          .required()
          .required('message')
          .required(() => 'message')
          .notRequired()
          .min(new Date())
          .min(new Date(), 'message')
          .max(new Date())
          .max(new Date(), 'message');
      });
    });

    it('should raise an error when passing incompatible arguments', () => {
      [instance, instance2].map(schema => {
        // $FlowExpectedError
        schema.nullable('need Date');
        // $FlowExpectedError
        schema.required({ need: 'function or string' });

        // $FlowExpectedError: need Date or string or Ref
        schema.min(123);
        // $FlowExpectedError
        schema.min(new Date(), { need: 'func or string' });
        // $FlowExpectedError: need Date or string or Ref
        schema.max(123);
        // $FlowExpectedError
        schema.max(new Date(), { need: 'func or string' });
      });
    });
  });

  describe('common schema methods', () => {
    it('should modify type by `nullable` and `required*` methods', () => {
      const val1 = date()
        .nullable(false)
        .validateSync(null);

      (val1: Date);
      // $FlowExpectedError: check any
      (val1: string);

      const val2 = date()
        .nullable()
        .validateSync(null);

      (val2: ?Date);
      // $FlowExpectedError: check any
      (val2: string);

      const val3 = date()
        .required()
        .validateSync(null);

      (val3: Date);
      // $FlowExpectedError: check any
      (val3: string);

      const val4 = date()
        .notRequired()
        .validateSync(null);

      (val4: ?Date);
      // $FlowExpectedError: check any
      (val4: string);
    });

    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .clone()
          .label('str')
          .meta({ meta: 'data' })
          .concat(date())
          .strict(true)
          .strip(false)
          .default('any value')
          .typeError()
          .typeError('message')
          .typeError(() => 'message')
          .oneOf([new Date(), new Date()])
          .notOneOf([new Date(), new Date()])
          .when('key', { is: '12', then: number(), otherwise: string() })
          .when(['key'], (other, schema) =>
            other === 4 ? schema.clone() : schema
          )
          .test('name', 'message', () => true)
          .test({
            test: () => Promise.resolve(true),
            name: 'name',
            message: 'message',
            params: {},
            exclusive: true,
          })
          .test({
            test: () => Promise.resolve(true),
          })
          .transform((a, b) => a + b)
          .clone();

        schema.validate(null).then(val => {
          (val: Date);

          // $FlowExpectedError: check any
          (val: string);
        });

        schema.validate(null, {
          path: 'foo.baz',
          strict: true,
          abortEarly: true,
          stripUnknown: true,
          recursive: true,
          context: {},
        });
      });
    });
  });
});

describe('mixed', () => {
  const instance = new mixed();
  const instance2 = mixed();

  describe('own methods', () => {
    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .nullable()
          .nullable(true)
          .nullable(false)
          .required()
          .required('message')
          .required(() => 'message')
          .notRequired();
      });
    });

    it('should raise an error when passing incompatible arguments', () => {
      [instance, instance2].map(schema => {
        // $FlowExpectedError
        schema.nullable('need mixed');

        // $FlowExpectedError
        schema.required({ need: 'function or string' });
      });
    });
  });

  describe('common schema methods', () => {
    it('should modify type by `nullable` and `required*` methods', () => {
      const val1 = mixed()
        .nullable(false)
        .validateSync(null);

      (val1: mixed);
      // $FlowExpectedError: check any
      (val1: number);

      const val2 = mixed()
        .nullable()
        .validateSync(null);

      (val2: ?mixed);
      // $FlowExpectedError: check any
      (val2: number);

      const val3 = mixed()
        .required()
        .validateSync(null);

      (val3: mixed);
      // $FlowExpectedError: check any
      (val3: number);

      const val4 = mixed()
        .notRequired()
        .validateSync(null);

      (val4: ?mixed);
      // $FlowExpectedError: check any
      (val4: number);
    });

    it('should work properly', () => {
      [instance, instance2].map(schema => {
        schema
          .clone()
          .label('str')
          .meta({ meta: 'data' })
          .concat(mixed())
          .strict(true)
          .strip(false)
          .default('any value')
          .typeError()
          .typeError('message')
          .typeError(() => 'message')
          .oneOf([true, 1])
          .notOneOf(['false', true])
          .when('key', { is: true, then: number(), otherwise: string() })
          .when(['key'], (other, schema) =>
            other === 4 ? schema.clone() : schema
          )
          .test('name', 'message', () => true)
          .test({
            test: () => Promise.resolve(true),
            name: 'name',
            message: 'message',
            params: {},
            exclusive: true,
          })
          .test({
            test: () => Promise.resolve(true),
          })
          .transform((a, b) => a + b)
          .clone();

        schema.validate(null).then(val => {
          (val: mixed);

          // $FlowExpectedError: check any
          (val: number);
        });

        schema.validate(null, {
          path: 'foo.baz',
          strict: true,
          abortEarly: true,
          stripUnknown: true,
          recursive: true,
          context: {},
        });
      });
    });
  });
});

describe('object', () => {
  it('should make valid schema type', () => {
    (object({
      a: number(),
      b: object({
        c: string(),
      }),
      d: ref<string>('b.c'),
    }): Schema<{ a: number, b: { c: string }, d: string }, any>);
  });

  it('should extend schema type by .shape()', () => {
    const schema = object().shape({
      a: number(),
      b: bool(),
    });

    (schema: Schema<{ a: number, b: boolean }, any>);

    (schema: Schema<
      {
        // $FlowExpectedError: check any
        a: string,
        b: boolean,
      },
      any
    >);

    (schema: Schema<
      {
        a: number,
        // $FlowExpectedError: check any
        b: string,
      },
      any
    >);
  });

  describe('object().from(...)', () => {
    it('should extend current object type when alias is true', () => {
      const schema = object({ a: string() }).from('a', 'a2', true);

      (schema: Schema<
        {
          a: string,
          a2: string,
        },
        any
      >);

      (schema: Schema<
        {
          a: string,
          // $FlowExpectedError: check any
          a2: number,
        },
        any
      >);
    });

    it('should return passed type when alias false', () => {
      const schema = object({ a: string() }).from<{ a2: string }>(
        'a',
        'a2',
        false
      );

      (schema: Schema<{ a2: string }, any>);

      // $FlowExpectedError: check any
      (schema: Schema<{ a2: number }, any>);

      // $FlowExpectedError: a missing in new shema
      (schema: Schema<{ a: number }, any>);
    });
  });

  describe('common schema methods', () => {
    it('should modify type by `nullable` and `required*` methods', () => {
      const val1 = object({ a: number() })
        .nullable(false)
        .validateSync(null);

      (val1: { a: number });
      // $FlowExpectedError: check any
      (val1: number);

      const val2 = object({ a: number() })
        .nullable()
        .validateSync(null);

      (val2: ?{ a: number });
      // $FlowExpectedError: check any
      (val2: number);

      const val3 = object({ a: number() })
        .required()
        .validateSync(null);

      (val3: { a: number });
      // $FlowExpectedError: check any
      (val3: number);

      const val4 = object({ a: number() })
        .notRequired()
        .validateSync(null);

      (val4: ?{ a: number });
      // $FlowExpectedError: check any
      (val4: number);
    });

    it('should work properly', () => {
      const schema = object({ a: string() });

      schema
        .clone()
        .label('str')
        .meta({ meta: 'data' })
        .strict(true)
        .strip(false)
        .default('any value')
        .typeError()
        .typeError('message')
        .typeError(() => 'message')
        .oneOf([{ a: '1' }, { a: '2' }])
        .notOneOf([{ a: '1' }, { a: '2' }])
        .when('key', { is: true, then: number(), otherwise: string() })
        .when(['key'], (other, schema) =>
          other === 4 ? schema.clone() : schema
        )
        .test('name', 'message', () => true)
        .test({
          test: () => Promise.resolve(true),
          name: 'name',
          message: 'message',
          params: {},
          exclusive: true,
        })
        .test({
          test: () => Promise.resolve(true),
        })
        .transform((a, b) => a + b)
        .clone();

      schema.validate(null).then(val => {
        (val: { a: string });

        // $FlowExpectedError: check any
        (val: number);
      });

      schema.validate(null, {
        path: 'foo.baz',
        strict: true,
        abortEarly: true,
        stripUnknown: true,
        recursive: true,
        context: {},
      });
    });
  });
});

it('should work properly when use inherited interface methods', () => {
  string()
    .resolve() // method from `BaseSchema` interface
    .clone() // method from `Schema` interface
    .required(); // method from `StringSchema` interface
});
