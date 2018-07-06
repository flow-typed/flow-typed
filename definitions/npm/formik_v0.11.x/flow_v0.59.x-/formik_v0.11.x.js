declare module "formik" {
  import type { ComponentType } from "react";

  declare export type FormikErrors<Values> = {
    [field: $Keys<Values>]: ?string
  };

  declare export type FormikTouched<Values> = {
    [field: $Keys<Values>]: boolean
  };

  /**
   * Using interface here because interfaces support overloaded method signatures
   * https://github.com/facebook/flow/issues/1556#issuecomment-200051475
   */
  declare export interface FormikActions<Values> {
    /** Manually set top level status. */
    setStatus(status?: any): void;
    /**
     * Manually set top level error
     * @deprecated since 0.8.0
     */
    setError(e: any): void;
    /** Manually set errors object */
    setErrors(errors: FormikErrors<Values>): void;
    /** Manually set isSubmitting */
    setSubmitting(isSubmitting: boolean): void;
    /** Manually set touched object */
    setTouched(touched: FormikTouched<Values>): void;
    /** Manually set values object  */
    setValues(values: Values): void;
    /** Set value of form field directly */
    setFieldValue<FieldName: $Keys<Values>>(
      field: FieldName,
      // I don't understand why we have to wrap this with $Call. I feel
      // like we should just be able to do
      // value: $ElementType<Values, FieldName>. But apparently this
      // doesn't work.
      value: $Call<() => $ElementType<Values, FieldName>>,
      shouldValidate?: boolean
    ): void;
    /** Set error message of a form field directly */
    setFieldError(field: $Keys<Values>, message: string): void;
    /** Set whether field has been touched directly */
    setFieldTouched(
      field: $Keys<Values>,
      isTouched?: boolean,
      shouldValidate?: boolean
    ): void;
    /** Validate form values */
    validateForm(values?: any): void;
    /** Reset form */
    resetForm(nextValues?: any): void;
    /** Submit the form imperatively */
    submitForm(): void;
    /** Set Formik state, careful! */
    setFormikState(
      f: (
        prevState: $ReadOnly<FormikState<Values>>,
        props: any
      ) => $Shape<FormikState<Values>>,
      callback?: () => any
    ): void;
  }

  declare export type FormikSharedConfig = {
    /** Tells Formik to validate the form on each input's onChange event */
    validateOnChange?: boolean,
    /** Tells Formik to validate the form on each input's onBlur event */
    validateOnBlur?: boolean,
    /** Tell Formik if initial form values are valid or not on first render */
    isInitialValid?: boolean | ((props: {}) => boolean | void),
    /** Should Formik reset the form when new initialValues change */
    enableReinitialize?: boolean
  };

  declare export type FormikConfig<Values: Object> = FormikSharedConfig & {
    /**
     * Initial values of the form
     */
    initialValues?: Values,

    /**
     * Submission handler
     */
    onSubmit: (values: Values, formikActions: FormikActions<Values>) => any,

    /**
     * Form component to render
     */
    component?: React$ComponentType<FormikProps<Values> | void>,

    /**
     * Render prop (works like React router's <Route render={props =>} />)
     */
    render?: (props: FormikProps<Values>) => React$Node,

    /**
     * A Yup Schema or a function that returns a Yup schema
     */
    validationSchema?: any | (() => any),

    /**
     * Validation function. Must return an error object or promise that
     * throws an error object where that object keys map to corresponding value.
     */
    validate?: (values: Values) => void | FormikErrors<Values> | Promise<any>,

    /**
     * React children or child render callback
     */
    children?: ((props: FormikProps<Values>) => React$Node) | React$Node
  };

  /**
   * Formik state tree
   */
  declare export type FormikState<Values> = {
    /** Form values */
    values: Values,
    /**
     * Top level error, in case you need it
     * @deprecated since 0.8.0
     */
    error?: any,
    /** map of field names to specific error for that field */
    errors: FormikErrors<Values>,
    /** map of field names to whether the field has been touched */
    touched: FormikTouched<Values>,
    /** whether the form is currently submitting */
    isSubmitting: boolean,
    /** Top level status state, in case you need it */
    status?: any,
    /** Number of times user tried to submit the form */
    submitCount: number
  };

  /**
   * Formik computed properties. These are read-only.
   */
  declare export type FormikComputedProps<Values> = {
    /** True if any input has been touched. False otherwise. */
    +dirty: boolean,
    /** Result of isInitiallyValid on mount, then whether true values pass validation. */
    +isValid: boolean,
    /** initialValues */
    +initialValues: Values
  };

  /**
   * Formik form event handlers
   */
  declare export type FormikHandlers = {
    /** Form submit handler */
    handleSubmit: (e: SyntheticEvent<any>) => any,
    /** Classic React change handler, keyed by input name */
    handleChange: (e: SyntheticEvent<any>) => any,
    /** Classic React blur handler */
    handleBlur: (e: any) => void,
    /** Reset form event handler  */
    handleReset: () => void
  };

  declare export type FormikProps<Values> = FormikState<Values> &
    FormikActions<Values> &
    FormikHandlers &
    FormikComputedProps<Values>;

  declare export class Formik<
    Values: Object,
    Props: FormikConfig<Values>,

  > extends React$Component<Props> {}

  /**
   * Note: These typings could be more restrictive, but then it would limit the
   * reusability of custom <Field/> components.
   *
   * @example
   * type MyProps = {
   *   ...FieldProps,
   *   ...
   * }
   *
   * export const MyInput = ({
   *   field,
   *   form,
   *   ...props
   * }: MyProps) =>
   *   <div>
   *     <input {...field} {...props}/>
   *     {form.touched[field.name] && form.errors[field.name]}
   *   </div>
   */
  declare export type FieldProps = {
    field: {
      /** Classic React change handler, keyed by input name */
      // TODO: React.ChangeEvent<any>
      onChange: (e: any) => any,
      /** Mark input as touched */
      onBlur: (e: any) => any,
      /** Value of the input */
      value: any,
      /* name of the input */
      name: string
    },
    form: FormikProps<any>
  };

  /*
  import * as React from 'react';

  type OwnProps = {};
  type Props = OwnProps & FormikProps;
  class MyFormikHoc extends React.Component<Props> {
     render() {
        const { setFieldValue, status, errors, dirty } = this.props;
     }
  }

  const enhancer = withFormik({});

  // TODO - extract FormikProps from enhancer
  type FormikProps = $Call<enhancer, OwnProps>

  export default enhancer(MyFormikHoc);
   */

  declare export var Field: React$StatelessFunctionalComponent<any>;

  declare export var Form: React$StatelessFunctionalComponent<any>;

  declare export function withFormik<Props, Values>({
    mapPropsToValues?: (props: Props) => Values,
    handleSubmit?: (
      values: Values,
      goodies: FormikActions<Values> & { props: Props }
    ) => Promise<void> | void,
    validate?: (values: Values, props: Props) => { [field: string]: any },
    validationSchema?: (props: Props) => any
  }): (
    ComponentType<Props>
  ) => ComponentType<$Diff<Props, FormikProps<Values>>>;
}
