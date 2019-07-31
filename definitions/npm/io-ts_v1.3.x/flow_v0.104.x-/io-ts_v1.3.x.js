//@flow

declare module 'io-ts' {
  //Copy subset of Predicate and Either API from fp-ts (a depedency) here
  declare type Predicate<A> = A => boolean;
  declare class Left<L, A> {
    +_tag: 'Left';
    +value: L;
    map<B>(f: (a: A) => B): Either<L, B>;
    mapLeft<M>(f: (l: L) => M): Either<M, A>;
    getOrElse(a: A): A;
    inspect(): string;
    toString(): string;
    fold<B>(whenLeft: (l: L) => B, whenRight: (a: A) => B): B;
  }
  declare class Right<L, A> {
    +_tag: 'Right';
    +value: A;
    map<B>(f: (a: A) => B): Either<L, B>;
    mapLeft<M>(f: (l: L) => M): Either<M, A>;
    getOrElse(a: A): A;
    inspect(): string;
    toString(): string;
    fold<B>(whenLeft: (l: L) => B, whenRight: (a: A) => B): B;
  }
  declare type Either<L,A> = Left<L,A> | Right<L,A>;

  //Begin exports from the 'io-ts' module
  declare export interface ContextEntry {
    +key: string,
    +type: Decoder<any, any>
  }
  declare export type Context = $ReadOnlyArray<ContextEntry>;
  declare export interface ValidationError {
    +value: mixed,
    +context: Context
  }
  declare export type Errors = Array<ValidationError>;
  declare export type Validation<A> = Either<Errors, A>
  declare export type Is<A> = (m: mixed) => boolean
  declare export type Validate<I, A> = (i: I, context: Context) => Validation<A>
  declare export type Decode<I, A> = (i: I) => Validation<A>
  declare export type Encode<A, O> = (a: A) => O
  declare export type Any = Type<any, any, any>;
  declare export type Mixed = Type<any, any, mixed>;
  declare export type TypeOf<RT: Any> = $PropertyType<RT, '_A'>
  declare export type InputOf<RT: Any> = $PropertyType<RT, '_I'>
  declare export type OutputOf<RT: Any> = $PropertyType<RT, '_O'>

  declare export interface Decoder<I, A> {
    +name: string,
    +validate: Validate<I, A>,
    +decode: Decode<I, A>
  }

  declare export interface Encoder<A, O> {
    +encode: Encode<A, O>
  }

  declare export class Type<A, O = A, I = mixed> implements Decoder<I, A>, Encoder<A, O> {
    +_A: A,
    +_O: O,
    +_I: I,
    +name: string,
    +is: Is<A>,
    +validate: Validate<I,A>,
    +encode: Encode<A,O>,
    constructor(
      /** a unique name for this runtime type */
      name: string,
      /** a custom type guard */
      is: Is<A>,
      /** succeeds if a value of type I can be decoded to a value of type A */
      validate: Validate<I, A>,
      /** converts a value of type A to a value of type O */
      encode: Encode<A, O>
    ): Type<A, O, I> ,
    pipe<B>(ab: Type<B, A, A>, name?: string): Type<B, O, I>,
    asDecoder(): Decoder<I, A>,
    asEncoder(): Encoder<A, O>,
    /** a version of `validate` with a default context */
    decode(i: I): Validation<A>,
  }

  declare export var identity: <A>(a: A) => A;

  declare export var getFunctionName: (f: Function) => string;

  declare export var getContextEntry: (key: string, type: Decoder<any, any>) => ContextEntry;

  declare export var getValidationError: (value: mixed, context: Context) => ValidationError;

  declare export var getDefaultContext: (type: Decoder<any, any>) => Context;

  declare export var appendContext: (c: Context, key: string, type: Decoder<any, any>) => Context

  declare export var failures: <T>(errors: Errors) => Validation<T>;

  declare export var failure: <T>(value: mixed, context: Context) => Validation<T>;

