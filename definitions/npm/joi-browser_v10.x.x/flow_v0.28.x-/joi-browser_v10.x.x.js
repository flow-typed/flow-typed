// Doesn't include NaN
type FalsyValue = "" | 0 | void | null | false;

type BufferEncoding =
  | "ascii"
  | "base64"
  | "binary"
  | "hex"
  | "ucs2"
  | "ucs-2"
  | "utf16le"
  | "utf-16le"
  | "utf8"
  | "utf-8"
  | "latin1";

interface ValidationOptions {
  abortEarly?: boolean,
  allowUnknown?: boolean,
  context?: Object,
  convert?: boolean,
  language?: Object,
  presence?: string,
  skipFunctions?: boolean,
  stripUnknown?: boolean
}

interface RenameOptions {
  alias?: boolean,
  ignoreUndefined?: boolean,
  multiple?: boolean,
  override?: boolean
}

interface EmailOptions {
  errorLevel?: number | boolean,
  minDomainAtoms?: number,
  tldWhitelist?: string[] | Object
}

interface IpOptions {
  cidr?: string,
  version?: string | string[]
}

interface UriOptions {
  scheme?: string | RegExp | Array<string | RegExp>
}

interface WhenOptions<T> {
  is: T,
  otherwise?: npm$joiBrowser$Schema,
  then?: npm$joiBrowser$Schema
}

interface ReferenceOptions {
  contextPrefix?: string,
  separator?: string
}

interface IPOptions {
  cidr?: string,
  version?: Array<string>
}

interface ValidationError extends Error {
  annotate(stripColorCodes: boolean): string,
  details: ValidationErrorItem[],
  message: string,
  simple(): string
}

interface ValidationErrorItem {
  message: string,
  options?: ValidationOptions,
  path: string,
  type: string
}

interface ValidationResult<T> {
  error: ValidationError,
  value: T
}

declare interface npm$joiBrowser$Schema {}

interface Reference extends npm$joiBrowser$Schema {}

interface AnySchema<T: npm$joiBrowser$Schema> {
  allow(value: mixed, ...values: mixed[]): T,
  allow(values: mixed[]): T,
  concat(schema: T): T,
  default(): T,
  default(value: mixed, description?: string): T,
  description(desc: string): T,
  disallow(value: mixed, ...values: mixed[]): T,
  disallow(values: mixed[]): T,
  empty(schema?: mixed): T,
  equal(value: mixed, ...values: mixed[]): T,
  equal(values: mixed[]): T,
  example(value: mixed): T,
  forbidden(): T,
  invalid(value: mixed, ...values: mixed[]): T,
  invalid(values: mixed[]): T,
  label(name: string): T,
  meta(meta: Object): T,
  not(value: mixed, ...values: mixed[]): T,
  not(values: mixed[]): T,
  notes(notes: string): T,
  notes(notes: string[]): T,
  only(value: mixed, ...values: mixed[]): T,
  only(values: mixed[]): T,
  optional(): T,
  options(options: ValidationOptions): T,
  raw(isRaw?: boolean): T,
  required(): T,
  strict(isStrict?: boolean): T,
  strip(): T,
  tags(notes: string): T,
  tags(notes: string[]): T,
  unit(name: string): T,
  valid(value: any, ...values: any[]): T,
  valid(values: any[]): T,
  when<U>(
    ref: Reference,
    options: WhenOptions<U>
  ): npm$joiBrowser$AlternativesSchema,
  when<U>(
    ref: string,
    options: WhenOptions<U>
  ): npm$joiBrowser$AlternativesSchema
}

declare interface npm$joiBrowser$AlternativesSchema
  extends AnySchema<npm$joiBrowser$AlternativesSchema> {
  try(schemas: npm$joiBrowser$Schema[]): npm$joiBrowser$AlternativesSchema,
  when<T>(
    ref: Reference,
    options: WhenOptions<T>
  ): npm$joiBrowser$AlternativesSchema,
  when<T>(
    ref: string,
    options: WhenOptions<T>
  ): npm$joiBrowser$AlternativesSchema
}

declare interface npm$joiBrowser$ArraySchema
  extends AnySchema<npm$joiBrowser$ArraySchema> {
  items(
    type: npm$joiBrowser$Schema,
    ...types: npm$joiBrowser$Schema[]
  ): npm$joiBrowser$ArraySchema,
  items(types: npm$joiBrowser$Schema[]): npm$joiBrowser$ArraySchema,
  length(limit: number): npm$joiBrowser$ArraySchema,
  max(limit: number): npm$joiBrowser$ArraySchema,
  min(limit: number): npm$joiBrowser$ArraySchema,
  single(enabled?: FalsyValue): npm$joiBrowser$ArraySchema,
  sparse(enabled?: FalsyValue): npm$joiBrowser$ArraySchema,
  unique(): npm$joiBrowser$ArraySchema
}

