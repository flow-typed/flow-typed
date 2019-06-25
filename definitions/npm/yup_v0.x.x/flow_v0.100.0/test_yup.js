// @flow
import { array, bool, date, mixed, string, number, object } from 'yup';
import { it, describe } from 'flow-typed-test';

describe('bool and boolean', () => {
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
        // $ExpectError
        schema.nullable('need boolean');

        // $ExpectError
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
      // $ExpectError: check any
      (val1: number);

      const val2 = bool()
        .nullable()
        .validateSync(null);

      (val2: ?boolean);
      // $ExpectError: check any
      (val2: number);

      const val3 = bool()
        .required()
        .validateSync(null);

      (val3: boolean);
      // $ExpectError: check any
      (val3: number);

      const val4 = bool()
        .notRequired()
        .validateSync(null);

      (val4: ?boolean);
      // $ExpectError: check any
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

          // $ExpectError: check any
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
        // $ExpectError
        schema.nullable('need number');
        // $ExpectError
        schema.required({ need: 'function or string' });
        // $ExpectError
        schema.min('need a number');
        // $ExpectError
        schema.min(1, { need: 'func or string' });
        // $ExpectError
        schema.max('need a number');
        // $ExpectError
        schema.max(1, { need: 'func or string' });
        // $ExpectError
        schema.lessThan('need a number');
        // $ExpectError
        schema.lessThan(1, { need: 'func or string' });
        // $ExpectError
        schema.moreThan('need a number');
        // $ExpectError
        schema.moreThan(1, { need: 'func or string' });
        // $ExpectError
        schema.positive({ need: 'func or string' });
        // $ExpectError
        schema.negative({ need: 'func or string' });
        // $ExpectError
        schema.integer({ need: 'func or string' });
        // $ExpectError: `__floor` is missing in enum
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
      // $ExpectError: check any
      (val1: string);

      const val2 = number()
        .nullable()
        .validateSync(null);

      (val2: ?number);
      // $ExpectError: check any
      (val2: string);

      const val3 = number()
        .required()
        .validateSync(null);

      (val3: number);
      // $ExpectError: check any
      (val3: string);

      const val4 = number()
        .notRequired()
        .validateSync(null);

      (val4: ?number);
      // $ExpectError: check any
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

          // $ExpectError: check any
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
        // $ExpectError
        schema.nullable('need string');
        // $ExpectError
        schema.required({ need: 'function or string' });
        // $ExpectError
        schema.min('need a number');
        // $ExpectError
        schema.min(1, { need: 'func or string' });
        // $ExpectError
        schema.max('need a number');
        // $ExpectError
        schema.max(1, { need: 'func or string' });
        // $ExpectError
        schema.length('need a number');
        // $ExpectError
        schema.length(1, { need: 'func or string' });
        // $ExpectError
        schema.email({ need: 'func or string' });
        // $ExpectError
        schema.url({ need: 'func or string' });
        // $ExpectError
        schema.trim({ need: 'func or string' });
        // $ExpectError
        schema.lowercase({ need: 'func or string' });
        // $ExpectError
        schema.uppercase({ need: 'func or string' });
        // $ExpectError
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
      // $ExpectError: check any
      (val1: number);

      const val2 = string()
        .nullable()
        .validateSync(null);

      (val2: ?string);
      // $ExpectError: check any
      (val2: number);

      const val3 = string()
        .required()
        .validateSync(null);

      (val3: string);
      // $ExpectError: check any
      (val3: number);

      const val4 = string()
        .notRequired()
        .validateSync(null);

      (val4: ?string);
      // $ExpectError: check any
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

          // $ExpectError: check any
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
