declare class Knex$Transaction<R>
  mixins Knex$QueryBuilder<R>, events$EventEmitter, Promise<R> {
  [[call]]: (tableName: string) => Knex$QueryBuilder<R>;
  commit(connection?: any, value?: any): Promise<R>;
  rollback(?Error): Promise<R>;
  savepoint(connection?: any): Promise<R>;
  raw(sql: string, replacements?: Knex$Object): Promise<R>;
}

declare type Knex$Object = { [key: string]: any, ... };

declare class Knex$Stream extends stream$Readable {
  end(): void;
}

declare type Knex$Raw = string &
  Promise<any> & {
    columnName?: string,
    sql: string,
    stream(): Knex$Stream,
    ...
  };

declare type Knex$QueryBuilderFn<R> = (
  qb: Knex$QueryBuilder<R>
) => Knex$QueryBuilder<R> | void;

declare class Knex$Ref {
  as(name: string): this;
  withSchema(schema: string): this;
}

declare type Knex$Identifier = string | Knex$Ref | Knex$Raw;
declare type Knex$ConditionValue = Knex$Identifier | number;

// An incomplete type of the internal Knex statement representation
declare type Knex$Statement = {
  joinType?: string,
  table?: {
    ref?: string,
    _schema?: string,
    _alias?: string,
    ...
  },
  ...
};

// Can set join condition with an object.
// Ex: qb.join('table1', { 'table1.id': 'table2.table1_id' })
declare type Knex$JoinConditionMap = {
  [leftJoinColumn: string]: Knex$ConditionValue,
  ...,
};

// qb.select({ avg: knex.raw('AVG(table1.size)') }) => SELECT AVG(table1.size) as "avg"
declare type Knex$AliasMap = { [alias: string]: Knex$Identifier, ... };
declare type Knex$SelectIdentifier = Knex$Identifier | Knex$AliasMap;

// Most SQL operators will work here including Array operators and JSON
// operators but these are very database dependent
declare type Knex$ComparisonOperator =
  | '='
  | '>'
  | '>='
  | '<'
  | '<='
  | '<>'
  | '!='
  | 'LIKE'
  | 'ILIKE'
  | 'IS'
  | 'IS DISTINCT FROM'
  | 'IS NOT DISTINCT FROM'
  | string;
declare type Knex$JoinConditionOperator = Knex$ComparisonOperator | Knex$Raw;

declare class Knex$QueryBuilder<R> mixins Promise<R> {
  // Knex internals
  // _statements can be used to inspect existing query statements, including existing table joins
  _statements: $ReadOnlyArray<Knex$Statement>;