declare interface npm$joiBrowser$BinarySchema
  extends AnySchema<npm$joiBrowser$BinarySchema> {
  encoding(encoding: BufferEncoding): npm$joiBrowser$BinarySchema,
  length(limit: number): npm$joiBrowser$BinarySchema,
  max(limit: number): npm$joiBrowser$BinarySchema,
  min(limit: number): npm$joiBrowser$BinarySchema
}

declare interface npm$joiBrowser$BooleanSchema
  extends AnySchema<npm$joiBrowser$BooleanSchema> {
  falsy(value: mixed): npm$joiBrowser$BooleanSchema,
  truthy(vlaue: mixed): npm$joiBrowser$BooleanSchema,
  insensitive(enabled?: FalsyValue): npm$joiBrowser$BooleanSchema
}

declare interface npm$joiBrowser$DateSchema
  extends AnySchema<npm$joiBrowser$DateSchema> {
  format(format: string): npm$joiBrowser$DateSchema,
  format(format: string[]): npm$joiBrowser$DateSchema,
  iso(): npm$joiBrowser$DateSchema,
  max(date: Date): npm$joiBrowser$DateSchema,
  max(date: number): npm$joiBrowser$DateSchema,
  max(date: string): npm$joiBrowser$DateSchema,
  max(date: Reference): npm$joiBrowser$DateSchema,
  min(date: Date): npm$joiBrowser$DateSchema,
  min(date: number): npm$joiBrowser$DateSchema,
  min(date: string): npm$joiBrowser$DateSchema,
  min(date: Reference): npm$joiBrowser$DateSchema,
  timestamp(type?: "javascript" | "unix"): npm$joiBrowser$DateSchema
}

declare interface npm$joiBrowser$FunctionSchema
  extends AnySchema<npm$joiBrowser$FunctionSchema> {
  arity(expectedArity: number): npm$joiBrowser$FunctionSchema,
  maxArity(maxArity: number): npm$joiBrowser$FunctionSchema,
  minArity(minArity: number): npm$joiBrowser$FunctionSchema,
  ref(): npm$joiBrowser$FunctionSchema
}

declare interface npm$joiBrowser$NumberSchema
  extends AnySchema<npm$joiBrowser$NumberSchema> {
  greater(limit: number): npm$joiBrowser$NumberSchema,
  greater(limit: Reference): npm$joiBrowser$NumberSchema,
  integer(): npm$joiBrowser$NumberSchema,
  less(limit: number): npm$joiBrowser$NumberSchema,
  less(limit: Reference): npm$joiBrowser$NumberSchema,
  max(limit: number): npm$joiBrowser$NumberSchema,
  max(limit: Reference): npm$joiBrowser$NumberSchema,
  min(limit: number): npm$joiBrowser$NumberSchema,
  min(limit: Reference): npm$joiBrowser$NumberSchema,
  multiple(base: number): npm$joiBrowser$NumberSchema,
  negative(): npm$joiBrowser$NumberSchema,
  positive(): npm$joiBrowser$NumberSchema,
  precision(limit: number): npm$joiBrowser$NumberSchema
}

declare interface npm$joiBrowser$ObjectSchema
  extends AnySchema<npm$joiBrowser$ObjectSchema> {
  and(peer1: string, ...peers: string[]): npm$joiBrowser$ObjectSchema,
  and(peers: string[]): npm$joiBrowser$ObjectSchema,
  assert(
    ref: Reference,
    schema: npm$joiBrowser$Schema,
    message?: string
  ): npm$joiBrowser$ObjectSchema,
  assert(
    ref: string,
    schema: npm$joiBrowser$Schema,
    message?: string
  ): npm$joiBrowser$ObjectSchema,
  keys(schema?: {
    [key: string]: npm$joiBrowser$Schema
  }): npm$joiBrowser$ObjectSchema,
  length(limit: number): npm$joiBrowser$ObjectSchema,
  max(limit: number): npm$joiBrowser$ObjectSchema,
  min(limit: number): npm$joiBrowser$ObjectSchema,
  nand(peer1: string, ...peers: string[]): npm$joiBrowser$ObjectSchema,
  nand(peers: string[]): npm$joiBrowser$ObjectSchema,
  optionalKeys(
    child: string,
    ...children: string[]
  ): npm$joiBrowser$ObjectSchema,
  optionalKeys(children: string): npm$joiBrowser$ObjectSchema,
  optionalKeys(children: string[]): npm$joiBrowser$ObjectSchema,
  or(peer1: string, ...peers: string[]): npm$joiBrowser$ObjectSchema,
  or(peers: string[]): npm$joiBrowser$ObjectSchema,
  pattern(
    regex: RegExp,
    schema: npm$joiBrowser$Schema
  ): npm$joiBrowser$ObjectSchema,
  rename(
    from: string,
    to: string,
    options?: RenameOptions
  ): npm$joiBrowser$ObjectSchema,
  requiredKeys(
    child: string,
    ...children: string[]
  ): npm$joiBrowser$ObjectSchema,
  requiredKeys(children: string): npm$joiBrowser$ObjectSchema,
  requiredKeys(children: string[]): npm$joiBrowser$ObjectSchema,
  type(constructor: Function, name?: string): npm$joiBrowser$ObjectSchema,
  unknown(allow?: boolean): npm$joiBrowser$ObjectSchema,
  with(key: string, peers: string): npm$joiBrowser$ObjectSchema,
  with(key: string, peers: string[]): npm$joiBrowser$ObjectSchema,
  without(key: string, peers: string): npm$joiBrowser$ObjectSchema,
  without(key: string, peers: string[]): npm$joiBrowser$ObjectSchema,
  xor(peer1: string, ...peers: string[]): npm$joiBrowser$ObjectSchema,
  xor(peers: string[]): npm$joiBrowser$ObjectSchema
}

