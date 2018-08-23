/* ======== */
/* = CORE = */
/* ======== */

declare type $npm$ReduxForms$Value = any;

declare type $npm$ReduxForms$Field = {|
  +value: $npm$ReduxForms$Value,
  +visited: boolean,
  +touched: boolean,
  +active: boolean,
  +error: string | null,
  +dirty: boolean,
|};

declare type $npm$ReduxForms$Form = {|
  +fields: { +[key: string]: $npm$ReduxForms$Field },
  +arrays: { +[key: string]: number },
  +submitting: boolean,
|};

declare type $npm$ReduxForms$State = {
  +[form: string]: $npm$ReduxForms$Form,
};

/* =========== */
/* = ACTIONS = */
/* =========== */

declare type $npm$ReduxForms$AddFormAction = {| +type: '@@redux-forms/ADD_FORM', +payload: {|
  +name: string,
|} |};

declare type $npm$ReduxForms$AddFormCreator = (name: string) => $npm$ReduxForms$AddFormAction;


declare type $npm$ReduxForms$RemoveFormAction = {| +type: '@@redux-forms/REMOVE_FORM', +payload: {|
  +name: string,
|} |};

declare type $npm$ReduxForms$RemoveFormCreator = (name: string) => $npm$ReduxForms$RemoveFormAction;


declare type $npm$ReduxForms$AddFieldAction = {| +type: '@@redux-forms/ADD_FIELD', +payload: {|
  +form: string,
  +id: string,
  +field: $npm$ReduxForms$Field,
|} |};

declare type $npm$ReduxForms$AddFieldCreator = (form: string, id: string, field: $npm$ReduxForms$Field) => $npm$ReduxForms$AddFieldAction;


declare type $npm$ReduxForms$RemoveFieldAction = {| +type: '@@redux-forms/REMOVE_FIELD', +payload: {|
  +form: string,
  +id: string,
|} |};

declare type $npm$ReduxForms$RemoveFieldCreator = (form: string, id: string) => $npm$ReduxForms$RemoveFieldAction;


declare type $npm$ReduxForms$TouchAllAction = {| +type: '@@redux-forms/TOUCH_ALL', +payload: {|
  +form: string,
|} |};

declare type $npm$ReduxForms$TouchAllCreator = (form: string) => $npm$ReduxForms$TouchAllAction;


declare type $npm$ReduxForms$SubmitStartAction = {| +type: '@@redux-forms/SUBMIT_START', +payload: {|
  +form: string,
|} |};

declare type $npm$ReduxForms$SubmitStartCreator = (form: string) => $npm$ReduxForms$SubmitStartAction;


declare type $npm$ReduxForms$SubmitStopAction = {| +type: '@@redux-forms/SUBMIT_STOP', +payload: {|
  +form: string,
|} |};

declare type $npm$ReduxForms$SubmitStopCreator = (form: string) => $npm$ReduxForms$SubmitStopAction;


declare type $npm$ReduxForms$AddArrayAction = {| +type: '@@redux-forms/ADD_ARRAY', +payload: {|
  +form: string,
  +id: string,
|} |};

declare type $npm$ReduxForms$AddArrayCreator = (form: string, id: string) => $npm$ReduxForms$AddArrayAction;


declare type $npm$ReduxForms$RemoveArrayAction = {| +type: '@@redux-forms/REMOVE_ARRAY', +payload: {|
  +form: string,
  +id: string,
|} |};

declare type $npm$ReduxForms$RemoveArrayCreator = (form: string, id: string) => $npm$ReduxForms$RemoveArrayAction;


declare type $npm$ReduxForms$ArrayPushAction = {| +type: '@@redux-forms/ARRAY_PUSH', +payload: {|
  +form: string,
  +id: string,
|} |};

declare type $npm$ReduxForms$ArrayPushCreator = (form: string, id: string) => $npm$ReduxForms$ArrayPushAction;