  declare export var success: <T>(value: T) => Validation<T>;

  declare export class NullType extends Type<null> {
    +_tag: 'NullType',
    constructor(): NullType,
  }


  /** @alias `null` */
  declare export var nullType: NullType;

  declare export class UndefinedType extends Type<typeof undefined> {
    +_tag: 'UndefinedType',
    constructor(): UndefinedType
  }


  declare export var undefinedType: UndefinedType;

  declare export class VoidType extends Type<void> {
    +_tag: 'VoidType',
    constructor(): VoidType
  }

  /** @alias `void` */
  declare export var voidType: VoidType

  declare export class AnyType extends Type<any> {
    +_tag: 'AnyType',
  }

  declare export var any: AnyType;

  declare export class StringType extends Type<string> {
    +_tag: 'StringType',
  }

  declare export var string: StringType;

  declare export class NumberType extends Type<number> {
    +_tag: 'NumberType'
  }

  declare export var number: NumberType

  declare export class BooleanType extends Type<boolean> {
    +_tag: 'BooleanType' 
  }

  declare export var boolean: BooleanType 

  declare export class AnyArrayType extends Type<Array<mixed>> {
    +_tag: 'AnyArrayType' 
  }

  declare export var arrayType: AnyArrayType 

  declare export class AnyDictionaryType extends Type<{ [key: string]: mixed, ... }> {
    +_tag: 'AnyDictionaryType' 
  }

  declare export var Dictionary: AnyDictionaryType 

  declare export class ObjectType extends Type<Object> {
    +_tag: 'ObjectType'
  }

  declare export var object: ObjectType 

  declare export class FunctionType extends Type<Function> {
    +_tag: 'FunctionType' 
  }

  declare export var Function: FunctionType 

  //
  // refinements
  //

