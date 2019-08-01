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
  otherwise?: npm$joi$Schema,
  then?: npm$joi$Schema
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

declare interface npm$joi$Schema {}

interface Reference extends npm$joi$Schema {}

interface AnySchema<T: npm$joi$Schema> {
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
  when<U>(ref: Reference, options: WhenOptions<U>): npm$joi$AlternativesSchema,
  when<U>(ref: string, options: WhenOptions<U>): npm$joi$AlternativesSchema
}

declare interface npm$joi$AlternativesSchema
  extends AnySchema<npm$joi$AlternativesSchema> {
  try(schemas: npm$joi$Schema[]): npm$joi$AlternativesSchema,
  when<T>(ref: Reference, options: WhenOptions<T>): npm$joi$AlternativesSchema,
  when<T>(ref: string, options: WhenOptions<T>): npm$joi$AlternativesSchema
}

declare interface npm$joi$ArraySchema extends AnySchema<npm$joi$ArraySchema> {
  items(type: npm$joi$Schema, ...types: npm$joi$Schema[]): npm$joi$ArraySchema,
  items(types: npm$joi$Schema[]): npm$joi$ArraySchema,
  length(limit: number): npm$joi$ArraySchema,
  max(limit: number): npm$joi$ArraySchema,
  min(limit: number): npm$joi$ArraySchema,
  single(enabled?: FalsyValue): npm$joi$ArraySchema,
  sparse(enabled?: FalsyValue): npm$joi$ArraySchema,
  unique(): npm$joi$ArraySchema
}

declare interface npm$joi$BinarySchema extends AnySchema<npm$joi$BinarySchema> {
  encoding(encoding: BufferEncoding): npm$joi$BinarySchema,
  length(limit: number): npm$joi$BinarySchema,
  max(limit: number): npm$joi$BinarySchema,
  min(limit: number): npm$joi$BinarySchema
}

declare interface npm$joi$BooleanSchema
  extends AnySchema<npm$joi$BooleanSchema> {
  falsy(value: mixed): npm$joi$BooleanSchema,
  truthy(vlaue: mixed): npm$joi$BooleanSchema,
  insensitive(enabled?: FalsyValue): npm$joi$BooleanSchema
}

declare interface npm$joi$DateSchema extends AnySchema<npm$joi$DateSchema> {
  format(format: string): npm$joi$DateSchema,
  format(format: string[]): npm$joi$DateSchema,
  iso(): npm$joi$DateSchema,
  max(date: Date): npm$joi$DateSchema,
  max(date: number): npm$joi$DateSchema,
  max(date: string): npm$joi$DateSchema,
  max(date: Reference): npm$joi$DateSchema,
  min(date: Date): npm$joi$DateSchema,
  min(date: number): npm$joi$DateSchema,
  min(date: string): npm$joi$DateSchema,
  min(date: Reference): npm$joi$DateSchema,
  timestamp(type?: "javascript" | "unix"): npm$joi$DateSchema
}

declare interface npm$joi$FunctionSchema
  extends AnySchema<npm$joi$FunctionSchema> {
  arity(expectedArity: number): npm$joi$FunctionSchema,
  maxArity(maxArity: number): npm$joi$FunctionSchema,
  minArity(minArity: number): npm$joi$FunctionSchema,
  ref(): npm$joi$FunctionSchema
}

declare interface npm$joi$NumberSchema extends AnySchema<npm$joi$NumberSchema> {
  greater(limit: number): npm$joi$NumberSchema,
  greater(limit: Reference): npm$joi$NumberSchema,
  integer(): npm$joi$NumberSchema,
  less(limit: number): npm$joi$NumberSchema,
  less(limit: Reference): npm$joi$NumberSchema,
  max(limit: number): npm$joi$NumberSchema,
  max(limit: Reference): npm$joi$NumberSchema,
  min(limit: number): npm$joi$NumberSchema,
  min(limit: Reference): npm$joi$NumberSchema,
  multiple(base: number): npm$joi$NumberSchema,
  negative(): npm$joi$NumberSchema,
  positive(): npm$joi$NumberSchema,
  precision(limit: number): npm$joi$NumberSchema
}

