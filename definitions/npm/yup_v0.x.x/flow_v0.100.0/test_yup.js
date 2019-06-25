// @flow
import { array, bool, boolean, date, mixed, string, number, object } from 'yup';
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