  declare export class RefinementType<RT: Any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'RefinementType',
    +type: RT,
    constructor(
      name: string,
      is: $PropertyType<RefinementType<RT, A, O, I>,'is'>,
      validate: $PropertyType<RefinementType<RT, A, O, I>,'validate'>,
      encode: $PropertyType<RefinementType<RT, A, O, I>,'encode'>,
      type: RT,
      predicate: Predicate<A>
    ): RefinementType<RT, A, O, I>
  }

  declare export function refinement <T, OpaqueType: T>(
    type: Type<T>,
    predicate: Predicate<T>,
    name?: string 
  ): RefinementType<Type<T>, OpaqueType, OpaqueType, InputOf<Type<T>>>


  declare opaque type Int: number;

  declare export var Integer: RefinementType<Type<Int>, Int, Int, mixed>;

  //
  // literals
  //
  declare export class LiteralType<V: string | number | boolean> extends Type<V> {
    +_tag: 'LiteralType',
    +value: V,
    constructor(
      name: string,
      is: $PropertyType<LiteralType<V>, 'is'>,
      validate: $PropertyType<LiteralType<V>, 'validate'>,
      encode: $PropertyType<LiteralType<V>, 'encode'>,
      value: V
    ): LiteralType<V>
  }

  declare export var literal:  <V: string | number | boolean>(
    value: V,
    name?: string
  ) => LiteralType<V>

  //
  // keyof
  //

  declare export class KeyofType<+D: { [key: string]: mixed, ... }> extends Type<$Keys<D>> {
    +_tag: 'KeyofType' ,
    +keys: D,
    constructor(
      name: string,
      is: $PropertyType<KeyofType<D>,'is'>,
      validate: $PropertyType<KeyofType<D>,'validate'>,
      encode: $PropertyType<KeyofType<D>,'encode'>,
      keys: D
    ): KeyofType<D>
  }

  declare export var keyof: <D:{ [key: string]: mixed, ... }>(
    keys: D,
    name?: string 
  ) => KeyofType<D>


  //
  // recursive types
  //
  declare export class RecursiveType<RT:Any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'RecursiveType',
    +runDefinition: () => RT,
    constructor(
      name: string,
      is: $PropertyType<RecursiveType<RT, A, O, I>,'is'>,
      validate: $PropertyType<RecursiveType<RT, A, O, I>,'validate'>,
      encode: $PropertyType<RecursiveType<RT, A, O, I>,'encode'>,
      runDefinition: () => RT
    ): RecursiveType<RT,A,O,I>,
    type(): RT
  }

  declare export var recursion: <A, O, I, RT: Type<A, O, I>>(
    name: string,
    definition: (self: RT) => RT
  ) => RecursiveType<RT, A, O, I>

  //
  // arrays
  //

  declare export class ArrayType<RT:Any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'ArrayType',
    +type: RT,
    constructor(
      name: string,
      is: $PropertyType<ArrayType<RT, A, O, I>,'is'>,
      validate: $PropertyType<ArrayType<RT, A, O, I>,'validate'>,
      encode: $PropertyType<ArrayType<RT, A, O, I>,'encode'>,
      type: RT
    ): ArrayType<RT, A, O, I>
  }

  declare export var array: <RT: Mixed>(
    type: RT,
    name?: string,
  ) => ArrayType<RT, Array<TypeOf<RT>>, Array<OutputOf<RT>>, mixed>


  //
  // interfaces
  //

  declare export class InterfaceType<P, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'InterfaceType',
    props: P,
    constructor(
      name: string,
      is: $PropertyType<InterfaceType<P, A, O, I>,'is'>,
      validate: $PropertyType<InterfaceType<P, A, O, I>,'validate'>,
      encode: $PropertyType<InterfaceType<P, A, O, I>,'encode'>,
      props: P
    ): InterfaceType<P,A,O,I>
  }

  declare export type AnyProps = { [key: string]: Any, ... }

  declare export type TypeOfProps<P: AnyProps> = $ObjMap<P, <V: Any>(v: V) => TypeOf<V>>;

  declare export type OutputOfProps<P: AnyProps> = $ObjMap<P, <V: Any>(v: V) => OutputOf<V>>;

  declare export type Props = { +[key: string]: Mixed, ... }

  /** @alias `interface` */
  declare export var type: <P: Props>(
    props: P,
    name?: string
  ) => InterfaceType<
    { ...P, ... },
    $ObjMap<{ ...P, ... }, <V: Any>(v: V) => $PropertyType<V, '_A'>>,
    $ObjMap<{ ...P, ... }, <V: Any>(v: V) => $PropertyType<V, '_O'>>, 
    mixed
  >;


  //
  // partials
  //

  declare export class PartialType<P, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'PartialType',
    props: P,
    constructor(
      name: string,
      is: $PropertyType<PartialType<P, A, O, I>,'is'>,
      validate: $PropertyType<PartialType<P, A, O, I>,'validate'>,
      encode: $PropertyType<PartialType<P, A, O, I>,'encode'>,
      props: P
    ): PartialType<P,A,O,I>
  }

  declare export var partial: <P: Props>(
    props: P,
    name?: string
  ) => PartialType<
    { ...$Rest<P, {...}>, ... },
    $ObjMap<{ ...$Rest<P, {...}>, ... }, <V: Any>(v: V) => $PropertyType<V, '_A'>>, 
    $ObjMap<{ ...$Rest<P, {...}>, ... }, <V: Any>(v: V) => $PropertyType<V, '_O'>>, 
    mixed
  >;

  //
  // dictionaries
  //
  declare export class DictionaryType<D: Any, C: Any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'DictionaryType',
    +domain: D,
    +codomain: C,
    constructor(
      name: string,
      is: $PropertyType<DictionaryType<D, C, A, O, I>,'is'>,
      validate: $PropertyType<DictionaryType<D, C, A, O, I>,'validate'>,
      encode: $PropertyType<DictionaryType<D, C, A, O, I>,'encode'>,
      domain: D,
      codomain: C
    ): DictionaryType<D,C,A,O,I>
  }

  declare export type TypeOfDictionary<D: Any, C: Any> = { [K: TypeOf<D>]: TypeOf<C>, ... }

  declare export type OutputOfDictionary<D: Any, C: Any> = { [K: OutputOf<D>]: OutputOf<C>, ... }

  declare export var dictionary: <D: Mixed, C: Mixed>(
    domain: D,
    codomain: C,
    name?: string 
  ) => DictionaryType<D, C, TypeOfDictionary<D, C>, OutputOfDictionary<D, C>, mixed> 

  //
  // unions
  //
  declare export class UnionType<RTS: any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'UnionType',
    +types: RTS,
    constructor(
      name: string,
      is: $PropertyType<UnionType<RTS, A, O, I>,'is'>,
      validate: $PropertyType<UnionType<RTS, A, O, I>,'validate'>,
      encode: $PropertyType<UnionType<RTS, A, O, I>,'encode'>,
      types: RTS
    ): UnionType<RTS,A,O,I>
  }

  declare export function union<A: Mixed, B: Mixed, C: Mixed, D: Mixed, E: Mixed>(
    types: [A, B, C, D, E],
    name?: string
  ): UnionType<
    [A, B, C, D, E],
    $PropertyType<A, '_A'> | $PropertyType<B, '_A'> | $PropertyType<C, '_A'> | $PropertyType<D, '_A'> | $PropertyType<E, '_A'>,
    $PropertyType<A, '_O'> | $PropertyType<B, '_O'> | $PropertyType<C, '_O'> | $PropertyType<D, '_O'> | $PropertyType<E, '_O'>,
    mixed
  >;

  declare export function union<A: Mixed, B: Mixed, C: Mixed, D: Mixed>(
    types: [A, B, C, D],
    name?: string
  ): UnionType<
    [A, B, C, D],
    $PropertyType<A, '_A'> | $PropertyType<B, '_A'> | $PropertyType<C, '_A'> | $PropertyType<D, '_A'>,
    $PropertyType<A, '_O'> | $PropertyType<B, '_O'> | $PropertyType<C, '_O'> | $PropertyType<D, '_O'>,
    mixed
  >
  declare export function union<A: Mixed, B: Mixed, C: Mixed>(
    types: [A, B, C],
    name?: string
  ): UnionType<
    [A, B, C], 
    $PropertyType<A, '_A'> | $PropertyType<B, '_A'> | $PropertyType<C, '_A'>, 
    $PropertyType<A, '_O'> | $PropertyType<B, '_O'> | $PropertyType<C, '_O'>, 
    mixed
  >
  declare export function union<A: Mixed, B: Mixed>(
    types: [A, B],
    name?: string
  ): UnionType<
    [A, B], 
    $PropertyType<A, '_A'> | $PropertyType<B, '_A'>,
    $PropertyType<A, '_O'> | $PropertyType<B, '_O'>, 
    mixed
  >

  //
  // intersections
  //

  declare export class IntersectionType<RTS: any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'IntersectionType',
    +types: RTS,
    constructor(
      name: string,
      is: $PropertyType<IntersectionType<RTS, A, O, I>,'is'>,
      validate: $PropertyType<IntersectionType<RTS, A, O, I>,'validate'>,
      encode: $PropertyType<IntersectionType<RTS, A, O, I>,'encode'>,
      types: RTS
    ): IntersectionType<RTS,A,O,I>
  }

  declare export function intersection<A: Mixed, B: Mixed, C: Mixed, D: Mixed, E: Mixed>(
    types: [A, B, C, D, E],
    name?: string
  ): IntersectionType<
    [A, B, C, D, E],
    $PropertyType<A, '_A'> & $PropertyType<B, '_A'> & $PropertyType<C, '_A'> & $PropertyType<D, '_A'> & $PropertyType<E, '_A'>,
    $PropertyType<A, '_O'> & $PropertyType<B, '_O'> & $PropertyType<C, '_O'> & $PropertyType<D, '_O'> & $PropertyType<E, '_O'>,
    mixed
  >;
  declare export function intersection<A: Mixed, B: Mixed, C: Mixed, D: Mixed>(
    types: [A, B, C, D],
    name?: string
  ): IntersectionType<
    [A, B, C, D],
    $PropertyType<A, '_A'> & $PropertyType<B, '_A'> & $PropertyType<C, '_A'> & $PropertyType<D, '_A'>,
    $PropertyType<A, '_O'> & $PropertyType<B, '_O'> & $PropertyType<C, '_O'> & $PropertyType<D, '_O'>,
    mixed
  >
  declare export function intersection<A: Mixed, B: Mixed, C: Mixed>(
    types: [A, B, C],
    name?: string
  ): IntersectionType<
    [A, B, C], 
    $PropertyType<A, '_A'> & $PropertyType<B, '_A'> & $PropertyType<C, '_A'>, 
    $PropertyType<A, '_O'> & $PropertyType<B, '_O'> & $PropertyType<C, '_O'>, 
    mixed
  >
  declare export function intersection<A: Mixed, B: Mixed>(
    types: [A, B],
    name?: string
  ): IntersectionType<
    [A, B], 
    $PropertyType<A, '_A'> & $PropertyType<B, '_A'>, 
    $PropertyType<A, '_O'> & $PropertyType<B, '_O'>, 
    mixed
  >

  //
  // tuples
  //

  declare export class TupleType<RTS: any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'TupleType',
    +types: RTS,
    constructor(
      name: string,
      is: $PropertyType<TupleType<RTS, A, O, I>,'is'>,
      validate: $PropertyType<TupleType<RTS, A, O, I>,'validate'>,
      encode: $PropertyType<TupleType<RTS, A, O, I>,'encode'>,
      types: RTS
    ): TupleType<RTS,A,O,I>
  }

  declare export function tuple<A: Mixed, B: Mixed, C: Mixed, D: Mixed, E: Mixed>(
    types: [A, B, C, D, E],
    name?: string
  ): TupleType<
    [A, B, C, D, E],
    [$PropertyType<A, '_A'>, $PropertyType<B, '_A'>, $PropertyType<C, '_A'>, $PropertyType<D, '_A'>, $PropertyType<E, '_A'>],
    [$PropertyType<A, '_O'>, $PropertyType<B, '_O'>, $PropertyType<C, '_O'>, $PropertyType<D, '_O'>, $PropertyType<E, '_O'>],
    mixed
  >
  declare export function tuple<A: Mixed, B: Mixed, C: Mixed, D: Mixed>(
    types: [A, B, C, D],
    name?: string
  ): TupleType<
    [A, B, C, D],
    [$PropertyType<A, '_A'>, $PropertyType<B, '_A'>, $PropertyType<C, '_A'>, $PropertyType<D, '_A'>],
    [$PropertyType<A, '_O'>, $PropertyType<B, '_O'>, $PropertyType<C, '_O'>, $PropertyType<D, '_O'>],
    mixed
  >
  declare export function tuple<A: Mixed, B: Mixed, C: Mixed>(
    types: [A, B, C],
    name?: string
  ): TupleType<
    [A, B, C],
    [$PropertyType<A, '_A'>, $PropertyType<B, '_A'>, $PropertyType<C, '_A'>], 
    [$PropertyType<A, '_O'>, $PropertyType<B, '_O'>, $PropertyType<C, '_O'>]
    , mixed
    >
  declare export function tuple<A: Mixed, B: Mixed>(
    types: [A, B],
    name?: string
  ): TupleType<
    [A, B],
    [$PropertyType<A, '_A'>, $PropertyType<B, '_A'>],
    [$PropertyType<A, '_O'>, $PropertyType<B, '_O'>],
    mixed
    >
  //
  // strict types
  //

  declare export class StrictType<P, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'StrictType',
    +props: P,
    constructor(
      name: string,
      is: $PropertyType<StrictType<P, A, O, I>,'is'>,
      validate: $PropertyType<StrictType<P, A, O, I>,'validate'>,
      encode: $PropertyType<StrictType<P, A, O, I>,'encode'>,
      props: P
    ): StrictType<P,A,O,I>
  }

  /**
   * Specifies that only the given properties are allowed
   * @deprecated use `exact` instead
   */
  declare export var strict: <P: Props>(
    props: P,
    name?: string 
  ) => StrictType<
    $Exact<P>, 
    $Exact<$ObjMap<P, <V: Any>(v: V) => $PropertyType<V, '_A'>>>,
    $Exact<$ObjMap<P, <V: Any>(v: V) => $PropertyType<V, '_O'>>>,
    mixed
  >;

  //
  // read only objects
  //
  declare export class ReadonlyType<+RT: Any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'ReadonlyType',
    +type: RT,
    constructor(
      name: string,
      is: $PropertyType<ReadonlyType<RT, A, O, I>,'is'>,
      validate: $PropertyType<ReadonlyType<RT, A, O, I>,'validate'>,
      encode: $PropertyType<ReadonlyType<RT, A, O, I>,'encode'>,
      type: RT
    ): ReadonlyType<RT,A,O,I>
  }

  declare export function readonly<RT: Props>(
    type: InterfaceType<RT>,
    name?: string
  ): ReadonlyType<
    InterfaceType<$ReadOnly<RT>>, 
    $ReadOnly<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_A'>>>,
    $ReadOnly<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_O'>>>,
    mixed
  >;
  declare export function readonly<RT: Props>(
    type: PartialType<RT>,
    name?: string
  ): ReadonlyType<
    PartialType<$ReadOnly<RT>>, 
    $ReadOnly<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_A'>>>,
    $ReadOnly<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_O'>>>,
    mixed
  >;
  declare export function readonly<RT: Props>(
    type: StrictType<RT>,
    name?: string
  ): ReadonlyType<
    StrictType<$ReadOnly<RT>>, 
    $ReadOnly<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_A'>>>,
    $ReadOnly<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_O'>>>,
    mixed
  >;

  declare export class ReadonlyArrayType<+RT: Any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'ReadonlyArrayType',
    +type: RT,
    constructor(
      name: string,
      is: $PropertyType<ReadonlyArrayType<RT, A, O, I>,'is'>,
      validate: $PropertyType<ReadonlyArrayType<RT, A, O, I>,'validate'>,
      encode: $PropertyType<ReadonlyArrayType<RT, A, O, I>,'encode'>,
      type: RT
    ): ReadonlyArrayType<RT,A,O,I>
  }

  declare export var readonlyArray: <+RT: Mixed>(
    type: RT,
    name?: string
  ) => ReadonlyArrayType<
    RT,
    $ReadOnlyArray<$PropertyType<RT, '_A'>>,
    $ReadOnlyArray<$PropertyType<RT, '_O'>>, 
    mixed
    >;

  //
  // tagged unions
  //

  declare export type TaggedProps<Tag: string> = { [K: Tag]: LiteralType<any>, ... }
  declare export type TaggedRefinement<Tag: string, A, O = A> = RefinementType<Tagged<Tag>, A, O>;
  declare export type TaggedUnion<Tag: string, A, O = A> = UnionType<Array<Tagged<Tag>>, A, O>;
  declare export type TaggedIntersectionArgument<Tag: string> =
    | [Tagged<Tag>]
    | [Tagged<Tag>, Mixed]
    | [Mixed, Tagged<Tag>]
    | [Tagged<Tag>, Mixed, Mixed]
    | [Mixed, Tagged<Tag>, Mixed]
    | [Mixed, Mixed, Tagged<Tag>]
    | [Tagged<Tag>, Mixed, Mixed, Mixed]
    | [Mixed, Tagged<Tag>, Mixed, Mixed]
    | [Mixed, Mixed, Tagged<Tag>, Mixed]
    | [Mixed, Mixed, Mixed, Tagged<Tag>]
    | [Tagged<Tag>, Mixed, Mixed, Mixed, Mixed]
    | [Mixed, Tagged<Tag>, Mixed, Mixed, Mixed]
    | [Mixed, Mixed, Tagged<Tag>, Mixed, Mixed]
    | [Mixed, Mixed, Mixed, Tagged<Tag>, Mixed]
    | [Mixed, Mixed, Mixed, Mixed, Tagged<Tag>]
  declare export type TaggedIntersection<Tag: string, A, O = A>
    = IntersectionType<TaggedIntersectionArgument<Tag>, A, O>;
  declare export type TaggedExact<Tag: string> = ExactType<Tagged<Tag>>;
  declare export type Tagged<Tag: string, A = any, O = A> =
    | InterfaceType<TaggedProps<Tag>, A, O>
    | StrictType<TaggedProps<Tag>, A, O>
    | TaggedRefinement<Tag, A, O>
    | TaggedUnion<Tag, A, O>
    | TaggedIntersection<Tag, A, O>
    | TaggedExact<Tag>
    | RecursiveType<any, A, O>

  declare export var isTagged: <Tag: string>(tag: Tag) => ((type: Mixed) => boolean);

  declare export var getTagValue: <Tag: string>(tag: Tag) => ((type: Tagged<Tag>) => string | number | boolean);

  //
  // exact types
  //

  declare export class ExactType<RT: Any, A = any, O = A, I = mixed> extends Type<A, O, I> {
    +_tag: 'ExactType',
    +type: RT,
    constructor(
      name: string,
      is: $PropertyType<ExactType<RT, A, O, I>,'is'>,
      validate: $PropertyType<ExactType<RT, A, O, I>,'validate'>,
      encode: $PropertyType<ExactType<RT, A, O, I>,'encode'>,
      type: RT
    ): ExactType<RT,A,O,I>
  }

  declare export type HasPropsRefinement = RefinementType<HasProps, any, any, any>;
  declare export type HasPropsReadonly = ReadonlyType<HasProps, any, any, any>;
  declare export type HasPropsIntersection = IntersectionType<Array<HasProps>, any, any, any>;
  declare export type HasProps =
    | HasPropsRefinement
    | HasPropsReadonly
    | HasPropsIntersection
    | InterfaceType<any, any, any, any>
    | StrictType<any, any, any, any>
    | PartialType<any, any, any, any>

  declare export function exact<RT: Props>(
    type: InterfaceType<RT>,
    name?: string
  ): ExactType<
    InterfaceType<$Exact<RT>>, 
    $Exact<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_A'>>>,
    $Exact<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_O'>>>,
    mixed
  >;
  declare export function exact<RT: Props>(
    type: PartialType<RT>,
    name?: string
  ): ExactType<
    PartialType<$Exact<RT>>, 
    $Exact<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_A'>>>,
    $Exact<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_O'>>>,
    mixed
  >;
  declare export function exact<RT: Props>(
    type: StrictType<RT>,
    name?: string
  ): ExactType<
    StrictType<$Exact<RT>>, 
    $Exact<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_A'>>>,
    $Exact<$ObjMap<RT, <V: Any>(v: V) => $PropertyType<V, '_O'>>>,
    mixed
  >;

  /** Drops the runtime type "kind" */
  declare export function clean<A, O, I>(type: Type<A, O, I>): Type<A, O, I>;

  declare export type PropsOf<T: { props: any, ... }> = $PropertyType<T,'props'>;

  declare export { nullType as null, undefinedType as undefined, arrayType as Array, type as interface, voidType as void }
}
