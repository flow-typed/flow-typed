declare module "plow-js" {
  declare type PathPartial = string | number;
  declare type Path = PathPartial | Array<PathPartial>;
  declare type Subject = Object;
  declare type Mapper = PathPartial | ((value: any) => any);
  declare type TransformShape = {
    [string]: Function
  };
  declare type BooleanStatementFn = (...args: any) => boolean;

  /**
   * Projections
	 */
  declare function $get(path: Path, subject: Subject): any;
  declare function $get(path: Path): (subject: Subject) => any;

  declare function $count(path: Path, subject: Subject): number;
  declare function $count(path: Path): (subject: Subject) => number;

  declare function $contains(value: any, path: Path, subject: Subject): boolean;
  declare function $contains(
    value: any,
    path: Path
  ): (subject: Subject) => boolean;
  declare function $contains(
    value: any
  ): (path: Path) => (subject: Subject) => boolean;

  declare function $head(path: Path, subject: Subject): any;
  declare function $head(path: Path): (subject: Subject) => any;

  declare function $tail(path: Path, subject: Subject): Array<any>;
  declare function $tail(path: Path): (subject: Subject) => Array<any>;

  declare function $last(path: Path, subject: Subject): any;
  declare function $last(path: Path): (subject: Subject) => any;

  declare function $map(mapper: Mapper, path: Path, subject: Subject): any;
  declare function $map(mapper: Mapper, path: Path): (subject: Subject) => any;
  declare function $map(
    mapper: Mapper
  ): (path: Path) => (subject: Subject) => any;

  declare function $transform(shape: TransformShape, subject: Subject): Object;
  declare function $transform(
    shape: TransformShape
  ): (subject: Subject) => Object;

  declare function $resolve(pointer: Path, subject: Subject): any;
  declare function $resolve(pointer: Path): (subject: Subject) => any;

  // The all-in-one call is not yet supported due to https://github.com/facebook/flow/issues/2443
  // declare function $and(...statementsAndSubject: Array<Function|Subject>): boolean;
  declare function $and(
    ...statements: Array<Function>
  ): (subject: Subject) => boolean;

  // The all-in-one call is not yet supported due to https://github.com/facebook/flow/issues/2443
  // declare function $or(...statementsAndSubject: Array<Function|Subject>): boolean;
  declare function $or(
    ...statements: Array<Function>
  ): (subject: Subject) => boolean;

  declare function $not(
    statement: BooleanStatementFn,
    subject: Subject
  ): boolean;
  declare function $not(
    statement: BooleanStatementFn
  ): (subject: Subject) => boolean;

  /**
   * Migrations
   */
  declare function $set(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: Subject) => Subject;
  declare function $set(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: Subject) => Subject;
  declare function $set(path: Path, value: any, subject: Subject): Subject;

  declare function $merge(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: Subject) => Subject;
  declare function $merge(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: Subject) => Subject;
  declare function $merge(path: Path, value: any, subject: Subject): Subject;

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

  declare function $override(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: Subject) => Subject;
  declare function $override(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: Subject) => Subject;
  declare function $override(path: Path, value: any, subject: Subject): Subject;

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

  /**
   * Connections
   */
  // The all-in-one call is not yet supported due to https://github.com/facebook/flow/issues/2443
  // declare function $all(...statementsAndSubject: Array<Function|Subject>): Subject;
  declare function $all(
    ...statements: Array<Function>
  ): (subject: Subject) => Subject;

  declare function $summarize<R>(
    operations: Array<Function>,
    ...rest: Array<void>
  ): (finisher: (...args: Array<any>) => R) => (subject: Subject) => R;
  declare function $summarize<R>(
    operations: Array<Function>,
    finisher: (...args: Array<any>) => R,
    ...rest: Array<void>
  ): (subject: Subject) => R;
  declare function $summarize<R>(
    operations: Array<Function>,
    finisher: (...args: Array<any>) => R,
    subject: Subject
  ): R;

  declare function $traverse(actor: Function): (subject: Subject) => Subject;
  declare function $traverse(actor: Function, subject: Subject): Subject;

  declare function $log(pathOrSubject: Path | Subject, subject?: Subject): any;
}
