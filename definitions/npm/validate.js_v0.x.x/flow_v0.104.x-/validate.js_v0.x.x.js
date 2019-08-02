declare module 'validate.js' {
  declare type Attributes = mixed;
  declare type Constraint = Object;
  declare type Constraints = { [k: string]: null | Constraint, ... };
  declare type Options = Object;
  declare type ValidatorFunction = (
    value: mixed,
    options: Options,
    key: string,
    attributes: Attributes,
    globalOptions: Options
  ) => void | null | string | Array<string>;

  declare type ValidateFunction = {
    (
      attributes: Attributes,
      constraints: Constraints,
      options: { format: 'flat', ... } & Options
    ): Array<string>,
    (
      attributes: Attributes,
      constraints: Constraints,
      options: { format: 'grouped', ... } & Options
    ): { [key: string]: Array<string>, ... },
    (
      attributes: Attributes,
      constraints: Constraints,
      options: { format: 'detailed', ... } & Options
    ): Array<{
      attribute: string,
      value: mixed,
      validator: string,
      globalOptions: Object,
      attributes: Attributes,
      options: Object,
      error: string,
      ...
    }>,
    (
      attributes: Attributes,
      constraints: Constraints,
      options?: Options
    ): mixed,
    async(
      attributes: Attributes,
      constraints: Constraints,
      options?: Options
    ): Promise<mixed>,
    Promise: typeof Promise,
    capitalize(s: string): string,
    cleanAttributes(
      attributes: Attributes,
      whitelist: { [k: string]: boolean, ... }
    ): Attributes,
    collectFormValues(
      rootElement: Element,
      options?: {
        nullify?: boolean,
        trim?: boolean,
        ...
      }
    ): { [k: string]: void | null | string | boolean, ... },
    contains<V>(collection: Array<V> | { [k: string]: V, ... }, v: V): boolean,
    extend(o1: mixed, ...otherObjects: Array<mixed>): mixed,
    format(formatString: string, values: { [k: string]: mixed, ... }): string,
    getDeepObjectValue(object: Object, keypath: string): mixed,
    isArray(value: Array<mixed>): true,
    isArray(value: mixed): false,
    isBoolean(value: boolean): true,
    isBoolean(value: mixed): false,
    isDate(value: Date): true,
    isDate(value: mixed): false,
    isDefined(value: void | null): false,
    isDefined(value: mixed): true,
    isDomElement(value: Element): true,
    isDomElement(value: mixed): false,
    isEmpty(value: void | null | ''): true,
    isEmpty(value: mixed): boolean,
    isFunction(value: Function): true,
    isFunction(value: mixed): false,
    isHash(value: {...}): true,
    isHash(value: mixed): false,
    isInteger(value: mixed): boolean,
    isNumber(value: number): true,
    isNumber(value: mixed): false,
    isPromise(value: { then: Function, ... }): true,
    isPromise(value: mixed): false,
    isString(value: string): true,
    isString(value: mixed): false,
    prettify(string: string): string,
    result(value: mixed, ...args: Array<mixed>): mixed,
    single(value: mixed, constraint: Constraint, options?: Options): mixed,
    validators: { [key: string]: ValidatorFunction, ... },
    ...
  };

  declare export default ValidateFunction;
}