  // Knex methods
  andWhere(builder: Knex$QueryBuilderFn<R>): this;
  andWhere(
    column: Knex$Identifier,
    operator: Knex$ComparisonOperator,
    value: any
  ): this;
  andWhere(column: Knex$Identifier, value: any): this;
  andWhereBetween(column: Knex$Identifier, range: number[]): this;
  andWhereExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  andWhereNot(builder: Knex$QueryBuilderFn<R>): this;
  andWhereNot(
    column: Knex$Identifier,
    operator: Knex$ComparisonOperator,
    value: any
  ): this;
  andWhereNot(column: Knex$Identifier, value: any): this;
  andWhereNotBetween(column: Knex$Identifier, range: number[]): this;
  andWhereNotExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw<R>
  ): this;
  andWhereNotIn(column: Knex$Identifier, values: any[]): this;
  andWhereRaw(sql: string, bindings?: Knex$RawBindings): this;
  as(name: string): this;
  avg(column: Knex$Identifier): this;
  avg(object: Knex$AliasMap): this;
  avgDistinct(column: Knex$Identifier): this;
  clearSelect(): this;
  clearWhere(): this;
  column(...key: Knex$Identifier[]): this;
  column(key: Knex$Identifier[]): this;
  count(column?: Knex$Identifier): this;
  countDistinct(column: Knex$Identifier): this;
  crossJoin(table: Knex$Identifier): this;
  // Note: Cross join conditions are only supported in MySQL and SQLite3. Not supported in Postgres.
  crossJoin(table: Knex$Identifier, c1: string, c2: string): this;
  crossJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  crossJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  del(): this;
  delete(): this;
  distinct(...columns: Knex$Identifier[]): this;
  first(...key: string[]): this;
  first(key?: string[]): this;
  forShare(): this;
  forUpdate(): this;
  from(table: Knex$Identifier): this;
  from(
    builder: Knex$QueryBuilderFn<R> | Knex$Knex<R> | Knex$QueryBuilder<R>
  ): this;
  fullOuterJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  fullOuterJoin(table: Knex$Identifier, c1: string, c2: string): this;
  fullOuterJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  fullOuterJoin(
    table: Knex$Identifier,
    conditionMap: Knex$JoinConditionMap
  ): this;
  groupBy(...columns: Knex$Identifier[]): this;
  groupBy(column: Knex$Identifier | Knex$Identifier[]): this;
  groupByRaw(sql: string, bindings?: Knex$RawBindings): this;
  having(
    column: Knex$Identifier,
    operator: Knex$ComparisonOperator,
    value: mixed
  ): this;
  having(column: Knex$Identifier, value: mixed): this;
  havingBetween<T>(column: Knex$Identifier, range: [T, T]): this;
  havingExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  havingIn(column: Knex$Identifier, values: mixed[]): this;
  havingNotBetween<T>(column: Knex$Identifier, range: [T, T]): this;
  havingNotExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  havingNotIn(column: Knex$Identifier, values: mixed[]): this;
  havingNotNull(column: Knex$Identifier): this;
  havingNull(column: Knex$Identifier): this;
  havingRaw(sql: string, bindings?: Knex$RawBindings): this;
  innerJoin(
    builder1: Knex$QueryBuilder<R> | Knex$QueryBuilderFn<R>,
    builder2: Knex$QueryBuilderFn<R>
  ): this;
  innerJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  innerJoin(table: Knex$Identifier, c1: string, c2: string): this;
  innerJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  innerJoin(table: Knex$Identifier, conditionMap: Knex$JoinConditionMap): this;
  innerJoin(
    builder: Knex$QueryBuilder<R> | Knex$QueryBuilderFn<R>,
    c1?: string,
    c2?: string
  ): this;
  insert(val: Knex$Object | Knex$Object[]): this;
  into(table: Knex$Identifier, options?: Knex$Object): this;
  join(
    builder1: Knex$QueryBuilder<R> | Knex$QueryBuilderFn<R>,
    builder2: Knex$QueryBuilderFn<R>
  ): this;
  join(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  join(table: Knex$Identifier, c1: string, c2: string): this;
  join(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  join(table: Knex$Identifier, conditionMap: Knex$JoinConditionMap): this;
  join(
    builder: Knex$QueryBuilder<R> | Knex$QueryBuilderFn<R>,
    c1?: string,
    c2?: string
  ): this;
  joinRaw(sql: string, bindings?: Knex$RawBindings): this;
  leftJoin(builder: Knex$QueryBuilder<R>, c1: string, c2: string): this;
  leftJoin(builder: Knex$QueryBuilder<R>): this;
  leftJoin(
    builder1: Knex$QueryBuilder<R>,
    builder2: Knex$QueryBuilderFn<R>
  ): this;
  leftJoin(table: Knex$Identifier | Knex$Knex<R>, c1: string, c2: string): this;
  leftJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  leftJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  leftJoin(table: Knex$Identifier, conditionMap: Knex$JoinConditionMap): this;
  leftOuterJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  leftOuterJoin(table: Knex$Identifier, c1: string, c2: string): this;
  leftOuterJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  leftOuterJoin(
    table: Knex$Identifier,
    conditionMap: Knex$JoinConditionMap
  ): this;
  limit(limit: ?number): this;
  max(column: Knex$Identifier): this;
  max(object: Knex$AliasMap): this;
  min(column: Knex$Identifier): this;
  min(object: Knex$AliasMap): this;
  offset(offset: ?number): this;
  on(builder: Knex$QueryBuilderFn<R>): this;
  on(
    column: Knex$Identifier,
    operator: Knex$JoinConditionOperator,
    value: any
  ): this;
  on(column: Knex$Identifier, value: any): this;
  onBetween(column: Knex$Identifier, values: any[]): this;
  onIn(column: Knex$Identifier, values: any[] | Knex$QueryBuilder<R>): this;
  onNotNull(column: Knex$Identifier): this;
  onNull(column: Knex$Identifier): this;
  orderBy(column: Knex$Identifier, direction?: 'desc' | 'asc'): this;
  orderBy(columns: Array<Knex$Identifier>): this;
  orderByRaw(sql: string, bindings?: Knex$RawBindings): this;
  orOn(builder: Knex$QueryBuilderFn<R> | knex$Raw): this;
  orOn(
    column: Knex$Identifier,
    operator: Knex$JoinConditionOperator,
    value: any
  ): this;
  orOn(column: Knex$Identifier, value: any): this;
  orOnExists(builder: Knex$QueryBuilderFn<R> | Knex$Raw): this;
  orWhere(builder: Knex$QueryBuilderFn<R>): this;
  orWhere(
    column: Knex$Identifier,
    operator: Knex$ComparisonOperator,
    value: any
  ): this;
  orWhere(column: Knex$Identifier, value: any): this;
  orWhereBetween(column: Knex$Identifier, range: number[]): this;
  orWhereExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  orWhereIn(column: Knex$Identifier, values: any[]): this;
  orWhereNot(builder: Knex$QueryBuilderFn<R>): this;
  orWhereNot(
    column: Knex$Identifier,
    operator: Knex$ComparisonOperator,
    value: any
  ): this;
  orWhereNot(column: Knex$Identifier, value: any): this;
  orWhereNotBetween(column: Knex$Identifier, range: number[]): this;
  orWhereNotExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  orWhereNotIn(column: Knex$Identifier, values: any[]): this;
  orWhereNotNull(column: Knex$Identifier): this;
  orWhereNull(column: Knex$Identifier): this;
  orWhereRaw(sql: string, bindings?: Knex$RawBindings): this;
  outerJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  outerJoin(table: Knex$Identifier, c1: string, c2: string): this;
  outerJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  outerJoin(table: Knex$Identifier, conditionMap: Knex$JoinConditionMap): this;
  pluck(column: Knex$Identifier): this;
  returning(...columns: Knex$Identifier[]): this;
  returning(column: Knex$Identifier): this;
  returning(columns: Knex$Identifier[]): this;
  returning(columns: string[]): this;
  rightJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  rightJoin(table: Knex$Identifier, c1: string, c2: string): this;
  rightJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  rightJoin(table: Knex$Identifier, conditionMap: Knex$JoinConditionMap): this;
  rightOuterJoin(table: Knex$Identifier, builder: Knex$QueryBuilderFn<R>): this;
  rightOuterJoin(table: Knex$Identifier, c1: string, c2: string): this;
  rightOuterJoin(
    table: Knex$Identifier,
    c1: string,
    operator: Knex$JoinConditionOperator,
    c2: string
  ): this;
  rightOuterJoin(
    table: Knex$Identifier,
    conditionMap: Knex$JoinConditionMap
  ): this;
  select(): this;
  select(...statements: Knex$SelectIdentifier[]): this;
  select(statements: Knex$SelectIdentifier[]): this;
  stream(): Knex$Stream;
  stream(callback: (stream: Knex$Stream) => any): this;
  sum(column: Knex$Identifier): this;
  sumDistinct(column: Knex$Identifier): this;
  table(table: Knex$Identifier, options?: Knex$Object): this;
  timeout(ms: number, options?: { cancel: boolean, ... }): this;
  toSQL(): { toNative(): { bindings: any[], sql: string, ... }, ... };
  transacting(trx: ?Knex$Transaction<R>): this;
  transaction((trx: Knex$Transaction<R>) => Promise<R> | void): this;
  truncate(): this;
  union(
    builder: Knex$QueryBuilderFn<R> | Knex$Knex<R> | Knex$QueryBuilder<R>
  ): this;
  unionAll(
    builder: Knex$QueryBuilderFn<R> | Knex$Knex<R> | Knex$QueryBuilder<R>
  ): this;
  update(column: string, value: any): this;
  update(val: Knex$Object): this;
  where(builder: Knex$QueryBuilderFn<R>): this;
  where(
    column: Knex$Identifier,
    operator: Knex$ComparisonOperator,
    value: any
  ): this;
  where(column: Knex$Identifier, value: any): this;
  where(object: Knex$Object): this;
  whereBetween(column: Knex$Identifier, range: number[]): this;
  whereExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  whereIn(column: Knex$Identifier, values: any[] | Knex$QueryBuilder<R>): this;
  whereNot(builder: Knex$QueryBuilderFn<R>): this;
  whereNot(
    column: Knex$Identifier,
    operator: Knex$ComparisonOperator,
    value: any
  ): this;
  whereNot(column: Knex$Identifier, value: any): this;
  whereNotBetween(column: Knex$Identifier, range: number[]): this;
  whereNotExists(
    builder: Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  whereNotIn(column: Knex$Identifier, values: any[]): this;
  whereNotNull(column: Knex$Identifier): this;
  whereNull(column: Knex$Identifier): this;
  whereRaw(sql: string, bindings?: Knex$RawBindings): this;
  with(
    alias: string,
    w: string | Knex$QueryBuilderFn<R> | Knex$QueryBuilder<R> | Knex$Raw
  ): this;
  withSchema(schema: string): this;
}

type MigrateConfig = {|
  directory?: string,
  extension?: string,
  tableName?: string,
  disableTransactions?: boolean,
  loadExtensions?: string[],
|};

declare class Knex$Knex<R>
  mixins Knex$QueryBuilder<R>, Promise<R>, events$EventEmitter {
  static (config: Knex$Config): Knex$Knex<R>;
  static QueryBuilder: typeof Knex$QueryBuilder;
  [[call]]: (tableName: string) => Knex$QueryBuilder<R>;
  [[call]]: (queryBuilder: Knex$QueryBuilder<any>) => Knex$QueryBuilder<R>;
  raw(sqlString: string, bindings?: Knex$RawBindings): Knex$Raw;
  ref(name: string | Knex$Raw): Knex$Ref;
  queryBuilder(): Knex$QueryBuilder<R>;
  batchInsert: (
    tableName: string,
    rows: Knex$Object[],
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

declare type Knex$RawBindings =
  | mixed[]
  | { [key: string]: mixed, ... }
  | number
  | string;

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
  connection?: {
    filename?: string,
    ...
  },
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
  declare type Knex = Knex$Knex<any>;
  declare type $QueryBuilder<R> = Knex$QueryBuilder<R>;
  declare module.exports: typeof Knex$Knex;
}
