declare module 'redux-forms-react' {

  // ====
  // Form
  // ====

  declare type FormProps = {
    name: string,
    persistent?: boolean,
    onSubmit?: (values: any) => ?Promise<any>,
    withRef?: (el: HTMLFormElement) => void,
  };

  declare export class Form extends React$Component {
    props: FormProps;
  }

  // =====
  // Field
  // =====

  declare type Value = any;

  declare type FieldProps = {|
    name: string,
    validate: (value: Value) => string | null,
    normalize: (value: Value) => Value,
    defaultValue: Value,
    children?: React$Element<*>,  // specify once Flow is capable of it
  |};

  declare type FieldDefaultProps = {|
    validate: (value: Value) => string | null,
    normalize: (value: Value) => Value,
    defaultValue: Value,
  |};

  declare export class Field extends React$Component {
    static defaultProps: FieldDefaultProps;
    props: FieldProps;
  }

  declare export type InputProp = {|
    +name: string,
    +value: Value,
    +checked?: boolean,
    +onChange: (ev: any) => void,
    +onFocus: (ev: SyntheticEvent) => void,
    +onBlur: (ev: SyntheticEvent) => void,
  |};

  declare export type MetaProp = {|
    +error: string | null,
    +dirty: boolean,
    +touched: boolean,
    +visited: boolean,
    +active: boolean,
  |};

  // ==========
  // FieldArray
  // ==========

  declare type FieldArrayProps = {|
    name: string,
    children?: React$Element<*>,  // specify once Flow is capable of it
  |};

  declare export class FieldArray extends React$Component {
    props: FieldArrayProps;
  }

  declare export type FieldsProp = {|
    +length: number,
    +map: (fn: (el: string, index: number) => any) => any[],
    +push: () => void,
    +pop: () => void,
    +unshift: () => void,
    +shift: () => void,
    +insert: (index: number) => void,
    +remove: (index: number) => void,
    +swap: (index1: number, index2: number) => void,
    +move: (from: number, to: number) => void,
  |};
}
