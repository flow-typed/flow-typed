import { ValidateOptions } from 'yup';

declare module 'yup' {
  declare export type TestOptionsMessage =
    | string
    | ((params: $Shape<TestMessageParams>) => string);

  declare export type SchemaMeta = any;

  declare export type ValidateOptions = {|
    // When call `validate(value, {sync: true})` result will be not passed `value`
    // sync?: boolean,
    path?: string,
    strict?: boolean,
    abortEarly?: boolean,
    stripUnknown?: boolean,
    recursive?: boolean,
    context?: {},
  |};

  declare export interface Schema<T> {
    clone(): Schema<T>;
    label(label: string): Schema<T>;
    meta(metadata: SchemaMeta): Schema<T>;
    meta(): SchemaMeta;
    describe(): SchemaDescription;
    concat(schema: Schema<T>): Schema<T>;
    validate(value: any, options?: ValidateOptions): Promise<T>;
    validateSync(
      value: any,
      options?: $Diff<ValidateOptions, { sync: any }>
    ): T;
    validateAt(
      path: string,
      value: T,
      options?: $Diff<ValidateOptions, { path: any }>
    ): Promise<T>;
    validateSyncAt(
      path: string,
      value: T,
      options?: $Diff<ValidateOptions, { sync: any, path: any }>
    ): T;
    isValid(value: any, options?: ValidateOptions): Promise<boolean>;
    isValidSync(
      value: any,
      options?: $Diff<ValidateOptions, { sync: any }>
    ): boolean;
    cast(value: any, options?: any): T;
    isType(value: any): boolean;
    strict(isStrict: boolean): Schema<T>;
    strip(strip: boolean): Schema<T>;
    withMutation(fn: (current: Schema<T>) => mixed): void;
    default(value: any): Schema<T>;
    default(): T;
    typeError(message?: TestOptionsMessage): Schema<T>;
    oneOf(
      arrayOfValues: $ReadOnlyArray<T>,
      message?: TestOptionsMessage
    ): Schema<T>;
    notOneOf(
      arrayOfValues: $ReadOnlyArray<T>,
      message?: TestOptionsMessage
    ): Schema<T>;
    when(
      keys: string | $ReadOnlyArray<string>,
      builder: WhenOptions<Schema<T>>
    ): Schema<T>;
    test(
      name: string,
      message: TestOptionsMessage,
      test: (
        value?: any
      ) => boolean | ValidationError | Promise<boolean | ValidationError>
    ): Schema<T>;
    test(options: TestOptions): Schema<T>;
    transform(fn: TransformFunction): Schema<T>;
  }

  declare export type MixedSchemaConstructor = Class<MixedSchema<mixed>> &
    (() => MixedSchema<mixed>);

