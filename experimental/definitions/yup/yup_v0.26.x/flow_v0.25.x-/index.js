declare module 'yup' {
  declare export function reach<T>(
    schema: Schema<T>,
    path: string,
    value?: any,
    context?: any
  ): Schema<T>;

  declare export function addMethod<T: Schema<any>>(
    schemaCtor: AnySchemaConstructor,
    name: string,
    method: (...args: any[]) => T
  ): void;

  declare export function ref(
    path: string,
    options?: {
      contextPrefix: string,
    }
  ): Ref;

  declare export function lazy<T>(fn: (value: T) => Schema<T>): Lazy;

  declare export function setLocale(customLocale: LocaleObject): void;

  declare export var mixed: MixedSchemaConstructor;
  declare export var string: StringSchemaConstructor;
  declare export var number: NumberSchemaConstructor;
  declare export var boolean: BooleanSchemaConstructor;
  declare export var bool: BooleanSchemaConstructor;
  declare export var date: DateSchemaConstructor;
  declare export var array: ArraySchemaConstructor;
  declare export var object: ObjectSchemaConstructor;
  declare export type AnySchemaConstructor =
    | MixedSchemaConstructor
    | StringSchemaConstructor
    | NumberSchemaConstructor
    | BooleanSchemaConstructor
    | DateSchemaConstructor
    | ArraySchemaConstructor
    | ObjectSchemaConstructor;
  declare export type TestOptionsMessage =
    | string
    | ((params: { [key: string]: any } & $Shape<TestMessageParams>) => string);
  declare export class Schema<T> {
    clone(): this;
    label(label: string): this;
    meta(metadata: any): this;
    meta(): any;
    describe(): SchemaDescription;
    concat(schema: this): this;
    validate(value: any, options?: ValidateOptions): Promise<T>;
    validateSync(value: any, options?: ValidateOptions): T;
    validateAt(path: string, value: T, options?: ValidateOptions): Promise<T>;
    validateSyncAt(path: string, value: T, options?: ValidateOptions): T;
    isValid(value: any, options?: any): Promise<boolean>;
    isValidSync(value: any, options?: any): boolean;
    cast(value: any, options?: any): T;
    isType(value: any): boolean;
    strict(isStrict: boolean): this;
    strip(strip: boolean): this;
    withMutation(fn: (current: this) => void): void;
    default(value: any): this;
    default(): T;
    nullable(isNullable: boolean): this;
    required(message?: TestOptionsMessage): this;
    notRequired(): this;
    typeError(message?: TestOptionsMessage): this;
    oneOf(arrayOfValues: any[], message?: TestOptionsMessage): this;
    notOneOf(arrayOfValues: any[], message?: TestOptionsMessage): this;
    when(keys: string | any[], builder: WhenOptions<this>): this;
    test(
      name: string,
      message:
        | string
        | ((
            params: { [key: string]: any } & $Shape<TestMessageParams>
          ) => string),
      test: (
        value?: any
      ) => boolean | ValidationError | Promise<boolean | ValidationError>,
      callbackStyleAsync?: boolean
    ): this;
    test(options: TestOptions): this;
    transform(fn: TransformFunction<this>): this;
  }
  declare export interface MixedSchemaConstructor {
    (): MixedSchema;
    constructor(options?: {
      type?: string,
      [key: string]: any,
    }): MixedSchema;
  }
  declare export type MixedSchema = Schema<any>;

  declare export interface StringSchemaConstructor {
    (): StringSchema;
    constructor(): StringSchema;
  }
  declare export class StringSchema extends Schema<string> {
    min(limit: number | Ref, message?: TestOptionsMessage): StringSchema;
    max(limit: number | Ref, message?: TestOptionsMessage): StringSchema;
    matches(
      regex: RegExp,
      messageOrOptions?: {
        message?: TestOptionsMessage,
        excludeEmptyString?: boolean,
      }
    ): StringSchema;
    matches(regex: RegExp, messageOrOptions?: TestOptionsMessage): StringSchema;
    email(message?: TestOptionsMessage): StringSchema;
    url(message?: TestOptionsMessage): StringSchema;
    ensure(): StringSchema;
    trim(message?: TestOptionsMessage): StringSchema;
    lowercase(message?: TestOptionsMessage): StringSchema;
    uppercase(message?: TestOptionsMessage): StringSchema;
  }

  declare export class NumberSchema extends Schema<number> {
    min(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    max(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    lessThan(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    moreThan(limit: number | Ref, message?: TestOptionsMessage): NumberSchema;
    positive(message?: TestOptionsMessage): NumberSchema;
    negative(message?: TestOptionsMessage): NumberSchema;
    integer(message?: TestOptionsMessage): NumberSchema;
    truncate(): NumberSchema;
    round(type: 'floor' | 'ceil' | 'trunc' | 'round'): NumberSchema;
  }
  declare export interface NumberSchemaConstructor {
    (): NumberSchema;
    constructor(): NumberSchema;
  }

  declare export interface BooleanSchemaConstructor {
    (): BooleanSchema;
    constructor(): BooleanSchema;
  }
  declare export type BooleanSchema = {} & Schema<boolean>;

  declare export interface DateSchemaConstructor {
    (): DateSchema;
    constructor(): DateSchema;
  }
  declare export class DateSchema extends Schema<Date> {
    min(limit: Date | string | Ref, message?: TestOptionsMessage): DateSchema;
    max(limit: Date | string | Ref, message?: TestOptionsMessage): DateSchema;
  }

  declare export interface ArraySchemaConstructor {
    <T>(schema?: Schema<T>): ArraySchema<T>;
    new(): ArraySchema<{}>;
  }

  declare export class ArraySchema<T> extends Schema<T[]> {
    of<U>(type: Schema<U>): ArraySchema<U>;
    min(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    max(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    ensure(): ArraySchema<T>;
    compact(
      rejector?: (value: T, index: number, array: T[]) => boolean
    ): ArraySchema<T>;
  }

  declare export type ObjectSchemaDefinition<
    T: { [key: string]: any }
  > = $ObjMapi<T, <field>(field) => Schema<$ElementType<T, field>> | Ref>;

  /**
   * Merges two interfaces. For properties in common, property types from `U` trump those of `T`.
   * This is conducive to the functionality of
   * [yup's `object.shape()` method](https://www.npmjs.com/package/yup#objectshapefields-object-nosortedges-arraystring-string-schema).
   */
  declare export type Shape<
    T: { [key: string]: any },
    U: { [key: string]: any }
  > = {
    ...$Exact<T>,
    ...$Exact<U>,
  };
  declare export interface ObjectSchemaConstructor {
    <T: { [key: string]: any }>(
      fields?: ObjectSchemaDefinition<T>
    ): ObjectSchema<T>;
    constructor(): ObjectSchema<{}>;
  }
  declare export class ObjectSchema<T: { [key: string]: any }> extends Schema<
    T
  > {
    shape<U: { [key: string]: any }>(
      fields: ObjectSchemaDefinition<U>,
      noSortEdges?: Array<[string, string]>
    ): ObjectSchema<Shape<T, U>>;
    from(fromKey: string, toKey: string, alias?: boolean): ObjectSchema<T>;
    noUnknown(
      onlyKnownKeys?: boolean,
      message?: TestOptionsMessage
    ): ObjectSchema<T>;
    transformKeys(callback: (key: any) => any): void;
    camelCase(): ObjectSchema<T>;
    constantCase(): ObjectSchema<T>;
  }

  declare export type TransformFunction<T> = (
    value: any,
    originalValue: any
  ) => any;
  declare export interface WhenOptionsBuilder<T> {
    (value: any, schema: T): T;
    (v1: any, v2: any, schema: T): T;
    (v1: any, v2: any, v3: any, schema: T): T;
    (v1: any, v2: any, v3: any, v4: any, schema: T): T;
  }
  declare export type WhenOptions<T> =
    | WhenOptionsBuilder<T>
    | {|
        is: boolean | ((value: any) => boolean),
        then: any,
        otherwise: any,
      |}
    | { [key: string]: any };
  declare export interface TestContext {
    path: string;
    options: ValidateOptions;
    parent: any;
    schema: Schema<any>;
    resolve: (value: any) => any;
    createError: (params: {
      path: string,
      message: string,
    }) => ValidationError;
  }
  declare export type ValidateOptions = {
    /**
     * Only validate the input, and skip and coercion or transformation. Default - false
     */
    strict?: boolean,

    /**
     * Teturn from validation methods on the first error rather than after all validations run. Default - true
     */
    abortEarly?: boolean,

    /**
     * Remove unspecified keys from objects. Default - false
     */
    stripUnknown?: boolean,

    /**
     * When false validations will not descend into nested schema (relevant for objects or arrays). Default - true
     */
    recursive?: boolean,

    /**
     * Any context needed for validating schema conditions (see: when())
     */
    context?: { [key: string]: any },
  };
  declare export interface TestMessageParams {
    path: string;
    value: any;
    originalValue: any;
    label: string;
  }
  declare export type TestOptions = {
    /**
     * Unique name identifying the test
     */
    name?: string,

    /**
     * Test function, determines schema validity
     */
    test: (
      value: any
    ) => boolean | ValidationError | Promise<boolean | ValidationError>,

    /**
     * The validation error message
     */
    message?: TestOptionsMessage,

    /**
     * Values passed to message for interpolation
     */
    params?: { [key: string]: any },

    /**
     * Mark the test as exclusive, meaning only one of the same can be active at once
     */
    exclusive?: boolean,
  };
  declare export type SchemaDescription = {
    type: string,
    label: string,
    meta: { [key: string]: any },
    tests: string[],
    fields: { [key: string]: any },
  };
  declare export class ValidationError mixins Error {
    name: string;
    message: string;
    value: any;

    /**
     * A string, indicating where there error was thrown. path is empty at the root level.
     */
    path: string;
    type: any;

    /**
     * array of error messages
     */
    errors: string[];

    /**
     * In the case of aggregate errors, inner is an array of ValidationErrors throw earlier in the validation chain.
     */
    inner: ValidationError[];
    params: { [key: string]: any };
    static isError(err: any): boolean;
    static formatError(
      message: string | ((params?: any) => string),
      params?: any
    ): string | ((params?: any) => string);
    constructor(
      errors: string | string[],
      value: any,
      path: string,
      type?: any
    ): this;
  }

  /**
   * `Ref` is an opaque type that is internal to yup. Creating a `Ref` instance is accomplished via the `ref()` factory
   * function.
   */
  declare export class Ref {
    constructor(): this;
  }
  declare export type Lazy = {} & Schema<any>;

  declare export type LocaleObject = {
    mixed?: $Shape<$ObjMapi<MixedSchema, <key>(key) => string>>,
    string?: $Shape<$ObjMapi<StringSchema, <key>(key) => string>>,
    number?: $Shape<$ObjMapi<NumberSchema, <key>(key) => string>>,
    boolean?: $Shape<$ObjMapi<BooleanSchema, <key>(key) => string>>,
    bool?: $Shape<$ObjMapi<BooleanSchema, <key>(key) => string>>,
    date?: $Shape<$ObjMapi<DateSchema, <key>(key) => string>>,
    array?: $Shape<$ObjMapi<ArraySchema<any>, <key>(key) => string>>,
    object?: $Shape<$ObjMapi<ObjectSchema<any>, <key>(key) => string>>,
  };
}