declare type $npm$ReduxForms$ArrayPopAction = {| +type: '@@redux-forms/ARRAY_POP', +payload: {|
  +form: string,
  +id: string,
|} |};

declare type $npm$ReduxForms$ArrayPopCreator = (form: string, id: string) => $npm$ReduxForms$ArrayPopAction;


declare type $npm$ReduxForms$ArrayUnshiftAction = {| +type: '@@redux-forms/ARRAY_UNSHIFT', +payload: {|
  +form: string,
  +id: string,
|} |};

declare type $npm$ReduxForms$ArrayUnshiftCreator = (form: string, id: string) => $npm$ReduxForms$ArrayUnshiftAction;


declare type $npm$ReduxForms$ArrayShiftAction = {| +type: '@@redux-forms/ARRAY_SHIFT', +payload: {|
  +form: string,
  +id: string,
|} |};

declare type $npm$ReduxForms$ArrayShiftCreator = (form: string, id: string) => $npm$ReduxForms$ArrayShiftAction;


declare type $npm$ReduxForms$ArrayInsertAction = {| +type: '@@redux-forms/ARRAY_INSERT', +payload: {|
  +form: string,
  +id: string,
  +index: number,
|} |};

declare type $npm$ReduxForms$ArrayInsertCreator = (form: string, id: string, index: number) => $npm$ReduxForms$ArrayInsertAction;


declare type $npm$ReduxForms$ArrayRemoveAction = {| +type: '@@redux-forms/ARRAY_REMOVE', +payload: {|
  +form: string,
  +id: string,
  +index: number,
|} |};

declare type $npm$ReduxForms$ArrayRemoveCreator = (form: string, id: string, index: number) => $npm$ReduxForms$ArrayRemoveAction;


declare type $npm$ReduxForms$ArraySwapAction = {| +type: '@@redux-forms/ARRAY_SWAP', +payload: {|
  +form: string,
  +id: string,
  +index1: number,
  +index2: number,
|} |};

declare type $npm$ReduxForms$ArraySwapCreator = (form: string, id: string, index1: number, index2: number) => $npm$ReduxForms$ArraySwapAction;


declare type $npm$ReduxForms$ArrayMoveAction = {| +type: '@@redux-forms/ARRAY_MOVE', +payload: {|
  +form: string,
  +id: string,
  +from: number,
  +to: number,
|} |};

declare type $npm$ReduxForms$ArrayMoveCreator = (form: string, id: string, from: number, to: number) => $npm$ReduxForms$ArrayMoveAction;


declare type $npm$ReduxForms$FieldChangeAction = {| +type: '@@redux-forms/FIELD_CHANGE', +payload: {|
  +form: string,
  +field: string,
  +value: $npm$ReduxForms$Value,
  +error: string | null,
  +dirty: boolean,
|} |};

declare type $npm$ReduxForms$FieldChangeCreator = (
  form: string, field: string, value: $npm$ReduxForms$Value, error: string | null, dirty: boolean,
) => $npm$ReduxForms$FieldChangeAction;


declare type $npm$ReduxForms$FieldFocusAction = {| +type: '@@redux-forms/FIELD_FOCUS', +payload: {|
  +form: string,
  +field: string,
|} |};

declare type $npm$ReduxForms$FieldFocusCreator = (form: string, field: string) => $npm$ReduxForms$FieldFocusAction;


declare type $npm$ReduxForms$FieldBlurAction = {| +type: '@@redux-forms/FIELD_BLUR', +payload: {|
  +form: string,
  +field: string,
  +value: $npm$ReduxForms$Value,
  +error: string | null,
  +dirty: boolean,
|} |};

declare type $npm$ReduxForms$FieldBlurCreator = (
  form: string, field: string, value: $npm$ReduxForms$Value, error: string | null, dirty: boolean,
) => $npm$ReduxForms$FieldBlurAction;


