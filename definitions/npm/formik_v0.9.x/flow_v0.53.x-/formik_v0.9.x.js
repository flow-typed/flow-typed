declare module "formik" {
  declare export type FormikErrors = {
    [field: string]: string
  };

  declare export type FormikTouched = {
    [field: string]: boolean
  };

  declare export type FormikActions<Values> = {
    /** Manually set top level status. */
    setStatus: (status?: any) => void,
    /**
   * Manually set top level error
   * @deprecated since 0.8.0
   */
    setError: (e: any) => void,
    /** Manually set errors object */
    setErrors: (errors: FormikErrors) => void,
    /** Manually set isSubmitting */
    setSubmitting: (isSubmitting: boolean) => void,
    /** Manually set touched object */
    setTouched: (touched: FormikTouched) => void,
    /** Manually set values object  */
    setValues: (values: Values) => void,
    /** Set value of form field directly */
    setFieldValue: (field: $Keys<Values>, value: any) => void,
    /** Set error message of a form field directly */
    setFieldError: (field: $Keys<Values>, message: string) => void,
    /** Set whether field has been touched directly */
    setFieldTouched: (field: $Keys<Values>, isTouched?: boolean) => void,
    /** Reset form */
    resetForm: (nextValues?: any) => void,
    /** Submit the form imperatively */
    submitForm: () => void
  };

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

  declare export type FormikConfig = {
    ...FormikSharedConfig,
    /**
     * Initial values of the form
     */
    initialValues?: {},

    /**
     * Submission handler
     */
    onSubmit: (values: Object, formikActions: FormikActions<any>) => void,

    /**
     * Form component to render
     */
    component?: React$ComponentType<FormikProps<any> | void>,

    /**
     * Render prop (works like React router's <Route render={props =>} />)
     */
    render?: (props: FormikProps<any>) => React$Node,

    /**
     * A Yup Schema or a function that returns a Yup schema
     */
    validationSchema?: any | (() => any),

    /**
     * Validation function. Must return an error object or promise that
     * throws an error object where that object keys map to corresponding value.
     */
    validate?: (values: any) => void | Object | Promise<any>,

    /**
     * React children or child render callback
     */
    children?: ((props: FormikProps<any>) => React$Node) | React$Node
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
    errors: FormikErrors,
    /** map of field names to whether the field has been touched */
    touched: FormikTouched,
    /** whether the form is currently submitting */
    isSubmitting: boolean,
    /** Top level status state, in case you need it */
    status?: any
  };

  /**
   * Formik computed properties. These are read-only.
   */
  declare export type FormikComputedProps<Values> = {
    /** True if any input has been touched. False otherwise. */
    -dirty: boolean,
    /** Result of isInitiallyValid on mount, then whether true values pass validation. */
    -isValid: boolean,
    /** initialValues */
    -initialValues: Values
  };

  /**
   * Formik form event handlers
   */
  declare export type FormikHandlers = {
    /** Form submit handler */
    // TODO: React.FormEvent<HTMLFormElement>
    handleSubmit: (e: Function) => void,
    /** Classic React change handler, keyed by input name */
    // TODO: React.ChangeEvent<any>
    handleChange: (e: Function) => void,
    /** Mark input as touched */
    handleBlur: (e: any) => void,
    /** Change value of form field directly */
    handleChangeValue: (name: string, value: any) => void,
    /** Reset form event handler  */
    handleReset: () => void
  };

  declare export type FormikProps<Values> = {
    ...FormikState<Values>,
    ...FormikActions<Values>,
    ...FormikHandlers,
    ...FormikComputedProps<Values>
  };

  declare export class Formik<
    Props: FormikConfig = FormikConfig
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
      onChange: (e: any) => void,
      /** Mark input as touched */
      onBlur: (e: any) => void,
      /** Value of the input */
      value: any
    },
    form: FormikProps<any>
  };

  declare export var Field: React$StatelessFunctionalComponent<any>;

  declare export var Form: React$StatelessFunctionalComponent<any>;

  declare export var withFormik: Function;
}