declare interface npm$joi$ObjectSchema extends AnySchema<npm$joi$ObjectSchema> {
  and(peer1: string, ...peers: string[]): npm$joi$ObjectSchema,
  and(peers: string[]): npm$joi$ObjectSchema,
  assert(
    ref: Reference,
    schema: npm$joi$Schema,
    message?: string
  ): npm$joi$ObjectSchema,
  assert(
    ref: string,
    schema: npm$joi$Schema,
    message?: string
  ): npm$joi$ObjectSchema,
  keys(schema?: { [key: string]: npm$joi$Schema }): npm$joi$ObjectSchema,
  length(limit: number): npm$joi$ObjectSchema,
  max(limit: number): npm$joi$ObjectSchema,
  min(limit: number): npm$joi$ObjectSchema,
  nand(peer1: string, ...peers: string[]): npm$joi$ObjectSchema,
  nand(peers: string[]): npm$joi$ObjectSchema,
  optionalKeys(child: string, ...children: string[]): npm$joi$ObjectSchema,
  optionalKeys(children: string): npm$joi$ObjectSchema,
  optionalKeys(children: string[]): npm$joi$ObjectSchema,
  or(peer1: string, ...peers: string[]): npm$joi$ObjectSchema,
  or(peers: string[]): npm$joi$ObjectSchema,
  pattern(regex: RegExp, schema: npm$joi$Schema): npm$joi$ObjectSchema,
  rename(
    from: string,
    to: string,
    options?: RenameOptions
  ): npm$joi$ObjectSchema,
  requiredKeys(child: string, ...children: string[]): npm$joi$ObjectSchema,
  requiredKeys(children: string): npm$joi$ObjectSchema,
  requiredKeys(children: string[]): npm$joi$ObjectSchema,
  type(constructor: Function, name?: string): npm$joi$ObjectSchema,
  unknown(allow?: boolean): npm$joi$ObjectSchema,
  with(key: string, peers: string): npm$joi$ObjectSchema,
  with(key: string, peers: string[]): npm$joi$ObjectSchema,
  without(key: string, peers: string): npm$joi$ObjectSchema,
  without(key: string, peers: string[]): npm$joi$ObjectSchema,
  xor(peer1: string, ...peers: string[]): npm$joi$ObjectSchema,
  xor(peers: string[]): npm$joi$ObjectSchema
}

declare interface npm$joi$StringSchema extends AnySchema<npm$joi$StringSchema> {
  alphanum(): npm$joi$StringSchema,
  creditCard(): npm$joi$StringSchema,
  email(options?: EmailOptions): npm$joi$StringSchema,
  guid(): npm$joi$StringSchema,
  hex(): npm$joi$StringSchema,
  hostname(): npm$joi$StringSchema,
  insensitive(): npm$joi$StringSchema,
  ip(options?: IpOptions): npm$joi$StringSchema,
  isoDate(): npm$joi$StringSchema,
  length(limit: number, encoding?: string): npm$joi$StringSchema,
  length(limit: Reference, encoding?: string): npm$joi$StringSchema,
  lowercase(): npm$joi$StringSchema,
  max(limit: number, encoding?: string): npm$joi$StringSchema,
  max(limit: Reference, encoding?: string): npm$joi$StringSchema,
  min(limit: number, encoding?: string): npm$joi$StringSchema,
  min(limit: Reference, encoding?: string): npm$joi$StringSchema,
  regex(pattern: RegExp, name?: string): npm$joi$StringSchema,
  replace(pattern: RegExp, replacement: string): npm$joi$StringSchema,
  replace(pattern: string, replacement: string): npm$joi$StringSchema,
  token(): npm$joi$StringSchema,
  trim(): npm$joi$StringSchema,
  uppercase(): npm$joi$StringSchema,
  uri(options?: UriOptions): npm$joi$StringSchema,
  valid(value: string, ...values: string[]): npm$joi$StringSchema,
  valid(values: string[]): npm$joi$StringSchema
}

declare module "joi" {
  declare module.exports: {
    alternatives(
      type1: npm$joi$Schema,
      type2: npm$joi$Schema,
      ...types: npm$joi$Schema[]
    ): npm$joi$Schema,
    alternatives(types: npm$joi$Schema[]): npm$joi$Schema,
    any(): npm$joi$Schema,
    array(): npm$joi$ArraySchema,
    assert(value: any, schema: npm$joi$Schema, message?: string | Error): void,
    binary(): npm$joi$BinarySchema,
    bool(): npm$joi$BooleanSchema,
    boolean(): npm$joi$BooleanSchema,
    compile(schema: Object | mixed[]): npm$joi$Schema,
    date(): npm$joi$DateSchema,
    func(): npm$joi$FunctionSchema,
    number(): npm$joi$NumberSchema,
    object(schema?: { [key: string]: npm$joi$Schema }): npm$joi$ObjectSchema,
    ref(key: string, options?: ReferenceOptions): Reference,
    string(): npm$joi$StringSchema,
    validate<T>(
      value: T,
      schema: npm$joi$Schema,
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
