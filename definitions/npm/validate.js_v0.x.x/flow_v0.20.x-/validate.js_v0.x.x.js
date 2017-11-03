declare module 'validate.js' {
  declare type Attributes = any;
  declare type Constraint = Object;
  declare type Constraints = { [k: string]: null | Constraint };
  declare type Options = Object;
  declare type ValidatorFunction = (value: any, options: Options, key: string, attributes: Attributes, globalOptions: Options) => void | null | string | Array<string>;

  declare type ValidateFunction = {
    (attributes: Attributes, constraints: Constraints, options: { format: 'flat' } & Options): Array<string>;
    (attributes: Attributes, constraints: Constraints, options: { format: 'grouped' } & Options): { [key: string]: Array<string> };
    (attributes: Attributes, constraints: Constraints, options: { format: 'detailed' } & Options): Array<{
      attribute: string;
      value: any;
      validator: string;
      globalOptions: Object;
      attributes: Attributes;
      options: Object;
      error: string;
    }>;
    (attributes: Attributes, constraints: Constraints, options?: Options): any;


    async(attributes: Attributes, constraints: Constraints, options?: Options): Promise<any>;
    Promise: typeof Promise;
    capitalize(s: string): string;
    cleanAttributes(attributes: Attributes, whitelist: { [k: string]: boolean }): Attributes;
    collectFormValues(rootElement: Element, options?: { nullify?: boolean, trim?: boolean }): { [k: string]: void | null | string | boolean };
    contains<V>(collection: Array<V>|{ [k: string]: V }, v: V): boolean;
    extend(o1: any, ...otherObjects: Array<any>): any;
    format(formatString: string, values: { [k: string]: any }): string;
    getDeepObjectValue(object: Object, keypath: string): any;
    isArray(value: Array<any>): true;
    isArray(value: any): false;
    isBoolean(value: boolean): true;
    isBoolean(value: any): false;
    isDate(value: Date): true;
    isDate(value: any): false;
    isDefined(value: void | null): false;
    isDefined(value: any): true;
    isDomElement(value: Element): true;
    isDomElement(value: any): false;
    isEmpty(value: void | null | ''): true;
    isEmpty(value: any): boolean;
    isFunction(value: Function): true;
    isFunction(value: any): false;
    isHash(value: {}): true;
    isHash(value: any): false;
    isInteger(value: any): boolean;
    isNumber(value: number): true;
    isNumber(value: any): false;
    isPromise(value: { then: Function }): true;
    isPromise(value: any): false;
    isString(value: string): true;
    isString(value: any): false;
    prettify(string: string): string;
    result(value: any, ...args: Array<any>): any;
    single(value: any, constraint: Constraint, options?: Options): any;
    validators: { [key: string]: ValidatorFunction };
  }


  declare var exports: ValidateFunction;
}