declare type $npm$ReduxForms$Action =
  $npm$ReduxForms$AddFormAction |
  $npm$ReduxForms$RemoveFormAction |
  $npm$ReduxForms$AddFieldAction |
  $npm$ReduxForms$RemoveFieldAction |
  $npm$ReduxForms$TouchAllAction |
  $npm$ReduxForms$SubmitStartAction |
  $npm$ReduxForms$SubmitStopAction |
  $npm$ReduxForms$AddArrayAction |
  $npm$ReduxForms$RemoveArrayAction |
  $npm$ReduxForms$ArrayPushAction |
  $npm$ReduxForms$ArrayPopAction |
  $npm$ReduxForms$ArrayUnshiftAction |
  $npm$ReduxForms$ArrayShiftAction |
  $npm$ReduxForms$ArrayInsertAction |
  $npm$ReduxForms$ArrayRemoveAction |
  $npm$ReduxForms$ArraySwapAction |
  $npm$ReduxForms$ArrayMoveAction |
  $npm$ReduxForms$FieldChangeAction |
  $npm$ReduxForms$FieldFocusAction |
  $npm$ReduxForms$FieldBlurAction ;

declare module 'redux-forms/actions' {
  declare export var addForm: $npm$ReduxForms$AddFormCreator;
  declare export var removeForm: $npm$ReduxForms$RemoveFormCreator;
  declare export var addField: $npm$ReduxForms$AddFieldCreator;
  declare export var removeField: $npm$ReduxForms$RemoveFieldCreator;
  declare export var touchAll: $npm$ReduxForms$TouchAllCreator;
  declare export var submitStart: $npm$ReduxForms$SubmitStartCreator;
  declare export var submitStop: $npm$ReduxForms$SubmitStopCreator;
  declare export var addArray: $npm$ReduxForms$AddArrayCreator;
  declare export var removeArray: $npm$ReduxForms$RemoveArrayCreator;
  declare export var arrayPush: $npm$ReduxForms$ArrayPushCreator;
  declare export var arrayPop: $npm$ReduxForms$ArrayPopCreator;
  declare export var arrayUnshift: $npm$ReduxForms$ArrayUnshiftCreator;
  declare export var arrayShift: $npm$ReduxForms$ArrayShiftCreator;
  declare export var arrayInsert: $npm$ReduxForms$ArrayInsertCreator;
  declare export var arrayRemove: $npm$ReduxForms$ArrayRemoveCreator;
  declare export var arraySwap: $npm$ReduxForms$ArraySwapCreator;
  declare export var arrayMove: $npm$ReduxForms$ArrayMoveCreator;
  declare export var fieldChange: $npm$ReduxForms$FieldChangeCreator;
  declare export var fieldFocus: $npm$ReduxForms$FieldFocusCreator;
  declare export var fieldBlur: $npm$ReduxForms$FieldBlurCreator;

  declare export type Action = $npm$ReduxForms$Action;
}

declare module 'redux-forms/selectors' {
  declare type Error = string | null;

  declare export type Values = { +[key: string]: $npm$ReduxForms$Value | $npm$ReduxForms$Value[] | Values[] };
  declare export type Errors = { +[key: string]: Error | Error[] | Errors[] };
  declare export type ReduxFormsState = {
    +reduxForms: $npm$ReduxForms$State,
  };

  declare export function valueSelector(name: string, state: ReduxFormsState): Values;
  declare export function errorSelector(name: string, state: ReduxFormsState): Errors;
  declare export function isValid(name: string, state: ReduxFormsState): boolean;
  declare export function isTouched(name: string, state: ReduxFormsState): boolean;
  declare export function isDirty(name: string, state: ReduxFormsState): boolean;
  declare export function isSubmitting(name: string, state: ReduxFormsState): boolean;
}

declare module 'redux-forms' {
  declare export function reducer(s?: $npm$ReduxForms$State, a: $npm$ReduxForms$Action): $npm$ReduxForms$State;
}
