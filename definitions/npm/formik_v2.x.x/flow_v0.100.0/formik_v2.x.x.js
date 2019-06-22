declare module 'formik/@@@@yup' {
  declare export type Schema = any;
}

declare module 'formik/@@flow-typed' {
  declare export type FormikValues = { [field: string]: any };
  declare export type FormikErrors<Values> = $ObjMap<Values, () => ?string>;
  declare export type FormikTouched<Values> = $ObjMap<Values, () => ?boolean>;

  declare export type FormikState<Values> = {|
    values: Values,
    errors: FormikErrors<Values>,
    touched: FormikTouched<Values>,
    isSubmitting: boolean,
    isValidating: boolean,
    submitCount: number,
    status?: any,
  |};

  declare export type FormikComputedProps<Values> = {|
    dirty: boolean,
    isValid: boolean,
    initialValues: Values,
    initialErrors: FormikErrors<Values>,
    initialTouched: FormikTouched<Values>,
    initialStatus?: any,
  |};

  declare export type FormikHelpers<Values> = {|
    setStatus(status?: any): void,
    setErrors(errors: FormikErrors<Values>): void,
    setSubmitting(isSubmitting: boolean): void,
    setTouched(touched: FormikTouched<Values>): void,
    setValues(values: Values): void,
    setFieldValue(field: $Keys<Values>, value: any): void,
    setFieldError(field: $Keys<Values>, message: string): void,
    setFieldTouched(field: $Keys<Values>, isTouched?: boolean): void,
    validateForm(values?: any): Promise<FormikErrors<Values>>,
    validateField(field: string): void,
    resetForm(nextState?: $Shape<FormikState<Values>>): void,
    setFormikState(
      state:
        | FormikState<Values>
        | ((prevState: FormikState<Values>) => FormikState<Values>),
      callback?: () => void
    ): void,
  |};

  declare export type FormikHandlers = {|
    handleSubmit(e?: {}): void,
    handleReset(): void,
    handleBlur(e: {}): void,
    handleChange(e: {}): void,
  |};

  declare export type FormikSharedConfig = {|
    validateOnChange?: boolean,
    validateOnBlur?: boolean,
    isInitialValid?: boolean | ((props: {}) => boolean),
    enableReinitialize?: boolean,
  |};

  declare export type FormikConfig<Values> = {|
    ...FormikSharedConfig,
    onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void,

    component?: React$ComponentType<FormikProps<Values>> | React$Node,
    render?: (props: FormikProps<Values>) => React$Node,
    children?: ((props: FormikProps<Values>) => React$Node) | React$Node,
    initialValues: Values,
    initialStatus?: any,
    initialErrors?: FormikErrors<Values>,
    initialTouched?: FormikTouched<Values>,
    onReset?: (values: Values, formikHelpers: FormikHelpers<Values>) => void,
    validationSchema?: any | (() => any),
    validate?: (values: Values) => void | {} | Promise<FormikErrors<Values>>,
  |};

  declare export type FormikProps<Values> = $ReadOnly<{|
    ...FormikSharedConfig,
    ...FormikState<Values>,
    ...FormikHelpers<Values>,
    ...FormikHandlers,
    ...FormikComputedProps<Values>,
    ...FormikRegistration,
    submitForm: () => Promise<void>,
  |}>;

  declare export type FormikRegistration = {|
    unregisterField(name: string): void,
    registerField(
      name: string,
      fns: {
        validate?: (value: any) => string | Promise<void> | void,
      }
    ): void,
  |};

  declare export type FormikContext<Values> = FormikProps<Values> & {
    validate: $ElementType<FormikConfig<Values>, 'validate'>,
    validationSchema: $ElementType<FormikConfig<Values>, 'validationSchema'>,
  };

  declare export interface SharedRenderProps<T> {
    component?: string | React$ComponentType<T | void>;
    render?: (props: T) => React$Node;
    children?: (props: T) => React$Node;
  }

  declare export type FieldMetaProps<Value> = $ReadOnly<{|
    value: Value,
    error?: string,
    touched: boolean,
    initialValue?: Value,
    initialTouched: boolean,
    initialError?: string,
  |}>;

