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
    context?: {...},
  |};

  declare export interface BaseSchema<T, GetHighType> {
    cast(value: any, options?: { context: {...}, ... }): T;
    resolve(options?: any): $Call<GetHighType, T>;
    validate(value: any, options?: ValidateOptions): Promise<T>;
    validateSync(
      value: any,
      options?: $Diff<ValidateOptions, { sync: any, ... }>
    ): T;
    validateAt(
      path: string,
      value: T,
      options?: $Diff<ValidateOptions, { path: any, ... }>
    ): Promise<T>;
    validateSyncAt(
      path: string,
      value: T,
      options?: $Diff<ValidateOptions, {
        sync: any,
        path: any,
        ...
      }>
    ): T;
  }

  declare export interface Schema<T, GetHighType>
    extends BaseSchema<T, GetHighType> {
    clone(): $Call<GetHighType, T>;
    label(label: string): $Call<GetHighType, T>;
    meta(metadata: SchemaMeta): $Call<GetHighType, T>;
    meta(): SchemaMeta;
    describe(): SchemaDescription;
    concat(schema: $Call<GetHighType, T>): $Call<GetHighType, T>;
    isValid(value: any, options?: ValidateOptions): Promise<boolean>;
    isValidSync(
      value: any,
      options?: $Diff<ValidateOptions, { sync: any, ... }>
    ): boolean;

    isType(value: any): boolean;
    strict(isStrict: boolean): $Call<GetHighType, T>;
    strip(strip: boolean): $Call<GetHighType, T>;
    withMutation(fn: (current: $Call<GetHighType, T>) => mixed): void;
    default(value: any): $Call<GetHighType, T>;
    default(): T;
    typeError(message?: TestOptionsMessage): $Call<GetHighType, T>;
    oneOf(
      arrayOfValues: $ReadOnlyArray<T>,
      message?: TestOptionsMessage
    ): $Call<GetHighType, T>;
    notOneOf(
      arrayOfValues: $ReadOnlyArray<T>,
      message?: TestOptionsMessage
    ): $Call<GetHighType, T>;
    when(
      keys: string | $ReadOnlyArray<string>,
      builder: WhenOptions<Schema<T, GetHighType>>
    ): $Call<GetHighType, T>;
    test(
      name: string,
      message: TestOptionsMessage,
      test: (
        value?: any
      ) => boolean | ValidationError | Promise<boolean | ValidationError>
    ): $Call<GetHighType, T>;
    test(options: TestOptions): $Call<GetHighType, T>;
    transform(fn: TransformFunction): $Call<GetHighType, T>;
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
    | {...};

  declare export type WhenOptionsBuilderObject = {|
    is: WhenOptionsBuilderObjectIs,
    then: Schema<any, any>,
    otherwise: Schema<any, any>,
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
    params?: {...},
    exclusive?: boolean,
  |};

  declare export type SchemaDescription = {
    type: string,
    label: string,
    meta: {...},
    tests: Array<{
      name: string,
      params: {...},
      ...
    }>,
    ...
  };

  declare export function ref<T>(
    path: string,
    options?: {| contextPrefix: string |}
  ): Ref<T>;

  declare export function lazy<T>(fn: (value: T) => Schema<T, any>): Lazy;

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
  declare export type LocaleDescriptor<Keys> = { [Keys]: string, ... };

  declare export type LocaleObject = {|
    mixed?: {
      ['default' | 'required' | 'oneOf' | 'notOneOf']: string,
      notType: ({|
        path: string,
        type: any,
        value: any,
        originalValue: any,
      |}) => string,
      ...
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
    boolean?: {...},
    bool?: {...},
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
    params?: {...};

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

  declare export default Class<BaseSchema<any, any>>;
}
declare module 'yup/lib/Reference' {
  import type { BaseSchema } from 'yup';
  declare export type RefOptions = {| contextPrefix: string |};

  declare export default class Reference<T> implements BaseSchema<T, any> {
    +__isYupRef: true;

    constructor(key: string, options: RefOptions): Reference<T>;
    getValue(options: {...}): any;
    cast(value: any, options: {...}): any;
    resolve(): Reference<T>;
    describe(): {| type: 'ref', key: string |};

    static isRef(value: any): boolean;

    /*
    `implements BaseSchema<T,any>` - This is dirty hack witch using for next case:

     const schema = object({
       a: object({
         b: string()
       })
       refB: ref<string>('a.b')
     });

     // Result Type => { a { b: string }, refB: string };
    */
    cast: empty;
    validate: empty;
    validateAt: empty;
    validateSync: empty;
    validateSyncAt: empty;
  }
}

declare module 'yup/lib/util/reach' {
  import type { Schema } from 'yup';

  declare export default { <T, GetterFn, R, ReturnGetterFn>(
    schema: Schema<T, GetterFn>,
    path: string,
    value?: any,
    context?: any
  ): Schema<R, ReturnGetterFn>, ... };
}
declare module 'yup/lib/util/isSchema' {
  declare export default (obj: any) => boolean;
}

declare module 'yup/lib/mixed' {
  import type { Schema, TestOptionsMessage } from 'yup';

  declare export type GetterMixedSchema = <T>(T) => MixedSchema<T>;

  declare export type MixedSchemaConstructor = Class<MixedSchema<mixed>> &
    (() => MixedSchema<mixed>);

  declare export interface MixedSchema<T> extends Schema<T, GetterMixedSchema> {
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

  declare export type GetterStringSchema = <T>(T) => StringSchema<T>;

  declare export interface StringSchema<T>
    extends Schema<T, GetterStringSchema> {
    length(
      limit: number | Ref<any>,
      message?: TestOptionsMessage
    ): StringSchema<T>;
    min(
      limit: number | Ref<any>,
      message?: TestOptionsMessage
    ): StringSchema<T>;
    max(
      limit: number | Ref<any>,
      message?: TestOptionsMessage
    ): StringSchema<T>;

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
        | {
        message?: TestOptionsMessage,
        excludeEmptyString?: boolean,
        ...
      }
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

  declare export type GetterNumberSchema = <T>(T) => NumberSchema<T>;

  declare export interface NumberSchema<T>
    extends Schema<T, GetterNumberSchema> {
    lessThan(
      limit: number | Ref<any>,
      message?: TestOptionsMessage
    ): NumberSchema<T>;
    moreThan(
      limit: number | Ref<any>,
      message?: TestOptionsMessage
    ): NumberSchema<T>;
    min(
      limit: number | Ref<any>,
      message?: TestOptionsMessage
    ): NumberSchema<T>;
    max(
      limit: number | Ref<any>,
      message?: TestOptionsMessage
    ): NumberSchema<T>;
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

  declare export type GetterBooleanSchema = <T>(T) => BooleanSchema<T>;

  declare export interface BooleanSchema<T>
    extends Schema<T, GetterBooleanSchema> {
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

  declare export type GetterDateSchema = <T>(T) => DateSchema<T>;

  declare export interface DateSchema<T> extends Schema<T, GetterDateSchema> {
    min(
      limit: Date | string | Ref<any>,
      message?: TestOptionsMessage
    ): DateSchema<T>;
    max(
      limit: Date | string | Ref<any>,
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

  declare export type GetterArraySchema = <T>(T) => ArraySchema<T>;

  declare export interface ArraySchema<T> extends Schema<T, GetterArraySchema> {
    of<U>(type: Schema<U, any>): ArraySchema<Array<U>>;
    min(limit: number | Ref<any>, message?: TestOptionsMessage): ArraySchema<T>;
    max(limit: number | Ref<any>, message?: TestOptionsMessage): ArraySchema<T>;
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
  import type { BaseSchema, Schema, TestOptionsMessage } from 'yup';

  declare export type ExtractSchemaType = <V>(v: BaseSchema<V, any>) => V;

  declare export type ObjectSchemaConstructor = Class<ObjectSchema<{...}>> &
    (() => ObjectSchema<{...}>) &
    (<U>(obj: U) => ObjectSchema<$ObjMap<U, ExtractSchemaType>>);

  declare export type GetterObjectSchema = <T>(T) => ObjectSchema<T>;

  declare export interface ObjectSchema<T>
    extends Schema<T, GetterObjectSchema> {
    shape<U>(
      fields: U,
      noSortEdges?: Array<[string, string]>
    ): ObjectSchema<$ObjMap<U, ExtractSchemaType> & T>;

    from<From, To>(
      fromKey: From,
      toKey: To,
      alias: true
    ): ObjectSchema<T & { [To]: $ElementType<T, From>, ... }>;

    /*
     * No ability to describe returned Schema type in this case
     *
     * Use own type `R` for describe `ObjectSchema<R>`, Example:
     *
     * object({a: string()}).from<{a2: string}>('a','a2')
     */
    from<R>(fromKey: string, toKey: string, alias?: false): ObjectSchema<R>;

    noUnknown(
      onlyKnownKeys?: boolean,
      message?: TestOptionsMessage
    ): ObjectSchema<T>;

    /*
     * No ability to describe type for `camelCase()` and `constantCase()`
     *
     * Use own type `R` for describe `ObjectSchema<R>`, Example:
     *
     * object({a_aa_a: string()}).camelCase<{aAaA: string}>()
     *
     * object({a_aa_a: string()}).constantCase<{A_AA_A: string}>()
     * */
    camelCase<R>(): ObjectSchema<R>;
    constantCase<R>(): ObjectSchema<R>;

    nullable(isNullable?: true): ObjectSchema<?T>;
    nullable(isNullable: false): ObjectSchema<$NonMaybeType<T>>;
    required(message?: TestOptionsMessage): ObjectSchema<$NonMaybeType<T>>;
    notRequired(): ObjectSchema<?T>;
  }

  declare export default ObjectSchemaConstructor;
}
