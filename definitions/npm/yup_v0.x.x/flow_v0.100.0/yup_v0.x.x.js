declare module 'yup' {
  import type Ref from 'yup/lib/Reference';
  import type Lazy from 'yup/lib/Lazy';
  import type ValidationError from 'yup/lib/ValidationError';

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

  declare export interface BaseSchema<T> {
    cast(value: any, options?: { context: {} }): T;
    resolve(options?: any): BaseSchema<T>;
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
  }

  declare export interface Schema<T> extends BaseSchema<T> {
    clone(): Schema<T>;
    label(label: string): Schema<T>;
    meta(metadata: SchemaMeta): Schema<T>;
    meta(): SchemaMeta;
    describe(): SchemaDescription;
    concat(schema: Schema<T>): Schema<T>;
    isValid(value: any, options?: ValidateOptions): Promise<boolean>;
    isValidSync(
      value: any,
      options?: $Diff<ValidateOptions, { sync: any }>
    ): boolean;

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

  declare export type SchemaDescription = {
    type: string,
    label: string,
    meta: {},
    tests: Array<{ name: string, params: {} }>,
  };

  declare export function ref(
    path: string,
    options?: {| contextPrefix: string |}
  ): Ref;

  declare export function lazy<T>(fn: (value: T) => Schema<T>): Lazy;

  declare export { default as setLocale } from 'yup/lib/setLocale';
  declare export { default as isSchema } from 'yup/lib/util/isSchema';
  declare export { default as reach } from 'yup/lib/util/reach';

  declare export { default as array } from 'yup/lib/array';
  declare export { default as bool } from 'yup/lib/bool';
  declare export { default as boolean } from 'yup/lib/boolean';
  declare export { default as date } from 'yup/lib/date';
  declare export { default as mixed } from 'yup/lib/mixed';
  declare export { default as number } from 'yup/lib/number';
  declare export { default as object } from 'yup/lib/object';
  declare export { default as string } from 'yup/lib/string';

  declare export function addMethod(
    schemaType: any,
    name: string,
    method: (...args: any) => mixed
  ): void;
}

declare module 'yup/lib/setLocale' {
  declare export type LocaleDescriptor<Keys> = {
    [Keys]: string,
  };

  declare export type LocaleObject = {|
    mixed?: {
      notType: ({|
        path: string,
        type: any,
        value: any,
        originalValue: any,
      |}) => string,
      ['default' | 'required' | 'oneOf' | 'notOneOf']: string,
    },
    string?: LocaleDescriptor<
      | 'length'
      | 'min'
      | 'max'
      | 'matches'
      | 'email'
      | 'url'
      | 'trim'
      | 'lowercase'
      | 'uppercase'
    >,
    number?: LocaleDescriptor<
      | 'min '
      | 'max'
      | 'lessThan'
      | 'moreThan'
      | 'notEqual'
      | 'positive'
      | 'negative'
      | 'integer'
    >,
    boolean?: {},
    bool?: {},
    date?: LocaleDescriptor<'min' | 'max'>,
    array?: LocaleDescriptor<'min' | 'max'>,
    object?: LocaleDescriptor<'noUnknown'>,
  |};

  declare export default (customLocale: LocaleObject) => void;
}

declare module 'yup/lib/ValidationError' {
  declare export default class ValidationError extends Error {
    name: string;
    message: string;
    value: any;
    path: string;
    type: any;
    errors: Array<string>;
    inner: Array<ValidationError>;
    params?: {};

    static isError(err: any): boolean;
    static formatError(
      message: string | ((params?: any) => string),
      params?: any
    ): string | ((params?: any) => string);

    constructor(
      errors: string | Array<string>,
      value: any,
      path: string,
      type?: any
    ): ValidationError;
  }
}
declare module 'yup/lib/Lazy' {
  import type { BaseSchema } from 'yup';

  declare export default Class<BaseSchema<any>>;
}
declare module 'yup/lib/Reference' {
  declare export type RefOptions = {| contextPrefix: string |};

  declare export default class Reference {
    +__isYupRef: true;

    constructor(key: string, options: RefOptions): Reference;
    getValue(options: {}): any;
    cast(value: any, options: {}): any;
    resolve(): Reference;
    describe(): {| type: 'ref', key: string |};

    static isRef(value: any): boolean;
  }
}

declare module 'yup/lib/util/reach' {
  import type { Schema } from 'yup';

  declare export default {
    <T, R>(
      schema: Schema<T>,
      path: string,
      value?: any,
      context?: any
    ): Schema<R>,
  };
}
declare module 'yup/lib/util/isSchema' {
  declare export default (obj: any) => boolean;
}

declare module 'yup/lib/mixed' {
  import type { Schema, TestOptionsMessage } from 'yup';

  declare export type MixedSchemaConstructor = Class<MixedSchema<mixed>> &
    (() => MixedSchema<mixed>);

  declare export interface MixedSchema<T> extends Schema<T> {
    nullable(isNullable?: true): MixedSchema<?T>;
    nullable(isNullable: false): MixedSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): MixedSchema<$NonMaybeType<T>>;
    notRequired(): MixedSchema<?T>;
  }

  declare export default MixedSchemaConstructor;
}
declare module 'yup/lib/string' {
  import type Ref from 'yup/lib/Reference';
  import type { Schema, TestOptionsMessage } from 'yup';

