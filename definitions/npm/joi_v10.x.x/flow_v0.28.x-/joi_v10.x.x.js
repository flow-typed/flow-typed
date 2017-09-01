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
  otherwise?: joi$Schema,
  then?: joi$Schema
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

declare interface joi$Schema {}

interface Reference extends joi$Schema {}

interface AnySchema<T: joi$Schema> {
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
  when<U>(ref: Reference, options: WhenOptions<U>): joi$AlternativesSchema,
  when<U>(ref: string, options: WhenOptions<U>): joi$AlternativesSchema
}

declare interface joi$AlternativesSchema
  extends AnySchema<joi$AlternativesSchema> {
  try(schemas: joi$Schema[]): joi$AlternativesSchema,
  when<T>(ref: Reference, options: WhenOptions<T>): joi$AlternativesSchema,
  when<T>(ref: string, options: WhenOptions<T>): joi$AlternativesSchema
}

declare interface joi$ArraySchema extends AnySchema<joi$ArraySchema> {
  items(type: joi$Schema, ...types: joi$Schema[]): joi$ArraySchema,
  items(types: joi$Schema[]): joi$ArraySchema,
  length(limit: number): joi$ArraySchema,
  max(limit: number): joi$ArraySchema,
  min(limit: number): joi$ArraySchema,
  single(enabled?: FalsyValue): joi$ArraySchema,
  sparse(enabled?: FalsyValue): joi$ArraySchema,
  unique(): joi$ArraySchema
}

declare interface joi$BinarySchema extends AnySchema<joi$BinarySchema> {
  encoding(encoding: BufferEncoding): joi$BinarySchema,
  length(limit: number): joi$BinarySchema,
  max(limit: number): joi$BinarySchema,
  min(limit: number): joi$BinarySchema
}

declare interface joi$BooleanSchema extends AnySchema<joi$BooleanSchema> {
  falsy(value: mixed): joi$BooleanSchema,
  truthy(vlaue: mixed): joi$BooleanSchema,
  insensitive(enabled?: FalsyValue): joi$BooleanSchema
}

declare interface joi$DateSchema extends AnySchema<joi$DateSchema> {
  format(format: string): joi$DateSchema,
  format(format: string[]): joi$DateSchema,
  iso(): joi$DateSchema,
  max(date: Date): joi$DateSchema,
  max(date: number): joi$DateSchema,
  max(date: string): joi$DateSchema,
  max(date: Reference): joi$DateSchema,
  min(date: Date): joi$DateSchema,
  min(date: number): joi$DateSchema,
  min(date: string): joi$DateSchema,
  min(date: Reference): joi$DateSchema,
  timestamp(type?: "javascript" | "unix"): joi$DateSchema
}

declare interface joi$FunctionSchema extends AnySchema<joi$FunctionSchema> {
  arity(expectedArity: number): joi$FunctionSchema,
  maxArity(maxArity: number): joi$FunctionSchema,
  minArity(minArity: number): joi$FunctionSchema,
  ref(): joi$FunctionSchema
}

declare interface joi$NumberSchema extends AnySchema<joi$NumberSchema> {
  greater(limit: number): joi$NumberSchema,
  greater(limit: Reference): joi$NumberSchema,
  integer(): joi$NumberSchema,
  less(limit: number): joi$NumberSchema,
  less(limit: Reference): joi$NumberSchema,
  max(limit: number): joi$NumberSchema,
  max(limit: Reference): joi$NumberSchema,
  min(limit: number): joi$NumberSchema,
  min(limit: Reference): joi$NumberSchema,
  multiple(base: number): joi$NumberSchema,
  negative(): joi$NumberSchema,
  positive(): joi$NumberSchema,
  precision(limit: number): joi$NumberSchema
}