  declare export interface MixedSchema<T> extends Schema<T> {
    nullable(isNullable?: true): MixedSchema<?T>;
    nullable(isNullable: false): MixedSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): MixedSchema<$NonMaybeType<T>>;
    notRequired(): MixedSchema<?T>;
  }

  declare export type StringSchemaConstructor = Class<StringSchema<?string>> &
    (() => StringSchema<?string>);

  declare export interface StringSchema<T: ?string> extends Schema<T> {
    constructor(): StringSchema<T>;

    length(limit: number | Ref, message?: TestOptionsMessage): StringSchema<T>;
    min(limit: number | Ref, message?: TestOptionsMessage): StringSchema<T>;
    max(limit: number | Ref, message?: TestOptionsMessage): StringSchema<T>;
    matches(
      regex: RegExp,
      messageOrOptions?:
        | TestOptionsMessage
        | { message?: TestOptionsMessage, excludeEmptyString?: boolean }
    ): StringSchema<T>;
    email(message?: TestOptionsMessage): StringSchema<T>;
    url(message?: TestOptionsMessage): StringSchema<T>;
    ensure(): StringSchema<T>;
    trim(message?: TestOptionsMessage): StringSchema<T>;
    lowercase(message?: TestOptionsMessage): StringSchema<T>;
    uppercase(message?: TestOptionsMessage): StringSchema<T>;
    nullable(isNullable?: true): StringSchema<?T>;
    nullable(isNullable: false): StringSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): StringSchema<$NonMaybeType<T>>;
    notRequired(): StringSchema<?T>;
  }

  declare export type NumberSchemaConstructor = Class<NumberSchema<number>> &
    (() => NumberSchema<number>);

  declare export interface NumberSchema<T> extends Schema<T> {
    lessThan(
      limit: number | Ref,
      message?: TestOptionsMessage
    ): NumberSchema<T>;
    moreThan(
      limit: number | Ref,
      message?: TestOptionsMessage
    ): NumberSchema<T>;
    min(limit: number | Ref, message?: TestOptionsMessage): NumberSchema<T>;
    max(limit: number | Ref, message?: TestOptionsMessage): NumberSchema<T>;
    positive(message?: TestOptionsMessage): NumberSchema<T>;
    negative(message?: TestOptionsMessage): NumberSchema<T>;
    integer(message?: TestOptionsMessage): NumberSchema<T>;
    round(type: 'floor' | 'ceil' | 'trunc' | 'round'): NumberSchema<T>;
    truncate(): NumberSchema<T>;

    nullable(isNullable?: true): NumberSchema<?T>;
    nullable(isNullable: false): NumberSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): NumberSchema<$NonMaybeType<T>>;
    notRequired(): NumberSchema<?T>;
  }

  declare export type BooleanSchemaConstructor = Class<BooleanSchema<boolean>> &
    (() => BooleanSchema<boolean>);

  declare export interface BooleanSchema<T> extends Schema<T> {
    nullable(isNullable?: true): BooleanSchema<?T>;
    nullable(isNullable: false): BooleanSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): BooleanSchema<$NonMaybeType<T>>;
    notRequired(): BooleanSchema<?T>;
  }

  declare export type DateSchemaConstructor = Class<DateSchema<?Date>> &
    (() => DateSchema<?Date>);

  declare export interface DateSchema<T: ?Date> extends Schema<T> {
    min(
      limit: Date | string | Ref,
      message?: TestOptionsMessage
    ): DateSchema<T>;
    max(
      limit: Date | string | Ref,
      message?: TestOptionsMessage
    ): DateSchema<T>;
    nullable(isNullable?: true): DateSchema<?T>;
    nullable(isNullable: false): DateSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): DateSchema<$NonMaybeType<T>>;
    notRequired(): DateSchema<?T>;
  }

  declare export type ArraySchemaConstructor = Class<ArraySchema<mixed>> &
    (() => ArraySchema<mixed>);

  declare export interface ArraySchema<T> extends Schema<Array<T>> {
    of<U>(type: Schema<U>): ArraySchema<U>;
    min(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    max(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    ensure(): ArraySchema<T>;
    compact(
      rejector?: (value: T, index: number, array: T[]) => boolean
    ): ArraySchema<T>;
    nullable(isNullable?: true): ArraySchema<?T>;
    nullable(isNullable: false): ArraySchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): ArraySchema<$NonMaybeType<T>>;
    notRequired(): ArraySchema<?T>;
  }

  declare export type ObjectSchemaDefinition<T: {}> = {
    //[field in keyof T]: Schema<T[field]> | Ref
  };

  declare export type Shape<T: {}, U: {}> = {
    //[P in keyof T]: P extends keyof U ? U[P] : T[P]
  } & U;

  declare export type ObjectSchemaConstructor = Class<ObjectSchema<{}>> &
    (() => ObjectSchema<{}>);

  declare export interface ObjectSchema<T: {}> extends Schema<T> {
    shape<U: {}>(
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
    nullable(isNullable?: true): ObjectSchema<?T>;
    nullable(isNullable: false): ObjectSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): ObjectSchema<$NonMaybeType<T>>;
    notRequired(): ObjectSchema<?T>;
  }

  declare export type TransformFunction = (
    value: any,
    originalValue: any
  ) => any;

  declare export interface WhenOptionsBuilderFunction<T> {
    (value: any, schema: T, ...rest: Array<empty>): T;
    (v1: any, v2: any, schema: T, ...rest: Array<empty>): T;
    (v1: any, v2: any, v3: any, schema: T, ...rest: Array<empty>): T;
    (v1: any, v2: any, v3: any, v4: any, schema: T, ...rest: Array<empty>): T;
  }

  declare export type WhenOptionsBuilderObjectIs =
    | ((...values: any) => boolean)
    | boolean
    | number
    | string
    | null
    | void
    | {};

  declare export type WhenOptionsBuilderObject = {|
    is: WhenOptionsBuilderObjectIs,
    then: Schema<any>,
    otherwise: Schema<any>,
  |};

  declare export type WhenOptions<T> =
    | WhenOptionsBuilderFunction<T>
    | WhenOptionsBuilderObject;

  declare export type TestMessageParams = {|
    path: string,
    value: any,
    originalValue: any,
    label: string,
  |};

  declare export type TestOptions = {|
    name?: string,
    test: (
      value: any
    ) => boolean | ValidationError | Promise<boolean | ValidationError>,
    message?: TestOptionsMessage,
    params?: {},
    exclusive?: boolean,
  |};

  declare export interface SchemaDescription {
    type: string;
    label: string;
    meta: {};
    tests: Array<{ name: string, params: {} }>;
    fields: {};
  }

  declare export type Lazy = Schema<any>;

  declare export type LocaleObject = {|
    mixed?: {},
    string?: {},
    number?: {},
    boolean?: {},
    bool?: {},
    date?: {},
    array?: {},
    object?: {},
  |};

  declare export class ValidationError extends Error {
    name: string;
    message: string;
    value: any;
    path: string;
    type: any;
    errors: string[];
    inner: ValidationError[];
    params?: {};

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
    ): ValidationError;
  }

  declare export class Ref {
    constructor(): Ref;
    +__isYupRef: true;
  }
  declare export function reach<T>(
    schema: Schema<T>,
    path: string,
    value?: any,
    context?: any
  ): Schema<T>;

  declare export function addMethod<T>(
    schemaCtor: any,
    name: string,
    method: (...args: any) => T
  ): void;

  declare export function ref(
    path: string,
    options?: {| contextPrefix: string |}
  ): Ref;
  declare export function lazy<T>(fn: (value: T) => Schema<T>): Lazy<T>;
  declare export function setLocale(customLocale: LocaleObject): void;
  declare export function isSchema(obj: any): boolean;

  declare export var mixed: MixedSchemaConstructor;
  declare export var string: StringSchemaConstructor;
  declare export var number: NumberSchemaConstructor;
  declare export var boolean: BooleanSchemaConstructor;
  declare export var bool: BooleanSchemaConstructor;
  declare export var date: DateSchemaConstructor;
  declare export var array: ArraySchemaConstructor;
  declare export var object: ObjectSchemaConstructor;
}
