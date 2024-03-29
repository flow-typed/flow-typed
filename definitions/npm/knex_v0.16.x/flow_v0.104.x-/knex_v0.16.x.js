declare class Knex$Transaction<R>
  mixins Knex$QueryBuilder<R>, events$EventEmitter, Promise<R> {
  [[call]]: (tableName: string) => Knex$QueryBuilder<R>;
  commit(connection?: any, value?: any): Promise<R>;
  rollback(?Error): Promise<R>;
  savepoint(connection?: any): Promise<R>;
}

declare class Knex$Raw<R>
  mixins events$EventEmitter, Promise<R> {
    wrap(before: string, after: string): this
}

declare type Knex$QueryBuilderFn<R> = (
  qb: Knex$QueryBuilder<R>
) => Knex$QueryBuilder<R> | void;

declare class Knex$QueryBuilder<R> mixins Promise<R> {
  clearSelect(): this;
  clearWhere(): this;
  clearOrder(): this;
  clearCounters(): this;
  select(key?: string[]): this;
  select(...key: string[]): this;
  timeout(ms: number, options?: { cancel: boolean, ... }): this;
  column(key: string[]): this;
  column(...key: string[]): this;
  with(alias: string, w: string | Knex$QueryBuilderFn<R>): this;
  withSchema(schema: string): this;
  returning(column: string): this;
  returning(...columns: string[]): this;
  returning(columns: string[]): this;
  as(name: string): this;
  transacting(trx: ?Knex$Transaction<R>): this;
  transaction((trx: Knex$Transaction<R>) => Promise<R> | void): this;
  where(builder: Knex$QueryBuilderFn<R>): this;
  where(column: string, value: any): this;
  where(column: string, operator: string, value: any): this;
  where(object: { [string]: any, ... }): this;
  whereNot(builder: Knex$QueryBuilderFn<R>): this;
  whereNot(column: string, value: any): this;
  whereNot(column: string, operator: string, value: any): this;
  whereIn(column: string, values: any[]): this;
  whereNotIn(column: string, values: any[]): this;
  whereNull(column: string): this;
  whereNotNull(column: string): this;
  whereExists(builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R>): this;
  whereNotExists(builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R>): this;
  whereBetween<T>(column: string, range: [T, T]): this;
  whereNotBetween<T>(column: string, range: [T, T]): this;
  whereRaw(sql: string, bindings?: Knex$RawBindings): this;
  orWhere(builder: Knex$QueryBuilderFn<R>): this;
  orWhere(column: string, value: any): this;
  orWhere(column: string, operator: string, value: any): this;
  orWhere(object: { [string]: any, ... }): this;
  orWhereNot(builder: Knex$QueryBuilderFn<R>): this;
  orWhereNot(column: string, value: any): this;
  orWhereNot(column: string, operator: string, value: any): this;
  orWhereIn(column: string, values: any[]): this;
  orWhereNotIn(column: string, values: any[]): this;
  orWhereNull(column: string): this;
  orWhereNotNull(column: string): this;
  orWhereExists(builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R>): this;
  orWhereNotExists(builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R>): this;
  orWhereBetween<T>(column: string, range: [T, T]): this;
  orWhereNotBetween<T>(column: string, range: [T, T]): this;
  join(table: string, c1: string, operator: string, c2: string): this;
  join(table: string, c1: string, c2: string): this;
  join(
    builder: Knex$QueryBuilder<R> | Knex$QueryBuilderFn<R>,
    c1?: string,
    c2?: string
  ): this;
  join(table: string, builder: Knex$QueryBuilderFn<R>): this;
  join(table: string, c1: string, operator: string, c2: string): this;
  innerJoin(table: string, c1: string, c2: string): this;
  innerJoin(
    builder: Knex$QueryBuilder<R> | Knex$QueryBuilderFn<R>,
    c1?: string,
    c2?: string
  ): this;
  innerJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  leftJoin(table: string, c1: string, operator: string, c2: string): this;
  leftJoin(table: string, c1: string, c2: string): this;
  leftJoin(builder: Knex$QueryBuilder<R>): this;
  leftJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  leftOuterJoin(table: string, c1: string, operator: string, c2: string): this;
  leftOuterJoin(table: string, c1: string, c2: string): this;
  leftOuterJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  rightJoin(table: string, c1: string, operator: string, c2: string): this;
  rightJoin(table: string, c1: string, c2: string): this;
  rightJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  rightOuterJoin(table: string, c1: string, operator: string, c2: string): this;
  rightOuterJoin(table: string, c1: string, c2: string): this;
  rightOuterJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  outerJoin(table: string, c1: string, operator: string, c2: string): this;
  outerJoin(table: string, c1: string, c2: string): this;
  outerJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  fullOuterJoin(table: string, c1: string, operator: string, c2: string): this;
  fullOuterJoin(table: string, c1: string, c2: string): this;
  fullOuterJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  crossJoin(column: string, c1: string, c2: string): this;
  crossJoin(column: string, c1: string, operator: string, c2: string): this;
  crossJoin(table: string, builder: Knex$QueryBuilderFn<R>): this;
  joinRaw(sql: string, bindings?: Knex$RawBindings): this;
  distinct(): this;
  groupBy(column: string): this;
  groupByRaw(sql: string, bindings?: Knex$RawBindings): this;
  orderBy(
    column: string | Array<string | {
      column: string,
      order?: string,
      ...
    }>,
    direction?: 'desc' | 'asc'
  ): this;

