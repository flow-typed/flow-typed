/* @flow */

interface _alasql_Callback {
  (data?: any, err?: Error): void;
}

interface _alasql_Options {
  errorlog: boolean;
  valueof: boolean;
  dropifnotexists: boolean; // drop database in any case
  datetimeformat: string; // how to handle DATE and DATETIME types
  casesensitive: boolean; // table and column names are case sensitive and converted to lower-case
  logtarget: string; // target for log. Values: 'console', 'output', 'id' of html tag
  logprompt: boolean; // print SQL at log
  progress: boolean;
  modifier: any; // values: RECORDSET, VALUE, ROW, COLUMN, MATRIX, TEXTSTRING, INDEX
  columnlookup: number; // how many rows to lookup to define columns
  autovertex: boolean; // create vertex if not found
  usedbo: boolean; // use dbo as current database (for partial T-SQL comaptibility)
  autocommit: boolean; // the AUTOCOMMIT ON | OFF
  cache: boolean; // use cache
  nan: boolean; // check for NaN and convert it to undefined
  tsql: boolean;
  mysql: boolean;
  postgres: boolean;
  oracle: boolean;
  sqlite: boolean;
  orientdb: boolean;
  autoExtFilenameOnRead: boolean;
  autoExtFilenameOnWrite: boolean;
  nocount: boolean; // for SET NOCOUNT OFF
  joinstar: string;
}

// compiled Statement
interface _alasql_Statement {
  (params?: any, cb?: _alasql_Callback, scope?: any): any;
}

// abstract Syntax Tree
interface _alasql_AST {
  compile(databaseid: string): _alasql_Statement;
}

// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/es6-promise/es6-promise.d.ts
interface Thenable<T> {
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => U | Thenable<U>
  ): Thenable<U>;
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => void
  ): Thenable<U>;
  catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}

// From https://github.com/agershun/_alasql_/wiki/User%20Defined%20Functions
interface _alasql_userDefinedFunction {
  (x: any): any;
}

interface _alasql_userDefinedFunctionLookUp {
  [x: string]: _alasql_userDefinedFunction;
}

// From https://github.com/agershun/_alasql_/wiki/User%20Defined%20Functions
interface _alasql_userAggregator {
  (value: any, accumulator: any, stage: number): any;
}

interface _alasql_userAggregatorLookUp {
  [x: string]: _alasql_userAggregator;
}

interface AlaSQL {
  (
    sql?: string | Array<any> | (() => void),
    params?: any,
    cb?: _alasql_Callback
  ): string | number | {} | Array<any> | Thenable<any>;
  options: _alasql_Options;
  error: Error;
  parse(sql: string): _alasql_AST;
  promise(sql: string | Array<any>, params?: any): Thenable<any>;
  fn: _alasql_userDefinedFunctionLookUp;
  aggr: _alasql_userAggregatorLookUp;
  autoval(tablename: string, colname: string, getNext?: boolean): number;
}

declare module "alasql" {
  declare module.exports: AlaSQL;
}