declare interface npm$joiBrowser$StringSchema
  extends AnySchema<npm$joiBrowser$StringSchema> {
  alphanum(): npm$joiBrowser$StringSchema,
  creditCard(): npm$joiBrowser$StringSchema,
  email(options?: EmailOptions): npm$joiBrowser$StringSchema,
  guid(): npm$joiBrowser$StringSchema,
  hex(): npm$joiBrowser$StringSchema,
  hostname(): npm$joiBrowser$StringSchema,
  insensitive(): npm$joiBrowser$StringSchema,
  ip(options?: IpOptions): npm$joiBrowser$StringSchema,
  isoDate(): npm$joiBrowser$StringSchema,
  length(limit: number, encoding?: string): npm$joiBrowser$StringSchema,
  length(limit: Reference, encoding?: string): npm$joiBrowser$StringSchema,
  lowercase(): npm$joiBrowser$StringSchema,
  max(limit: number, encoding?: string): npm$joiBrowser$StringSchema,
  max(limit: Reference, encoding?: string): npm$joiBrowser$StringSchema,
  min(limit: number, encoding?: string): npm$joiBrowser$StringSchema,
  min(limit: Reference, encoding?: string): npm$joiBrowser$StringSchema,
  regex(pattern: RegExp, name?: string): npm$joiBrowser$StringSchema,
  replace(pattern: RegExp, replacement: string): npm$joiBrowser$StringSchema,
  replace(pattern: string, replacement: string): npm$joiBrowser$StringSchema,
  token(): npm$joiBrowser$StringSchema,
  trim(): npm$joiBrowser$StringSchema,
  uppercase(): npm$joiBrowser$StringSchema,
  uri(options?: UriOptions): npm$joiBrowser$StringSchema,
  valid(value: string, ...values: string[]): npm$joiBrowser$StringSchema,
  valid(values: string[]): npm$joiBrowser$StringSchema
}

declare module "joi-browser" {
  declare module.exports: {
    alternatives(
      type1: npm$joiBrowser$Schema,
      type2: npm$joiBrowser$Schema,
      ...types: npm$joiBrowser$Schema[]
    ): npm$joiBrowser$Schema,
    alternatives(types: npm$joiBrowser$Schema[]): npm$joiBrowser$Schema,
    any(): npm$joiBrowser$Schema,
    array(): npm$joiBrowser$ArraySchema,
    assert(
      value: any,
      schema: npm$joiBrowser$Schema,
      message?: string | Error
    ): void,
    binary(): npm$joiBrowser$BinarySchema,
    bool(): npm$joiBrowser$BooleanSchema,
    boolean(): npm$joiBrowser$BooleanSchema,
    compile(schema: Object | mixed[]): npm$joiBrowser$Schema,
    date(): npm$joiBrowser$DateSchema,
    func(): npm$joiBrowser$FunctionSchema,
    number(): npm$joiBrowser$NumberSchema,
    object(schema?: {
      [key: string]: npm$joiBrowser$Schema
    }): npm$joiBrowser$ObjectSchema,
    ref(key: string, options?: ReferenceOptions): Reference,
    string(): npm$joiBrowser$StringSchema,
    validate<T>(
      value: T,
      schema: npm$joiBrowser$Schema,
      callback: (err: ValidationError, value: T) => void
    ): void,
    validate<T>(
      value: T,
      schema: Object,
      callback: (err: ValidationError, value: T) => void
    ): void,
    validate<T>(
      value: T,
      schema: Object,
      options?: ValidationOptions,
      callback?: (err: ValidationError, value: T) => void
    ): ValidationResult<T>
  };
}
