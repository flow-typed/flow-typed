type __UnaryFn<A, R, AA: A> = (...r: [AA]) => R;
type UnaryFn<A, R> = __UnaryFn<A, R, *>;

type __BinaryPolymorphFn<A, B, R, AA: A, BB: B> = ((
  ...r: [AA]
) => UnaryFn<BB, R>) &
  ((...r: [AA, BB]) => R);
type BinaryPolymorphFn<A, B, R> = __BinaryPolymorphFn<A, B, R, *, *>;

declare type __TernaryPolymorphFn<A, B, C, R, AA: A, BB: B, CC: C> = ((
  ...r: [AA]
) => UnaryFn<BB, UnaryFn<CC, R>>) &
  ((...r: [AA, BB]) => UnaryFn<CC, R>) &
  ((...r: [AA, BB, CC]) => R);
declare type TernaryPolymorphFn<A, B, C, R> = __TernaryPolymorphFn<
  A,
  B,
  C,
  R,
  *,
  *,
  *
>;

declare module "plow-js" {
  declare type PathPartial = string | number;
  declare type Path = PathPartial | Array<PathPartial>;
  declare type Subject = Object;
  declare type Mapper = PathPartial | ((value: any) => any);
  declare type TransformShape = {
    [string]: Function
  };

  /**
   * Projections
	 */
  declare var $get: BinaryPolymorphFn<Path, Subject, any>;
  declare var $count: BinaryPolymorphFn<Path, Subject, number>;
  declare var $contains: TernaryPolymorphFn<any, Path, Subject, boolean>;
  declare var $head: BinaryPolymorphFn<Path, Subject, any>;
  declare var $tail: BinaryPolymorphFn<Path, Subject, Array<any>>;
  declare var $last: BinaryPolymorphFn<Path, Subject, any>;
  declare var $map: TernaryPolymorphFn<Mapper, Path, Subject, any>;
  declare var $transform: BinaryPolymorphFn<TransformShape, Subject, any>;
  declare var $resolve: BinaryPolymorphFn<Path, Subject, any>;
  declare var $not: BinaryPolymorphFn<Function, Subject, boolean>;

  // ToDo: Re-Enable and test once we figure out on how to annotate rest parameters with a custom last argument.
  // declare function $and(...statements: Array<Function>, subject: Subject) => any;
  declare function $and(
    ...statements: Array<Function>
  ): (subject: Subject) => any;

  // ToDo: Re-Enable and test once we figure out on how to annotate rest parameters with a custom last argument.
  // declare function $or(...statements: Array<Function>, subject: Subject) => any;
  declare function $or(
    ...statements: Array<Function>
  ): (subject: Subject) => any;

  /**
   * Migrations
   */
  declare var $set: TernaryPolymorphFn<Path, any, Subject, Subject>;
  declare var $merge: TernaryPolymorphFn<Path, any, Subject, Subject>;

  declare function $add<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => $Shape<S>;
  declare function $add<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $add<S>(path: Path, value: any, subject: S): $Shape<S>;

  declare function $drop<S>(
    path: Path,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $drop<S>(path: Path, subject: S): $Shape<S>;

  declare function $override<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => $Shape<S>;
  declare function $override<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $override<S>(path: Path, value: any, subject: S): $Shape<S>;

  declare function $pop<S>(
    path: Path,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $pop<S>(path: Path, subject: S): $Shape<S>;

  declare function $remove<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => $Shape<S>;
  declare function $remove<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $remove<S>(path: Path, value: any, subject: S): $Shape<S>;

  declare function $shift<S>(
    path: Path,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $shift<S>(path: Path, subject: S): $Shape<S>;

  declare function $unshift<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => $Shape<S>;
  declare function $unshift<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $unshift<S>(path: Path, value: any, subject: S): $Shape<S>;

  declare function $toggle<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => $Shape<S>;
  declare function $toggle<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => $Shape<S>;
  declare function $toggle<S>(path: Path, value: any, subject: S): $Shape<S>;
}