  declare export type StringSchemaConstructor = Class<StringSchema<string>> &
    (() => StringSchema<string>);

  declare export interface StringSchema<T> extends Schema<T> {
    length(limit: number | Ref, message?: TestOptionsMessage): StringSchema<T>;
    min(limit: number | Ref, message?: TestOptionsMessage): StringSchema<T>;
    max(limit: number | Ref, message?: TestOptionsMessage): StringSchema<T>;

    email(message?: TestOptionsMessage): StringSchema<T>;
    url(message?: TestOptionsMessage): StringSchema<T>;
    trim(message?: TestOptionsMessage): StringSchema<T>;
    lowercase(message?: TestOptionsMessage): StringSchema<T>;
    uppercase(message?: TestOptionsMessage): StringSchema<T>;

    ensure(): StringSchema<T>;
    matches(
      regex: RegExp,
      messageOrOptions?:
        | TestOptionsMessage
        | { message?: TestOptionsMessage, excludeEmptyString?: boolean }
    ): StringSchema<T>;

    nullable(isNullable?: true): StringSchema<?T>;
    nullable(isNullable: false): StringSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): StringSchema<$NonMaybeType<T>>;
    notRequired(): StringSchema<?T>;
  }

  declare export default StringSchemaConstructor;
}
declare module 'yup/lib/number' {
  import type Ref from 'yup/lib/Reference';
  import type { Schema, TestOptionsMessage } from 'yup';

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

  declare export default NumberSchemaConstructor;
}
declare module 'yup/lib/boolean' {
  import type { BooleanSchemaConstructor } from 'yup/lib/bool';
  declare export default BooleanSchemaConstructor;
}
declare module 'yup/lib/bool' {
  import type { Schema, TestOptionsMessage } from 'yup';

  declare export type BooleanSchemaConstructor = Class<BooleanSchema<boolean>> &
    (() => BooleanSchema<boolean>);

  declare export interface BooleanSchema<T> extends Schema<T> {
    nullable(isNullable?: true): BooleanSchema<?T>;
    nullable(isNullable: false): BooleanSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): BooleanSchema<$NonMaybeType<T>>;
    notRequired(): BooleanSchema<?T>;
  }

  declare export default BooleanSchemaConstructor;
}
declare module 'yup/lib/date' {
  import type Ref from 'yup/lib/Reference';
  import type { Schema, TestOptionsMessage } from 'yup';

  declare export type DateSchemaConstructor = Class<DateSchema<Date>> &
    (() => DateSchema<Date>);

  declare export interface DateSchema<T> extends Schema<T> {
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

  declare export default DateSchemaConstructor;
}
declare module 'yup/lib/array' {
  import type Ref from 'yup/lib/Reference';
  import type { Schema, TestOptionsMessage } from 'yup';

  declare export type ArraySchemaConstructor = Class<ArraySchema<Array<any>>> &
    (<T>() => ArraySchema<Array<T>>) &
    (<U>(type: Schema<U>) => ArraySchema<Array<U>>);

  declare export interface ArraySchema<T> extends Schema<T> {
    of<U>(type: Schema<U>): ArraySchema<Array<U>>;
    min(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    max(limit: number | Ref, message?: TestOptionsMessage): ArraySchema<T>;
    ensure(): ArraySchema<T>;
    compact(
      rejector?: (value: any, index: number, array: Array<T>) => boolean
    ): ArraySchema<T>;
    nullable(isNullable?: true): ArraySchema<?T>;
    nullable(isNullable: false): ArraySchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): ArraySchema<$NonMaybeType<T>>;
    notRequired(): ArraySchema<?T>;
  }

  declare export default ArraySchemaConstructor;
}
declare module 'yup/lib/object' {
  import type { Schema, TestOptionsMessage } from 'yup';

  declare export type ObjectSchemaDefinition<T: {}> = {
    //[field in keyof T]: Schema<T[field]> | Ref
  };

  declare export type Shape<T: {}, U: {}> = {
    //[P in keyof T]: P extends keyof U ? U[P] : T[P]
  } & U;

  declare export type ObjectSchemaConstructor = Class<ObjectSchema<{}>> &
    (() => ObjectSchema<{}>);

  declare export interface ObjectSchema<T> extends Schema<T> {
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

  declare export default ObjectSchemaConstructor;
}