  orderByRaw(sql: string, bindings?: Knex$RawBindings): this;
  offset(offset: number): this;
  limit(limit: number): this;
  having(column: string, operator: string, value: mixed): this;
  havingIn(column: string, values: Array<mixed>): this;
  havingNotIn(column: string, values: Array<mixed>): this;
  havingNull(column: string): this;
  havingNotNull(column: string): this;
  havingExists(builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R>): this;
  havingNotExists(builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R>): this;
  havingBetween<T>(column: string, range: [T, T]): this;
  havingNotBetween<T>(column: string, range: [T, T]): this;
  havingRaw(column: string, operator: string, value: mixed): this;
  havingRaw(column: string, value: mixed): this;
  havingRaw(raw: string, bindings?: Knex$RawBindings): this;
  union(): this;
  unionAll(): this;
  count(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  countDistinct(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  max(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  sum(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  min(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  sumDistinct(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  avg(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  avgDistinct(column?: string | string[] |  { [string]: any, ... } | Knex$Raw<R>): this;
  pluck(column: string): this;
  first(key?: string[]): this;
  first(...key: string[]): this;
  clone(): this;
  modify(
    fn: (queryBuilder: Knex$QueryBuilder<R>, ...args: [any]) => this,
    ...args: [any]
  ): this;
  connection(dbConnection: any): this;

  table(table: string, options?: Object): this;
  from(table: string): this;
  from(
    builder: Knex$QueryBuilderFn<R> | Knex$Knex<R> | Knex$QueryBuilder<R>
  ): this;
  into(table: string, options?: Object): this;
  truncate(): this;
  insert(val: Object | Object[]): this;
  del(): this;
  delete(): this;
  update(column: string, value: any, returning?: Array<string>): this;
  update(val: Object, returning?: Array<string>): this;
  returning(columns: string[]): this;
  forUpdate(): this;
  forShare(): this;
}

type MigrateConfig = {|
  directory?: string,
  extension?: string,
  tableName?: string,
  disableTransactions?: boolean,
  loadExtensions?: Array<string>,
|};

declare class Knex$Knex<R>
  mixins Knex$QueryBuilder<R>, Promise<R>, events$EventEmitter {
  static (config: Knex$Config): Knex$Knex<R>;
  static QueryBuilder: typeof Knex$QueryBuilder;
  [[call]]: (tableName: string) => Knex$QueryBuilder<R>;
  raw(sqlString: string, bindings?: Knex$RawBindings): Knex$Raw<R>;
  batchInsert: (
    tableName: string,
    rows: Array<Object>,
    chunkSize?: number
  ) => Knex$QueryBuilder<R>;
  migrate: {
    make: (name: string, config?: MigrateConfig) => Promise<string>,
    latest: (config?: MigrateConfig) => Promise<void>,
    rollback: (config?: MigrateConfig) => Promise<void>,
    currentVersion: (config?: MigrateConfig) => Promise<string>,
    ...
  };
  client: any;
  destroy(): Promise<void>;
}

declare type Knex$PostgresConfig = {
  client?: 'pg',
  connection?:
    | string
    | {
    host?: string,
    user?: string,
    password?: string,
    database?: string,
    charset?: string,
    ...
  },
  searchPath?: string,
  ...
};

declare type Knex$RawBindings = Array<mixed> | { [key: string]: mixed, ... };

declare type Knex$Mysql2Config = {
  client?: 'mysql2',
  connection?:
    | string
    | {
    host?: string,
    user?: string,
    password?: string,
    database?: string,
    charset?: string,
    ...
  },
  ...
};

declare type Knex$MysqlConfig = {
  client?: 'mysql',
  connection?: {
    host?: string,
    user?: string,
    password?: string,
    database?: string,
    ...
  },
  ...
};

declare type Knex$SqliteConfig = {
  client?: 'sqlite3',
  connection?: { filename?: string, ... },
  ...
};
declare type Knex$Config =
  | Knex$PostgresConfig
  | Knex$MysqlConfig
  | Knex$Mysql2Config
  | Knex$SqliteConfig;

declare module 'knex' {
  declare type Error = {
    name: string,
    length: number,
    severity: string,
    code: string,
    detail: string,
    hint?: string,
    position?: any,
    internalPosition?: any,
    internalQuery?: any,
    where?: any,
    schema: string,
    table: string,
    column?: any,
    dataType?: any,
    constraint?: string,
    file: string,
    line: string,
    routine: string,
    ...
  };
  declare type Transaction<R> = Knex$Transaction<R>;
  declare type Knex = Knex$Knex<any>;
  declare type $QueryBuilder<R> = Knex$QueryBuilder<R>;
  declare module.exports: typeof Knex$Knex;
}
