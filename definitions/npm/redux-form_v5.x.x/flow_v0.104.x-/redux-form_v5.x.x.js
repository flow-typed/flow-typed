import * as React from 'react';

declare module 'redux-form' {
  declare export type InputProps = {
    name: string,
    value: string | boolean,
    valid: boolean,
    invalid: boolean,
    dirty: boolean,
    pristine: boolean,
    active: boolean,
    touched: boolean,
    visited: boolean,
    autofilled: boolean,
    error?: string,
    onChange: (eventOrValue: SyntheticEvent<any> | string | boolean) => mixed,
    onUpdate: (eventOrValue: SyntheticEvent<any>  | string | boolean) => mixed,
    onBlur: (eventOrValue: SyntheticEvent<any>  | string | boolean) => mixed,
    onDragStart: Function,
    onDrop: Function,
    onFocus: Function,
    ...
  };

  declare export type MetaProps = {
    active: boolean,
    autofilled: boolean,
    asyncValidating: boolean,
    dirty: boolean,
    dispatch: Function,
    error?: string,
    invalid: boolean,
    pristine: boolean,
    submitting: boolean,
    touched: boolean,
    valid: boolean,
    visited: boolean,
    ...
  };

  declare export type FieldInputProps = {
    input: InputProps,
    meta: MetaProps,
    ...
  };

  declare export type FieldProps<P> = {
    name: string,
    placeholder?: ?string,
    label?: string,
    value?: ?(string | boolean),
    component: React.ComponentType<P, void> | string,
    ...
  } & $Diff<P, FieldInputProps>;

  declare export type RegisteredField<T> = {
    name: $Keys<T>,
    type: string,
    ...
  };

  declare export type FormState<T> = {
    values: T,
    initial: T,
    registeredFields: Array<RegisteredField<T>>,
    ...
  };

  declare export type FormProps = {
    active: string,
    asyncValidate: (values: Object, dispatch: Function, props: Object) => Promise<void>,
    asyncValidating: string | boolean,
    destroyForm: Function,
    dirty: boolean,
    error: string,
    fields: { [fieldName: string]: InputProps, ... },
    handleSubmit: (data: { [field: string]: string, ... }) => void | Promise<any>,
    initializeForm: (data:Object) => any,
    invalid: boolean,
    pristine: boolean,
    resetForm: Function,
    formKey: string,
    submitting: boolean,
    submitFailed: boolean,
    touch: (...fields: Array<string>) => void,
    touchAll: () => void,
    untouch: (...fields: Array<string>) => void,
    untouchAll: () => void,
    valid: boolean,
    values: Object,
    ...
  };

  declare export type FormConfig = {
    fields: Array<string>,
    form: string,
    alwaysAsyncValidate?: boolean,
    asyncBlurFields?: Array<string>,
    asyncValidate?: (values: Object, dispatch: Function, props: Object) => Promise<void>,
    destroyOnUnmount?: boolean,
    formKey?: string,
    getFormState?: (state: Object, reduxMountPoint: string) => mixed,
    initialValues?: { [field: string]: string, ... },
    onSubmit?: Function,
    onSubmitFail?: Function,
    onSubmitSuccess?: Function,
    overwriteOnInitialValuesChange?: boolean,
    propNamespace?: string,
    readonly?: boolean,
    reduxMountPoint?: String,
    returnRejectedSubmitPromise?: boolean,
    touchOnBlur?: boolean,
    touchOnChange?: boolean,
    validate?: (values:Object, props:Object) => Object,
    ...
  };

  declare export type FormComponentProps = {
    // State:
    // true if async validation is running
    asyncValidating: boolean,
    // true if any values are different from initialValues
    dirty: boolean,
    // form-wide error from '_error' key in validation result
    error: any,
    // form-wide warning from '_warning' key in validation result
    warning: any,
    // true if there are any validation errors
    invalid: boolean,
    // true if the form has been initialized
    initialized: boolean,
    // true if the values are the same as initialValues
    pristine: boolean,
    // true if the form is in the process of being submitted
    submitting: boolean,
    // true if the form was submitted and failed for any reason
    submitFailed: boolean,
    // true if the form was successfully submitted
    submitSucceeded: boolean,
    // true if there are no validation errors
    valid: boolean,
    // Actions:
    array: {
      // function to insert a value into an array field
      insert: Function,
      // function to move a value within an array field
      move: Function,
      // function to pop a value off of an array field
      pop: Function,
      // function to push a value onto an array field
      push: Function,
      // function to remove a value from an array field
      remove: Function,
      // function to remove all the values from an array field
      removeAll: Function,
      // function to shift a value out of an array field
      shift: Function,
      // function to splice a value into an array field
      splice: Function,
      // function to swap values in an array field
      swap: Function,
      ...
    },
    // function to trigger async validation
    asyncValidate: Function,
    // action to mark a field as blurred
    blur: Function,
    // action to change the value of a field
    change: Function,
    // action to destroy the form's data in Redux
    destroy: Function,
    // the Redux dispatch action
    dispatch: Function,
    // function to submit the form
    handleSubmit: Function,
    // action to initialize form data
    initialize: Function,
    // action to reset the form data to previously initialized values
    reset: Function,
    // action to mark fields as touched
    touch: Function,
    // action to mark fields as untouched
    untouch: Function,
    ...
  };

  declare function getValues(state: any): any;
  declare export class Field<P> extends React.Component<FieldProps<P>, void> {}
  declare export function reducer(state: any, action: Object): any;
  declare export function reduxForm<P>(config: FormConfig):
  (component: React.ComponentType<P>) => React.StatelessFunctionalComponent<$Diff<P, FormComponentProps>, void>
}
