// @flow
import React from 'react';
import { it, describe } from 'flow-typed-test';
import {
  ErrorMessage,
  FormikProvider,
  FormikConsumer,
  useFormikContext,
  Field,
  FastField,
  isFunction,
  isObject,
  isInteger,
  isString,
  isNaN,
  isEmptyChildren,
  isPromise,
  isInputEvent,
  useField,
  withFormik,
  type InjectedFormikProps,
} from 'formik';

describe('withFormik HOC', () => {
  type FormValues = {| age: number, name: string, birthday: Date |};

  describe('wrapped component props', () => {
    type FormOwnProps = {|
      onSubmit: FormValues => void,
      variant: 'active' | 'passive',
    |};

    const MyForm = (props: InjectedFormikProps<FormOwnProps, FormValues>) =>
      null;

    const WithFormikForm = withFormik<FormValues, FormOwnProps>({
      handleSubmit(values, { props: { onSubmit }, setSubmitting }) {
        onSubmit(values);
        setSubmitting(false);
      },
    })(MyForm);

    it('should work  when pass valid own props', () => {
      <WithFormikForm variant={'active'} onSubmit={(v: FormValues) => {}} />;
    });

    it('should raise an error when pass invalid own props', () => {
      <WithFormikForm
        // $ExpectError: `__active` is missing in enum
        variant={'__active'}
        onSubmit={(v: FormValues) => {}}
      />;

      <WithFormikForm
        variant={'passive'}
        // $ExpectError: need function
        onSubmit={123}
      />;
    });

    it('should raise an error when pass injected formik props', () => {
      // $ExpectError: isSubmitting was extracted
      <WithFormikForm
        isSubmitting={false}
        variant={'active'}
        onSubmit={(v: FormValues) => {}}
      />;
    });
  });

  describe('HOC config', () => {
    type Props = {|
      initialName: string,
      initialAge: number,
      initialBirthday: Date,
    |};
    const requredOptions = { handleSubmit: () => {} };

    describe('handleSubmit', () => {
      it('should pass when use properly', () => {
        withFormik<FormValues, Props>({
          handleSubmit(values, { props }) {
            (values.age: number);
            (props.initialName: string);

            // $ExpectError: check any
            (values.age: boolean);
            // $ExpectError: check any
            (props.initialName: boolean);
          },
        });
      });
    });

    describe('handleSubmit', () => {
      it('should pass when use properly', () => {
        withFormik<FormValues, Props>({
          ...requredOptions,
          mapPropsToValues: ({ initialAge }) => ({ age: initialAge }),
        });
      });

      it('should raise an error when `mapPropsToValues` return invalid values', () => {
        withFormik<FormValues, Props>({
          ...requredOptions,
          // $ExpectError: `initialAge` is a number but `name` need a string
          mapPropsToValues: ({ initialAge }) => ({
            name: initialAge,
          }),
        });
      });

      it('should raise an error when `mapPropsToValues` return not missing  value', () => {
        withFormik<FormValues, Props>({
          ...requredOptions,
          // $ExpectError: `abc` is missing in values
          mapPropsToValues: ({ initialAge }) => ({
            abc: initialAge,
          }),
        });
      });

      it('should return partial of values', () => {
        withFormik<{ name: string, age: number }, Props>({
          ...requredOptions,
          mapPropsToValues: ({ initialAge }) => ({
            age: initialAge,
          }),
        });
      });
    });
  });
});

describe('useField hook', () => {
  it('should call with string', () => {
    useField('name');
  });

  it('also should call with options', () => {
    useField({ name: 'name' });
  });

  it('should raise error when pass object without required prop `name`', () => {
    // $ExpectError
    useField({ __name: 'name' });
  });

  it('should return field props', () => {
    const [props, meta] = useField<number>('name');

    (props.value: number);
    // $ExpectError: check any
    (props.value: boolean);

    (meta.touched: boolean);
    // $ExpectError: check any
    (meta.touched: number);

    (meta.error: ?string);
    // $ExpectError: check any
    (meta.error: number);
  });
});

describe('Field and FastField', () => {
  it('should render Field component', () => {
    <Field name={'email'} />;
    <FastField name={'email'} />;
  });

  it('should raise an error when pass incompatible name prop', () => {
    // $ExpectError: `name` must be a string
    <Field name={111} />;

    // $ExpectError: `name` is required prop
    <Field />;
    // $ExpectError: `name` is required prop
    <FastField />;
  });

  it('should validate value', () => {
    Field<{ disabled: boolean }, '1' | '2'>({
      name: 'count',
      disabled: true,
      value: '1',
    });

    Field<{ disabled: boolean }, '1' | '2'>({
      name: 'count',
      // $ExpectError: need a boolean
      disabled: 123,
      // $ExpectError: `12` is missing in enum
      value: '12',
    });
  });
});

describe('utils', () => {
  it('should work properly', () => {
    (isFunction(() => {}): boolean);
    (isObject({}): boolean);
    (isInteger(1): boolean);
    (isString(''): boolean);
    (isNaN(1 / 0): boolean);
    (isEmptyChildren([]): boolean);
    (isPromise(Promise.resolve(1)): boolean);
    (isInputEvent({}): boolean);
  });
});

describe('FormikContext', () => {
  it('should work properly', () => {
    <FormikConsumer>
      {value => {
        (value.validateOnBlur: ?boolean);

        // $ExpectError: check any
        (value.validateOnBlur: ?string);

        (value.submitForm: () => Promise<void>);

        // $ExpectError: check any
        (value.submitForm: number);

        return null;
      }}
    </FormikConsumer>;

    // $ExpectError: need valid formik context value
    <FormikProvider value={123} />;
  });

  it('should return context with passed values', () => {
    const context = useFormikContext<{ age: number }>();

    (context.values.age: number);
    // $ExpectError: check any
    (context.values.age: string);
  });
});

describe('ErrorMessage', () => {
  it('should work properly', () => {
    <ErrorMessage name={'password'} />;

    <ErrorMessage
      name={'password'}
      className={undefined}
      component={undefined}
      render={undefined}
    >
      {undefined}
    </ErrorMessage>;

    <ErrorMessage
      name={'password'}
      className={'c-error'}
      component={'div'}
      render={val => {
        (val: string);

        return null;
      }}
    >
      {val => {
        (val: string);

        return null;
      }}
    </ErrorMessage>;
  });

  it('should raise an error when do not pass required prop `name`', () => {
    // $ExpectError
    <ErrorMessage />;
  });
});
