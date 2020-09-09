// @flow
import React from 'react';
import { it, describe } from 'flow-typed-test';
import {
  Form,
  getActiveElement,
  getIn,
  setIn,
  setNestedObjectValues,
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
  move,
  swap,
  insert,
  replace,
  FieldArray,
  useFormik,
  Formik,
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

    const WithFormikForm = withFormik<FormOwnProps, FormValues>({
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
        // $FlowExpectedError: `__active` is missing in enum
        variant={'__active'}
        onSubmit={(v: FormValues) => {}}
      />;

      <WithFormikForm
        variant={'passive'}
        // $FlowExpectedError: need function
        onSubmit={123}
      />;
    });

    it('should raise an error when pass injected formik props', () => {
      // $FlowExpectedError: isSubmitting was extracted
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
    const requiredOptions = { handleSubmit: () => {} };

    describe('handleSubmit', () => {
      it('should pass when use properly', () => {
        withFormik<Props, FormValues>({
          handleSubmit(values, { props }) {
            (values.age: number);
            (props.initialName: string);

            // $FlowExpectedError: check any
            (values.age: boolean);
            // $FlowExpectedError: check any
            (props.initialName: boolean);
          },
        });
      });
    });

    describe('handleSubmit', () => {
      it('should pass when use properly', () => {
        withFormik<Props, FormValues>({
          ...requiredOptions,
          mapPropsToValues: ({ initialAge }) => ({ age: initialAge }),
        });
      });

      it('should raise an error when `mapPropsToValues` return invalid values', () => {
        withFormik<Props, FormValues>({
          ...requiredOptions,
          // $FlowExpectedError: `initialAge` is a number but `name` need a string
          mapPropsToValues: ({ initialAge }) => ({
            name: initialAge,
          }),
        });
      });

      it('should raise an error when `mapPropsToValues` return not missing  value', () => {
        withFormik<Props, FormValues>({
          ...requiredOptions,
          // $FlowExpectedError: `abc` is missing in values
          mapPropsToValues: ({ initialAge }) => ({
            abc: initialAge,
          }),
        });
      });

      it('should return partial of values', () => {
        withFormik<Props, { name: string, age: number }>({
          ...requiredOptions,
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
    // $FlowExpectedError
    useField({ __name: 'name' });
  });

  it('should return field props', () => {
    const [props, meta] = useField<number>('name');

    (props.value: number);
    // $FlowExpectedError: check any
    (props.value: boolean);

    (meta.touched: boolean);
    // $FlowExpectedError: check any
    (meta.touched: number);

    (meta.error: ?string);
    // $FlowExpectedError: check any
    (meta.error: number);
  });
});

describe('Field and FastField', () => {
  it('should render Field component', () => {
    <Field name={'email'} />;
    <FastField name={'email'} />;
  });

  it('should raise an error when pass incompatible name prop', () => {
    // $FlowExpectedError: `name` must be a string
    <Field name={111} />;

    // $FlowExpectedError: `name` is required prop
    <Field />;
    // $FlowExpectedError: `name` is required prop
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
      // $FlowExpectedError: need a boolean
      disabled: 123,
      // $FlowExpectedError: `12` is missing in enum
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

    (getActiveElement(document): Element | null);

    getIn({ a: { b: 2 } }, ['a', 'b']);
    setIn({ a: { b: 2 } }, 'a', 3);
    setNestedObjectValues({}, 1);
  });
});

describe('FormikContext', () => {
  it('should work properly', () => {
    <FormikConsumer>
      {value => {
        (value.validateOnBlur: ?boolean);

        // $FlowExpectedError: check any
        (value.validateOnBlur: ?string);

        (value.submitForm: () => Promise<void>);

        // $FlowExpectedError: check any
        (value.submitForm: number);

        return null;
      }}
    </FormikConsumer>;

    // $FlowExpectedError: need valid formik context value
    <FormikProvider value={123} />;
  });

  it('should return context with passed values', () => {
    const context = useFormikContext<{ age: number }>();

    (context.values.age: number);
    // $FlowExpectedError: check any
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
    // $FlowExpectedError
    <ErrorMessage />;
  });
});

describe('FieldArray', () => {
  describe('methods', () => {
    (move([1], 1, 1): Array<number>);
    (swap(['str'], 1, 1): Array<string>);
    (insert([true], 1, false): Array<boolean>);
    (replace(['1'], 1, '2'): Array<string>);
  });

  describe('Component', () => {
    it('should render FieldArray component', () => {
      <FieldArray name={'email'} />;
    });

    it('should raise an error when pass incompatible name prop', () => {
      // $FlowExpectedError: `name` must be a string
      <FieldArray name={111} />;

      // $FlowExpectedError: `name` is required prop
      <FieldArray />;
    });
  });
});

it('should render Form', () => {
  <Form />;

  <Form aria-hidden={'true'} />;

  // $FlowExpectedError: `onSubmit` already provided to `form` yuo can't overwrite it
  <Form onSubmit={() => {}} />;

  // $FlowExpectedError: `onReset` already provided to `form` yuo can't overwrite it
  <Form onReset={() => {}} />;
});

describe('Formik', () => {
  describe('Component', () => {
    it('should work properly', () => {
      <Formik onSubmit={() => {}} />;
    });
  });

  describe('hook', () => {
    it('should work properly', () => {
      type Vals = {|
        name: string,
        age: number,
      |};

      const formik = useFormik<Vals>({ onSubmit: () => {} });

      formik.setFieldValue('name', '1', true);

      // $FlowExpectedError: `name` is missing in `Values`
      formik.setFieldValue('__name', '1');

      // $FlowExpectedError: `name` expect string value, not `123`
      formik.setFieldValue('name', 123);

      (formik.values.name: string);
      (formik.values.age: number);

      // $FlowExpectedError: check any
      (formik.values.name: boolean);
      // $FlowExpectedError: check any
      (formik.values.age: boolean);
    });
  });
});