  declare export type FieldInputProps<Value> = $ReadOnly<{|
    value: Value,
    name: string,
    multiple?: boolean,
    checked?: boolean,
    onChange: $ElementType<FormikHandlers, 'handleChange'>,
    onBlur: $ElementType<FormikHandlers, 'handleBlur'>,
  |}>;
}

declare module 'formik/@@withFormik' {
  import type { Schema } from 'formik/@@@@yup';
  import type {
    FormikHelpers,
    FormikProps,
    FormikSharedConfig,
    FormikTouched,
    FormikErrors,
  } from 'formik/@@flow-typed';

  declare export type InjectedFormikProps<Props, Values> = $ReadOnly<{|
    ...FormikProps<Values>,
    ...$Exact<Props>,
  |}>;

  declare export type FormikBag<Props, Values> = $ReadOnly<{|
    ...FormikHelpers<Values>,
    props: Props,
  |}>;

  declare export type WithFormikConfig<Props, Values> = {|
    ...FormikSharedConfig,

    handleSubmit: (values: Values, formikBag: FormikBag<Props, Values>) => void,

    displayName?: string,
    mapPropsToValues?: (props: Props) => $Shape<Values>,
    mapPropsToStatus?: (props: Props) => any,
    mapPropsToTouched?: (props: Props) => FormikTouched<Values>,
    mapPropsToErrors?: (props: Props) => FormikErrors<Values>,
    validate?: (values: Values, props: Props) => void | {} | Promise<any>,

    validationSchema?: ((props: Props) => Schema) | Schema,
  |};

  declare export function withFormik<Values: {}, Props: {}>(
    config: WithFormikConfig<Props, Values>
  ): (
    component: React$ComponentType<InjectedFormikProps<Props, Values>>
  ) => React$ComponentType<Props>;
}

declare module 'formik/@@Field' {
  import type {
    FormikProps,
    FieldMetaProps,
    FieldInputProps,
  } from 'formik/@@flow-typed';

  declare export type FieldProps<Value> = {|
    field: FieldInputProps<Value>,
    form: FormikProps<Value>,
    meta: FieldMetaProps<Value>,
  |};

  declare export type FieldConfig<Value> = {|
    name: string,
    component?: React$ElementType,
    as?: React$ElementType,
    render?: (props: FieldProps<Value>) => React$Node,
    children?: ((props: FieldProps<Value>) => React$Node) | React$Node,
    validate?: (value: Value) => string | Promise<string | void> | void,
    type?: string,
    value?: Value,
    innerRef?: React$Ref<any>,
  |};

  declare export type FieldAttributes<Props, Value> = {|
    ...FieldConfig<Value>,
    ...$Exact<Props>,
  |};

  declare export type UseFieldConfig<Value> = {
    name: string,
    type?: string,
    value?: Value,
    as?: React$ElementType,
    multiple?: boolean,
  };

  declare export function useField<Value>(
    propsOrFieldName: string | UseFieldConfig<Value>
  ): [FieldInputProps<Value>, FieldMetaProps<Value>];

  declare export var Field: {
    <Props, Value>(props: FieldAttributes<Props, Value>): React$Node,
  };

  declare export var FastField: typeof Field;
}

declare module 'formik/@@utils' {
  declare export function isFunction(value: any): boolean;
  declare export function isObject(value: any): boolean;
  declare export function isInteger(value: any): boolean;
  declare export function isString(value: any): boolean;
  declare export function isNaN(value: any): boolean;
  declare export function isEmptyChildren(value: any): boolean;
  declare export function isPromise(value: any): boolean;
  declare export function isInputEvent(value: any): boolean;
  declare export function getActiveElement(doc?: Document): Element | null;
  declare export function getIn(
    obj: any,
    key: string | Array<string>,
    def?: any,
    p?: number
  ): any;
  declare export function setIn(obj: any, path: string, value: any): any;
  declare export function setNestedObjectValues<T>(
    object: any,
    value: any,
    visited?: any,
    response?: any
  ): T;
}

declare module 'formik' {
  declare export * from 'formik/@@withFormik'
  declare export * from 'formik/@@Field'
  declare export * from 'formik/@@utils'
}
