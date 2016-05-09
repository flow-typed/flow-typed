// @flow
import React from 'react';

declare module 'redux-form' {
  declare type InputProps = {
    name: string,
    value: string | number | boolean,
    valid: boolean,
    invalid: boolean,
    dirty: boolean,
    pristine: boolean,
    active: boolean,
    touched: boolean,
    viisted: boolean,
    autofiller: boolean
  };
  declare type FormProps = {
    active: string,
    asyncValidate: Function,
    asyncValidating: string | boolean,
    destroyForm: Function,
    dirty: boolean,
    error: String,
    fields: { [fieldName: string]: InputProps },
    handleSubmit: Function,
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
    values: Object
  };
  declare type FormConfig = {
    fields: Array<string>,
    form: string,
    alwaysAsyncValidate?: boolean,
    asyncBlurFields?: Array<string>,
    asyncValidate?: (values: Object, dispatch: Function, props: Object) => Promise<void>,
    destroyOnUnmount?: boolean,
    formKey?: string,
    getFormState?: Function,
    initialValues?: Object,
    onSubmit?: Function,
    onSubmitFail?: Function,
    onSubmitSuccess?: Function,
    verwriteOnInitialValuesChange?: boolean,
    propNamespace?: string,
    readonly?: boolean,
    reduxMountPoint?: String,
    returnRejectedSubmitPromise?: boolean,
    touchOnBlur?: boolean,
    touchOnChange?: boolean,
    validate?: (values:Object, props:Object) => Object
  };
  declare function reduxForm(config: FormConfig, mapStateToProps?: Function, mapDispatchToProps?: Function, mergeProps?: any, options?: Object): (component: React.Component) => React.Component;

  declare function reducer(state: any, action: Object): any;
  declare function getValues(state: any): any;
}