declare interface joi$ObjectSchema extends AnySchema<joi$ObjectSchema> {
  and(peer1: string, ...peers: string[]): joi$ObjectSchema,
  and(peers: string[]): joi$ObjectSchema,
  assert(
    ref: Reference,
    schema: joi$Schema,
    message?: string
  ): joi$ObjectSchema,
  assert(ref: string, schema: joi$Schema, message?: string): joi$ObjectSchema,
  keys(schema?: { [key: string]: joi$Schema }): joi$ObjectSchema,
  length(limit: number): joi$ObjectSchema,
  max(limit: number): joi$ObjectSchema,
  min(limit: number): joi$ObjectSchema,
  nand(peer1: string, ...peers: string[]): joi$ObjectSchema,
  nand(peers: string[]): joi$ObjectSchema,
  optionalKeys(child: string, ...children: string[]): joi$ObjectSchema,
  optionalKeys(children: string): joi$ObjectSchema,
  optionalKeys(children: string[]): joi$ObjectSchema,
  or(peer1: string, ...peers: string[]): joi$ObjectSchema,
  or(peers: string[]): joi$ObjectSchema,
  pattern(regex: RegExp, schema: joi$Schema): joi$ObjectSchema,
  rename(from: string, to: string, options?: RenameOptions): joi$ObjectSchema,
  requiredKeys(child: string, ...children: string[]): joi$ObjectSchema,
  requiredKeys(children: string): joi$ObjectSchema,
  requiredKeys(children: string[]): joi$ObjectSchema,
  type(constructor: Function, name?: string): joi$ObjectSchema,
  unknown(allow?: boolean): joi$ObjectSchema,
  with(key: string, peers: string): joi$ObjectSchema,
  with(key: string, peers: string[]): joi$ObjectSchema,
  without(key: string, peers: string): joi$ObjectSchema,
  without(key: string, peers: string[]): joi$ObjectSchema,
  xor(peer1: string, ...peers: string[]): joi$ObjectSchema,
  xor(peers: string[]): joi$ObjectSchema
}

declare interface joi$StringSchema extends AnySchema<joi$StringSchema> {
  alphanum(): joi$StringSchema,
  creditCard(): joi$StringSchema,
  email(options?: EmailOptions): joi$StringSchema,
  guid(): joi$StringSchema,
  hex(): joi$StringSchema,
  hostname(): joi$StringSchema,
  insensitive(): joi$StringSchema,
  ip(options?: IpOptions): joi$StringSchema,
  isoDate(): joi$StringSchema,
  length(limit: number, encoding?: string): joi$StringSchema,
  length(limit: Reference, encoding?: string): joi$StringSchema,
  lowercase(): joi$StringSchema,
  max(limit: number, encoding?: string): joi$StringSchema,
  max(limit: Reference, encoding?: string): joi$StringSchema,
  min(limit: number, encoding?: string): joi$StringSchema,
  min(limit: Reference, encoding?: string): joi$StringSchema,
  regex(pattern: RegExp, name?: string): joi$StringSchema,
  replace(pattern: RegExp, replacement: string): joi$StringSchema,
  replace(pattern: string, replacement: string): joi$StringSchema,
  token(): joi$StringSchema,
  trim(): joi$StringSchema,
  uppercase(): joi$StringSchema,
  uri(options?: UriOptions): joi$StringSchema,
  valid(value: string, ...values: string[]): joi$StringSchema,
  valid(values: string[]): joi$StringSchema
}

declare module "joi" {
  declare module.exports: {
    alternatives(
      type1: joi$Schema,
      type2: joi$Schema,
      ...types: joi$Schema[]
    ): joi$Schema,
    alternatives(types: joi$Schema[]): joi$Schema,
    any(): joi$Schema,
    array(): joi$ArraySchema,
    assert(value: any, schema: joi$Schema, message?: string | Error): void,
    binary(): joi$BinarySchema,
    bool(): joi$BooleanSchema,
    boolean(): joi$BooleanSchema,
    compile(schema: Object): joi$Schema,
    date(): joi$DateSchema,
    func(): joi$FunctionSchema,
    number(): joi$NumberSchema,
    object(schema?: { [key: string]: joi$Schema }): joi$ObjectSchema,
    ref(key: string, options?: ReferenceOptions): Reference,
    string(): joi$StringSchema,
    validate<T>(
      value: T,
      schema: joi$Schema,
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
