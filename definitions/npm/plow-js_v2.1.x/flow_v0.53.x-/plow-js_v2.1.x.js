declare module "plow-js" {
  declare type PathPartial = string | number;
  declare type Path = PathPartial | Array<PathPartial>;
  declare type Subject = Object;
  declare type StatementFn = (...args: any) => mixed;
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

  declare type MapMapper = PathPartial | ((value: any) => any);
  declare function $map(mapper: MapMapper, path: Path, subject: Subject): any;
  declare function $map(
    mapper: MapMapper,
    path: Path
  ): (subject: Subject) => any;
  declare function $map(
    mapper: MapMapper
  ): (path: Path) => (subject: Subject) => any;

  declare type TransformShape = {
    [string]: StatementFn
  };
  declare function $transform(shape: TransformShape, subject: Subject): any;
  declare function $transform(shape: TransformShape): (subject: Subject) => any;

  declare function $resolve(pointer: Path, subject: Subject): any;
  declare function $resolve(pointer: Path): (subject: Subject) => any;

  // ToDo: Re-Enable and test once we figure out on how to annotate rest parameters with a custom last argument.
  // declare function $and(...statements: Array<StatementFn>, subject: Subject) => any;
  declare function $and(
    ...statements: Array<StatementFn>
  ): (subject: Subject) => any;

  // ToDo: Re-Enable and test once we figure out on how to annotate rest parameters with a custom last argument.
  // declare function $or(...statements: Array<StatementFn>, subject: Subject) => any;
  declare function $or(
    ...statements: Array<StatementFn>
  ): (subject: Subject) => any;

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
  declare function $add<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => S;
  declare function $add<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => S;
  declare function $add<S>(path: Path, value: any, subject: S): S;

  declare function $drop<S>(
    path: Path,
    ...rest: Array<void>
  ): (subject: S) => S;
  declare function $drop<S>(path: Path, subject: S): S;

  declare function $override<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => S;
  declare function $override<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => S;
  declare function $override<S>(path: Path, value: any, subject: S): S;

  declare function $pop<S>(path: Path, ...rest: Array<void>): (subject: S) => S;
  declare function $pop<S>(path: Path, subject: S): S;

  declare function $remove<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => S;
  declare function $remove<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => S;
  declare function $remove<S>(path: Path, value: any, subject: S): S;

  declare function $set<S>(
    path: Path,
    ...rest: Array<void>
  ): (value: any) => (subject: S) => S;
  declare function $set<S>(
    path: Path,
    value: any,
    ...rest: Array<void>
  ): (subject: S) => S;
  declare function $set<S>(path: Path, value: any, subject: S): S;

  declare function $shift<S>(
    path: Path,
    ...rest: Array<void>
  ): (subject: S) => S;
  declare function $shift<S>(path: Path, subject: S): S;
}
